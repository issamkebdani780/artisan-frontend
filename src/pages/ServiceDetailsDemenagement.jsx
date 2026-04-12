import React from 'react';

const ServiceDetailsDemenagement = () => {
  return (
    <>
      
{/*  Top Navigation Bar  */}
<header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md">
<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
<div className="flex items-center gap-2">
<div className="text-primary">
<span className="material-symbols-outlined text-4xl">local_shipping</span>
</div>
<h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">DÃ©mÃ©nagement</h2>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary transition-colors" href="#">Accueil</a>
<a className="text-sm font-medium text-primary" href="#">Services</a>
<a className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary transition-colors" href="#">RÃ©alisations</a>
<a className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary transition-colors" href="#">Blog</a>
<a className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary transition-colors" href="#">Contact</a>
</nav>
<div className="flex items-center gap-4">
<button className="relative p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-2 right-2 flex h-2 w-2 rounded-full bg-red-500"></span>
</button>
<button className="hidden sm:flex items-center justify-center rounded-lg bg-primary px-5 py-2 text-sm font-bold text-white hover:bg-primary/90 transition-colors shadow-sm">
                    Connexion
                </button>
<button className="md:hidden p-2">
<span className="material-symbols-outlined">menu</span>
</button>
</div>
</div>
</header>
<main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
{/*  Main Content Area  */}
<div className="lg:col-span-8 space-y-12">
{/*  Hero Section  */}
<section className="relative h-[400px] w-full overflow-hidden rounded-xl bg-slate-custom">
<div className="absolute inset-0 opacity-60">
<img className="h-full w-full object-cover" data-alt="Professional movers carrying boxes in a bright apartment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhCWJZkKBg_Nr_puAbM1daC94Wj_LrnUiJ150oNHaMq6GFAc4owbCvj4kj4fBb_zysaEAqR0q5XpyaiogiCZndyc0INr3JXAjVklk8aJx9_nFhdWNH6t73vTK2OAy3c4C76Nu7b9hVblCw7_E_KTkEaSxbjWhPLWy7OjneWcHRBxkQz8usuVGeNRL4BXK9g20bNvTEVK_6QC0SIYBexKYq9uW45j8XFtjwwBMawkSXl9C6tT0CjKtFsS4sVmr6yL5F-G7nlntbsFGx"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
<span className="inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary border border-primary/30 mb-4">Service Premium</span>
<h1 className="text-4xl font-black text-white md:text-5xl lg:text-6xl leading-tight">
                            Service de DÃ©mÃ©nagement Professionnel
                        </h1>
<p className="mt-4 max-w-2xl text-lg text-slate-200">
                            Votre dÃ©mÃ©nagement en toute sÃ©rÃ©nitÃ© avec des experts qualifiÃ©s, de l'emballage Ã  l'installation finale.
                        </p>
</div>
</section>
{/*  Statistics Section  */}
<section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
<div className="flex flex-col items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 text-center">
<span className="material-symbols-outlined text-primary text-3xl mb-2">done_all</span>
<p className="text-3xl font-bold text-slate-900 dark:text-slate-100">3000+</p>
<p className="text-sm font-medium text-slate-500 dark:text-slate-400">DÃ©mÃ©nagements rÃ©ussis</p>
</div>
<div className="flex flex-col items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 text-center">
<span className="material-symbols-outlined text-primary text-3xl mb-2">sentiment_very_satisfied</span>
<p className="text-3xl font-bold text-slate-900 dark:text-slate-100">96%</p>
<p className="text-sm font-medium text-slate-500 dark:text-slate-400">Taux de satisfaction</p>
</div>
<div className="flex flex-col items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 text-center">
<span className="material-symbols-outlined text-primary text-3xl mb-2">verified_user</span>
<p className="text-xl font-bold text-slate-900 dark:text-slate-100 leading-tight">Assurance casse</p>
<p className="text-sm font-medium text-slate-500 dark:text-slate-400">Protection intÃ©grale</p>
</div>
</section>
{/*  Our Services  */}
<section>
<div className="mb-6 flex items-center justify-between">
<h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Nos Services</h2>
<a className="text-sm font-semibold text-primary hover:underline" href="#">Voir tout</a>
</div>
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
<div className="group relative overflow-hidden rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 transition-all hover:shadow-lg">
<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
<span className="material-symbols-outlined">local_shipping</span>
</div>
<h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Transport local</h3>
<p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Solution optimale pour vos dÃ©mÃ©nagements en ville ou dans la mÃªme rÃ©gion.</p>
</div>
<div className="group relative overflow-hidden rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 transition-all hover:shadow-lg">
<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
<span className="material-symbols-outlined">distance</span>
</div>
<h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Longue distance</h3>
<p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Logistique complÃ¨te pour vos transferts nationaux et internationaux en toute sÃ©curitÃ©.</p>
</div>
<div className="group relative overflow-hidden rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 transition-all hover:shadow-lg">
<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
<span className="material-symbols-outlined">inventory_2</span>
</div>
<h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Emballage &amp; Mise en carton</h3>
<p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Protection professionnelle de vos objets fragiles et prÃ©cieux avec un matÃ©riel adaptÃ©.</p>
</div>
<div className="group relative overflow-hidden rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 transition-all hover:shadow-lg">
<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
<span className="material-symbols-outlined">build</span>
</div>
<h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Montage &amp; DÃ©montage</h3>
<p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Gestion experte de votre mobilier, du dÃ©montage Ã  la rÃ©installation complÃ¨te.</p>
</div>
</div>
</section>
{/*  Why Choose Us  */}
<section className="rounded-2xl bg-slate-900 p-8 md:p-12 text-white">
<div className="max-w-3xl">
<h2 className="text-3xl font-bold">Pourquoi nous choisir ?</h2>
<p className="mt-4 text-slate-400">Nous redÃ©finissons le dÃ©mÃ©nagement avec une approche centrÃ©e sur l'humain et la technologie pour garantir une transition sans stress.</p>
<ul className="mt-8 space-y-4">
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary mt-1">check_circle</span>
<div>
<h4 className="font-bold">Expertise CertifiÃ©e</h4>
<p className="text-sm text-slate-400">Ã‰quipe formÃ©e aux derniÃ¨res techniques de manutention.</p>
</div>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary mt-1">check_circle</span>
<div>
<h4 className="font-bold">FlexibilitÃ© Totale</h4>
<p className="text-sm text-slate-400">Planning adaptÃ© Ã  vos contraintes horaires et budgÃ©taires.</p>
</div>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary mt-1">check_circle</span>
<div>
<h4 className="font-bold">Transparence Tarifaire</h4>
<p className="text-sm text-slate-400">Aucun coÃ»t cachÃ©, tout est dÃ©taillÃ© dans votre devis initial.</p>
</div>
</li>
</ul>
</div>
</section>
{/*  Testimonials  */}
<section>
<h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-8">Ce que disent nos clients</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
<div className="flex gap-1 text-yellow-400 mb-4">
<span className="material-symbols-outlined text-sm">star</span>
<span className="material-symbols-outlined text-sm">star</span>
<span className="material-symbols-outlined text-sm">star</span>
<span className="material-symbols-outlined text-sm">star</span>
<span className="material-symbols-outlined text-sm">star</span>
</div>
<p className="text-slate-600 dark:text-slate-400 italic mb-6">"Une Ã©quipe ponctuelle, polie et trÃ¨s efficace. Mes meubles fragiles sont arrivÃ©s intacts. Je recommande vivement !"</p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-slate-200 overflow-hidden">
<img className="h-full w-full object-cover" data-alt="Client portrait of a smiling woman" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAH9ddgwsIEcqfAjlPu2Mxby0-KrmdV7XBSqaN3OLP_UsLhxh8zg2TfFalA_RtVOOxzp3MHUsY0uhOntcrkEoyR6GVdATbStBFpgdKuIXD1qu7ra5Rg6GgaI_jTKNAuKyK8sBB6l9tDMGFiTfg_8Tmgi4OwA8WXOhl2dLVJq_UcF4KUiz1hh-_4pOtQQH1F4nfiefRsCFWhKk--OmVGawt996vqsTmxKPnpV-AZGik1DVv58ux2BuVfMzrVBaAT7_O3C58HI0tt_yLu"/>
</div>
<div>
<h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">Marie L.</h4>
<p className="text-xs text-slate-500">Paris, France</p>
</div>
</div>
</div>
<div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
<div className="flex gap-1 text-yellow-400 mb-4">
<span className="material-symbols-outlined text-sm">star</span>
<span className="material-symbols-outlined text-sm">star</span>
<span className="material-symbols-outlined text-sm">star</span>
<span className="material-symbols-outlined text-sm">star</span>
<span className="material-symbols-outlined text-sm">star</span>
</div>
<p className="text-slate-600 dark:text-slate-400 italic mb-6">"DÃ©mÃ©nagement longue distance gÃ©rÃ© de main de maÃ®tre. Le service d'emballage nous a fait gagner un temps prÃ©cieux."</p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-slate-200 overflow-hidden">
<img className="h-full w-full object-cover" data-alt="Client portrait of a professional man" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD56skjcpoDXcqeJ9HhZcPpjaDQykYr5zre2SaeHTrZ4lU4lO4SDLwYl9L38OGhGy5mwWgHTYpuWzVqxhLD9yh8Oos87sDyNFj3QQD0oOZwQNJqAI4iibfmgRY4lI5yMW3GoNjUj0Fqf-_3nHFTBkZY2TlCUfYVtaFMzYIuJCL2RrbTvAUo-lucbJ--0OEtLnBgsPMc_wUlC76x8JN5an8fbbFyF1_p5WKTefmhFBJxVsNHEhyxrqKHt9dC0BRk78iBIVF51oU7c7AU"/>
</div>
<div>
<h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">Jean-Pierre M.</h4>
<p className="text-xs text-slate-500">Lyon, France</p>
</div>
</div>
</div>
</div>
</section>
</div>
{/*  Sidebar  */}
<aside className="lg:col-span-4 space-y-6">
{/*  Quote Request Widget  */}
<div className="sticky top-24 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-xl">
<div className="flex items-center gap-4 mb-6">
<div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
<span className="material-symbols-outlined">description</span>
</div>
<div>
<h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 leading-tight">Besoin d'un devis gratuit ?</h3>
<p className="text-sm text-slate-500 dark:text-slate-400">RÃ©ponse en moins de 24h</p>
</div>
</div>
<div className="space-y-4">
<div className="rounded-lg bg-slate-50 dark:bg-slate-800/50 p-4 border border-slate-100 dark:border-slate-800">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary">local_shipping</span>
<span className="text-sm font-medium text-slate-700 dark:text-slate-300">Estimation personnalisÃ©e</span>
</div>
</div>
<div className="rounded-lg bg-slate-50 dark:bg-slate-800/50 p-4 border border-slate-100 dark:border-slate-800">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary">calendar_today</span>
<span className="text-sm font-medium text-slate-700 dark:text-slate-300">DisponibilitÃ© immÃ©diate</span>
</div>
</div>
</div>
<button className="mt-8 w-full rounded-xl bg-primary py-4 text-center text-sm font-bold text-white transition-all hover:bg-primary/90 hover:shadow-lg active:scale-[0.98]">
                        Demander mon devis
                    </button>
<p className="mt-4 text-center text-[11px] text-slate-400">
                        En cliquant, vous acceptez nos conditions gÃ©nÃ©rales d'utilisation.
                    </p>
</div>
{/*  Support Card  */}
<div className="rounded-2xl bg-primary/5 border border-primary/20 p-6">
<h4 className="font-bold text-slate-900 dark:text-slate-100">Besoin d'aide ?</h4>
<p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Nos experts sont Ã  votre Ã©coute pour vous conseiller.</p>
<div className="mt-4 flex items-center gap-3 text-primary">
<span className="material-symbols-outlined">call</span>
<span className="font-bold">01 23 45 67 89</span>
</div>
</div>
</aside>
</div>
</main>
{/*  Footer  */}
<footer className="mt-20 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-12">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<span className="material-symbols-outlined text-primary">local_shipping</span>
<span className="font-bold text-slate-900 dark:text-slate-100">DÃ©mÃ©nagement</span>
</div>
<p className="text-sm text-slate-500">Expertise et professionnalisme Ã  votre service depuis 2010.</p>
</div>
<div>
<h5 className="font-bold text-sm uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-4">Entreprise</h5>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-primary" href="#">ÃDA propos</a></li>
<li><a className="hover:text-primary" href="#">Recrutement</a></li>
<li><a className="hover:text-primary" href="#">Nos engagements</a></li>
</ul>
</div>
<div>
<h5 className="font-bold text-sm uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-4">LÃ©gal</h5>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-primary" href="#">ConfidentialitÃ©</a></li>
<li><a className="hover:text-primary" href="#">Mentions lÃ©gales</a></li>
<li><a className="hover:text-primary" href="#">Conditions</a></li>
</ul>
</div>
<div>
<h5 className="font-bold text-sm uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-4">Contact</h5>
<ul className="space-y-2 text-sm text-slate-500">
<li>contact@demenagement.fr</li>
<li>01 23 45 67 89</li>
<li>Paris, France</li>
</ul>
</div>
</div>
<div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-900 text-center text-sm text-slate-400">
                Â© 2024 DÃ©mÃ©nagement Pro. Tous droits rÃ©servÃ©s.
            </div>
</div>
</footer>

    </>
  );
};

export default ServiceDetailsDemenagement;
