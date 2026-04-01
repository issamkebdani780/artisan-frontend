import React from 'react';

const LitigesEtAvertissementsDashboardArtisan = () => {
  return (
    <>
      
<div className="flex min-h-screen">
{/*  Sidebar  */}
<aside className="w-64 flex-shrink-0 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark/50 hidden md:flex flex-col">
<div className="p-6 flex items-center gap-3">
<div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
<span className="material-symbols-outlined">handyman</span>
</div>
<h2 className="text-lg font-bold tracking-tight">Artisan Pro</h2>
</div>
<div className="px-4 py-2">
<div className="flex items-center gap-3 px-3 py-4 border-b border-slate-100 dark:border-slate-800 mb-4">
<div className="size-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
<img alt="Profile" className="w-full h-full object-cover" data-alt="Photo de profil de l'artisan" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgd7ZCDtVvqbizbymytC_hgM53aM-YpMiqQDQv6RAnCkGOPf7BxKjE-_lkB5vwSUCsXB03JU4gOtUJ5xclBo2LTnKyfFzmga__FlPj8w7oO1Bu2lQyPPwAhBnGrv0MCgrSTTbQ3wekdCe7a32ZTGesLvY3SbP_tHG9ZEXtSZ84QukQkqS9vOMCa-4qnB8b-u4YWB2zI-dKz2W1_F6mwC6ho65czFfEMcvuDGqKXkls3cS-pIMI6qB9-fGdn5RwBvYZQIz15TswPQwj"/>
</div>
<div className="flex flex-col">
<h1 className="text-sm font-semibold">Atelier d'Art</h1>
<p className="text-slate-500 dark:text-slate-400 text-xs">Compte Professionnel</p>
</div>
</div>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="text-sm font-medium">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#">
<span className="material-symbols-outlined">work</span>
<span className="text-sm font-medium">Projets</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#">
<span className="material-symbols-outlined">chat</span>
<span className="text-sm font-medium">Messages</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 bg-primary/10 text-primary rounded-lg transition-colors" href="#">
<span className="material-symbols-outlined">warning</span>
<span className="text-sm font-medium">Litiges</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="text-sm font-medium">Paramètres</span>
</a>
</nav>
</div>
</aside>
{/*  Main Content  */}
<div className="flex-1 flex flex-col min-w-0">
{/*  Header  */}
<header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark/50 flex items-center justify-between px-8 sticky top-0 z-10">
<div className="flex items-center flex-1 max-w-xl">
<div className="relative w-full group">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">search</span>
<input className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/50 transition-all outline-none" placeholder="Rechercher un dossier ou un client..." type="text"/>
</div>
</div>
<div className="flex items-center gap-4">
<button className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg relative">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-2 right-2 size-2 bg-primary rounded-full"></span>
</button>
<button className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg" onclick="document.documentElement.classList.toggle('dark')">
<span className="material-symbols-outlined">dark_mode</span>
</button>
<div className="h-8 w-px bg-slate-200 dark:bg-slate-800 mx-2"></div>
<div className="flex items-center gap-3">
<span className="text-sm font-medium hidden sm:block">Jean L.</span>
<div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs uppercase">
                            JL
                        </div>
</div>
</div>
</header>
{/*  Dashboard Content  */}
<main className="p-8 space-y-8">
<div className="flex flex-col gap-2">
<h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Litiges et Avertissements</h1>
<p className="text-slate-500 dark:text-slate-400 max-w-2xl">Gérez les réclamations clients, suivez l'état de vos dossiers et répondez aux avertissements pour maintenir votre note de service.</p>
</div>
{/*  Stats Overview  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<div className="flex items-center justify-between mb-4">
<span className="p-2 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg material-symbols-outlined">error</span>
<span className="text-xs font-bold text-red-600 uppercase tracking-wider">Critiques</span>
</div>
<div className="text-3xl font-bold">02</div>
<p className="text-slate-500 text-sm mt-1">Dossiers prioritaires</p>
</div>
<div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<div className="flex items-center justify-between mb-4">
<span className="p-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-lg material-symbols-outlined">warning</span>
<span className="text-xs font-bold text-orange-600 uppercase tracking-wider">En cours</span>
</div>
<div className="text-3xl font-bold">05</div>
<p className="text-slate-500 text-sm mt-1">Réclamations actives</p>
</div>
<div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<div className="flex items-center justify-between mb-4">
<span className="p-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg material-symbols-outlined">check_circle</span>
<span className="text-xs font-bold text-green-600 uppercase tracking-wider">Résolus</span>
</div>
<div className="text-3xl font-bold">14</div>
<p className="text-slate-500 text-sm mt-1">Derniers 30 jours</p>
</div>
</div>
{/*  Table Container  */}
<div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
<th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Client &amp; Projet</th>
<th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Résumé du litige</th>
<th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Date</th>
<th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 text-center">Sévérité</th>
<th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 text-center">Statut</th>
<th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 dark:divide-slate-800">
{/*  Row 1  */}
<tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
<td className="px-6 py-5">
<div className="flex flex-col">
<span className="font-semibold text-slate-900 dark:text-white">Jean Dupont</span>
<span className="text-xs text-primary font-medium italic">Restauration Bureau Louis XV</span>
</div>
</td>
<td className="px-6 py-5">
<p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-1">Retard de livraison de plus de 15 jours sans notification préalable.</p>
</td>
<td className="px-6 py-5">
<span className="text-sm text-slate-500">12/10/2023</span>
</td>
<td className="px-6 py-5 text-center">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300">
                                            Critique
                                        </span>
</td>
<td className="px-6 py-5 text-center">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                                            Ouvert
                                        </span>
</td>
<td className="px-6 py-5 text-right">
<button className="text-sm font-bold text-primary hover:underline transition-all">Voir les détails</button>
</td>
</tr>
{/*  Row 2  */}
<tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
<td className="px-6 py-5">
<div className="flex flex-col">
<span className="font-semibold text-slate-900 dark:text-white">Marie Curie</span>
<span className="text-xs text-primary font-medium italic">Table en chêne massif</span>
</div>
</td>
<td className="px-6 py-5">
<p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-1">Finition non conforme aux spécifications (teinte trop foncée).</p>
</td>
<td className="px-6 py-5">
<span className="text-sm text-slate-500">05/10/2023</span>
</td>
<td className="px-6 py-5 text-center">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">
                                            Litige
                                        </span>
</td>
<td className="px-6 py-5 text-center">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                                            En cours
                                        </span>
</td>
<td className="px-6 py-5 text-right">
<button className="px-4 py-1.5 bg-primary text-white rounded-lg text-xs font-bold hover:bg-primary/90 transition-all">Répondre</button>
</td>
</tr>
{/*  Row 3  */}
<tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
<td className="px-6 py-5">
<div className="flex flex-col">
<span className="font-semibold text-slate-900 dark:text-white">Lucas Martin</span>
<span className="text-xs text-primary font-medium italic">Étagères sur mesure</span>
</div>
</td>
<td className="px-6 py-5">
<p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-1">Problème de visserie lors du montage à domicile.</p>
</td>
<td className="px-6 py-5">
<span className="text-sm text-slate-500">28/09/2023</span>
</td>
<td className="px-6 py-5 text-center">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300">
                                            Avertissement
                                        </span>
</td>
<td className="px-6 py-5 text-center">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">
                                            Résolu
                                        </span>
</td>
<td className="px-6 py-5 text-right">
<button className="text-sm font-bold text-slate-400 cursor-not-allowed">Voir les détails</button>
</td>
</tr>
{/*  Row 4  */}
<tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
<td className="px-6 py-5">
<div className="flex flex-col">
<span className="font-semibold text-slate-900 dark:text-white">Sophie Morel</span>
<span className="text-xs text-primary font-medium italic">Cadre doré ancien</span>
</div>
</td>
<td className="px-6 py-5">
<p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-1">Dommage mineur sur l'angle gauche lors du transport.</p>
</td>
<td className="px-6 py-5">
<span className="text-sm text-slate-500">20/09/2023</span>
</td>
<td className="px-6 py-5 text-center">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">
                                            Litige
                                        </span>
</td>
<td className="px-6 py-5 text-center">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                                            En cours
                                        </span>
</td>
<td className="px-6 py-5 text-right">
<button className="px-4 py-1.5 bg-primary text-white rounded-lg text-xs font-bold hover:bg-primary/90 transition-all">Répondre</button>
</td>
</tr>
</tbody>
</table>
</div>
{/*  Pagination (Simplified)  */}
<div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
<span className="text-xs text-slate-500">Affichage de 1 à 4 sur 21 résultats</span>
<div className="flex gap-2">
<button className="p-2 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-50 transition-colors" disabled>
<span className="material-symbols-outlined text-sm">chevron_left</span>
</button>
<button className="p-2 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
<span className="material-symbols-outlined text-sm">chevron_right</span>
</button>
</div>
</div>
</div>
{/*  Recent History Section  */}
<div>
<h2 className="text-xl font-bold mb-4">Historique récent des résolutions</h2>
<div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6">
<div className="flex flex-col gap-6">
<div className="flex gap-4">
<div className="size-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
<div className="flex-1">
<div className="flex justify-between items-start mb-1">
<h4 className="text-sm font-bold">Litige Résolu : Marc Andreoli</h4>
<span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Il y a 2 jours</span>
</div>
<p className="text-sm text-slate-500 dark:text-slate-400">Le remboursement partiel a été accepté par le client. Dossier clôturé avec succès.</p>
</div>
</div>
<div className="flex gap-4">
<div className="size-2 bg-slate-300 dark:bg-slate-700 rounded-full mt-2 flex-shrink-0"></div>
<div className="flex-1">
<div className="flex justify-between items-start mb-1">
<h4 className="text-sm font-bold">Mise à jour : Dossier Marie Curie</h4>
<span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Hier</span>
</div>
<p className="text-sm text-slate-500 dark:text-slate-400">Nouvelles photos ajoutées par le client pour vérification de la teinte.</p>
</div>
</div>
</div>
</div>
</div>
</main>
</div>
</div>

    </>
  );
};

export default LitigesEtAvertissementsDashboardArtisan;
