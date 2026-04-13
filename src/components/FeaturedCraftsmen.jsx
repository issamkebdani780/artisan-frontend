import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import apiService from '../services/api';
import ExpertCard from './ExpertCard';

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
    <section className="px-6 md:px-20 py-20 text-center transition-colors">
      <div className="animate-spin inline-block size-12 border-4 border-primary border-t-transparent rounded-full mb-4"></div>
      <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Recherche des meilleurs experts...</p>
    </section>
  );

  return (
    <section className="px-6 md:px-20 py-24 bg-white transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-slate-900 text-3xl md:text-5xl font-black tracking-tight mb-4 uppercase">Artisans à la une</h2>
            <p className="text-slate-500 text-lg font-bold leading-relaxed">Découvrez les professionnels les mieux notés et vérifiés par notre communauté.</p>
          </div>
          <Link 
            to="/search" 
            className="group flex items-center gap-2 text-primary font-black uppercase tracking-widest text-[10px] hover:gap-4 transition-all"
          >
            Explorer le réseau
            <span className="material-symbols-outlined font-black text-sm">arrow_forward</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {craftsmen.map((craftsman) => (
            <ExpertCard key={craftsman.id} {...craftsman} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCraftsmen;
