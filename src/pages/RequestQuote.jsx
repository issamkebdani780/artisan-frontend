import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import apiService from '../services/api';

const RequestQuote = () => {
  const [searchParams] = useSearchParams();
  const serviceId = searchParams.get('serviceId');
  const artisanId = searchParams.get('artisanId');
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    category_id: '',
    phone: '',
    description: '',
    address: '',
    budget: '',
    date: ''
  });
  
  const [artisan, setArtisan] = useState(null);
  
  useEffect(() => {
    if (artisanId) {
      apiService.getArtisanById(artisanId).then(data => setArtisan(data)).catch(console.error);
    }
  }, [artisanId]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await apiService.getCategories();
        setCategories(data);
      } catch (err) {
        console.error('Failed to fetch categories:', err);
      }
    };
    fetchCategories();
  }, []);

  const [service, setService] = useState(null);
  
  useEffect(() => {
    if (serviceId) {
      const fetchService = async () => {
        try {
          const s = await apiService.getServiceById(serviceId);
          setService(s);
          setFormData(prev => ({
            ...prev,
            title: s.title,
            category_id: s.category_id,
            budget: s.base_price,
            description: s.description
          }));
        } catch (err) {
          console.error("Failed to fetch service details:", err);
        }
      };
      fetchService();
    }
  }, [serviceId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      alert('Veuillez vous connecter pour faire une demande');
      navigate('/login/client');
      return;
    }

    setLoading(true);
    try {
      let response;
      if (serviceId) {
        // Direct Booking
        const bookingData = {
          service_id: parseInt(serviceId),
          booking_date: formData.date,
          total_price: formData.budget || (service ? service.base_price : 0)
        };
        response = await apiService.createBooking(bookingData);
        if (response.bookingId) {
          setSuccess(true);
          setTimeout(() => navigate('/dashboard/client/bookings'), 3000);
        }
      } else {
        // Request Quote (Devis)
        const devisData = {
          category_id: formData.category_id || 1, 
          description: formData.description,
          budget: formData.budget,
          date: formData.date,
          artisan_id: artisanId || null
        };
        response = await apiService.createDevis(devisData);
        if (response.devisId) {
          setSuccess(true);
          setTimeout(() => navigate('/dashboard/client/quotes'), 3000);
        }
      }
    } catch (err) {
      console.error(err);
      alert('Erreur lors de l\'envoi de la demande');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
        <div className="max-w-md w-full bg-white p-12 rounded-3xl shadow-xl text-center border border-emerald-100">
          <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
            <span className="material-symbols-outlined text-5xl">check_circle</span>
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-4">Demande Envoyée !</h2>
          <p className="text-slate-500 mb-8 leading-relaxed">
            Votre demande de devis a été transmise avec succès. L'artisan vous contactera sous peu.
          </p>
          <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 animate-[progress_3s_linear]"></div>
          </div>
          <p className="text-xs text-slate-400 mt-4">Redirection vers votre tableau de bord...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 w-full flex-col font-['Outfit',sans-serif]">
      
      {/* Top Navigation Bar */}
      <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 py-4 md:px-20 lg:px-40 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <div className="size-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
            <span className="material-symbols-outlined">construction</span>
          </div>
          <h2 className="text-xl font-bold tracking-tight">Demander un devis</h2>
        </div>
        <button onClick={() => navigate(-1)} className="flex items-center justify-center rounded-full h-10 w-10 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 transition-colors">
          <span className="material-symbols-outlined text-slate-600 dark:text-slate-300">close</span>
        </button>
      </header>

      <main className="flex-1 px-4 py-8 md:px-20 lg:px-40">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
          
          {/* Main Form Section */}
          <div className="flex-1 space-y-8">
            <section>
              <h1 className="text-3xl font-black mb-2 text-slate-900">Parlez-nous de votre projet</h1>
              <p className="text-slate-500 text-lg">Remplissez ce formulaire pour recevoir un devis personnalisé.</p>
              
              {searchParams.get('artisanName') && (
                <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-600 rounded-r-xl flex items-center gap-3">
                  <span className="material-symbols-outlined text-blue-600">person</span>
                  <p className="text-blue-800 font-bold">
                    Vous demandez un devis à : <span className="underline">{decodeURIComponent(searchParams.get('artisanName'))}</span>
                  </p>
                </div>
              )}
            </section>
            
            <form className="space-y-10" onSubmit={handleSubmit}>
              
              {/* Project Details */}
              <div className="space-y-6">
                <h3 className="text-lg font-bold border-b border-slate-100 dark:border-slate-800 pb-2">1. Détails du projet</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-semibold">Titre du projet</span>
                    <input 
                      type="text" 
                      required
                      placeholder="Ex: Rénovation salle de bain" 
                      className="px-4 rounded-xl border-2 border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-blue-600 focus:bg-white dark:focus:bg-slate-800 outline-none h-14 transition-all" 
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-semibold">Catégorie</span>
                    <select 
                      className="px-4 rounded-xl border-2 border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-blue-600 focus:bg-white dark:focus:bg-slate-800 outline-none h-14 transition-all"
                      value={formData.category_id}
                      onChange={(e) => setFormData({...formData, category_id: e.target.value})}
                    >
                      <option value="">Sélectionner une catégorie</option>
                      {categories.filter(c => {
                        if (!artisan || !artisan.specialty) return true;
                        
                        const categoryMap = {
                            'Menuiserie et Bois': ['Menuisier', 'Presseur', 'Décorateur bois', 'fenêtres en bois'],
                            'Ferronnerie et Soudure': ['Ferronnier', 'Soudeur', 'Chaudronnier'],
                            'Plomberie et Réseaux': ['Plombier', 'Monteur de réseaux', 'tuyauterie'],
                            'Électricité et Énergie': ['Électricien', 'solaire', 'câbles', 'tableaux électriques'],
                            'Peinture et Plâtre': ['Peintre', 'Plâtrier', 'Marbrier', 'Vernisseur'],
                            'Maçonnerie et Finitions': ['Maçon', 'Carreleur', 'Crépisseur', 'isolation'],
                            'Mécanique et Machines': ['Mécanicien', 'moteurs', 'électrogènes'],
                            'Couture et Cuir': ['Tailleur', 'Couturière', 'Rapiéceur', 'Cordonnier', 'Maroquinier'],
                            'Verre et Miroiterie': ['verre', 'Verrier', 'Miroitier', 'Vitrier'],
                            'Métiers alimentaires artisanaux': ['Boulanger', 'Pâtissier', 'Fromager', 'Apiculteur', 'conserveur'],
                            'Jardinage et Espaces Verts': ['Jardinier', 'espaces verts', 'jardins', 'irrigation', 'Élagueur', 'palmiers']
                        };
                        const keys = categoryMap[c.name] || [c.name.substring(0, 5).toLowerCase()];
                        const spec = artisan.specialty.toLowerCase();
                        return keys.some(k => spec.includes(k.toLowerCase())) || spec.includes(c.name.toLowerCase());
                      }).map(c => (
                        <option key={c.id} value={c.id}>{c.name}</option>
                      ))}
                    </select>
                  </label>
                  <label className="flex flex-col gap-2 md:col-span-2">
                    <span className="text-sm font-semibold">Numéro de téléphone</span>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-4 flex items-center text-slate-400">
                        <span className="material-symbols-outlined">call</span>
                      </span>
                      <input 
                        type="tel" 
                        required
                        placeholder="05 XX XX XX XX" 
                        className="w-full pl-12 pr-4 rounded-xl border-2 border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-blue-600 focus:bg-white dark:focus:bg-slate-800 outline-none h-14 transition-all" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </label>
                </div>
              </div>

              {/* Description Section */}
              <div className="space-y-6">
                <h3 className="text-lg font-bold border-b border-slate-100 dark:border-slate-800 pb-2">2. Description détaillée</h3>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold">Décrivez votre besoin</span>
                  <textarea 
                    rows="4" 
                    required
                    placeholder="Veuillez donner le plus de détails possible sur les travaux à réaliser..." 
                    className="rounded-xl border-2 border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-blue-600 outline-none p-4 transition-all"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                  ></textarea>
                </label>
              </div>

              {/* Location */}
              <div className="space-y-6">
                <h3 className="text-lg font-bold border-b border-slate-100 dark:border-slate-800 pb-2">3. Localisation</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <label className="flex flex-col gap-2 md:col-span-2">
                    <span className="text-sm font-semibold">Adresse ou Ville</span>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-4 flex items-center text-slate-400">
                        <span className="material-symbols-outlined">location_on</span>
                      </span>
                      <input 
                        type="text" 
                        required
                        placeholder="Alger, Oran, etc." 
                        className="w-full pl-12 pr-4 rounded-xl border-2 border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-blue-600 focus:bg-white dark:focus:bg-slate-800 outline-none h-14 transition-all" 
                        value={formData.address}
                        onChange={(e) => setFormData({...formData, address: e.target.value})}
                      />
                    </div>
                  </label>
                </div>
              </div>

              {/* Budget & Timing */}
              <div className="space-y-6">
                <h3 className="text-lg font-bold border-b border-slate-100 dark:border-slate-800 pb-2">4. Budget et Délai</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-semibold">Budget estimé (DA)</span>
                    <input 
                      type="number" 
                      required
                      placeholder="Ex: 15000" 
                      className="px-4 rounded-xl border-2 border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-blue-600 outline-none h-14 transition-all" 
                      value={formData.budget}
                      onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-semibold">Date d'intervention souhaitée</span>
                    <input 
                      type="date" 
                      required
                      className="px-4 rounded-xl border-2 border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-blue-600 outline-none h-14 transition-all" 
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                  </label>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-linear-to-r from-blue-600 to-indigo-700 text-white font-black py-5 rounded-xl hover:shadow-xl hover:shadow-blue-600/30 transition-all active:scale-[0.98] text-xl disabled:opacity-70 flex items-center justify-center gap-3"
              >
                {loading ? (
                  <>
                    <span className="animate-spin h-6 w-6 border-4 border-white/30 border-t-white rounded-full"></span>
                    Envoi en cours...
                  </>
                ) : (
                  'Envoyer ma demande de devis'
                )}
              </button>
            </form>
          </div>

          {/* Sidebar: Artisan Summary */}
          <aside className="w-full lg:w-[380px]">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-xl shadow-slate-200/50">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-blue-600 text-3xl">construction</span>
                  </div>
                  <div>
                    <h4 className="font-black text-xl text-slate-900">Demande Sécurisée</h4>
                    <p className="text-sm text-slate-500">Service 100% Gratuit</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-emerald-100 text-emerald-600 p-1.5 rounded-lg flex items-center justify-center">
                      <span className="material-symbols-outlined text-sm font-bold">check</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">Artisans Vérifiés</p>
                      <p className="text-xs text-slate-500">Tous nos experts sont certifiés</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-blue-100 text-blue-600 p-1.5 rounded-lg flex items-center justify-center">
                      <span className="material-symbols-outlined text-sm font-bold">bolt</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">Réponse Rapide</p>
                      <p className="text-xs text-slate-500">Devis reçu sous 24h en moyenne</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-purple-100 text-purple-600 p-1.5 rounded-lg flex items-center justify-center">
                      <span className="material-symbols-outlined text-sm font-bold">verified_user</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">Paiement Sécurisé</p>
                      <p className="text-xs text-slate-500">Protection acheteur incluse</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 p-6 bg-slate-50 rounded-2xl italic text-slate-600 text-sm border-l-4 border-blue-600">
                  "Nous vous mettons en relation avec les meilleurs artisans locaux pour garantir la réussite de vos projets."
                </div>
              </div>
            </div>
          </aside>
          
        </div>
      </main>

      <footer className="mt-20 border-t border-slate-100 py-12 text-center text-slate-400 text-sm">
        <p>© 2026 BricoloPro Algérie - La plateforme n°1 des artisans.</p>
      </footer>
      
    </div>
  );
};

export default RequestQuote;
