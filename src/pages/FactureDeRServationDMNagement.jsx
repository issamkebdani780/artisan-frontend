import React from 'react';

const FactureDeRServationDMNagement = () => {
  return (
    <>
      
<div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
{/*  Main Content Area  */}
<div className="px-4 md:px-20 lg:px-40 flex flex-1 justify-center py-5 md:py-10">
<div className="layout-content-container flex flex-col max-w-[960px] flex-1 gap-6">
{/*  Top Navigation / Header  */}
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 pb-6">
<div className="flex items-center gap-4">
<div className="size-8 text-primary">
<svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"></path>
</svg>
</div>
<h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight">ArtisanDirect</h2>
</div>
<div className="flex gap-3">
<button className="flex items-center justify-center rounded-lg h-10 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 gap-2 text-sm font-bold px-4 hover:bg-slate-200 transition-colors">
<span className="material-symbols-outlined text-[20px]">download</span>
<span className="hidden sm:inline">Télécharger PDF</span>
</button>
<button className="flex items-center justify-center rounded-lg h-10 bg-primary text-white gap-2 text-sm font-bold px-4 hover:bg-primary/90 transition-colors">
<span className="material-symbols-outlined text-[20px]">print</span>
<span className="hidden sm:inline">Imprimer</span>
</button>
</div>
</header>
{/*  Breadcrumbs  */}
<nav className="flex flex-wrap gap-2 text-sm font-medium">
<a className="text-slate-500 hover:text-primary transition-colors" href="#">Tableau de bord</a>
<span className="text-slate-400">/</span>
<a className="text-slate-500 hover:text-primary transition-colors" href="#">Mes Réservations</a>
<span className="text-slate-400">/</span>
<span className="text-primary">Facture #INV-2024-001</span>
</nav>
{/*  Invoice Meta Info  */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 py-4">
<div className="flex flex-col gap-1">
<h1 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-tight">Facture #INV-2024-001</h1>
<p className="text-slate-500 dark:text-slate-400 text-base">Date d'émission : 24 Octobre 2024</p>
</div>
<div className="flex items-center">
<span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
<span className="size-2 rounded-full bg-green-500 mr-2"></span>
                            Payée
                        </span>
</div>
</div>
{/*  Parties Section  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 shadow-sm">
<div className="flex items-center gap-3">
<div className="p-2 bg-primary/10 rounded-lg text-primary">
<span className="material-symbols-outlined">person</span>
</div>
<p className="text-slate-900 dark:text-white text-lg font-bold">Client</p>
</div>
<div className="space-y-1">
<p className="text-slate-900 dark:text-white font-semibold">Jane Doe</p>
<p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                                123 Rue de la Paix<br/>75002 Paris, France<br/>jane.doe@example.com
                            </p>
</div>
<a className="text-sm font-bold text-primary flex items-center gap-1 mt-2 hover:underline" href="#">
                            Voir profil client
                            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
</div>
<div className="flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 shadow-sm">
<div className="flex items-center gap-3">
<div className="p-2 bg-primary/10 rounded-lg text-primary">
<span className="material-symbols-outlined">handyman</span>
</div>
<p className="text-slate-900 dark:text-white text-lg font-bold">Artisan</p>
</div>
<div className="space-y-1">
<p className="text-slate-900 dark:text-white font-semibold">Ahmed Mansouri</p>
<p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                                Déménagement Pro &amp; Transport<br/>Siret: 123 456 789 00012<br/>15 Avenue des Champs, 75008 Paris
                            </p>
</div>
<a className="text-sm font-bold text-primary flex items-center gap-1 mt-2 hover:underline" href="#">
                            Contacter l'artisan
                            <span className="material-symbols-outlined text-[18px]">chat_bubble</span>
</a>
</div>
</div>
{/*  Service Summary & Route  */}
<div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 overflow-hidden shadow-sm">
<div className="p-6 border-b border-slate-200 dark:border-slate-800">
<h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Récapitulatif de la Prestation</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-4">
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary">local_shipping</span>
<div>
<p className="text-sm font-bold text-slate-900 dark:text-white">Service</p>
<p className="text-slate-500 dark:text-slate-400 text-sm">Déménagement Complet T3 (45m²)</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary">calendar_today</span>
<div>
<p className="text-sm font-bold text-slate-900 dark:text-white">Date de réalisation</p>
<p className="text-slate-500 dark:text-slate-400 text-sm">Mardi 22 Octobre 2024</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary">location_on</span>
<div>
<p className="text-sm font-bold text-slate-900 dark:text-white">Itinéraire</p>
<p className="text-slate-500 dark:text-slate-400 text-sm">Paris (75002) → Boulogne-Billancourt (92100)</p>
<p className="text-xs text-slate-400 mt-1">Distance estimée : 12.5 km</p>
</div>
</div>
</div>
<div className="relative h-40 md:h-full min-h-[140px] rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800">
<div className="absolute inset-0 bg-cover bg-center" data-alt="Carte simplifiée de l'itinéraire entre Paris et Boulogne" data-location="Paris" ></div>
<div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
<div className="bg-white/90 dark:bg-slate-900/90 px-3 py-1.5 rounded-full shadow-lg border border-primary/20">
<p className="text-xs font-bold text-primary flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">map</span> Itinéraire validé
                                        </p>
</div>
</div>
</div>
</div>
</div>
</div>
{/*  Itemized Table  */}
<div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-sm overflow-hidden">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">
<th className="px-6 py-4">Description de l'article</th>
<th className="px-6 py-4 text-center">Quantité</th>
<th className="px-6 py-4 text-right">Prix Unitaire</th>
<th className="px-6 py-4 text-right">Total</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 dark:divide-slate-800">
<tr>
<td className="px-6 py-4">
<p className="text-slate-900 dark:text-white font-semibold">Forfait Déménagement de base</p>
<p className="text-xs text-slate-500">Main d'œuvre (2 pers.) + Camion 20m³</p>
</td>
<td className="px-6 py-4 text-center text-slate-700 dark:text-slate-300">1</td>
<td className="px-6 py-4 text-right text-slate-700 dark:text-slate-300">450,00 €</td>
<td className="px-6 py-4 text-right font-semibold text-slate-900 dark:text-white">450,00 €</td>
</tr>
<tr>
<td className="px-6 py-4">
<p className="text-slate-900 dark:text-white font-semibold">Surcharge de Distance</p>
<p className="text-xs text-slate-500">Calculé sur 12.5 km</p>
</td>
<td className="px-6 py-4 text-center text-slate-700 dark:text-slate-300">1</td>
<td className="px-6 py-4 text-right text-slate-700 dark:text-slate-300">25,00 €</td>
<td className="px-6 py-4 text-right font-semibold text-slate-900 dark:text-white">25,00 €</td>
</tr>
<tr>
<td className="px-6 py-4">
<p className="text-slate-900 dark:text-white font-semibold">Objets Fragiles / Lourds</p>
<p className="text-xs text-slate-500">Table en verre massif + Piano droit</p>
</td>
<td className="px-6 py-4 text-center text-slate-700 dark:text-slate-300">2</td>
<td className="px-6 py-4 text-right text-slate-700 dark:text-slate-300">40,00 €</td>
<td className="px-6 py-4 text-right font-semibold text-slate-900 dark:text-white">80,00 €</td>
</tr>
<tr>
<td className="px-6 py-4">
<p className="text-slate-900 dark:text-white font-semibold">Montage de meubles</p>
<p className="text-xs text-slate-500">Armoire chambre + Lit King Size</p>
</td>
<td className="px-6 py-4 text-center text-slate-700 dark:text-slate-300">2</td>
<td className="px-6 py-4 text-right text-slate-700 dark:text-slate-300">30,00 €</td>
<td className="px-6 py-4 text-right font-semibold text-slate-900 dark:text-white">60,00 €</td>
</tr>
</tbody>
</table>
</div>
{/*  Totals & Payment Method  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
<div className="flex flex-col gap-4">
<div className="rounded-xl bg-slate-50 dark:bg-slate-800/50 p-6 border border-slate-200 dark:border-slate-800">
<p className="text-slate-900 dark:text-white font-bold mb-3 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">payments</span>
                                Méthode de Paiement
                            </p>
<div className="flex items-center gap-3 bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
<div className="text-slate-400">
<span className="material-symbols-outlined text-[32px]">credit_card</span>
</div>
<div>
<p className="text-sm font-bold text-slate-900 dark:text-white">Carte Bancaire Visa</p>
<p className="text-xs text-slate-500">Terminant par •••• 1234</p>
</div>
<div className="ml-auto">
<span className="material-symbols-outlined text-green-500">check_circle</span>
</div>
</div>
</div>
<div className="px-2">
<p className="text-xs text-slate-400 italic">Paiement sécurisé via ArtisanDirect Pay. Pour toute question, contactez notre support client muni de votre numéro de facture.</p>
</div>
</div>
<div className="flex flex-col gap-3">
<div className="flex justify-between items-center text-slate-600 dark:text-slate-400">
<span className="text-sm font-medium">Sous-total HT</span>
<span className="font-semibold">615,00 €</span>
</div>
<div className="flex justify-between items-center text-slate-600 dark:text-slate-400">
<span className="text-sm font-medium">TVA (20%)</span>
<span className="font-semibold">123,00 €</span>
</div>
<div className="h-px bg-slate-200 dark:bg-slate-800 my-2"></div>
<div className="flex justify-between items-center">
<span className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-wider">Total TTC</span>
<span className="text-3xl font-black text-primary">738,00 €</span>
</div>
</div>
</div>
{/*  Footer  */}
<footer className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 text-center space-y-4">
<div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500 font-medium">
<a className="hover:text-primary transition-colors" href="#">CGV / CGU</a>
<a className="hover:text-primary transition-colors" href="#">Politique de Confidentialité</a>
<a className="hover:text-primary transition-colors" href="#">Support Client</a>
<a className="hover:text-primary transition-colors" href="#">Aide</a>
</div>
<p className="text-xs text-slate-400 uppercase tracking-widest">
                        © 2024 ArtisanDirect - Une plateforme au service de l'excellence artisanale
                    </p>
</footer>
</div>
</div>
</div>
</div>

    </>
  );
};

export default FactureDeRServationDMNagement;
