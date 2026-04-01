import React from 'react';

const ContacterLArtisanInterfaceDeMessage = () => {
  return (
    <>
      
<div className="flex min-h-screen flex-col">
{/*  Top Navigation Bar  */}
<header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-4 md:px-10 lg:px-40 py-3">
<div className="flex items-center justify-between max-w-[1200px] mx-auto">
<div className="flex items-center gap-4">
<div className="text-primary flex items-center justify-center">
<span className="material-symbols-outlined text-3xl">construction</span>
</div>
<h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold tracking-tight">Artisanat</h2>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors text-sm font-medium" href="#">Accueil</a>
<a className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors text-sm font-medium" href="#">Artisans</a>
<a className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors text-sm font-medium" href="#">Tarifs</a>
</nav>
<div className="flex items-center gap-3">
<button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
<span className="material-symbols-outlined text-[20px]">notifications</span>
</button>
<button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
<span className="material-symbols-outlined text-[20px]">dark_mode</span>
</button>
<div className="h-10 w-10 rounded-full bg-slate-200 overflow-hidden ring-2 ring-primary/20">
<img className="h-full w-full object-cover" data-alt="Photo de profil de l'utilisateur" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHaS-HWCIkDuvCuaUUxSK6I207Sk8f4LfB6mqcBlno2G4IeCuBgTJ8sE2CRLoMOFziRgg7zZCBMnOAvncgBhNBsRhLIoCnfYLVBQ-BekcjBFSxFYfE3LbW7o8ZvuQMUJkJe-F1pSTSowHKIkTn5wmd77cDyecRCA4uo_TNs36F-uw75n8aZyUsZIlaelljV5hXIZ1T2hVGwYsJwijvtW1ZLTSvVGWd86eqFA_p8Vc2T5Q-Y4dYUgOlhJNAr3bA2KSc0du06WtLi5nd"/>
</div>
</div>
</div>
</header>
<main className="flex-1 max-w-[1200px] mx-auto w-full px-4 md:px-10 lg:px-40 py-6">
{/*  Breadcrumbs  */}
<nav className="flex items-center gap-2 text-sm mb-6 text-slate-500 dark:text-slate-400">
<a className="hover:text-primary" href="#">Accueil</a>
<span className="material-symbols-outlined text-xs">chevron_right</span>
<a className="hover:text-primary" href="#">Artisans</a>
<span className="material-symbols-outlined text-xs">chevron_right</span>
<a className="hover:text-primary" href="#">Profil Artisan</a>
<span className="material-symbols-outlined text-xs">chevron_right</span>
<span className="text-slate-900 dark:text-slate-100 font-medium">Contacter Ahmed Mansouri</span>
</nav>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
{/*  Left Column: Chat Interface  */}
<div className="lg:col-span-8 flex flex-col gap-6">
<div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
<div className="p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
<h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">Nouveau Message</h1>
<p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Expliquez votre projet à Ahmed pour obtenir un devis ou des informations.</p>
</div>
<div className="p-6 space-y-6">
{/*  Message Area  */}
<div className="flex flex-col gap-2">
<label className="text-sm font-semibold text-slate-700 dark:text-slate-300" htmlFor="message">Votre message</label>
<textarea className="w-full rounded-lg border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-4 focus:ring-2 focus:ring-primary focus:border-transparent text-slate-900 dark:text-slate-100 transition-all placeholder:text-slate-400" id="message" placeholder="Bonjour Ahmed, j'aimerais discuter d'un projet de menuiserie sur mesure..." rows="8"></textarea>
</div>
{/*  Attachments  */}
<div className="flex flex-col gap-3">
<p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Pièces jointes (optionnel)</p>
<div className="flex flex-wrap gap-3">
<button className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-dashed border-slate-200 dark:border-slate-800 hover:border-primary hover:bg-primary/5 transition-all group">
<span className="material-symbols-outlined text-slate-400 group-hover:text-primary">photo_camera</span>
<span className="text-sm font-medium text-slate-600 dark:text-slate-400 group-hover:text-primary">Photos</span>
</button>
<button className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-dashed border-slate-200 dark:border-slate-800 hover:border-primary hover:bg-primary/5 transition-all group">
<span className="material-symbols-outlined text-slate-400 group-hover:text-primary">description</span>
<span className="text-sm font-medium text-slate-600 dark:text-slate-400 group-hover:text-primary">Documents</span>
</button>
<button className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-dashed border-slate-200 dark:border-slate-800 hover:border-primary hover:bg-primary/5 transition-all group">
<span className="material-symbols-outlined text-slate-400 group-hover:text-primary">location_on</span>
<span className="text-sm font-medium text-slate-600 dark:text-slate-400 group-hover:text-primary">Localisation</span>
</button>
</div>
<p className="text-xs text-slate-400">Ajoutez des photos de l'espace ou des croquis pour aider Ahmed à mieux comprendre vos besoins.</p>
</div>
</div>
<div className="p-6 bg-slate-50/50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
<button className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                                Annuler
                            </button>
<button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-bold text-sm shadow-lg shadow-primary/20 flex items-center gap-2 transition-transform active:scale-95">
                                Envoyer le message
                                <span className="material-symbols-outlined text-sm">send</span>
</button>
</div>
</div>
</div>
{/*  Right Column: Artisan Sidebar Card  */}
<aside className="lg:col-span-4 space-y-6">
<div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
<div className="flex items-center gap-4 mb-6">
<div className="relative">
<div className="h-16 w-16 rounded-full overflow-hidden border-2 border-primary">
<img className="h-full w-full object-cover" data-alt="Portrait de Ahmed Mansouri, artisan menuisier" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBI0FnVNVGlepQ4SsJ56hu1lWx_4gSPbwtLzP3_Z9GS37mKDoVseXL5zH0LAOf_CJ5T7F057pEBrSA3XGG1nFb2hwbG9MCrw8XuOO8Ba28RGEdyEqLYgUnwjJxHGnPLuin-5_31Q3ADtSO7dBcIr5xxHo_bQlf-vxMHAlBTDYpNkYbWMjDAfAuR_AknaFfekgEjo36UymxZPR81OZxcmyu13SHpPqG428B9pPwV16SVkL5vlVsRGbzFknSMllq2vGCNqmtRmM-ArgPV"/>
</div>
<div className="absolute bottom-0 right-0 h-4 w-4 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full"></div>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-1">
<h3 className="font-bold text-slate-900 dark:text-slate-100">Ahmed Mansouri</h3>
<span className="material-symbols-outlined text-primary text-lg" title="Artisan Vérifié">verified</span>
</div>
<p className="text-sm text-slate-500 dark:text-slate-400">Expert Menuisier</p>
<span className="text-[10px] uppercase font-bold tracking-wider text-green-600 dark:text-green-400 mt-1 flex items-center gap-1">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                                    Disponible maintenant
                                </span>
</div>
</div>
<div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-lg">star</span>
</div>
<div>
<p className="text-sm font-bold">4.9/5</p>
<p className="text-xs text-slate-500">128 avis clients</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-lg">schedule</span>
</div>
<div>
<p className="text-sm font-bold">Réponse rapide</p>
<p className="text-xs text-slate-500">Habituellement en moins d'une heure</p>
</div>
</div>
</div>
<div className="mt-8">
<a className="block text-center py-2 text-sm font-bold text-primary hover:bg-primary/10 rounded-lg border border-primary/20 transition-colors" href="#">
                                Voir le profil complet
                            </a>
</div>
</div>
{/*  Trust Indicators  */}
<div className="bg-primary/5 dark:bg-primary/10 border border-primary/20 rounded-xl p-5">
<div className="flex gap-3">
<span className="material-symbols-outlined text-primary">security</span>
<div className="flex flex-col gap-1">
<p className="text-sm font-bold text-slate-900 dark:text-slate-100">Paiement Sécurisé</p>
<p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                    Vos fonds sont conservés en toute sécurité jusqu'à ce que vous validiez la fin des travaux.
                                </p>
</div>
</div>
</div>
<div className="px-2">
<p className="text-[11px] text-slate-400 dark:text-slate-500 uppercase font-bold tracking-widest mb-4">Missions récentes</p>
<div className="space-y-3">
<div className="flex gap-3">
<div className="h-10 w-10 rounded-lg bg-slate-200 overflow-hidden flex-shrink-0">
<img className="h-full w-full object-cover" data-alt="Photo d'une bibliothèque en bois" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwRSyJDzTnqjOqIG8z8h2b4dSw6rlmjTNW4ypwAHZKs88KLMJQd6gR6YRTg3FtEyHggahZA4uI68VIHrq8-PxHyTXkvc38VfcoCILc_o8AEhXRyY1DNqeKB_dn50y7SaAC_Z0mVUF9fwCiUmVpgxYgIlf5M9WnEqN_FqHvG1aSh7GIv9QLPYQ0_RwQkqAdAapMtcJ0nIEDFT8G32iBxll04kHHarg5RQKkF4WtvGFjI4AAkNFPybNXbvxODH2fRK6KRsi3-kgeUG1g"/>
</div>
<div className="flex flex-col">
<p className="text-xs font-bold truncate">Bibliothèque sur mesure</p>
<p className="text-[10px] text-slate-500">Terminé il y a 2 jours</p>
</div>
</div>
<div className="flex gap-3">
<div className="h-10 w-10 rounded-lg bg-slate-200 overflow-hidden flex-shrink-0">
<img className="h-full w-full object-cover" data-alt="Photo de parquet posé par un artisan" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkDdYR_16ZgMBBjkcrqbfkHynn35x1uDSapkHLUL0GLTE16q5Vi1vjZA7_hSSX4P4O3--eprI8-BkAubz0MFrTPexGv-hQyD7nUx8zlMzykRkrgG4f5Tmhv9ZaMDCFV8THxYJGk1Yxidhs29ZzfDJ4u9f06awlmZvEdcGfcjrF9j9n9TD47M3uCsXHraik5qiV4ffwFX5gG1xdjb76GT4F3dHcpFC-UWsNMXi4K-C3IiUGXb0IVde7li7k0B3ndoIlJLq10HAomNYy"/>
</div>
<div className="flex flex-col">
<p className="text-xs font-bold truncate">Rénovation Parquet Chêne</p>
<p className="text-[10px] text-slate-500">Terminé il y a 1 semaine</p>
</div>
</div>
</div>
</div>
</aside>
</div>
</main>
{/*  Footer Footer  */}
<footer className="mt-auto border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark py-10 px-4 md:px-10 lg:px-40">
<div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col items-center md:items-start gap-2">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary">construction</span>
<span className="font-bold text-lg">Artisanat</span>
</div>
<p className="text-xs text-slate-500 dark:text-slate-400">© 2024 Artisanat Platform. Tous droits réservés.</p>
</div>
<div className="flex gap-8">
<a className="text-xs font-medium text-slate-500 hover:text-primary" href="#">Conditions d'utilisation</a>
<a className="text-xs font-medium text-slate-500 hover:text-primary" href="#">Politique de confidentialité</a>
<a className="text-xs font-medium text-slate-500 hover:text-primary" href="#">Aide &amp; Support</a>
</div>
</div>
</footer>
</div>

    </>
  );
};

export default ContacterLArtisanInterfaceDeMessage;
