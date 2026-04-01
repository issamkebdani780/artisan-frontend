import React from 'react';

const FournirUneExplication = () => {
  return (
    <>
      
<div className="layout-container flex flex-col min-h-screen">
{/*  Top Navigation Bar  */}
<header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark px-6 md:px-20 lg:px-40 py-4 sticky top-0 z-50">
<div className="flex items-center gap-4">
<div className="text-primary">
<svg className="size-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z" fill="currentColor"></path>
</svg>
</div>
<h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white uppercase">ArtisanDirect</h1>
</div>
<div className="flex gap-3">
<button className="flex size-10 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition-colors">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="flex size-10 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition-colors">
<span className="material-symbols-outlined">account_circle</span>
</button>
</div>
</header>
<main className="flex-1 flex justify-center py-8 px-6">
<div className="max-w-4xl w-full">
{/*  Header Content  */}
<div className="mb-8">
<nav className="flex items-center gap-2 text-sm text-slate-500 mb-4">
<span>Tableau de bord</span>
<span className="material-symbols-outlined text-sm">chevron_right</span>
<span>Avertissements</span>
<span className="material-symbols-outlined text-sm">chevron_right</span>
<span className="text-primary font-medium">Justification</span>
</nav>
<h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Fournir une explication</h2>
<div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-lg border border-primary/20">
<span className="material-symbols-outlined text-base">info</span>
<span className="text-sm font-semibold">Référence du dossier: AD-2024-0812</span>
</div>
</div>
{/*  Form Card  */}
<div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
<div className="p-6 md:p-8 space-y-8">
{/*  Main Explanation Section  */}
<section>
<div className="flex items-center gap-2 mb-4">
<span className="material-symbols-outlined text-primary">description</span>
<h3 className="text-lg font-bold text-slate-900 dark:text-white">Détails de la justification</h3>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="explanation">Votre explication détaillée</label>
<textarea className="w-full rounded-xl border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:border-primary focus:ring-primary/20 transition-all placeholder:text-slate-400" id="explanation" placeholder="Veuillez saisir ici les détails concernant l'avertissement reçu. Expliquez les circonstances et les mesures correctives prises..." rows="8"></textarea>
<p className="text-xs text-slate-500 italic">Minimum 100 caractères requis pour la validation du dossier.</p>
</div>
</section>
<hr className="border-slate-100 dark:border-slate-800"/>
{/*  Documents Section  */}
<section>
<div className="flex items-center gap-2 mb-4">
<span className="material-symbols-outlined text-primary">upload_file</span>
<h3 className="text-lg font-bold text-slate-900 dark:text-white">Documents justificatifs</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
{/*  Upload Box  */}
<div className="border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:border-primary hover:bg-primary/5 transition-all cursor-pointer group">
<div className="size-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
<span className="material-symbols-outlined">add</span>
</div>
<p className="font-semibold text-slate-900 dark:text-white">Ajouter un document</p>
<p className="text-sm text-slate-500">PDF, JPG ou PNG (Max 10MB)</p>
</div>
{/*  Guidelines Box  */}
<div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 border border-slate-100 dark:border-slate-800">
<h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3">Recommandations :</h4>
<ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
<li className="flex gap-2">
<span className="material-symbols-outlined text-xs text-primary">check_circle</span>
<span>Photos des travaux réalisés ou corrigés.</span>
</li>
<li className="flex gap-2">
<span className="material-symbols-outlined text-xs text-primary">check_circle</span>
<span>Copies de factures ou de bons de livraison.</span>
</li>
<li className="flex gap-2">
<span className="material-symbols-outlined text-xs text-primary">check_circle</span>
<span>Attestations d'assurance ou certificats.</span>
</li>
</ul>
</div>
</div>
</section>
{/*  Confidentiality Notice  */}
<div className="flex items-start gap-3 p-4 bg-slate-100 dark:bg-slate-800/80 rounded-lg border border-slate-200 dark:border-slate-700">
<span className="material-symbols-outlined text-slate-500">lock</span>
<p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                Les informations fournies dans ce formulaire sont strictement confidentielles et traitées uniquement par le service administratif d'ArtisanDirect pour l'examen de votre dossier.
                            </p>
</div>
</div>
{/*  Actions Footer  */}
<div className="bg-slate-50 dark:bg-slate-800/30 px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row justify-end gap-3">
<button className="px-6 py-2.5 rounded-xl text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                            Annuler
                        </button>
<button className="px-8 py-2.5 rounded-xl text-sm font-bold bg-primary text-white shadow-lg shadow-primary/20 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2">
<span>Envoyer l'explication</span>
<span className="material-symbols-outlined text-sm">send</span>
</button>
</div>
</div>
{/*  Assistance footer  */}
<div className="mt-8 text-center">
<p className="text-sm text-slate-500">
                        Besoin d'aide pour remplir ce formulaire ? 
                        <a className="text-primary font-semibold hover:underline" href="#">Contacter le support artisan</a>
</p>
</div>
</div>
</main>
<footer className="bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 py-6 px-6 text-center text-xs text-slate-400 uppercase tracking-widest">
            © 2024 ArtisanDirect - Plateforme Professionnelle de Confiance
        </footer>
</div>

    </>
  );
};

export default FournirUneExplication;
