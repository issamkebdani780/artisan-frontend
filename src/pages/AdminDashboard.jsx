import React, { useState, useEffect } from 'react';
import AdminLayout from '../layouts/AdminLayout';
import apiService from '../services/api';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    artisans: 0,
    clients: 0,
    bookings: 0,
    totalRevenue: 0
  });
  const [unverified, setUnverified] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let statsData = { artisans: 0, clients: 0, bookings: 0, totalRevenue: 0 };
        let unverifiedData = [];

        // Fetch stats with error handling
        try {
          statsData = await apiService.getPlatformStats();
        } catch (err) {
          console.error('Failed to fetch stats:', err);
          // Set default values
        }

        // Fetch unverified artisans with error handling
        try {
          unverifiedData = await apiService.getUnverifiedArtisans();
        } catch (err) {
          console.error('Failed to fetch unverified artisans:', err);
          unverifiedData = [];
        }

        setStats(statsData);
        setUnverified(unverifiedData);
      } catch (err) {
        console.error('Unexpected error in dashboard:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleVerify = async (id) => {
    try {
      await apiService.verifyArtisan(id);
      setUnverified(unverified.filter(a => a.id !== id));
      // Optionally refresh stats
      const newStats = await apiService.getPlatformStats();
      setStats(newStats);
    } catch (err) {
      alert('Verification failed');
    }
  };

  return (
    <AdminLayout>
      <div className="p-8 space-y-8 flex-1 overflow-y-auto">
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-4 shadow-sm hover:shadow-md transition">
            <div className="p-3 rounded-xl bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400">
              <span className="material-symbols-outlined">engineering</span>
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Total Artisans</p>
              <div className="flex items-baseline gap-2">
                <p className="text-xl font-bold">{loading ? '...' : stats.artisans.toLocaleString()}</p>
                <span className="text-[10px] text-emerald-500 font-bold">+12.5%</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-4 shadow-sm hover:shadow-md transition">
            <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400">
              <span className="material-symbols-outlined">person_add</span>
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Nouveaux Clients</p>
              <div className="flex items-baseline gap-2">
                <p className="text-xl font-bold">{loading ? '...' : stats.clients.toLocaleString()}</p>
                <span className="text-[10px] text-emerald-500 font-bold">+5.2%</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-4 shadow-sm hover:shadow-md transition">
            <div className="p-3 rounded-xl bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400">
              <span className="material-symbols-outlined">payments</span>
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Revenu Global</p>
              <div className="flex items-baseline gap-2">
                <p className="text-xl font-bold flex items-center">{loading ? '...' : `${Number(stats.totalRevenue).toLocaleString()} €`}</p>
                <span className="text-[10px] text-emerald-500 font-bold">+8.1%</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-4 shadow-sm hover:shadow-md transition">
            <div className="p-3 rounded-xl bg-pink-100 dark:bg-pink-900/40 text-pink-600 dark:text-pink-400">
              <span className="material-symbols-outlined">pending_actions</span>
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Total Bookings</p>
              <div className="flex items-baseline gap-2">
                <p className="text-xl font-bold">{loading ? '...' : stats.bookings.toLocaleString()}</p>
                <span className="text-[10px] text-emerald-500 font-bold">+14%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Revenue Growth */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Croissance des revenus</h3>
                <p className="text-sm text-slate-500">Performance hebdomadaire du réseau</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-black text-indigo-600">125k €</p>
                <p className="text-xs text-emerald-500 font-bold">↑ 15.4% ce mois</p>
              </div>
            </div>
            <div className="h-64 relative flex-1 flex flex-col justify-end">
              <div className="absolute inset-x-0 bottom-10 top-0 overflow-hidden pointer-events-none">
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 500 200">
                  <defs>
                    <linearGradient id="chartGrad" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.2"></stop>
                      <stop offset="100%" stopColor="#4f46e5" stopOpacity="0"></stop>
                    </linearGradient>
                  </defs>
                  <path d="M0 160 Q 50 140 100 150 T 200 100 T 300 120 T 400 40 T 500 80 V 200 H 0 Z" fill="url(#chartGrad)"></path>
                  <path d="M0 160 Q 50 140 100 150 T 200 100 T 300 120 T 400 40 T 500 80" fill="none" stroke="#4f46e5" strokeLinecap="round" strokeWidth="4"></path>
                </svg>
              </div>
              <div className="relative flex justify-between mt-auto text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2 pb-1">
                <span>Lun</span><span>Mar</span><span>Mer</span><span>Jeu</span><span>Ven</span><span>Sam</span><span>Dim</span>
              </div>
            </div>
          </div>

          {/* User Activity */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Activité des utilisateurs</h3>
                <p className="text-sm text-slate-500">Utilisateurs actifs par mois</p>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-2xl font-black text-slate-900 dark:text-white">8.5k</p>
                <p className="text-xs text-emerald-500 font-bold">↑ 10.2% cette année</p>
              </div>
            </div>
            <div className="h-64 flex-1 flex flex-col justify-end">
              <div className="flex items-end justify-between gap-3 px-2 h-48 w-full">
                {[40, 65, 45, 80, 55, 90].map((val, idx) => (
                  <div key={idx} className={`w-full ${idx === 5 ? 'bg-indigo-600' : 'bg-slate-100 dark:bg-slate-800'} rounded-t-xl relative group`} style={{ height: `${val}%` }}>
                    {idx !== 5 && <div className="absolute inset-0 bg-indigo-600 opacity-20 group-hover:opacity-100 transition-opacity rounded-t-xl"></div>}
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest px-2">
                <span>Jan</span><span>Fév</span><span>Mar</span><span>Avr</span><span>Mai</span><span>Juin</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity Table */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/20">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Dernières vérifications d'artisans</h3>
            <button className="text-sm font-bold text-indigo-600 hover:underline">Voir tout</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Artisan</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Métier</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Statut</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {loading ? (
                   <tr><td colSpan="5" className="px-6 py-4 text-center text-slate-400">Chargement...</td></tr>
                ) : unverified.length === 0 ? (
                   <tr><td colSpan="5" className="px-6 py-4 text-center text-slate-400 italic">Aucune demande en attente</td></tr>
                ) : unverified.map(artisan => (
                  <tr key={artisan.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="size-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center font-bold text-indigo-700 text-xs shadow-inner">
                          {artisan.name.charAt(0)}
                        </div>
                        <span className="text-sm font-semibold text-slate-900 dark:text-white">{artisan.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{artisan.specialty || 'Général'}</td>
                    <td className="px-6 py-4 text-sm text-slate-500">{new Date(artisan.created_at).toLocaleDateString()}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">
                        <span className="size-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
                        En attente
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button 
                        onClick={() => handleVerify(artisan.id)}
                        className="text-sm font-bold text-indigo-600 hover:underline"
                      >
                        Vérifier
                      </button>
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
