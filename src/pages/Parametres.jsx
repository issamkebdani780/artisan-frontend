import React from 'react';

const Parametres = () => {
  return (
    <>
      
<div className="flex min-h-screen">
{/*  Sidebar  */}
<aside className="w-64 border-r border-slate-200 bg-white flex flex-col fixed h-full">
<div className="p-6 flex items-center gap-3">
<div className="bg-primary/20 p-2 rounded-lg">
<span className="material-symbols-outlined text-primary">auto_fix_high</span>
</div>
<div>
<h1 className="text-lg font-bold tracking-tight">Admin Panel</h1>
<p className="text-xs text-primary font-medium">Purple Edition</p>
</div>
</div>
<nav className="flex-1 px-4 space-y-1 mt-4">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-primary/10 hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="text-sm font-semibold">Tableau de bord</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-primary/10 hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined">engineering</span>
<span className="text-sm font-semibold">Artisans</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-primary/10 hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined">group</span>
<span className="text-sm font-semibold">Clients</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-primary/10 hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined">verified_user</span>
<span className="text-sm font-semibold">VÃ©rifications</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-primary/10 hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined">payments</span>
<span className="text-sm font-semibold">Paiements</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-primary text-white shadow-lg shadow-primary/30" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="text-sm font-semibold">ParamÃ¨tres</span>
</a>
</nav>
<div className="p-4 mt-auto border-t border-slate-200">
<div className="flex items-center gap-3 p-2">
<img alt="Admin Avatar" className="size-10 rounded-full border-2 border-primary/20" data-alt="Portrait of a professional administrator" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCPdId4FRm0ava7IQGTKzwE10VU1rLCb1Etz6NLXuZqLdndmH2iqp_0zVGgwPy9vfEHSPn-R2X_vboZVYoWKo7KU0240IUOMRKH7elHtyJ5YP2AHJb22raX7T0P73TdTs45rJbSzdcdZ1avTHRCgYGoqUZ_bQqLipv-73GGKPZ9qjZzV_-DjL1jybwZFAQ6P7ZFLKzg-APY7hb8ByJShw4N-s-JB86BgZs2AyUY7FoPlYmcewqGQ5jIXLT16LN8TvotO1Ejk_0kues"/>
<div className="flex flex-col">
<span className="text-sm font-bold">Admin User</span>
<span className="text-xs text-slate-500">Administrateur</span>
</div>
</div>
</div>
</aside>
{/*  Main Content  */}
<main className="ml-64 flex-1 flex flex-col">
{/*  Header  */}
<header className="h-16 border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-10 px-8 flex items-center justify-between">
<div className="flex items-center gap-4">
<h2 className="text-lg font-bold text-slate-800">Configuration SystÃ¨me</h2>
</div>
<div className="flex items-center gap-4">
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
<input className="pl-10 pr-4 py-2 bg-slate-100 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary w-64" placeholder="Rechercher..." type="text"/>
</div>
<button className="p-2 text-slate-500 hover:text-primary transition-colors relative">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-2 right-2 size-2 bg-primary rounded-full border-2 border-white"></span>
</button>
<button className="p-2 text-slate-500 hover:text-primary transition-colors">
<span className="material-symbols-outlined">dark_mode</span>
</button>
</div>
</header>
{/*  Page Content  */}
<div className="p-8 max-w-5xl mx-auto w-full">
<div className="mb-8">
<h1 className="text-3xl font-black tracking-tight text-slate-900 mb-2">ParamÃ¨tres</h1>
<p className="text-slate-500">GÃ©rez la configuration de votre plateforme, la sÃ©curitÃ© et les notifications.</p>
</div>
{/*  Tabs  */}
<div className="flex gap-8 border-b border-slate-200 mb-8">
<button className="pb-4 text-sm font-bold border-b-2 border-primary text-primary">GÃ©nÃ©ral</button>
<button className="pb-4 text-sm font-bold text-slate-500 border-b-2 border-transparent hover:text-slate-800 transition-all">SÃ©curitÃ©</button>
<button className="pb-4 text-sm font-bold text-slate-500 border-b-2 border-transparent hover:text-slate-800 transition-all">Notifications</button>
<button className="pb-4 text-sm font-bold text-slate-500 border-b-2 border-transparent hover:text-slate-800 transition-all">IntÃ©grations</button>
</div>
<div className="grid gap-8">
{/*  Section: Platform Config  */}
<section className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
<div className="p-6 border-b border-slate-100">
<h3 className="text-lg font-bold flex items-center gap-2">
<span className="material-symbols-outlined text-primary">desktop_windows</span>
                            Configuration de la plateforme
                        </h3>
</div>
<div className="p-6 space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-bold text-slate-700">Nom du site</label>
<input className="w-full bg-slate-50 border-slate-200 rounded-lg focus:ring-primary focus:border-primary" type="text" value="Purple Service Hub"/>
</div>
<div className="space-y-2">
<label className="text-sm font-bold text-slate-700">Email de contact</label>
<input className="w-full bg-slate-50 border-slate-200 rounded-lg focus:ring-primary focus:border-primary" type="email" value="admin@purple.com"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-bold text-slate-700">Description Meta</label>
<textarea className="w-full bg-slate-50 border-slate-200 rounded-lg focus:ring-primary focus:border-primary" rows="3">Plateforme leader pour la mise en relation entre artisans et clients exigeants.</textarea>
</div>
</div>
</section>
{/*  Section: Security  */}
<section className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
<div className="p-6 border-b border-slate-100">
<h3 className="text-lg font-bold flex items-center gap-2">
<span className="material-symbols-outlined text-primary">security</span>
                            SÃ©curitÃ©
                        </h3>
</div>
<div className="p-6 space-y-4">
<div className="flex items-center justify-between py-2">
<div className="space-y-0.5">
<p className="text-sm font-bold">Authentification Ã  deux facteurs</p>
<p className="text-xs text-slate-500">Ajoutez une couche de sÃ©curitÃ© supplÃ©mentaire Ã  votre compte.</p>
</div>
<button className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary">
<span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6"></span>
</button>
</div>
<div className="border-t border-slate-100 pt-4 flex items-center justify-between py-2">
<div className="space-y-0.5">
<p className="text-sm font-bold">Sessions actives</p>
<p className="text-xs text-slate-500">Se dÃ©connecter de tous les autres appareils connectÃ©s.</p>
</div>
<button className="text-sm font-bold text-primary hover:underline">GÃ©rer les sessions</button>
</div>
</div>
</section>
{/*  Section: Notifications  */}
<section className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
<div className="p-6 border-b border-slate-100">
<h3 className="text-lg font-bold flex items-center gap-2">
<span className="material-symbols-outlined text-primary">notifications_active</span>
                            Notifications
                        </h3>
</div>
<div className="p-6">
<div className="space-y-4">
<label className="flex items-start gap-3 cursor-pointer group">
<div className="mt-1">
<input defaultChecked className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox"/>
</div>
<div className="space-y-0.5">
<p className="text-sm font-bold">Alertes de nouveaux artisans</p>
<p className="text-xs text-slate-500">Recevoir un mail pour chaque nouvelle inscription d'artisan.</p>
</div>
</label>
<label className="flex items-start gap-3 cursor-pointer group">
<div className="mt-1">
<input className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox"/>
</div>
<div className="space-y-0.5">
<p className="text-sm font-bold">Rapports hebdomadaires</p>
<p className="text-xs text-slate-500">SynthÃ¨se des transactions et activitÃ©s de la semaine.</p>
</div>
</label>
</div>
</div>
</section>
<div className="flex justify-end gap-3 pb-12">
<button className="px-6 py-2.5 rounded-xl border border-slate-200 text-sm font-bold hover:bg-slate-50 transition-colors">Annuler</button>
<button className="px-6 py-2.5 rounded-xl bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity">Enregistrer les modifications</button>
</div>
</div>
</div>
{/*  Footer  */}
<footer className="mt-auto border-t border-slate-200 bg-white py-6 px-8 flex justify-between items-center text-xs text-slate-500">
<p>Â© 2024 Purple Edition - Plateforme d'Administration</p>
<div className="flex gap-6">
<a className="hover:text-primary" href="#">Conditions d'utilisation</a>
<a className="hover:text-primary" href="#">ConfidentialitÃ©</a>
<a className="hover:text-primary" href="#">Support</a>
</div>
</footer>
</main>
</div>

    </>
  );
};

export default Parametres;

