import React, { useState, useEffect } from 'react';
import apiService from '../services/api';
import { 
  Users, 
  ShieldCheck, 
  CheckCircle2 
} from 'lucide-react';

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center relative z-10">
          <div className="space-y-6 group">
            <div className="size-20 bg-slate-50 rounded-3xl flex items-center justify-center text-primary mx-auto shadow-sm group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 border border-slate-100">
              <Users className="size-8" />
            </div>
            <div>
              <h3 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter tabular-nums mb-2">{stats.clients.toLocaleString()}</h3>
              <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">Clients satisfaits</p>
            </div>
          </div>
          
          <div className="space-y-6 group border-y md:border-y-0 md:border-x border-slate-100 py-16 md:py-0">
            <div className="size-20 bg-slate-50 rounded-3xl flex items-center justify-center text-primary mx-auto shadow-sm group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 border border-slate-100">
              <ShieldCheck className="size-8" />
            </div>
            <div>
              <h3 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter tabular-nums mb-2">{stats.artisans.toLocaleString()}</h3>
              <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">Artisans Vérifiés</p>
            </div>
          </div>

          <div className="space-y-6 group">
            <div className="size-20 bg-slate-50 rounded-3xl flex items-center justify-center text-primary mx-auto shadow-sm group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 border border-slate-100">
              <CheckCircle2 className="size-8" />
            </div>
            <div>
              <h3 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter tabular-nums mb-2">{stats.projects.toLocaleString()}</h3>
              <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">Projets Réalisés</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
