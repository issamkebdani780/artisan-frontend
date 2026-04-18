import React from 'react';

const TransportDObjetsLourds = () => {
  return (
    <>
      
<div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 px-6 lg:px-20 py-4 bg-white sticky top-0 z-50">
<div className="flex items-center gap-4">
<div className="text-primary">
<span className="material-symbols-outlined text-4xl">precision_manufacturing</span>
</div>
<h2 className="text-xl font-bold leading-tight tracking-tight">TransportLourd</h2>
</div>
<div className="flex flex-1 justify-end gap-8 items-center">
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium hover:text-primary transition-colors" href="#">Accueil</a>
<a className="text-sm font-semibold text-primary" href="#">Services</a>
<a className="text-sm font-medium hover:text-primary transition-colors" href="#">Notifications</a>
</nav>
<button className="flex min-w-[120px] cursor-pointer items-center justify-center rounded-xl h-10 px-6 bg-primary text-white text-sm font-bold transition-transform hover:scale-105 active:scale-95">
<span>Connexion</span>
</button>
</div>
</header>
<main className="flex-1 flex flex-col lg:flex-row px-4 lg:px-20 py-8 gap-8">
<aside className="w-full lg:w-64 flex flex-col gap-6 shrink-0">
<div className="flex flex-col gap-2 p-2 bg-white rounded-xl shadow-sm border border-slate-200">
<div className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-100 cursor-pointer text-slate-600">
<span className="material-symbols-outlined">home</span>
<p className="text-sm font-medium">Accueil</p>
</div>
<div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary cursor-pointer">
<span className="material-symbols-outlined">delivery_truck_speed</span>
<p className="text-sm font-bold">Services</p>
</div>
<div className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-100 cursor-pointer text-slate-600">
<span className="material-symbols-outlined">notifications</span>
<p className="text-sm font-medium">Notifications</p>
</div>
<div className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-100 cursor-pointer text-slate-600">
<span className="material-symbols-outlined">description</span>
<p className="text-sm font-medium">Mes Devis</p>
</div>
</div>
<div className="bg-primary p-6 rounded-xl text-white shadow-lg flex flex-col gap-4">
<h3 className="font-bold text-lg">Besoin d'un devis gratuit ?</h3>
<p className="text-sm opacity-90">Nos experts évaluent votre projet de transport en moins de 24h.</p>
<button className="w-full py-3 bg-white text-primary rounded-lg font-bold text-sm hover:bg-slate-50 transition-colors">
                            Demander mon devis
                        </button>
</div>
</aside>
<div className="flex-1 flex flex-col gap-8">
<section className="rounded-xl overflow-hidden relative min-h-[300px] flex items-end p-8 bg-slate-900 shadow-xl">
<div className="absolute inset-0 opacity-60">
<img alt="Transport de piano" className="w-full h-full object-cover" data-alt="Déménageurs professionnels déplaçant un piano à queue avec précaution" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDs-e-FHVJNc2x67xvx-Ny741BYyoJSErBqr7_-WPAztzCn2QPZd9wzRcchTvb_b5Ig9mpA3kItC9slzOKDvLRvKATat2HTWAbbBkb5fAWTjqTUrTCzylHgzpqiclaMir0tDrciNIz760yKx5SQgN7yYGq6Ajil8RzgOE8q0RYDZVjfpoA_TXCpFdk6Tn0ZsDvk7KB1ka-vQGt2GOfpCZ_4_EOJOSaTuWLlkhsHtwnMJaA8u0qqUsbuMg5L3T1Wb7oHjfrIak5vPY2R"/>
</div>
<div className="relative z-10 max-w-2xl">
<span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">Service Premium</span>
<h1 className="text-white text-4xl lg:text-5xl font-bold leading-tight mb-4">Transport d'Objets Lourds</h1>
<p className="text-slate-200 text-lg">Spécialistes du déplacement de pianos, coffres-forts et équipements industriels avec une précision chirurgicale.</p>
</div>
</section>
<section>
<h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">verified</span>
                            Pourquoi nous choisir ?
                        </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex flex-col gap-4 p-6 rounded-xl border border-slate-200 bg-white transition-all hover:shadow-md">
<div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-3xl">construction</span>
</div>
<div>
<h3 className="font-bold text-lg mb-2">Équipement spécialisé</h3>
<p className="text-slate-600 text-sm leading-relaxed">
                                        Nous utilisons des chariots élévateurs haute performance, des sangles de levage professionnelles et des grues de fenêtre si nécessaire.
                                    </p>
</div>
</div>
<div className="flex flex-col gap-4 p-6 rounded-xl border border-slate-200 bg-white transition-all hover:shadow-md">
<div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-3xl">shield</span>
</div>
<div>
<h3 className="font-bold text-lg mb-2">Sécurité maximale</h3>
<p className="text-slate-600 text-sm leading-relaxed">
                                        Protection multicouche pour vos sols et murs. Protocoles de sécurité rigoureux pour garantir l'intégrité de vos objets de valeur.
                                    </p>
</div>
</div>
</div>
</section>
<section className="bg-slate-100 p-8 rounded-xl border border-slate-200">
<h2 className="text-2xl font-bold mb-8">Nos Experts en Manutention</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
<div className="flex items-center gap-4">
<img alt="Jean Dupont" className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-sm" data-alt="Portrait d'un expert déménageur souriant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVErJYB1JoAVZ6LzlUHZqnsEm3gQodvM_7c2ehaEdcw4V-b19reUUoEpmjsqzAdZak-bbnhuMQe6ly29UuHDxorDRUcJMKbnlNsbkkuuHqKlCDPlGNzVmH5MX8S_t-scuFZ2wZZYMfbLx18SX0PmT3v01AEK_HfaIjT9ZK8SX1iqUcNrRxjx3zcuG8Uv9lbqe1V_x_nBJkCcImcObZMjXAjp54rAQ8P0-mD0ROhireuIFyPgT6Z9KtRed81FMjNtuAfF7V_WdGXXYp"/>
<div>
<h4 className="font-bold text-lg">Jean Dupont</h4>
<p className="text-primary text-sm font-semibold uppercase">Chef d'équipe Levage</p>
<p className="text-slate-500 text-xs mt-1">15 ans d'expérience</p>
</div>
</div>
<div className="flex items-center gap-4">
<img alt="Marie Laurent" className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-sm" data-alt="Portrait d'une experte logistique professionnelle" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-01UR7uK-wQONueD-Be8JD_UxIn5_-5XMwsmIN-q2ofNNgD-fjkBkgSgBlgZsq_CO99te9Nsp02mQyNhUjvIrAiRoCARx5aC5yYw603JCj4jSstnkAEX8ZIR2XjNc_-KA-jpi5qg0KlA9ibCeXzeMwFzb1EOyqPHCPLmvF52pWAqwKjU4FPfayLBTsWKTcAPVohP43EGGOQvkrldLcMxifFujw_a0q9ISS_Yi4Jfh95Rxle19v8f1ICKAfRTnnbdNkngDNd3y-XdU"/>
<div>
<h4 className="font-bold text-lg">Marie Laurent</h4>
<p className="text-primary text-sm font-semibold uppercase">Logistique Spécialisée</p>
<p className="text-slate-500 text-xs mt-1">Spécialiste Objets d'Art</p>
</div>
</div>
</div>
</section>
<section>
<h2 className="text-2xl font-bold mb-6">Tarification &amp; Assurance</h2>
<div className="overflow-hidden rounded-xl border border-slate-200">
<table className="w-full text-left bg-white">
<thead className="bg-slate-50">
<tr>
<th className="px-6 py-4 text-sm font-bold uppercase tracking-wider">Type d'Objet</th>
<th className="px-6 py-4 text-sm font-bold uppercase tracking-wider">Prix de Base</th>
<th className="px-6 py-4 text-sm font-bold uppercase tracking-wider">Spécificités</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200">
<tr>
<td className="px-6 py-4 font-medium">Piano Droit</td>
<td className="px-6 py-4 text-primary font-bold">À partir de 150â‚¬</td>
<td className="px-6 py-4 text-sm text-slate-500">Protection housse incluse</td>
</tr>
<tr>
<td className="px-6 py-4 font-medium">Piano à Queue</td>
<td className="px-6 py-4 text-primary font-bold">À partir de 350â‚¬</td>
<td className="px-6 py-4 text-sm text-slate-500">Démontage lyre et pieds</td>
</tr>
<tr>
<td className="px-6 py-4 font-medium">Coffre-fort (&lt; 200kg)</td>
<td className="px-6 py-4 text-primary font-bold">À partir de 200â‚¬</td>
<td className="px-6 py-4 text-sm text-slate-500">Ancrage possible sur demande</td>
</tr>
</tbody>
</table>
</div>
<div className="mt-4 p-4 bg-primary/5 rounded-lg border-l-4 border-primary flex gap-4">
<span className="material-symbols-outlined text-primary">info</span>
<p className="text-sm text-slate-700">
<strong>Garantie Assurance :</strong> Tous nos transports sont couverts par une assurance "Ad Valorem" jusqu'à 50 000â‚¬ par objet. Une extension est possible pour les objets de collection.
                            </p>
</div>
</section>
</div>
</main>
<footer className="bg-white border-t border-slate-200 px-6 lg:px-20 py-10 mt-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
<div>
<div className="flex items-center gap-2 mb-4 text-primary">
<span className="material-symbols-outlined">precision_manufacturing</span>
<span className="font-bold text-lg text-slate-900">TransportLourd</span>
</div>
<p className="text-slate-500 text-sm leading-relaxed">Leader européen du transport d'objets lourds et fragiles. Expertise, sécurité et ponctualité à votre service.</p>
</div>
<div>
<h4 className="font-bold mb-4">Liens Rapides</h4>
<ul className="text-sm text-slate-500 flex flex-col gap-2">
<li><a className="hover:text-primary transition-colors" href="#">Nos Services</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Tarifs</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Avis Clients</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-4">Newsletter</h4>
<p className="text-sm text-slate-500 mb-4">Recevez nos conseils pour votre déménagement.</p>
<div className="flex gap-2">
<input className="flex-1 rounded-lg border-slate-300 text-sm focus:ring-primary focus:border-primary" placeholder="Votre email" type="email"/>
<button className="bg-primary text-white p-2 rounded-lg hover:opacity-90 transition-opacity">
<span className="material-symbols-outlined">send</span>
</button>
</div>
</div>
</div>
<div className="border-t border-slate-200 mt-10 pt-6 text-center text-xs text-slate-400">
                    © 2024 TransportLourd SAS. Tous droits réservés. Mentions Légales | Politique de Confidentialité
                </div>
</footer>
</div>
</div>

    </>
  );
};

export default TransportDObjetsLourds;

