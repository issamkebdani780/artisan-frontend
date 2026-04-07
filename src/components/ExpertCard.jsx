import React from 'react';
import { Link } from 'react-router-dom';

const ExpertCard = ({ id, name, role, rating, reviews, location, availability, price, image, isVerified }) => {
  return (
    <div className="bg-white border border-slate-100 rounded-[32px] overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all group shrink-0">
      <div className="p-8">
        <div className="flex items-start justify-between mb-6">
          <div className="relative">
            <div className="size-20 rounded-3xl overflow-hidden border-4 border-slate-50 bg-slate-50 shadow-sm">
              <img src={image || 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=60'} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            {isVerified && (
              <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white p-1 rounded-xl border-4 border-white shadow-lg">
                <span className="material-symbols-outlined text-sm font-black">verified</span>
              </div>
            )}
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 text-sm font-black text-slate-900 justify-end">
              {rating} <span className="material-symbols-outlined text-yellow-400 text-base fill-current">star</span>
            </div>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{reviews} Avis</span>
          </div>
        </div>
        <div>
          <h3 className="font-black text-xl text-slate-900 mb-1 tracking-tight uppercase">{name}</h3>
          <p className="text-sm text-primary font-bold mb-4 uppercase tracking-tight">{role}</p>
          <div className="flex flex-wrap items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-8">
            <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
              <span className="material-symbols-outlined text-sm">location_on</span> {location}
            </span>
            <span className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border ${availability === 'Disponible' ? 'bg-emerald-50 border-emerald-100 text-emerald-600' : 'bg-slate-50 border-slate-100'}`}>
              <span className="material-symbols-outlined text-sm">{availability === 'Disponible' ? 'circle' : 'schedule'}</span> {availability}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between pt-6 border-t border-slate-50">
          <div>
            <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest leading-none">A partir de</span>
            <p className="font-black text-xl text-slate-900 leading-none mt-1">{price} DA</p>
          </div>
          <Link 
            to={`/artisan/${id}`} 
            className="size-12 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm border border-slate-100"
          >
            <span className="material-symbols-outlined font-black">arrow_forward</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExpertCard;
