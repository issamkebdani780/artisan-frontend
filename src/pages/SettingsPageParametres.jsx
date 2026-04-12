import React from 'react';

const SettingsPageParametres = () => {
  return (
    <>
      
<div className="relative flex min-h-screen w-full flex-col">
<div className="layout-container flex h-full grow flex-col">
{/*  Top Navigation Bar  */}
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 py-3 lg:px-10">
<div className="flex items-center gap-4 text-slate-900 dark:text-white">
<div className="size-6 text-primary flex items-center justify-center">
<span className="material-symbols-outlined text-3xl">construction</span>
</div>
<h2 className="text-lg font-bold leading-tight tracking-tight">Plateforme Artisan</h2>
</div>
<div className="flex flex-1 justify-end gap-4 lg:gap-8 items-center">
<div className="flex gap-2">
<button className="flex size-10 cursor-pointer items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="flex size-10 cursor-pointer items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">
<span className="material-symbols-outlined">account_circle</span>
</button>
</div>
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-slate-200 dark:border-slate-700" data-alt="Photo de profil de l'artisan" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBeqZpBu2fKC2_qj08TJ3wSigyAcZW73NJyxhsZ16whpoYqdOq89dr8ahPkloIg7zlvpAuP3ijquhzwBREE964RDCsSa_g1nhasnM6Hf412ZhuvecdWn3VK02sY-Qw-2K2HG1b-RL6SvSBRCp73hxiIjNYtkhqYxACu9QvrX-C2vtmyAuWAMtHsXKJ7mjDCKbR7pwfkOU-HKpJT34qFRdKEte2K2yGS24zmyQq7Ga2BXMl4VrLy1P-aRGlXrxXBI_MgCVoEEeByDEl1");'></div>
</div>
</header>
<div className="flex flex-1 flex-col lg:flex-row">
{/*  Sidebar  */}
<aside className="w-full lg:w-80 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 p-6 flex flex-col gap-6">
<div className="flex flex-col gap-1">
<h1 className="text-slate-900 dark:text-white text-base font-bold">Jean Dupont</h1>
<p className="text-slate-500 dark:text-slate-400 text-sm">Artisan Menuisier</p>
</div>
<nav className="flex flex-col gap-1">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="text-sm font-medium">Tableau de bord</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" href="#">
<span className="material-symbols-outlined">inventory_2</span>
<span className="text-sm font-medium">Mes Chantiers</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" href="#">
<span className="material-symbols-outlined">chat</span>
<span className="text-sm font-medium">Messages</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" href="#">
<span className="material-symbols-outlined">description</span>
<span className="text-sm font-medium">Facturation</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary transition-colors" href="#">
<span className="material-symbols-outlined text-primary" >settings</span>
<span className="text-sm font-bold">Param√®tres</span>
</a>
</nav>
<div className="mt-auto pt-6 border-t border-slate-200 dark:border-slate-800">
<div className="bg-primary/5 rounded-xl p-4">
<div className="flex items-center gap-2 mb-2">
<span className="material-symbols-outlined text-primary text-sm">verified_user</span>
<span className="text-xs font-bold text-primary uppercase tracking-wider">Statut V√©rifi√©</span>
</div>
<p className="text-xs text-slate-600 dark:text-slate-400 mb-3">Votre compte est enti√®rement v√©rifi√© et visible par les clients.</p>
<a className="text-xs font-bold text-primary underline" href="#">Voir mon profil public</a>
</div>
</div>
</aside>
{/*  Main Content  */}
<main className="flex-1 p-6 lg:p-10 max-w-5xl">
<div className="mb-8">
<h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Param√®tres du compte</h2>
<p className="text-slate-500 dark:text-slate-400">G√©rez les informations de votre compte et vos pr√©f√©rences personnelles.</p>
</div>
<form className="space-y-10">
{/*  Profile Section  */}
<section>
<h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-slate-400">person</span>
                                Informations personnelles
                            </h3>
<div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6">
<div className="flex flex-col md:flex-row gap-8 items-start">
<div className="flex flex-col items-center gap-3">
<div className="size-24 rounded-full bg-slate-100 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 bg-center bg-cover" data-alt="Portrait de l'utilisateur" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBzuaecn7TFgIgR-tb4D5AKvnwMP99bLywsS1DHGC1EW1K8Fjk8faJL220Cm9aqNivAz8NfMm4F8ZgNi27XH9jkdhBgtxav9HMf4JlzgwsJg1Evon7ACAgcB9e8S6ZVwy77UHl5U1WnCnSDkI-J97hiwZr_qY_3JIinR_mDqAf84YsZtTsj4LcFsXWgtDdvQEXO8hiK4onFx6U6yJacVe2Z0jyVtP4SZ4R3EqVyoYyk73geTvILpAyN5nAidw6JOWFvFIu4y34AoLGs");'></div>
<button className="text-xs font-bold text-primary hover:underline" type="button">Modifier l'avatar</button>
</div>
<div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
<div className="flex flex-col gap-1.5">
<label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Nom complet</label>
<input className="w-full rounded-lg border-slate-300 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary" type="text" value="Jean Dupont"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Cat√©gorie professionnelle</label>
<select className="w-full rounded-lg border-slate-300 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary">
<option>Menuisier</option>
<option>Plombier</option>
<option>√âlectricien</option>
<option>Peintre</option>
</select>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email</label>
<input className="w-full rounded-lg border-slate-300 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary" type="email" value="jean.dupont@example.com"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-sm font-semibold text-slate-700 dark:text-slate-300">T√©l√©phone</label>
<input className="w-full rounded-lg border-slate-300 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary" type="tel" value="+33 6 12 34 56 78"/>
</div>
</div>
</div>
</div>
</section>
{/*  Security Section  */}
<section>
<h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-slate-400">lock</span>
                                S√©curit√© &amp; Mot de passe
                            </h3>
<div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="flex flex-col gap-1.5">
<label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Mot de passe actuel</label>
<input className="w-full rounded-lg border-slate-300 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary" placeholder="‚DA¢‚DA¢‚DA¢‚DA¢‚DA¢‚DA¢‚DA¢‚DA¢" type="password"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Nouveau mot de passe</label>
<input className="w-full rounded-lg border-slate-300 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary" placeholder="‚DA¢‚DA¢‚DA¢‚DA¢‚DA¢‚DA¢‚DA¢‚DA¢" type="password"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Confirmer le nouveau</label>
<input className="w-full rounded-lg border-slate-300 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary" placeholder="‚DA¢‚DA¢‚DA¢‚DA¢‚DA¢‚DA¢‚DA¢‚DA¢" type="password"/>
</div>
</div>
</div>
</section>
{/*  Preferences Section  */}
<section>
<h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-slate-400">tune</span>
                                Pr√©f√©rences &amp; Notifications
                            </h3>
<div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 space-y-8">
<div className="flex flex-col gap-1.5 max-w-xs">
<label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Langue de l'interface</label>
<select className="w-full rounded-lg border-slate-300 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary">
<option selected="">Fran√ßais</option>
<option>Arabe</option>
<option>English</option>
</select>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
<div className="flex items-center justify-between gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50">
<div>
<p className="text-sm font-bold text-slate-900 dark:text-white">Notifications par Email</p>
<p className="text-xs text-slate-500 dark:text-slate-400">Recevez des rapports et alertes par mail</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input defaultChecked className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
</label>
</div>
<div className="flex items-center justify-between gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50">
<div>
<p className="text-sm font-bold text-slate-900 dark:text-white">Notifications Push</p>
<p className="text-xs text-slate-500 dark:text-slate-400">Alertes en temps r√©el sur mobile</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input defaultChecked className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
</label>
</div>
</div>
</div>
</section>
{/*  Footer Actions  */}
<div className="flex flex-col sm:flex-row items-center justify-end gap-4 pt-6 border-t border-slate-200 dark:border-slate-800">
<button className="w-full sm:w-auto px-6 py-2.5 text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors" type="button">
                                Annuler
                            </button>
<button className="w-full sm:w-auto px-8 py-2.5 text-sm font-bold text-white bg-primary hover:bg-primary/90 rounded-lg transition-all shadow-md" type="submit">
                                Enregistrer les modifications
                            </button>
</div>
</form>
</main>
</div>
</div>
</div>

    </>
  );
};

export default SettingsPageParametres;
