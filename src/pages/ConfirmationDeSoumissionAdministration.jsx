import React from 'react';

const ConfirmationDeSoumissionAdministration = () => {
  return (
    <>
      
{/*  Header / TopNavBar  */}
<header className="border-b border-slate-200 bg-white px-4 lg:px-20 py-3">
<div className="max-w-7xl mx-auto flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="bg-primary p-1.5 rounded-lg text-white">
<span className="material-symbols-outlined block">handyman</span>
</div>
<h2 className="text-slate-900 text-xl font-bold tracking-tight">ArtisanDirect</h2>
</div>
<div className="flex items-center gap-4">
<button className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors">
<span className="material-symbols-outlined block">notifications</span>
</button>
<div className="h-8 w-[1px] bg-slate-200 mx-1"></div>
<div className="flex items-center gap-3">
<div className="text-right hidden sm:block">
<p className="text-sm font-semibold text-slate-900 leading-tight">Jean Artisan</p>
<p className="text-xs text-slate-500">Menuisier</p>
</div>
<div className="size-10 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Photo de profil d'un artisan souriant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfEkL8bGgK-_9jFvkUPFvyeHNzc7x2mWqt-YDoC5FLC8oTFV9v0yQ3O2AX8HNmYV9VGMYs_bOr8s2oJNSuvrVk8_EZqXyUSf02lahN7SVzDrRHZkdTiKsKF7lZwpr7s7rmxlCyZwHrWvnXu5QooLL-JMY200p1YdlKf6vNmcYWpYlSj96yuQHmXCy8NrrJAHU7pU9vbHFGkzEr0eHo0tkZcXnwvOwYhd-BiV0DXmAc6Qhap9-ijWoTd8WbKebdmSgWVuyeTIP66Pct"/>
</div>
</div>
</div>
</div>
</header>
<main className="flex-grow flex items-center justify-center px-4 py-12">
<div className="max-w-2xl w-full">
{/*  Success Card  */}
<div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
{/*  Banner Image/Pattern  */}
<div className="h-32 bg-primary/10 relative flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ec5b13_1px,transparent_1px)] [background-size:20px_20px]"></div>
<div className="bg-primary text-white size-16 rounded-full flex items-center justify-center shadow-lg shadow-primary/30 z-10">
<span className="material-symbols-outlined !text-4xl">check_circle</span>
</div>
</div>
<div className="p-8 text-center">
<h1 className="text-3xl font-bold text-slate-900 mb-2">Confirmation de soumission</h1>
<p className="text-slate-600 text-lg">Votre réponse a été soumise avec succès</p>
{/*  Reference Box  */}
<div className="mt-8 mb-8 p-6 bg-slate-50 rounded-xl border border-dashed border-slate-300 inline-block w-full">
<p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">Numéro de référence</p>
<p className="text-3xl font-mono font-bold text-primary tracking-wider">AD-784920X</p>
</div>
<div className="space-y-4 mb-10 max-w-md mx-auto">
<div className="flex items-start gap-3 text-left">
<span className="material-symbols-outlined text-primary mt-0.5">info</span>
<p className="text-sm text-slate-600">
                                L'administration examinera vos documents et votre réponse dans un délai de <strong>48 heures ouvrées</strong>. 
                                Vous recevrez une notification dès que votre dossier sera mis à jour.
                            </p>
</div>
</div>
{/*  Action Buttons  */}
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all shadow-md shadow-primary/20 gap-2" href="#">
<span className="material-symbols-outlined">dashboard</span>
                            Retourner au tableau de bord
                        </a>
<a className="inline-flex items-center justify-center px-6 py-3 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold rounded-xl transition-all gap-2" href="#">
<span className="material-symbols-outlined">gavel</span>
                            Voir mes recours
                        </a>
</div>
</div>
</div>
{/*  Help Footer  */}
<p className="text-center text-slate-500 text-sm mt-8">
                Besoin d'aide ? <a className="text-primary font-semibold hover:underline" href="#">Contacter le support ArtisanDirect</a>
</p>
</div>
</main>
{/*  Footer  */}
<footer className="bg-white border-t border-slate-200 py-8 px-4 lg:px-20 mt-auto">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary">handyman</span>
<span className="font-bold text-slate-900">ArtisanDirect</span>
<span className="text-slate-400 mx-2">|</span>
<p className="text-sm text-slate-500">© 2024 Plateforme Administrative des Artisans</p>
</div>
<div className="flex gap-6">
<a className="text-sm text-slate-500 hover:text-primary transition-colors" href="#">Mentions légales</a>
<a className="text-sm text-slate-500 hover:text-primary transition-colors" href="#">Politique de confidentialité</a>
<a className="text-sm text-slate-500 hover:text-primary transition-colors" href="#">Aide</a>
</div>
</div>
</footer>

    </>
  );
};

export default ConfirmationDeSoumissionAdministration;
