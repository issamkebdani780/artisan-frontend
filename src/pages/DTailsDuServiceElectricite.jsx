import React from 'react';

const DTailsDuServiceElectricite = () => {
  return (
    <>
      
<div className="relative flex min-h-screen flex-col">
{/*  Top Navigation  */}
<header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<div className="flex items-center gap-8">
<a className="flex items-center gap-2 text-[#f39c12]" href="#">
<span className="material-symbols-outlined text-3xl">bolt</span>
<span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">ArtisanPro</span>
</a>
<nav className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium transition-colors hover:text-[#f39c12]" href="#">Services</a>
<a className="text-sm font-medium transition-colors hover:text-[#f39c12]" href="#">Comment ça marche</a>
<a className="text-sm font-medium transition-colors hover:text-[#f39c12]" href="#">Électriciens</a>
<a className="text-sm font-medium transition-colors hover:text-[#f39c12]" href="#">FAQ</a>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden sm:block">
<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
<span className="material-symbols-outlined text-sm">search</span>
</span>
<input className="w-64 rounded-lg border-none bg-slate-100 dark:bg-slate-800 py-2 pl-10 pr-4 text-sm focus:ring-2 transition-all focus:ring-[#f39c12]" placeholder="Rechercher un service..." type="text"/>
</div>
<button className="rounded-lg px-5 py-2 text-sm font-bold text-white transition-colors bg-[#f39c12] hover:bg-[#f39c12]/90">Connexion</button>
</div>
</div>
</div>
</header>
<main className="flex-grow">
{/*  Hero Section  */}
<section className="relative h-[450px] w-full overflow-hidden">
<div className="absolute inset-0 bg-slate-900/40 z-10"></div>
<img alt="Electrician at work" className="h-full w-full object-cover" data-alt="Professional electrician working on a fuse box" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3GPfsfxp_J7HrDQpWsw1cqF-LpbBUipZzrmr1CNt1gO3QsKtF_l0k2ooZm6ZJRs-DELKL-tEGpzNfBciWg3CmYZnAxdPEteSrQ0_Xt-E9Lj4WrQK8tLx79LgYuiz8qlomcwnMFt-Nw017HY7W1P2LF0NmVer9dR9cxoB8ILGb089IqsJHQIiEpCYLuQgt0boXvLJopcmHDsjq7IB_zJw9bBZ9SRZMUtw_M4a7ORP2CJ__wP5M1ar4BIYTzqEodED0ah_llI8U240H"/>
<div className="absolute inset-0 z-20 flex items-center">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
<div className="max-w-2xl bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20">
<h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Travaux d'Électricité</h1>
<p className="text-lg text-slate-100 mb-8">Installation, dépannage et mise aux normes par des experts certifiés. Un service rapide, transparent et garanti pour tous vos besoins électriques.</p>
<div className="flex gap-4">
<button className="rounded-lg px-8 py-3 font-bold text-white shadow-lg transition-transform active:scale-95 bg-[#f39c12] hover:bg-[#f39c12]/90">Réserver maintenant</button>
<button className="rounded-lg bg-white/20 px-8 py-3 font-bold text-white hover:bg-white/30 backdrop-blur shadow-lg transition-transform active:scale-95">Voir les tarifs</button>
</div>
</div>
</div>
</div>
</section>
{/*  How It Works  */}
<section className="py-16 bg-white dark:bg-slate-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl font-bold text-slate-900 dark:text-white">Comment ça marche</h2>
<p className="text-slate-500 mt-2">Votre projet électrique en 3 étapes simples</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="group relative p-8 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 transition-all hover:border-[#f39c12]/50">
<div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl group-hover:text-white transition-colors text-[#f39c12] group-hover:bg-[#f39c12] bg-[#f39c12]/10">
<span className="material-symbols-outlined text-3xl">event_available</span>
</div>
<h3 className="text-xl font-bold mb-3">1. Réservez</h3>
<p className="text-slate-600 dark:text-slate-400">Décrivez votre besoin et choisissez un créneau horaire en quelques clics sur notre plateforme.</p>
</div>
<div className="group relative p-8 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 transition-all hover:border-[#f39c12]/50">
<div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl group-hover:text-white transition-colors text-[#f39c12] group-hover:bg-[#f39c12] bg-[#f39c12]/10">
<span className="material-symbols-outlined text-3xl">badge</span>
</div>
<h3 className="text-xl font-bold mb-3">2. Choisissez</h3>
<p className="text-slate-600 dark:text-slate-400">Sélectionnez l'artisan qualifié parmi nos profils vérifiés selon leurs avis et tarifs.</p>
</div>
<div className="group relative p-8 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 transition-all hover:border-[#f39c12]/50">
<div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl group-hover:text-white transition-colors text-[#f39c12] group-hover:bg-[#f39c12] bg-[#f39c12]/10">
<span className="material-symbols-outlined text-3xl">verified</span>
</div>
<h3 className="text-xl font-bold mb-3">3. C'est fait</h3>
<p className="text-slate-600 dark:text-slate-400">L'électricien intervient à la date prévue. Payez en toute sécurité une fois les travaux terminés.</p>
</div>
</div>
</div>
</section>
{/*  Pricing & Details  */}
<section className="py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
<div>
<h2 className="text-3xl font-bold text-slate-900 dark:text-white">Nos Tarifs et Prestations</h2>
<p className="text-slate-500 mt-2">Prix transparents sans surprise</p>
</div>
<button className="font-semibold flex items-center gap-1 hover:underline text-[#f39c12]">
                            Voir tout le catalogue <span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<span className="material-symbols-outlined text-4xl text-[#f39c12]">build_circle</span>
<span className="text-sm font-bold px-3 py-1 rounded-full text-[#f39c12] bg-[#f39c12]/10">�DA partir de 50€</span>
</div>
<h3 className="text-lg font-bold mb-2">Diagnostic &amp; Réparation</h3>
<p className="text-slate-600 dark:text-slate-400 text-sm mb-6">Recherche de panne, remplacement de fusibles ou réparation de tableau électrique.</p>
<button className="w-full py-2 rounded-lg border font-bold hover:text-white transition-colors text-[#f39c12] border-[#f39c12] hover:bg-[#f39c12]">Sélectionner</button>
</div>
<div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<span className="material-symbols-outlined text-4xl text-[#f39c12]">light</span>
<span className="text-sm font-bold px-3 py-1 rounded-full text-[#f39c12] bg-[#f39c12]/10">�DA partir de 45€</span>
</div>
<h3 className="text-lg font-bold mb-2">Installation Luminaires</h3>
<p className="text-slate-600 dark:text-slate-400 text-sm mb-6">Pose de lustres, spots LED, appliques murales ou remplacement d'interrupteurs.</p>
<button className="w-full py-2 rounded-lg border font-bold hover:text-white transition-colors text-[#f39c12] border-[#f39c12] hover:bg-[#f39c12]">Sélectionner</button>
</div>
<div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<span className="material-symbols-outlined text-4xl text-[#f39c12]">security</span>
<span className="text-sm font-bold text-slate-500 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">Sur devis</span>
</div>
<h3 className="text-lg font-bold mb-2">Mise aux Normes</h3>
<p className="text-slate-600 dark:text-slate-400 text-sm mb-6">Mise en conformité totale NF C 15-100 de votre installation électrique.</p>
<button className="w-full py-2 rounded-lg text-white font-bold transition-colors bg-[#f39c12] hover:bg-[#f39c12]/90">Demander un devis</button>
</div>
</div>
</div>
</section>
{/*  Top Rated Electricians  */}
<section className="py-16 bg-slate-50 dark:bg-slate-800/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl font-bold text-slate-900 dark:text-white">Nos Experts à Proximité</h2>
<p className="text-slate-500 mt-2">Des professionnels qualifiés et notés par la communauté</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/*  Expert 1  */}
<div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-shadow">
<div className="h-48 overflow-hidden relative">
<img alt="Artisan Portrait" className="w-full h-full object-cover" data-alt="Professional electrician smiling in work uniform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfSZNR0w0WLOTtMZ4OWM_THrt4FpQtD3MLJJY-tv1moQqOPIbB-wWFKG0qZLUDyXokdMIV0dcvLXM0gtgHMmPmpafaCIKYn1Yx_Yuya-3vqO3D2NsILYGZn7oacdzOTOEV0BiA5wLZOMa36y4zy3le3XuHhO5BfsNVxUCnpl_d9s_GCdlyna1EyQmtL4GwDYkcjVY_KSNMXMY-YbaRL2azeVchGnfcqTURvK_oBxZdXpyxaOKZhdmp-rd4Fn6CinePeTAe9qSrMY70"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
<span className="material-symbols-outlined text-yellow-500 text-sm">star</span>
<span className="text-xs font-bold text-slate-900">4.9 (124 avis)</span>
</div>
</div>
<div className="p-6">
<h3 className="text-xl font-bold mb-1 text-slate-900 dark:text-white">Jean-Pierre Durand</h3>
<p className="text-sm font-medium mb-4 text-[#f39c12]">Électricien certifié - 15 ans d'exp.</p>
<p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-2">Spécialiste en domotique et rénovation complète. Travail soigné et respect des délais garanti.</p>
<button className="w-full py-3 rounded-xl text-white font-bold transition-all flex items-center justify-center gap-2 bg-[#f39c12] hover:bg-[#f39c12]/90">
<span className="material-symbols-outlined">calendar_today</span> Réserver
                                </button>
</div>
</div>
{/*  Expert 2  */}
<div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-shadow">
<div className="h-48 overflow-hidden relative">
<img alt="Artisan Portrait" className="w-full h-full object-cover" data-alt="Experienced craftsman standing in front of tools" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVVKJ5RuknaWdDEXLkpYOzoTTtbOOOv9tg_xRVTQ0oj-PJ4iPQc2p0_dDmj_c1BCdEGoldFbk-pjpI_WqL52nNN5tYhmAw3YrqVI9Mxn2-ZuXOchNz_RU2s5kUdyi7ErnLOs6hI2EioTjw3zn186onZ6fP_sFe6xPJOPXRJ0CiOqEIvv7l4IgRHi8wwt6brI5A8xmSF7Tt-F1vvvXaYkpVDLDKMz_MIX64HMGJ3jhswfdhn-6_Enlp_PPl93gWToMBnnSoZlUPQqtP"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
<span className="material-symbols-outlined text-yellow-500 text-sm">star</span>
<span className="text-xs font-bold text-slate-900">4.8 (89 avis)</span>
</div>
</div>
<div className="p-6">
<h3 className="text-xl font-bold mb-1 text-slate-900 dark:text-white">Marc Lefebvre</h3>
<p className="text-sm font-medium mb-4 text-[#f39c12]">Expert Dépannage Urgent</p>
<p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-2">Intervention rapide pour pannes de courant et courts-circuits. Disponible 7j/7 pour les urgences.</p>
<button className="w-full py-3 rounded-xl text-white font-bold transition-all flex items-center justify-center gap-2 bg-[#f39c12] hover:bg-[#f39c12]/90">
<span className="material-symbols-outlined">calendar_today</span> Réserver
                                </button>
</div>
</div>
{/*  Expert 3  */}
<div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-shadow">
<div className="h-48 overflow-hidden relative">
<img alt="Artisan Portrait" className="w-full h-full object-cover" data-alt="Young professional technician with toolbox" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUIdNjVQNug7Uyx8ye20eYuDUxeO8lowRYCYs90sd2giUDO8ts5X4XxUwRuXZJuZ7FNxLIf3tlEP4EmhEOFWzIr6bgXLTwVJ4aGil9iuhSrBuAOVTPzO9UvuPAJHqyCC9hb0p5zH5MzT09suCVhD_Ds425tFwmurgpmQgfd7U7W2FMRxoP7wn87KztAOES95O29brCzUDFPTaoglTZjueYKHvGMbNAG5_YihedrFQ9AMtUJmDlx7bvgbcKVB0r-JjwNoxcfPBcAMBb"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
<span className="material-symbols-outlined text-yellow-500 text-sm">star</span>
<span className="text-xs font-bold text-slate-900">5.0 (56 avis)</span>
</div>
</div>
<div className="p-6">
<h3 className="text-xl font-bold mb-1 text-slate-900 dark:text-white">Sofiane Amari</h3>
<p className="text-sm font-medium mb-4 text-[#f39c12]">Spécialiste Installation Neuve</p>
<p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-2">Expert en pose de tableaux électriques et bornes de recharge pour véhicules électriques.</p>
<button className="w-full py-3 rounded-xl text-white font-bold transition-all flex items-center justify-center gap-2 bg-[#f39c12] hover:bg-[#f39c12]/90">
<span className="material-symbols-outlined">calendar_today</span> Réserver
                                </button>
</div>
</div>
</div>
</div>
</section>
{/*  FAQ Section  */}
<section className="py-16 bg-white dark:bg-slate-900">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-10">Questions Fréquentes</h2>
<div className="space-y-4">
<details className="group bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4" open="">
<summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900 dark:text-white list-none">
<span>Quel est le délai d'intervention moyen ?</span>
<span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div className="mt-4 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                Pour les urgences (panne totale), nous intervenons généralement en moins de 2 heures. Pour les installations classiques, vous pouvez choisir un créneau sous 24h à 48h.
                            </div>
</details>
<details className="group bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
<summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900 dark:text-white list-none">
<span>Les pièces de rechange sont-elles incluses ?</span>
<span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div className="mt-4 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                Les prix affichés "�DA partir de" incluent le diagnostic et la main-d'œuvre de base. Le coût des pièces spécifiques (interrupteurs, disjoncteurs, câbles) est facturé en sus après validation du devis sur place.
                            </div>
</details>
<details className="group bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
<summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900 dark:text-white list-none">
<span>Comment s'effectue le paiement ?</span>
<span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div className="mt-4 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                Le paiement s'effectue directement en ligne de manière sécurisée ou via l'application une fois l'intervention terminée et validée par vos soins. Nous acceptons les cartes bancaires et les virements.
                            </div>
</details>
</div>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2 text-[#f39c12]" href="#">
<span className="material-symbols-outlined text-3xl">bolt</span>
<span className="text-xl font-bold text-slate-900 dark:text-white">ArtisanPro</span>
</a>
<p className="text-slate-500 dark:text-slate-400 max-w-xs mb-6">La plateforme de confiance pour tous vos travaux et dépannages à domicile. Des experts vérifiés, des tarifs justes.</p>
<div className="flex gap-4">
<a className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-white transition-colors hover:bg-[#f39c12]" href="#">
<span className="material-symbols-outlined text-xl">language</span>
</a>
<a className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-white transition-colors hover:bg-[#f39c12]" href="#">
<span className="material-symbols-outlined text-xl">share</span>
</a>
</div>
</div>
<div>
<h4 className="font-bold mb-6 text-slate-900 dark:text-white">Services</h4>
<ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
<li><a className="transition-colors hover:text-[#f39c12]" href="#">Électricité</a></li>
<li><a className="transition-colors hover:text-[#f39c12]" href="#">Plomberie</a></li>
<li><a className="transition-colors hover:text-[#f39c12]" href="#">Chauffage</a></li>
<li><a className="transition-colors hover:text-[#f39c12]" href="#">Peinture</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-6 text-slate-900 dark:text-white">Entreprise</h4>
<ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
<li><a className="transition-colors hover:text-[#f39c12]" href="#">�DA propos</a></li>
<li><a className="transition-colors hover:text-[#f39c12]" href="#">Recrutement</a></li>
<li><a className="transition-colors hover:text-[#f39c12]" href="#">Blog</a></li>
<li><a className="transition-colors hover:text-[#f39c12]" href="#">Presse</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-6 text-slate-900 dark:text-white">Support</h4>
<ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
<li><a className="transition-colors hover:text-[#f39c12]" href="#">Centre d'aide</a></li>
<li><a className="transition-colors hover:text-[#f39c12]" href="#">Contact</a></li>
<li><a className="transition-colors hover:text-[#f39c12]" href="#">Sécurité</a></li>
<li><a className="transition-colors hover:text-[#f39c12]" href="#">Conditions</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
<p>© 2024 ArtisanPro. Tous droits réservés.</p>
<div className="flex gap-6">
<a className="hover:text-[#f39c12]" href="#">Confidentialité</a>
<a className="hover:text-[#f39c12]" href="#">Mentions légales</a>
<a className="hover:text-[#f39c12]" href="#">Cookies</a>
</div>
</div>
</div>
</footer>
</div>

    </>
  );
};

export default DTailsDuServiceElectricite;
