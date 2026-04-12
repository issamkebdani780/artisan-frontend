import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;


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


  const totalPages = Math.ceil(unverified.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = unverified.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


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
  const handleRefuse = async (id) => {
    if (!window.confirm('Voulez-vous vraiment refuser cet artisan ?')) return;
    try {
      await apiService.refuseArtisan(id);
      setUnverified(unverified.filter(a => a.id !== id));
      const newStats = await apiService.getDetailedStats();
      setStats(newStats);
    } catch (err) {
      alert('Échec du refus');
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
            {/* Download/Campaign buttons removed */}
          </div>

        </div>

        {/* Premium Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {[
            { label: 'Revenu Total', value: `${Number(stats.totalRevenue).toLocaleString()} DA`, change: stats.changes?.revenue || '0%', icon: 'payments', color: 'bg-blue-500', trend: 'up' },
            { label: 'Artisans Actifs', value: stats.totalArtisans, change: stats.changes?.artisans || '0%', icon: 'construction', color: 'bg-secondary', trend: 'up' },
            { label: 'Nouveaux Clients', value: stats.totalClients, change: stats.changes?.clients || '0%', icon: 'person_add', color: 'bg-primary', trend: 'up' },
          ].map((card, i) => (

            <div key={i} className="bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 dark:shadow-none border border-white/50 dark:border-white/5 flex flex-col gap-6 group hover:-translate-y-1 transition-all duration-500">
              <div className="flex justify-between items-start">
                <div className={`${card.color} size-14 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:rotate-6 transition-transform duration-500`}>
                  <span className="material-symbols-outlined text-2xl font-bold">{card.icon}</span>
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

          {/* Performance Chart Card */}
          <div className="xl:col-span-2 bg-white dark:bg-slate-800 p-10 rounded-[3rem] shadow-xl shadow-slate-200/50 dark:shadow-none border border-white/50 dark:border-white/5">
            <div className="flex justify-between items-center mb-10">
              <div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Analyse de Performance</h3>
                <p className="text-slate-400 font-medium mt-1">Évolution des revenus sur les 6 derniers mois</p>
              </div>
              <div className="hidden sm:flex gap-2">
                <span className="px-4 py-2 bg-slate-50 dark:bg-slate-900/40 rounded-xl text-[10px] font-black text-slate-400 uppercase tracking-widest border border-slate-100 dark:border-white/5 transition-all cursor-default">
                  Derniers 180 Jours
                </span>
              </div>
            </div>

            {/* Simple SVG Chart Representation */}
            <div className="h-64 w-full relative">
              {/* Grid Lines */}
              {[0, 1, 2, 3].map(i => (
                <div key={i} className="absolute w-full h-px bg-slate-100 dark:bg-white/5" style={{ bottom: `${i * 33}%` }}></div>
              ))}

              <svg className="w-full h-full relative z-10" viewBox="0 0 100 40" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Area Background */}
                <path
                  d="M 0,40 L 0,30 C 20,40 40,10 60,25 S 80,5 100,15 L 100,40 Z"
                  fill="url(#chartGradient)"
                />

                {/* Main Path */}
                <path
                  d="M 0,30 C 20,40 40,10 60,25 S 80,5 100,15"
                  fill="none"
                  stroke="#4f46e5"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>

              {/* X-Axis Labels */}
              <div className="absolute -bottom-6 w-full flex justify-between px-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                <span>Jan</span><span>Mar</span><span>Mai</span><span>Jul</span><span>Sep</span><span>Nov</span>
              </div>
            </div>

            {/* Sub Stats Row */}
            <div className="mt-12 pt-8 border-t border-slate-100 dark:border-white/5 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center">
                  <span className="material-symbols-outlined text-sm font-black">trending_up</span>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Taux Croissance</p>
                  <p className="text-lg font-black text-slate-900 dark:text-white">+24.8%</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center">
                  <span className="material-symbols-outlined text-sm font-black">group</span>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Rétention Client</p>
                  <p className="text-lg font-black text-slate-900 dark:text-white">82%</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
                  <span className="material-symbols-outlined text-sm font-black">avg_time</span>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Intervention Moyenne</p>
                  <p className="text-lg font-black text-slate-900 dark:text-white">4.2h</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#1E1B4B] dark:bg-slate-950 p-10 rounded-[3rem] shadow-2xl text-white relative overflow-hidden h-full">
            <h3 className="text-2xl font-black tracking-tight mb-8 relative z-10">Activités Récentes</h3>

            <div className="space-y-8 relative z-10">
              {loading ? (
                <div className="space-y-4">
                  {[1, 2, 3, 4].map(i => <div key={i} className="h-16 bg-white/5 rounded-2xl animate-pulse"></div>)}
                </div>
              ) : stats.recentActivities && stats.recentActivities.length > 0 ? (
                stats.recentActivities.map((act, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="flex flex-col items-center gap-2">
                      <div className={`size-3 rounded-full border-2 border-white/20 mt-1.5 ${i === 0 ? 'bg-emerald-400' : i === 1 ? 'bg-amber-400' : i === 2 ? 'bg-blue-400' : 'bg-primary'}`}></div>
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

            <Link to="/dashboard/admin/artisans" className="w-full mt-10 py-4 bg-white/10 hover:bg-white/20 rounded-2xl font-bold text-sm transition-all border border-white/5 flex items-center justify-center">
              Voir tout l'historique
            </Link>

            {/* Decoration */}
            <div className="absolute bottom-0 left-0 size-48 bg-primary/10 rounded-full blur-3xl -ml-24 -mb-24"></div>
          </div>

          {/* Circular Category Distribution */}
          <div className="bg-white dark:bg-slate-800 p-10 rounded-[3rem] shadow-xl shadow-slate-200/50 dark:shadow-none border border-white/50 dark:border-white/5">
            <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight mb-8">Demandes par Secteur</h3>
            <div className="flex flex-col items-center gap-8">
              <div className="size-48 rounded-full relative flex items-center justify-center transition-transform hover:rotate-6 duration-700" style={{ background: 'conic-gradient(#4f46e5 0% 45%, #f28b2c 45% 75%, #10b981 75% 100%)' }}>
                <div className="absolute inset-4 bg-white dark:bg-slate-800 rounded-full shadow-inner flex flex-col items-center justify-center">
                  <span className="text-2xl font-black text-slate-900 dark:text-white">100%</span>
                  <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Global</span>
                </div>
              </div>
              <div className="w-full space-y-3">
                {[
                  { name: 'Travaux', color: 'bg-indigo-600', val: '45%' },
                  { name: 'Services', color: 'bg-secondary', val: '30%' },
                  { name: 'Autres', color: 'bg-emerald-500', val: '25%' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <div className={`size-2 rounded-full ${item.color}`}></div>
                      <span className="text-xs font-bold text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{item.name}</span>
                    </div>
                    <span className="text-xs font-black text-slate-900 dark:text-white">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section: Artisans awaiting validation - Now beside Activity */}
          <div className="xl:col-span-2 bg-white dark:bg-slate-800 p-10 rounded-[3rem] shadow-xl shadow-slate-200/50 dark:shadow-none border border-white/50 dark:border-white/5">
            <div className="flex justify-between items-center mb-10">
              <div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Artisans en attente</h3>
                <p className="text-slate-400 font-medium mt-1">Nouveaux dossiers à vérifier</p>
              </div>
              <Link to="/dashboard/admin/verifications" className="text-primary font-black text-sm hover:underline">Voir tout</Link>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-separate border-spacing-y-4">
                <thead>
                  <tr className="text-left">
                    <th className="px-6 pb-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">Artisan</th>
                    <th className="px-6 pb-2 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr><td colSpan="2" className="text-center py-10 text-slate-400 animate-pulse font-bold">Chargement...</td></tr>
                  ) : unverified.length === 0 ? (
                    <tr><td colSpan="2" className="text-center py-10 text-slate-400 italic">Tout est à jour !</td></tr>
                  ) : currentItems.map((artisan) => (
                    <tr key={artisan.id}>
                      <td className="bg-slate-50 dark:bg-slate-900/40 px-6 py-4 rounded-l-3xl border-y border-l border-slate-100 dark:border-white/5">
                        <div className="flex items-center gap-4">
                          <div className="size-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center font-black text-primary dark:text-blue-400 text-xs">
                            {artisan.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <p className="font-black text-slate-900 dark:text-white text-xs tracking-tight">{artisan.name}</p>
                            <p className="text-[10px] text-slate-500 font-medium">{artisan.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="bg-slate-50 dark:bg-slate-900/40 px-6 py-4 rounded-r-3xl border-y border-r border-slate-100 dark:border-white/5 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            onClick={() => handleVerify(artisan.id)}
                            className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-xl transition-colors"
                            title="Vérifier"
                          >
                            <span className="material-symbols-outlined font-bold">check_circle</span>
                          </button>
                          <button
                            onClick={() => handleRefuse(artisan.id)}
                            className="p-2 text-amber-600 hover:bg-amber-50 rounded-xl transition-colors"
                            title="Refuser"
                          >
                            <span className="material-symbols-outlined font-bold">cancel</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {unverified.length > itemsPerPage && (
              <div className="flex justify-between items-center mt-6 pt-6 border-t border-slate-100 dark:border-white/5">
                <p className="text-xs font-bold text-slate-400">
                  Artisans {indexOfFirstItem + 1} - {Math.min(indexOfLastItem, unverified.length)} sur {unverified.length}
                </p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-2 rounded-xl border border-slate-200 dark:border-white/10 hover:bg-white dark:hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  >
                    <span className="material-symbols-outlined text-xl">chevron_left</span>
                  </button>

                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i + 1}
                      onClick={() => handlePageChange(i + 1)}
                      className={`size-10 rounded-xl text-sm font-black transition-all ${currentPage === i + 1 ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-500 hover:bg-white dark:hover:bg-slate-800 border border-transparent hover:border-slate-200'}`}
                    >
                      {i + 1}
                    </button>
                  ))}

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-xl border border-slate-200 dark:border-white/10 hover:bg-white dark:hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  >
                    <span className="material-symbols-outlined text-xl">chevron_right</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
