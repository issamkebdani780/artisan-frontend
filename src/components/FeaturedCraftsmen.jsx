import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import apiService from '../services/api';
import ExpertCard from './ExpertCard';
import { ArrowRight, Sparkles } from 'lucide-react';

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
      <div className="animate-spin inline-block size-12 border-4 border-primary border-t-transparent rounded-full mb-6"></div>
      <p className="text-slate-400 font-black uppercase tracking-[0.2em] text-[10px]">Recherche des meilleurs experts...</p>
    </section>
  );

  return (
    <section className="px-6 md:px-20 py-24 bg-white transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="size-5 text-primary" />
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Qualité Garantie</span>
            </div>
            <h2 className="text-slate-900 text-4xl md:text-6xl font-black tracking-tight mb-6 uppercase leading-tight">Artisans <br /><span className="text-primary italic">à la une</span></h2>
            <p className="text-slate-500 text-lg md:text-xl font-bold leading-relaxed">Découvrez les professionnels les mieux notés et vérifiés par notre communauté.</p>
          </div>
          <Link 
            to="/search" 
            className="group flex items-center gap-3 text-primary font-black uppercase tracking-[0.2em] text-xs hover:gap-5 transition-all bg-primary/5 px-8 py-4 rounded-2xl border border-primary/10"
          >
            Explorer le réseau
            <ArrowRight className="size-5" />
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
