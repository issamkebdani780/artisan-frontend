import React from 'react';

const DTailsDuServicePeinture = () => {
  return (
    <>
      
<div className="relative flex h-auto min-screen w-full flex-col group/design-root overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
{/*  Top Navigation Bar  */}
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 px-6 md:px-20 py-3 bg-white sticky top-0 z-50">
<div className="flex items-center gap-4 text-slate-900">
<div className="size-6 text-primary">
<span className="material-symbols-outlined text-3xl">format_paint</span>
</div>
<h2 className="text-lg font-bold leading-tight tracking-tight">Services de Peinture</h2>
</div>
<div className="hidden md:flex flex-1 justify-end gap-8">
<nav className="flex items-center gap-9">
<a className="text-sm font-medium hover:text-primary transition-colors" href="#">Services</a>
<a className="text-sm font-medium hover:text-primary transition-colors" href="#">Tarifs</a>
<a className="text-sm font-medium hover:text-primary transition-colors" href="#">Experts</a>
<a className="text-sm font-medium hover:text-primary transition-colors" href="#">FAQ</a>
</nav>
<div className="flex items-center gap-4">
<button className="flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold transition-opacity hover:opacity-90">
                            Réserver
                        </button>
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-slate-200" data-alt="Photo de profil de l'utilisateur" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDMUViRGgYuSNVvRF1vi37NgTmYyGR5qKiuB32Swyl0_FxpZT2lk-gzcsiKHTAUFy_yug6Id-zrd6nlko_pinZeiH9BxhtvkdzMlkd9PwkZVE6KkksW6TNhCzJ-V9ZSlEPFOqNBPOAoi4d63PsFQ6lwTHscHPYkODUinLjmgZfjlh_6T1b2cKN5DfmBv0kdJ7C618yOh2q1mdJs210W8m0bjj3gTE5cXrtLEcAeLwkcqKiUZR0aC9qrOdFfXh4K4utkaE7wWpV7iU1x");'></div>
</div>
</div>
</header>
<main className="flex flex-col flex-1 max-w-[1200px] mx-auto w-full px-4 py-8">
{/*  Hero Section  */}
<section className="w-full mb-12">
<div className="relative min-h-[480px] flex flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-start justify-end px-6 pb-12 md:px-12 md:pb-16 overflow-hidden" data-alt="Professionnel peignant un mur blanc dans une chambre moderne" style='background-image: linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBSq8r3GJF9DrszodNu8ZtKZUXwe9n75Bp1MG8J7b2XMgHUM0D9fTCDlJ9G7NoggOi3pxJm91mmByjZLzxbaHcyHkh2S4_t5ga_PujGPBbaugo7x_OFhuu98MJ4H9-j5oNMrmBBSCU-YTDE1Ql2uHR_Q80_0zRoI0JDLsxtMPM3vridYFOH5Y1WOTAITDljj-tsDYDl9yTux0k3ZnW1F_sdcfG8xOKYmUjOEpJysvYcrDhn99LS2c3JW7WQiOJvJctF9RBK-AJS_tp_");'>
<div className="flex flex-col gap-4 max-w-2xl">
<h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight">
                                Services de Peinture Professionnels
                            </h1>
<p className="text-white/90 text-base md:text-lg font-normal leading-relaxed">
                                Travaux de peinture intérieure, extérieure et pose de papier peint par des experts certifiés pour tous vos projets de rénovation et décoration.
                            </p>
</div>
<div className="flex flex-wrap gap-4 mt-4">
<button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold shadow-lg transition-transform hover:scale-[1.02]">
                                Réserver maintenant
                            </button>
<button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-white/20 backdrop-blur-md text-white border border-white/30 text-base font-bold hover:bg-white/30 transition-colors">
                                Voir les tarifs
                            </button>
</div>
</div>
</section>
{/*  How it Works Section  */}
<section className="mb-16">
<h2 className="text-slate-900 text-3xl font-bold leading-tight mb-8">Comment ça marche</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-8 hover:shadow-md transition-shadow">
<div className="text-primary bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-3xl">calendar_month</span>
</div>
<div className="flex flex-col gap-2">
<h3 className="text-slate-900 text-xl font-bold">1. Réservez</h3>
<p className="text-slate-600 text-sm leading-relaxed">Choisissez votre type de projet, la surface à peindre et votre date idéale en quelques clics.</p>
</div>
</div>
<div className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-8 hover:shadow-md transition-shadow">
<div className="text-primary bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-3xl">person_search</span>
</div>
<div className="flex flex-col gap-2">
<h3 className="text-slate-900 text-xl font-bold">2. Choisissez</h3>
<p className="text-slate-600 text-sm leading-relaxed">Sélectionnez un peintre qualifié parmi nos experts certifiés en consultant leurs avis et réalisations.</p>
</div>
</div>
<div className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-8 hover:shadow-md transition-shadow">
<div className="text-primary bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-3xl">format_paint</span>
</div>
<div className="flex flex-col gap-2">
<h3 className="text-slate-900 text-xl font-bold">3. C'est peint</h3>
<p className="text-slate-600 text-sm leading-relaxed">Le peintre arrive à l'heure prévue, protège votre mobilier et réalise vos travaux avec soin.</p>
</div>
</div>
</div>
</section>
{/*  Rates and Details Section  */}
<section className="mb-16">
<div className="flex justify-between items-end mb-8">
<div>
<h2 className="text-slate-900 text-3xl font-bold leading-tight">Nos Tarifs et Prestations</h2>
<p className="text-slate-600 mt-2">Prix estimés par mÂ² incluant la main d'Ã…â€œuvre et le matériel de base.</p>
</div>
<a className="text-primary font-bold hover:underline hidden md:block" href="#">Voir tout le catalogue</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{/*  Card 1  */}
<div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
<div className="h-48 bg-cover bg-center" data-alt="Intérieur d'un salon fraîchement peint en bleu clair" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAgxlppfyTjEytKDYfbWrShK7YmEiMeTTQ6X0BX-SuB8RC0dM6-AjYiqEEaKpmMBYW0KpcTaTNOKNJyHVfU50m_-JUkga1oj1qw2rlY7c3b62A0L1xv8B3Q4bpGQ_-9KFL-D4M9xDS6bHFRK-UQi8OszLBeupi_-rK7q44AMo0f8CbEptJJmu5fwm4p1aOqa-cphaaTUKVj9X95p5QQVPblSIsr2tjRqvBzCXYnM0c4dwQf3QG8_vRGFH715-5cmfHAoJRErG4hHTH9");'></div>
<div className="p-6">
<div className="flex items-center gap-2 mb-3">
<span className="material-symbols-outlined text-primary">wall_art</span>
<span className="text-xs font-bold uppercase tracking-wider text-slate-500">Murs Intérieurs</span>
</div>
<h3 className="text-xl font-bold mb-2">Peinture Intérieure (mÂ²)</h3>
<p className="text-slate-600 text-sm mb-4">Application de deux couches de peinture acrylique haute qualité.</p>
<div className="flex items-baseline gap-1 border-t border-slate-100 pt-4">
<span className="text-sm text-slate-500">à partir de</span>
<span className="text-2xl font-black text-primary">15â‚¬</span>
<span className="text-sm text-slate-500">/ mÂ²</span>
</div>
</div>
</div>
{/*  Card 2  */}
<div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
<div className="h-48 bg-cover bg-center" data-alt="Plafond blanc immaculé avec éclairage moderne" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBc_lL7d7YDSO0JDzCqAd0h-1ySf8iG_8Chhdd-ZOkuFDWmW_iPLn5OitFlrbq0L90tmfZgHkvWCU21_5TuCINQEEZyiN3j0trUwqboZegld5-85FP-y7EPB2YUvCQjsOehIHbRtqN9p6S3-EAlxGPS6QxQVrofU1iFWBULBxIM08tkwS_Nzjgfp6Y_40A4Vs-Zq_X3xyDv5mglAEt0JAX0WpFxVrvQRGymRtfdhDZ4-_EUnYIowhWG-3QFs4Gbhes8JYdBugJOeZoE");'></div>
<div className="p-6">
<div className="flex items-center gap-2 mb-3">
<span className="material-symbols-outlined text-primary">layers</span>
<span className="text-xs font-bold uppercase tracking-wider text-slate-500">Plafonds</span>
</div>
<h3 className="text-xl font-bold mb-2">Peinture Plafond</h3>
<p className="text-slate-600 text-sm mb-4">Traitement des fissures et peinture mate anti-traces.</p>
<div className="flex items-baseline gap-1 border-t border-slate-100 pt-4">
<span className="text-sm text-slate-500">à partir de</span>
<span className="text-2xl font-black text-primary">20â‚¬</span>
<span className="text-sm text-slate-500">/ mÂ²</span>
</div>
</div>
</div>
{/*  Card 3  */}
<div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
<div className="h-48 bg-cover bg-center" data-alt="Pose de papier peint à motif géométrique sur un mur" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBPqq3zsKjAGQzPKZDYSQgraM_THFGQonlsg43oTrYZB72lYBzHVchZBR2YgqEOtMSSlHBgcK4CI0n6W7Jb7t-CZkAsO7_tAG6m8aB6L2v0GroKuMerV4-Gfuk4RXoEOUl0romUAJb0mROZyBSD_r-P4CD91QiyW4fSGXH_tBjo2pQB67dnA1lnWzE0dgeyK_Barnjfg-Nwd__9CDmF3UNEuDFBIlMEyez-LOxPZXYLTpd59nBZB0zfH__b9ASKHiTBW2M18M6XYmMC");'></div>
<div className="p-6">
<div className="flex items-center gap-2 mb-3">
<span className="material-symbols-outlined text-primary">grid_view</span>
<span className="text-xs font-bold uppercase tracking-wider text-slate-500">Décoration</span>
</div>
<h3 className="text-xl font-bold mb-2">Pose de Papier Peint</h3>
<p className="text-slate-600 text-sm mb-4">Préparation des supports et pose soignée de papier peint ou intissé.</p>
<div className="flex items-baseline gap-1 border-t border-slate-100 pt-4">
<span className="text-sm text-slate-500">à partir de</span>
<span className="text-2xl font-black text-primary">25â‚¬</span>
<span className="text-sm text-slate-500">/ mÂ²</span>
</div>
</div>
</div>
</div>
</section>
{/*  Top Expert Painters  */}
<section className="mb-16">
<h2 className="text-slate-900 text-3xl font-bold leading-tight mb-8">Nos Experts en Peinture</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{/*  Expert 1  */}
<div className="flex flex-col items-center bg-white p-8 rounded-xl border border-slate-200 text-center">
<div className="relative mb-4">
<div className="size-24 rounded-full bg-cover bg-center border-4 border-primary/20" data-alt="Portrait de Marc L., peintre professionnel" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAjT4BFeQtJ3XVxb6BIHLByaozT9DENGMGDgcMxG7idE-rsWTZH5X3lm3kvxAYtmLp0oIT1aU_SjSgvzo5H0REwUlaGwZITwJI97m2Zr-aW4xwWZRco_Q-Y_zRwjttKmi-Xaz0PWx8b02Ns-zFQDnOYsqTL5W26tAVYtgTQekhbKJ32QgG-3Y9zPtPoxiTLdqqAw4SucNAJFERQj6EkK40WmX0rtOz0stUeut4UPc-y6UZfh2lr1240qOjkehje06JPOqnDF-Nhaspu");'></div>
<div className="absolute bottom-0 right-0 bg-green-500 size-5 rounded-full border-2 border-white"></div>
</div>
<h3 className="text-lg font-bold">Marc L.</h3>
<div className="flex items-center gap-1 text-yellow-500 my-1">
<span className="material-symbols-outlined fill-1 text-sm">star</span>
<span className="text-sm font-bold text-slate-900">4.9</span>
<span className="text-xs text-slate-500 font-normal">(124 avis)</span>
</div>
<p className="text-slate-500 text-sm mb-6">Expert en peinture décorative - 12 ans d'expérience</p>
<button className="w-full py-2.5 rounded-lg bg-primary/10 text-primary font-bold hover:bg-primary hover:text-white transition-colors">Réserver Marc</button>
</div>
{/*  Expert 2  */}
<div className="flex flex-col items-center bg-white p-8 rounded-xl border border-slate-200 text-center shadow-lg ring-2 ring-primary">
<div className="relative mb-4">
<div className="size-24 rounded-full bg-cover bg-center border-4 border-primary/20" data-alt="Portrait de Sophie T., peintre experte" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCkh-sHydOP1N-7inrWYqSDSni7ecr3sHEe1S7x6kIVjBRfcOHgETd9ZWyNEyIImGh2Y4Hu5xVWw2Hw3su-lT7c3nYVdYWdFJEq74P6176fduItGvaBBKYvXS01Cqf4l1VjEREKAbS5TKTGs8UFmCt8Jo9TqvyJP-99Y29jwMF0Axi5UmMXgtWxD1xKmOtsHvUBCSNsPdhCXft6BkghNUhVPTjMTIgLwtJzXWyuQYjQgeLDtJD7O09bXXOYlGXDSq8dZYCguS5Vzd-n");'></div>
<div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] px-2 py-1 rounded-full font-bold uppercase">Le plus demandé</div>
<div className="absolute bottom-0 right-0 bg-green-500 size-5 rounded-full border-2 border-white"></div>
</div>
<h3 className="text-lg font-bold">Thomas D.</h3>
<div className="flex items-center gap-1 text-yellow-500 my-1">
<span className="material-symbols-outlined fill-1 text-sm">star</span>
<span className="text-sm font-bold text-slate-900">5.0</span>
<span className="text-xs text-slate-500 font-normal">(89 avis)</span>
</div>
<p className="text-slate-500 text-sm mb-6">Spécialiste rénovation plafonds - 8 ans d'expérience</p>
<button className="w-full py-2.5 rounded-lg bg-primary text-white font-bold hover:opacity-90 transition-opacity">Réserver Thomas</button>
</div>
{/*  Expert 3  */}
<div className="flex flex-col items-center bg-white p-8 rounded-xl border border-slate-200 text-center">
<div className="relative mb-4">
<div className="size-24 rounded-full bg-cover bg-center border-4 border-primary/20" data-alt="Portrait de Sophie T., peintre experte" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDqMauWUP3drsUoCCep038ey2eC-icDjYHngrs64jVo-26_DzHWWEu1ZcsLyEba3e1-QjOc-_QG6Df74aAwglbVzGV55kVfm7P2vADc_yC8s13TjIkAkmmmoClNlKmqntZVRhf_jCFftcN-H2aceu-K7XdMBFWdZgEuN3XeLa24AdETdWoJUdVjMfJV2lNZ7S-x3Meqkc1-VKFXTTYFBICL0EbKSodfJ3OurDbdvjQu9h1QLItNbPQv6Cetor7rFWWWMytU3wvQcrL7");'></div>
<div className="absolute bottom-0 right-0 bg-green-500 size-5 rounded-full border-2 border-white"></div>
</div>
<h3 className="text-lg font-bold">Sophie T.</h3>
<div className="flex items-center gap-1 text-yellow-500 my-1">
<span className="material-symbols-outlined fill-1 text-sm">star</span>
<span className="text-sm font-bold text-slate-900">4.8</span>
<span className="text-xs text-slate-500 font-normal">(210 avis)</span>
</div>
<p className="text-slate-500 text-sm mb-6">Experte papier peint &amp; panoramiques - 15 ans d'expérience</p>
<button className="w-full py-2.5 rounded-lg bg-primary/10 text-primary font-bold hover:bg-primary hover:text-white transition-colors">Réserver Sophie</button>
</div>
</div>
</section>
{/*  FAQ Section  */}
<section className="mb-16">
<h2 className="text-slate-900 text-3xl font-bold leading-tight mb-8">Questions fréquentes</h2>
<div className="space-y-4 max-w-3xl">
<details className="group border border-slate-200 rounded-xl bg-white overflow-hidden" open="">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="text-lg font-bold">Quel type de peinture utilisez-vous ?</span>
<span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div className="p-6 pt-0 text-slate-600 border-t border-slate-100">
                                Nous utilisons principalement des peintures acryliques de marques professionnelles (Zolpan, Tollens, Little Greene) respectueuses de l'environnement (Ecolabel) et à faible émission de COV.
                            </div>
</details>
<details className="group border border-slate-200 rounded-xl bg-white overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="text-lg font-bold">La peinture est-elle incluse dans le prix ?</span>
<span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div className="p-6 pt-0 text-slate-600 border-t border-slate-100">
                                Le tarif par mÂ² inclut la peinture blanche standard pour les sous-couches. Pour les couleurs spécifiques, vous pouvez soit les fournir vous-mÃªme, soit demander à l'expert de les acheter pour vous (un supplément s'appliquera alors selon le prix de la peinture choisie).
                            </div>
