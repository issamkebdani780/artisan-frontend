import React from 'react';
import AdminLayout from '../layouts/AdminLayout';

const AdminClients = () => {
  return (
    <AdminLayout title="Admin Panel" subtitle="Purple Edition">
      <div className="p-8 space-y-8 flex-1 overflow-y-auto">
        
        {/* Breadcrumbs & Title Section */}
        <div className="space-y-4">
          <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <a href="#" className="hover:text-indigo-600 transition-colors">Accueil</a>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="text-slate-900 dark:text-slate-100 font-medium">Gestion des Clients</span>
          </nav>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1">
              <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white">Clients Inscrits</h1>
              <p className="text-slate-500 dark:text-slate-400">Gérez et suivez les inscriptions récentes de votre plateforme.</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                <span className="material-symbols-outlined text-lg">download</span>
                Exporter CSV
              </button>
              <button className="bg-indigo-600 text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-indigo-600/20 hover:brightness-110 transition-all">
                + Ajouter Client
              </button>
            </div>
          </div>
        </div>

        {/* Filters & Search Bar */}
        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-wrap gap-4 items-center">
          <div className="flex-1 min-w-[300px] relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            <input type="text" placeholder="Rechercher par nom, email, entreprise..." className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-indigo-600/50 text-sm outline-none transition-all" />
          </div>
          <div className="flex gap-2">
            <select className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:ring-indigo-600 outline-none">
              <option>Statut: Tous</option>
              <option>Actif</option>
              <option>Inactif</option>
              <option>En attente</option>
            </select>
          </div>
        </div>

        {/* Clients Table */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50">
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Client</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Contact</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Date d'inscription</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 font-bold">JD</div>
                      <div>
                        <p className="font-bold text-slate-900 dark:text-white leading-none">Jean Dupont</p>
                        <p className="text-xs text-slate-500 mt-1">Tech Horizons SARL</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-sm">
                    <p className="text-slate-900 dark:text-slate-100">j.dupont@horizons.com</p>
                    <p className="text-xs text-slate-500">+33 6 12 34 56 78</p>
                  </td>
                  <td className="px-6 py-5 text-sm text-slate-600 dark:text-slate-400">12 Oct 2023</td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                      Actif
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="text-slate-400 hover:text-indigo-600 transition-colors p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                      <span className="material-symbols-outlined">more_vert</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 flex items-center justify-between border-t border-slate-200 dark:border-slate-800">
            <p className="text-sm text-slate-500">Affichage de 1 à 3 sur 450 clients</p>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-sm border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50 transition-colors" disabled>Précédent</button>
              <button className="px-3 py-1 text-sm bg-indigo-600 text-white rounded-lg shadow-sm">1</button>
              <button className="px-3 py-1 text-sm border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">2</button>
              <button className="px-3 py-1 text-sm border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">3</button>
              <button className="px-3 py-1 text-sm border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Suivant</button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminClients;
