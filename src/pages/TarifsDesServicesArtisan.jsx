import React from 'react';

const TarifsDesServicesArtisan = () => {
  return (
    <>
      
<div className="relative flex min-h-screen flex-col overflow-x-hidden">
<header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-background-light/80 backdrop-blur-md px-4 lg:px-20 py-4">
<div className="max-w-7xl mx-auto flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
<span className="material-symbols-outlined text-2xl">construction</span>
</div>
<h2 className="text-xl font-bold tracking-tight text-slate-900">ArtisanDirect</h2>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Accueil</a>
<a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Artisans</a>
<a className="text-sm font-semibold text-primary underline underline-offset-4" href="#">Tarifs</a>
<a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Connexion</a>
</nav>
<div className="flex items-center gap-4">
<button className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600 border border-slate-200 shadow-sm transition-all hover:scale-105 active:scale-95" onclick="document.documentElement.classList.toggle('dark')">
<span className="material-symbols-outlined leading-none">light_mode</span>
</button>
<div className="h-10 w-10 rounded-full overflow-hidden border-2 border-primary/20 bg-slate-200">
<img className="h-full w-full object-cover" data-alt="Photo de profil utilisateur" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCky1FABmc51VoMy02tem8OEQbBmVT0zr-QtOkyLEocDNApN0fN695-w8A48ztuybfomFxgm8--6Jccyf30jlSDeDID_YqQcscWnoFYwD9tMPIVLc3YTd3QYJHTatpLQ0FRAuQX58uidUSJbAPgliv1zul79qGIUXf4PWuiGEQ2dsT-KAxkuC0g_QCfclNQPFeDVCam6n2Ay4CD6CvJngfToydmoVdkLBgvDfImYS-1hp6tS7LMxik3NUZL7_nLl63cc0NSgY2IfBgp"/>
</div>
</div>
</div>
</header>
<main className="flex-grow">
<section className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
<div className="text-center mb-16">
<h1 className="text-4xl lg:text-6xl font-black mb-6 tracking-tight text-slate-900">Tarifs des Services</h1>
<p className="text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto">
                        Découvrez les tarifs moyens pour vos travaux à domicile. Nous prônons la transparence et des prix justes pour chaque intervention.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:border-primary/50">
<div className="mb-6 flex items-center justify-between">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
<span className="material-symbols-outlined text-3xl">plumbing</span>
</div>
<span className="text-sm font-bold uppercase tracking-wider text-slate-400">Plomberie</span>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-1">
<span className="text-4xl font-black">45â‚¬</span>
<span className="text-slate-500 font-medium">à partir de</span>
</div>
</div>
<ul className="flex-grow space-y-4 mb-8">
<li className="flex items-center gap-3 text-slate-600">
<span className="material-symbols-outlined text-primary text-xl">check_circle</span>
<span>Réparation de fuite</span>
</li>
<li className="flex items-center gap-3 text-slate-600">
<span className="material-symbols-outlined text-primary text-xl">check_circle</span>
<span>Débouchage canalisation</span>
</li>
<li className="flex items-center gap-3 text-slate-600">
<span className="material-symbols-outlined text-primary text-xl">check_circle</span>
<span>Installation de robinet</span>
</li>
</ul>
<button className="w-full rounded-xl bg-slate-900 text-white py-3 font-bold transition-all group-hover:bg-primary group-hover:text-white">Réserver un plombier</button>
</div>
<div className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:border-primary/50">
<div className="mb-6 flex items-center justify-between">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
<span className="material-symbols-outlined text-3xl">bolt</span>
</div>
<span className="text-sm font-bold uppercase tracking-wider text-slate-400">Électricité</span>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-1">
<span className="text-4xl font-black">50â‚¬</span>
<span className="text-slate-500 font-medium">à partir de</span>
</div>
</div>
<ul className="flex-grow space-y-4 mb-8">
<li className="flex items-center gap-3 text-slate-600">
<span className="material-symbols-outlined text-primary text-xl">check_circle</span>
<span>Installation de prise</span>
</li>
<li className="flex items-center gap-3 text-slate-600">
<span className="material-symbols-outlined text-primary text-xl">check_circle</span>
<span>Tableau électrique</span>
</li>
<li className="flex items-center gap-3 text-slate-600">
<span className="material-symbols-outlined text-primary text-xl">check_circle</span>
<span>Diagnostic de panne</span>
</li>
</ul>
<button className="w-full rounded-xl bg-slate-900 text-white py-3 font-bold transition-all group-hover:bg-primary group-hover:text-white">Réserver un électricien</button>
</div>
<div className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:border-primary/50">
<div className="mb-6 flex items-center justify-between">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
<span className="material-symbols-outlined text-3xl">format_paint</span>
</div>
<span className="text-sm font-bold uppercase tracking-wider text-slate-400">Peinture</span>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-1">
<span className="text-4xl font-black">35â‚¬</span>
<span className="text-slate-500 font-medium">par mÂ²</span>
</div>
</div>
<ul className="flex-grow space-y-4 mb-8">
<li className="flex items-center gap-3 text-slate-600">
<span className="material-symbols-outlined text-primary text-xl">check_circle</span>
<span>Peinture murale</span>
</li>
<li className="flex items-center gap-3 text-slate-600">
<span className="material-symbols-outlined text-primary text-xl">check_circle</span>
<span>Lessivage plafonds</span>
</li>
<li className="flex items-center gap-3 text-slate-600">
<span className="material-symbols-outlined text-primary text-xl">check_circle</span>
<span>Enduit de lissage</span>
</li>
</ul>
<button className="w-full rounded-xl bg-slate-900 text-white py-3 font-bold transition-all group-hover:bg-primary group-hover:text-white">Réserver un peintre</button>
</div>
<div className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:border-primary/50">
<div className="mb-6 flex items-center justify-between">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
<span className="material-symbols-outlined text-3xl">cleaning_services</span>
</div>
<span className="text-sm font-bold uppercase tracking-wider text-slate-400">Ménage</span>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-1">
<span className="text-4xl font-black">25â‚¬</span>
<span className="text-slate-500 font-medium">par heure</span>
</div>
</div>
<ul className="flex-grow space-y-4 mb-8">
<li className="flex items-center gap-3 text-slate-600">
<span className="material-symbols-outlined text-primary text-xl">check_circle</span>
<span>Nettoyage courant</span>
</li>
<li className="flex items-center gap-3 text-slate-600">
<span className="material-symbols-outlined text-primary text-xl">check_circle</span>
<span>Lavage de vitres</span>
</li>
<li className="flex items-center gap-3 text-slate-600">
<span className="material-symbols-outlined text-primary text-xl">check_circle</span>
<span>Repassage à domicile</span>
</li>
</ul>
<button className="w-full rounded-xl bg-slate-900 text-white py-3 font-bold transition-all group-hover:bg-primary group-hover:text-white">Réserver ménage</button>
</div>
<div className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:border-primary/50">
<div className="mb-6 flex items-center justify-between">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
<span className="material-symbols-outlined text-3xl">handyman</span>
</div>
<span className="text-sm font-bold uppercase tracking-wider text-slate-400">Montage</span>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-1">
<span className="text-4xl font-black">40â‚¬</span>
<span className="text-slate-500 font-medium">à partir de</span>
</div>
</div>
<ul className="flex-grow space-y-4 mb-8">
<li className="flex items-center gap-3 text-slate-600">
<span className="material-symbols-outlined text-primary text-xl">check_circle</span>
<span>Meuble en kit</span>
</li>
<li className="flex items-center gap-3 text-slate-600">
<span className="material-symbols-outlined text-primary text-xl">check_circle</span>
<span>Fixation murale</span>
</li>
<li className="flex items-center gap-3 text-slate-600">
<span className="material-symbols-outlined text-primary text-xl">check_circle</span>
<span>Installation cuisine</span>
</li>
</ul>
<button className="w-full rounded-xl bg-slate-900 text-white py-3 font-bold transition-all group-hover:bg-primary group-hover:text-white">Réserver montage</button>
</div>
<div className="flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-slate-300 p-8 text-center bg-transparent">
<span className="material-symbols-outlined text-5xl text-slate-400 mb-4">more_horiz</span>
<h3 className="text-xl font-bold mb-2">Autre besoin ?</h3>
<p className="text-slate-500 mb-6">Jardinage, serrurerie, maçonnerie... nous avons l'artisan qu'il vous faut.</p>
<a className="text-primary font-bold hover:underline flex items-center gap-2" href="#">
                            Voir tous les services
                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
</div>
</section>
<section className="bg-slate-100 py-20">
<div className="max-w-4xl mx-auto px-4">
<div className="text-center mb-12">
<h2 className="text-3xl font-bold mb-4">Comment sont calculés nos prix ?</h2>
<div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
</div>
<div className="grid md:grid-cols-3 gap-8 text-center">
<div className="flex flex-col items-center">
<div className="size-16 rounded-2xl bg-white flex items-center justify-center shadow-md mb-4">
<span className="material-symbols-outlined text-primary text-3xl">priority_high</span>
</div>
<h4 className="font-bold mb-2">Urgence</h4>
<p className="text-sm text-slate-600">Les interventions de nuit ou le week-end peuvent inclure une majoration.</p>
</div>
<div className="flex flex-col items-center">
<div className="size-16 rounded-2xl bg-white flex items-center justify-center shadow-md mb-4">
<span className="material-symbols-outlined text-primary text-3xl">inventory_2</span>
</div>
<h4 className="font-bold mb-2">Fournitures</h4>
<p className="text-sm text-slate-600">Le coût des pièces et matériaux nécessaires à la réparation ou installation.</p>
</div>
<div className="flex flex-col items-center">
<div className="size-16 rounded-2xl bg-white flex items-center justify-center shadow-md mb-4">
<span className="material-symbols-outlined text-primary text-3xl">account_tree</span>
</div>
<h4 className="font-bold mb-2">Complexité</h4>
<p className="text-sm text-slate-600">La difficulté technique et le temps estimé pour réaliser la prestation.</p>
</div>
</div>
</div>
</section>
<section className="py-24 px-4 text-center">
<div className="max-w-3xl mx-auto bg-primary rounded-[2.5rem] p-12 lg:p-20 text-white relative overflow-hidden shadow-2xl">
<div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
<h2 className="text-3xl lg:text-5xl font-black mb-6 leading-tight relative z-10">Un projet spécifique en tête ?</h2>
<p className="text-xl text-white/80 mb-10 relative z-10">Obtenez une estimation précise et gratuite pour vos travaux en moins de 24h.</p>
<button className="bg-white text-primary px-10 py-5 rounded-2xl text-xl font-bold shadow-xl transition-all hover:scale-105 active:scale-95 relative z-10">
                        Demander un devis gratuit
                    </button>
</div>
</section>
</main>
<footer className="bg-slate-900 text-slate-400 py-16 px-4">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-3 text-white mb-6">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
<span className="material-symbols-outlined text-xl">construction</span>
</div>
<h2 className="text-lg font-bold">ArtisanDirect</h2>
</div>
<p className="text-sm leading-relaxed mb-6">
                        La plateforme de mise en relation de confiance entre particuliers et artisans locaux qualifiés.
                    </p>
<div className="flex gap-4">
<a className="size-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors" href="#">
<span className="material-symbols-outlined">social_leaderboard</span>
</a>
<a className="size-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors" href="#">
<span className="material-symbols-outlined">share</span>
</a>
<a className="size-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors" href="#">
<span className="material-symbols-outlined">alternate_email</span>
</a>
</div>
</div>
<div>
<h4 className="text-white font-bold mb-6">Plateforme</h4>
<ul className="space-y-4 text-sm">
<li><a className="hover:text-primary transition-colors" href="#">Comment ça marche</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Nos Artisans</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Tarifs</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Avis clients</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold mb-6">Support</h4>
<ul className="space-y-4 text-sm">
<li><a className="hover:text-primary transition-colors" href="#">Centre d'aide</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Contactez-nous</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Devenir Artisan</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Garantie Qualité</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold mb-6">Newsletter</h4>
<p className="text-sm mb-4">Recevez nos conseils et offres exclusives.</p>
<div className="flex gap-2">
<input className="bg-slate-800 border-none rounded-lg text-sm focus:ring-primary w-full px-4" placeholder="Votre email" type="email"/>
<button className="bg-primary text-white p-2 rounded-lg">
<span className="material-symbols-outlined">send</span>
</button>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
<p>© 2024 ArtisanDirect. Tous droits réservés.</p>
<div className="flex gap-6">
<a className="hover:text-primary" href="#">CGU</a>
<a className="hover:text-primary" href="#">Confidentialité</a>
<a className="hover:text-primary" href="#">Mentions légales</a>
</div>
</div>
</footer>
</div>

    </>
  );
};

export default TarifsDesServicesArtisan;

