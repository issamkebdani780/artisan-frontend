import React from 'react';

const ConfirmationDeCreationDeCompte = () => {
  return (
    <>
      
{/*  Header  */}
<header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white">
<span className="material-symbols-outlined text-xl">handyman</span>
</div>
<h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">ArtisanDirect</h1>
</div>
<div className="flex items-center gap-4">
<button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
<span className="material-symbols-outlined">account_circle</span>
</button>
</div>
</div>
</header>
{/*  Main Content  */}
<main className="flex-grow flex items-center justify-center py-12 px-4">
<div className="max-w-xl w-full text-center space-y-8">
{/*  Success Icon  */}
<div className="relative mx-auto w-24 h-24 flex items-center justify-center bg-primary/10 rounded-full">
<div className="absolute inset-0 bg-primary/5 rounded-full animate-pulse"></div>
<span className="material-symbols-outlined text-primary text-6xl font-bold">check_circle</span>
</div>
{/*  Content  */}
<div className="space-y-4">
<h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                    Félicitations ! Votre compte a été créé avec succès.
                </h2>
<p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-md mx-auto">
                    Un e-mail de confirmation a été envoyé à votre adresse. Veuillez cliquer sur le lien pour activer votre compte.
                </p>
</div>
{/*  Image/Banner Decoration  */}
<div className="rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
<div className="w-full h-40 bg-gradient-to-r from-primary/20 via-primary/5 to-primary/20 flex items-center justify-center" data-alt="Modern abstract geometric blue gradient pattern background">
<span className="material-symbols-outlined text-primary/30 text-7xl">celebration</span>
</div>
</div>
{/*  CTA Buttons  */}
<div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
<button className="flex-1 min-w-[200px] h-14 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
<span className="material-symbols-outlined">person_edit</span>
                    Compléter mon profil
                </button>
<button className="flex-1 min-w-[200px] h-14 bg-white dark:bg-slate-900 border-2 border-primary/20 hover:border-primary text-primary font-bold rounded-xl transition-all flex items-center justify-center gap-2">
<span className="material-symbols-outlined">search</span>
                    Explorer les services
                </button>
</div>
{/*  Secondary Link  */}
<div className="pt-2">
<a className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium underline underline-offset-4 transition-colors" href="#">
                    Retour à l'accueil
                </a>
</div>
</div>
</main>
{/*  Footer  */}
<footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2 text-slate-400">
<span className="material-symbols-outlined">shield</span>
<span className="text-sm">Plateforme sécurisée et vérifiée</span>
</div>
<div className="flex gap-6 text-sm text-slate-500 dark:text-slate-400">
<a className="hover:text-primary transition-colors" href="#">Aide</a>
<a className="hover:text-primary transition-colors" href="#">Conditions d'utilisation</a>
<a className="hover:text-primary transition-colors" href="#">Confidentialité</a>
</div>
<p className="text-sm text-slate-400">
                    © 2024 ArtisanDirect. Tous droits réservés.
                </p>
</div>
</div>
</footer>

    </>
  );
};

export default ConfirmationDeCreationDeCompte;
