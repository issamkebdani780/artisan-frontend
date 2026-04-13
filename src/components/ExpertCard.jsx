import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import apiService from '../services/api';

const ExpertCard = ({ id, name, role, rating, reviews, location, availability, price, image, isVerified, isFavorited: initialIsFavorited }) => {
  const [isFavorited, setIsFavorited] = useState(!!initialIsFavorited);
  const [isToggling, setIsToggling] = useState(false);

  const handleToggleFavorite = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!apiService.isAuthenticated()) {
      alert('Veuillez vous connecter pour ajouter des favoris.');
      return;
    }

    setIsToggling(true);
    try {
      const response = await apiService.toggleFavorite(id);
      setIsFavorited(response.isFavorited);
    } catch (error) {
      console.error('Error toggling favorite:', error);
    } finally {
      setIsToggling(false);
    }
  };

  return (
    <div className="bg-white border border-slate-100 rounded-[32px] overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all group shrink-0 relative">
      <button 
        onClick={handleToggleFavorite}
        disabled={isToggling}
        className={`absolute top-6 right-6 z-10 size-10 rounded-2xl flex items-center justify-center transition-all shadow-lg border border-white/20 backdrop-blur-md ${isFavorited ? 'bg-rose-500 text-white border-transparent' : 'bg-white/80 text-slate-400 hover:text-rose-500 hover:bg-white'}`}
      >
        <span 
          className="material-symbols-outlined text-2xl"
          style={{ fontVariationSettings: `'FILL' ${isFavorited ? 1 : 0}` }}
        >
          favorite
        </span>
      </button>

      <div className="p-8 h-full flex flex-col">
        <div className="mb-6">
          <div className="relative inline-block">
            <div className="size-20 rounded-3xl overflow-hidden border-4 border-slate-50 bg-slate-50 shadow-sm">
              <img src={image || 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=60'} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            {Number(isVerified) === 1 && (
              <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white p-1 rounded-xl border-4 border-white shadow-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-sm">verified</span>
              </div>
            )}
          </div>
        </div>
        <div>
          <h3 className="font-black text-xl text-slate-900 mb-1 tracking-tight uppercase line-clamp-1">{name}</h3>
          <p className="text-sm text-primary font-bold mb-4 uppercase tracking-tight">{role}</p>
          <div className="flex flex-wrap items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-8">
            <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
              <span className="material-symbols-outlined text-sm">location_on</span> {location}
            </span>
            <span className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border ${availability === 'Disponible' ? 'bg-emerald-50 border-emerald-100 text-emerald-600' : 'bg-slate-50 border-slate-100'}`}>
              {availability}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50 transition-colors">
          <div className="flex items-center gap-6">
            <div>
              <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest leading-none">A partir de</span>
              <p className="font-black text-xl text-slate-900 leading-none mt-1 whitespace-nowrap">
                {price ? `${price} DA` : 'Sur Devis'}
              </p>
            </div>
            
            <div className="h-8 w-px bg-slate-100 hidden sm:block"></div>
            
            <div className="flex flex-col items-start leading-tight">
              <div className="flex items-center gap-1 text-sm font-black text-slate-900">
                {Number(rating).toFixed(1)} 
                <span 
                  className="material-symbols-outlined text-yellow-500 text-base"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              </div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{reviews} Avis</span>
            </div>
          </div>

          <Link 
            to={`/artisan/${id}`} 
            className="size-12 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm border border-slate-100 shrink-0"
          >
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExpertCard;
