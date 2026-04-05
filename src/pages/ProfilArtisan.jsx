import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import apiService from '../services/api';

const ProfilArtisan = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [artisan, setArtisan] = useState(null);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        const [artisanData, servicesData] = await Promise.all([
          apiService.getArtisanById(id),
          apiService.getArtisanServices(id)
        ]);
        setArtisan(artisanData);
        setServices(servicesData);
      } catch (err) {
        console.error('Error fetching artisan details:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="flex flex-col items-center gap-4">
        <span className="animate-spin h-12 w-12 border-4 border-blue-600/30 border-t-blue-600 rounded-full"></span>
        <p className="text-slate-500 font-bold">Chargement du profil...</p>
      </div>
    </div>
  );

  if (!artisan) return <div className="text-center py-20">Artisan non trouvé.</div>;

  return (
    <div className="layout-container flex h-full grow flex-col font-['Outfit',sans-serif] bg-slate-50/30">
      <main className="max-w-7xl mx-auto w-full px-4 lg:px-20 py-8">
        {/*  Banner Hero  */}
        <div className="relative mb-12">
          <div className="h-64 md:h-80 w-full rounded-3xl overflow-hidden bg-slate-200 dark:bg-slate-800 shadow-lg">
            <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: `url(${artisan.image || 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop'})`}}></div>
          </div>
          <div className="absolute -bottom-16 left-8 flex flex-col md:flex-row items-end md:items-center gap-6">
            <div className="relative">
              <div className="size-32 md:size-40 rounded-full border-4 border-white dark:border-background-dark overflow-hidden bg-white shadow-2xl">
                <img src={artisan.image || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop'} alt={artisan.name} className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-2 right-2 size-6 bg-green-500 rounded-full border-2 border-white dark:border-background-dark animate-pulse"></div>
            </div>
            <div className="pb-2 md:pb-4 flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tight">{artisan.name}</h1>
                <span className="bg-emerald-100 text-emerald-700 text-xs font-black px-3 py-1 rounded-full flex items-center gap-1">
                  <span className="size-2 bg-emerald-500 rounded-full"></span>
                  DISPONIBLE
                </span>
              </div>
              <p className="text-slate-500 text-lg flex items-center gap-2 font-medium">
                {artisan.specialty}
                <span className="size-1 bg-slate-300 rounded-full"></span>
                <span className="flex items-center text-blue-600 font-black">
                  <span className="material-symbols-outlined text-sm">verified</span>
                  <span className="ml-1 text-sm uppercase tracking-wider">Certifié</span>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-24">
          {/*  Left Content  */}
          <div className="lg:col-span-2 space-y-8">
            {/*  Stats Grid  */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm">
                <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-1">Projets</p>
                <p className="text-2xl font-black text-slate-900">{artisan.review_count || 0}</p>
              </div>
              <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm">
                <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-1">Expérience</p>
                <p className="text-2xl font-black text-slate-900">{artisan.experience_years || 0} ans</p>
              </div>
              <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm">
                <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-1">Note</p>
                <div className="flex items-center gap-1">
                  <p className="text-2xl font-black text-slate-900">{artisan.rating}</p>
                  <span className="material-symbols-outlined text-yellow-400 fill-current text-sm">star</span>
                </div>
              </div>
              <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm">
                <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-1">Réponse</p>
                <p className="text-2xl font-black text-slate-900">&lt; 24h</p>
              </div>
            </div>

            {/*  Services & Pricing Table  */}
            <section>
              <h3 className="text-xl font-black mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-blue-600">lists</span>
                Services & Tarifs
              </h3>
              <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50/50 text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">
                      <th className="px-6 py-4">Service</th>
                      <th className="px-6 py-4">Catégorie</th>
                      <th className="px-6 py-4 text-right">Prix de Base</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {services.length > 0 ? services.map(service => (
                      <tr key={service.id} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 py-4 font-bold text-slate-900">{service.title}</td>
                        <td className="px-6 py-4 text-slate-500 text-sm font-medium">{service.category_name}</td>
                        <td className="px-6 py-4 text-blue-600 font-black text-right">{service.base_price} DA</td>
                      </tr>
                    )) : (
                      <tr>
                        <td colSpan="3" className="px-6 py-8 text-center text-slate-400 italic">Aucun service spécifique listé. Contactez l'artisan pour un devis.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </section>

            {/*  Reviews  */}
            <section>
              <h3 className="text-xl font-black mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-blue-600">reviews</span>
                Avis Clients
              </h3>
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-center">
                 <span className="material-symbols-outlined text-slate-300 text-5xl mb-4">rate_review</span>
                 <p className="text-slate-500 font-medium">Les avis pour cet artisan seront bientôt disponibles.</p>
              </div>
            </section>
          </div>

          {/*  Right Booking Widget  */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white rounded-3xl border border-slate-100 shadow-2xl shadow-slate-200/50 overflow-hidden">
                <div className="p-8">
                  <h4 className="text-xl font-black text-slate-900 mb-8">Demander un service</h4>
                  <div className="space-y-6">
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">
                      Vous avez un projet en tête ? Envoyez une demande de devis à <span className="font-bold text-slate-900">{artisan.name}</span> pour obtenir une estimation personnalisée.
                    </p>
                    <button 
                      onClick={() => navigate(`/request-quote?artisanId=${artisan.id}&artisanName=${encodeURIComponent(artisan.name)}`)}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black h-16 rounded-2xl shadow-xl shadow-blue-600/20 active:scale-[0.98] transition-all flex items-center justify-center gap-3 group"
                    >
                      <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">send</span>
                      Demander un devis
                    </button>
                    <button className="w-full bg-slate-50 border-2 border-slate-100 text-slate-600 font-bold h-16 rounded-2xl transition-all flex items-center justify-center gap-3">
                      <span className="material-symbols-outlined">chat_bubble</span>
                      Contacter par Message
                    </button>
                  </div>
                </div>
                <div className="bg-slate-50/50 border-t border-slate-100 py-4 px-8 flex items-center justify-center gap-3">
                  <span className="material-symbols-outlined text-blue-500 text-lg">verified_user</span>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Protection BricoloPro Incluse</span>
                </div>
              </div>

              {/*  Verified Credentials  */}
              <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-4">
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">Vérifications</h4>
                <div className="flex items-center gap-3 text-sm font-bold text-slate-700">
                  <span className="material-symbols-outlined text-emerald-500">check_circle</span>
                  Identité vérifiée
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-slate-700">
                  <span className="material-symbols-outlined text-emerald-500">check_circle</span>
                  Diplômes & Certifications
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-slate-700">
                  <span className="material-symbols-outlined text-emerald-500">check_circle</span>
                  Assurance professionnelle
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-20 border-t border-slate-100 py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-slate-400">
            <span className="material-symbols-outlined">construction</span>
            <span className="text-sm font-black">BricoloPro © 2026</span>
          </div>
          <div className="flex gap-8">
            <Link to="/" className="text-xs font-bold text-slate-400 hover:text-blue-600">Accueil</Link>
            <Link to="/search" className="text-xs font-bold text-slate-400 hover:text-blue-600">Artisans</Link>
            <a href="#" className="text-xs font-bold text-slate-400 hover:text-blue-600">Aide</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProfilArtisan;