</details>
<details className="group border border-slate-200 rounded-xl bg-white overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="text-lg font-bold">Combien de temps faut-il pour peindre une pièce ?</span>
<span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div className="p-6 pt-0 text-slate-600 border-t border-slate-100">
                                En moyenne, pour une pièce de 12-15mÂ² comprenant les murs et le plafond, il faut compter entre 1 et 2 jours de travail, incluant la protection des meubles, la préparation des surfaces et le temps de séchage entre les couches.
                            </div>
</details>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="bg-white border-t border-slate-200 mt-auto">
<div className="max-w-[1200px] mx-auto px-6 py-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="flex flex-col gap-4">
<div className="flex items-center gap-2 text-primary">
<span className="material-symbols-outlined">format_paint</span>
<span className="font-bold text-xl tracking-tight text-slate-900">Services Peinture</span>
</div>
<p className="text-slate-500 text-sm leading-relaxed">
                                Votre plateforme de confiance pour trouver les meilleurs artisans peintres près de chez vous.
                            </p>
</div>
<div>
<h4 className="font-bold mb-4">Services</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-primary transition-colors" href="#">Peinture Murale</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Peinture Plafond</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Papier Peint</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Façade Extérieure</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-4">Entreprise</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-primary transition-colors" href="#">Ã€ propos</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Notre équipe</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Avis clients</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-4">Nous suivre</h4>
<div className="flex gap-4 mb-6">
<a className="size-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#">
<svg className="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
</a>
<a className="size-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#">
<svg className="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.848 0-3.204.012-3.584.07-4.849.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
</a>
</div>
<div className="flex items-center gap-2 text-sm text-slate-500 cursor-pointer hover:text-primary">
<span className="material-symbols-outlined text-base">language</span>
<span>Français (France)</span>
</div>
</div>
</div>
<div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
<p>Â© 2024 Services de Peinture SAS. Tous droits réservés.</p>
<div className="flex gap-6">
<a className="hover:text-slate-600" href="#">Confidentialité</a>
<a className="hover:text-slate-600" href="#">Conditions d'utilisation</a>
<a className="hover:text-slate-600" href="#">Mentions légales</a>
</div>
</div>
</div>
</footer>
</div>
</div>

    </>
  );
};

export default DTailsDuServicePeinture;

