import React, { useState, useEffect } from 'react';
import apiService from '../services/api';

const FeaturedCraftsmen = () => {
  const [craftsmen, setCraftsmen] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtisans = async () => {
      try {
        const data = await apiService.getFeaturedArtisans();
        setCraftsmen(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error('Failed to fetch artisans:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchArtisans();
  }, []);

  if (loading) return (
    <section className="px-6 md:px-20 py-12 text-center">
      <div className="animate-spin inline-block w-8 h-8 border-4 border-primary border-t-transparent rounded-full mb-4"></div>
      <p className="text-slate-500">Chargement des artisans...</p>
    </section>
  );

  return (
    <section className="px-6 md:px-20 py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-slate-900 dark:text-white text-2xl md:text-3xl font-bold">Nos Artisans à la Une</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Les professionnels les mieux notés de votre région.</p>
        </div>
        <a className="text-primary font-semibold flex items-center gap-1 hover:underline" href="#">
          Voir tout <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {craftsmen.map((craftsman) => (
          <div key={craftsman.id} className="group bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative h-64 overflow-hidden">
              <img alt={`Profile of ${craftsman.name}`} className="w-full h-full object-cover transition-transform group-hover:scale-105" src={craftsman.image} />
              <div className="absolute top-3 right-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-2 py-1 rounded text-primary font-bold text-sm flex items-center">
                <span className="material-symbols-outlined text-xs fill-current mr-1">star</span> {Number(craftsman.rating || 0).toFixed(1)}
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-slate-900 dark:text-white font-bold text-lg">{craftsman.name}</h3>
              <p className="text-primary text-sm font-medium mb-3">{craftsman.role}</p>
              <div className="flex items-center text-slate-500 dark:text-slate-400 text-xs mb-4">
                <span className="material-symbols-outlined text-sm mr-1">location_on</span> {craftsman.location} • {craftsman.reviews} avis
              </div>
              <button className="w-full py-2 bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white font-bold rounded-lg hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors">
                Voir le profil
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCraftsmen;
