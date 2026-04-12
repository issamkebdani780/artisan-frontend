import React from 'react';

const CreationDeCompteClientArtisan = () => {
  return (
    <>
      
<header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl transition-all duration-300 border-b border-slate-100">
<div className="flex justify-between items-center h-20 px-8 max-w-full mx-auto">
<div className="text-2xl font-black text-slate-900 tracking-tighter">ArtisanHub</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-slate-500 hover:text-slate-900 transition-colors font-medium text-sm" href="#">Trouver des Pros</a>
<a className="text-slate-500 hover:text-slate-900 transition-colors font-medium text-sm" href="#">Comment ça marche</a>
<a className="text-slate-500 hover:text-slate-900 transition-colors font-medium text-sm" href="#">Tarifs</a>
</nav>
<div className="flex items-center gap-4">
<a className="text-slate-500 hover:text-slate-900 font-semibold text-sm px-4 py-2 transition-all duration-300" href="#">Connexion</a>
</div>
</div>
</header>
<main className="min-h-screen flex flex-col lg:flex-row pt-20">
{/*  Left Side: Visual & Inspiration  */}
<section className="hidden lg:flex w-1/2 relative overflow-hidden bg-slate-900">
<img alt="Professionnel" className="absolute inset-0 w-full h-full object-cover opacity-60" id="side-image" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsz9-zVUjve2U7W-lbCFlSBNhNC36UnG10fWA0uTqL36nQ-ckEqXFJGeVNZdhaRJLo2PUNQLqvHACrbrGtcBJQQHkpGBM3ODLvlQzG2Vm9GQQvYrfQOjtsLUxuki4ObxF_uVxtq7SvjozYSnNDK8e30LASe2OyfizPQ42Uvq_JnjogEAJaH-3fOkZcXPqGSc3BYBT117c9R6ceoooZxTHnkrXycNRmjiy8OMKSmbGxIxuEX_zB0G1XZml4dS09KNKBRoTDN8QbGfRl"/>
<div className="relative z-10 flex flex-col justify-end p-20 w-full bg-gradient-to-t from-slate-950/90 via-transparent to-transparent">
<div className="space-y-6 max-w-lg">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-orange/20 text-primary-orange border border-primary-orange/30 text-xs font-bold tracking-widest uppercase">REJOIGNEZ L'ÉLITE</span>
<h1 className="text-5xl font-black text-white leading-tight tracking-tighter">Rejoignez l'élite des <span className="text-primary-orange">services professionnels.</span></h1>
<p className="text-lg text-slate-300 leading-relaxed font-light">Accédez à un réseau exclusif de professionnels vérifiés et gérez vos projets en toute sérénité avec ArtisanHub.</p>
{/*  Bento-style Benefits Grid  */}
<div className="grid grid-cols-1 gap-4 pt-8">
<div className="glass-panel p-6 rounded-xl border border-white/10 flex items-start gap-4">
<div className="w-12 h-12 rounded-lg bg-primary-orange flex items-center justify-center flex-shrink-0 shadow-lg">
<span className="material-symbols-outlined text-white">verified</span>
</div>
<div>
<h3 className="font-bold text-slate-900">Pros Vérifiés</h3>
<p className="text-sm text-slate-600 mt-1">Chaque membre subit un processus de vérification rigoureux en 5 étapes.</p>
</div>
</div>
<div className="glass-panel p-6 rounded-xl border border-white/10 flex items-start gap-4">
<div className="w-12 h-12 rounded-lg bg-primary-orange flex items-center justify-center flex-shrink-0 shadow-lg">
<span className="material-symbols-outlined text-white">payments</span>
</div>
<div>
<h3 className="font-bold text-slate-900">Paiements Sécurisés</h3>
<p className="text-sm text-slate-600 mt-1">Infrastructure de paiement cryptée de bout en bout avec protection contre la fraude.</p>
</div>
</div>
<div className="glass-panel p-6 rounded-xl border border-white/10 flex items-start gap-4">
<div className="w-12 h-12 rounded-lg bg-primary-orange flex items-center justify-center flex-shrink-0 shadow-lg">
<span className="material-symbols-outlined text-white">support_agent</span>
</div>
<div>
<h3 className="font-bold text-slate-900">Support 24/7</h3>
<p className="text-sm text-slate-600 mt-1">Une équipe de conciergerie dédiée disponible à tout moment pour vous assister.</p>
</div>
</div>
</div><div className="mt-8 glass-panel p-6 rounded-xl border-l-4 border-primary-orange shadow-2xl">
<p className="text-on-surface-variant text-sm italic">"ArtisanHub a transformé notre gestion de prestataires. La qualité et la sécurité sont sans égales."</p>
<div className="mt-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-300 overflow-hidden">
<img alt="Professional headshot" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBf2Ev0e3V8ZBqYJNP-1fCYadYsOWKWXPueWcbDCjxnpRNAxXsm51y3px1Yio_rijkPNvkpI8Pyyb764BIlJKcQ0RDCMFqtx7Xm44WlHXmRpi6YzEJ-DlL8xO8C0mza1NK4xjqGN6s9bIXIxdO9yiukTYeuPrMtluL9xr7slFdTpjKrbt9Sl-hWxYS5sZx1A_aXBtXAQbvwV63KNQqJlKwrH87KuEhezaZE7UyjGyWlwCZh2dbw8_BiodrQF9F2m1p9cdUJ1URzyQsT"/>
</div>
<span className="text-xs font-bold text-slate-900">Directeur Opérations, TechCorp</span>
</div>
</div>
</div>
</div>
</section>
{/*  Right Side: Registration Form  */}
<section className="w-full lg:w-1/2 bg-surface flex items-center justify-center py-12 px-6 sm:px-12 lg:px-20">
<div className="w-full max-w-xl">
{/*  Account Type Selector  */}
<div className="flex p-1 bg-slate-100 rounded-xl mb-10">
<button className="flex-1 py-3 px-4 rounded-lg text-sm font-bold transition-all duration-300 bg-white text-slate-900 shadow-sm" id="btn-artisan" onclick="switchTheme('artisan')">Compte Artisan</button>
<button className="flex-1 py-3 px-4 rounded-lg text-sm font-bold transition-all duration-300 text-slate-500 hover:text-slate-700" id="btn-client" onclick="switchTheme('client')">Compte Client</button>
</div>
<div className="mb-10 text-center lg:text-left">
<h2 className="text-3xl font-black text-slate-900 tracking-tighter">
<span className="artisan-only">Créer votre profil Artisan</span>
<span className="client-only">Créer votre compte Client</span>
</h2>
<p className="text-on-surface-variant mt-2">Commencez votre aventure avec ArtisanHub dès aujourd'hui.</p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="flex flex-col gap-2">
<label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Nom Complet</label>
<input className="w-full h-12 px-4 rounded-lg bg-surface-container-high border-none focus:ring-2 theme-color-ring text-on-surface transition-all" placeholder="Rachid Mazouni" required="" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Date de Naissance</label>
<input className="w-full h-12 px-4 rounded-lg bg-surface-container-high border-none focus:ring-2 theme-color-ring text-on-surface transition-all" required="" type="date"/>
</div>
</div>
{/*  Artisan Specific Fields  */}
<div className="artisan-only p-5 bg-orange-50 rounded-xl border border-orange-100 flex flex-col gap-4">
<div className="flex flex-col gap-2">
<label className="text-xs font-bold uppercase tracking-wider text-orange-700 ml-1">Catégorie Professionnelle</label>
<select className="w-full h-14 px-4 rounded-lg bg-white border-2 border-orange-200 focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 text-on-surface transition-all font-semibold">
<option>Sélectionnez votre spécialité</option>
<option>Maître Charpentier</option>
<option>Architecte d'Intérieur</option>
<option>Artisan Métallier</option>
<option>Paysagiste</option>
<option>Spécialiste de l'Éclairage</option>
</select>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-bold uppercase tracking-wider text-orange-700 ml-1">Années d'Expérience</label>
<input className="w-full h-12 px-4 rounded-lg bg-white border-none focus:ring-2 focus:ring-orange-500/40 text-on-surface transition-all" min="0" placeholder="Ex: 5" type="number"/>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Email</label>
<input className="w-full h-12 px-4 rounded-lg bg-surface-container-high border-none focus:ring-2 theme-color-ring text-on-surface transition-all" placeholder="contact@exemple.com" required="" type="email"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="flex flex-col gap-2">
<label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Numéro de Téléphone</label>
<div className="relative flex items-center">
<div className="absolute left-3 flex items-center gap-2 pointer-events-none border-r border-slate-200 pr-2">
<img alt="Algeria Flag" className="w-5 h-auto rounded-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYzGJULf4ljdt5Q7Y66rU5iczjLEiz7FGEuwTx14WaDgfXgNa-liLI3kDutTNEB0Ni1zx_bjzELxiWTJyqYO2qLZcsGE9D1Kj-rAxe4H7RRFyw-hcl4ARweEpbnyqPye9oyMv9GicyikYauJgKnlw7Ov8QhupulpnTNVmiugrhnJqnD-2eCMSymvtT6Zdh0TfOPNNgUcQ5ypUxSaeKyheC_2BtWwxzdayYpXVP-1E4-BwYtLLluLcH5r0JFmtvVCzXsuXm8C5hGG0_"/>
<span className="text-sm font-semibold text-slate-500 tracking-tight">+213</span>
</div>
<input className="w-full h-12 pl-20 pr-4 rounded-lg bg-surface-container-high border-none focus:ring-2 theme-color-ring text-on-surface transition-all" placeholder="05 50 12 34 56" required="" type="tel"/>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Adresse / Ville</label>
<input className="w-full h-12 px-4 rounded-lg bg-surface-container-high border-none focus:ring-2 theme-color-ring text-on-surface transition-all" placeholder="Alger" required="" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="flex flex-col gap-2">
<label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Mot de passe</label>
<input className="w-full h-12 px-4 rounded-lg bg-surface-container-high border-none focus:ring-2 theme-color-ring text-on-surface transition-all" placeholder="••••••••" required="" type="password"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Confirmer</label>
<input className="w-full h-12 px-4 rounded-lg bg-surface-container-high border-none focus:ring-2 theme-color-ring text-on-surface transition-all" placeholder="••••••••" required="" type="password"/>
</div>
</div>
{/*  Password Validation Hints  */}
<div className="bg-surface-container-low p-4 rounded-lg border-l-4 theme-color-border">
<h4 className="text-xs font-bold text-slate-700 mb-2 uppercase">Exigences :</h4>
<ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
<li className="flex items-center gap-2 text-xs text-slate-600">
<span className="material-symbols-outlined text-[14px] text-green-500" >check_circle</span> 8+ Caractères
                            </li>
<li className="flex items-center gap-2 text-xs text-slate-600">
<span className="material-symbols-outlined text-[14px] text-slate-400">circle</span> Un symbole spécial
                            </li>
<li className="flex items-center gap-2 text-xs text-slate-600">
<span className="material-symbols-outlined text-[14px] text-slate-400">circle</span> Une majuscule
                            </li>
<li className="flex items-center gap-2 text-xs text-slate-600">
<span className="material-symbols-outlined text-[14px] text-slate-400">circle</span> Un chiffre
                            </li>
</ul>
</div>
<div className="flex items-start gap-3 py-2">
<input className="mt-1 w-5 h-5 rounded border-none bg-surface-container-high theme-color-text focus:ring-opacity-40" required="" type="checkbox"/>
<label className="text-sm text-on-surface-variant leading-relaxed">
                            J'accepte les <a className="theme-color-text font-bold hover:underline" href="#">Conditions d'Utilisation</a> et la <a className="theme-color-text font-bold hover:underline" href="#">Politique de Confidentialité</a>.
                        </label>
</div>
<button className="w-full h-14 theme-color-bg text-white font-black text-lg rounded-xl theme-color-shadow hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-3" type="submit">
<span className="artisan-only">S'inscrire en tant que Professionnel</span>
<span className="client-only">S'inscrire en tant que Client</span>
<span className="material-symbols-outlined">arrow_forward</span>
</button>
<div className="pt-6 text-center">
<p className="text-on-surface-variant text-sm">
                            Déjà inscrit ? <a className="theme-color-text font-black ml-1 hover:underline" href="#">Connexion</a>
</p>
</div>
</form>
</div>
</section>
</main>
<footer className="bg-slate-50 py-12 border-t border-slate-100">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-12 max-w-7xl mx-auto">
<div className="space-y-4">
<div className="text-lg font-bold text-slate-900">ArtisanHub</div>
<p className="text-sm text-slate-500 font-medium">© 2024 ArtisanHub. Créé pour l'Excellence.</p>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Plateforme</h4>
<a className="text-slate-500 hover:text-slate-900 text-sm font-medium transition-colors" href="#">Annuaire</a>
<a className="text-slate-500 hover:text-slate-900 text-sm font-medium transition-colors" href="#">Comment ça marche</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Support</h4>
<a className="text-slate-500 hover:text-slate-900 text-sm font-medium transition-colors" href="#">Centre d'aide</a>
<a className="text-slate-500 hover:text-slate-900 text-sm font-medium transition-colors" href="#">Contact</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Légal</h4>
<a className="text-slate-500 hover:text-slate-900 text-sm font-medium transition-colors" href="#">Confidentialité</a>
<a className="text-slate-500 hover:text-slate-900 text-sm font-medium transition-colors" href="#">Conditions</a>
</div>
</div>
</footer>


    </>
  );
};

export default CreationDeCompteClientArtisan;
