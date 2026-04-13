import React from 'react';

const ReparationDeFuites = () => {
  return (
    <>
      
<div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
{/*  Header  */}
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/10 bg-white px-6 md:px-20 py-4 sticky top-0 z-50">
<div className="flex items-center gap-3 text-primary">
<span className="material-symbols-outlined text-3xl">plumbing</span>
<h2 className="text-slate-900 text-xl font-bold leading-tight tracking-tight">PlumbMaster</h2>
</div>
<div className="hidden md:flex flex-1 justify-end gap-10 items-center">
<nav className="flex items-center gap-8">
<a className="text-slate-700 text-sm font-medium hover:text-primary transition-colors" href="#">Services</a>
<a className="text-slate-700 text-sm font-medium hover:text-primary transition-colors" href="#">Urgence</a>
<a className="text-slate-700 text-sm font-medium hover:text-primary transition-colors" href="#">Tarifs</a>
<a className="text-slate-700 text-sm font-medium hover:text-primary transition-colors" href="#">Ã€ Propos</a>
</nav>
<div className="flex items-center gap-4">
<button className="flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold shadow-sm hover:bg-primary/90 transition-all">
                    Connexion
                </button>
<div className="size-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
<span className="material-symbols-outlined text-primary text-xl">account_circle</span>
</div>
</div>
</div>
<button className="md:hidden text-slate-900">
<span className="material-symbols-outlined">menu</span>
</button>
</header>
<main className="mx-auto w-full max-w-[1280px] px-4 md:px-20 py-8">
<div className="flex flex-col lg:flex-row gap-8">
{/*  Sidebar Navigation  */}
<aside className="w-full lg:w-72 flex flex-col gap-6">
<div className="bg-white rounded-xl p-6 border border-primary/10 shadow-sm">
<div className="mb-6">
<h1 className="text-slate-900 text-lg font-bold">Réparation de Fuites</h1>
<p className="text-slate-500 text-sm mt-1">Disponible 24h/24 &amp; 7j/7</p>
</div>
<nav className="flex flex-col gap-1">
<a className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary font-semibold" href="#">
<span className="material-symbols-outlined">info</span>
<span className="text-sm">Vue d'ensemble</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-50 transition-colors text-slate-600" href="#pricing">
<span className="material-symbols-outlined">payments</span>
<span className="text-sm">Tarification</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-50 transition-colors text-slate-600" href="#experts">
<span className="material-symbols-outlined">engineering</span>
<span className="text-sm">Nos Experts</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-50 transition-colors text-slate-600" href="#faq">
<span className="material-symbols-outlined">help_center</span>
<span className="text-sm">FAQ</span>
</a>
</nav>
<div className="mt-8">
<button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-all">
<span className="material-symbols-outlined text-xl">request_quote</span>
                            Devis Gratuit
                        </button>
</div>
</div>
<div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
<h3 className="font-bold text-primary flex items-center gap-2 mb-2">
<span className="material-symbols-outlined">emergency_home</span> Urgence 24/7
                    </h3>
<p className="text-sm text-slate-600">Intervention rapide en moins de 30 minutes pour toutes fuites d'eau majeures.</p>
<a className="block mt-4 text-center font-bold text-lg text-primary hover:underline underline-offset-4 tracking-wider" href="tel:0800000000">
                        0800 000 000
                    </a>
</div>
</aside>
{/*  Main Content Area  */}
<div className="flex-1 flex flex-col gap-8">
{/*  Hero Section  */}
<div className="relative h-[300px] w-full rounded-2xl overflow-hidden group shadow-xl">
<div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent z-10"></div>
<img alt="Professional plumbing repair" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Professional plumber fixing a water leak under sink" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHjU4Gmi9V-DZeStQa-LyLrCBiimAGkSY6yDESk2GHCuSzD4BooOnyg-vnRFeDU7hPbtiJN3Ikg5B5S5ZPBNXWG97jX_9jgtKZ0Vu9K8sqmg76PukCLIu9uOW7muT_csK4yIZPTlbJ29t4rK7LW_kSjmon0buoYjHkeGpVDr85ro3PRtcM_8QYXZDVk1qS1pL0mBjP3qx5t1TpCVlqrK7S84nkQzLDxFU35lx5OczNPBvim-ULnz7bsLIAgKLb9Vgap4QUC2N28dq_"/>
<div className="absolute bottom-0 left-0 p-8 z-20">
<div className="flex items-center gap-2 text-primary bg-white/90 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 w-fit">
<span className="material-symbols-outlined text-sm">bolt</span> Service Express
                        </div>
<h2 className="text-white text-4xl font-black leading-tight">Réparation de Fuites</h2>
<p className="text-slate-200 mt-2 max-w-lg">Solutions durables pour tuyauteries, robinetteries et canalisations endommagées.</p>
</div>
</div>
{/*  Navigation Breadcrumbs  */}
<nav className="flex items-center gap-2 text-sm text-slate-500 font-medium px-2">
<a className="hover:text-primary" href="#">Accueil</a>
<span className="material-symbols-outlined text-base">chevron_right</span>
<a className="hover:text-primary" href="#">Services</a>
<span className="material-symbols-outlined text-base">chevron_right</span>
<span className="text-slate-900 font-semibold">Réparation de Fuites</span>
</nav>
{/*  Details Section  */}
<section className="bg-white rounded-2xl p-8 border border-primary/5">
<h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">analytics</span>
                        Détails du Service d'Urgence
                    </h3>
<div className="grid md:grid-cols-2 gap-8">
<div className="space-y-4">
<p className="text-slate-600 leading-relaxed">
                                Une fuite d'eau non traitée peut causer des dommages structurels importants et une augmentation drastique de votre facture d'eau. Nos techniciens interviennent avec un équipement de pointe pour localiser et réparer toute fuite, mÃªme invisible.
                            </p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-slate-700">
<span className="material-symbols-outlined text-green-500 mt-0.5">check_circle</span>
<span>Détection de fuite par caméra thermique</span>
</li>
<li className="flex items-start gap-3 text-slate-700">
<span className="material-symbols-outlined text-green-500 mt-0.5">check_circle</span>
<span>Réparation immédiate de tuyauterie PVC/Cuivre</span>
</li>
<li className="flex items-start gap-3 text-slate-700">
<span className="material-symbols-outlined text-green-500 mt-0.5">check_circle</span>
<span>Remplacement de joints et robinetterie</span>
</li>
</ul>
</div>
<div className="bg-slate-50 p-6 rounded-xl border border-dashed border-primary/20">
<div className="flex items-center gap-4 mb-4">
<div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
<span className="material-symbols-outlined text-primary">timer</span>
</div>
<div>
<p className="font-bold text-slate-900">Délai d'intervention</p>
<p className="text-sm text-slate-500">Moyenne constatée en ÃŽle-de-France</p>
</div>
</div>
<div className="text-4xl font-black text-primary">28 min</div>
<p className="text-xs text-slate-400 mt-2">Basé sur nos 500 dernières interventions.</p>
</div>
</div>
</section>
{/*  Pricing Section  */}
<section className="bg-white rounded-2xl p-8 border border-primary/5" id="pricing">
<h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">request_quote</span>
                        Tarification transparente
                    </h3>
<div className="grid md:grid-cols-3 gap-6">
<div className="p-6 rounded-xl border border-slate-100 hover:border-primary transition-all">
<p className="text-sm font-medium text-slate-500 uppercase tracking-widest">Main d'Ã…â€œuvre</p>
<div className="flex items-baseline gap-1 mt-2">
<span className="text-3xl font-black text-slate-900">65â‚¬</span>
<span className="text-slate-500">/heure</span>
</div>
<p className="text-xs text-slate-400 mt-4">HT - Majoration soir &amp; weekends (25%)</p>
</div>
<div className="p-6 rounded-xl border border-primary bg-primary/5 shadow-sm">
<p className="text-sm font-medium text-primary uppercase tracking-widest">Déplacement</p>
<div className="flex items-baseline gap-1 mt-2">
<span className="text-3xl font-black text-slate-900">45â‚¬</span>
<span className="text-slate-500">/forfait</span>
</div>
<p className="text-xs text-slate-400 mt-4">Inclus diagnostic visuel initial</p>
</div>
<div className="p-6 rounded-xl border border-slate-100 hover:border-primary transition-all">
<p className="text-sm font-medium text-slate-500 uppercase tracking-widest">Diagnostic Expert</p>
<div className="flex items-baseline gap-1 mt-2">
<span className="text-3xl font-black text-slate-900">120â‚¬</span>
<span className="text-slate-500">/unité</span>
</div>
<p className="text-xs text-slate-400 mt-4">Détection acoustique ou endoscopique</p>
</div>
</div>
</section>
{/*  Experts Section  */}
<section className="bg-white rounded-2xl p-8 border border-primary/5" id="experts">
<h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">groups</span>
                        Nos Experts Plombiers
                    </h3>
<div className="grid md:grid-cols-2 gap-6">
<div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50">
<div className="size-16 rounded-full overflow-hidden bg-primary/10">
<img alt="Expert plumber" className="w-full h-full object-cover" data-alt="Professional plumber in uniform smiling" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATMMlHAdWKW3GLaQ-q9lkjqOCVLIZP4FPh5UYRhGWqy23yybouRqY4jacEboBAPKFGyVRBEN3O3tjoL2Q2jWNUhmMAZQJJ7p7uYHJm_gaPg8USBiRmO3v2wnKOirClQVfVjJawLCjYGlMpsE9pvt8Wd3ffEAAiJj7EEgXAjQek0MirVit5MelJCHv_28VjuPk376vB9Jfzra-xpAZ-CR4qNAXwD91Uyn22LrhwLAYh7EfRTT6l1hXObdsWLBTbTrUvPUGie7Xa6uml"/>
</div>
<div>
<h4 className="font-bold text-slate-900">Marc Lefebvre</h4>
<p className="text-sm text-slate-500">Spécialiste Tuyauterie Cuivre - 12 ans d'exp.</p>
<div className="flex text-yellow-500 text-sm mt-1">
<span className="material-symbols-outlined !text-[14px] fill-current">star</span>
<span className="material-symbols-outlined !text-[14px] fill-current">star</span>
<span className="material-symbols-outlined !text-[14px] fill-current">star</span>
<span className="material-symbols-outlined !text-[14px] fill-current">star</span>
<span className="material-symbols-outlined !text-[14px] fill-current">star</span>
<span className="ml-1 text-slate-400 font-medium">4.9/5</span>
</div>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50">
<div className="size-16 rounded-full overflow-hidden bg-primary/10">
<img alt="Expert plumber" className="w-full h-full object-cover" data-alt="Young professional technician with toolbox" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7vp9vIkcudhklHeDLlU8BwszwdSVojBfT34HJF44WW5ZCT7OtFL6loheoYqEU1RXBdZSyTLbNuoBHcnOlLDjern_bB0fQ9Y2R963hQynioRZ4oAhW7PIp3C-WDeUYEwiRhyDUK5evZ_7Y9FUzTACjZLhNpI7i-3A67D9yle-qcR7yQ3CpgPpb0UZ7esXHIQbjK_Umr5MUgDO57uLiYmJ9g_0A5Y1CzLfeoY0BcLZ9awTODSxgCrYqbrCJePoGkm9DQLemQjQQ7DLZ"/>
</div>
<div>
<h4 className="font-bold text-slate-900">Julien Morel</h4>
<p className="text-sm text-slate-500">Expert Détection de Fuite - 8 ans d'exp.</p>
<div className="flex text-yellow-500 text-sm mt-1">
<span className="material-symbols-outlined !text-[14px] fill-current">star</span>
<span className="material-symbols-outlined !text-[14px] fill-current">star</span>
<span className="material-symbols-outlined !text-[14px] fill-current">star</span>
<span className="material-symbols-outlined !text-[14px] fill-current">star</span>
<span className="material-symbols-outlined !text-[14px]">star</span>
<span className="ml-1 text-slate-400 font-medium">4.7/5</span>
</div>
</div>
</div>
</div>
</section>
{/*  FAQ Section  */}
<section className="bg-white rounded-2xl p-8 border border-primary/5" id="faq">
<h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">live_help</span>
                        Foire Aux Questions
                    </h3>
<div className="space-y-4">
<div className="border-b border-slate-100 pb-4">
<button className="w-full text-left font-bold text-slate-900 flex justify-between items-center group">
                                Comment couper l'eau en attendant le plombier ?
                                <span className="material-symbols-outlined text-slate-400 group-hover:text-primary">expand_more</span>
</button>
<p className="mt-2 text-slate-600 text-sm leading-relaxed">
                                Localisez votre vanne d'arrÃªt générale, généralement située près du compteur d'eau ou sous l'évier de la cuisine. Tournez-la dans le sens des aiguilles d'une montre pour couper l'alimentation.
                            </p>
</div>
<div className="border-b border-slate-100 pb-4">
<button className="w-full text-left font-bold text-slate-900 flex justify-between items-center group">
                                Vos interventions sont-elles garanties ?
                                <span className="material-symbols-outlined text-slate-400 group-hover:text-primary">expand_more</span>
</button>
<p className="mt-2 text-slate-600 text-sm leading-relaxed">
                                Oui, toutes nos réparations de fuites sont couvertes par une garantie pièces et main d'Ã…â€œuvre de 2 ans, en plus de l'assurance décennale obligatoire.
                            </p>
</div>
<div className="pb-2">
<button className="w-full text-left font-bold text-slate-900 flex justify-between items-center group">
                                Puis-je obtenir un devis avant l'intervention ?
                                <span className="material-symbols-outlined text-slate-400 group-hover:text-primary">expand_more</span>
</button>
<p className="mt-2 text-slate-600 text-sm leading-relaxed">
                                Absolument. Pour les interventions non-urgentes, nous fournissons un devis détaillé gratuitement après analyse de photos ou visite sur place.
                            </p>
</div>
</div>
</section>
</div>
</div>
</main>
{/*  Footer  */}
<footer className="mt-auto bg-slate-900 text-slate-400 py-12 px-6 md:px-20 border-t border-slate-800">
<div className="max-w-[1280px] mx-auto grid md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-3 text-white mb-6">
<span className="material-symbols-outlined text-3xl text-primary">plumbing</span>
<h2 className="text-xl font-bold tracking-tight">PlumbMaster</h2>
</div>
<p className="max-w-md mb-6 leading-relaxed">Votre partenaire de confiance pour tous vos besoins de plomberie d'urgence et d'installation à travers la France. Qualité, Rapidité, Transparence.</p>
<div className="flex gap-4">
<a className="size-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors" href="#">
<span className="material-symbols-outlined text-xl text-white">social_leaderboard</span>
</a>
<a className="size-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors" href="#">
<span className="material-symbols-outlined text-xl text-white">alternate_email</span>
</a>
</div>
</div>
<div>
<h4 className="text-white font-bold mb-6">Services</h4>
<ul className="space-y-4 text-sm">
<li><a className="hover:text-primary transition-colors" href="#">Débouchage</a></li>
<li><a className="hover:text-primary transition-colors text-primary font-bold" href="#">Réparation de Fuites</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Chauffe-eau</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Rénovation Salle de Bain</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold mb-6">Support</h4>
<ul className="space-y-4 text-sm">
<li><a className="hover:text-primary transition-colors" href="#">Centre d'aide</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Tarifs</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Confidentialité</a></li>
</ul>
</div>
</div>
<div className="max-w-[1280px] mx-auto mt-12 pt-8 border-t border-slate-800 text-xs flex flex-col md:flex-row justify-between gap-4">
<p>Â© 2024 PlumbMaster Pro. Tous droits réservés.</p>
<div className="flex gap-6">
<a className="hover:text-white" href="#">Mentions Légales</a>
<a className="hover:text-white" href="#">CGV</a>
</div>
</div>
</footer>
</div>

    </>
  );
};

export default ReparationDeFuites;

