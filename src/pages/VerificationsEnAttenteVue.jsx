import React from 'react';

const VerificationsEnAttenteVue = () => {
  return (
    <>
      
<div className="flex min-h-screen">
{/*  Side Bar  */}
{/*  Main Content  */}
<main className="flex-1 flex flex-col">
{/*  Header  */}
<header className="h-20 flex items-center justify-between px-8 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-10">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
<span className="material-symbols-outlined">verified_user</span>
</div>
<div>
<h2 className="text-xl font-bold text-slate-900 dark:text-white">Vérifications en attente</h2>
<p className="text-xs text-slate-500 font-medium">Admin Dashboard / Édition Vérification</p>
</div>
</div>
<div className="flex items-center gap-6">
<div className="relative hidden md:block">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
<input className="pl-10 pr-4 py-2 rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary w-72 transition-all" placeholder="Rechercher un artisan..." type="text"/>
</div>
<div className="flex items-center gap-3 border-l border-slate-200 dark:border-slate-700 pl-6">
<div className="text-right">
<p className="text-sm font-bold text-slate-900 dark:text-white">Admin User</p>
<p className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-1">Administrateur</p>
</div>
<div className="w-10 h-10 rounded-full bg-cover bg-center border-2 border-primary" data-alt="Avatar of the administrator" ></div>
</div>
</div>
</header>
<div className="p-8">
{/*  Status Cards  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
<div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/50 p-6 rounded-2xl flex items-center justify-between">
<div>
<p className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-1">Dossiers en attente</p>
<h3 className="text-3xl font-bold">24</h3>
</div>
<div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-200 dark:shadow-none">
<span className="material-symbols-outlined">hourglass_top</span>
</div>
</div>
<div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
<div>
<p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-1">Approuvés aujourd'hui</p>
<h3 className="text-3xl font-bold">12</h3>
</div>
<div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600">
<span className="material-symbols-outlined">check_circle</span>
</div>
</div>
<div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
<div>
<p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-1">Refusés aujourd'hui</p>
<h3 className="text-3xl font-bold">03</h3>
</div>
<div className="w-12 h-12 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center text-rose-600">
<span className="material-symbols-outlined">cancel</span>
</div>
</div>
</div>
{/*  Main Table Section  */}
<div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
<div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
<h3 className="font-bold text-lg">Liste des artisans à approuver</h3>
<div className="flex gap-2">
<button className="text-xs font-bold px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-sm">filter_list</span> Filtrer
                            </button>
<button className="text-xs font-bold px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-sm">download</span> Exporter
                            </button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead className="bg-slate-50 dark:bg-slate-800/50">
<tr>
<th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Artisan</th>
<th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Date d'inscription</th>
<th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Documents</th>
<th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Statut</th>
<th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200 dark:divide-slate-800">
{/*  Row 1  */}
<tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold">JD</div>
<div>
<p className="font-bold text-sm">Jean Dupont</p>
<p className="text-xs text-slate-500">Plomberie &amp; Chauffage</p>
</div>
</div>
</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">12/10/2023</td>
<td className="px-6 py-4">
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 flex items-center gap-1">
<span className="material-symbols-outlined text-sm">description</span> KBIS
                                            </span>
<span className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 flex items-center gap-1">
<span className="material-symbols-outlined text-sm">verified</span> Assurance
                                            </span>
</div>
</td>
<td className="px-6 py-4">
<span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">En attente</span>
</td>
<td className="px-6 py-4 text-right">
<div className="flex justify-end gap-2">
<button className="px-3 py-1.5 rounded-lg bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-colors shadow-md shadow-primary/20">Vérifier</button>
<button className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-rose-600 dark:text-rose-400 text-xs font-bold hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-colors">Rejeter</button>
</div>
</td>
</tr>
{/*  Row 2  */}
<tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold">MC</div>
<div>
<p className="font-bold text-sm">Marie Curie</p>
<p className="text-xs text-slate-500">Installation Électrique</p>
</div>
</div>
</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">11/10/2023</td>
<td className="px-6 py-4">
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 flex items-center gap-1">
<span className="material-symbols-outlined text-sm">school</span> Diplôme
                                            </span>
<span className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 flex items-center gap-1">
<span className="material-symbols-outlined text-sm">badge</span> ID
                                            </span>
</div>
</td>
<td className="px-6 py-4">
<span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">En attente</span>
</td>
<td className="px-6 py-4 text-right">
<div className="flex justify-end gap-2">
<button className="px-3 py-1.5 rounded-lg bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-colors shadow-md shadow-primary/20">Vérifier</button>
<button className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-rose-600 dark:text-rose-400 text-xs font-bold hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-colors">Rejeter</button>
</div>
</td>
</tr>
{/*  Row 3  */}
<tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold">LM</div>
<div>
<p className="font-bold text-sm">Lucas Martin</p>
<p className="text-xs text-slate-500">Maçonnerie Générale</p>
</div>
</div>
</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">10/10/2023</td>
<td className="px-6 py-4">
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 flex items-center gap-1">
<span className="material-symbols-outlined text-sm">description</span> KBIS
                                            </span>
<span className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 flex items-center gap-1">
<span className="material-symbols-outlined text-sm">payments</span> RIB
                                            </span>
</div>
</td>
<td className="px-6 py-4">
<span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">En attente</span>
</td>
<td className="px-6 py-4 text-right">
<div className="flex justify-end gap-2">
<button className="px-3 py-1.5 rounded-lg bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-colors shadow-md shadow-primary/20">Vérifier</button>
<button className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-rose-600 dark:text-rose-400 text-xs font-bold hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-colors">Rejeter</button>
</div>
</td>
</tr>
{/*  Row 4  */}
<tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold">SB</div>
<div>
<p className="font-bold text-sm">Sophie Bernard</p>
<p className="text-xs text-slate-500">Peinture &amp; Décoration</p>
</div>
</div>
</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">09/10/2023</td>
<td className="px-6 py-4">
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 flex items-center gap-1">
<span className="material-symbols-outlined text-sm">badge</span> ID
                                            </span>
<span className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 flex items-center gap-1">
<span className="material-symbols-outlined text-sm">verified</span> Assurance
                                            </span>
</div>
</td>
<td className="px-6 py-4">
<span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">En attente</span>
</td>
<td className="px-6 py-4 text-right">
<div className="flex justify-end gap-2">
<button className="px-3 py-1.5 rounded-lg bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-colors shadow-md shadow-primary/20">Vérifier</button>
<button className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-rose-600 dark:text-rose-400 text-xs font-bold hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-colors">Rejeter</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex items-center justify-between">
<p className="text-sm text-slate-500 font-medium">Affichage de 4 sur 24 dossiers</p>
<div className="flex gap-1">
<button className="w-8 h-8 rounded border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 hover:bg-white dark:hover:bg-slate-700">
<span className="material-symbols-outlined text-sm">chevron_left</span>
</button>
<button className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center text-xs font-bold shadow-lg shadow-primary/30">1</button>
<button className="w-8 h-8 rounded border border-slate-200 dark:border-slate-700 flex items-center justify-center text-xs font-bold hover:bg-white dark:hover:bg-slate-700">2</button>
<button className="w-8 h-8 rounded border border-slate-200 dark:border-slate-700 flex items-center justify-center text-xs font-bold hover:bg-white dark:hover:bg-slate-700">3</button>
<button className="w-8 h-8 rounded border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 hover:bg-white dark:hover:bg-slate-700">
<span className="material-symbols-outlined text-sm">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
</main>
</div>

    </>
  );
};

export default VerificationsEnAttenteVue;
