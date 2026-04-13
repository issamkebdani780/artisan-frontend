import React from 'react';

const OuvertureDUnRecoursAdministratif = () => {
  return (
    <>
      
<div className="layout-container flex h-full grow flex-col">
{/*  Top Navigation Bar  */}
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 bg-white px-6 md:px-10 py-3">
<div className="flex items-center gap-4">
<div className="size-8 text-primary">
<svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" fill="currentColor"></path>
</svg>
</div>
<h2 className="text-slate-900 text-lg font-bold leading-tight tracking-tight">Tableau de bord Artisan</h2>
</div>
<div className="flex flex-1 justify-end gap-4 md:gap-8 items-center">
<div className="flex gap-2">
<button className="flex size-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="flex size-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors">
<span className="material-symbols-outlined" data-icon="translate">translate</span>
</button>
</div>
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-primary/20" data-alt="Portrait of a craftsman profile picture" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAK1ZD-9obWx7XEHoRcfQQCMpwyJ4x76r0UZrCHieE74PCPCr2vftLKHM2zmPjAa0hcPBb0ldK4hznblh_ZeWc1Slk1fbFbNtG5FHb4l4yJ-9vR3gDO9H1_yCQ_o2CV0hIR1u2A00A3-rka3nLPQhr_m7KrHuc6SwUnwy20ckZOi6REj7uPV3OrEkybeuEU3vAkdKGyNu4D4wfxqLp_7FSofiox3RvFx8vJgY_K1PM8tDOyD6NPgxY_2WY7Oss-MX2CTPNvFvR4TqOD");'></div>
</div>
</header>
<main className="flex-1 flex justify-center py-8 px-4 md:px-10">
<div className="max-w-[800px] w-full flex flex-col gap-6">
{/*  Page Title and Reference  */}
<div className="flex flex-col gap-2">
<h1 className="text-slate-900 text-3xl font-bold leading-tight">Soumettre un Recours Administratif</h1>
<div className="flex items-center gap-2">
<span className="px-2.5 py-1 rounded bg-slate-100 text-slate-500 text-xs font-mono font-bold tracking-wider">REF: AD-2024-0812</span>
<span className="text-slate-400 text-sm">â€¢ Warning reference for appeal</span>
</div>
</div>
{/*  Info Box  */}
<div className="bg-primary/5 border border-primary/20 rounded-xl p-5 flex gap-4">
<div className="text-primary flex-shrink-0">
<span className="material-symbols-outlined" data-icon="info">info</span>
</div>
<div className="flex flex-col gap-1">
<p className="text-slate-900 text-base font-bold">Processus d'examen impartial</p>
<p className="text-slate-600 text-sm leading-relaxed">
                            Ce recours sera examiné par un comité impartial dans un délai maximum de 48 heures ouvrées. Assurez-vous de fournir tous les justificatifs pertinents (photos, logs de communication, factures) pour appuyer votre demande.
                        </p>
<a className="text-primary text-sm font-semibold flex items-center gap-1 mt-2 hover:underline" href="#">
                            Consulter la charte de recours
                            <span className="material-symbols-outlined text-sm" data-icon="open_in_new">open_in_new</span>
</a>
</div>
</div>
{/*  Form Section  */}
<div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
<form className="flex flex-col gap-6">
{/*  Subject  */}
<div className="flex flex-col gap-2">
<label className="text-slate-700 text-sm font-semibold">Motif du recours</label>
<select className="w-full h-12 rounded-xl border border-slate-300 bg-white px-4 text-slate-900 focus:ring-2 focus:ring-primary focus:border-primary transition-all appearance-none">
<option disabled selected="" value="">Choisir une raison principale</option>
<option value="contestation_faits">Contestation des faits reprochés</option>
<option value="circonstances_attenuantes">Circonstances atténuantes exceptionnelles</option>
<option value="erreur_administrative">Erreur administrative constatée</option>
<option value="preuve_nouvelle">Nouvel élément de preuve déterminant</option>
<option value="autre">Autre raison (à préciser ci-dessous)</option>
</select>
</div>
{/*  Justification  */}
<div className="flex flex-col gap-2">
<label className="text-slate-700 text-sm font-semibold">Explication détaillée / Justification</label>
<textarea className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none" placeholder="Décrivez précisément les faits et les raisons pour lesquelles vous contestez cet avertissement..." rows="6"></textarea>
<p className="text-slate-400 text-xs">Minimum 100 caractères recommandés pour une analyse approfondie.</p>
</div>
{/*  File Upload  */}
<div className="flex flex-col gap-2">
<label className="text-slate-700 text-sm font-semibold">Preuves et documents (Photos, logs, documents)</label>
<div className="border-2 border-dashed border-slate-300 rounded-xl p-8 flex flex-col items-center justify-center gap-3 bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer group">
<div className="size-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 group-hover:text-primary transition-colors">
<span className="material-symbols-outlined text-3xl" data-icon="cloud_upload">cloud_upload</span>
</div>
<div className="text-center">
<p className="text-slate-900 font-medium">Glissez vos fichiers ici ou <span className="text-primary">parcourez vos dossiers</span></p>
<p className="text-slate-500 text-xs mt-1">PNG, JPG, PDF ou DOC (Max. 10MB par fichier)</p>
</div>
</div>
</div>
{/*  Action Buttons  */}
<div className="flex flex-col sm:flex-row items-center justify-end gap-3 mt-4 border-t border-slate-100 pt-6">
<button className="w-full sm:w-auto px-6 h-12 rounded-xl border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 transition-colors" type="button">
                                Annuler
                            </button>
<button className="w-full sm:w-auto px-8 h-12 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all flex items-center justify-center gap-2" type="submit">
                                Envoyer le recours
                                <span className="material-symbols-outlined text-lg" data-icon="send">send</span>
</button>
</div>
</form>
</div>
{/*  Footer help text  */}
<div className="flex justify-center mb-10">
<p className="text-slate-500 text-sm flex items-center gap-2">
<span className="material-symbols-outlined text-sm" data-icon="security">security</span>
                        Vos données sont traitées en toute confidentialité.
                    </p>
</div>
</div>
</main>
</div>

    </>
  );
};

export default OuvertureDUnRecoursAdministratif;

