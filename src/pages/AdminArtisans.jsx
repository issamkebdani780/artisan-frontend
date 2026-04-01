import React from 'react';
import AdminLayout from '../layouts/AdminLayout';

const AdminArtisans = () => {
  return (
    <AdminLayout>
      <div className="flex-1 overflow-y-auto p-8 space-y-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Annuaire des Artisans</h1>
            <p className="text-slate-500 dark:text-slate-400 mt-2">Gérez et vérifiez les professionnels inscrits sur votre plateforme.</p>
          </div>
          <button className="px-5 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-xl text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-lg">download</span>
            Exporter CSV
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 mb-6 font-semibold">
          <button className="px-6 py-4 text-sm border-b-2 border-indigo-600 text-indigo-600">Tous</button>
          <button className="px-6 py-4 text-sm text-slate-500 hover:text-indigo-600 transition-colors">En attente (12)</button>
          <button className="px-6 py-4 text-sm text-slate-500 hover:text-indigo-600 transition-colors">Vérifiés (148)</button>
          <button className="px-6 py-4 text-sm text-slate-500 hover:text-indigo-600 transition-colors">Suspendus (5)</button>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-4 shadow-sm">
            <div className="p-3 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600">
              <span className="material-symbols-outlined">group</span>
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Total Artisans</p>
              <p className="text-xl font-bold">172 inscrits</p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-4 shadow-sm">
            <div className="p-3 rounded-xl bg-green-100 dark:bg-green-900/30 text-green-600">
              <span className="material-symbols-outlined">verified</span>
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Taux de vérification</p>
              <p className="text-xl font-bold">86% vérifiés</p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-4 shadow-sm">
            <div className="p-3 rounded-xl bg-amber-100 dark:bg-amber-900/30 text-amber-600">
              <span className="material-symbols-outlined">pending</span>
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Nouveaux dossiers</p>
              <p className="text-xl font-bold">12 en attente</p>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <th className="px-6 py-4 text-sm font-bold text-slate-600 dark:text-slate-400">Artisan</th>
                  <th className="px-6 py-4 text-sm font-bold text-slate-600 dark:text-slate-400">Spécialité</th>
                  <th className="px-6 py-4 text-sm font-bold text-slate-600 dark:text-slate-400">Statut</th>
                  <th className="px-6 py-4 text-sm font-bold text-slate-600 dark:text-slate-400">Date d'inscription</th>
                  <th className="px-6 py-4 text-sm font-bold text-slate-600 dark:text-slate-400 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center font-bold text-indigo-700 dark:text-indigo-300">JD</div>
                      <div>
                        <p className="font-bold text-sm text-slate-900 dark:text-white">Jean Dupont</p>
                        <p className="text-xs text-slate-500">jean.dupont@email.com</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm">Menuisier</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">
                      <span className="size-1.5 rounded-full bg-green-500"></span>
                      Vérifié
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">12 Oct 2023</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-sm font-bold text-indigo-600 hover:underline">Gérer</button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center font-bold text-amber-700 dark:text-amber-300">MC</div>
                      <div>
                        <p className="font-bold text-sm text-slate-900 dark:text-white">Marie Curie</p>
                        <p className="text-xs text-slate-500">marie.c@pro.fr</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm">Électricienne</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300">
                      <span className="size-1.5 rounded-full bg-indigo-600"></span>
                      En attente
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">15 Oct 2023</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-sm font-bold text-indigo-600 hover:underline">Vérifier</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Pagination */}
          <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <p className="text-xs text-slate-500 font-medium">Affichage de 2 sur 172 artisans</p>
            <div className="flex gap-2">
              <button className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 disabled:opacity-50" disabled>
                <span className="material-symbols-outlined text-sm">chevron_left</span>
              </button>
              <button className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 cursor-pointer">
                <span className="material-symbols-outlined text-sm">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminArtisans;
