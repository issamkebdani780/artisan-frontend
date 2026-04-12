import React from 'react';

const CrAtionDeCompteClient = () => {
  return (
    <>
      ```html


<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>S'inscrire | ArtisanHub</title>

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>

<style>
        body { 
            font-family: 'Inter', sans-serif; 
            width: 1280px; 
            height: 1625px; 
            margin: 0 auto;
            position: relative;
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            display: inline-block;
            line-height: 1;
        }
        .premium-gradient {
            background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
        }
        .theme-color-shadow { 
            box-shadow: 0 20px 40px -12px rgba(37, 99, 235, 0.3); 
        }
        /* Lock dimensions as requested */
        .page-container {
            width: 1280px;
            height: 1625px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
        }
    </style>
<div className="page-container">
{/*  Header (Identical to SCREEN_76)  */}
<header className="fixed top-0 w-[1280px] z-50 bg-white/80 backdrop-blur-xl transition-all duration-300 border-b border-slate-100">
<div className="flex justify-between items-center h-20 px-8 max-w-7xl mx-auto">
<div className="text-2xl font-black text-slate-900 tracking-tighter">ArtisanHub</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-slate-500 hover:text-slate-900 transition-colors font-medium text-sm" href="#">Trouver des Pros</a>
<a className="text-slate-500 hover:text-slate-900 transition-colors font-medium text-sm" href="#">Comment √ßa marche</a>
<a className="text-slate-500 hover:text-slate-900 transition-colors font-medium text-sm" href="#">Tarifs</a>
</nav>
<div className="flex items-center gap-4">
<a className="text-slate-500 hover:text-slate-900 font-semibold text-sm px-4 py-2 transition-all duration-300" href="#">Connexion</a>
</div>
</div>
</header>
<main className="flex-grow pt-40 pb-20 flex flex-col items-center">
{/*  Account Type Selector (Updated Label and Active State)  */}
<div className="w-full max-w-xl flex p-1 bg-slate-100 rounded-xl mb-12 shadow-inner">
<button className="flex-1 py-3 px-4 rounded-lg text-sm font-bold transition-all duration-300 text-slate-500 hover:text-slate-700">Compte Artisan</button>
<button className="flex-1 py-3 px-4 rounded-lg text-sm font-bold transition-all duration-300 bg-white text-slate-900 shadow-sm">Compte Client</button>
</div>
{/*  Title Section  */}
<div className="mb-12 text-center">
<h2 className="text-5xl font-black text-slate-900 tracking-tighter mb-4">Cr√©er un compte client</h2>
<p className="text-on-surface-variant text-xl">Rejoignez-nous et commencez √† g√©rer vos projets aujourd'hui.</p>
</div>
{/*  Registration Form  */}
<section className="w-full max-w-3xl">
<form className="space-y-8 bg-white p-14 rounded-[2rem] shadow-2xl border border-slate-50">
{/*  Name Group  */}
<div className="grid grid-cols-2 gap-8">
<div className="flex flex-col gap-3">
<label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Pr√©nom</label>
<input className="w-full h-14 px-5 rounded-xl bg-surface-container-low border border-slate-100 focus:ring-2 focus:ring-primary/40 focus:border-transparent text-on-surface transition-all placeholder:text-slate-400" placeholder="Jean" type="text"/>
</div>
<div className="flex flex-col gap-3">
<label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Nom</label>
<input className="w-full h-14 px-5 rounded-xl bg-surface-container-low border border-slate-100 focus:ring-2 focus:ring-primary/40 focus:border-transparent text-on-surface transition-all placeholder:text-slate-400" placeholder="Dupont" type="text"/>
</div>
</div>
{/*  Contact Group  */}
<div className="grid grid-cols-2 gap-8">
<div className="flex flex-col gap-3">
<label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Email</label>
<input className="w-full h-14 px-5 rounded-xl bg-surface-container-low border border-slate-100 focus:ring-2 focus:ring-primary/40 focus:border-transparent text-on-surface transition-all placeholder:text-slate-400" placeholder="jean.dupont@exemple.com" type="email"/>
</div>
<div className="flex flex-col gap-3">
<label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">T√©l√©phone</label>
<div className="relative flex items-center">
<div className="absolute left-4 flex items-center gap-2 pointer-events-none border-r border-slate-200 pr-3">
<span className="text-sm font-bold text-slate-600">+213</span>
</div>
<input className="w-full h-14 pl-20 pr-5 rounded-xl bg-surface-container-low border border-slate-100 focus:ring-2 focus:ring-primary/40 focus:border-transparent text-on-surface transition-all" placeholder="555 12 34 56" type="tel"/>
</div>
</div>
</div>
{/*  Personal Info  */}
<div className="grid grid-cols-2 gap-8">
<div className="flex flex-col gap-3">
<label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Date de Naissance</label>
<input className="w-full h-14 px-5 rounded-xl bg-surface-container-low border border-slate-100 focus:ring-2 focus:ring-primary/40 focus:border-transparent text-on-surface transition-all" type="date"/>
</div>
<div className="flex flex-col gap-3">
<label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Ville</label>
<input className="w-full h-14 px-5 rounded-xl bg-surface-container-low border border-slate-100 focus:ring-2 focus:ring-primary/40 focus:border-transparent text-on-surface transition-all" placeholder="Alger" type="text"/>
</div>
</div>
{/*  Address  */}
<div className="flex flex-col gap-3">
<label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Adresse D√©taill√©e</label>
<input className="w-full h-14 px-5 rounded-xl bg-surface-container-low border border-slate-100 focus:ring-2 focus:ring-primary/40 focus:border-transparent text-on-surface transition-all" placeholder="N¬∞ 45, Rue des Fr√®res, Quartier Central" type="text"/>
</div>
{/*  Password Group  */}
<div className="grid grid-cols-2 gap-8">
<div className="flex flex-col gap-3">
<label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Mot de passe</label>
<input className="w-full h-14 px-5 rounded-xl bg-surface-container-low border border-slate-100 focus:ring-2 focus:ring-primary/40 focus:border-transparent text-on-surface transition-all" placeholder="‚DA¢‚DA¢‚DA¢‚DA¢‚DA¢‚DA¢‚DA¢‚DA¢" type="password"/>
</div>
<div className="flex flex-col gap-3">
<label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Confirmer</label>
<input className="w-full h-14 px-5 rounded-xl bg-surface-container-low border border-slate-100 focus:ring-2 focus:ring-primary/40 focus:border-transparent text-on-surface transition-all" placeholder="‚DA¢‚DA¢‚DA¢‚DA¢‚DA¢‚DA¢‚DA¢‚DA¢" type="password"/>
</div>
</div>
{/*  Password Requirements  */}
<div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-primary">
<h4 className="text-xs font-black text-slate-700 mb-4 uppercase tracking-tighter">Exigences de s√©curit√© :</h4>
<ul className="grid grid-cols-2 gap-4">
<li className="flex items-center gap-2 text-xs font-medium text-slate-600">
<span className="material-symbols-outlined text-[18px] text-green-500" >check_circle</span> 8+ caract√®res
                            </li>
<li className="flex items-center gap-2 text-xs font-medium text-slate-600">
<span className="material-symbols-outlined text-[18px] text-slate-300">circle</span> D√©bute par une lettre
                            </li>
<li className="flex items-center gap-2 text-xs font-medium text-slate-600">
<span className="material-symbols-outlined text-[18px] text-slate-300">circle</span> Contient un chiffre
                            </li>
</ul>
</div>
{/*  Consent  */}
<div className="flex items-start gap-4 py-2">
<input className="mt-1 w-6 h-6 rounded border-slate-300 text-primary focus:ring-primary/40 cursor-pointer" id="consent" type="checkbox"/>
<label className="text-sm font-medium text-on-surface-variant leading-relaxed" htmlFor="consent">
                            J'accepte les <a className="text-primary font-bold hover:underline" href="#">Conditions d'Utilisation</a> et la <a className="text-primary font-bold hover:underline" href="#">Politique de Confidentialit√©</a>.
                        </label>
</div>
{/*  CTA  */}
<div className="pt-4">
<button className="w-full h-16 premium-gradient text-white font-black text-xl rounded-2xl theme-color-shadow hover:opacity-95 active:scale-[0.98] transition-all flex items-center justify-center gap-4" type="submit">
                            S'inscrire maintenant
                            <span className="material-symbols-outlined text-2xl">arrow_forward</span>
</button>
</div>
{/*  Footer Link  */}
<div className="pt-2 text-center">
<p className="text-on-surface-variant font-medium">
                            Vous avez d√©j√† un compte ? 
                            <a className="text-primary font-black ml-1 hover:underline text-lg" href="#">Sign In</a>
</p>
</div>
</form>
</section>
</main>
{/*  Footer (Identical to SCREEN_76)  */}
<footer className="bg-white py-12 border-t border-slate-100">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 px-8 max-w-7xl mx-auto">
<div className="space-y-4">
<div className="text-xl font-bold text-slate-900 tracking-tighter">ArtisanHub</div>
<p className="text-sm text-slate-500 font-medium">¬© 2024 ArtisanHub. Cr√©√© pour l'Excellence.</p>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Plateforme</h4>
<a className="text-slate-500 hover:text-slate-900 text-sm font-medium transition-colors" href="#">Annuaire</a>
<a className="text-slate-500 hover:text-slate-900 text-sm font-medium transition-colors" href="#">Comment √ßa marche</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Support</h4>
<a className="text-slate-500 hover:text-slate-900 text-sm font-medium transition-colors" href="#">Centre d'aide</a>
<a className="text-slate-500 hover:text-slate-900 text-sm font-medium transition-colors" href="#">Contact</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">L√©gal</h4>
<a className="text-slate-500 hover:text-slate-900 text-sm font-medium transition-colors" href="#">Confidentialit√©</a>
<a className="text-slate-500 hover:text-slate-900 text-sm font-medium transition-colors" href="#">Conditions</a>
</div>
</div>
</footer>
</div>
```
    </>
  );
};

export default CrAtionDeCompteClient;
