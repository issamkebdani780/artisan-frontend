import React from 'react';

const Demenagement = () => {
  return (
    <>
      
<div className="relative flex h-auto min-h-screen w-full flex-col">
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 bg-white px-4 md:px-10 py-3 sticky top-0 z-50">
<div className="flex items-center gap-8">
<div className="flex items-center gap-4 text-primary">
<div className="size-8 flex items-center justify-center bg-primary/10 rounded-lg">
<span className="material-symbols-outlined text-primary">local_shipping</span>
</div>
<h2 className="text-slate-900 text-lg font-bold leading-tight tracking-[-0.015em]">Déménagement</h2>
</div>
<div className="hidden md:flex items-center gap-9">
<a className="text-slate-600 text-sm font-medium hover:text-primary transition-colors" href="#">Services</a>
<a className="text-slate-600 text-sm font-medium hover:text-primary transition-colors" href="#">Experts</a>
<a className="text-slate-600 text-sm font-medium hover:text-primary transition-colors" href="#">Tarifs</a>
<a className="text-slate-600 text-sm font-medium hover:text-primary transition-colors" href="#">FAQ</a>
</div>
</div>
<div className="flex flex-1 justify-end gap-4 md:gap-8 items-center">
<label className="hidden lg:flex flex-col min-w-40 !h-10 max-w-64">
<div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-slate-100">
<div className="text-slate-500 flex items-center justify-center pl-4">
<span className="material-symbols-outlined text-xl">search</span>
</div>
<input className="form-input flex w-full min-w-0 flex-1 border-none bg-transparent focus:ring-0 h-full placeholder:text-slate-500 px-4 text-base font-normal" placeholder="Rechercher un expert" value=""/>
</div>
</label>
<button className="flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal transition-opacity hover:opacity-90">
<span className="truncate">Réserver</span>
</button>
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-slate-200" data-alt="Photo de profil utilisateur" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBIXzCxvZMD-sRcTOBUV0yf6p9XIGU0rH-tLI7Bl2SeqapxBH5AzAfWa-JLtTzCPRG72yAo_Z0zTSFATeB1xFXD5l_ofUf-6n_-hepqw4RuAsRymwJmqlWA0Mr2pED-OImmSsnZcvc-pKLOcrq81HMDFwqvZqRThI4sVG-oI4GtMgobx9xUuMwZhHfczWGh1bvxPEw28QwMQQ130WPsqvfOeZrwfMxasbfrb-cYKGqx1f6MTr4gZ6o64P6x2tQL8IifZhbRdaTX2PnX");'></div>
</div>
</header>
<div className="flex flex-1 flex-col md:flex-row max-w-[1440px] mx-auto w-full">
<aside className="w-full md:w-64 border-r border-slate-200 bg-white p-4 flex flex-col gap-8">
<div className="flex flex-col gap-4">
<div className="flex gap-3 items-center p-2">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="Logo Expert Moving professionnel" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAvAN8AteBuoEZjeunNlrZoTx9RNQCp9fUuaILPLOrL1-hGasD26H-GvHOXt5X1abtEa_gLNCZckAAg-edrqum8MgCLF71ddzyaNvBL913lQAgAAP8ELBXPkuchwMDKzY7HzxqqEpX5VZ7Yy1ne-RWefNoucOOpKzOwYMHYsRX8AZEIBshNJgsLlUt0lXwjO2KDDVsnFifNqkFkxyc6bXN7GL0YqTAOq0PMg2RZgZhS4tZIAQGhvUhy55Hg-vgjrepJlIe5ih7xje35");'></div>
<div className="flex flex-col">
<h1 className="text-slate-900 text-base font-bold leading-tight">Expert Moving</h1>
<p className="text-slate-500 text-xs font-normal">Service certifié</p>
</div>
</div>
<nav className="flex flex-col gap-2">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors" href="#">
<span className="material-symbols-outlined">home</span>
<p className="text-sm font-medium">Accueil</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary" href="#">
<span className="material-symbols-outlined fill-1">local_shipping</span>
<p className="text-sm font-bold">Déménagements</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors" href="#">
<span className="material-symbols-outlined">request_quote</span>
<p className="text-sm font-medium">Mes Devis</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors" href="#">
<span className="material-symbols-outlined">chat_bubble</span>
<p className="text-sm font-medium">Messages</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors mt-8" href="#">
<span className="material-symbols-outlined">settings</span>
<p className="text-sm font-medium">Paramètres</p>
</a>
</nav>
</div>
</aside>
<main className="flex-1 overflow-y-auto bg-background-light p-4 md:p-8">
<div className="max-w-4xl mx-auto space-y-12">
<section className="relative overflow-hidden rounded-xl bg-slate-900 text-white p-8 md:p-12">
<div className="absolute inset-0 opacity-40 mix-blend-overlay bg-center bg-cover" data-alt="Intérieur d'un appartement en cours de déménagement" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuA3BGReMKGFo8k9EGYPgxxP01XEMESwKIuCz7wS54YKySo4koDdUuz58O4ZW4xsyWvrYI2MeR_UCdprlFdC4720TTi-LiVm7MqbRbTfOExJxykweK79B-yfOXbAiWlHcMYf5pipwt9JgSjjxQiWWHb312ERJritnfbRWqeUiPcRzgLXAKhtpYjswwXqiq-wnfaexL3K_8W-XheOLAFAoIjTsQwoZB-3TG-hvk1TxHZmqvMAcijG1mU2buQ_k8mkyGQsfbNAOvB12qN4");'></div>
<div className="relative z-10 space-y-4 max-w-lg">
<span className="inline-block px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider">Solution Complète</span>
<h2 className="text-3xl md:text-4xl font-bold leading-tight">Déménagez en toute sérénité avec nos experts</h2>
<p className="text-slate-300 text-lg">De la planification au déballage, nous gérons chaque étape de votre transition.</p>
<button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg transition-all shadow-lg shadow-primary/20">Obtenir un devis gratuit</button>
</div>
</section>
<section>
<h2 className="text-slate-900 text-2xl font-bold mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">category</span> Nos options de service
                        </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="group bg-white p-6 rounded-xl border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1">
<div className="size-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
<span className="material-symbols-outlined">location_on</span>
</div>
<h3 className="text-lg font-bold mb-2">Déménagement Local</h3>
<p className="text-slate-500 text-sm leading-relaxed">Service rapide et efficace au sein de votre ville actuelle avec une équipe dédiée.</p>
</div>
<div className="group bg-white p-6 rounded-xl border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1">
<div className="size-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
<span className="material-symbols-outlined">distance</span>
</div>
<h3 className="text-lg font-bold mb-2">Longue Distance</h3>
<p className="text-slate-500 text-sm leading-relaxed">Transports sécurisés vers n'importe quelle destination dans le pays avec suivi en temps réel.</p>
</div>
<div className="group bg-white p-6 rounded-xl border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1">
<div className="size-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
<span className="material-symbols-outlined">inventory_2</span>
</div>
<h3 className="text-lg font-bold mb-2">Service Emballage</h3>
<p className="text-slate-500 text-sm leading-relaxed">Protection maximale de vos objets fragiles avec du matériel professionnel.</p>
</div>
</div>
</section>
<section className="bg-slate-100 rounded-2xl p-8 md:p-12">
<div className="text-center mb-10">
<h2 className="text-2xl md:text-3xl font-bold mb-4">Pourquoi nous choisir ?</h2>
<p className="text-slate-500">L'excellence au service de votre mobilité</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="flex gap-4">
<div className="shrink-0 size-10 rounded-full bg-primary flex items-center justify-center text-white">
<span className="material-symbols-outlined">verified</span>
</div>
<div>
<h4 className="font-bold text-lg mb-1">Experts Certifiés</h4>
<p className="text-slate-500 text-sm">Chaque membre de notre équipe est formé aux techniques de manutention les plus récentes.</p>
</div>
</div>
<div className="flex gap-4">
<div className="shrink-0 size-10 rounded-full bg-primary flex items-center justify-center text-white">
<span className="material-symbols-outlined">event_available</span>
</div>
<div>
<h4 className="font-bold text-lg mb-1">Flexibilité Totale</h4>
<p className="text-slate-500 text-sm">Nous nous adaptons à votre calendrier, même pour les demandes de dernière minute.</p>
</div>
</div>
<div className="flex gap-4">
<div className="shrink-0 size-10 rounded-full bg-primary flex items-center justify-center text-white">
<span className="material-symbols-outlined">security</span>
</div>
<div>
<h4 className="font-bold text-lg mb-1">Assurance Comprise</h4>
<p className="text-slate-500 text-sm">Vos biens sont couverts à 100% de la prise en charge jusqu'à la livraison finale.</p>
</div>
</div>
<div className="flex gap-4">
<div className="shrink-0 size-10 rounded-full bg-primary flex items-center justify-center text-white">
<span className="material-symbols-outlined">price_check</span>
</div>
<div>
<h4 className="font-bold text-lg mb-1">Tarifs Transparents</h4>
<p className="text-slate-500 text-sm">Pas de frais cachés. Le prix annoncé sur votre devis est le prix final payé.</p>
</div>
</div>
</div>
</section>
<section>
<h2 className="text-slate-900 text-2xl font-bold mb-6">Estimations de prix</h2>
<div className="overflow-hidden border border-slate-200 rounded-xl bg-white">
<table className="w-full text-left">
<thead className="bg-slate-50">
<tr>
<th className="p-4 font-bold text-sm">Type de logement</th>
<th className="p-4 font-bold text-sm">Volume approx.</th>
<th className="p-4 font-bold text-sm text-right">Prix à partir de</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr>
<td className="p-4 text-sm">Studio / T1</td>
<td className="p-4 text-sm text-slate-500">10-15 mÂ³</td>
<td className="p-4 text-sm font-bold text-primary text-right">350 â‚¬</td>
</tr>
<tr>
<td className="p-4 text-sm">Appartement T2/T3</td>
<td className="p-4 text-sm text-slate-500">20-30 mÂ³</td>
<td className="p-4 text-sm font-bold text-primary text-right">650 â‚¬</td>
</tr>
<tr>
<td className="p-4 text-sm">Maison familiale</td>
<td className="p-4 text-sm text-slate-500">45+ mÂ³</td>
<td className="p-4 text-sm font-bold text-primary text-right">1 200 â‚¬</td>
</tr>
</tbody>
</table>
</div>
</section>
<section>
<div className="flex items-center justify-between mb-6">
<h2 className="text-slate-900 text-2xl font-bold">Experts à proximité</h2>
<a className="text-primary text-sm font-bold hover:underline" href="#">Voir tout</a>
</div>
<div className="flex flex-col gap-4">
<div className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl">
<div className="flex items-center gap-4">
<div className="size-12 rounded-full bg-cover bg-center" data-alt="Portrait d'un expert en déménagement souriant" ></div>
<div>
<h4 className="font-bold">Jean Dupont</h4>
<p className="text-xs text-slate-500 flex items-center gap-1">
<span className="material-symbols-outlined text-xs text-yellow-500 fill-1">star</span> 4.9 (128 avis)
                                        </p>
</div>
</div>
<button className="px-4 py-2 border border-primary text-primary font-bold text-sm rounded-lg hover:bg-primary/10 transition-colors">Contacter</button>
</div>
<div className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl">
<div className="flex items-center gap-4">
<div className="size-12 rounded-full bg-cover bg-center" data-alt="Portrait d'une experte logistique déménagement" ></div>
<div>
<h4 className="font-bold">Marie Laurent</h4>
<p className="text-xs text-slate-500 flex items-center gap-1">
<span className="material-symbols-outlined text-xs text-yellow-500 fill-1">star</span> 4.8 (94 avis)
                                        </p>
</div>
</div>
<button className="px-4 py-2 border border-primary text-primary font-bold text-sm rounded-lg hover:bg-primary/10 transition-colors">Contacter</button>
</div>
</div>
</section>
<section className="pb-12">
<h2 className="text-slate-900 text-2xl font-bold mb-6">Foire Aux Questions</h2>
<div className="space-y-4">
<details className="group bg-white rounded-xl border border-slate-200 p-4 cursor-pointer">
<summary className="flex items-center justify-between font-bold list-none">
<span>Combien de temps à l'avance dois-je réserver ?</span>
<span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
</summary>
<p className="mt-4 text-slate-500 text-sm">Nous recommandons de réserver au moins 2 à 4 semaines à l'avance, surtout pour les déménagements en fin de semaine ou en période estivale.</p>
</details>
<details className="group bg-white rounded-xl border border-slate-200 p-4 cursor-pointer">
<summary className="flex items-center justify-between font-bold list-none">
<span>Fournissez-vous les cartons de déménagement ?</span>
<span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
</summary>
<p className="mt-4 text-slate-500 text-sm">Oui, nous proposons des kits complets de cartons et matériel de protection (papier bulle, adhésifs) adaptés à la taille de votre logement.</p>
</details>
<details className="group bg-white rounded-xl border border-slate-200 p-4 cursor-pointer">
<summary className="flex items-center justify-between font-bold list-none">
<span>Que se passe-t-il en cas d'objet cassé ?</span>
<span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
</summary>
<p className="mt-4 text-slate-500 text-sm">Tous nos services incluent une assurance responsabilité civile. En cas de dommage constaté, notre assurance prend en charge le remboursement ou la réparation de l'objet.</p>
</details>
</div>
</section>
</div>
</main>
</div>
</div>

    </>
  );
};

export default Demenagement;

