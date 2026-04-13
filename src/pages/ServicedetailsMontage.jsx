import React from 'react';

const ServicedetailsMontage = () => {
  return (
    <>
      
<div className="relative flex min-h-screen flex-col">
{/*  Top Navigation  */}
<header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
<span className="material-symbols-outlined">shelves</span>
</div>
<span className="text-xl font-bold tracking-tight text-slate-900">BricolagePro</span>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium hover:text-primary transition-colors" href="#">Services</a>
<a className="text-sm font-medium hover:text-primary transition-colors" href="#">Comment Ã§a marche</a>
<a className="text-sm font-medium hover:text-primary transition-colors" href="#">Tarifs</a>
</nav>
<div className="flex items-center gap-4">
<button className="flex items-center justify-center rounded-lg p-2 text-slate-500 hover:bg-slate-100">
<span className="material-symbols-outlined">search</span>
</button>
<button className="hidden sm:flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white transition-opacity hover:opacity-90">
                        RÃ©server un Jobber
                    </button>
</div>
</div>
</header>
<main className="flex-1">
{/*  Hero Section  */}
<section className="relative px-4 py-8 sm:px-6 lg:px-8 max-w-7xl mx-auto">
<div className="overflow-hidden rounded-xl bg-slate-900 shadow-2xl">
<div className="relative min-h-[400px] w-full flex items-end">
<div className="absolute inset-0 opacity-60">
<img className="h-full w-full object-cover" data-alt="Modern minimalist wooden shelving unit being assembled" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlibtVFj92m-9RMCy92j7LgEhpuIuoVeWSx5GhIWFaYqrHv1TrEuZg6SLRMQ0CVFm_QwgB36VgYTdaoFqLdQzTc53JPBCRZtiu4CTaiE2EACtcjfhELbLEKudDwzTgyrcc6e21wDHL8R020skfOHaHvQpNRZsjmLpwvp5x8O-rUoYR-RzDev08MctGYLGv0MEYXrlqc4LAxi1GlTXPVrpGUqmv5yA9KY2HUZP8inEW2wZ5HuJXCTI_eoHt8YGXqPuZGXa3Gwfg1l30"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
</div>
<div className="relative z-10 p-8 sm:p-12 w-full max-w-2xl">
<div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary ring-1 ring-inset ring-primary/30">
                                Montage de meubles
                            </div>
<h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                                Montage d'Ã©tagÃ¨res par des experts
                            </h1>
<p className="mt-6 text-lg leading-8 text-slate-300">
                                Confiez l'installation de vos Ã©tagÃ¨res IKEA, Conforama et Leroy Merlin Ã  nos bricoleurs qualifiÃ©s. SÃ©curisÃ©, rapide et garanti.
                            </p>
</div>
</div>
</div>
</section>
{/*  Content Grid  */}
<section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
{/*  Main Content  */}
<div className="lg:col-span-2 space-y-12">
{/*  Breadcrumbs  */}
<nav className="flex text-sm font-medium text-slate-500">
<a className="hover:text-primary" href="#">Accueil</a>
<span className="mx-2 text-slate-300">/</span>
<a className="hover:text-primary" href="#">Montage de meubles</a>
<span className="mx-2 text-slate-300">/</span>
<span className="text-slate-900">Ã‰tagÃ¨res</span>
</nav>
{/*  Expert Badges  */}
<div className="flex flex-wrap gap-3">
<span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-4 py-2 text-sm font-semibold">
<span className="material-symbols-outlined text-primary text-lg">verified</span> IKEA Kallax &amp; Billy
                            </span>
<span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-4 py-2 text-sm font-semibold">
<span className="material-symbols-outlined text-primary text-lg">verified</span> Conforama Experts
                            </span>
<span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-4 py-2 text-sm font-semibold">
<span className="material-symbols-outlined text-primary text-lg">verified</span> Fixation Murale SÃ©curisÃ©e
                            </span>
</div>
{/*  Service Details  */}
<div className="prose prose-slate max-w-none">
<h2 className="text-2xl font-bold text-slate-900">Ce que nos Taskers proposent</h2>
<p className="mt-4 text-slate-600 leading-relaxed">
                                Monter une Ã©tagÃ¨re peut sembler simple, mais assurer sa stabilitÃ© et sa sÃ©curitÃ©, surtout lorsqu'il s'agit de fixations murales, demande un savoir-faire prÃ©cis. Nos experts interviennent pour :
                            </p>
<ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 list-none p-0">
<li className="flex gap-x-3 text-slate-600">
<span className="material-symbols-outlined text-primary">check_circle</span>
                                    DÃ©ballage et inventaire des piÃ¨ces
                                </li>
<li className="flex gap-x-3 text-slate-600">
<span className="material-symbols-outlined text-primary">check_circle</span>
                                    Assemblage structurel complet
                                </li>
<li className="flex gap-x-3 text-slate-600">
<span className="material-symbols-outlined text-primary">check_circle</span>
                                    Fixation murale sÃ©curisÃ©e (si requis)
                                </li>
<li className="flex gap-x-3 text-slate-600">
<span className="material-symbols-outlined text-primary">check_circle</span>
                                    Nettoyage de la zone d'intervention
                                </li>
</ul>
</div>
{/*  Reviews Section  */}
<div className="pt-8 border-t border-slate-200">
<h2 className="text-2xl font-bold text-slate-900 mb-8">Avis clients sur le montage d'Ã©tagÃ¨res</h2>
<div className="space-y-6">
<div className="rounded-xl bg-white p-6 shadow-sm border border-slate-100">
<div className="flex items-center gap-4 mb-4">
<div className="h-10 w-10 rounded-full bg-slate-200" data-alt="Client profile picture" ></div>
<div>
<p className="font-bold">Sophie L.</p>
<div className="flex text-yellow-400">
<span className="material-symbols-outlined text-sm">star</span>
<span className="material-symbols-outlined text-sm">star</span>
<span className="material-symbols-outlined text-sm">star</span>
<span className="material-symbols-outlined text-sm">star</span>
<span className="material-symbols-outlined text-sm">star</span>
</div>
</div>
</div>
<p className="text-slate-600 italic">"Parfait ! Jean a montÃ© 3 Ã©tagÃ¨res Billy en un temps record. La fixation au mur est impeccable et trÃ¨s solide. Je recommande vivement."</p>
</div>
<div className="rounded-xl bg-white p-6 shadow-sm border border-slate-100">
<div className="flex items-center gap-4 mb-4">
<div className="h-10 w-10 rounded-full bg-slate-200" data-alt="Client profile picture" ></div>
<div>
<p className="font-bold">Marc D.</p>
<div className="flex text-yellow-400">
<span className="material-symbols-outlined text-sm">star</span>
<span className="material-symbols-outlined text-sm">star</span>
<span className="material-symbols-outlined text-sm">star</span>
<span className="material-symbols-outlined text-sm">star</span>
<span className="material-symbols-outlined text-sm">star</span>
</div>
</div>
</div>
<p className="text-slate-600 italic">"Expert trÃ¨s mÃ©ticuleux pour mon meuble Kallax. Service propre et courtois."</p>
</div>
</div>
</div>
</div>
{/*  Sidebar: Pricing & Booking  */}
<div className="lg:col-span-1">
<div className="sticky top-24 space-y-6">
<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">
<h3 className="text-lg font-bold text-slate-900">Estimation de prix</h3>
<div className="mt-6 space-y-4">
<div className="flex justify-between items-center p-3 rounded-lg bg-slate-50">
<span className="text-sm font-medium">Ã€ l'unitÃ©</span>
<span className="text-lg font-bold text-primary">DÃ¨s 15â‚¬</span>
</div>
<div className="flex justify-between items-center p-3 rounded-lg bg-slate-50">
<span className="text-sm font-medium">Taux horaire</span>
<span className="text-lg font-bold text-primary">25â‚¬ / h</span>
</div>
</div>
<p className="mt-4 text-xs text-slate-500 text-center italic">Le prix final dÃ©pend du nombre d'unitÃ©s et de la complexitÃ©.</p>
<button className="mt-8 w-full rounded-xl bg-primary py-4 text-center text-sm font-bold text-white shadow-lg shadow-primary/25 transition-transform hover:scale-[1.02]">
                                    Trouver un expert
                                </button>
<div className="mt-6 space-y-3">
<div className="flex items-center gap-3 text-sm text-slate-600">
<span className="material-symbols-outlined text-green-500">verified_user</span>
                                        Assurance casse incluse
                                    </div>
<div className="flex items-center gap-3 text-sm text-slate-600">
<span className="material-symbols-outlined text-green-500">schedule</span>
                                        Intervention sous 24/48h
                                    </div>
</div>
</div>
{/*  Trust Pilot Placeholder  */}
<div className="rounded-xl border border-slate-200 p-4 flex items-center justify-between">
<div>
<p className="text-xs font-bold uppercase tracking-widest text-slate-400">Excellent</p>
<div className="flex text-green-500">
<span className="material-symbols-outlined">star</span>
<span className="material-symbols-outlined">star</span>
<span className="material-symbols-outlined">star</span>
<span className="material-symbols-outlined">star</span>
<span className="material-symbols-outlined">star</span>
</div>
</div>
<div className="text-right">
<p className="text-sm font-bold">4.8/5</p>
<p className="text-xs text-slate-500">sur 1,240 avis</p>
</div>
</div>
</div>
</div>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="mt-20 border-t border-slate-200 bg-white py-12 px-4">
<div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-white">
<span className="material-symbols-outlined text-sm">shelves</span>
</div>
<span className="text-lg font-bold">BricolagePro</span>
</div>
<p className="text-sm text-slate-500">Votre partenaire de confiance pour tous vos petits travaux de montage Ã  domicile.</p>
</div>
<div>
<h4 className="font-bold mb-4">Services</h4>
<ul className="text-sm space-y-2 text-slate-500">
<li><a className="hover:text-primary" href="#">Montage Meubles</a></li>
<li><a className="hover:text-primary" href="#">Fixation Murale</a></li>
<li><a className="hover:text-primary" href="#">DÃ©mÃ©nagement</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-4">SociÃ©tÃ©</h4>
<ul className="text-sm space-y-2 text-slate-500">
<li><a className="hover:text-primary" href="#">Ã€ propos</a></li>
<li><a className="hover:text-primary" href="#">Jobs</a></li>
<li><a className="hover:text-primary" href="#">Presse</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-4">Aide</h4>
<ul className="text-sm space-y-2 text-slate-500">
<li><a className="hover:text-primary" href="#">FAQ</a></li>
<li><a className="hover:text-primary" href="#">Contact</a></li>
<li><a className="hover:text-primary" href="#">SÃ©curitÃ©</a></li>
</ul>
</div>
</div>
<div className="mx-auto max-w-7xl mt-12 pt-8 border-t border-slate-100 text-center text-xs text-slate-400">
                Â© 2024 BricolagePro Inc. Tous droits rÃ©servÃ©s.
            </div>
</footer>
</div>

    </>
  );
};

export default ServicedetailsMontage;

