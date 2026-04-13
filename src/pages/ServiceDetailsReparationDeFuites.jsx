import React from 'react';

const ServiceDetailsReparationDeFuites = () => {
  return (
    <>
      
<div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
{/*  Header / TopNavBar  */}
<header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark px-6 md:px-20 py-4 sticky top-0 z-50">
<div className="flex items-center gap-4 text-primary">
<span className="material-symbols-outlined text-3xl">plumbing</span>
<h2 className="text-slate-900 dark:text-white text-xl font-bold tracking-tight">PlumbPro</h2>
</div>
<div className="flex flex-1 justify-end gap-6 items-center">
<nav className="hidden md:flex items-center gap-8">
<a className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="#">Services</a>
<a className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="#">Plombiers</a>
<a className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="#">Avis</a>
</nav>
<div className="flex gap-2">
<button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">
<span className="material-symbols-outlined text-[20px]">notifications</span>
</button>
<button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">
<span className="material-symbols-outlined text-[20px]">account_circle</span>
</button>
</div>
</div>
</header>
<main className="flex-1">
{/*  Hero Section  */}
<div className="w-full px-6 md:px-20 py-8">
<div className="relative rounded-xl overflow-hidden min-h-[320px] flex flex-col justify-end p-8 bg-slate-900">
<div className="absolute inset-0 opacity-60">
<div className="w-full h-full bg-cover bg-center" data-alt="Close up of a professional plumber repairing a water pipe leak" ></div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="relative z-10 space-y-2">
<div className="flex items-center gap-2 text-primary-light text-sm font-semibold uppercase tracking-wider text-primary">
<span className="material-symbols-outlined text-sm">verified</span>
                                Service Certifié
                            </div>
<h1 className="text-white text-4xl font-extrabold leading-tight">Réparation de fuites</h1>
<p className="text-slate-200 max-w-2xl text-lg">Intervention rapide en moins de 2h pour stopper vos fuites d'eau et éviter les dégâts majeurs.</p>
</div>
</div>
{/*  Breadcrumbs  */}
<div className="flex items-center gap-2 py-6 text-sm">
<a className="text-slate-500 hover:text-primary transition-colors" href="#">Accueil</a>
<span className="material-symbols-outlined text-xs text-slate-400">chevron_right</span>
<a className="text-slate-500 hover:text-primary transition-colors" href="#">Plomberie</a>
<span className="material-symbols-outlined text-xs text-slate-400">chevron_right</span>
<span className="text-slate-900 dark:text-white font-medium">Réparation de fuites</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
{/*  Left Column: Content  */}
<div className="lg:col-span-2 space-y-10">
{/*  Service Description  */}
<section>
<h3 className="text-2xl font-bold mb-4">À propos de ce service</h3>
<p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                                    Une fuite d'eau, même minime, peut causer des dommages structurels importants et alourdir considérablement votre facture. Nos experts interviennent avec un équipement de pointe pour détecter et colmater tout type de fuite : canalisations encastrées, robinetterie, chauffe-eau ou WC.
                                </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
<span className="material-symbols-outlined text-primary">bolt</span>
<div>
<h4 className="font-bold">Intervention Express</h4>
<p className="text-sm text-slate-500">Arrivée sur place en moins de 60 minutes pour les urgences.</p>
</div>
</div>
<div className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
<span className="material-symbols-outlined text-primary">security</span>
<div>
<h4 className="font-bold">Garantie 2 ans</h4>
<p className="text-sm text-slate-500">Toutes nos réparations sont couvertes par une garantie décennale.</p>
</div>
</div>
</div>
</section>
{/*  Pricing  */}
<section className="bg-primary/5 dark:bg-primary/10 rounded-2xl p-8 border border-primary/20">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
<div>
<h3 className="text-2xl font-bold">Tarification transparente</h3>
<p className="text-slate-600 dark:text-slate-400">Pas de frais cachés, devis gratuit avant intervention.</p>
</div>
<div className="text-right">
<span className="text-sm text-slate-500 block uppercase tracking-wide font-bold">À partir de</span>
<span className="text-4xl font-black text-primary">45€</span>
</div>
</div>
<hr className="my-6 border-primary/10"/>
<ul className="space-y-3">
<li className="flex items-center gap-2 text-sm">
<span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                                        Déplacement inclus (zone urbaine)
                                    </li>
<li className="flex items-center gap-2 text-sm">
<span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                                        Diagnostic complet de l'installation
                                    </li>
<li className="flex items-center gap-2 text-sm">
<span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                                        Petites fournitures incluses (joints, téflon)
                                    </li>
</ul>
</section>
{/*  Plumbers List  */}
<section>
<div className="flex items-center justify-between mb-6">
<h3 className="text-2xl font-bold">Nos experts disponibles</h3>
<a className="text-primary text-sm font-bold flex items-center gap-1" href="#">Voir tous <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{/*  Plumber Card 1  */}
<div className="flex flex-col bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
<div className="flex gap-4 items-center mb-4">
<div className="h-14 w-14 rounded-full bg-cover bg-center" data-alt="Portrait of Marc L., a professional plumber" ></div>
<div>
<h4 className="font-bold">Marc L.</h4>
<div className="flex items-center gap-1 text-amber-500">
<span className="material-symbols-outlined text-sm fill-amber-500">star</span>
<span className="text-sm font-bold">4.9</span>
<span className="text-xs text-slate-400 font-normal">(124 avis)</span>
</div>
</div>
</div>
<p className="text-sm text-slate-500 mb-4 line-clamp-2">Spécialiste en recherche de fuites non-destructive. 12 ans d'expérience.</p>
<button className="w-full py-2 bg-slate-100 dark:bg-slate-700 hover:bg-primary hover:text-white transition-all rounded-lg text-sm font-bold">Choisir Marc</button>
</div>
{/*  Plumber Card 2  */}
<div className="flex flex-col bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
<div className="flex gap-4 items-center mb-4">
<div className="h-14 w-14 rounded-full bg-cover bg-center" data-alt="Portrait of Sophie G., a professional plumber" ></div>
<div>
<h4 className="font-bold">Sophie G.</h4>
<div className="flex items-center gap-1 text-amber-500">
<span className="material-symbols-outlined text-sm fill-amber-500">star</span>
<span className="text-sm font-bold">4.8</span>
<span className="text-xs text-slate-400 font-normal">(89 avis)</span>
</div>
</div>
</div>
<p className="text-sm text-slate-500 mb-4 line-clamp-2">Experte en rénovation de tuyauterie et urgences sanitaires. Réactive et rigoureuse.</p>
<button className="w-full py-2 bg-slate-100 dark:bg-slate-700 hover:bg-primary hover:text-white transition-all rounded-lg text-sm font-bold">Choisir Sophie</button>
</div>
</div>
</section>
</div>
{/*  Right Column: Booking Card  */}
<div className="lg:col-span-1">
<div className="sticky top-28 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 p-6">
<h3 className="text-xl font-bold mb-6">Réserver une intervention</h3>
<form className="space-y-4">
<div>
<label className="block text-xs font-bold text-slate-500 uppercase mb-1">Type de fuite</label>
<select className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-transparent text-sm focus:ring-primary focus:border-primary">
<option>Robinet / Mitigeur</option>
<option>Canalisation bouchée / percée</option>
<option>WC / Chasse d'eau</option>
<option>Chauffe-eau</option>
<option>Inconnu (Urgence)</option>
</select>
</div>
<div>
<label className="block text-xs font-bold text-slate-500 uppercase mb-1">Votre localisation</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">location_on</span>
<input className="w-full pl-10 rounded-lg border-slate-200 dark:border-slate-700 bg-transparent text-sm focus:ring-primary focus:border-primary" data-location="Paris" placeholder="Code postal ou ville" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-bold text-slate-500 uppercase mb-1">Date souhaitée</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">calendar_today</span>
<input className="w-full pl-10 rounded-lg border-slate-200 dark:border-slate-700 bg-transparent text-sm focus:ring-primary focus:border-primary" type="date"/>
</div>
</div>
<div className="pt-4">
<div className="flex justify-between text-sm mb-2">
<span className="text-slate-500">Estimation</span>
<span className="font-bold">À partir de 45€</span>
</div>
<button className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-600 transition-all shadow-lg shadow-primary/25" type="submit">
                                            Confirmer la réservation
                                        </button>
<p className="text-[10px] text-center text-slate-400 mt-4 leading-tight">
                                            En cliquant, vous acceptez nos conditions générales de service. Paiement sécurisé après intervention.
                                        </p>
</div>
</form>
</div>
</div>
</div>
</div>
</main>
{/*  Footer  */}
<footer className="mt-20 border-t border-slate-200 dark:border-slate-800 py-12 px-6 md:px-20 bg-white dark:bg-background-dark">
<div className="grid grid-cols-1 md:grid-cols-4 gap-10">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 text-primary mb-6">
<span className="material-symbols-outlined text-2xl">plumbing</span>
<h2 className="text-slate-900 dark:text-white text-lg font-bold tracking-tight">PlumbPro</h2>
</div>
<p className="text-sm text-slate-500 leading-relaxed">Le réseau nÂ°1 de plombiers certifiés pour vos interventions d'urgence et rénovations.</p>
</div>
<div>
<h4 className="font-bold mb-4">Services</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-primary transition-colors" href="#">Réparation fuite</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Débouchage</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Installation sanitaire</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Entretien chauffe-eau</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-4">Compagnie</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-primary transition-colors" href="#">À propos</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Recrutement</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-4">Assistance</h4>
<div className="flex flex-col gap-3">
<button className="flex items-center gap-2 text-sm font-bold bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-lg">
<span className="material-symbols-outlined text-primary">phone</span>
                                0 800 123 456
                            </button>
<p className="text-xs text-slate-400 italic">Support disponible 24h/7j pour les urgences majeures.</p>
</div>
</div>
</div>
<div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
<p>© 2024 PlumbPro Expertise. Tous droits réservés.</p>
<div className="flex gap-6">
<a className="hover:underline" href="#">Mentions Légales</a>
<a className="hover:underline" href="#">Confidentialité</a>
</div>
</div>
</footer>
</div>
</div>

    </>
  );
};

export default ServiceDetailsReparationDeFuites;
