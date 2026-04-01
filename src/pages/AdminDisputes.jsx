import React from 'react';
import AdminLayout from '../layouts/AdminLayout';

const AdminDisputes = () => {
  return (
    <AdminLayout>
      <div className="p-8 space-y-8 flex-1 overflow-y-auto">
        {/* Page Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Gestion des Litiges</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-1">Suivi centralisé des dossiers de recours administratifs et médiations clients.</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
              <span className="material-symbols-outlined text-lg">download</span>
              Exporter CSV
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-bold shadow-md shadow-indigo-600/20 hover:bg-indigo-700 transition-colors">
              <span className="material-symbols-outlined text-lg">add</span>
              Nouveau Dossier
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm transition-transform hover:-translate-y-1">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600">
                <span className="material-symbols-outlined">folder_open</span>
              </div>
              <span className="text-xs font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded-full">+5.2%</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Total Litiges</p>
            <p className="text-2xl font-black mt-1">124</p>
          </div>
          
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm text-red-600 dark:text-red-400 transition-transform hover:-translate-y-1">
            <div className="flex justify-between items-start mb-4 text-red-600">
              <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
                <span className="material-symbols-outlined">priority_high</span>
              </div>
              <span className="text-xs font-bold bg-red-500/10 px-2 py-1 rounded-full">-2.4%</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Urgence Haute</p>
            <p className="text-2xl font-black mt-1">12</p>
          </div>
          
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm transition-transform hover:-translate-y-1">
            <div className="flex justify-between items-start mb-4 text-amber-500">
              <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                <span className="material-symbols-outlined">history</span>
              </div>
              <span className="text-xs font-bold bg-amber-500/10 px-2 py-1 rounded-full text-amber-600">Stagnant</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Délai Moyen</p>
            <p className="text-2xl font-black mt-1">4.2 jrs</p>
          </div>
          
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm transition-transform hover:-translate-y-1">
            <div className="flex justify-between items-start mb-4 text-indigo-600">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                <span className="material-symbols-outlined">task_alt</span>
              </div>
              <span className="text-xs font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded-full">+12%</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Taux Résolution</p>
            <p className="text-2xl font-black mt-1">88%</p>
          </div>
        </div>

        {/* Tabs & Filters */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="border-b border-slate-200 dark:border-slate-800 px-6">
            <nav className="flex gap-8">
              <button className="py-4 border-b-2 border-indigo-600 text-indigo-600 text-sm font-bold">Tous les dossiers</button>
              <button className="py-4 border-b-2 border-transparent text-slate-500 dark:text-slate-400 text-sm font-medium hover:text-slate-900 dark:hover:text-slate-100 transition-colors">En attente (45)</button>
              <button className="py-4 border-b-2 border-transparent text-slate-500 dark:text-slate-400 text-sm font-medium hover:text-slate-900 dark:hover:text-slate-100 transition-colors">En cours (22)</button>
              <button className="py-4 border-b-2 border-transparent text-slate-500 dark:text-slate-400 text-sm font-medium hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Résolus (57)</button>
            </nav>
          </div>
          
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">
                  <th className="px-6 py-4">Dossier #</th>
                  <th className="px-6 py-4">Parties Impliquées</th>
                  <th className="px-6 py-4">Sévérité</th>
                  <th className="px-6 py-4">Statut</th>
                  <th className="px-6 py-4">Date Ouverture</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                  <td className="px-6 py-4">
                    <p className="font-bold text-sm">L-2024-0891</p>
                    <p className="text-xs text-slate-500">Médiation Civile</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] uppercase font-bold text-indigo-600 bg-indigo-50 dark:bg-indigo-900/30 px-1.5 rounded">Artisan</span>
                        <span className="text-sm font-medium">BatiPlus SARL</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] uppercase font-bold text-indigo-400 bg-indigo-400/10 px-1.5 rounded">Client</span>
                        <span className="text-sm font-medium">Jean Dupont</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5 text-red-600 font-bold text-xs bg-red-100 dark:bg-red-900/30 px-3 py-1 rounded-full w-fit">
                      <span className="size-2 bg-red-600 rounded-full animate-pulse"></span>
                      Urgent
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5 text-amber-600 font-bold text-xs bg-amber-100 dark:bg-amber-900/30 px-3 py-1 rounded-full w-fit">
                      En cours
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">12 Mai 2024</td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors text-slate-400 group-hover:text-indigo-600">
                      <span className="material-symbols-outlined text-xl">visibility</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <p className="text-sm text-slate-500">Affichage de 1 dossiers</p>
            <div className="flex gap-2">
              <button className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm font-bold disabled:opacity-50 transition-colors" disabled>Précédent</button>
              <button className="px-3 py-1 bg-indigo-600 text-white rounded-lg text-sm font-bold shadow-md shadow-indigo-600/20">1</button>
              <button className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm font-bold hover:bg-slate-200 transition-colors">Suivant</button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDisputes;
