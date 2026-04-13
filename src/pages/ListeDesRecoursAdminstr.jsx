import React from 'react';

const ListeDesRecoursAdminstr = () => {
  return (
    <>
      
<div className="layout-container flex h-full grow flex-col">
{/*  Header / Navigation  */}
<header className="flex items-center justify-between whitespace-nowrap border-b border-slate-200 bg-white px-6 md:px-10 py-3 sticky top-0 z-50">
<div className="flex items-center gap-8">
<div className="flex items-center gap-4 text-primary">
<div className="size-8 flex items-center justify-center bg-primary/10 rounded-lg">
<span className="material-symbols-outlined text-primary">construction</span>
</div>
<h2 className="text-slate-900 text-lg font-bold leading-tight tracking-tight">ArtisanDirect</h2>
</div>
<nav className="hidden md:flex items-center gap-9">
<a className="text-slate-600 hover:text-primary text-sm font-medium transition-colors" href="#">Accueil</a>
<a className="text-slate-600 hover:text-primary text-sm font-medium transition-colors" href="#">Missions</a>
<a className="text-slate-600 hover:text-primary text-sm font-medium transition-colors" href="#">Support</a>
</nav>
</div>
<div className="flex flex-1 justify-end gap-4 items-center">
<label className="hidden sm:flex flex-col min-w-40 h-10 max-w-64">
<div className="flex w-full flex-1 items-stretch rounded-xl h-full border border-slate-200">
<div className="text-slate-400 flex items-center justify-center pl-4" data-icon="search">
<span className="material-symbols-outlined text-xl">search</span>
</div>
<input className="form-input flex w-full min-w-0 flex-1 border-none bg-transparent focus:ring-0 placeholder:text-slate-400 text-sm" placeholder="Rechercher un recours..." value=""/>
</div>
</label>
<button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
<span className="material-symbols-outlined">notifications</span>
</button>
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary/20" data-alt="Photo de profil de l'artisan" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuC_d6WXsEq_jpuL2yo_AjXrsXVtfld_UHlrb81_6ywyVfT4-F5wU339Y1EeLQGAmZRwrp3tFCfO8gUitZbLXhgOQFA6JwN8wwEnL17w9h1bkT9JAQjonOtsi-RAwZfmQYnyKedlDBcafVCtORF31rrpH1Dqh23CeqwbXqreRaqSsXoKkFIjIBSXDfIbMJezRm60WoF0RaWc3b2ktxQw24-DYUUshZ43yTfxT61mO0JSl_U-F4X3EfFAPNgA1BOnhTYYNp-Bp-zup7n7");'></div>
</div>
</header>
<main className="flex-1 max-w-[1200px] mx-auto w-full p-4 md:p-10">
{/*  Title and Action Section  */}
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
<div>
<h1 className="text-slate-900 text-3xl md:text-4xl font-extrabold tracking-tight">Mes recours</h1>
<p className="text-slate-500 mt-1">Gérez vos contestations et demandes de révision administrative.</p>
</div>
<button className="flex items-center gap-2 cursor-pointer rounded-xl h-12 px-6 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
<span className="material-symbols-outlined text-xl">add_circle</span>
<span>Ouvrir un nouveau recours</span>
</button>
</div>
{/*  Dashboard Layout: Stats & Table  */}
<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
{/*  Sidebar Stats  */}
<div className="lg:col-span-1 flex flex-col gap-4">
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined text-primary">analytics</span>
<h3 className="font-bold text-slate-800">Vue d'ensemble</h3>
</div>
<div className="space-y-4">
<div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
<span className="text-sm font-medium text-slate-600">Total recours</span>
<span className="text-xl font-bold text-slate-900">12</span>
</div>
<div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
<span className="text-sm font-medium text-blue-700">En attente</span>
<span className="text-xl font-bold text-blue-800">3</span>
</div>
<div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
<span className="text-sm font-medium text-green-700">Terminés</span>
<span className="text-xl font-bold text-green-800">9</span>
</div>
</div>
<div className="mt-8 pt-6 border-t border-slate-100">
<h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Aide administrative</h4>
<div className="space-y-3">
<a className="flex items-center gap-2 text-sm text-primary hover:underline" href="#">
<span className="material-symbols-outlined text-sm">description</span>
                                    Guide des procédures
                                </a>
<a className="flex items-center gap-2 text-sm text-primary hover:underline" href="#">
<span className="material-symbols-outlined text-sm">support_agent</span>
                                    Contacter un conseiller
                                </a>
</div>
</div>
</div>
</div>
{/*  Main Content: Table  */}
<div className="lg:col-span-3 flex flex-col gap-4">
{/*  Filters  */}
<div className="flex border-b border-slate-200 gap-8 overflow-x-auto">
<a className="flex flex-col items-center justify-center border-b-2 border-primary text-primary pb-3 pt-2 px-1 whitespace-nowrap" href="#">
<span className="text-sm font-bold">Tous les dossiers</span>
</a>
<a className="flex flex-col items-center justify-center border-b-2 border-transparent text-slate-500 hover:text-slate-700 pb-3 pt-2 px-1 whitespace-nowrap" href="#">
<span className="text-sm font-bold">En cours</span>
</a>
<a className="flex flex-col items-center justify-center border-b-2 border-transparent text-slate-500 hover:text-slate-700 pb-3 pt-2 px-1 whitespace-nowrap" href="#">
<span className="text-sm font-bold">Acceptés</span>
</a>
<a className="flex flex-col items-center justify-center border-b-2 border-transparent text-slate-500 hover:text-slate-700 pb-3 pt-2 px-1 whitespace-nowrap" href="#">
<span className="text-sm font-bold">Clos</span>
</a>
</div>
{/*  Table Container  */}
<div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
<div className="overflow-x-auto @container">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-slate-50">
<th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Référence</th>
<th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Sujet</th>
<th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Date de dépôt</th>
<th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 text-center">Statut</th>
<th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
{/*  Row 1  */}
<tr className="hover:bg-slate-50 transition-colors">
<td className="px-6 py-5">
<span className="font-mono text-sm font-semibold text-slate-700">AD-784920X</span>
</td>
<td className="px-6 py-5">
<div className="text-sm font-medium text-slate-900">Contestation de constat</div>
<div className="text-xs text-slate-500">Chantier #2901 - Paris</div>
</td>
<td className="px-6 py-5 text-sm text-slate-600">12/10/2023</td>
<td className="px-6 py-5 text-center">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800">
                                                En cours de révision
                                            </span>
</td>
<td className="px-6 py-5 text-right">
<button className="text-primary hover:text-primary/80 font-bold text-sm flex items-center gap-1 ml-auto transition-colors">
                                                Détails <span className="material-symbols-outlined text-sm">chevron_right</span>
</button>
</td>
</tr>
{/*  Row 2  */}
<tr className="hover:bg-slate-50 transition-colors">
<td className="px-6 py-5">
<span className="font-mono text-sm font-semibold text-slate-700">AD-552109Y</span>
</td>
<td className="px-6 py-5">
<div className="text-sm font-medium text-slate-900">Litige paiement</div>
<div className="text-xs text-slate-500">Facture F-2023-44</div>
</td>
<td className="px-6 py-5 text-sm text-slate-600">05/09/2023</td>
<td className="px-6 py-5 text-center">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-800">
                                                Accepté
                                            </span>
</td>
<td className="px-6 py-5 text-right">
<button className="text-primary hover:text-primary/80 font-bold text-sm flex items-center gap-1 ml-auto transition-colors">
                                                Détails <span className="material-symbols-outlined text-sm">chevron_right</span>
</button>
</td>
</tr>
{/*  Row 3  */}
<tr className="hover:bg-slate-50 transition-colors">
<td className="px-6 py-5">
<span className="font-mono text-sm font-semibold text-slate-700">AD-334012Z</span>
</td>
<td className="px-6 py-5">
<div className="text-sm font-medium text-slate-900">Erreur administrative</div>
<div className="text-xs text-slate-500">Mise à jour profil</div>
</td>
<td className="px-6 py-5 text-sm text-slate-600">20/08/2023</td>
<td className="px-6 py-5 text-center">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-800">
                                                Clos
                                            </span>
</td>
<td className="px-6 py-5 text-right">
<button className="text-primary hover:text-primary/80 font-bold text-sm flex items-center gap-1 ml-auto transition-colors">
                                                Détails <span className="material-symbols-outlined text-sm">chevron_right</span>
</button>
</td>
</tr>
{/*  Row 4  */}
<tr className="hover:bg-slate-50 transition-colors">
<td className="px-6 py-5">
<span className="font-mono text-sm font-semibold text-slate-700">AD-110293W</span>
</td>
<td className="px-6 py-5">
<div className="text-sm font-medium text-slate-900">Défaut de matériel</div>
<div className="text-xs text-slate-500">Garantie fournisseur</div>
</td>
<td className="px-6 py-5 text-sm text-slate-600">15/07/2023</td>
<td className="px-6 py-5 text-center">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-100 text-red-800">
                                                Rejeté
                                            </span>
</td>
<td className="px-6 py-5 text-right">
<button className="text-primary hover:text-primary/80 font-bold text-sm flex items-center gap-1 ml-auto transition-colors">
                                                Détails <span className="material-symbols-outlined text-sm">chevron_right</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
<span className="text-xs text-slate-500">Affichage de 1-4 sur 12 recours</span>
<div className="flex gap-2">
<button className="p-1 rounded border border-slate-300 disabled:opacity-50" disabled>
<span className="material-symbols-outlined text-lg">chevron_left</span>
</button>
<button className="p-1 rounded border border-slate-300">
<span className="material-symbols-outlined text-lg">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
</div>
</main>
{/*  Footer  */}
<footer className="bg-white border-t border-slate-200 mt-20">
<div className="max-w-[1200px] mx-auto px-6 md:px-10 py-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-10">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 text-primary mb-6">
<span className="material-symbols-outlined">construction</span>
<span className="text-lg font-bold text-slate-900">ArtisanDirect</span>
</div>
<p className="text-sm text-slate-500 leading-relaxed">
                            La plateforme leader pour les artisans indépendants. Gagnez en visibilité et simplifiez votre administratif.
                        </p>
</div>
<div>
<h4 className="font-bold text-slate-900 mb-6">Navigation</h4>
<ul className="space-y-4 text-sm text-slate-600">
<li><a className="hover:text-primary transition-colors" href="#">Mon Tableau de bord</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Missions disponibles</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Mes factures</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Paramètres</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-slate-900 mb-6">Support Admin</h4>
<ul className="space-y-4 text-sm text-slate-600">
<li><a className="hover:text-primary transition-colors" href="#">Centre d'aide</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Règlement des litiges</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Contact support</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Documents légaux</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-slate-900 mb-6">Restez connecté</h4>
<div className="flex gap-4">
<a className="size-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all" href="#">
<span className="material-symbols-outlined text-lg">mail</span>
</a>
<a className="size-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all" href="#">
<span className="material-symbols-outlined text-lg">share</span>
</a>
</div>
</div>
</div>
<div className="mt-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
<p>© 2023 ArtisanDirect. Tous droits réservés.</p>
<div className="flex gap-6">
<a className="hover:text-primary transition-colors" href="#">Confidentialité</a>
<a className="hover:text-primary transition-colors" href="#">CGU</a>
<a className="hover:text-primary transition-colors" href="#">Mentions légales</a>
</div>
</div>
</div>
</footer>
</div>

    </>
  );
};

export default ListeDesRecoursAdminstr;
