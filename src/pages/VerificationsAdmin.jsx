import React, { useState, useEffect } from 'react';
import AdminLayout from '../layouts/AdminLayout';
import apiService from '../services/api';

const VerificationsAdmin = () => {
  const [artisans, setArtisans] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUnverified = async () => {
    try {
      const data = await apiService.getUnverifiedArtisans();
      setArtisans(data);
    } catch (err) {
      console.error('Failed to fetch unverified artisans:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUnverified();
  }, []);

  const handleVerify = async (id) => {
    if (!window.confirm('Voulez-vous vraiment vérifier cet artisan ?')) return;
    try {
      await apiService.verifyArtisan(id);
      setArtisans(artisans.filter(a => a.id !== id));
      alert('Artisan vérifié avec succès');
    } catch (err) {
      alert('Erreur lors de la vérification');
    }
  };

  return (
    <AdminLayout title="Certification">
      <div className="space-y-10">
        
        {/* HeaderSection */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-1">
            <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white font-['Outfit',sans-serif]">Vérifications</h2>
            <p className="text-slate-500 dark:text-slate-400 font-medium">Gérez et examinez les demandes de certification des prestataires.</p>
          </div>
          <div className="flex bg-white dark:bg-slate-800 px-6 py-3 rounded-2xl shadow-sm border border-slate-200 dark:border-white/5 items-center gap-3">
            <span className="size-3 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-sm font-black text-slate-700 dark:text-slate-300 font-['Outfit',sans-serif] uppercase tracking-widest">{loading ? '...' : artisans.length} Dossiers en attente</span>
          </div>
        </div>

        {/* Verification Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: 'Attente Action', value: artisans.length, icon: 'hourglass_empty', color: 'bg-indigo-600' },
            { label: 'Certifiés ce mois', value: '124', icon: 'verified', color: 'bg-emerald-500' },
            { label: 'Taux de Rejet', value: '2.4%', icon: 'error', color: 'bg-rose-500' },
          ].map((stat, i) => (
            <div key={i} className="bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 dark:shadow-none border border-white/50 dark:border-white/5 group hover:-translate-y-1 transition-all duration-300">
              <div className="flex justify-between items-start mb-6">
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest font-['Outfit',sans-serif]">{stat.label}</p>
                 <div className={`${stat.color} p-3 rounded-2xl text-white shadow-lg`}>
                   <span className="material-symbols-outlined">{stat.icon}</span>
                 </div>
              </div>
              <p className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter">{loading && i === 0 ? '...' : stat.value}</p>
              <div className="w-full h-1.5 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden mt-6">
                <div className={`h-full ${stat.color} transition-all duration-1000`} style={{ width: i === 0 ? '65%' : i === 1 ? '100%' : '10%' }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Table */}
        <div className="bg-white dark:bg-slate-800 rounded-[2.5rem] shadow-xl shadow-slate-200/50 dark:shadow-none border border-white/50 dark:border-white/5 overflow-hidden">
          <div className="p-10 border-b border-slate-100 dark:border-white/5 flex justify-between items-center">
            <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Dossiers à traiter</h3>
            <button className="p-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-white/5 rounded-2xl hover:bg-slate-100 transition-all text-slate-400">
               <span className="material-symbols-outlined">filter_list</span>
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-separate border-spacing-0">
              <thead>
                <tr className="text-left bg-slate-50/30 dark:bg-slate-900/30">
                  <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 dark:border-white/5">Artisan</th>
                  <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 dark:border-white/5">Spécialité</th>
                  <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 dark:border-white/5">Inscription</th>
                  <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 dark:border-white/5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                {loading ? (
                  [1, 2, 3].map(i => (
                    <tr key={i} className="animate-pulse">
                      <td colSpan="4" className="px-10 py-6"><div className="h-10 bg-slate-100 dark:bg-slate-700 rounded-2xl w-full"></div></td>
                    </tr>
                  ))
                ) : artisans.length === 0 ? (
                  <tr><td colSpan="4" className="text-center py-24 text-slate-400 font-bold italic">Aucune demande en attente</td></tr>
                ) : artisans.map(artisan => (
                  <tr key={artisan.id} className="hover:bg-slate-50/50 dark:hover:bg-white/5 transition-all group">
                    <td className="px-10 py-6">
                      <div className="flex items-center gap-5">
                        <div className="size-14 bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 rounded-[1.25rem] flex items-center justify-center font-black text-xl shadow-inner group-hover:scale-110 transition-transform">
                          {artisan.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-base font-black text-slate-900 dark:text-white tracking-tight">{artisan.name}</p>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 font-bold uppercase mt-1">{artisan.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-10 py-6">
                      <span className="px-4 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 text-[10px] font-black uppercase tracking-widest border border-slate-100 dark:border-white/5">{artisan.specialty || 'N/A'}</span>
                    </td>
                    <td className="px-10 py-6">
                      <p className="text-sm font-black text-slate-500 whitespace-nowrap">{new Date(artisan.created_at).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' })}</p>
                    </td>
                    <td className="px-10 py-6 text-right">
                      <div className="flex items-center justify-end gap-3">
                        <button 
                          onClick={() => handleVerify(artisan.id)}
                          className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-emerald-500/20 transition-all active:scale-95"
                        >
                          Approuver
                        </button>
                        <button className="p-3 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 rounded-2xl hover:bg-slate-50 transition-all shadow-sm">
                          <span className="material-symbols-outlined text-sm">visibility</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default VerificationsAdmin;
