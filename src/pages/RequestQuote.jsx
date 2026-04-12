import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import apiService from '../services/api';

const RequestQuote = () => {
  const [searchParams] = useSearchParams();
  const serviceId = searchParams.get('serviceId');
  const artisanId = searchParams.get('artisanId');
  const subcategoryIdFromUrl = searchParams.get('subcategory'); // New param
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  // Redirect if not logged in
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      navigate('/login/client');
    }
  }, [navigate]);

  // Location data
  const [wilayas, setWilayas] = useState([]);
  const [communes, setCommunes] = useState([]);

  const [formData, setFormData] = useState({
    title: '',
    category_id: '',
    phone: '',
    description: '',
    address: '',
    wilaya_id: '',
    commune_id: '',
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
        
        if (subcategoryIdFromUrl) {
          const subDetails = await apiService.getSubcategoryDetails(subcategoryIdFromUrl);
          if (subDetails && subDetails.category_id) {
            setFormData(prev => ({
              ...prev,
              category_id: subDetails.category_id,
              title: subDetails.name || subDetails.title || prev.title 
            }));
          }
        }
      } catch (err) {
        console.error('Failed to fetch categories or subcategory details:', err);
      }
    };
    fetchCategories();
  }, [subcategoryIdFromUrl]);


  // Fetch wilayas on mount
  useEffect(() => {
    const fetchWilayas = async () => {
      try {
        const data = await apiService.getWilayas();
        setWilayas(data);
      } catch (err) {
        console.error('Error fetching wilayas:', err);
      }
    };
    fetchWilayas();

    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setFormData(prev => ({
        ...prev,
        phone: user.phone || '',
        address: user.address || '',
        wilaya_id: user.wilaya_id || '',
        commune_id: user.commune_id || ''
      }));

      if (user.wilaya_id) {
        apiService.getCommunes(user.wilaya_id)
          .then(data => setCommunes(data))
          .catch(err => console.error('Error fetching prefilled communes:', err));
      }
    }
  }, []);

  const handleWilayaChange = async (e) => {
    const wilayaId = e.target.value;
    setFormData({ ...formData, wilaya_id: wilayaId, commune_id: '' });
    setCommunes([]);
    if (wilayaId) {
      try {
        const data = await apiService.getCommunes(wilayaId);
        setCommunes(data);
      } catch (err) {
        console.error('Error fetching communes:', err);
      }
    }
  };

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

    if (formData.date) {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        alert("La date d'intervention ne peut pas être dans le passé");
        setLoading(false);
        return;
      }
    }

    setLoading(true);
    try {
      let response;
      if (serviceId) {
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
        const devisData = {
          category_id: formData.category_id || 1, 
          description: formData.description,
          budget: formData.budget,
          wilaya_id: formData.wilaya_id,
          commune_id: formData.commune_id,
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
      alert("Erreur lors de l'envoi de la demande");
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
    <div className="min-h-screen bg-white text-slate-900 w-full flex-col font-['Outfit',sans-serif]">
      <main className="flex-1 px-4 py-16 md:px-20 lg:px-40 flex flex-col items-center">
        <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-16">
          
          <div className="flex-1 space-y-12">
            <section>
              <h1 className="text-4xl md:text-5xl font-black mb-4 text-slate-900 uppercase tracking-tight">Parlez-nous de <br /><span className="text-primary italic">votre projet</span></h1>
              <p className="text-slate-500 text-lg font-bold">Remplissez ce formulaire pour recevoir un devis personnalisé sous 24h.</p>
              
              {searchParams.get('artisanName') && (
                <div className="mt-8 p-6 bg-primary/5 border-l-4 border-primary rounded-r-[32px] flex items-center gap-4 shadow-sm">
                  <div className="size-10 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm">
                    <span className="material-symbols-outlined">person</span>
                  </div>
                  <p className="text-primary font-black uppercase tracking-tight text-sm">
                    À l'attention de : <span className="underline decoration-2 underline-offset-4">{decodeURIComponent(searchParams.get('artisanName'))}</span>
                  </p>
                </div>
              )}
            </section>
            
            <form className="space-y-12" onSubmit={handleSubmit}>
              
              <div className="space-y-8 bg-slate-50 p-8 md:p-10 rounded-[40px] border border-slate-100">
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
                  <span className="size-6 bg-primary text-white rounded-lg flex items-center justify-center text-[10px]">1</span> DÉTAILS DU PROJET
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <label className="flex flex-col gap-3">
                    <span className="text-sm font-black text-slate-900 uppercase tracking-tight">Titre du projet</span>
                    <input 
                      type="text" 
                      required
                      placeholder="Ex: Rénovation salle de bain" 
                      className="px-6 rounded-2xl border border-slate-100 bg-white text-slate-900 focus:border-primary/30 outline-none h-16 transition-all font-bold shadow-sm" 
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                    />
                  </label>
                  <label className="flex flex-col gap-3">
                    <span className="text-sm font-black text-slate-900 uppercase tracking-tight">Catégorie</span>
                    <select 
                      className="px-6 rounded-2xl border border-slate-100 bg-white text-slate-900 focus:border-primary/30 outline-none h-16 transition-all font-bold shadow-sm"
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
                  <label className="flex flex-col gap-3 md:col-span-2">
                    <span className="text-sm font-black text-slate-900 uppercase tracking-tight">Téléphone</span>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-6 flex items-center text-slate-300">
                        <span className="material-symbols-outlined">call</span>
                      </span>
                      <input 
                        type="tel" 
                        required
                        placeholder="05 XX XX XX XX" 
                        className="w-full pl-14 pr-6 rounded-2xl border border-slate-100 bg-white text-slate-900 focus:border-primary/30 outline-none h-16 transition-all font-bold shadow-sm" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </label>
                </div>
              </div>

              <div className="space-y-8 bg-slate-50 p-8 md:p-10 rounded-[40px] border border-slate-100">
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
                  <span className="size-6 bg-primary text-white rounded-lg flex items-center justify-center text-[10px]">2</span> VOTRE BESOIN
                </h3>
                <label className="flex flex-col gap-3">
                  <span className="text-sm font-black text-slate-900 uppercase tracking-tight">Description des travaux</span>
                  <textarea 
                    rows="5" 
                    required
                    placeholder="Décrivez précisément votre projet..." 
                    className="rounded-[32px] border border-slate-100 bg-white text-slate-900 focus:border-primary/30 outline-none p-8 transition-all font-bold shadow-sm"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                  ></textarea>
                </label>
              </div>

              <div className="space-y-8 bg-slate-50 p-8 md:p-10 rounded-[40px] border border-slate-100">
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
                  <span className="size-6 bg-primary text-white rounded-lg flex items-center justify-center text-[10px]">3</span> LOCALISATION
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <label className="flex flex-col gap-3">
                    <span className="text-sm font-black text-slate-900 uppercase tracking-tight">Wilaya</span>
                    <select 
                      required
                      className="w-full px-6 rounded-2xl border border-slate-100 bg-white text-slate-900 focus:border-primary/30 outline-none h-16 transition-all font-bold shadow-sm"
                      value={formData.wilaya_id}
                      onChange={handleWilayaChange}
                    >
                      <option value="">Sélectionnez une wilaya</option>
                      {wilayas.map(wilaya => (
                        <option key={wilaya.id} value={wilaya.id}>{wilaya.name}</option>
                      ))}
                    </select>
                  </label>
                  <label className="flex flex-col gap-3">
                    <span className="text-sm font-black text-slate-900 uppercase tracking-tight">Commune</span>
                    <select 
                      required
                      disabled={!formData.wilaya_id}
                      className="w-full px-6 rounded-2xl border border-slate-100 bg-white text-slate-900 focus:border-primary/30 outline-none h-16 transition-all font-bold shadow-sm disabled:opacity-50"
                      value={formData.commune_id}
                      onChange={(e) => setFormData({...formData, commune_id: e.target.value})}
                    >
                      <option value="">Sélectionnez une commune</option>
                      {communes.map(commune => (
                        <option key={commune.id} value={commune.id}>{commune.name}</option>
                      ))}
                    </select>
                  </label>
                  <label className="flex flex-col gap-3 md:col-span-2">
                    <span className="text-sm font-black text-slate-900 uppercase tracking-tight">Adresse exacte</span>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-6 flex items-center text-slate-300">
                        <span className="material-symbols-outlined">location_on</span>
                      </span>
                      <input 
                        type="text" 
                        required
                        placeholder="Numéro, rue, quartier..." 
                        className="w-full pl-14 pr-6 rounded-2xl border border-slate-100 bg-white text-slate-900 focus:border-primary/30 outline-none h-16 transition-all font-bold shadow-sm" 
                        value={formData.address}
                        onChange={(e) => setFormData({...formData, address: e.target.value})}
                      />
                    </div>
                  </label>
                </div>
              </div>

              <div className="space-y-8 bg-slate-50 p-8 md:p-10 rounded-[40px] border border-slate-100">
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
                  <span className="size-6 bg-primary text-white rounded-lg flex items-center justify-center text-[10px]">4</span> BUDGET & DÉLAI
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <label className="flex flex-col gap-3">
                    <span className="text-sm font-black text-slate-900 uppercase tracking-tight">Budget (DA)</span>
                    <input 
                      type="number" 
                      required
                      placeholder="Ex: 15000" 
                      className="px-6 rounded-2xl border border-slate-100 bg-white text-slate-900 focus:border-primary/30 outline-none h-16 transition-all font-bold shadow-sm" 
                      value={formData.budget}
                      onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    />
                  </label>
                  <label className="flex flex-col gap-3">
                    <span className="text-sm font-black text-slate-900 uppercase tracking-tight">Délai souhaité</span>
                    <input 
                      type="date" 
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="px-6 rounded-2xl border border-slate-100 bg-white text-slate-900 focus:border-primary/30 outline-none h-16 transition-all font-bold shadow-sm" 
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                  </label>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-primary text-white font-black py-6 rounded-3xl hover:shadow-2xl hover:shadow-primary/20 transition-all active:scale-[0.98] text-xl disabled:opacity-70 flex items-center justify-center gap-4 uppercase tracking-widest"
              >
                {loading ? (
                  <>
                    <span className="animate-spin h-6 w-6 border-4 border-white/30 border-t-white rounded-full"></span>
                    Envoi...
                  </>
                ) : (
                  <>
                    <span>Envoyer ma demande</span>
                    <span className="material-symbols-outlined">send</span>
                  </>
                )}
              </button>
            </form>
          </div>

          <aside className="w-full lg:w-[400px]">
            <div className="sticky top-32 space-y-8">
              <div className="bg-slate-50 rounded-[50px] border border-slate-100 p-10 md:p-12">
                <div className="flex items-center gap-5 mb-10">
                  <div className="size-16 bg-white rounded-3xl flex items-center justify-center text-primary shadow-xl shadow-slate-200">
                    <span className="material-symbols-outlined text-3xl font-black">lock</span>
                  </div>
                  <div>
                    <h4 className="font-black text-xl text-slate-900 uppercase tracking-tight">Sécurisé</h4>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Garantie Mihnati</p>
                  </div>
                </div>

                <div className="space-y-8">
                  {[
                    { icon: 'verified', title: 'Experts Vérifiés', desc: 'Certification rigoureuse', color: 'text-emerald-500' },
                    { icon: 'bolt', title: 'Moins de 24h', desc: 'Réponse ultra rapide', color: 'text-amber-500' },
                    { icon: 'payments', title: 'Prix Juste', desc: 'Devis sans engagement', color: 'text-blue-500' }
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-5">
                      <div className={`mt-1 bg-white p-2 rounded-xl flex items-center justify-center shadow-sm ${feat.color}`}>
                        <span className="material-symbols-outlined text-sm font-black">{feat.icon}</span>
                      </div>
                      <div>
                        <p className="text-sm font-black text-slate-900 uppercase tracking-tight">{feat.title}</p>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 p-8 bg-white rounded-3xl italic text-slate-500 text-sm font-bold border-l-4 border-primary shadow-sm leading-relaxed">
                  "Confiez-nous vos projets, nous trouvons pour vous les meilleurs talents algériens."
                </div>
              </div>
            </div>
          </aside>
          
        </div>
      </main>

    </div>
  );
};

export default RequestQuote;
