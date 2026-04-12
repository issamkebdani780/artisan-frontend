import React from 'react';

const CreationDeCompteClient3 = () => {
  return (
    <>
      
{/*  Header  */}
<header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
<div className="flex justify-between items-center h-20 px-8 max-w-full mx-auto">
<div className="text-2xl font-black text-slate-900 tracking-tighter">The Violet Protocol</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-slate-500 hover:text-slate-900 transition-colors font-medium text-sm" href="#">Trouver des Pros</a>
<a className="text-slate-500 hover:text-slate-900 transition-colors font-medium text-sm" href="#">Comment Ã§a marche</a>
<a className="text-slate-500 hover:text-slate-900 transition-colors font-medium text-sm" href="#">Tarifs</a>
</nav>
<div className="flex items-center gap-4">
<a className="text-primary font-semibold text-sm px-4 py-2 transition-all duration-300" href="#">Aide</a>
</div>
</div>
</header>
<main className="min-h-screen flex flex-col lg:flex-row pt-20">
{/*  Left Side: Visual & Inspiration (Identical to Artisan for consistency)  */}
<section className="hidden lg:flex w-1/2 relative overflow-hidden bg-slate-950">
<img className="absolute inset-0 w-full h-full object-cover opacity-50" data-alt="Futuristic neon lit corridor representing professional excellence and technology" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAA-nJr3L3c74iISQvb_wrgOpACXft9wvKMa6ikRJCrGkqckw5s7dVe8A_o6V49D4H2oBId-PMqy807Wjz9as_GFWKSzY0DOWF7aOVFQRLpp0Ty1sfnYKA6ZzXtT68ajB9cH7HpHEB76G2yl3qi1kf3SgzgSMK3FEer2s3yaOMUDRP-kxE-uBW8tzF5LtjPqoNlDpaZjBMmIUj5Igy-zll4zAF3CXG_w8SZZC7Ih0Rya4qPiagrDRsZ5kmzWha-U1VfVGEr8J1sqxr5"/>
<div className="relative z-10 flex flex-col justify-end p-20 w-full bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent">
<div className="space-y-6 max-w-lg">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-white border border-primary/30 text-[10px] font-bold tracking-widest uppercase">
                        Rejoignez l'Ã©lite
                    </span>
<h1 className="text-5xl font-black text-white leading-tight tracking-tighter">
                        Rejoignez l'Ã©lite des <span className="text-primary">services professionnels.</span>
</h1>
<p className="text-lg text-slate-300 leading-relaxed font-light">
                        AccÃ©dez Ã  un rÃ©seau exclusif de professionnels vÃ©rifiÃ©s et gÃ©rez vos projets en toute sÃ©rÃ©nitÃ© avec The Violet Protocol.
                    </p>
{/*  Benefit Cards  */}
<div className="grid grid-cols-1 gap-4 pt-4">
<div className="glass-panel p-5 rounded-xl border border-white/20 flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center flex-shrink-0 shadow-lg">
<span className="material-symbols-outlined text-white text-xl">verified</span>
</div>
<div>
<h3 className="font-bold text-slate-900 text-sm">Pros VÃ©rifiÃ©s</h3>
<p className="text-xs text-slate-600 mt-0.5 leading-relaxed">Chaque membre subit un processus de vÃ©rification rigoureux en 5 Ã©tapes.</p>
</div>
</div>
<div className="glass-panel p-5 rounded-xl border border-white/20 flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center flex-shrink-0 shadow-lg">
<span className="material-symbols-outlined text-white text-xl">payments</span>
</div>
<div>
<h3 className="font-bold text-slate-900 text-sm">Paiements SÃ©curisÃ©s</h3>
<p className="text-xs text-slate-600 mt-0.5 leading-relaxed">Infrastructure de paiement cryptÃ©e de bout en bout avec protection contre la fraude.</p>
</div>
</div>
<div className="glass-panel p-5 rounded-xl border border-white/20 flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center flex-shrink-0 shadow-lg">
<span className="material-symbols-outlined text-white text-xl">support_agent</span>
</div>
<div>
<h3 className="font-bold text-slate-900 text-sm">Support 24/7</h3>
<p className="text-xs text-slate-600 mt-0.5 leading-relaxed">Une Ã©quipe de conciergerie dÃ©diÃ©e disponible Ã  tout moment pour vous assister.</p>
</div>
</div>
</div>
{/*  Testimonial  */}
<div className="mt-4 glass-panel p-5 rounded-xl border-l-4 border-primary shadow-2xl">
<p className="text-on-surface-variant text-sm italic">"The Violet Protocol a transformÃ© notre gestion de prestataires. La qualitÃ© et la sÃ©curitÃ© sont sans Ã©gales."</p>
<div className="mt-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-300 overflow-hidden border border-white/50">
<img alt="Professional headshot" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKtZJeVqQIWwTV4qKjYFN_ZNX0-xFNOHX-_Wk9MQZUwFulBl-TvbEodCrm4Ff1Tlsy5i-Ahi7hVcj8h-RskvKUkJbQrCWrfNi0xHrlFH5k61WhHPWHBRbJH9o2VYyZrqxA31aVMUu6Pvaj0kunDcSgYLVwqAtSwrfnUUnThJHccsmyCLfUgCVbzwAwjN2L8Z0io2gzACIGbiy4WN_pcFYA3ZuROTKbmc9XOUl839f4kl9NJxfPoR-l2po4K_n0BNfmXa3OIXEyo__i"/>
</div>
<span className="text-xs font-bold text-slate-900 tracking-tight">Directeur OpÃ©rations, TechCorp</span>
</div>
</div>
</div>
</div>
</section>
{/*  Right Side: Registration Form  */}
<section className="w-full lg:w-1/2 bg-surface flex items-center justify-center py-12 px-6 sm:px-12 lg:px-20 overflow-y-auto">
<div className="w-full max-w-xl">
{/*  Account Selector  */}
<div className="flex p-1 bg-slate-100 rounded-xl mb-10">
<button className="flex-1 py-3 px-4 rounded-lg text-sm font-bold transition-all duration-300 text-slate-500 hover:text-slate-700">Compte Pro</button>
<button className="flex-1 py-3 px-4 rounded-lg text-sm font-bold transition-all duration-300 bg-white text-slate-900 shadow-sm">Compte Client</button>
</div>
<div className="mb-8">
<h2 className="text-3xl font-black text-slate-900 tracking-tighter">CrÃ©er un compte client</h2>
<p className="text-on-surface-variant mt-2 text-sm">Rejoignez-nous et commencez Ã  gÃ©rer vos projets aujourd'hui.</p>
</div>
<form className="space-y-5">
{/*  Name Group  */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div className="flex flex-col gap-1.5">
<label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">PrÃ©nom</label>
<input className="w-full h-11 px-4 rounded-lg bg-surface-container-high border-none focus:ring-2 focus:ring-primary/40 text-on-surface transition-all placeholder:text-slate-400 text-sm" placeholder="Jean" type="text"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Nom</label>
<input className="w-full h-11 px-4 rounded-lg bg-surface-container-high border-none focus:ring-2 focus:ring-primary/40 text-on-surface transition-all placeholder:text-slate-400 text-sm" placeholder="Dupont" type="text"/>
</div>
</div>
{/*  Contact Group  */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div className="flex flex-col gap-1.5">
<label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Email</label>
<input className="w-full h-11 px-4 rounded-lg bg-surface-container-high border-none focus:ring-2 focus:ring-primary/40 text-on-surface transition-all placeholder:text-slate-400 text-sm" placeholder="jean.dupont@exemple.com" type="email"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">TÃ©lÃ©phone</label>
<div className="relative flex items-center">
<div className="absolute left-3 flex items-center gap-2 pointer-events-none border-r border-slate-200 pr-2">
<span className="text-sm font-semibold text-slate-500 tracking-tight">+213</span>
</div>
<input className="w-full h-11 pl-16 pr-4 rounded-lg bg-surface-container-high border-none focus:ring-2 focus:ring-primary/40 text-on-surface transition-all placeholder:text-slate-400 text-sm" placeholder="555 12 34 56" type="tel"/>
</div>
</div>
</div>
{/*  Personal Info  */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div className="flex flex-col gap-1.5">
<label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Date de Naissance</label>
<input className="w-full h-11 px-4 rounded-lg bg-surface-container-high border-none focus:ring-2 focus:ring-primary/40 text-on-surface transition-all text-sm" type="date"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Ville</label>
<input className="w-full h-11 px-4 rounded-lg bg-surface-container-high border-none focus:ring-2 focus:ring-primary/40 text-on-surface transition-all placeholder:text-slate-400 text-sm" placeholder="Alger" type="text"/>
</div>
</div>
{/*  Address  */}
<div className="flex flex-col gap-1.5">
<label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Adresse DÃ©taillÃ©e</label>
<input className="w-full h-11 px-4 rounded-lg bg-surface-container-high border-none focus:ring-2 focus:ring-primary/40 text-on-surface transition-all placeholder:text-slate-400 text-sm" placeholder="NÂ° 45, Rue des FrÃ¨res, Quartier Central" type="text"/>
</div>
{/*  Password Group  */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div className="flex flex-col gap-1.5">
<label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Mot de passe</label>
<input className="w-full h-11 px-4 rounded-lg bg-surface-container-high border-none focus:ring-2 focus:ring-primary/40 text-on-surface transition-all placeholder:text-slate-400 text-sm" placeholder="âDA¢âDA¢âDA¢âDA¢âDA¢âDA¢âDA¢âDA¢" type="password"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Confirmer</label>
<input className="w-full h-11 px-4 rounded-lg bg-surface-container-high border-none focus:ring-2 focus:ring-primary/40 text-on-surface transition-all placeholder:text-slate-400 text-sm" placeholder="âDA¢âDA¢âDA¢âDA¢âDA¢âDA¢âDA¢âDA¢" type="password"/>
</div>
</div>
{/*  Password Requirements  */}
<div className="bg-surface-container-low p-4 rounded-lg border-l-4 border-primary">
<h4 className="text-[10px] font-black text-slate-700 mb-2 uppercase tracking-widest">Exigences de sÃ©curitÃ© :</h4>
<ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
<li className="flex items-center gap-2 text-[11px] text-slate-600 font-medium">
<span className="material-symbols-outlined text-sm text-green-500" >check_circle</span> 8+ caractÃ¨res
                            </li>
<li className="flex items-center gap-2 text-[11px] text-slate-600 font-medium">
<span className="material-symbols-outlined text-sm text-slate-400">circle</span> DÃ©bute par une lettre
                            </li>
<li className="flex items-center gap-2 text-[11px] text-slate-600 font-medium">
<span className="material-symbols-outlined text-sm text-slate-400">circle</span> Contient un chiffre
                            </li>
</ul>
</div>
{/*  Consent  */}
<div className="flex items-start gap-3 py-1">
<input className="mt-1 w-4 h-4 rounded border-none bg-surface-container-high text-primary focus:ring-primary/40" id="consent" type="checkbox"/>
<label className="text-xs text-on-surface-variant leading-relaxed" htmlFor="consent">
                            J'accepte les <a className="text-primary font-bold hover:underline" href="#">Conditions d'Utilisation</a> et la <a className="text-primary font-bold hover:underline" href="#">Politique de ConfidentialitÃ©</a>.
                        </label>
</div>
{/*  CTA  */}
<button className="w-full h-14 premium-gradient text-white font-black text-lg rounded-xl theme-color-shadow hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-3 mt-4" type="submit">
                        S'inscrire maintenant
                        <span className="material-symbols-outlined">arrow_forward</span>
</button>
{/*  Footer Link  */}
<div className="pt-6 text-center">
<p className="text-on-surface-variant text-sm">
                            Vous avez dÃ©jÃ  un compte ? 
                            <a className="text-primary font-black ml-1 hover:underline" href="#">Sign In</a>
</p>
</div>
</form>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="bg-slate-50 py-12 border-t border-slate-100 mt-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-12 max-w-7xl mx-auto">
<div className="space-y-4">
<div className="text-lg font-bold text-slate-900">The Violet Protocol</div>
<p className="text-sm text-slate-500 font-medium">Â© 2024 The Violet Protocol. All rights reserved.</p>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Plateforme</h4>
<a className="text-slate-500 hover:text-slate-900 text-sm font-medium transition-colors" href="#">Annuaire</a>
<a className="text-slate-500 hover:text-slate-900 text-sm font-medium transition-colors" href="#">Comment Ã§a marche</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Support</h4>
<a className="text-slate-500 hover:text-slate-900 text-sm font-medium transition-colors" href="#">Centre d'aide</a>
<a className="text-slate-500 hover:text-slate-900 text-sm font-medium transition-colors" href="#">Contact</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">LÃ©gal</h4>
<a className="text-slate-500 hover:text-slate-900 text-sm font-medium transition-colors" href="#">ConfidentialitÃ©</a>
<a className="text-slate-500 hover:text-slate-900 text-sm font-medium transition-colors" href="#">Conditions</a>
</div>
</div>
</footer>

    </>
  );
};

export default CreationDeCompteClient3;
