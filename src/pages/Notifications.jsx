import React from 'react';

const Notifications = () => {
  return (
    <>
      
<div className="relative flex h-screen w-full flex-col overflow-hidden">
{/*  Header  */}
<header className="flex h-16 w-full items-center justify-between border-b border-slate-200 bg-white px-6 z-10">
<div className="flex items-center gap-8">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center rounded-lg bg-primary text-white p-1.5">
<span className="material-symbols-outlined text-xl">handyman</span>
</div>
<h2 className="text-lg font-bold leading-tight tracking-tight">Artisan Pro</h2>
</div>
<div className="hidden md:flex items-center">
<div className="relative group">
<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400 group-focus-within:text-primary">
<span className="material-symbols-outlined text-xl">search</span>
</div>
<input className="block w-64 h-10 pl-10 pr-3 text-sm border-none bg-slate-100 rounded-lg focus:ring-2 focus:ring-primary focus:bg-white transition-all" placeholder="Rechercher..." type="text"/>
</div>
</div>
</div>
<div className="flex items-center gap-4">
<button className="relative flex items-center justify-center size-10 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-2 right-2.5 size-2.5 bg-red-500 rounded-full border-2 border-white"></span>
</button>
<button className="flex items-center justify-center size-10 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors">
<span className="material-symbols-outlined">account_circle</span>
</button>
<div className="h-10 w-px bg-slate-200 mx-1"></div>
<div className="bg-primary/10 rounded-full p-0.5">
<img alt="Avatar Artisan" className="size-9 rounded-full object-cover" data-alt="Photo de profil de l'artisan" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAE6ksvf4hp4_qXcyHRPZcejDxdEOhn2dKbfqBZo-BpMwmSCvYVBPkEN9Ia9nQBdGg52CQj-HbgUNS9xsbw3P8pIEm-XUiSrDRZPAP6SZEWDs-5bUifc2qLDFlVuu_ZlXsp8xEkx5AZPce9cWnyZMQDEnlyVk96VctDqyN9fIolTKQH12q2DJzPzJjwHi8mH7snlGHoSWiC2RO7h-6J4YG-0017Y9oTpcAlVsprqiZpkH_UI0F8FHSAz76LDmIy57UITbobu76p7_Sm"/>
</div>
</div>
</header>
<div className="flex flex-1 overflow-hidden">
{/*  Sidebar Navigation  */}
<aside className="w-64 border-r border-slate-200 bg-white flex flex-col p-4 shrink-0">
<div className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="text-sm font-medium">Tableau de bord</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors" href="#">
<span className="material-symbols-outlined">assignment</span>
<span className="text-sm font-medium">Gestion des tâches</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors" href="#">
<span className="material-symbols-outlined">inventory_2</span>
<span className="text-sm font-medium">Inventaire</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors" href="#">
<span className="material-symbols-outlined">payments</span>
<span className="text-sm font-medium">Revenus</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 bg-primary/10 text-primary rounded-lg transition-colors" href="#">
<span className="material-symbols-outlined">notifications</span>
<span className="text-sm font-bold">Notifications</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="text-sm font-medium">Paramètres</span>
</a>
</div>
<div className="mt-auto p-4 bg-slate-50 rounded-xl border border-slate-100">
<p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Support</p>
<p className="text-xs text-slate-600 mb-3">Besoin d'aide avec vos notifications ?</p>
<button className="w-full py-2 px-4 bg-white border border-slate-200 text-xs font-bold rounded-lg hover:bg-slate-50 transition-colors">Contacter l'aide</button>
</div>
</aside>
{/*  Main Content  */}
<main className="flex-1 overflow-y-auto bg-background-light p-6 md:p-10">
<div className="max-w-4xl mx-auto">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
<div>
<h1 className="text-3xl font-black text-slate-900 tracking-tight">Centre de Notifications</h1>
<p className="text-slate-500 mt-1">Gérez vos alertes et l'historique de votre activité.</p>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
<span className="material-symbols-outlined text-lg">check_circle</span>
                            Tout marquer comme lu
                        </button>
<button className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-red-600 bg-red-50 border border-red-100 rounded-lg hover:bg-red-100 transition-colors">
<span className="material-symbols-outlined text-lg">delete_sweep</span>
                            Effacer tout
                        </button>
</div>
</div>{/*  Notification Filters  */}
<div className="relative mb-4 group max-w-md">
<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400 group-focus-within:text-primary">
<span className="material-symbols-outlined text-xl">search</span>
</div>
<input className="block w-full h-11 pl-10 pr-4 text-sm border border-slate-200 bg-white rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all shadow-sm" placeholder="Rechercher par nom ou projet..." type="text"/>
</div><div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
<button className="whitespace-nowrap px-4 py-2 rounded-full text-sm font-bold bg-primary text-white transition-colors">
    Toutes
  </button>
<button className="whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium bg-white border border-slate-200 text-slate-600 hover:border-primary/50 hover:bg-primary/5 transition-colors">
    Avis
  </button>
<button className="whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium bg-white border border-slate-200 text-slate-600 hover:border-primary/50 hover:bg-primary/5 transition-colors">
    Messages
  </button>
<button className="whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium bg-white border border-slate-200 text-slate-600 hover:border-primary/50 hover:bg-primary/5 transition-colors">
    Système
  </button>
</div>
{/*  Notifications List  */}
<div className="space-y-8">
{/*  Today Section  */}
<section>
<div className="flex items-center gap-4 mb-4">
<h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Aujourd'hui</h3>
<div className="h-px flex-1 bg-slate-200"></div>
</div>
<div className="space-y-3">
{/*  New Review - Unread  */}
<div className="group relative flex items-start gap-4 p-4 bg-primary/5 border border-primary/20 rounded-xl transition-all hover:shadow-sm">
<div className="flex-shrink-0 size-12 flex items-center justify-center bg-amber-100 text-amber-600 rounded-xl">
<span className="material-symbols-outlined text-2xl">star</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-1">
<h4 className="text-base font-bold text-slate-900">Nouvel avis client</h4>
<span className="text-xs text-slate-500">Il y a 2 heures</span>
</div>
<p className="text-sm text-slate-600">Vous avez reçu une note de <span className="font-bold">5 étoiles</span> pour "<span className="italic">Bibliothèque en noyer sur mesure</span>" de <span className="text-primary font-medium">Jane Doe</span>.</p>
</div>
<div className="flex flex-col items-center gap-2">
<div className="size-2.5 bg-primary rounded-full"></div>
<button className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-400 hover:text-slate-600">
<span className="material-symbols-outlined text-lg">close</span>
</button>
</div>
</div>
{/*  New Message - Unread  */}
<div className="group relative flex items-start gap-4 p-4 bg-primary/5 border border-primary/20 rounded-xl transition-all hover:shadow-sm">
<div className="flex-shrink-0 size-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-xl">
<span className="material-symbols-outlined text-2xl">chat</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-1">
<h4 className="text-base font-bold text-slate-900">Nouveau message</h4>
<span className="text-xs text-slate-500">Il y a 5 heures</span>
</div>
<p className="text-sm text-slate-600">Le client <span className="text-primary font-medium">Michael Smith</span> vous a envoyé un message concernant "<span className="italic">Rénovation de façades de cuisine</span>".</p>
<div className="mt-3 flex flex-col gap-3">
<button className="w-fit px-4 py-1.5 text-xs font-bold text-primary bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors" onclick="this.parentElement.nextElementSibling.classList.toggle('max-h-0'); this.parentElement.nextElementSibling.classList.toggle('mt-3');">
    Répondre
  </button>
</div>
<div className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
<div className="flex gap-2 p-1">
<input className="flex-1 h-9 px-3 text-xs border border-slate-200 bg-white rounded-lg focus:ring-1 focus:ring-primary focus:border-primary transition-all" placeholder="Écrire une réponse rapide..." type="text"/>
<button className="flex items-center justify-center size-9 rounded-lg border border-slate-200 text-slate-500 hover:text-primary hover:bg-primary/5 transition-all" title="Joindre une image">
<span className="material-symbols-outlined text-xl">photo_camera</span>
</button>
<button className="px-4 h-9 text-xs font-bold text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors shadow-sm">
      Confirmer
    </button>
</div>
</div></div>
<div className="flex flex-col items-center gap-2">
<div className="size-2.5 bg-primary rounded-full"></div>
<button className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-400 hover:text-slate-600">
<span className="material-symbols-outlined text-lg">close</span>
</button>
</div>
</div>
</div>
</section>
{/*  Yesterday Section  */}
<section>
<div className="flex items-center gap-4 mb-4">
<h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Hier</h3>
<div className="h-px flex-1 bg-slate-200"></div>
</div>
<div className="space-y-3">
{/*  Project Completed  */}
<div className="group relative flex items-start gap-4 p-4 bg-white border border-slate-200 rounded-xl transition-all hover:border-slate-300">
<div className="flex-shrink-0 size-12 flex items-center justify-center bg-emerald-100 text-emerald-600 rounded-xl">
<span className="material-symbols-outlined text-2xl">task_alt</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-1">
<h4 className="text-base font-bold text-slate-900">Projet terminé</h4>
<span className="text-xs text-slate-500">Hier, 14:20</span>
</div>
<p className="text-sm text-slate-600">Le projet "<span className="italic text-slate-900">Restauration de chaise ancienne</span>" a été marqué comme terminé.</p>
</div>
<button className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-400 hover:text-slate-600">
<span className="material-symbols-outlined text-lg">close</span>
</button>
</div>
{/*  System Update  */}
<div className="group relative flex items-start gap-4 p-4 bg-white border border-slate-200 rounded-xl transition-all hover:border-slate-300">
<div className="flex-shrink-0 size-12 flex items-center justify-center bg-slate-100 text-slate-600 rounded-xl">
<span className="material-symbols-outlined text-2xl">verified_user</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-1">
<h4 className="text-base font-bold text-slate-900">Mise à jour du système</h4>
<span className="text-xs text-slate-500">Hier, 09:05</span>
</div>
<p className="text-sm text-slate-600">Votre profil a été vérifié avec succès. Vous pouvez désormais répondre à plus d'appels d'offres.</p>
</div>
<button className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-400 hover:text-slate-600">
<span className="material-symbols-outlined text-lg">close</span>
</button>
</div>
</div>
</section>
{/*  Last Week Section  */}
<section>
<div className="flex items-center gap-4 mb-4">
<h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">La semaine dernière</h3>
<div className="h-px flex-1 bg-slate-200"></div>
</div>
<div className="space-y-3">
{/*  Payment Notification  */}
<div className="group relative flex items-start gap-4 p-4 bg-white border border-slate-200 rounded-xl transition-all hover:border-slate-300">
<div className="flex-shrink-0 size-12 flex items-center justify-center bg-purple-100 text-purple-600 rounded-xl">
<span className="material-symbols-outlined text-2xl">receipt_long</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-1">
<h4 className="text-base font-bold text-slate-900">Paiement reçu</h4>
<span className="text-xs text-slate-500">3 oct. 2023</span>
</div>
<p className="text-sm text-slate-600">Un virement de <span className="font-bold text-slate-900">450,00 €</span> a été crédité sur votre compte.</p>
</div>
<button className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-400 hover:text-slate-600">
<span className="material-symbols-outlined text-lg">close</span>
</button>
</div>
</div>
</section>
</div>
{/*  Footer / Empty State placeholder  */}
<div className="mt-12 text-center pb-12">
<p className="text-sm text-slate-400">Vous avez vu toutes les notifications récentes.</p>
<button className="mt-4 text-primary font-bold hover:underline">Voir l'historique complet</button>
</div>
</div>
</main>
</div>
</div>

    </>
  );
};

export default Notifications;
