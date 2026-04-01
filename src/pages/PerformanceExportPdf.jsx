import React from 'react';

const PerformanceExportPdf = () => {
  return (
    <>
      
<div className="flex min-h-screen">
{/*  Sidebar  */}
<aside className="w-64 bg-slate-900 dark:bg-black flex flex-col border-r border-slate-200 dark:border-slate-800">
<div className="p-6 flex flex-col h-full">
<div className="flex items-center gap-3 mb-8">
<div className="size-10 rounded-full bg-primary flex items-center justify-center text-white">
<span className="material-symbols-outlined">dashboard</span>
</div>
<div>
<h1 className="text-white text-base font-bold leading-tight">Admin Dashboard</h1>
<p className="text-slate-400 text-xs font-normal">Purple Edition</p>
</div>
</div>
<nav className="flex-1 flex flex-col gap-2">
<a className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors" href="#">
<span className="material-symbols-outlined">grid_view</span>
<span className="text-sm font-medium">Tableau de bord</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors" href="#">
<span className="material-symbols-outlined">group</span>
<span className="text-sm font-medium">Utilisateurs</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors" href="#">
<span className="material-symbols-outlined">shopping_bag</span>
<span className="text-sm font-medium">Ventes</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 bg-primary text-white rounded-xl transition-colors" href="#">
<span className="material-symbols-outlined">account_balance_wallet</span>
<span className="text-sm font-medium">Paiements</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors" href="#">
<span className="material-symbols-outlined">bar_chart</span>
<span className="text-sm font-medium">Rapports</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="text-sm font-medium">Paramètres</span>
</a>
</nav>
<button className="mt-auto flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-800 text-slate-200 hover:bg-red-500/20 hover:text-red-500 rounded-xl text-sm font-bold transition-all">
<span className="material-symbols-outlined text-sm">logout</span>
<span>Déconnexion</span>
</button>
</div>
</aside>
{/*  Main Content  */}
<main className="flex-1 flex flex-col min-w-0">
{/*  Header  */}
<header className="flex items-center justify-between px-8 py-4 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark/50 backdrop-blur-md sticky top-0 z-10">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary">analytics</span>
<h2 className="text-lg font-bold tracking-tight">Suivi des Revenus</h2>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden md:block">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
<input className="pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/50 w-64" placeholder="Rechercher une transaction..." type="text"/>
</div>
<button className="p-2 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-primary/10 hover:text-primary transition-colors">
<span className="material-symbols-outlined">notifications</span>
</button>
<div className="h-8 w-[1px] bg-slate-200 dark:bg-slate-800 mx-2"></div>
<button className="flex items-center gap-2 p-1.5 bg-slate-100 dark:bg-slate-800 rounded-xl hover:bg-primary/10 transition-colors">
<div className="size-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
<span className="material-symbols-outlined">person</span>
</div>
</button>
</div>
</header>
{/*  Dashboard Content  */}
<div className="p-8 space-y-8">
{/*  Welcome Section  */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-slate-50">Performance Financière</h1>
<p className="text-slate-500 dark:text-slate-400 mt-1">Analyse détaillée de vos revenus pour le mois en cours.</p>
</div>
<div className="flex items-center gap-3">
<div className="flex bg-white dark:bg-slate-800 rounded-xl p-1 shadow-sm border border-slate-200 dark:border-slate-700">
<button className="px-4 py-1.5 text-xs font-semibold rounded-lg bg-primary text-white">7J</button>
<button className="px-4 py-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-slate-100">30J</button>
<button className="px-4 py-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-slate-100">Année</button>
</div>
<button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-semibold shadow-sm">
<span className="material-symbols-outlined text-sm">calendar_month</span>
<span>Filtres</span>
</button>
</div>
</div>
{/*  KPI Cards  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
<div className="flex justify-between items-start mb-4">
<p className="text-sm font-medium text-slate-500 dark:text-slate-400">Revenu Total (Mois)</p>
<span className="p-2 bg-emerald-500/10 text-emerald-500 rounded-lg">
<span className="material-symbols-outlined text-sm">trending_up</span>
</span>
</div>
<p className="text-3xl font-bold tracking-tight">45 280,00 €</p>
<div className="flex items-center gap-2 mt-2">
<span className="text-xs font-bold text-emerald-500">+8.5%</span>
<span className="text-xs text-slate-400">vs mois dernier</span>
</div>
</div>
<div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
<div className="flex justify-between items-start mb-4">
<p className="text-sm font-medium text-slate-500 dark:text-slate-400">Transaction Moyenne</p>
<span className="p-2 bg-primary/10 text-primary rounded-lg">
<span className="material-symbols-outlined text-sm">payments</span>
</span>
</div>
<p className="text-3xl font-bold tracking-tight">124,50 €</p>
<div className="flex items-center gap-2 mt-2">
<span className="text-xs font-bold text-emerald-500">+2.1%</span>
<span className="text-xs text-slate-400">vs mois dernier</span>
</div>
</div>
<div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
<div className="flex justify-between items-start mb-4">
<p className="text-sm font-medium text-slate-500 dark:text-slate-400">Taux de Croissance</p>
<span className="p-2 bg-indigo-500/10 text-indigo-500 rounded-lg">
<span className="material-symbols-outlined text-sm">show_chart</span>
</span>
</div>
<p className="text-3xl font-bold tracking-tight">+12.4%</p>
<div className="flex items-center gap-2 mt-2">
<span className="text-xs font-bold text-emerald-500">+1.2%</span>
<span className="text-xs text-slate-400">tendance stable</span>
</div>
</div>
</div>
{/*  Charts Section  */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
{/*  Line Chart: Monthly Revenue  */}
<div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
<div className="flex items-center justify-between mb-6">
<h3 className="font-bold text-slate-800 dark:text-slate-100">Évolution des Revenus</h3>
<button className="text-slate-400 hover:text-primary"><span className="material-symbols-outlined">more_horiz</span></button>
</div>
<div className="h-64 relative chart-container rounded-lg border border-primary/10 flex items-end justify-between px-4 pb-2">
{/*  Visual placeholder for a line chart  */}
<div className="w-full h-full absolute inset-0 opacity-10 flex items-center justify-center">
<span className="material-symbols-outlined text-6xl">show_chart</span>
</div>
<div className="w-8 bg-primary/30 h-[20%] rounded-t-sm"></div>
<div className="w-8 bg-primary/40 h-[40%] rounded-t-sm"></div>
<div className="w-8 bg-primary/50 h-[35%] rounded-t-sm"></div>
<div className="w-8 bg-primary/60 h-[55%] rounded-t-sm"></div>
<div className="w-8 bg-primary/70 h-[80%] rounded-t-sm"></div>
<div className="w-8 bg-primary h-[95%] rounded-t-sm"></div>
<div className="w-8 bg-primary/80 h-[70%] rounded-t-sm"></div>
</div>
<div className="flex justify-between mt-4 text-[10px] uppercase font-bold text-slate-400">
<span>Lun</span><span>Mar</span><span>Mer</span><span>Jeu</span><span>Ven</span><span>Sam</span><span>Dim</span>
</div>
</div>
{/*  Bar Chart: Revenue by Category  */}
<div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
<div className="flex items-center justify-between mb-6">
<h3 className="font-bold text-slate-800 dark:text-slate-100">Répartition par Service</h3>
<button className="text-slate-400 hover:text-primary"><span className="material-symbols-outlined">more_horiz</span></button>
</div>
<div className="space-y-4">
<div>
<div className="flex justify-between text-sm mb-1">
<span className="text-slate-600 dark:text-slate-400">Abonnements Premium</span>
<span className="font-bold">62%</span>
</div>
<div className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
<div className="h-full bg-primary w-[62%] rounded-full"></div>
</div>
</div>
<div>
<div className="flex justify-between text-sm mb-1">
<span className="text-slate-600 dark:text-slate-400">Services Cloud</span>
<span className="font-bold">24%</span>
</div>
<div className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 w-[24%] rounded-full"></div>
</div>
</div>
<div>
<div className="flex justify-between text-sm mb-1">
<span className="text-slate-600 dark:text-slate-400">Support &amp; Maintenance</span>
<span className="font-bold">14%</span>
</div>
<div className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-[14%] rounded-full"></div>
</div>
</div>
<div className="pt-6">
<div className="bg-primary/5 rounded-xl p-4 border border-primary/10">
<div className="flex gap-3">
<span className="material-symbols-outlined text-primary">info</span>
<p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">Les abonnements Premium ont augmenté de 12% ce mois-ci, devenant votre principale source de revenus.</p>
</div>
</div>
</div>
</div>
</div>
</div>
{/*  Transaction History Table  */}
<div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
<div className="p-6 border-b border-slate-200 dark:border-slate-700 flex flex-col md:flex-row md:items-center justify-between gap-4">
<h3 className="font-bold text-slate-800 dark:text-slate-100">Historique des Transactions</h3>
<div className="flex gap-2">
<button className="px-4 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg text-xs font-bold transition-colors">Exporter CSV</button><button className="px-4 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg text-xs font-bold transition-colors">Exporter en PDF</button>
<button className="px-4 py-2 bg-primary/10 text-primary hover:bg-primary/20 rounded-lg text-xs font-bold transition-colors">Voir Tout</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead className="bg-slate-50 dark:bg-slate-900/50 text-slate-500 dark:text-slate-400 text-xs uppercase font-bold">
<tr>
<th className="px-6 py-4">Client</th>
<th className="px-6 py-4">Date</th>
<th className="px-6 py-4">Montant</th>
<th className="px-6 py-4">Status</th>
<th className="px-6 py-4">Méthode</th>
<th className="px-6 py-4 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 dark:divide-slate-700">
<tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-8 rounded-full bg-slate-200 dark:bg-slate-600 flex items-center justify-center font-bold text-xs">JD</div>
<span className="text-sm font-semibold">Jean Dupont</span>
</div>
</td>
<td className="px-6 py-4 text-sm text-slate-500">12 Oct 2023</td>
<td className="px-6 py-4 text-sm font-bold">450,00 €</td>
<td className="px-6 py-4">
<span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-500 uppercase tracking-wider">Réussi</span>
</td>
<td className="px-6 py-4 text-sm text-slate-500">Visa **** 4242</td>
<td className="px-6 py-4 text-right">
<button className="text-slate-400 hover:text-primary"><span className="material-symbols-outlined text-sm">visibility</span></button>
</td>
</tr>
<tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-8 rounded-full bg-slate-200 dark:bg-slate-600 flex items-center justify-center font-bold text-xs text-white bg-gradient-to-tr from-primary to-orange-400">ML</div>
<span className="text-sm font-semibold">Marie Lefebvre</span>
</div>
</td>
<td className="px-6 py-4 text-sm text-slate-500">11 Oct 2023</td>
<td className="px-6 py-4 text-sm font-bold">89,90 €</td>
<td className="px-6 py-4">
<span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-500 uppercase tracking-wider">Réussi</span>
</td>
<td className="px-6 py-4 text-sm text-slate-500">PayPal</td>
<td className="px-6 py-4 text-right">
<button className="text-slate-400 hover:text-primary"><span className="material-symbols-outlined text-sm">visibility</span></button>
</td>
</tr>
<tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-8 rounded-full bg-slate-200 dark:bg-slate-600 flex items-center justify-center font-bold text-xs">PM</div>
<span className="text-sm font-semibold">Pierre Martin</span>
</div>
</td>
<td className="px-6 py-4 text-sm text-slate-500">10 Oct 2023</td>
<td className="px-6 py-4 text-sm font-bold">1 240,00 €</td>
<td className="px-6 py-4">
<span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-500 uppercase tracking-wider">En attente</span>
</td>
<td className="px-6 py-4 text-sm text-slate-500">Virement Bancaire</td>
<td className="px-6 py-4 text-right">
<button className="text-slate-400 hover:text-primary"><span className="material-symbols-outlined text-sm">visibility</span></button>
</td>
</tr>
<tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-8 rounded-full bg-slate-200 dark:bg-slate-600 flex items-center justify-center font-bold text-xs">SC</div>
<span className="text-sm font-semibold">Sophie Claire</span>
</div>
</td>
<td className="px-6 py-4 text-sm text-slate-500">09 Oct 2023</td>
<td className="px-6 py-4 text-sm font-bold">15,00 €</td>
<td className="px-6 py-4">
<span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-red-500/10 text-red-500 uppercase tracking-wider">Échoué</span>
</td>
<td className="px-6 py-4 text-sm text-slate-500">Mastercard</td>
<td className="px-6 py-4 text-right">
<button className="text-slate-400 hover:text-primary"><span className="material-symbols-outlined text-sm">visibility</span></button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="p-6 border-t border-slate-100 dark:divide-slate-700 flex items-center justify-between">
<span className="text-xs text-slate-500">Affichage de 1 à 4 sur 256 transactions</span>
<div className="flex gap-1">
<button className="size-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700"><span className="material-symbols-outlined text-sm">chevron_left</span></button>
<button className="size-8 flex items-center justify-center rounded-lg bg-primary text-white font-bold text-xs">1</button>
<button className="size-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-xs font-bold">2</button>
<button className="size-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-xs font-bold">3</button>
<button className="size-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700"><span className="material-symbols-outlined text-sm">chevron_right</span></button>
</div>
</div>
</div>
</div>
</main>
</div>

    </>
  );
};

export default PerformanceExportPdf;
