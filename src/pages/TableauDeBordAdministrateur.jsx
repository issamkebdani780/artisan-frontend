import React from 'react';

const TableauDeBordAdministrateur = () => {
  return (
    <>
      
<div className="flex h-screen overflow-hidden">
{/*  Sidebar  */}
<aside className="w-72 sidebar-gradient text-white flex flex-col flex-shrink-0">
<div className="p-6 flex items-center gap-3">
<div className="bg-primary p-2 rounded-lg">
<span className="material-symbols-outlined text-white">line_style</span>
</div>
<h1 className="text-xl font-bold tracking-tight">Admin Royal</h1>
</div>
<nav className="flex-1 px-4 py-4 space-y-2">
<a className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 text-white font-semibold" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span>Tableau de bord</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-indigo-100 hover:bg-white/5 transition-colors" href="#">
<span className="material-symbols-outlined">engineering</span>
<span>Gestion des artisans</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-indigo-100 hover:bg-white/5 transition-colors" href="#">
<span className="material-symbols-outlined">group</span>
<span>Gestion des clients</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-indigo-100 hover:bg-white/5 transition-colors" href="#">
<span className="material-symbols-outlined">gavel</span>
<span>Litiges &amp; Recours</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-indigo-100 hover:bg-white/5 transition-colors" href="#">
<span className="material-symbols-outlined">bar_chart</span>
<span>Statistiques</span>
</a>
<div className="pt-4 mt-4 border-t border-white/10">
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-indigo-100 hover:bg-white/5 transition-colors" href="#">
<span className="material-symbols-outlined">settings</span>
<span>Paramètres</span>
</a>
</div>
</nav>
<div className="p-4 m-4 rounded-2xl bg-white/5 border border-white/10">
<div className="flex items-center gap-3 mb-3">
<div className="size-10 rounded-full bg-indigo-400/20 flex items-center justify-center border border-indigo-400/30">
<img alt="Profil" className="rounded-full size-full" data-alt="Photo de profil de l'administrateur souriant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAYnVf29PEQ9zq2julielXy9mODhH_nCbK-ZAcdh4W2hPCE3ZeuaOwB6hB9frk6xE6MgTlFLlzJ4cH1njrugxQ__DPFtV7Kh0EYeDThG240JGkcp7TYekJ_wS4BGzLvRNeuBgZKkDWp_e3LnhlkJuy6sHipM77zP_fcKnSQSc5YQMU9GccX3PvVmgqqXAb2sWAt4IoSqYCuyERd-eL5G4zM8OK9NDZekEa_g5MojxuC1IB1yxU3ZlHFbliV2I7skPy3L3Q-h7-3GPt"/>
</div>
<div className="overflow-hidden">
<p className="text-sm font-bold truncate">Marc Lefebvre</p>
<p className="text-xs text-indigo-300 truncate">Super Admin</p>
</div>
</div>
<button className="w-full py-2 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-semibold transition-colors">Déconnexion</button>
</div>
</aside>
{/*  Main Content  */}
<main className="flex-1 flex flex-col overflow-y-auto">
{/*  Top Nav  */}
<header className="h-16 border-b border-slate-200 flex items-center justify-between px-8 bg-white/80 backdrop-blur-md sticky top-0 z-10">
<div className="flex items-center gap-4 flex-1">
<div className="relative w-full max-w-md">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
<input className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="Rechercher une commande, un artisan..." type="text"/>
</div>
</div>
<div className="flex items-center gap-4">
<button className="p-2 rounded-full hover:bg-slate-100 relative">
<span className="material-symbols-outlined text-slate-600">notifications</span>
<span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white"></span>
</button>
<button className="p-2 rounded-full hover:bg-slate-100">
<span className="material-symbols-outlined text-slate-600">chat_bubble</span>
</button>
<div className="h-8 w-[1px] bg-slate-200 mx-2"></div>
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-slate-700">FR</span>
<span className="material-symbols-outlined text-sm">expand_more</span>
</div>
</div>
</header>
<div className="p-8 space-y-8">
{/*  Header Section  */}
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Tableau de bord</h2>
<p className="text-slate-500 mt-1">Bienvenue, voici un aperçu de l'activité de votre plateforme.</p>
</div>
<div className="flex gap-3">
<button className="px-4 py-2 rounded-xl border border-slate-200 font-semibold text-sm hover:bg-slate-50 transition-colors">Télécharger Rapport</button>
<button className="px-4 py-2 rounded-xl bg-primary text-white font-semibold text-sm shadow-lg shadow-primary/20 hover:bg-secondary transition-all">Nouvelle Campagne</button>
</div>
</div>
{/*  Stats Cards  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-indigo-50 rounded-xl text-primary">
<span className="material-symbols-outlined">payments</span>
</div>
<span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-1 rounded-lg flex items-center gap-1">
<span className="material-symbols-outlined text-xs">trending_up</span> +12.5%
                            </span>
</div>
<p className="text-slate-500 text-sm font-medium">Revenu Total</p>
<p className="text-2xl font-bold mt-1 text-slate-900">12,840.00 â‚¬</p>
</div>
<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-purple-50 rounded-xl text-accent">
<span className="material-symbols-outlined">badge</span>
</div>
<span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-1 rounded-lg flex items-center gap-1">
<span className="material-symbols-outlined text-xs">trending_up</span> +3.2%
                            </span>
</div>
<p className="text-slate-500 text-sm font-medium">Artisans Actifs</p>
<p className="text-2xl font-bold mt-1 text-slate-900">842</p>
</div>
<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-blue-50 rounded-xl text-blue-500">
<span className="material-symbols-outlined">person_add</span>
</div>
<span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-1 rounded-lg flex items-center gap-1">
<span className="material-symbols-outlined text-xs">trending_up</span> +8.4%
                            </span>
</div>
<p className="text-slate-500 text-sm font-medium">Nouveaux Clients</p>
<p className="text-2xl font-bold mt-1 text-slate-900">156</p>
</div>
<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-rose-50 rounded-xl text-rose-500">
<span className="material-symbols-outlined">warning</span>
</div>
<span className="text-xs font-bold text-rose-500 bg-rose-50 px-2 py-1 rounded-lg flex items-center gap-1">
<span className="material-symbols-outlined text-xs">trending_down</span> -2.1%
                            </span>
</div>
<p className="text-slate-500 text-sm font-medium">Litiges en cours</p>
<p className="text-2xl font-bold mt-1 text-slate-900">12</p>
</div>
</div>
{/*  Main Content Area  */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
{/*  Performance Chart Mockup  */}
<div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-slate-100 flex flex-col">
<div className="flex justify-between items-center mb-8">
<div>
<h3 className="text-xl font-bold text-slate-900">Performance des ventes</h3>
<p className="text-sm text-slate-500">Volume des transactions mensuelles</p>
</div>
<select className="bg-slate-50 border-none rounded-lg text-sm font-medium px-4 py-2 outline-none">
<option>Année 2024</option>
<option>Année 2023</option>
</select>
</div>
<div className="flex-1 flex items-end justify-between gap-4 h-64 mt-4">
<div className="w-full bg-primary/10 rounded-t-lg relative group transition-all" >
<div className="absolute inset-x-0 bottom-0 bg-primary/40 rounded-t-lg h-full group-hover:bg-primary/60 transition-all"></div>
<span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium text-slate-400">Jan</span>
</div>
<div className="w-full bg-primary/10 rounded-t-lg relative group transition-all" >
<div className="absolute inset-x-0 bottom-0 bg-primary/40 rounded-t-lg h-full group-hover:bg-primary/60 transition-all"></div>
<span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium text-slate-400">Fev</span>
</div>
<div className="w-full bg-primary/10 rounded-t-lg relative group transition-all" >
<div className="absolute inset-x-0 bottom-0 bg-primary/40 rounded-t-lg h-full group-hover:bg-primary/60 transition-all"></div>
<span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium text-slate-400">Mar</span>
</div>
<div className="w-full bg-primary/10 rounded-t-lg relative group transition-all" >
<div className="absolute inset-x-0 bottom-0 bg-primary rounded-t-lg h-full group-hover:opacity-90 transition-all"></div>
<span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium text-slate-400">Avr</span>
</div>
<div className="w-full bg-primary/10 rounded-t-lg relative group transition-all" >
<div className="absolute inset-x-0 bottom-0 bg-primary/40 rounded-t-lg h-full group-hover:bg-primary/60 transition-all"></div>
<span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium text-slate-400">Mai</span>
</div>
<div className="w-full bg-primary/10 rounded-t-lg relative group transition-all" >
<div className="absolute inset-x-0 bottom-0 bg-primary/40 rounded-t-lg h-full group-hover:bg-primary/60 transition-all"></div>
<span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium text-slate-400">Jun</span>
</div>
<div className="w-full bg-primary/10 rounded-t-lg relative group transition-all" >
<div className="absolute inset-x-0 bottom-0 bg-primary rounded-t-lg h-full group-hover:opacity-90 transition-all"></div>
<span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium text-slate-400">Jul</span>
</div>
</div>
</div>
{/*  Side Activity  */}
<div className="bg-indigo-900 text-white p-8 rounded-3xl shadow-xl overflow-hidden relative">
<div className="absolute -right-10 -top-10 size-40 bg-white/10 rounded-full blur-3xl"></div>
<h3 className="text-xl font-bold mb-6 relative z-10">Activités Récentes</h3>
<div className="space-y-6 relative z-10">
<div className="flex gap-4">
<div className="size-2 mt-2 bg-emerald-400 rounded-full shrink-0"></div>
<div>
<p className="text-sm font-semibold">Nouvel Artisan Validé</p>
<p className="text-xs text-indigo-300 mt-1">Atelier Dubois - Ã‰bénisterie</p>
<p className="text-[10px] text-indigo-400 mt-1 uppercase font-bold">Il y a 12 min</p>
</div>
</div>
<div className="flex gap-4">
<div className="size-2 mt-2 bg-amber-400 rounded-full shrink-0"></div>
<div>
<p className="text-sm font-semibold">Litige Signalé</p>
<p className="text-xs text-indigo-300 mt-1">Commande #8421 - Retard de livraison</p>
<p className="text-[10px] text-indigo-400 mt-1 uppercase font-bold">Il y a 45 min</p>
</div>
</div>
<div className="flex gap-4">
<div className="size-2 mt-2 bg-indigo-400 rounded-full shrink-0"></div>
<div>
<p className="text-sm font-semibold">Mise à jour Système</p>
<p className="text-xs text-indigo-300 mt-1">Version 2.4.0 déployée avec succès</p>
<p className="text-[10px] text-indigo-400 mt-1 uppercase font-bold">Il y a 2h</p>
</div>
</div>
<div className="flex gap-4">
<div className="size-2 mt-2 bg-emerald-400 rounded-full shrink-0"></div>
<div>
<p className="text-sm font-semibold">Nouveau Client</p>
<p className="text-xs text-indigo-300 mt-1">Sophie Martin a rejoint la plateforme</p>
<p className="text-[10px] text-indigo-400 mt-1 uppercase font-bold">Il y a 4h</p>
</div>
</div>
</div>
<button className="w-full mt-8 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-sm font-bold transition-all">Voir tout l'historique</button>
</div>
</div>
{/*  Artisans List  */}
<div className="bg-white rounded-3xl border border-slate-100 overflow-hidden">
<div className="p-8 border-b border-slate-50 flex justify-between items-center">
<h3 className="text-xl font-bold text-slate-900">Artisans en attente de validation</h3>
<button className="text-primary font-semibold text-sm hover:underline">Voir tout</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="text-slate-400 text-xs font-bold uppercase tracking-wider">
<th className="px-8 py-5">Artisan</th>
<th className="px-8 py-5">Catégorie</th>
<th className="px-8 py-5">Localisation</th>
<th className="px-8 py-5">Inscrit le</th>
<th className="px-8 py-5">Statut</th>
<th className="px-8 py-5 text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-50">
<tr className="hover:bg-slate-50/50 transition-colors">
<td className="px-8 py-5">
<div className="flex items-center gap-3">
<div className="size-10 bg-indigo-100 rounded-lg flex items-center justify-center text-primary font-bold">JD</div>
<div>
<p className="text-sm font-bold text-slate-900">Jean Dupont</p>
<p className="text-xs text-slate-500">dupont.art@gmail.com</p>
</div>
</div>
</td>
<td className="px-8 py-5 text-sm text-slate-600">Menuiserie</td>
<td className="px-8 py-5 text-sm text-slate-600">Bordeaux, FR</td>
<td className="px-8 py-5 text-sm text-slate-600">12 Mai 2024</td>
<td className="px-8 py-5">
<span className="px-3 py-1 bg-amber-50 text-amber-600 text-xs font-bold rounded-full">En attente</span>
</td>
<td className="px-8 py-5 text-right">
<button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400">
<span className="material-symbols-outlined text-xl">more_vert</span>
</button>
</td>
</tr>
<tr className="hover:bg-slate-50/50 transition-colors">
<td className="px-8 py-5">
<div className="flex items-center gap-3">
<div className="size-10 bg-purple-100 rounded-lg flex items-center justify-center text-accent font-bold">ML</div>
<div>
<p className="text-sm font-bold text-slate-900">Marie Laurent</p>
<p className="text-xs text-slate-500">marie.l@design.fr</p>
</div>
</div>
</td>
<td className="px-8 py-5 text-sm text-slate-600">Céramique</td>
<td className="px-8 py-5 text-sm text-slate-600">Lyon, FR</td>
<td className="px-8 py-5 text-sm text-slate-600">14 Mai 2024</td>
<td className="px-8 py-5">
<span className="px-3 py-1 bg-amber-50 text-amber-600 text-xs font-bold rounded-full">En attente</span>
</td>
<td className="px-8 py-5 text-right">
<button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400">
<span className="material-symbols-outlined text-xl">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</main>
</div>

    </>
  );
};

export default TableauDeBordAdministrateur;

