import React from 'react';
import AdminLayout from '../layouts/AdminLayout';

const PaiementsAdmin = () => {
  return (
    <AdminLayout>
      <div className="flex-1 overflow-y-auto p-8">
        {/*  Page Header  */}
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Flux Financiers</h1>
            <p className="text-slate-500 dark:text-slate-400 mt-2">Supervision financière globale du protocole. Gérez les flux de trésorerie et audits.</p>
          </div>
          <button className="bg-indigo-600 text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-indigo-700 transition-colors flex items-center gap-2 shadow-lg shadow-indigo-600/20">
            <span className="material-symbols-outlined text-sm">picture_as_pdf</span>
            Exporter PDF
          </button>
        </div>

        {/*  Summary Bento Grid  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-indigo-600"></div>
            <p className="text-[11px] font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase mb-4">REVENU TOTAL</p>
            <div className="flex items-baseline gap-3">
              <h3 className="text-4xl font-extrabold tracking-tighter text-slate-900 dark:text-white">128 450 €</h3>
              <span className="flex items-center text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded-full">
                <span className="material-symbols-outlined text-[14px]">trending_up</span>
                12.5%
              </span>
            </div>
            <div className="mt-8 flex justify-between items-center opacity-40 group-hover:opacity-100 transition-opacity">
              <p className="text-xs text-slate-500">Vs mois dernier</p>
              <span className="material-symbols-outlined text-indigo-600">payments</span>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
            <p className="text-[11px] font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase mb-4">PAIEMENTS EN ATTENTE</p>
            <div className="flex items-baseline gap-3">
              <h3 className="text-4xl font-extrabold tracking-tighter text-slate-900 dark:text-white">24</h3>
              <span className="text-xs text-slate-500 font-medium">transactions actives</span>
            </div>
            <div className="mt-8 flex justify-between items-center opacity-40 group-hover:opacity-100 transition-opacity">
              <p className="text-xs text-slate-500">Prêt pour traitement</p>
              <span className="material-symbols-outlined text-indigo-600">hourglass_empty</span>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
            <p className="text-[11px] font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase mb-4">TAUX DE RÉUSSITE</p>
            <div className="flex items-baseline gap-3">
              <h3 className="text-4xl font-extrabold tracking-tighter text-slate-900 dark:text-white">99.2%</h3>
              <span className="text-xs text-slate-500 font-medium">stabilité réseau</span>
            </div>
            <div className="mt-8 flex justify-between items-center opacity-40 group-hover:opacity-100 transition-opacity">
              <p className="text-xs text-slate-500">Global performance</p>
              <span className="material-symbols-outlined text-indigo-600">verified</span>
            </div>
          </div>
        </div>

        {/*  Revenue Trends  */}
        <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm mb-8">
          <div className="flex justify-between items-start mb-12">
            <div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">Evolution des Revenus</h4>
              <p className="text-sm text-slate-500">Analyse mensuelle consolidée</p>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-indigo-600"></span>
                <span className="text-xs text-slate-500 font-medium">Revenu Net</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-indigo-200"></span>
                <span className="text-xs text-slate-500 font-medium">Frais Service</span>
              </div>
            </div>
          </div>
          <div className="relative h-[280px] w-full flex items-end justify-between gap-4">
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
              <div className="border-t border-slate-100 dark:border-slate-800 w-full h-0"></div>
              <div className="border-t border-slate-100 dark:border-slate-800 w-full h-0"></div>
              <div className="border-t border-slate-100 dark:border-slate-800 w-full h-0"></div>
              <div className="border-t border-slate-100 dark:border-slate-800 w-full h-0"></div>
            </div>
            {[
              { month: 'Jan', h: '40%', fill: '70%' },
              { month: 'Fev', h: '55%', fill: '65%' },
              { month: 'Mar', h: '85%', fill: '80%' },
              { month: 'Avr', h: '65%', fill: '75%' },
              { month: 'Mai', h: '95%', fill: '85%' },
              { month: 'Juin', h: '70%', fill: '90%' }
            ].map((d, i) => (
              <div key={i} className="flex flex-col items-center flex-1 z-10">
                <div className="w-12 bg-indigo-50 dark:bg-indigo-950/20 rounded-t-lg relative group cursor-pointer overflow-hidden" style={{ height: d.h }}>
                  <div className="absolute bottom-0 w-full bg-indigo-600 rounded-t-lg transition-all" style={{ height: d.fill }}></div>
                </div>
                <p className="mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{d.month}</p>
              </div>
            ))}
          </div>
        </div>

        {/*  Transaction Table  */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
          <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white">Dernières Transactions</h4>
            <button className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-500 hover:bg-slate-100 transition-colors">
              <span className="material-symbols-outlined text-sm">filter_list</span>
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <th className="px-6 py-4 text-sm font-bold text-slate-600 dark:text-slate-400">Transaction ID</th>
                  <th className="px-6 py-4 text-sm font-bold text-slate-600 dark:text-slate-400">Date</th>
                  <th className="px-6 py-4 text-sm font-bold text-slate-600 dark:text-slate-400">Artisan</th>
                  <th className="px-6 py-4 text-sm font-bold text-slate-600 dark:text-slate-400 text-right">Montant</th>
                  <th className="px-6 py-4 text-sm font-bold text-slate-600 dark:text-slate-400">Statut</th>
                  <th className="px-6 py-4 text-sm font-bold text-slate-600 dark:text-slate-400 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                  <td className="px-6 py-4"><span className="font-mono text-xs font-bold text-slate-700 dark:text-slate-300">#VP-9283-X</span></td>
                  <td className="px-6 py-4 text-sm text-slate-500">24 Oct 2023, 14:30</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center font-bold text-indigo-700 dark:text-indigo-300">LC</div>
                      <span className="text-sm font-bold">Lucas Chevalier</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-right">1 240,00 €</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">
                      <span className="size-1.5 rounded-full bg-green-500"></span> Success
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-400 hover:text-indigo-600 transition-colors">
                      <span className="material-symbols-outlined">more_vert</span>
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                  <td className="px-6 py-4"><span className="font-mono text-xs font-bold text-slate-700 dark:text-slate-300">#VP-8421-Y</span></td>
                  <td className="px-6 py-4 text-sm text-slate-500">24 Oct 2023, 12:15</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center font-bold text-blue-700 dark:text-blue-300">EM</div>
                      <span className="text-sm font-bold">Emma Morel</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-right">850,50 €</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">
                      <span className="size-1.5 rounded-full bg-amber-500"></span> Pending
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-400 hover:text-indigo-600 transition-colors">
                      <span className="material-symbols-outlined">more_vert</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <p className="text-xs text-slate-500 font-medium">Affichage de 2 sur 1 245 transactions</p>
            <div className="flex gap-2">
              <button className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 disabled:opacity-50" disabled>
                <span className="material-symbols-outlined text-sm">chevron_left</span>
              </button>
              <button className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800">
                <span className="material-symbols-outlined text-sm">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*  IA Insight Floating Card  */}
      <div className="fixed bottom-10 right-10 max-w-sm bg-white dark:bg-slate-900 p-6 rounded-xl shadow-2xl border-l-4 border-indigo-600 z-50">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600">
            <span className="material-symbols-outlined">auto_awesome</span>
          </div>
          <div>
            <h5 className="text-sm font-bold text-slate-900 dark:text-white mb-1">IA Insight : Optimisation</h5>
            <p className="text-xs text-slate-500 leading-relaxed">Le volume de transactions de la catégorie "Artisanat" a augmenté de 22%. Pensez à ajuster les seuils de validation automatique.</p>
            <button className="mt-3 text-[10px] font-bold text-indigo-600 uppercase tracking-wider hover:underline">Analyser les tendances</button>
          </div>
          <button className="text-slate-400 hover:text-slate-600">
            <span className="material-symbols-outlined text-sm">close</span>
          </button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default PaiementsAdmin;
