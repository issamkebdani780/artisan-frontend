import React from 'react';

const AccueilTableauDeBordAvecGraphiqueDeRevenus = () => {
  return (
    <>
      
<div className="flex min-h-screen">
{/*  Sidebar Navigation  */}
<aside className="w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col fixed h-full z-50">
<div className="p-6 flex items-center gap-3">
<div className="bg-primary rounded-xl p-2 text-white">
<span className="material-symbols-outlined text-2xl">handyman</span>
</div>
<h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">ArtisanPro</h1>
</div>
<nav className="flex-1 px-4 space-y-1 overflow-y-auto">
<div className="py-4 border-b border-slate-100 dark:border-slate-800 mb-4 px-2">
<div className="flex items-center gap-3">
<div className="relative">
<img alt="Ahmed Mohamed Profile" className="size-10 rounded-full object-cover" data-alt="Professional portrait of a male artisan" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5_YrMsiO2_Bh5q6NKAoUVloF-ZV3JImPIZffGwKhlNKCRnldVjZ_ZCrKoKaaw-Oh51VHSYEUL8_40KBkX-OxR7iAinhFM178jXxiG1dDTwzRx42lh874IHZ_x8BM_auUxbEvWtSbF93sbdUPZuAWxFKtLRcB4XIm4-hE-rx-4MCw6nAp3zIPURswl2y6TMZ1Gv4fJcvvD0QIW9bs3Rje0fPQSUOxwsl9e2pPWWRcXwZDFKqW-nqDWqrhWf1J2uAAL_J_Sq6XcuyCt"/>
<span className="absolute bottom-0 right-0 size-3 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full"></span>
</div>
<div>
<p className="text-sm font-bold text-slate-900 dark:text-white">Ahmed Mohamed</p>
<p className="text-xs text-slate-500 dark:text-slate-400">Artisan Expert</p>
</div>
</div>
</div>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-primary/10 text-primary font-semibold transition-colors" href="#">
<span className="material-symbols-outlined">home</span>
<span className="text-sm">Accueil</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#">
<span className="material-symbols-outlined text-slate-400">verified_user</span>
<span className="text-sm">VÃ©rification et documents</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#">
<span className="material-symbols-outlined text-slate-400">business_center</span>
<span className="text-sm">Mes projets</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#">
<span className="material-symbols-outlined text-slate-400">chat_bubble</span>
<span className="text-sm">Messages</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#">
<span className="material-symbols-outlined text-slate-400">settings</span>
<span className="text-sm">ParamÃ¨tres</span>
</a>
</nav>
<div className="p-6 border-t border-slate-200 dark:border-slate-800">
<button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
<span className="material-symbols-outlined text-xl">add</span>
                    Nouveau Projet
                </button>
</div>
</aside>
{/*  Main Content  */}
<main className="ml-72 flex-1 flex flex-col min-h-screen">
{/*  Header  */}
<header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-40 flex items-center justify-between px-8">
<div className="flex items-center gap-4 flex-1">
<div className="relative max-w-md w-full">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/20" placeholder="Rechercher des projets, clients..." type="text"/>
</div>
</div>
<div className="flex items-center gap-3">
<button className="size-10 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 relative">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-2 right-2 size-2 bg-primary rounded-full ring-2 ring-white dark:ring-slate-900"></span>
</button>
<button className="size-10 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300">
<span className="material-symbols-outlined">help</span>
</button>
<div className="h-8 w-px bg-slate-200 dark:border-slate-700 mx-2"></div>
<button className="flex items-center gap-2 pl-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
<span className="text-sm font-medium text-slate-700 dark:text-slate-200">Ahmed M.</span>
<img alt="Profile" className="size-8 rounded-full border border-slate-200 dark:border-slate-700 object-cover" data-alt="User profile avatar small" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaGdIQ9zXcaOKd_qiObAN--0o7bhQhgC2SjtLS319llPu6PbLOrlV5sXEkjWymwXnRoDMFSThtJ_znk_3HLIrHdimjx_gFQR2zI9vHdO449_F5U8oU4uJ_hrSYTSr_tTq5dH6Pgpb4OR8sHeQbxPj10wJxD3MYt5AZTEAx-G9dqKceklzjm5i4Ks61fDctFq8OXNtusqVl2EQvqIv82MYPlQbZkIOATNg--zCDNT4PkKtqhnucSavFgpn_MpmkwrtV_ksUMr-2euR_"/>
</button>
</div>
</header>
{/*  Dashboard Body  */}
<div className="p-8 space-y-8">
{/*  Welcome Section  */}
<div>
<h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Bonjour, Ahmed Mohamed</h2>
<p className="text-slate-500 dark:text-slate-400 mt-1">Voici un aperÃ§u de votre activitÃ© aujourd'hui.</p>
</div><div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm mb-8">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
<div>
<h3 className="text-lg font-bold text-slate-900 dark:text-white">Ã‰volution des revenus</h3>
<p className="text-sm text-slate-500">Revenus mensuels sur les 6 derniers mois</p>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<span className="size-3 rounded-full bg-blue-500"></span>
<span className="text-xs font-medium text-slate-600 dark:text-slate-400">Revenus (â‚¬)</span>
</div>
</div>
</div>
<div className="relative h-64 w-full flex items-end gap-2 sm:gap-4 md:gap-8 pt-6 border-l border-b border-slate-100 dark:border-slate-800 ml-8">
{/*  Y-Axis Labels  */}
<div className="absolute -left-10 h-full flex flex-col justify-between text-[10px] font-bold text-slate-400 py-1">
<span>3k</span>
<span>2k</span>
<span>1k</span>
<span>0</span>
</div>
{/*  Chart Bars  */}
<div className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
<div className="w-full bg-blue-100 dark:bg-blue-900/20 rounded-t-lg transition-all duration-300 group-hover:bg-blue-500/40" ></div>
<span className="text-[10px] font-bold text-slate-400 uppercase">Mai</span>
</div>
<div className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
<div className="w-full bg-blue-200 dark:bg-blue-800/30 rounded-t-lg transition-all duration-300 group-hover:bg-blue-500/40" ></div>
<span className="text-[10px] font-bold text-slate-400 uppercase">Juin</span>
</div>
<div className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
<div className="w-full bg-blue-300 dark:bg-blue-700/40 rounded-t-lg transition-all duration-300 group-hover:bg-blue-500/40" ></div>
<span className="text-[10px] font-bold text-slate-400 uppercase">Juil</span>
</div>
<div className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
<div className="w-full bg-blue-400 dark:bg-blue-600/50 rounded-t-lg transition-all duration-300 group-hover:bg-blue-500/40" ></div>
<span className="text-[10px] font-bold text-slate-400 uppercase">AoÃ»t</span>
</div>
<div className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
<div className="w-full bg-blue-500 rounded-t-lg transition-all duration-300 group-hover:brightness-110" ></div>
<span className="text-[10px] font-bold text-slate-400 uppercase">Sept</span>
</div>
<div className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
<div className="w-full bg-primary rounded-t-lg transition-all duration-300 group-hover:brightness-110 shadow-lg shadow-primary/20" ></div>
<span className="text-[10px] font-bold text-primary uppercase">Oct</span>
</div>
</div>
</div>
{/*  Stats Grid  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-primary/10 rounded-lg text-primary">
<span className="material-symbols-outlined">payments</span>
</div>
<span className="text-xs font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded-full">+12%</span>
</div>
<p className="text-sm font-medium text-slate-500 dark:text-slate-400">Revenus ce mois</p>
<p className="text-2xl font-black text-slate-900 dark:text-white mt-1">2,450 â‚¬</p>
</div>
<div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
<span className="material-symbols-outlined">architecture</span>
</div>
<span className="text-xs font-bold text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-full">Stable</span>
</div>
<p className="text-sm font-medium text-slate-500 dark:text-slate-400">Projets actifs</p>
<p className="text-2xl font-black text-slate-900 dark:text-white mt-1">12</p>
</div>
<div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-orange-500/10 rounded-lg text-orange-500">
<span className="material-symbols-outlined">mail</span>
</div>
<span className="text-xs font-bold text-orange-500 bg-orange-500/10 px-2 py-1 rounded-full">+2</span>
</div>
<p className="text-sm font-medium text-slate-500 dark:text-slate-400">Nouveaux messages</p>
<p className="text-2xl font-black text-slate-900 dark:text-white mt-1">5</p>
</div>
<div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-purple-500/10 rounded-lg text-purple-500">
<span className="material-symbols-outlined">visibility</span>
</div>
<span className="text-xs font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded-full">+15%</span>
</div>
<p className="text-sm font-medium text-slate-500 dark:text-slate-400">Vues du profil</p>
<p className="text-2xl font-black text-slate-900 dark:text-white mt-1">128</p>
</div>
</div>
{/*  Main Grid: Recent Missions & Appointments  */}
<div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
{/*  Recent Missions (List)  */}
<div className="xl:col-span-2 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
<div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
<h3 className="text-lg font-bold text-slate-900 dark:text-white">Missions rÃ©centes</h3>
<button className="text-primary text-sm font-bold hover:underline">Tout voir</button>
</div>
<div className="divide-y divide-slate-100 dark:divide-slate-800">
{/*  Mission 1  */}
<div className="p-6 flex items-center gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
<div className="size-12 rounded-xl bg-background-light dark:bg-slate-800 flex items-center justify-center overflow-hidden">
<img alt="Mission" className="w-full h-full object-cover" data-alt="Renovation site photo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7cOgj9gXN0jcOF3nEYF-w97S1wj03cQqqag0Tcx120lFrzQ_J2ESC1c-Gad7dimunyRsMwC8eERH06tCk8oXSLgdpUls0pbAN3CZ5e4RFX24JG1PI8lmLEXZ3chZZ5y3ZJ5hud_PQQAKfmFIvUc38LKctxE7HxzndlsuYp0gMgu8Q6DQczVeIge4AmH0K7thx0__qv289R57Zplb5zRE_Np3FNsOqq6yaZwBNpkf3d4f-naWs4J3zfUNi2aV5HZCIgwKyJFfIKlaa"/>
</div>
<div className="flex-1">
<h4 className="font-bold text-slate-900 dark:text-white">RÃ©novation Cuisine - Villa Arras</h4>
<p className="text-sm text-slate-500">Client: Jean Dupont âDA¢ 12 Oct 2023</p>
</div>
<div className="text-right">
<span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">En cours</span>
<p className="text-sm font-bold text-slate-900 dark:text-white mt-1">1,200 â‚¬</p>
</div>
</div>
{/*  Mission 2  */}
<div className="p-6 flex items-center gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
<div className="size-12 rounded-xl bg-background-light dark:bg-slate-800 flex items-center justify-center overflow-hidden">
<img alt="Mission" className="w-full h-full object-cover" data-alt="Electrical wiring maintenance" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHyJmuHXj1suDm4lF9QUdZzfGj9nkb7YOYyopISV11l21Z_HmQY6fm3n1NqcwmBB3LVmofsv3pDymbpXU6k1b-0_Wp8tnhH6CMBroiEW2TTohF8JRGeCwjtWWmJIjIvA8X4-V0vdrRi6YS_ovoisbhSqkzBffjTke4BGb6ts-3IK5rSOJZcLVR8W2tXnKSmNX2BoDeCZEw9eA4ysST7jiaftQOMYHJLgqZoylCb4f5YRHFx25qSSojAfvWQH8mQpq2gg4PqSckwaIm"/>
</div>
<div className="flex-1">
<h4 className="font-bold text-slate-900 dark:text-white">Installation Ã‰lectrique Bureau</h4>
<p className="text-sm text-slate-500">Client: SARL Tech âDA¢ 09 Oct 2023</p>
</div>
<div className="text-right">
<span className="px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">TerminÃ©</span>
<p className="text-sm font-bold text-slate-900 dark:text-white mt-1">850 â‚¬</p>
</div>
</div>
{/*  Mission 3  */}
<div className="p-6 flex items-center gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
<div className="size-12 rounded-xl bg-background-light dark:bg-slate-800 flex items-center justify-center overflow-hidden">
<img alt="Mission" className="w-full h-full object-cover" data-alt="Plumbing work pipes" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCF3-PZ64pkbPNOOFTV0UBMkV8PLCkVRns4L-XGFQjQMPdxolYjTgfhqdypg05PbC6m50d8U3Acrrxsv12WqCOPojNTOvktodw2dShZGDuLXYYZTPz2eMlK39rACK_JRv__lUmVL9mHXFiDIO72EuCbe8ZHK30K8rcRDo7MxVZnFQa21mbHi8P8wpr49M0yqxGTnzzMZN1nXQuIMk6-FxADURaEIUnAlnpq_gP5NM88JTIvtG1SXdFwPQ4mLJB7SlX0KvUpZCYMt4kH"/>
</div>
<div className="flex-1">
<h4 className="font-bold text-slate-900 dark:text-white">RÃ©paration Fuite Canalisation</h4>
<p className="text-sm text-slate-500">Client: Marie Curie âDA¢ 05 Oct 2023</p>
</div>
<div className="text-right">
<span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">En attente</span>
<p className="text-sm font-bold text-slate-900 dark:text-white mt-1">320 â‚¬</p>
</div>
</div>
</div>
</div>
{/*  Upcoming Appointments  */}
<div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
<div className="flex justify-between items-center mb-6">
<h3 className="text-lg font-bold text-slate-900 dark:text-white">Prochains rendez-vous</h3>
<button className="text-primary text-sm font-bold">Calendrier</button>
</div>
<div className="space-y-4">
{/*  Appointment 1  */}
<div className="flex gap-4 p-4 rounded-xl bg-background-light dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700">
<div className="flex flex-col items-center justify-center min-w-[50px] bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 py-1 shadow-sm">
<span className="text-[10px] font-bold uppercase text-slate-400">Oct</span>
<span className="text-xl font-black text-primary">15</span>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-bold text-slate-900 dark:text-white truncate">Visite technique - Loft Paris</p>
<p className="text-xs text-slate-500 mt-0.5">09:00 - 10:30 âDA¢ 2.5km</p>
</div>
<button className="size-8 flex items-center justify-center rounded-lg bg-white dark:bg-slate-900 text-slate-400 hover:text-primary border border-slate-200 dark:border-slate-700">
<span className="material-symbols-outlined text-sm">navigation</span>
</button>
</div>
{/*  Appointment 2  */}
<div className="flex gap-4 p-4 rounded-xl bg-background-light dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700">
<div className="flex flex-col items-center justify-center min-w-[50px] bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 py-1 shadow-sm">
<span className="text-[10px] font-bold uppercase text-slate-400">Oct</span>
<span className="text-xl font-black text-primary">16</span>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-bold text-slate-900 dark:text-white truncate">Signature Contrat - Agence Immo</p>
<p className="text-xs text-slate-500 mt-0.5">14:00 - 15:00 âDA¢ Zoom</p>
</div>
<button className="size-8 flex items-center justify-center rounded-lg bg-white dark:bg-slate-900 text-slate-400 hover:text-primary border border-slate-200 dark:border-slate-700">
<span className="material-symbols-outlined text-sm">videocam</span>
</button>
</div>
{/*  Appointment 3  */}
<div className="flex gap-4 p-4 rounded-xl bg-background-light dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 opacity-60">
<div className="flex flex-col items-center justify-center min-w-[50px] bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 py-1 shadow-sm">
<span className="text-[10px] font-bold uppercase text-slate-400">Oct</span>
<span className="text-xl font-black text-primary">18</span>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-bold text-slate-900 dark:text-white truncate">Maintenance Climatisation</p>
<p className="text-xs text-slate-500 mt-0.5">10:30 - 12:00 âDA¢ 5.0km</p>
</div>
<button className="size-8 flex items-center justify-center rounded-lg bg-white dark:bg-slate-900 text-slate-400 hover:text-primary border border-slate-200 dark:border-slate-700">
<span className="material-symbols-outlined text-sm">navigation</span>
</button>
</div>
</div>
</div>
</div>
</div>
</main>
</div>

    </>
  );
};

export default AccueilTableauDeBordAvecGraphiqueDeRevenus;
