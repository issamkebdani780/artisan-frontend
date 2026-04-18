import React from 'react';

const FormulaireDeContestationDeConstat = () => {
  return (
    <>
      
{/*  Top Navigation Bar  */}
<header className="border-b border-slate-200 bg-white sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between h-16 items-center">
<div className="flex items-center gap-2 text-primary">
<span className="material-symbols-outlined text-3xl">construction</span>
<h2 className="text-xl font-bold tracking-tight">ArtisanDirect</h2>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium hover:text-primary transition-colors" href="#">Tableau de bord</a>
<a className="text-sm font-medium hover:text-primary transition-colors border-b-2 border-primary pb-1" href="#">Missions</a>
<a className="text-sm font-medium hover:text-primary transition-colors" href="#">Support</a>
</nav>
<div className="flex items-center gap-4">
<div className="text-right hidden sm:block">
<p className="text-xs font-bold">Jean Dupont</p>
<p className="text-[10px] text-slate-500 uppercase tracking-wider">Menuisier Expert</p>
</div>
<div className="size-10 rounded-full bg-slate-200 flex items-center justify-center overflow-hidden border-2 border-primary/20">
<img className="w-full h-full object-cover" data-alt="Portrait of a professional artisan" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbYjDz9ukx2bJ9GCf4ytBMwHbyS8DUPLTIvrEuOt9hkBR7BpmLj4Ii6_jlNeKIKbOZ5d490FmGnr8yReSENmvfLUubXXYpcwJLnge74xURRQuU2gLRAc_r8ZG2jIT2knS-OPRsnCvogcHMBdx9fD8d2Dl0sSh9bSPvIQDaBHc5mOdG1mec_N0HvOcqBQO41dPvy4SoT6ym3_g05IsVrMuvYKBw-pRMPmwLqAsnONpyPUSCXI_LcyGRrUz8iGaXgo55AjGJds4tX1cp"/>
</div>
</div>
</div>
</div>
</header>
<main className="max-w-4xl mx-auto px-4 py-8">
{/*  Breadcrumbs  */}
<nav className="flex mb-6 text-sm text-slate-500 gap-2 items-center">
<a className="hover:text-primary" href="#">Missions</a>
<span className="material-symbols-outlined text-xs">chevron_right</span>
<a className="hover:text-primary" href="#">Avertissements</a>
<span className="material-symbols-outlined text-xs">chevron_right</span>
<span className="text-slate-900 font-medium">Contester le constat</span>
</nav>
{/*  Header Section  */}
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
<div>
<h1 className="text-3xl font-black tracking-tight mb-2">Contester le constat</h1>
<div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold border border-primary/20">
                    Référence : #AV-2023-0891
                </div>
</div>
<button className="px-6 py-2.5 rounded-xl border border-slate-300 font-bold text-sm hover:bg-slate-50 transition-all">
                Annuler la procédure
            </button>
</div>
{/*  Main Form Container  */}
<div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
<form className="space-y-8">
{/*  Section 1: Evidence Selection  */}
<section>
<div className="flex items-center gap-2 mb-4">
<span className="material-symbols-outlined text-primary">checklist</span>
<h3 className="text-lg font-bold">Éléments à contester</h3>
</div>
<p className="text-sm text-slate-500 mb-4">Sélectionnez les preuves administratives avec lesquelles vous n'êtes pas d'accord :</p>
<div className="grid grid-cols-1 gap-3">
<label className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors group">
<input className="size-5 rounded border-slate-300 text-primary focus:ring-primary" type="checkbox"/>
<div className="flex-1">
<p className="font-semibold text-sm">Preuve photo n°1 : Retard de livraison constaté</p>
<p className="text-xs text-slate-400">Ajouté le 12/10/2023 par Admin-42</p>
</div>
<span className="material-symbols-outlined text-slate-300 group-hover:text-primary">image</span>
</label>
<label className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors group">
<input className="size-5 rounded border-slate-300 text-primary focus:ring-primary" type="checkbox"/>
<div className="flex-1">
<p className="font-semibold text-sm">Preuve photo n°2 : Qualité des matériaux non-conforme</p>
<p className="text-xs text-slate-400">Ajouté le 12/10/2023 par Admin-42</p>
</div>
<span className="material-symbols-outlined text-slate-300 group-hover:text-primary">image</span>
</label>
<label className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors group">
<input className="size-5 rounded border-slate-300 text-primary focus:ring-primary" type="checkbox"/>
<div className="flex-1">
<p className="font-semibold text-sm">Rapport de constatation technique - Expert BTP</p>
<p className="text-xs text-slate-400">PDF Document - 2.4 Mo</p>
</div>
<span className="material-symbols-outlined text-slate-300 group-hover:text-primary">description</span>
</label>
</div>
</section>
<hr className="border-slate-100"/>
{/*  Section 2: Detailed Justification  */}
<section>
<div className="flex items-center gap-2 mb-4">
<span className="material-symbols-outlined text-primary">edit_note</span>
<h3 className="text-lg font-bold">Justification détaillée</h3>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-slate-700" htmlFor="justification">
                            Expliquez en détail les raisons de votre contestation (obligatoire)
                        </label>
<textarea className="w-full rounded-xl border-slate-300 bg-white focus:border-primary focus:ring-primary text-sm" id="justification" placeholder="Décrivez les faits, les circonstances et apportez des précisions sur les éléments contestés..." rows="6"></textarea>
</div>
</section>
<hr className="border-slate-100"/>
{/*  Section 3: File Upload  */}
<section>
<div className="flex items-center gap-2 mb-4">
<span className="material-symbols-outlined text-primary">upload_file</span>
<h3 className="text-lg font-bold">Preuves contradictoires</h3>
</div>
<p className="text-sm text-slate-500 mb-4">Ajoutez des photos de chantier, factures d'achats ou tout document justifiant votre version des faits.</p>
<div className="border-2 border-dashed border-slate-200 rounded-xl p-8 flex flex-col items-center justify-center bg-slate-50/50 hover:border-primary transition-colors group cursor-pointer">
<div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined">cloud_upload</span>
</div>
<p className="text-sm font-semibold mb-1">Cliquez pour téléverser ou glissez-déposez</p>
<p className="text-xs text-slate-400">PNG, JPG ou PDF jusqu'à 10Mo</p>
<input className="hidden" multiple="" type="file"/>
</div>
</section>
{/*  Warning Message  */}
<div className="bg-amber-50 border border-amber-200 p-4 rounded-xl flex gap-3">
<span className="material-symbols-outlined text-amber-600 shrink-0">warning</span>
<div className="text-sm text-amber-800">
<p className="font-bold mb-1">Attention aux fausses déclarations</p>
<p>Toute fausse déclaration ou falsification de document peut entraîner des sanctions plus sévères, incluant la suspension définitive de votre compte ArtisanDirect.</p>
</div>
</div>
{/*  Submit Section  */}
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="flex-1 bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2" type="submit">
<span className="material-symbols-outlined">send</span>
                        Envoyer ma contestation
                    </button>
<button className="px-8 py-4 rounded-xl border border-slate-200 font-bold hover:bg-slate-50 transition-colors" type="button">
                        Sauvegarder en brouillon
                    </button>
</div>
</form>
</div>
</main>
<footer className="mt-20 border-t border-slate-200 bg-white py-12">
<div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 text-primary mb-4">
<span className="material-symbols-outlined text-2xl">construction</span>
<span className="text-lg font-bold">ArtisanDirect</span>
</div>
<p className="text-xs text-slate-500 leading-relaxed">
                    La plateforme de référence pour les artisans qualifiés. Connectez-vous aux meilleurs projets et développez votre activité en toute confiance.
                </p>
</div>
<div>
<h4 className="font-bold text-sm mb-4 uppercase tracking-widest text-slate-400">Navigation</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-primary transition-colors" href="#">Mon Compte</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Historique des missions</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Paiements</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-sm mb-4 uppercase tracking-widest text-slate-400">Légal</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-primary transition-colors" href="#">Conditions Générales</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Politique de confidentialité</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Règlement des litiges</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-sm mb-4 uppercase tracking-widest text-slate-400">Assistance</h4>
<div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
<p className="text-xs mb-2">Besoin d'aide pour votre contestation ?</p>
<a className="text-primary font-bold text-sm flex items-center gap-2" href="mailto:support@artisandirect.com">
<span className="material-symbols-outlined text-sm">mail</span>
        Contactez le support
                    </a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2023 ArtisanDirect SAS. Tous droits réservés.</p>
<div className="flex gap-4">
<span className="size-8 rounded-full bg-slate-100 flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-all">
<span className="material-symbols-outlined text-sm">public</span>
</span>
<span className="size-8 rounded-full bg-slate-100 flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-all">
<span className="material-symbols-outlined text-sm">shield</span>
</span>
</div>
</div>
</footer>

    </>
  );
};

export default FormulaireDeContestationDeConstat;

