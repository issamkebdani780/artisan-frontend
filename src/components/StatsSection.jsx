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
    <section className="bg-blue-600 dark:bg-blue-700 py-16 px-6 md:px-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl scale-150"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl scale-150"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-white relative z-10">
        <div className="space-y-2">
          <h3 className="text-4xl md:text-5xl font-black tracking-tight">{stats.clients.toLocaleString()}</h3>
          <p className="text-blue-50 text-[10px] font-black uppercase tracking-[0.2em]">Clients satisfaits</p>
        </div>
        <div className="space-y-2 border-y md:border-y-0 md:border-x border-white/10 py-12 md:py-0">
          <h3 className="text-4xl md:text-5xl font-black tracking-tight">{stats.artisans.toLocaleString()}</h3>
          <p className="text-blue-50 text-[10px] font-black uppercase tracking-[0.2em]">Artisans Vérifiés</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-4xl md:text-5xl font-black tracking-tight">{stats.projects.toLocaleString()}</h3>
          <p className="text-blue-50 text-[10px] font-black uppercase tracking-[0.2em]">Projets Réalisés</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
