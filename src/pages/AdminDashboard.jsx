import React, { useState, useEffect } from 'react';
import AdminLayout from '../layouts/AdminLayout';
import apiService from '../services/api';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalArtisans: 0,
    totalClients: 0,
    totalBookings: 0,
    totalRevenue: 0,
    pendingDisputes: 0,
    recentActivities: []
  });
  const [unverified, setUnverified] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [statsData, unverifiedData] = await Promise.all([
          apiService.getDetailedStats(),
          apiService.getUnverifiedArtisans()
        ]);

        setStats(statsData);
        setUnverified(unverifiedData);
      } catch (err) {
        console.error('Failed to fetch dashboard data:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleVerify = async (id) => {
    if (!window.confirm('Voulez-vous vraiment valider cet artisan ?')) return;
    try {
      await apiService.verifyArtisan(id);
      setUnverified(unverified.filter(a => a.id !== id));
      const newStats = await apiService.getDetailedStats();
      setStats(newStats);
    } catch (err) {
      alert('Échec de la vérification');
    }
  };

  return (
    <AdminLayout title="Tableau de bord">
      <div className="space-y-10">
        
        {/* Welcome Header */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Tableau de bord</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-1 font-medium">Bienvenue, voici un aperçu de l'activité de votre plateforme.</p>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 rounded-2xl text-sm font-bold shadow-sm hover:shadow-md transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">download</span>
              Télécharger Rapport
            </button>
            <button className="px-6 py-3 bg-primary text-white rounded-2xl text-sm font-black shadow-lg shadow-primary/30 hover:bg-primary-dark transition-all">
              Nouvelle Campagne
            </button>
          </div>
        </div>

        {/* Premium Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {[
            { label: 'Revenu Total', value: `${Number(stats.totalRevenue).toLocaleString()} €`, change: '+12.5%', icon: 'payments', color: 'bg-blue-500', trend: 'up' },
            { label: 'Artisans Actifs', value: stats.totalArtisans, change: '+3.2%', icon: 'construction', color: 'bg-secondary', trend: 'up' },
            { label: 'Nouveaux Clients', value: stats.totalClients, change: '+8.4%', icon: 'person_add', color: 'bg-primary', trend: 'up' },
            { label: 'Litiges en cours', value: stats.pendingDisputes, change: '-2.1%', icon: 'warning', color: 'bg-rose-500', trend: 'down' },
          ].map((card, i) => (
            <div key={i} className="bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 dark:shadow-none border border-white/50 dark:border-white/5 flex flex-col gap-6 group hover:-translate-y-1 transition-all duration-500">
              <div className="flex justify-between items-start">
                <div className={`${card.color} size-14 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:rotate-6 transition-transform duration-500`}>
                  <span className="material-symbols-outlined text-2xl font-bold">{card.icon}</span>
                </div>
                <div className={`px-3 py-1 rounded-full text-[11px] font-black flex items-center gap-1 ${card.trend === 'up' ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-600'}`}>
                   <span className="material-symbols-outlined text-xs">{card.trend === 'up' ? 'trending_up' : 'trending_down'}</span>
                   {card.change}
                </div>
              </div>
              <div>
                <p className="text-slate-400 font-bold text-xs uppercase tracking-widest leading-loose">{card.label}</p>
                <p className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter mt-1">
                  {loading ? '...' : card.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Row: Performance Chart & Recent Activities */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
          
          {/* Performance Chart - Takes 2 columns */}
          <div className="xl:col-span-2 bg-white dark:bg-slate-800 p-10 rounded-[3rem] shadow-xl shadow-slate-200/50 dark:shadow-none border border-white/50 dark:border-white/5 relative overflow-hidden group">
            <div className="flex justify-between items-start mb-10 relative z-10">
              <div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Performance des ventes</h3>
                <p className="text-slate-400 font-medium mt-1">Volume des transactions mensuelles</p>
              </div>
              <div className="px-4 py-2 bg-slate-50 dark:bg-slate-900/50 rounded-xl text-xs font-black text-slate-500 border border-slate-100 dark:border-white/5">
                Année 2026
              </div>
            </div>
            
            {/* Custom SVG Bar Chart */}
            <div className="h-80 flex items-end justify-between gap-4 px-4 relative z-10 mt-8">
              {[35, 60, 52, 85, 78, 55, 95].map((val, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-4 group/bar">
                  <div 
                    className={`w-full rounded-2xl transition-all duration-1000 ease-out relative ${i === 6 ? 'bg-primary shadow-xl shadow-primary/40' : i === 3 ? 'bg-primary/80' : 'bg-blue-100 dark:bg-blue-900/30 group-hover/bar:bg-blue-200'}`}
                    style={{ height: loading ? '0%' : `${val}%` }}
                  >
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-black px-2 py-1 rounded-md opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap">
                      {val}k €
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-tighter">
                    {['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Jul'][i]}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 size-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
          </div>

          {/* Recent Activity Feed */}
          <div className="bg-[#1E1B4B] dark:bg-slate-950 p-10 rounded-[3rem] shadow-2xl text-white relative overflow-hidden">
            <h3 className="text-2xl font-black tracking-tight mb-8 relative z-10">Activités Récentes</h3>
            
            <div className="space-y-8 relative z-10">
              {loading ? (
                <div className="space-y-4">
                  {[1,2,3,4].map(i => <div key={i} className="h-16 bg-white/5 rounded-2xl animate-pulse"></div>)}
                </div>
              ) : stats.recentActivities && stats.recentActivities.length > 0 ? (
                stats.recentActivities.map((act, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="flex flex-col items-center gap-2">
                       <div className={`size-3 rounded-full border-2 border-white/20 mt-1.5 ${i===0 ? 'bg-emerald-400' : i===1 ? 'bg-amber-400' : i===2 ? 'bg-blue-400' : 'bg-primary'}`}></div>
                       {i !== stats.recentActivities.length - 1 && <div className="w-[2px] flex-1 bg-white/10 rounded-full"></div>}
                    </div>
                    <div className="flex-1 pb-2">
                      <p className="font-bold text-sm tracking-tight">{act.name || act.type}</p>
                      <p className="text-[11px] text-blue-200 font-medium uppercase tracking-tighter mt-1 opacity-80">
                         {act.type === 'Nouvel Artisan' ? 'Inscrit il y a ' : 'Créé il y a '} 
                         {Math.floor((new Date() - new Date(act.time)) / (1000 * 60 * 60))}h
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-slate-400 text-sm italic">Aucune activité récente</p>
              )}
            </div>
            
            <button className="w-full mt-10 py-4 bg-white/10 hover:bg-white/20 rounded-2xl font-bold text-sm transition-all border border-white/5">
              Voir tout l'historique
            </button>
            
            {/* Decoration */}
            <div className="absolute bottom-0 left-0 size-48 bg-primary/10 rounded-full blur-3xl -ml-24 -mb-24"></div>
          </div>
        </div>

        {/* Bottom Section: Artisans awaiting validation */}
        <div className="bg-white dark:bg-slate-800 p-10 rounded-[3rem] shadow-xl shadow-slate-200/50 dark:shadow-none border border-white/50 dark:border-white/5">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Artisans en attente de validation</h3>
              <p className="text-slate-400 font-medium mt-1">Gérez les nouveaux dossiers d'artisans</p>
            </div>
            <button className="text-primary font-black text-sm hover:underline">Voir tout</button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-separate border-spacing-y-4">
              <thead>
                <tr className="text-left">
                  <th className="px-6 pb-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">Artisan</th>
                  <th className="px-6 pb-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">Catégorie</th>
                  <th className="px-6 pb-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">Localisation</th>
                  <th className="px-6 pb-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">Inscrit le</th>
                  <th className="px-6 pb-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">Statut</th>
                  <th className="px-6 pb-2 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr><td colSpan="6" className="text-center py-10 text-slate-400 animate-pulse font-bold">Chargement des données...</td></tr>
                ) : unverified.length === 0 ? (
                  <tr><td colSpan="6" className="text-center py-10 text-slate-400 italic">Aucun artisan en attente</td></tr>
                ) : unverified.map((artisan, i) => (
                  <tr key={i} className="group hover:-translate-y-1 transition-transform duration-300">
                    <td className="bg-slate-50 dark:bg-slate-900/40 px-6 py-5 rounded-l-3xl border-y border-l border-slate-100 dark:border-white/5">
                      <div className="flex items-center gap-4">
                        <div className="size-12 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center font-black text-primary dark:text-blue-400 text-sm">
                          {artisan.name.split(' ').map(n=>n[0]).join('')}
                        </div>
                        <div>
                          <p className="font-black text-slate-900 dark:text-white text-sm tracking-tight">{artisan.name}</p>
                          <p className="text-[11px] text-slate-500 font-medium mt-0.5">{artisan.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="bg-slate-50 dark:bg-slate-900/40 px-6 py-5 border-y border-slate-100 dark:border-white/5 font-bold text-sm text-slate-600 dark:text-slate-300">
                      {artisan.specialty || 'Non spécifié'}
                    </td>
                    <td className="bg-slate-50 dark:bg-slate-900/40 px-6 py-5 border-y border-slate-100 dark:border-white/5 font-bold text-sm text-slate-500">
                      {artisan.address || 'Algérie'}
                    </td>
                    <td className="bg-slate-50 dark:bg-slate-900/40 px-6 py-5 border-y border-slate-100 dark:border-white/5 font-bold text-sm text-slate-500">
                      {new Date(artisan.created_at).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' })}
                    </td>
                    <td className="bg-slate-50 dark:bg-slate-900/40 px-6 py-5 border-y border-slate-100 dark:border-white/5">
                      <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-[10px] font-black uppercase tracking-tighter">
                         En attente
                      </span>
                    </td>
                    <td className="bg-slate-50 dark:bg-slate-900/40 px-6 py-5 rounded-r-3xl border-y border-r border-slate-100 dark:border-white/5 text-right">
                       <div className="flex items-center justify-end gap-1">
                         {artisan.artisan_documents && (
                           <button 
                             onClick={() => {
                               const docs = artisan.artisan_documents.split(',');
                               docs.forEach(url => window.open(url.trim(), '_blank'));
                             }}
                             className="p-2 text-indigo-500 hover:bg-white dark:hover:bg-slate-800 rounded-xl transition-colors"
                             title="Voir Documents"
                           >
                             <span className="material-symbols-outlined font-bold">description</span>
                           </button>
                         )}
                         <button 
                          onClick={() => handleVerify(artisan.id)}
                          className="p-2 text-primary hover:bg-white dark:hover:bg-slate-800 rounded-xl transition-colors"
                          title="Vérifier l'artisan"
                         >
                           <span className="material-symbols-outlined font-bold">check_circle</span>
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

export default AdminDashboard;
