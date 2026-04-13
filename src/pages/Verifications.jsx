import React from 'react';

const Verifications = () => {
  return (
    <>
      
<div className="flex min-h-screen">
{/*  Side Navigation  */}
<aside className="w-72 bg-purple-950 text-white flex flex-col fixed inset-y-0 left-0 z-50">
<div className="p-6 flex flex-col gap-8">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white" data-alt="Logo abstrait orange sur fond violet">
<span className="material-symbols-outlined">shield_person</span>
</div>
<div className="flex flex-col">
<h1 className="text-base font-bold leading-none">Admin Panel</h1>
<p className="text-purple-400 text-xs mt-1">Purple Edition</p>
</div>
</div>
<nav className="flex flex-col gap-1">
<a className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-purple-900 transition-colors" href="#">
<span className="material-symbols-outlined text-purple-300">dashboard</span>
<span className="text-sm font-medium">Tableau de bord</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-purple-900 transition-colors" href="#">
<span className="material-symbols-outlined text-purple-300">engineering</span>
<span className="text-sm font-medium">Artisans</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-purple-900 transition-colors" href="#">
<span className="material-symbols-outlined text-purple-300">group</span>
<span className="text-sm font-medium">Clients</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl bg-purple-900 text-white border-l-4 border-primary" href="#">
<span className="material-symbols-outlined text-primary">verified_user</span>
<span className="text-sm font-medium">Vérifications</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-purple-900 transition-colors" href="#">
<span className="material-symbols-outlined text-purple-300">payments</span>
<span className="text-sm font-medium">Paiements</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-purple-900 transition-colors mt-4" href="#">
<span className="material-symbols-outlined text-purple-300">settings</span>
<span className="text-sm font-medium">Paramètres</span>
</a>
</nav>
</div>
<div className="mt-auto p-6 border-t border-purple-900">
<div className="flex items-center gap-3">
<div className="size-10 rounded-full bg-purple-800 bg-cover" data-alt="Portrait miniature de l'administrateur" ></div>
<div className="flex flex-col">
<p className="text-sm font-semibold">Admin User</p>
<p className="text-xs text-purple-400">Superviseur</p>
</div>
</div>
</div>
</aside>
{/*  Main Content  */}
<main className="flex-1 ml-72 flex flex-col">
{/*  Header  */}
<header className="h-16 border-b border-slate-200 bg-white flex items-center justify-between px-8 sticky top-0 z-40">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-purple-600">verified</span>
<h2 className="text-lg font-bold">Gestion des Vérifications</h2>
</div>
<div className="flex items-center gap-6">
<div className="relative w-64">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-xl text-sm focus:ring-2 focus:ring-purple-500" placeholder="Rechercher un artisan..." type="text"/>
</div>
<div className="flex items-center gap-2">
<button className="p-2 rounded-xl bg-slate-100 text-slate-600 relative">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-2 right-2 size-2 bg-primary rounded-full"></span>
</button>
<button className="p-2 rounded-xl bg-slate-100 text-slate-600">
<span className="material-symbols-outlined">dark_mode</span>
</button>
</div>
</div>
</header>
{/*  Dashboard Content  */}
<div className="p-8">
<div className="mb-8">
<h1 className="text-3xl font-black tracking-tight text-slate-900">Vérifications en attente</h1>
<p className="text-slate-500 mt-2">Validez l'identité et les documents professionnels des artisans pour permettre l'accès à la plateforme.</p>
</div>
{/*  Tabs  */}
<div className="flex border-b border-slate-200 mb-6">
<button className="px-6 py-4 text-sm font-bold border-b-2 border-primary text-primary">En attente (12)</button>
<button className="px-6 py-4 text-sm font-medium text-slate-500 hover:text-purple-600 transition-colors">Approuvés</button>
<button className="px-6 py-4 text-sm font-medium text-slate-500 hover:text-purple-600 transition-colors">Rejetés</button>
</div>
{/*  Filters & Stats Summary  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
<div className="bg-white p-6 rounded-xl border border-slate-200 flex items-center gap-4">
<div className="p-3 rounded-xl bg-purple-100 text-purple-600">
<span className="material-symbols-outlined">hourglass_empty</span>
</div>
<div>
<p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Temps de réponse moyen</p>
<p className="text-xl font-bold">14 heures</p>
</div>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 flex items-center gap-4">
<div className="p-3 rounded-xl bg-green-100 text-green-600">
<span className="material-symbols-outlined">task_alt</span>
</div>
<div>
<p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Traités aujourd'hui</p>
<p className="text-xl font-bold">28 dossiers</p>
</div>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 flex items-center gap-4">
<div className="p-3 rounded-xl bg-primary/10 text-primary">
<span className="material-symbols-outlined">priority_high</span>
</div>
<div>
<p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Urgence haute</p>
<p className="text-xl font-bold">3 dossiers</p>
</div>
</div>
</div>
{/*  Table  */}
<div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="bg-slate-50">
<th className="px-6 py-4 text-sm font-bold text-slate-600">Artisan</th>
<th className="px-6 py-4 text-sm font-bold text-slate-600">Spécialité</th>
<th className="px-6 py-4 text-sm font-bold text-slate-600">Date d'inscription</th>
<th className="px-6 py-4 text-sm font-bold text-slate-600">Statut Documents</th>
<th className="px-6 py-4 text-sm font-bold text-slate-600 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
{/*  Row 1  */}
<tr className="hover:bg-slate-50/50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-10 rounded-full bg-purple-200 flex items-center justify-center font-bold text-purple-700">JD</div>
<div>
<p className="font-bold text-sm">Jean Dupont</p>
<p className="text-xs text-slate-500">jean.dupont@email.com</p>
</div>
</div>
</td>
<td className="px-6 py-4 text-sm">Plomberie</td>
<td className="px-6 py-4 text-sm text-slate-500">12 Oct 2023</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-700">
<span className="size-1.5 rounded-full bg-purple-500"></span>
                                            En cours
                                        </span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-sm font-bold text-primary hover:underline">Vérifier</button>
</td>
</tr>
{/*  Row 2  */}
<tr className="hover:bg-slate-50/50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-10 rounded-full bg-blue-200 flex items-center justify-center font-bold text-blue-700">ML</div>
<div>
<p className="font-bold text-sm">Marie Lefebvre</p>
<p className="text-xs text-slate-500">m.lefebvre@pro.fr</p>
</div>
</div>
</td>
<td className="px-6 py-4 text-sm">Électricité</td>
<td className="px-6 py-4 text-sm text-slate-500">11 Oct 2023</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700">
<span className="size-1.5 rounded-full bg-green-500"></span>
                                            Complet
                                        </span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-sm font-bold text-primary hover:underline">Vérifier</button>
</td>
</tr>
{/*  Row 3  */}
<tr className="hover:bg-slate-50/50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-10 rounded-full bg-orange-200 flex items-center justify-center font-bold text-orange-700">LB</div>
<div>
<p className="font-bold text-sm">Lucas Bernard</p>
<p className="text-xs text-slate-500">l.bernard@gmail.com</p>
</div>
</div>
</td>
<td className="px-6 py-4 text-sm">Menuiserie</td>
<td className="px-6 py-4 text-sm text-slate-500">10 Oct 2023</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-red-100 text-red-700">
<span className="size-1.5 rounded-full bg-red-500"></span>
                                            Manquant
                                        </span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-sm font-bold text-slate-600 hover:text-primary transition-colors">Relancer</button>
</td>
</tr>
{/*  Row 4  */}
<tr className="hover:bg-slate-50/50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-10 rounded-full bg-pink-200 flex items-center justify-center font-bold text-pink-700">SP</div>
<div>
<p className="font-bold text-sm">Sophie Petit</p>
<p className="text-xs text-slate-500">petit.sophie@outlook.fr</p>
</div>
</div>
</td>
<td className="px-6 py-4 text-sm">Peinture</td>
<td className="px-6 py-4 text-sm text-slate-500">09 Oct 2023</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-700">
<span className="size-1.5 rounded-full bg-purple-500"></span>
                                            En cours
                                        </span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-sm font-bold text-primary hover:underline">Vérifier</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
<p className="text-xs text-slate-500 font-medium">Affichage de 4 sur 12 artisans en attente</p>
<div className="flex gap-2">
<button className="p-1.5 rounded-lg border border-slate-200 hover:bg-white disabled:opacity-50" disabled>
<span className="material-symbols-outlined text-sm">chevron_left</span>
</button>
<button className="p-1.5 rounded-lg border border-slate-200 hover:bg-white">
<span className="material-symbols-outlined text-sm">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
{/*  Footer  */}
<footer className="mt-auto p-8 border-t border-slate-200 text-center text-slate-400 text-sm">
<p>© 2023 Admin Panel Purple Edition. Tous droits réservés.</p>
<div className="mt-2 flex justify-center gap-4">
<a className="hover:text-purple-500 transition-colors" href="#">Aide</a>
<a className="hover:text-purple-500 transition-colors" href="#">Confidentialité</a>
<a className="hover:text-purple-500 transition-colors" href="#">Conditions</a>
</div>
</footer>
</main>
</div>

    </>
  );
};

export default Verifications;
