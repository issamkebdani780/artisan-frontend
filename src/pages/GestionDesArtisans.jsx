import React from 'react';

const GestionDesArtisans = () => {
  return (
    <>
      
<div className="flex h-screen overflow-hidden">
{/*  Sidebar  */}
<aside className="w-64 flex-shrink-0 bg-white border-r border-slate-200 flex flex-col justify-between">
<div className="p-6">
<div className="flex items-center gap-3 mb-10 px-2">
<div className="size-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
<span className="material-symbols-outlined">auto_fix_high</span>
</div>
<div>
<h1 className="text-lg font-bold leading-none">Artisans Admin</h1>
<p className="text-xs text-slate-500 mt-1">Royal Purple Edition</p>
</div>
</div>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-100 rounded-xl transition-colors" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="text-sm font-medium">Tableau de bord</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 bg-primary/10 text-primary rounded-xl transition-colors" href="#">
<span className="material-symbols-outlined">engineering</span>
<span className="text-sm font-semibold">Artisans</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-100 rounded-xl transition-colors" href="#">
<span className="material-symbols-outlined">verified_user</span>
<span className="text-sm font-medium">Vérifications</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-100 rounded-xl transition-colors" href="#">
<span className="material-symbols-outlined">payments</span>
<span className="text-sm font-medium">Paiements</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-100 rounded-xl transition-colors" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="text-sm font-medium">Paramètres</span>
</a>
</nav>
</div>
<div className="p-6 border-t border-slate-200">
<button className="flex w-full items-center gap-3 px-4 py-3 text-rose-500 hover:bg-rose-50 rounded-xl transition-colors mb-4">
<span className="material-symbols-outlined">logout</span>
<span className="text-sm font-medium">Déconnexion</span>
</button>
<button className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl py-3 text-sm font-bold shadow-lg shadow-primary/30 transition-all flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm">person_add</span>
                    Ajouter Artisan
                </button>
</div>
</aside>
{/*  Main Content  */}
<main className="flex-1 flex flex-col overflow-hidden">
{/*  Header  */}
<header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0">
<div className="flex items-center gap-6 flex-1">
<h2 className="text-xl font-bold">Gestion des Artisans</h2>
<div className="relative max-w-md w-full">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/20 placeholder:text-slate-500" placeholder="Rechercher un artisan, un métier..." type="text"/>
</div>
</div>
<div className="flex items-center gap-4">
<button className="size-10 flex items-center justify-center rounded-xl bg-slate-100 text-slate-600 relative">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-2 right-2.5 size-2 bg-rose-500 rounded-full border-2 border-white"></span>
</button>
<div className="h-8 w-px bg-slate-200 mx-2"></div>
<div className="flex items-center gap-3">
<div className="text-right hidden sm:block">
<p className="text-sm font-bold leading-none">Admin Royal</p>
<p className="text-xs text-slate-500 mt-1">Directeur Général</p>
</div>
<div className="size-10 rounded-full bg-slate-200 overflow-hidden border-2 border-primary/20">
<img alt="" className="w-full h-full object-cover" data-alt="Avatar de l'administrateur système" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlbwjPg-MCr7ofFHwmRHZiP4b1VPS62f5m8cdvsIvW2r6jb36kEGIiXnbBiswkDa-xG4q9pjxcQd9CQHDLRE3Bc9tRKVa6gnAj7oNHGGB8fJdTq221_AMN8vNZywEe8RrzelHNlkQy_EyHyeHmD190BdNRDxJkRFFN7ucj8iK6BKE030_YJoocsg11lp9ne1Smc1cVlDjw7Vb7hYhNPeTZuBa-SNapxrN9hqkeZ3nuMTXIQNyks6bQ8zHDRcIwJ_ODTqd2E7tiyX8L"/>
</div>
</div>
</div>
</header>
{/*  Dashboard Content  */}
<div className="flex-1 overflow-y-auto p-8 space-y-8">
{/*  Welcome Section  */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<h3 className="text-3xl font-black text-slate-900 tracking-tight">Annuaire des Artisans</h3>
<p className="text-slate-500 mt-1">Gérez et vérifiez les professionnels inscrits sur votre plateforme.</p>
</div>
<div className="flex gap-3">
<button className="px-5 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl text-sm font-semibold hover:bg-slate-50 transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-lg">download</span>
                            Exporter CSV
                        </button>
</div>
</div>
{/*  Filters & Stats  */}
<div className="bg-white rounded-2xl p-2 border border-slate-200 shadow-sm">
<div className="flex flex-wrap gap-2">
<button className="px-6 py-2.5 rounded-xl text-sm font-bold bg-primary text-white shadow-md shadow-primary/20">Tous</button>
<button className="px-6 py-2.5 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-colors">En attente (12)</button>
<button className="px-6 py-2.5 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-colors">Vérifiés (148)</button>
<button className="px-6 py-2.5 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-colors">Suspendus (5)</button>
</div>
</div>
{/*  Table Container  */}
<div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-slate-50">
<th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Artisan</th>
<th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Métier</th>
<th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Statut</th>
<th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Date Inscription</th>
<th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
{/*  Row 1  */}
<tr className="hover:bg-slate-50/50 transition-colors">
<td className="px-6 py-5">
<div className="flex items-center gap-3">
<div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">JD</div>
<div>
<p className="text-sm font-bold">Jean Dupont</p>
<p className="text-xs text-slate-500 italic">jean.dupont@email.com</p>
</div>
</div>
</td>
<td className="px-6 py-5">
<span className="text-sm font-medium text-slate-600">Menuisier</span>
</td>
<td className="px-6 py-5">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700">
<span className="size-1.5 rounded-full bg-emerald-500"></span>
                                            Vérifié
                                        </span>
</td>
<td className="px-6 py-5">
<span className="text-sm text-slate-500">12 Oct 2023</span>
</td>
<td className="px-6 py-5">
<div className="flex justify-end gap-2">
<button className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors" title="Modifier">
<span className="material-symbols-outlined text-lg">edit_note</span>
</button>
<button className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors" title="Supprimer">
<span className="material-symbols-outlined text-lg">delete</span>
</button>
</div>
</td>
</tr>
{/*  Row 2  */}
<tr className="hover:bg-slate-50/50 transition-colors">
<td className="px-6 py-5">
<div className="flex items-center gap-3">
<div className="size-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">MC</div>
<div>
<p className="text-sm font-bold">Marie Curie</p>
<p className="text-xs text-slate-500 italic">marie.c@pro.fr</p>
</div>
</div>
</td>
<td className="px-6 py-5">
<span className="text-sm font-medium text-slate-600">Électricienne</span>
</td>
<td className="px-6 py-5">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-700">
<span className="size-1.5 rounded-full bg-amber-500"></span>
                                            En attente
                                        </span>
</td>
<td className="px-6 py-5">
<span className="text-sm text-slate-500">15 Oct 2023</span>
</td>
<td className="px-6 py-5">
<div className="flex justify-end gap-2">
<button className="px-3 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-lg hover:bg-primary/20 transition-colors">Vérifier</button>
<button className="p-2 text-slate-400 hover:bg-slate-100 rounded-lg transition-colors">
<span className="material-symbols-outlined text-lg">more_vert</span>
</button>
</div>
</td>
</tr>
{/*  Row 3  */}
<tr className="hover:bg-slate-50/50 transition-colors">
<td className="px-6 py-5">
<div className="flex items-center gap-3">
<div className="size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">LM</div>
<div>
<p className="text-sm font-bold">Lucas Martin</p>
<p className="text-xs text-slate-500 italic">lucas.plombier@orange.fr</p>
</div>
</div>
</td>
<td className="px-6 py-5">
<span className="text-sm font-medium text-slate-600">Plombier</span>
</td>
<td className="px-6 py-5">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-700">
<span className="size-1.5 rounded-full bg-rose-500"></span>
                                            Rejeté
                                        </span>
</td>
<td className="px-6 py-5">
<span className="text-sm text-slate-500">02 Sep 2023</span>
</td>
<td className="px-6 py-5">
<div className="flex justify-end gap-2">
<button className="px-3 py-1.5 bg-slate-100 text-slate-600 text-xs font-bold rounded-lg hover:bg-slate-200 transition-colors">Réviser</button>
<button className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors">
<span className="material-symbols-outlined text-lg">delete</span>
</button>
</div>
</td>
</tr>
{/*  Row 4  */}
<tr className="hover:bg-slate-50/50 transition-colors">
<td className="px-6 py-5">
<div className="flex items-center gap-3">
<div className="size-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold">SB</div>
<div>
<p className="text-sm font-bold">Sophie Bernard</p>
<p className="text-xs text-slate-500 italic">sophie.b@atelier.com</p>
</div>
</div>
</td>
<td className="px-6 py-5">
<span className="text-sm font-medium text-slate-600">Peintre</span>
</td>
<td className="px-6 py-5">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700">
<span className="size-1.5 rounded-full bg-emerald-500"></span>
                                            Vérifié
                                        </span>
</td>
<td className="px-6 py-5">
<span className="text-sm text-slate-500">20 Sep 2023</span>
</td>
<td className="px-6 py-5">
<div className="flex justify-end gap-2">
<button className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors">
<span className="material-symbols-outlined text-lg">edit_note</span>
</button>
<button className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors">
<span className="material-symbols-outlined text-lg">delete</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
{/*  Pagination  */}
<div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
<p className="text-xs font-medium text-slate-500 tracking-wide uppercase">Affichage de 1 à 4 sur 172 artisans</p>
<div className="flex gap-2">
<button className="p-2 rounded-lg bg-white border border-slate-200 text-slate-500 disabled:opacity-50" disabled>
<span className="material-symbols-outlined text-sm">chevron_left</span>
</button>
<button className="p-2 rounded-lg bg-white border border-slate-200 text-slate-500">
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

export default GestionDesArtisans;
