import React from 'react';

const ParametresIntegrationsAdmin = () => {
  return (
    <>
      
<div className="flex h-screen overflow-hidden">
{/*  Sidebar  */}
<aside className="w-72 bg-purple-950 text-white flex flex-col fixed inset-y-0 left-0 z-50">
<div className="p-6 flex flex-col gap-8">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white">
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
<a className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-purple-900 transition-colors" href="#">
<span className="material-symbols-outlined text-purple-300">verified_user</span>
<span className="text-sm font-medium">Vérifications</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-purple-900 transition-colors" href="#">
<span className="material-symbols-outlined text-purple-300">payments</span>
<span className="text-sm font-medium">Paiements</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl bg-purple-900 text-white border-l-4 border-primary mt-4" href="#">
<span className="material-symbols-outlined text-primary" >settings</span>
<span className="text-sm font-medium">Paramètres</span>
</a>
</nav>
</div>
<div className="mt-auto p-6 border-t border-purple-900">
<div className="flex items-center gap-3">
<div className="size-10 rounded-full bg-purple-800 bg-cover" ></div>
<div className="flex flex-col">
<p className="text-sm font-semibold">Admin User</p>
<p className="text-xs text-purple-400">Superviseur</p>
</div>
</div>
</div>
</aside>
{/*  Main Content  */}
<main className="flex-1 flex flex-col min-w-0 overflow-hidden ml-72 bg-background-light">
{/*  Header  */}
<header className="h-16 border-b border-slate-200 bg-white flex items-center justify-between px-8 sticky top-0 z-40">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-purple-600">settings</span>
<h2 className="text-lg font-bold">Paramètres</h2>
</div>
<div className="flex items-center gap-6">
<div className="relative w-64">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-xl text-sm focus:ring-2 focus:ring-purple-500" placeholder="Rechercher des paramètres..." type="text"/>
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
{/*  Scrollable Area  */}
<div className="flex-1 overflow-y-auto p-8">
{/*  Title Section  */}
<div className="mb-8">
<h1 className="text-3xl font-black tracking-tight text-slate-900">Paramètres Système</h1>
<p className="text-slate-500 mt-2">Gérez la configuration globale de The Violet Protocol et ajustez les préférences système de votre environnement.</p>
</div>
{/*  Tabbed Navigation  */}
<div className="flex border-b border-slate-200 mb-8">
<button className="px-6 py-4 text-sm font-medium text-slate-500 hover:text-purple-600 transition-colors">Général</button>
<button className="px-6 py-4 text-sm font-medium text-slate-500 hover:text-purple-600 transition-colors">Sécurité</button>
<button className="px-6 py-4 text-sm font-medium text-slate-500 hover:text-purple-600 transition-colors">Notifications</button>
<button className="px-6 py-4 text-sm font-bold border-b-2 border-primary text-primary">Intégrations</button>
</div>
<div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start">
{/*  Left Column: Content  */}
<div className="xl:col-span-2 space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{/*  Stripe Card  */}
<div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-6">
<div className="p-3 bg-[#635BFF10] rounded-xl text-[#635BFF]">
<span className="material-symbols-outlined" >payments</span>
</div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-800">
                                Connecté
                            </span>
</div>
<h3 className="text-lg font-bold mb-1">Stripe</h3>
<p className="text-xs text-slate-500 mb-6">Gestion des paiements et des virements vers les artisans.</p>
<div className="flex items-center justify-between pt-4 border-t border-slate-50">
<span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Paiements</span>
<button className="text-sm font-bold text-purple-600 hover:text-purple-700">Configurer</button>
</div>
</div>
{/*  Google Maps Card  */}
<div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-6">
<div className="p-3 bg-[#4285F410] rounded-xl text-[#4285F4]">
<span className="material-symbols-outlined" >map</span>
</div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-800">
                                Connecté
                            </span>
</div>
<h3 className="text-lg font-bold mb-1">Google Maps</h3>
<p className="text-xs text-slate-500 mb-6">Géolocalisation des prestations et calcul des itinéraires.</p>
<div className="flex items-center justify-between pt-4 border-t border-slate-50">
<span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Localisation</span>
<button className="text-sm font-bold text-purple-600 hover:text-purple-700">Configurer</button>
</div>
</div>
{/*  Twilio Card  */}
<div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-6">
<div className="p-3 bg-[#F22F4610] rounded-xl text-[#F22F46]">
<span className="material-symbols-outlined" >sms</span>
</div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-800">
                                Déconnecté
                            </span>
</div>
<h3 className="text-lg font-bold mb-1">Twilio</h3>
<p className="text-xs text-slate-500 mb-6">Envoi de notifications SMS automatiques aux utilisateurs.</p>
<div className="flex items-center justify-between pt-4 border-t border-slate-50">
<span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">SMS Gateway</span>
<button className="text-sm font-bold text-purple-600 hover:text-purple-700">Configurer</button>
</div>
</div>
{/*  SendGrid Card  */}
<div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-6">
<div className="p-3 bg-[#1A82E210] rounded-xl text-[#1A82E2]">
<span className="material-symbols-outlined" >mail</span>
</div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-800">
                                Connecté
                            </span>
</div>
<h3 className="text-lg font-bold mb-1">SendGrid</h3>
<p className="text-xs text-slate-500 mb-6">Plateforme d'envoi d'emails transactionnels et marketing.</p>
<div className="flex items-center justify-between pt-4 border-t border-slate-50">
<span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email Service</span>
<button className="text-sm font-bold text-purple-600 hover:text-purple-700">Configurer</button>
</div>
</div>
</div>
{/*  Primary Action  */}
<div className="flex justify-end pt-4">
<button className="bg-purple-600 text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-purple-700 transition-colors flex items-center gap-2 shadow-lg shadow-purple-600/20">
<span className="material-symbols-outlined text-sm">add</span>
                        Ajouter une intégration
                    </button>
</div>
</div>
{/*  Right Column: Sidebar Info  */}
<aside className="space-y-8">
{/*  System Info Card  */}
<div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
<div className="flex items-center justify-between mb-6">
<h3 className="font-bold text-slate-900">Informations Système</h3>
<span className="material-symbols-outlined text-purple-600">history</span>
</div>
<div className="space-y-6">
<div className="flex items-center justify-between group">
<span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Version</span>
<span className="bg-purple-100 text-purple-700 text-[10px] font-bold px-2 py-1 rounded">v2.4.1-purple</span>
</div>
<div className="flex items-center justify-between group">
<span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Dernier Backup</span>
<span className="text-sm text-slate-600 font-medium">Il y a 2h 14min</span>
</div>
<div className="pt-4 space-y-4 border-t border-slate-100">
<div className="flex items-center gap-3">
<div className="h-2 w-2 rounded-full bg-green-500"></div>
<span className="text-sm font-medium">Moteur de Curation : Stable</span>
</div>
<div className="flex items-center gap-3">
<div className="h-2 w-2 rounded-full bg-green-500"></div>
<span className="text-sm font-medium">Base de données : Optimisée</span>
</div>
<div className="flex items-center gap-3">
<div className="h-2 w-2 rounded-full bg-orange-400"></div>
<span className="text-sm font-medium">Sync Cloud : En cours...</span>
</div>
</div>
</div>
</div>
{/*  AI Insight Component  */}
<div className="bg-purple-600 text-white rounded-xl p-6 shadow-lg shadow-purple-600/20 relative overflow-hidden group">
<div className="relative z-10">
<div className="flex items-center gap-2 text-purple-100 mb-2">
<span className="material-symbols-outlined text-lg">auto_awesome</span>
<span className="text-[10px] font-bold uppercase tracking-widest">AI Insight</span>
</div>
<p className="text-sm italic leading-relaxed text-purple-50">
                            "L'activation du mode maintenance est recommandée le dimanche à 03:00 GMT pour minimiser l'impact sur les curations actives."
                        </p>
</div>
<div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-700">
<span className="material-symbols-outlined text-8xl">bolt</span>
</div>
</div>
{/*  Help Resource  */}
<div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
<h4 className="font-bold text-slate-900 mb-2">Besoin d'aide ?</h4>
<p className="text-xs text-slate-500 mb-4">Consultez la documentation technique sur la configuration des protocoles.</p>
<a className="text-sm font-bold text-purple-600 hover:text-purple-700 transition-colors inline-flex items-center gap-1" href="#">
                        Voir le guide <span className="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
</aside>
</div>
{/*  Footer  */}
<footer className="mt-12 py-8 border-t border-slate-200 text-center text-slate-400 text-sm">
<p>© 2023 Admin Panel Purple Edition. Tous droits réservés.</p>
<div className="mt-2 flex justify-center gap-4">
<a className="hover:text-purple-500 transition-colors" href="#">Aide</a>
<a className="hover:text-purple-500 transition-colors" href="#">Confidentialité</a>
<a className="hover:text-purple-500 transition-colors" href="#">Conditions</a>
</div>
</footer>
</div>
</main>
</div>

    </>
  );
};

export default ParametresIntegrationsAdmin;
