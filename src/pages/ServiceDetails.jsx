import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import apiService from '../services/api';

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const serviceData = await apiService.getServiceById(id);
        setService(serviceData);
      } catch (err) {
        console.error('Failed to fetch service:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchService();
  }, [id]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
    </div>
  );

  if (!service) return (
    <div className="min-h-screen flex items-center justify-center text-slate-500">
      Service non trouvé.
    </div>
  );

  return (
    <div className="bg-white text-slate-900 font-['Outfit',sans-serif]">
      <div className="layout-content-container flex flex-col max-w-[1280px] flex-1 mx-auto px-6 md:px-12 py-12">
        
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 min-h-[500px] flex flex-col justify-end p-8 md:p-16 border border-slate-800 shadow-2xl">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-60" 
            style={{ backgroundImage: `url(${service.image_url || 'https://images.unsplash.com/photo-1621905252507-b35492d90cb4'})` }}
          ></div>
          <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
          
          <div className="relative z-10 space-y-6 max-w-3xl">
            <span className="bg-blue-600 text-white text-xs font-black px-4 py-1.5 rounded-full w-fit uppercase tracking-[0.2em]">Service Premium</span>
            <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight">{service.title}</h1>
            <p className="text-slate-300 text-xl leading-relaxed">{service.description}</p>
          </div>
        </div>

        {/* CTA & Quick Stats */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 p-8 bg-white rounded-3xl -mt-12 relative z-20 border border-slate-100 shadow-2xl shadow-slate-200/50">
          <div className="flex flex-col gap-2">
            <p className="text-slate-900 text-3xl font-black">À partir de {service.base_price} DA</p>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-emerald-500 text-xl font-bold">verified_user</span>
              <p className="text-slate-500 font-medium">Artisans certifiés et travaux garantis</p>
            </div>
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <button 
              onClick={() => navigate(`/request-quote?serviceId=${service.id}`)}
              className="flex-1 md:flex-none flex items-center justify-center rounded-2xl h-16 px-12 bg-blue-600 text-white text-lg font-black transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-blue-600/20"
            >
              Réserver Maintenant
            </button>
            <button className="flex items-center justify-center rounded-2xl h-16 w-16 bg-slate-50 text-slate-900 border border-slate-100 hover:bg-slate-100 transition-colors">
              <span className="material-symbols-outlined">share</span>
            </button>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-16">
          <div className="flex flex-col gap-3 rounded-3xl p-8 border border-slate-100 bg-slate-50/30 text-center md:text-left">
            <span className="material-symbols-outlined text-blue-600 text-4xl">verified_user</span>
            <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">Interventions</p>
            <p className="text-slate-900 text-3xl font-black">{service.review_count > 0 ? service.review_count : 'Nouveau'}</p>
          </div>
          <div className="flex flex-col gap-3 rounded-3xl p-8 border border-slate-100 bg-slate-50/30 text-center md:text-left">
            <span className="material-symbols-outlined text-blue-600 text-4xl">sentiment_satisfied</span>
            <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">Satisfaction</p>
            <p className="text-slate-900 text-3xl font-black">{service.rating > 0 ? `${service.rating}/5` : 'N/A'}</p>
          </div>
          <div className="flex flex-col gap-3 rounded-3xl p-8 border border-slate-100 bg-slate-50/30 text-center md:text-left">
            <span className="material-symbols-outlined text-blue-600 text-4xl">workspace_premium</span>
            <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">Garantie</p>
            <p className="text-slate-900 text-3xl font-black">Certifiée</p>
          </div>
        </div>

        {/* Detailed Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 py-8">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-black mb-8 text-slate-900">Pourquoi nous choisir ?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4 p-6 rounded-3xl border border-slate-50 bg-white shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
                    <span className="material-symbols-outlined">timer</span>
                  </div>
                  <h3 className="text-xl font-bold">Intervention Rapide</h3>
                  <p className="text-slate-500 leading-relaxed">Nos artisans interviennent en moins de 24h pour les urgences à travers toute l'Algérie.</p>
                </div>
                <div className="space-y-4 p-6 rounded-3xl border border-slate-50 bg-white shadow-sm">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center">
                    <span className="material-symbols-outlined">payments</span>
                  </div>
                  <h3 className="text-xl font-bold">Prix Juste</h3>
                  <p className="text-slate-500 leading-relaxed">Transparence totale sur les tarifs. Pas de mauvaises surprises au moment du paiement.</p>
                </div>
              </div>
            </section>
          </div>

          <aside className="space-y-8">
            <div className="bg-slate-900 p-8 rounded-3xl text-white space-y-6">
              <h3 className="text-2xl font-black">Besoin d'aide ?</h3>
              <p className="text-slate-400">Nos experts sont à votre disposition pour vous conseiller sur vos travaux.</p>
              <button className="w-full py-4 bg-white text-slate-900 rounded-2xl font-black hover:bg-slate-100 transition-colors">
                Contacter un expert
              </button>
            </div>
          </aside>
        </div>

      </div>
    </div>
  );
};

export default ServiceDetails;
