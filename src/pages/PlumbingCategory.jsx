import React from 'react';

const PlumbingCategory = () => {
  return (
    <>
      
<div className="relative flex min-h-screen flex-col">
{/*  Header  */}
<header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between gap-8">
<div className="flex items-center gap-2 text-primary">
<span className="material-symbols-outlined text-3xl">plumbing</span>
<h1 className="text-xl font-bold tracking-tight text-slate-900">Plomberie Pro</h1>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Services</a>
<a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Nos Experts</a>
<a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Tarifs</a>
<a className="text-sm font-semibold text-red-600" href="#">Urgences 24/7</a>
</nav>
<div className="flex flex-1 items-center justify-end gap-4">
<div className="relative hidden sm:block w-full max-w-xs">
<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
<span className="material-symbols-outlined text-sm">search</span>
</span>
<input className="block w-full rounded-lg border-none bg-slate-100 py-2 pl-10 pr-3 text-sm focus:ring-2 focus:ring-primary" placeholder="Rechercher un service..." type="text"/>
</div>
<button className="flex items-center justify-center h-10 w-10 rounded-full bg-slate-100">
<span className="material-symbols-outlined">person</span>
</button>
</div>
</div>
</div>
</header>
<main className="flex-1">
{/*  Hero Section  */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
{/*  Main Hero Content  */}
<div className="lg:col-span-2 space-y-8">
<div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-slate-200 shadow-xl">
<div className="absolute inset-0 bg-cover bg-center" data-alt="Professional plumber fixing a modern kitchen sink" ></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
<h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4">L'excellence en plomberie, chez vous.</h2>
<div className="flex flex-wrap gap-4">
<button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-bold transition-all flex items-center gap-2">
<span className="material-symbols-outlined">bolt</span>
                                        Intervention Rapide
                                    </button>
<button className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white px-8 py-3 rounded-lg font-bold transition-all">
                                        Voir les zones
                                    </button>
</div>
</div>
</div>
</div>
{/*  Quote Sidebar  */}
<aside className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6 sticky top-24">
<div className="flex items-center gap-3 text-primary">
<span className="material-symbols-outlined text-3xl">request_quote</span>
<h3 className="text-xl font-bold">Besoin d'un devis ?</h3>
</div>
<p className="text-slate-600 text-sm leading-relaxed">
                            Obtenez une estimation gratuite en moins de 24h pour vos travaux d'installation ou de rÃ©novation.
                        </p>
<form className="space-y-4">
<div>
<label className="text-xs font-bold uppercase tracking-wider text-slate-500">Type de service</label>
<select className="w-full mt-1 rounded-lg border-slate-200 bg-slate-50 text-sm focus:ring-primary">
<option>RÃ©paration de fuite</option>
<option>Installation Sanitaire</option>
<option>DÃ©bouchage</option>
<option>Chauffe-eau</option>
</select>
</div>
<div>
<label className="text-xs font-bold uppercase tracking-wider text-slate-500">Ville / Code Postal</label>
<input className="w-full mt-1 rounded-lg border-slate-200 bg-slate-50 text-sm focus:ring-primary" placeholder="ex: 75001" type="text"/>
</div>
<button className="w-full bg-primary py-3 text-white rounded-lg font-bold shadow-lg shadow-primary/30 hover:shadow-primary/40 transition-shadow">
                                Simuler mon devis
                            </button>
</form>
<div className="pt-4 border-t border-slate-100 flex items-center justify-between">
<div className="flex -space-x-2">
<div className="h-8 w-8 rounded-full border-2 border-white bg-slate-300" data-alt="User avatar profile 1"></div>
<div className="h-8 w-8 rounded-full border-2 border-white bg-slate-400" data-alt="User avatar profile 2"></div>
<div className="h-8 w-8 rounded-full border-2 border-white bg-slate-500" data-alt="User avatar profile 3"></div>
</div>
<span className="text-xs font-medium text-slate-500">+1.2k clients satisfaits</span>
</div>
</aside>
</div>
</section>
{/*  Sub-services Grid  */}
<section className="bg-slate-50 py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between mb-10">
<div>
<h2 className="text-3xl font-bold tracking-tight">Nos SpÃ©cialitÃ©s</h2>
<p className="text-slate-600 mt-2">Des solutions adaptÃ©es Ã  chaque problÃ¨me de plomberie.</p>
</div>
<a className="text-primary font-bold flex items-center gap-1 hover:underline" href="#">
                            Tout voir
                            <span className="material-symbols-outlined">arrow_forward</span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{/*  Card 1  */}
<div className="group bg-white rounded-xl p-6 border border-slate-200 hover:border-primary transition-all shadow-sm hover:shadow-xl">
<div className="h-14 w-14 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
<span className="material-symbols-outlined text-3xl">water_drop</span>
</div>
<h3 className="text-xl font-bold mb-3">RÃ©paration de Fuite</h3>
<p className="text-slate-600 text-sm leading-relaxed mb-6">
                                DÃ©tection non-destructive et colmatage immÃ©diat de vos tuyauteries et robinetteries.
                            </p>
<span className="text-sm font-bold text-primary group-hover:gap-2 flex items-center gap-1 transition-all">
                                Ã€ partir de 89â‚¬ <span className="material-symbols-outlined text-sm">chevron_right</span>
</span>
</div>
{/*  Card 2  */}
<div className="group bg-white rounded-xl p-6 border border-slate-200 hover:border-primary transition-all shadow-sm hover:shadow-xl">
<div className="h-14 w-14 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
<span className="material-symbols-outlined text-3xl">shower</span>
</div>
<h3 className="text-xl font-bold mb-3">Installation Sanitaire</h3>
<p className="text-slate-600 text-sm leading-relaxed mb-6">
                                Pose de douches, WC suspendus, vasques et rÃ©novation complÃ¨te de votre salle d'eau.
                            </p>
<span className="text-sm font-bold text-primary group-hover:gap-2 flex items-center gap-1 transition-all">
                                Sur devis <span className="material-symbols-outlined text-sm">chevron_right</span>
</span>
</div>
{/*  Card 3  */}
<div className="group bg-white rounded-xl p-6 border border-slate-200 hover:border-primary transition-all shadow-sm hover:shadow-xl">
<div className="h-14 w-14 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
<span className="material-symbols-outlined text-3xl">settings_input_hdmi</span>
</div>
<h3 className="text-xl font-bold mb-3">DÃ©bouchage Urgent</h3>
<p className="text-slate-600 text-sm leading-relaxed mb-6">
                                Canalisations obstruÃ©es, Ã©vacuations lentes : intervention haute pression disponible.
                            </p>
<span className="text-sm font-bold text-primary group-hover:gap-2 flex items-center gap-1 transition-all">
                                Ã€ partir de 120â‚¬ <span className="material-symbols-outlined text-sm">chevron_right</span>
</span>
</div>
</div>
</div>
</section>
{/*  Why Choose Us  */}
<section className="py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
<div className="w-full h-full bg-cover bg-center" data-alt="Plumber smiling while checking plumbing pipes" ></div>
</div>
<div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-xl shadow-xl text-white">
<div className="text-4xl font-black">15+</div>
<div className="text-sm font-medium opacity-90 uppercase tracking-widest">Ans d'expÃ©rience</div>
</div>
</div>
<div className="space-y-8">
<h2 className="text-4xl font-black tracking-tight leading-tight">Pourquoi faire confiance Ã  <span className="text-primary">Plomberie Pro</span> ?</h2>
<div className="space-y-6">
<div className="flex gap-4">
<div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
<span className="material-symbols-outlined">verified</span>
</div>
<div>
<h4 className="font-bold text-lg">Experts CertifiÃ©s Qualibat</h4>
<p className="text-slate-600">Tous nos artisans sont formÃ©s aux derniÃ¨res normes europÃ©ennes.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
<span className="material-symbols-outlined">schedule</span>
</div>
<div>
<h4 className="font-bold text-lg">DisponibilitÃ© Totale</h4>
<p className="text-slate-600">Nous intervenons 24h/24 et 7j/7 pour toutes vos urgences critiques.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
<span className="material-symbols-outlined">payments</span>
</div>
<div>
<h4 className="font-bold text-lg">Transparence Tarifaire</h4>
<p className="text-slate-600">Aucune surprise sur la facture. Nos tarifs sont annoncÃ©s avant intervention.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Top Experts  */}
<section className="bg-slate-900 text-white py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl font-bold mb-4">Rencontrez nos meilleurs experts</h2>
<p className="text-slate-400 max-w-2xl mx-auto">Une Ã©quipe de passionnÃ©s Ã  votre service dans toute la rÃ©gion.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="bg-white/5 p-6 rounded-xl border border-white/10 text-center hover:bg-white/10 transition-colors">
<div className="w-24 h-24 rounded-full bg-slate-700 mx-auto mb-4 border-2 border-primary overflow-hidden">
<div className="w-full h-full bg-cover bg-center" data-alt="Portrait of a smiling professional male plumber" ></div>
</div>
<h4 className="font-bold">Jean-Marc L.</h4>
<p className="text-xs text-primary font-bold uppercase tracking-wider mb-2">Chef de chantier</p>
<div className="flex items-center justify-center gap-1 text-yellow-400">
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="text-xs font-bold text-white">4.9</span>
</div>
</div>
<div className="bg-white/5 p-6 rounded-xl border border-white/10 text-center hover:bg-white/10 transition-colors">
<div className="w-24 h-24 rounded-full bg-slate-700 mx-auto mb-4 border-2 border-primary overflow-hidden">
<div className="w-full h-full bg-cover bg-center" data-alt="Portrait of an experienced plumber technician" ></div>
</div>
<h4 className="font-bold">Sofiane B.</h4>
<p className="text-xs text-primary font-bold uppercase tracking-wider mb-2">Expert DÃ©bouchage</p>
<div className="flex items-center justify-center gap-1 text-yellow-400">
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="text-xs font-bold text-white">5.0</span>
</div>
</div>
<div className="bg-white/5 p-6 rounded-xl border border-white/10 text-center hover:bg-white/10 transition-colors">
<div className="w-24 h-24 rounded-full bg-slate-700 mx-auto mb-4 border-2 border-primary overflow-hidden">
<div className="w-full h-full bg-cover bg-center" data-alt="Female plumbing engineer with helmet" ></div>
</div>
<h4 className="font-bold">Claire D.</h4>
<p className="text-xs text-primary font-bold uppercase tracking-wider mb-2">Installeur Sanitaire</p>
<div className="flex items-center justify-center gap-1 text-yellow-400">
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="text-xs font-bold text-white">4.8</span>
</div>
</div>
<div className="bg-white/5 p-6 rounded-xl border border-white/10 text-center hover:bg-white/10 transition-colors">
<div className="w-24 h-24 rounded-full bg-slate-700 mx-auto mb-4 border-2 border-primary overflow-hidden">
<div className="w-full h-full bg-cover bg-center" data-alt="Friendly male plumber with service uniform" ></div>
</div>
<h4 className="font-bold">Pierre V.</h4>
<p className="text-xs text-primary font-bold uppercase tracking-wider mb-2">Expert Fuites</p>
<div className="flex items-center justify-center gap-1 text-yellow-400">
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="text-xs font-bold text-white">4.9</span>
</div>
</div>
</div>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="bg-slate-50 py-12 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
<div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
<div className="col-span-1 sm:col-span-1">
<div className="flex items-center gap-2 text-primary mb-6">
<span className="material-symbols-outlined text-2xl">plumbing</span>
<span className="text-lg font-bold text-slate-900">Plomberie Pro</span>
</div>
<p className="text-sm text-slate-500">Votre partenaire confiance pour tous vos besoins en plomberie et chauffage depuis 2009.</p>
</div>
<div>
<h5 className="font-bold mb-6">Services</h5>
<ul className="space-y-4 text-sm text-slate-500">
<li><a className="hover:text-primary" href="#">DÃ©pannage Rapide</a></li>
<li><a className="hover:text-primary" href="#">Salle de Bains</a></li>
<li><a className="hover:text-primary" href="#">Chauffage Central</a></li>
<li><a className="hover:text-primary" href="#">Traitement d'eau</a></li>
</ul>
</div>
<div>
<h5 className="font-bold mb-6">Compagnie</h5>
<ul className="space-y-4 text-sm text-slate-500">
<li><a className="hover:text-primary" href="#">Ã€ propos</a></li>
<li><a className="hover:text-primary" href="#">Nos RÃ©alisations</a></li>
<li><a className="hover:text-primary" href="#">Recrutement</a></li>
<li><a className="hover:text-primary" href="#">Contact</a></li>
</ul>
</div>
<div>
<h5 className="font-bold mb-6">Contact</h5>
<div className="space-y-4 text-sm text-slate-500">
<p className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-lg">call</span>
                                0800 123 456
                            </p>
<p className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-lg">location_on</span>
                                Paris &amp; ÃŽle-de-France
                            </p>
<div className="flex gap-4 pt-2">
<a className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600" href="#">
<span className="material-symbols-outlined text-lg">social_leaderboard</span>
</a>
<a className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600" href="#">
<span className="material-symbols-outlined text-lg">alternate_email</span>
</a>
</div>
</div>
</div>
</div>
<div className="mt-12 pt-8 border-t border-slate-200 text-center text-xs text-slate-500">
                    Â© 2024 Plomberie Pro. Tous droits rÃ©servÃ©s. Mentions LÃ©gales | Cookies
                </div>
</div>
</footer>
</div>

    </>
  );
};

export default PlumbingCategory;

