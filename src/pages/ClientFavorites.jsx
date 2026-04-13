import React, { useState, useEffect } from 'react';
import ExpertCard from '../components/ExpertCard';
import apiService from '../services/api';

const ClientFavorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const data = await apiService.getFavorites();
        setFavorites(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error('Error fetching favorites:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tight mb-4">
            Mes Artisans <span className="text-primary italic">Favoris</span>
          </h1>
          <p className="text-slate-500 font-bold text-lg">
            Retrouvez ici tous les professionnels que vous avez enregistrés.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-slate-50 rounded-[40px] h-[400px] animate-pulse"></div>
            ))}
          </div>
        ) : favorites.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center space-y-6 bg-slate-50 rounded-[40px] border-2 border-dashed border-slate-200">
            <div className="size-24 bg-white rounded-full flex items-center justify-center shadow-xl text-rose-500">
              <span className="material-symbols-outlined text-5xl fill-current">favorite</span>
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Aucun favori pour le moment</h3>
              <p className="text-slate-400 font-bold mt-2">Parcourez nos experts et cliquez sur le cÅ“ur pour les enregistrer.</p>
            </div>
            <a 
              href="/search"
              className="px-10 py-4 bg-primary text-white font-black uppercase tracking-widest text-sm rounded-2xl shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all hover:-translate-y-1 active:scale-95"
            >
              Découvrir nos artisans
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {favorites.map((artisan) => (
              <ExpertCard key={artisan.id} {...artisan} isFavorited={true} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientFavorites;

