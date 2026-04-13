import React from 'react';

const ServiceDetailsPlomberie = () => {
  return (
    <>
      
<div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
{/*  Navigation Bar  */}
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/10 bg-white px-6 md:px-20 lg:px-40 py-4 sticky top-0 z-50">
<div className="flex items-center gap-4 text-primary">
<div className="size-8">
<span className="material-symbols-outlined text-4xl">plumbing</span>
</div>
<h2 className="text-slate-900 text-xl font-black leading-tight tracking-tight">Plomberie Pro</h2>
</div>
<div className="flex flex-1 justify-end gap-8 items-center">
<nav className="hidden lg:flex items-center gap-9">
<a className="text-slate-700 hover:text-primary transition-colors text-sm font-semibold" href="#">Accueil</a>
<a className="text-primary text-sm font-semibold" href="#">Services</a>
<a className="text-slate-700 hover:text-primary transition-colors text-sm font-semibold" href="#">RÃ©alisations</a>
<a className="text-slate-700 hover:text-primary transition-colors text-sm font-semibold" href="#">Blog</a>
<a className="text-slate-700 hover:text-primary transition-colors text-sm font-semibold" href="#">Contact</a>
</nav>
<div className="flex gap-3">
<button className="flex items-center justify-center rounded-lg h-10 w-10 bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="hidden sm:flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold tracking-wide hover:bg-primary/90 transition-all">
                        Connexion
                    </button>
</div>
</div>
</header>
<main className="flex flex-col flex-1">
{/*  Hero Section  */}
<div className="relative w-full">
<div className="px-6 md:px-20 lg:px-40 py-10">
<div className="relative flex min-h-[400px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-2xl items-start justify-end px-8 pb-12 overflow-hidden" data-alt="Professional plumber working on pipes under kitchen sink" style='background-image: linear-gradient(to top, rgba(16, 25, 34, 0.9), rgba(19, 127, 236, 0.2)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuB9KEq-_8wjyWZbntT_SlDnWkH1VMz1eBW89K4_2uSAH-eQcbJXdJrOmtRE-1xaLlEiaPJmmPcPhSTBGnEH2b0lEPWS0bo97NQFA_mmFnR7w60p6njdIh3C11H63-7GBCky6wkHjaXQwaKFbLLefu-F-ELWi3vYyXGYOcMpDunftKRx-qTw5UzKYyDgTgAHxMEeXGmQnoor-rDE_NOpABt1IR4TC4pknkgS2LYOOpISgyc-4xMiwMVam_8FUsPgv2KNBTP3TPRhTZY0");'>
<div className="flex flex-col gap-4 max-w-2xl">
<h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                                DÃ©pannage et Installation de Plomberie
                            </h1>
<p className="text-slate-200 text-lg md:text-xl font-medium leading-relaxed">
                                Experts plombiers certifiÃ©s Ã  votre service 24h/24 et 7j/7 pour tous vos besoins urgents et installations durables.
                            </p>
</div>
<div className="flex flex-wrap gap-4 mt-4">
<button className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-primary text-white text-lg font-bold shadow-lg shadow-primary/30 hover:scale-105 transition-transform">
                                Voir nos services
                            </button>
<button className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-white/20 backdrop-blur-md text-white text-lg font-bold border border-white/30 hover:bg-white/30 transition-all">
                                Urgence 24/7
                            </button>
</div>
</div>
</div>
</div>
{/*  Content Area with Sidebar  */}
<div className="px-6 md:px-20 lg:px-40 py-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
{/*  Main Content  */}
<div className="lg:col-span-8 space-y-12">
{/*  Statistics  */}
<section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
<div className="flex flex-col gap-3 rounded-2xl p-8 bg-white border border-primary/10 shadow-sm">
<span className="material-symbols-outlined text-primary text-4xl">handshake</span>
<div>
<p className="text-slate-500 text-sm font-bold uppercase tracking-widest">Interventions</p>
<p className="text-slate-900 text-3xl font-black">5000+</p>
</div>
</div>
<div className="flex flex-col gap-3 rounded-2xl p-8 bg-white border border-primary/10 shadow-sm">
<span className="material-symbols-outlined text-primary text-4xl">verified</span>
<div>
<p className="text-slate-500 text-sm font-bold uppercase tracking-widest">Satisfaction</p>
<p className="text-slate-900 text-3xl font-black">98%</p>
</div>
</div>
<div className="flex flex-col gap-3 rounded-2xl p-8 bg-white border border-primary/10 shadow-sm">
<span className="material-symbols-outlined text-primary text-4xl">workspace_premium</span>
<div>
<p className="text-slate-500 text-sm font-bold uppercase tracking-widest">Garantie</p>
<p className="text-slate-900 text-3xl font-black">1 an</p>
</div>
</div>
</section>
{/*  Our Services Grid  */}
<section>
<div className="flex flex-col gap-2 mb-8">
<h2 className="text-slate-900 text-3xl font-black tracking-tight">Nos Services Experts</h2>
<div className="h-1.5 w-20 bg-primary rounded-full"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="group flex flex-col gap-4 rounded-2xl border border-primary/10 bg-white p-6 hover:border-primary/40 transition-all hover:shadow-xl">
<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
<span className="material-symbols-outlined text-3xl">water_drop</span>
</div>
<div>
<h3 className="text-slate-900 text-xl font-bold mb-2">RÃ©paration de fuite</h3>
<p className="text-slate-600 text-base leading-relaxed">DÃ©tection de fuites non destructives et colmatage ultra-rapide pour Ã©viter les dÃ©gÃ¢ts des eaux.</p>
</div>
</div>
<div className="group flex flex-col gap-4 rounded-2xl border border-primary/10 bg-white p-6 hover:border-primary/40 transition-all hover:shadow-xl">
<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
<span className="material-symbols-outlined text-3xl">construction</span>
</div>
<div>
<h3 className="text-slate-900 text-xl font-bold mb-2">Installation robinetterie</h3>
<p className="text-slate-600 text-base leading-relaxed">Pose de mitigeurs haute performance, Ã©viers design et systÃ¨mes de filtration d'eau.</p>
</div>
</div>
<div className="group flex flex-col gap-4 rounded-2xl border border-primary/10 bg-white p-6 hover:border-primary/40 transition-all hover:shadow-xl">
<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
<span className="material-symbols-outlined text-3xl">sanitizer</span>
</div>
<div>
<h3 className="text-slate-900 text-xl font-bold mb-2">DÃ©bouchage complet</h3>
<p className="text-slate-600 text-base leading-relaxed">Curage et dÃ©bouchage de toutes vos canalisations obstruÃ©es avec Ã©quipement haute pression.</p>
</div>
</div>
<div className="group flex flex-col gap-4 rounded-2xl border border-primary/10 bg-white p-6 hover:border-primary/40 transition-all hover:shadow-xl">
<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
<span className="material-symbols-outlined text-3xl">health_and_safety</span>
</div>
<div>
<h3 className="text-slate-900 text-xl font-bold mb-2">Entretien prÃ©ventif</h3>
<p className="text-slate-600 text-base leading-relaxed">Contrats de maintenance pour assurer la pÃ©rennitÃ© de vos installations et rÃ©duire vos factures.</p>
</div>
</div>
</div>
</section>
{/*  Why Choose Us  */}
<section className="bg-primary/5 rounded-3xl p-10 border border-primary/10">
<div className="flex flex-col gap-6">
<h2 className="text-slate-900 text-3xl font-black tracking-tight">Pourquoi nous choisir ?</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="flex gap-4">
<span className="material-symbols-outlined text-primary font-bold">check_circle</span>
<div>
<h4 className="font-bold text-slate-900">DisponibilitÃ© Totale</h4>
<p className="text-slate-600 text-sm">Intervention en moins de 30 minutes pour les urgences majeures.</p>
</div>
</div>
<div className="flex gap-4">
<span className="material-symbols-outlined text-primary font-bold">check_circle</span>
<div>
<h4 className="font-bold text-slate-900">Transparence des Prix</h4>
<p className="text-slate-600 text-sm">Devis dÃ©taillÃ© avant chaque intervention, sans frais cachÃ©s.</p>
</div>
</div>
<div className="flex gap-4">
<span className="material-symbols-outlined text-primary font-bold">check_circle</span>
<div>
<h4 className="font-bold text-slate-900">Certifications RGE</h4>
<p className="text-slate-600 text-sm">Nos artisans sont qualifiÃ©s et rÃ©guliÃ¨rement formÃ©s aux nouvelles normes.</p>
</div>
</div>
<div className="flex gap-4">
<span className="material-symbols-outlined text-primary font-bold">check_circle</span>
<div>
<h4 className="font-bold text-slate-900">MatÃ©riel de QualitÃ©</h4>
<p className="text-slate-600 text-sm">Nous n'utilisons que des piÃ¨ces certifiÃ©es des plus grandes marques.</p>
</div>
</div>
</div>
</div>
</section>
{/*  Testimonials  */}
<section>
<h2 className="text-slate-900 text-3xl font-black tracking-tight mb-8">Ce que disent nos clients</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="p-8 rounded-2xl bg-white border border-primary/5 shadow-sm italic text-slate-700 relative">
<span className="material-symbols-outlined text-primary/20 text-6xl absolute top-4 right-4">format_quote</span>
                                "Intervention rapide pour une fuite dans ma salle de bain. Le plombier Ã©tait trÃ¨s pro et a tout nettoyÃ© aprÃ¨s son passage. Je recommande vivement !"
                                <div className="mt-6 flex items-center gap-3 not-italic">
<div className="w-10 h-10 rounded-full bg-primary/20"></div>
<div>
<p className="font-bold text-slate-900">Jean Dupont</p>
<p className="text-xs text-slate-500">Paris, 75015</p>
</div>
</div>
</div>
<div className="p-8 rounded-2xl bg-white border border-primary/5 shadow-sm italic text-slate-700 relative">
<span className="material-symbols-outlined text-primary/20 text-6xl absolute top-4 right-4">format_quote</span>
                                "Prix conforme au devis annoncÃ©. Installation d'un nouveau chauffe-eau en un temps record. Ã‰quipe sÃ©rieuse et ponctuelle."
                                <div className="mt-6 flex items-center gap-3 not-italic">
<div className="w-10 h-10 rounded-full bg-primary/20"></div>
<div>
<p className="font-bold text-slate-900">Marie Leblanc</p>
<p className="text-xs text-slate-500">Lyon, 69002</p>
</div>
</div>
</div>
</div>
</section>
</div>
{/*  Sidebar  */}
<aside className="lg:col-span-4 space-y-8">
<div className="sticky top-28 space-y-8">
{/*  CTA Card  */}
<div className="rounded-3xl bg-slate-900 p-8 text-white shadow-2xl relative overflow-hidden">
<div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
<h3 className="text-2xl font-bold mb-4 relative z-10">Besoin d'un devis gratuit ?</h3>
<p className="text-slate-300 mb-8 relative z-10 leading-relaxed">Nos techniciens analysent votre projet et vous rÃ©pondent en moins de 24h avec une estimation prÃ©cise.</p>
<button className="w-full bg-primary text-white rounded-xl py-4 font-bold text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/40 flex items-center justify-center gap-3">
<span className="material-symbols-outlined">edit_document</span>
                                Demander mon devis
                            </button>
<div className="mt-6 pt-6 border-t border-white/10 flex flex-col gap-4">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary">phone_in_talk</span>
<span className="font-medium">01 23 45 67 89</span>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary">mail</span>
<span className="font-medium">contact@plomberie-pro.fr</span>
</div>
</div>
</div>
{/*  Location Map (Placeholder)  */}
<div className="rounded-3xl bg-white border border-primary/10 overflow-hidden shadow-sm">
<div className="h-48 bg-slate-200 flex items-center justify-center bg-cover bg-center" data-alt="Map showing our service area coverage in Paris" data-location="Paris, France" >
<div className="bg-white/90 p-4 rounded-xl shadow-xl flex flex-col items-center">
<span className="material-symbols-outlined text-primary text-3xl">location_on</span>
<p className="text-xs font-bold uppercase mt-1">Zone de service</p>
</div>
</div>
<div className="p-6">
<h4 className="font-bold mb-2">Secteur d'intervention</h4>
<p className="text-slate-600 text-sm">Nous intervenons dans toute l'ÃŽle-de-France et les grandes mÃ©tropoles.</p>
</div>
</div>
</div>
</aside>
</div>
</main>
{/*  Footer  */}
<footer className="bg-slate-900 text-slate-400 px-6 md:px-20 lg:px-40 py-16 border-t border-white/5 mt-20">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-4 text-white mb-6">
<span className="material-symbols-outlined text-3xl text-primary">plumbing</span>
<h2 className="text-xl font-black">Plomberie Pro</h2>
</div>
<p className="text-sm leading-relaxed">Service de plomberie d'excellence disponible 24/7 pour les particuliers et les professionnels.</p>
</div>
<div>
<h4 className="text-white font-bold mb-6">Liens Rapides</h4>
<ul className="space-y-4 text-sm">
<li><a className="hover:text-primary transition-colors" href="#">Nos Services</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Urgences 24/7</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Tarifs</a></li>
<li><a className="hover:text-primary transition-colors" href="#">FAQ</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold mb-6">Contact</h4>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary text-lg">pin_drop</span>
<span>15 Rue de Rivoli, 75004 Paris</span>
</li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-lg">call</span>
<span>01 23 45 67 89</span>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-bold mb-6">Newsletter</h4>
<p className="text-xs mb-4">Recevez nos conseils d'entretien et promos.</p>
<div className="flex gap-2">
<input className="bg-slate-800 border-none rounded-lg text-sm w-full focus:ring-1 focus:ring-primary" placeholder="Votre email" type="email"/>
<button className="bg-primary text-white p-2 rounded-lg">
<span className="material-symbols-outlined">send</span>
</button>
</div>
</div>
</div>
<div className="mt-16 pt-8 border-t border-white/5 text-center text-xs">
                Â© 2024 Plomberie Pro. Tous droits rÃ©servÃ©s.
            </div>
</footer>
</div>
</div>

    </>
  );
};

export default ServiceDetailsPlomberie;

