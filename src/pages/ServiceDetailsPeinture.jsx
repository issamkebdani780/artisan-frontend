import React from 'react';

const ServiceDetailsPeinture = () => {
  return (
    <>
      
<div className="relative flex min-h-screen flex-col">
{/*  Top Navigation Bar  */}
<header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
<span className="material-symbols-outlined">format_paint</span>
</div>
<h2 className="text-xl font-bold tracking-tight text-slate-900">Peinture</h2>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Accueil</a>
<a className="text-sm font-semibold text-primary" href="#">Services</a>
<a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Réalisations</a>
<a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Blog</a>
<a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Contact</a>
</nav>
<div className="flex items-center gap-4">
<button className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-600 hover:text-primary transition-colors">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="hidden sm:flex h-10 items-center justify-center rounded-lg bg-primary px-6 text-sm font-bold text-white shadow-sm hover:bg-primary/90 transition-all">
                        Connexion
                    </button>
</div>
</div>
</header>
<main className="mx-auto w-full max-w-7xl flex-grow px-4 py-8 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
{/*  Content Column  */}
<div className="lg:col-span-8">
{/*  Hero Section  */}
<div className="overflow-hidden rounded-xl bg-white shadow-sm border border-primary/5">
<div className="relative h-64 w-full sm:h-96">
<div className="absolute inset-0 bg-cover bg-center" data-alt="Modern interior being painted with rollers" ></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 sm:p-10">
<h1 className="text-3xl font-black leading-tight text-white sm:text-5xl">
                                    Peinture Intérieure et Décoration
                                </h1>
<p className="mt-4 max-w-xl text-lg text-slate-200">
                                    Transformez votre espace avec nos experts en décoration et peinture de haute qualité.
                                </p>
</div>
</div>
</div>
{/*  Statistics Grid  */}
<div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
<div className="flex flex-col items-center justify-center rounded-xl border border-primary/10 bg-white p-6 shadow-sm">
<span className="text-sm font-medium text-slate-500">Surfaces peintes</span>
<p className="mt-1 text-3xl font-black text-primary">10k+ mÂ²</p>
</div>
<div className="flex flex-col items-center justify-center rounded-xl border border-primary/10 bg-white p-6 shadow-sm">
<span className="text-sm font-medium text-slate-500">Satisfaction</span>
<p className="mt-1 text-3xl font-black text-primary">99%</p>
</div>
<div className="flex flex-col items-center justify-center rounded-xl border border-primary/10 bg-white p-6 shadow-sm">
<span className="text-sm font-medium text-slate-500">Garantie</span>
<p className="mt-1 text-3xl font-black text-primary">5 ans</p>
</div>
</div>
{/*  Our Services  */}
<section className="mt-12">
<div className="flex items-center justify-between mb-6">
<h2 className="text-2xl font-bold tracking-tight">Nos Services</h2>
<button className="text-sm font-semibold text-primary hover:underline">Voir tout</button>
</div>
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
<div className="group relative overflow-hidden rounded-xl bg-white shadow-sm border border-primary/5 transition-all hover:shadow-md">
<div className="aspect-video w-full bg-cover bg-center transition-transform group-hover:scale-105" data-alt="Painting living room walls white" ></div>
<div className="p-4">
<h3 className="font-bold text-lg">Peinture murs</h3>
<p className="text-sm text-slate-500 mt-1">Finition impeccable pour vos espaces de vie.</p>
</div>
</div>
<div className="group relative overflow-hidden rounded-xl bg-white shadow-sm border border-primary/5 transition-all hover:shadow-md">
<div className="aspect-video w-full bg-cover bg-center transition-transform group-hover:scale-105" data-alt="Professional painting a white ceiling" ></div>
<div className="p-4">
<h3 className="font-bold text-lg">Plafonds</h3>
<p className="text-sm text-slate-500 mt-1">Redonnez de la luminosité à vos pièces.</p>
</div>
</div>
<div className="group relative overflow-hidden rounded-xl bg-white shadow-sm border border-primary/5 transition-all hover:shadow-md">
<div className="aspect-video w-full bg-cover bg-center transition-transform group-hover:scale-105" data-alt="Elegant floral wallpaper being applied" ></div>
<div className="p-4">
<h3 className="font-bold text-lg">Papier peint</h3>
<p className="text-sm text-slate-500 mt-1">Pose soignée de revÃªtements muraux.</p>
</div>
</div>
<div className="group relative overflow-hidden rounded-xl bg-white shadow-sm border border-primary/5 transition-all hover:shadow-md">
<div className="aspect-video w-full bg-cover bg-center transition-transform group-hover:scale-105" data-alt="Modern house exterior facade painting" ></div>
<div className="p-4">
<h3 className="font-bold text-lg">Façade</h3>
<p className="text-sm text-slate-500 mt-1">Protection et esthétique extérieure.</p>
</div>
</div>
</div>
</section>
{/*  Why choose us  */}
<section className="mt-12">
<h2 className="text-2xl font-bold tracking-tight mb-6">Pourquoi nous choisir ?</h2>
<div className="space-y-4">
<div className="flex items-start gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white">
<span className="material-symbols-outlined text-xl">verified</span>
</div>
<div>
<h4 className="font-bold">Expertise Certifiée</h4>
<p className="text-sm text-slate-600">Plus de 15 ans d'expérience dans le domaine de la rénovation haut de gamme.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white">
<span className="material-symbols-outlined text-xl">palette</span>
</div>
<div>
<h4 className="font-bold">Produits Eco-responsables</h4>
<p className="text-sm text-slate-600">Nous utilisons exclusivement des peintures A+ respectueuses de l'environnement.</p>
</div>
</div>
</div>
</section>
{/*  Testimonials  */}
<section className="mt-12 mb-12">
<h2 className="text-2xl font-bold tracking-tight mb-6">Avis Clients</h2>
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
<div className="rounded-xl border border-primary/10 bg-white p-6 shadow-sm">
<div className="flex gap-1 text-amber-400 mb-3">
<span className="material-symbols-outlined fill-1">star</span>
<span className="material-symbols-outlined fill-1">star</span>
<span className="material-symbols-outlined fill-1">star</span>
<span className="material-symbols-outlined fill-1">star</span>
<span className="material-symbols-outlined fill-1">star</span>
</div>
<p className="text-sm italic text-slate-600">"Un travail d'une précision incroyable. L'équipe a été discrète et très propre. Mon salon est métamorphosé !"</p>
<div className="mt-4 flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">JD</div>
<span className="text-sm font-bold">Jean-Dupont</span>
</div>
</div>
<div className="rounded-xl border border-primary/10 bg-white p-6 shadow-sm">
<div className="flex gap-1 text-amber-400 mb-3">
<span className="material-symbols-outlined fill-1">star</span>
<span className="material-symbols-outlined fill-1">star</span>
<span className="material-symbols-outlined fill-1">star</span>
<span className="material-symbols-outlined fill-1">star</span>
<span className="material-symbols-outlined fill-1">star</span>
</div>
<p className="text-sm italic text-slate-600">"Le devis a été respecté à la lettre et le délai aussi. Je recommande vivement pour vos travaux de peinture."</p>
<div className="mt-4 flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">SM</div>
<span className="text-sm font-bold">Sophie Martin</span>
</div>
</div>
</div>
</section>
</div>
{/*  Sidebar Column  */}
<aside className="lg:col-span-4">
<div className="sticky top-28 space-y-6">
{/*  CTA Sidebar Card  */}
<div className="rounded-xl border border-primary/20 bg-primary/5 p-6 shadow-sm">
<h3 className="text-xl font-bold text-slate-900">Besoin d'un devis gratuit?</h3>
<p className="mt-2 text-sm text-slate-600">
                                Obtenez une estimation précise pour vos travaux de peinture en moins de 24h.
                            </p>
<button className="mt-6 w-full rounded-lg bg-primary py-3 text-sm font-bold text-white shadow-md hover:bg-primary/90 transition-all">
                                Demander mon devis
                            </button>
<p className="mt-4 text-center text-xs text-slate-500">
<span className="material-symbols-outlined text-xs align-middle">schedule</span> Réponse garantie sous 24h
                            </p>
</div>
{/*  Mini Project Showcase  */}
<div className="rounded-xl bg-white border border-primary/10 p-4 shadow-sm">
<h4 className="font-bold mb-4">Réalisations récentes</h4>
<div className="grid grid-cols-2 gap-2">
<div className="aspect-square rounded-lg bg-cover bg-center" data-alt="Modern living room showcase" ></div>
<div className="aspect-square rounded-lg bg-cover bg-center" data-alt="Dark blue accent wall decoration" ></div>
<div className="aspect-square rounded-lg bg-cover bg-center" data-alt="Pastel colors painted wall" ></div>
<div className="aspect-square rounded-lg bg-cover bg-center" data-alt="Luxury kitchen painting project" ></div>
</div>
<button className="mt-4 w-full text-xs font-bold text-primary uppercase tracking-wider hover:underline">Voir le portfolio</button>
</div>
{/*  Contact Sidebar  */}
<div className="rounded-xl bg-white border border-primary/10 p-6 shadow-sm">
<h4 className="font-bold mb-4">Contact direct</h4>
<div className="space-y-3">
<div className="flex items-center gap-3 text-sm">
<span className="material-symbols-outlined text-primary">call</span>
<span>01 23 45 67 89</span>
</div>
<div className="flex items-center gap-3 text-sm">
<span className="material-symbols-outlined text-primary">mail</span>
<span>contact@peinture-deco.fr</span>
</div>
<div className="flex items-center gap-3 text-sm">
<span className="material-symbols-outlined text-primary">location_on</span>
<span data-location="Paris, France">Paris, France</span>
</div>
</div>
</div>
</div>
</aside>
</div>
</main>
<footer className="mt-12 border-t border-primary/10 bg-white py-8">
<div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
<div className="flex items-center justify-center gap-2 mb-4">
<span className="material-symbols-outlined text-primary">format_paint</span>
<span className="font-bold text-lg">Peinture</span>
</div>
<p className="text-sm text-slate-500">Â© 2024 Peinture &amp; Décoration. Tous droits réservés.</p>
</div>
</footer>
</div>

    </>
  );
};

export default ServiceDetailsPeinture;

