import React from 'react';

const ReparationWc = () => {
  return (
    <>
      
<div className="relative flex h-auto min-screen w-full flex-col overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
{/*  Header  */}
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 md:px-20 py-4 sticky top-0 z-50">
<div className="flex items-center gap-4 text-primary">
<span className="material-symbols-outlined text-4xl">plumbing</span>
<h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">PlombierExpert</h2>
</div>
<div className="flex flex-1 justify-end gap-8 items-center">
<nav className="hidden md:flex items-center gap-8">
<a className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="#">Accueil</a>
<a className="text-primary text-sm font-bold border-b-2 border-primary" href="#">Services</a>
<a className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="#">Notifications</a>
<a className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="#">Connexion</a>
</nav>
<div className="bg-slate-200 dark:bg-slate-700 bg-cover bg-center aspect-square rounded-full size-10 border-2 border-primary/20" data-alt="Avatar de l'utilisateur" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBvFoLg5rwZXWmV6_bj9HGnzHJH51G0KSEUljDTLJEMLHvkLfMdopSaoxRnRnI73ZcnXlINg21pU8FqOC7lTsEbtxg1DjyXs26mJNiFHICCsvYIsR4uTSb2biG2ZhznqCAKODbFZi3_DugdCsRyoKhhXISrcKoN2UCOZAY5ugE20ncjY81_H7kaggxFAG_jVrzbSnx5N5o9OL_Xta963hpO10lLEvfrAsvNb--LFXhHjIp8lmc_2FwaKEjda_wBYS2OkqaHNMbUtRFL");'></div>
</div>
</header>
<main className="flex flex-1 justify-center py-8">
<div className="layout-content-container flex flex-col md:flex-row max-w-[1200px] flex-1 gap-8 px-4">
{/*  Sidebar Navigation  */}
<aside className="w-full md:w-64 flex flex-col gap-6">
<div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<div className="flex flex-col mb-6">
<h1 className="text-slate-900 dark:text-white text-lg font-bold">Réparation WC</h1>
<p className="text-slate-500 dark:text-slate-400 text-sm">Services Professionnels</p>
</div>
<nav className="flex flex-col gap-2">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#">
<span className="material-symbols-outlined text-slate-500">home</span>
<span className="text-sm font-medium">Accueil</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary transition-colors" href="#">
<span className="material-symbols-outlined">construction</span>
<span className="text-sm font-bold">Services de Plomberie</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#">
<span className="material-symbols-outlined text-slate-500">notifications</span>
<span className="text-sm font-medium">Notifications</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#">
<span className="material-symbols-outlined text-slate-500">account_circle</span>
<span className="text-sm font-medium">Mon Compte</span>
</a>
</nav>
<button className="mt-8 w-full bg-primary hover:bg-primary/90 text-white rounded-xl py-3 px-4 text-sm font-bold shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm">request_quote</span>
                                Devis gratuit
                            </button>
</div>
</aside>
{/*  Main Content Area  */}
<div className="flex-1 flex flex-col gap-8">
{/*  Hero Section  */}
<section className="relative overflow-hidden rounded-2xl min-h-[300px] flex items-end p-8 bg-slate-900">
<div className="absolute inset-0 opacity-40 bg-cover bg-center" data-alt="Plombier professionnel réparant des toilettes" ></div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
<div className="relative z-10 w-full">
<span className="bg-primary px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider">Expertise Certifiée</span>
<h2 className="text-white text-4xl font-black mt-3 leading-tight">Réparation WC &amp; Fuites Professionnelle</h2>
<p className="text-slate-300 mt-2 max-w-xl">Intervention rapide pour tout type de sanitaires. Nos experts sont à votre disposition 24/7 pour vos urgences plomberie.</p>
</div>
</section>
{/*  Features Grid  */}
<section className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-3">
<div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined">schedule</span>
</div>
<h3 className="font-bold text-lg">Intervention Rapide</h3>
<p className="text-slate-500 text-sm">Moins de 2h pour vos urgences sanitaires à domicile.</p>
</div>
<div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-3">
<div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined">verified</span>
</div>
<h3 className="font-bold text-lg">Experts Certifiés</h3>
<p className="text-slate-500 text-sm">Plombiers qualifiés RGE avec plus de 10 ans d'expérience.</p>
</div>
<div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-3">
<div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined">payments</span>
</div>
<h3 className="font-bold text-lg">Prix Transparents</h3>
<p className="text-slate-500 text-sm">Pas de frais cachés. Devis validé avant chaque intervention.</p>
</div>
</section>
{/*  Pricing Section  */}
<section className="flex flex-col gap-6">
<div className="flex items-center justify-between">
<h2 className="text-2xl font-bold tracking-tight">Tarifs Transparents</h2>
<span className="text-primary font-medium text-sm">Devis personnalisé disponible</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-2xl p-8 flex flex-col transition-all hover:border-primary/50">
<h3 className="text-xl font-bold">Forfait Standard</h3>
<p className="text-slate-500 text-sm mt-1">Débouchage et petites réparations</p>
<div className="my-6">
<span className="text-4xl font-black">79€</span>
<span className="text-slate-400">/intervention</span>
</div>
<ul className="flex flex-col gap-3 text-sm mb-8">
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-lg">check_circle</span> Déplacement inclus</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-lg">check_circle</span> Main d'oeuvre (1h)</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-lg">check_circle</span> Garantie 6 mois</li>
</ul>
<button className="w-full py-3 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary/5 transition-colors">Choisir ce forfait</button>
</div>
<div className="bg-white dark:bg-slate-900 border-2 border-primary rounded-2xl p-8 flex flex-col relative shadow-xl shadow-primary/5">
<div className="absolute -top-4 right-8 bg-primary text-white text-[10px] font-black uppercase px-3 py-1 rounded-full">Recommandé</div>
<h3 className="text-xl font-bold">Pack Complet</h3>
<p className="text-slate-500 text-sm mt-1">Réparation majeure &amp; remplacement</p>
<div className="my-6">
<span className="text-4xl font-black text-primary">149€</span>
<span className="text-slate-400">/intervention</span>
</div>
<ul className="flex flex-col gap-3 text-sm mb-8">
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> Diagnostic complet</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> Remplacement mécanisme</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> Garantie 2 ans</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> Détartrage inclus</li>
</ul>
<button className="w-full py-3 rounded-lg bg-primary text-white font-bold hover:bg-primary/90 transition-colors">Choisir ce forfait</button>
</div>
</div>
</section>
{/*  Team Section  */}
<section className="flex flex-col gap-6">
<h2 className="text-2xl font-bold tracking-tight">Nos Experts</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex items-center gap-4 bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
<div className="w-16 h-16 rounded-full bg-cover bg-center" data-alt="Portrait de Sarah L., experte plombier" ></div>
<div>
<h4 className="font-bold text-lg">Sarah L.</h4>
<p className="text-slate-500 text-sm">Spécialiste Sanitaire - 12 ans d'exp.</p>
<div className="flex text-yellow-400 mt-1">
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="text-slate-400 text-xs ml-1">(48 avis)</span>
</div>
</div>
</div>
<div className="flex items-center gap-4 bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
<div className="w-16 h-16 rounded-full bg-cover bg-center" data-alt="Portrait de Marc D., expert plombier" ></div>
<div>
<h4 className="font-bold text-lg">Marc D.</h4>
<p className="text-slate-500 text-sm">Expert Réparations - 15 ans d'exp.</p>
<div className="flex text-yellow-400 mt-1">
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="text-slate-400 text-xs ml-1">(62 avis)</span>
</div>
</div>
</div>
</div>
</section>
{/*  Area Map Section  */}
<section className="flex flex-col gap-4">
<h2 className="text-2xl font-bold tracking-tight">Zone d'intervention</h2>
<p className="text-slate-500 text-sm">Nous intervenons dans toute la métropole lilloise et ses environs 7j/7.</p>
<div className="w-full h-64 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 relative">
<div className="absolute inset-0 bg-slate-300 dark:bg-slate-800 bg-cover bg-center grayscale opacity-80" data-alt="Carte de la zone d'intervention à Lille" data-location="Lille, France" ></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="bg-primary/20 p-20 rounded-full animate-pulse">
<div className="bg-primary p-4 rounded-full text-white shadow-xl">
<span className="material-symbols-outlined text-2xl">location_on</span>
</div>
</div>
</div>
<div className="absolute bottom-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-3 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-bold shadow-sm">
                                    Disponibilité : <span className="text-green-500">Immédiate</span>
</div>
</div>
</section>
</div>
</div>
</main>
{/*  Footer  */}
<footer className="bg-slate-900 text-slate-400 py-12 px-6 md:px-20 mt-12 border-t border-slate-800">
<div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-1 flex flex-col gap-4">
<div className="flex items-center gap-2 text-white">
<span className="material-symbols-outlined text-primary">plumbing</span>
<span className="text-xl font-bold">PlombierExpert</span>
</div>
<p className="text-sm">Services de plomberie d'urgence et d'entretien pour particuliers et professionnels.</p>
</div>
<div>
<h4 className="text-white font-bold mb-4">Nos Services</h4>
<ul className="flex flex-col gap-2 text-sm">
<li><a className="hover:text-primary transition-colors" href="#">Réparation WC</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Détection de fuite</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Débouchage canalisation</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Entretien Chauffe-eau</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold mb-4">Légal</h4>
<ul className="flex flex-col gap-2 text-sm">
<li><a className="hover:text-primary transition-colors" href="#">Mentions légales</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Politique de confidentialité</a></li>
<li><a className="hover:text-primary transition-colors" href="#">CGV</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Garanties</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold mb-4">Contact</h4>
<ul className="flex flex-col gap-2 text-sm">
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">call</span> 0800 00 00 00</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">mail</span> contact@plombierexpert.fr</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">pin_drop</span> 123 Rue de la Plomberie, Lille</li>
</ul>
</div>
</div>
<div className="max-w-[1200px] mx-auto mt-12 pt-8 border-t border-slate-800 text-center text-xs">
                    © 2024 PlombierExpert. Tous droits réservés.
                </div>
</footer>
</div>
</div>

    </>
  );
};

export default ReparationWc;
