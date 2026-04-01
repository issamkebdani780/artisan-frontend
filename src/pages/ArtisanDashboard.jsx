import React from 'react';
import ArtisanLayout from '../layouts/ArtisanLayout';

const ArtisanDashboard = () => {
  return (
    <ArtisanLayout title="Artisan PRO" subtitle="Premium Plan">
      <div className="p-8 flex flex-col gap-8 flex-1 overflow-y-auto">
        
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-3xl font-black tracking-tight">Bonjour, Jean 👋</h2>
            <p className="text-slate-500 dark:text-stone-400 mt-1">Vos performances sont en hausse de <span className="text-secondary font-bold">15%</span> ce mois-ci.</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-stone-800 border border-secondary/20 rounded-xl font-bold text-sm shadow-sm hover:bg-stone-50 dark:hover:bg-stone-700 transition-all">
              <span className="material-symbols-outlined text-sm">calendar_today</span>
              12 Oct - 19 Oct
            </button>
            <button className="flex items-center gap-2 px-6 py-2 bg-secondary text-white rounded-xl font-bold text-sm shadow-lg shadow-secondary/20 hover:scale-[1.02] transition-transform">
              <span className="material-symbols-outlined text-sm">download</span>
              Télécharger Rapport
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-stone-900 p-6 rounded-2xl border border-[#ec5b13]/10 shadow-sm relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#ec5b13]/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
            <p className="text-slate-500 dark:text-stone-400 text-sm font-semibold relative z-10">Revenus Totaux</p>
            <h3 className="text-3xl font-black mt-2 relative z-10">4 285,00 €</h3>
            <div className="flex items-center gap-1 mt-4 text-emerald-500 font-bold text-sm relative z-10">
              <span className="material-symbols-outlined text-sm">trending_up</span>
              +8.2%
              <span className="text-slate-400 font-normal ml-1">vs mois dernier</span>
            </div>
          </div>
          
          <div className="bg-white dark:bg-stone-900 p-6 rounded-2xl border border-[#ec5b13]/10 shadow-sm relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#ec5b13]/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
            <p className="text-slate-500 dark:text-stone-400 text-sm font-semibold relative z-10">Projets Actifs</p>
            <h3 className="text-3xl font-black mt-2 relative z-10">12</h3>
            <div className="flex items-center gap-1 mt-4 text-emerald-500 font-bold text-sm relative z-10">
              <span className="material-symbols-outlined text-sm">trending_up</span>
              +3.1%
              <span className="text-slate-400 font-normal ml-1">en temps réel</span>
            </div>
          </div>
          
          <div className="bg-white dark:bg-stone-900 p-6 rounded-2xl border border-[#ec5b13]/10 shadow-sm relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#ec5b13]/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
            <p className="text-slate-500 dark:text-stone-400 text-sm font-semibold relative z-10">Vue de la Boutique</p>
            <h3 className="text-3xl font-black mt-2 relative z-10">1 420</h3>
            <div className="flex items-center gap-1 mt-4 text-orange-500 font-bold text-sm relative z-10">
              <span className="material-symbols-outlined text-sm">trending_flat</span>
              -1.2%
              <span className="text-slate-400 font-normal ml-1">stable</span>
            </div>
          </div>
          
          <div className="bg-[#ec5b13] p-6 rounded-2xl shadow-xl shadow-[#ec5b13]/20 text-white relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
            <p className="text-white/80 text-sm font-semibold relative z-10">Taux de Satisfaction</p>
            <h3 className="text-3xl font-black mt-2 relative z-10">98.4%</h3>
            <div className="flex items-center gap-1 mt-4 font-bold text-sm relative z-10">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              Statut Elite
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-stone-900 p-8 rounded-2xl border border-[#ec5b13]/10 shadow-sm flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h4 className="text-xl font-black">Performance Financière</h4>
                <p className="text-sm text-slate-500">Revenus mensuels</p>
              </div>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-[#ec5b13]/10 text-[#ec5b13] text-xs font-bold rounded-full">Derniers 6 mois</span>
              </div>
            </div>
            <div className="h-64 flex flex-col justify-end">
              <div className="flex items-end gap-3 h-48 w-full">
                {[
                  { month: 'Jan', val: '40%', amnt: '1.2k', color: 'bg-[#ec5b13]/10' },
                  { month: 'Fév', val: '60%', amnt: '1.8k', color: 'bg-[#ec5b13]/20' },
                  { month: 'Mar', val: '50%', amnt: '1.5k', color: 'bg-[#ec5b13]/40' },
                  { month: 'Avr', val: '80%', amnt: '2.4k', color: 'bg-[#ec5b13]/60' },
                  { month: 'Mai', val: '75%', amnt: '2.2k', color: 'bg-[#ec5b13]/80' },
                  { month: 'Juin', val: '100%', amnt: '3.0k', color: 'bg-[#ec5b13]' }
                ].map((bar, idx) => (
                  <div key={idx} className="flex-1 flex flex-col gap-2 items-center">
                    <div className={`w-full ${bar.color} rounded-t-lg group relative`} style={{ height: bar.val }}>
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-stone-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
                        {bar.amnt} €
                      </div>
                    </div>
                    <span className="text-xs font-bold text-slate-400">{bar.month}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-stone-900 p-8 rounded-2xl border border-[#ec5b13]/10 shadow-sm flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h4 className="text-xl font-black">Flux de travail</h4>
                <p className="text-sm text-slate-500">Statut des projets en cours</p>
              </div>
              <span className="flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 text-emerald-500 text-xs font-bold rounded-full">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                En direct
              </span>
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <div className="relative h-48 w-full flex items-center justify-center">
                <div className="size-28 rounded-full border-12 border-slate-50 dark:border-slate-800 shadow-inner overflow-hidden">
                  <div className="size-full bg-indigo-500 rounded-full border-12 border-white dark:border-slate-900 flex items-center justify-center text-white">
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-4xl font-black text-slate-800 dark:text-white">88%</span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Efficacité</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-4 rounded-xl bg-[#f8f6f6] dark:bg-stone-800 border border-slate-100 dark:border-stone-700 text-center md:text-left">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Temps Moyen</p>
                  <p className="text-lg font-black text-[#ec5b13] mt-1">3.4 Jours</p>
                </div>
                <div className="p-4 rounded-xl bg-[#f8f6f6] dark:bg-stone-800 border border-slate-100 dark:border-stone-700 text-center md:text-left">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Litiges</p>
                  <p className="text-lg font-black text-[#ec5b13] mt-1">0%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Projects List */}
        <div className="bg-white dark:bg-stone-900 rounded-2xl border border-[#ec5b13]/10 shadow-sm overflow-hidden min-h-[400px]">
          <div className="p-6 border-b border-stone-100 dark:border-stone-800 flex justify-between items-center bg-slate-50/50 dark:bg-stone-900">
            <h4 className="text-xl font-black text-slate-800 dark:text-white">Projets en cours</h4>
            <a href="/dashboard/artisan/projects" className="text-[#ec5b13] font-bold text-sm hover:underline">Voir tous</a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#f8f6f6] dark:bg-stone-800/80 border-b border-stone-200 dark:border-stone-700">
                <tr>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Projet</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Statut</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Progression</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Délai</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Budget</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 dark:divide-stone-800">
                <tr className="hover:bg-[#f8f6f6] dark:hover:bg-stone-800/50 transition-colors cursor-pointer group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-sm">chair</span>
                      </div>
                      <span className="font-bold text-slate-800 dark:text-white group-hover:text-[#ec5b13] transition-colors">Fabrication Buffet Chêne</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-[#ec5b13] text-white text-[10px] font-bold rounded-full shadow-sm">Actif</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="w-32 bg-stone-100 dark:bg-stone-700 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-[#ec5b13] h-full w-[70%]"></div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-300">12 Jours restants</td>
                  <td className="px-6 py-4 text-right font-black text-[#ec5b13]">4 500,00 €</td>
                </tr>
                
                <tr className="hover:bg-[#f8f6f6] dark:hover:bg-stone-800/50 transition-colors cursor-pointer group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-sm">kitchen</span>
                      </div>
                      <span className="font-bold text-slate-800 dark:text-white group-hover:text-blue-600 transition-colors">Rénovation Cuisine</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-stone-200 dark:bg-stone-700 text-stone-600 dark:text-stone-300 text-[10px] font-bold rounded-full shadow-sm">En révision</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="w-32 bg-stone-100 dark:bg-stone-700 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-blue-600 h-full w-[95%]"></div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-300">2 Jours restants</td>
                  <td className="px-6 py-4 text-right font-black text-[#ec5b13]">8 200,00 €</td>
                </tr>
                
                <tr className="hover:bg-[#f8f6f6] dark:hover:bg-stone-800/50 transition-colors cursor-pointer group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-sm">door_sliding</span>
                      </div>
                      <span className="font-bold text-slate-800 dark:text-white group-hover:text-emerald-600 transition-colors">Porte sur mesure</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-emerald-500 text-white text-[10px] font-bold rounded-full shadow-sm">Livré</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="w-32 bg-stone-100 dark:bg-stone-700 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full w-[100%]"></div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-emerald-600 dark:text-emerald-400">Terminé</td>
                  <td className="px-6 py-4 text-right font-black text-[#ec5b13]">1 200,00 €</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </ArtisanLayout>
  );
};

export default ArtisanDashboard;
