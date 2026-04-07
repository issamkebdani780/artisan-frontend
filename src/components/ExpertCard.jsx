import React from 'react';
import { Link } from 'react-router-dom';

const ExpertCard = ({ id, name, role, rating, reviews, location, availability, price, image, isVerified }) => {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:shadow-xl transition-all group shrink-0">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20 bg-slate-100">
              <img src={image || 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=60'} alt={`Photo de profil ${role}`} className="w-full h-full object-cover" />
            </div>
            {isVerified && (
              <div className="absolute -bottom-1 -right-1 bg-blue-600 text-white p-0.5 rounded-full border-2 border-white dark:border-slate-900">
                <span className="material-symbols-outlined text-[14px] font-bold">verified</span>
              </div>
            )}
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 text-sm font-bold text-slate-900 dark:text-white justify-end">
              {rating} <span className="material-symbols-outlined text-yellow-400 text-sm fill-current">star</span>
            </div>
            <span className="text-xs text-slate-500">({reviews} avis)</span>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors uppercase">{name}</h3>
          <p className="text-sm text-blue-600 font-medium mb-3">{role}</p>
          <div className="flex items-center gap-4 text-xs text-slate-500 mb-6">
            <span className="flex items-center gap-1"><span className="material-symbols-outlined text-xs">location_on</span> {location}</span>
            <span className="flex items-center gap-1 font-bold">
              {availability === 'Disponible' ? (
                <><span className="material-symbols-outlined text-xs text-green-500">circle</span> {availability}</>
              ) : (
                <><span className="material-symbols-outlined text-xs">schedule</span> {availability}</>
              )}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
          <div>
            <span className="text-xs text-slate-500">À partir de</span>
            <p className="font-bold text-slate-900 dark:text-white">{price} DA<span className="text-xs font-normal">/h</span></p>
          </div>
          <Link 
            to={`/artisan/${id}`} 
            className="bg-slate-100 dark:bg-slate-800 text-blue-600 px-4 py-2 rounded-lg font-bold text-sm hover:bg-blue-600 hover:text-white transition-all"
          >
            Voir profil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExpertCard;
