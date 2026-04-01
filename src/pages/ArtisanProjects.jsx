import React from 'react';
import ArtisanLayout from '../layouts/ArtisanLayout';

const ArtisanProjects = () => {
  return (
    <ArtisanLayout title="Artisan PRO" subtitle="Gestion des projets">
      <div className="p-8 flex-1 flex flex-col overflow-y-auto">
        
        {/* Page Title & CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-black tracking-tight mb-2">Gestion des Projets</h1>
            <p className="text-slate-500 dark:text-slate-400">Suivez l'état de vos chantiers en cours et passés.</p>
          </div>
          <button className="flex items-center gap-2 bg-[#ec5b13] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#ec5b13]/90 transition-colors shadow-lg shadow-[#ec5b13]/20">
            <span className="material-symbols-outlined text-lg">add</span>
            Nouveau Projet
          </button>
        </div>

        {/* Tabs */}
        <div className="border-b border-slate-200 dark:border-slate-800 mb-6">
          <div className="flex gap-8 overflow-x-auto custom-scrollbar">
            <button className="border-b-2 border-[#ec5b13] pb-4 text-[#ec5b13] font-bold text-sm whitespace-nowrap">Tous les projets</button>
            <button className="border-b-2 border-transparent pb-4 text-slate-500 font-bold text-sm hover:text-slate-700 dark:hover:text-slate-300 transition-colors whitespace-nowrap">En cours</button>
            <button className="border-b-2 border-transparent pb-4 text-slate-500 font-bold text-sm hover:text-slate-700 dark:hover:text-slate-300 transition-colors whitespace-nowrap">Terminés</button>
            <button className="border-b-2 border-transparent pb-4 text-slate-500 font-bold text-sm hover:text-slate-700 dark:hover:text-slate-300 transition-colors whitespace-nowrap">Annulés</button>
          </div>
        </div>

        {/* Table Card */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50 dark:bg-slate-800/50">
                <tr>
                  <th className="px-6 py-4 text-sm font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Projet</th>
                  <th className="px-6 py-4 text-sm font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Client</th>
                  <th className="px-6 py-4 text-sm font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-4 text-sm font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Montant</th>
                  <th className="px-6 py-4 text-sm font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Statut</th>
                  <th className="px-6 py-4 text-sm font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors group">
                  <td className="px-6 py-5 font-semibold text-slate-900 dark:text-white group-hover:text-[#ec5b13] transition-colors">Rénovation Salle de Bain</td>
                  <td className="px-6 py-5 text-slate-600 dark:text-slate-400">Jean Dupont</td>
                  <td className="px-6 py-5 text-slate-600 dark:text-slate-400">12 Oct 2023</td>
                  <td className="px-6 py-5 font-medium">4,500 €</td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400">
                      En cours
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right flex gap-2 justify-end">
                    <button className="text-[#ec5b13] font-bold text-sm bg-[#ec5b13]/10 px-3 py-1.5 rounded-lg hover:bg-[#ec5b13]/20 transition-colors">Modifier</button>
                  </td>
                </tr>
                
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors group">
                  <td className="px-6 py-5 font-semibold text-slate-900 dark:text-white group-hover:text-[#ec5b13] transition-colors">Installation Électrique</td>
                  <td className="px-6 py-5 text-slate-600 dark:text-slate-400">Marie Claire</td>
                  <td className="px-6 py-5 text-slate-600 dark:text-slate-400">05 Oct 2023</td>
                  <td className="px-6 py-5 font-medium">1,200 €</td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400">
                      Terminé
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right flex gap-2 justify-end">
                    <button className="text-emerald-600 font-bold text-sm bg-emerald-100 dark:bg-emerald-900/30 px-3 py-1.5 rounded-lg hover:bg-emerald-200 dark:hover:bg-emerald-800/50 transition-colors">Voir</button>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors group">
                  <td className="px-6 py-5 font-semibold text-slate-900 dark:text-white group-hover:text-[#ec5b13] transition-colors">Peinture Salon</td>
                  <td className="px-6 py-5 text-slate-600 dark:text-slate-400">Marc Leroy</td>
                  <td className="px-6 py-5 text-slate-600 dark:text-slate-400">28 Sep 2023</td>
                  <td className="px-6 py-5 font-medium">2,800 €</td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400">
                      Annulé
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right flex gap-2 justify-end">
                    <button className="text-slate-500 font-bold text-sm bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">Détails</button>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors group">
                  <td className="px-6 py-5 font-semibold text-slate-900 dark:text-white group-hover:text-[#ec5b13] transition-colors">Isolation Combles</td>
                  <td className="px-6 py-5 text-slate-600 dark:text-slate-400">Sophie Martin</td>
                  <td className="px-6 py-5 text-slate-600 dark:text-slate-400">15 Sep 2023</td>
                  <td className="px-6 py-5 font-medium">5,600 €</td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400">
                      En cours
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right flex gap-2 justify-end">
                    <button className="text-[#ec5b13] font-bold text-sm bg-[#ec5b13]/10 px-3 py-1.5 rounded-lg hover:bg-[#ec5b13]/20 transition-colors">Modifier</button>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors group">
                  <td className="px-6 py-5 font-semibold text-slate-900 dark:text-white group-hover:text-[#ec5b13] transition-colors">Menuiserie Fenêtres</td>
                  <td className="px-6 py-5 text-slate-600 dark:text-slate-400">Luc Bernard</td>
                  <td className="px-6 py-5 text-slate-600 dark:text-slate-400">02 Sep 2023</td>
                  <td className="px-6 py-5 font-medium">3,450 €</td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400">
                      Terminé
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right flex gap-2 justify-end">
                    <button className="text-emerald-600 font-bold text-sm bg-emerald-100 dark:bg-emerald-900/30 px-3 py-1.5 rounded-lg hover:bg-emerald-200 dark:hover:bg-emerald-800/50 transition-colors">Voir</button>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between mt-auto">
            <p className="text-sm text-slate-500">Affichage de 1 à 5 sur 24 projets</p>
            <div className="flex gap-2">
              <button className="p-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 disabled:opacity-50 transition-colors" disabled>
                <span className="material-symbols-outlined text-sm">chevron_left</span>
              </button>
              <button className="p-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-sm">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Footer note */}
        <div className="mt-8 p-6 bg-slate-100 dark:bg-slate-800/50 rounded-2xl flex items-center gap-4 border border-slate-200 dark:border-slate-800">
          <div className="bg-[#ec5b13]/20 text-[#ec5b13] p-3 rounded-full">
            <span className="material-symbols-outlined">info</span>
          </div>
          <div>
            <h4 className="font-bold">Besoin d'aide ?</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Vous pouvez contacter le support technique directement depuis l'onglet Messages pour toute question sur vos projets.</p>
          </div>
        </div>

      </div>
    </ArtisanLayout>
  );
};

export default ArtisanProjects;
