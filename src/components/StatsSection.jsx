import React, { useState, useEffect } from 'react';
import apiService from '../services/api';

const StatsSection = () => {
  const [stats, setStats] = useState({ clients: 0, artisans: 0, projects: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await apiService.getStats();
        setStats(data);
      } catch (err) {
        console.error('Failed to fetch stats:', err);
      }
    };
    fetchStats();
  }, []);

  return (
    <section className="bg-white py-24 px-6 md:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative z-10">
          <div className="space-y-4 group">
            <div className="size-16 bg-slate-50 rounded-2xl flex items-center justify-center text-primary mx-auto shadow-sm group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">groups</span>
            </div>
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter tabular-nums">{stats.clients.toLocaleString()}</h3>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">Clients satisfaits</p>
          </div>
          
          <div className="space-y-4 group border-y md:border-y-0 md:border-x border-slate-50 py-12 md:py-0">
            <div className="size-16 bg-slate-50 rounded-2xl flex items-center justify-center text-primary mx-auto shadow-sm group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">verified_user</span>
            </div>
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter tabular-nums">{stats.artisans.toLocaleString()}</h3>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">Artisans Vérifiés</p>
          </div>

          <div className="space-y-4 group">
            <div className="size-16 bg-slate-50 rounded-2xl flex items-center justify-center text-primary mx-auto shadow-sm group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">task_alt</span>
            </div>
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter tabular-nums">{stats.projects.toLocaleString()}</h3>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">Projets Réalisés</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
