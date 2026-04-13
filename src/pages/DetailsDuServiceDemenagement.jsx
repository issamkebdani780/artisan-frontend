import React from 'react';

const DetailsDuServiceDemenagement = () => {
  return (
    <>
      
<div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 bg-white px-6 md:px-20 py-3 sticky top-0 z-50">
<div className="flex items-center gap-8">
<div className="flex items-center gap-4 text-primary">
<div className="size-6">
<span className="material-symbols-outlined text-3xl">local_shipping</span>
</div>
<h2 className="text-slate-900 text-lg font-bold leading-tight tracking-[-0.015em]">Déménagement Pro</h2>
</div>
<div className="hidden md:flex items-center gap-6">
<a className="text-slate-600 text-sm font-medium hover:text-primary transition-colors" href="#">FR</a>
<a className="text-slate-600 text-sm font-medium hover:text-primary transition-colors" href="#">AR</a>
<a className="text-slate-600 text-sm font-medium hover:text-primary transition-colors" href="#">EN</a>
</div>
</div>
<div className="flex flex-1 justify-end gap-4 md:gap-8">
<label className="hidden sm:flex flex-col min-w-40 h-10 max-w-64">
<div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-slate-100">
<div className="text-slate-500 flex items-center justify-center pl-4">
<span className="material-symbols-outlined text-xl">search</span>
</div>
<input className="form-input flex w-full min-w-0 flex-1 border-none bg-transparent focus:ring-0 h-full placeholder:text-slate-500 px-4 text-base font-normal" placeholder="Rechercher un service" value=""/>
</div>
</label>
<div className="flex gap-2">
<button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 text-slate-700">
<span className="material-symbols-outlined">person</span>
</button>
<button className="flex items-center justify-center rounded-lg h-10 w-10 bg-primary text-white">
<span className="material-symbols-outlined">shopping_bag</span>
</button>
</div>
</div>
</header>
<main className="flex flex-col">
<section className="px-4 md:px-20 py-6">
<div className="relative h-[400px] w-full overflow-hidden rounded-xl bg-slate-900">
<img alt="Moving Service" className="absolute inset-0 h-full w-full object-cover opacity-70" data-alt="Professional movers carrying boxes in a bright apartment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5QFQCsHN0b30H2Ub0wMT9Qrzm6_rSkBVpK0QDhEoQbeeVqdLE4weEgGgrDJm_gMrr49Sl_JkfRhVjKrunBXmBi5HG39LbAbB9yhD6HdEjheA_4dK_PJgT89kemRPlhrLhj7LN0iWgsEFZJfq6jZIu_Mn_8MvY-0JZvZ8SQuwZT0cLnaqWsyMUNSBMPY-vmE4MDUAUw7jnZs2z0kotZQgP7IRJ5Vf_-vRnF171btk3bsasjgLFMOju2weteoAYiQbmVpve9rCIwOJw"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex flex-col justify-end p-8 md:p-12">
<h1 className="text-white text-4xl md:text-5xl font-bold leading-tight max-w-2xl">Service de Déménagement Professionnel &amp; Sécurisé</h1>
<p className="text-slate-200 mt-4 text-lg max-w-xl">Libérez-vous du stress. Nos experts s'occupent de tout, de l'emballage à l'installation dans votre nouveau foyer.</p>
<div className="mt-8">
<button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg transition-colors">Obtenir un devis gratuit</button>
</div>
</div>
</div>
</section>
<section className="px-4 md:px-20 py-12">
<h2 className="text-slate-900 text-3xl font-bold leading-tight mb-8">Comment ça marche</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="flex flex-col gap-4 p-6 rounded-xl border border-slate-200 bg-white shadow-sm">
<div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-2xl">calendar_month</span>
</div>
<h3 className="text-xl font-bold">1. Réservation en ligne</h3>
<p className="text-slate-600">Choisissez votre formule et votre date en quelques clics. Recevez une confirmation immédiate.</p>
</div>
<div className="flex flex-col gap-4 p-6 rounded-xl border border-slate-200 bg-white shadow-sm">
<div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-2xl">inventory_2</span>
</div>
<h3 className="text-xl font-bold">2. Emballage &amp; Chargement</h3>
<p className="text-slate-600">Nos experts protègent vos biens avec du matériel professionnel et chargent le camion avec soin.</p>
</div>
<div className="flex flex-col gap-4 p-6 rounded-xl border border-slate-200 bg-white shadow-sm">
<div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-2xl">home_pin</span>
</div>
<h3 className="text-xl font-bold">3. Installation</h3>
<p className="text-slate-600">Transport sécurisé et déchargement. Nous plaçons vos meubles exactement là où vous le souhaitez.</p>
</div>
</div>
</section>
<section className="px-4 md:px-20 py-12 bg-slate-50">
<div className="flex flex-col items-center text-center mb-12">
<h2 className="text-slate-900 text-3xl font-bold leading-tight">Tarification et Détails</h2>
<p className="text-slate-600 mt-2">Des tarifs transparents adaptés à tous vos besoins de mobilité.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
<div className="flex flex-col p-8 rounded-xl bg-white border border-slate-200">
<h3 className="text-xl font-bold mb-2">Petit Déménagement</h3>
<p className="text-slate-500 text-sm mb-6">Idéal pour Studio ou T1</p>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-bold">150â‚¬</span>
<span className="text-slate-500">à partir de</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-green-500">check_circle</span>
<span>2 déménageurs (2h)</span>
</li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-green-500">check_circle</span>
<span>Camion 10-12mÂ³</span>
</li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-green-500">check_circle</span>
<span>Kit de cartons inclus</span>
</li>
</ul>
<button className="w-full py-3 px-4 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary/5 transition-colors">Choisir cette offre</button>
</div>
<div className="flex flex-col p-8 rounded-xl bg-white border-2 border-primary relative shadow-xl transform scale-105">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Populaire</div>
<h3 className="text-xl font-bold mb-2">Déménagement Complet</h3>
<p className="text-slate-500 text-sm mb-6">Appartement familial ou Maison</p>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-bold">450â‚¬</span>
<span className="text-slate-500">à partir de</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-green-500">check_circle</span>
<span>3-4 déménageurs</span>
</li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-green-500">check_circle</span>
<span>Camion 20-30mÂ³</span>
</li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-green-500">check_circle</span>
<span>Service emballage complet</span>
</li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-green-500">check_circle</span>
<span>Assurance premium incluse</span>
</li>
</ul>
<button className="w-full py-3 px-4 rounded-lg bg-primary text-white font-bold hover:bg-primary/90 transition-colors shadow-lg">Choisir cette offre</button>
</div>
<div className="flex flex-col p-8 rounded-xl bg-white border border-slate-200">
<h3 className="text-xl font-bold mb-2">Transport Objets Lourds</h3>
<p className="text-slate-500 text-sm mb-6">Piano, Coffre-fort, Billard</p>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-bold">200â‚¬</span>
<span className="text-slate-500">à partir de</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-green-500">check_circle</span>
<span>Ã‰quipe spécialisée</span>
</li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-green-500">check_circle</span>
<span>Ã‰quipement de levage</span>
</li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-green-500">check_circle</span>
<span>Protection spécifique</span>
</li>
</ul>
<button className="w-full py-3 px-4 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary/5 transition-colors">Choisir cette offre</button>
</div>
</div>
</section>
<section className="px-4 md:px-20 py-12">
<h2 className="text-slate-900 text-3xl font-bold mb-8">Nos meilleurs déménageurs</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col items-center text-center">
<div className="size-24 rounded-full overflow-hidden mb-4 border-4 border-primary/20">
<img alt="Marc" className="h-full w-full object-cover" data-alt="Profile photo of a professional male mover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGEjkERX_wP7CqZ2-mpHWG2vD8f3_tPyt7Vv88VkbMrnluWtneOJrgzHPQ0BJSXGCTSv7IgSYsuayUc-AMOTxa-MMuwzrP4q1kpKe8Y9MURIsAWeKa-tFXTdOP8Yca60_RKY8G1jiGdVE92lYF9B5U47h5JXwfPLg3O4yc4i2UCGJ4nHTefx2nlFDk1oBoZLkKAG22uChrLcBNVBydhLDgc_GzrUhtaFmpwD3VyFynzIACHzKOjEB5ag2Yce1rY_AFnNoP1nwrV7nz"/>
</div>
<h4 className="font-bold text-lg">Marc L.</h4>
<div className="flex text-yellow-500 mb-2">
<span className="material-symbols-outlined">star</span>
<span className="material-symbols-outlined">star</span>
<span className="material-symbols-outlined">star</span>
<span className="material-symbols-outlined">star</span>
<span className="material-symbols-outlined">star</span>
</div>
<p className="text-sm text-slate-600 italic">"12 ans d'expérience. Spécialiste des objets fragiles et du montage de meubles complexes."</p>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col items-center text-center">
<div className="size-24 rounded-full overflow-hidden mb-4 border-4 border-primary/20">
<img alt="Sarah" className="h-full w-full object-cover" data-alt="Profile photo of a professional female relocation expert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBR5tRqSxA7rsYtEDtWTCWMsdKmwWxMWu_DEaxnNKITb1SdU6fuj2LOT1P25kOLaOkTf18YNqqqJBlJx98Wm89OVEnVc1r_3BRKcgLFhy2j55bS-zYkAFBzzE_7lM07YGLtED3V8tLFPwYT_T4w6SkT1S1_m6UMhUfNpuDYyB76r4sjWEJYWaJ76ZOjDWy6xD76UWmgYBgm9Nt2pHNS54fkLI-6cV5BpE5yLcH_jeGWXuC8vXTQZqM-lMV7UtlL_zK85dj1ANa2adWS"/>
</div>
<h4 className="font-bold text-lg">Sarah K.</h4>
<div className="flex text-yellow-500 mb-2">
<span className="material-symbols-outlined">star</span>
<span className="material-symbols-outlined">star</span>
<span className="material-symbols-outlined">star</span>
<span className="material-symbols-outlined">star</span>
<span className="material-symbols-outlined">star_half</span>
</div>
<p className="text-sm text-slate-600 italic">"Experte en logistique et organisation. Je m'assure que chaque carton arrive au bon endroit."</p>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col items-center text-center">
<div className="size-24 rounded-full overflow-hidden mb-4 border-4 border-primary/20">
<img alt="Thomas" className="h-full w-full object-cover" data-alt="Profile photo of an experienced male mover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCozerGA4qyFutmSiCcSvmJl6z_oUmQ7I-hcln2N9qtpC5Db4ahavKvlPCf6g275twzfJ79I0TaqAab9th7zyahHPwApq_kblttZFjKr0uk62SYzaREee6UoWACf5Um38rI6bzI4BkRkGqIE1WlLLCsVxhxP4ldqxob_vqMaBCCfL6Mn92tKreQrO8cWz2TDzqEMfazHYMmyl88Ds7j3rVS8TNNJxW3ijCShKkQYKELrIRZSNq4Qqr-Vlfsjw8H81CXimriPnx1zNIB"/>
</div>
<h4 className="font-bold text-lg">Thomas B.</h4>
<div className="flex text-yellow-500 mb-2">
<span className="material-symbols-outlined">star</span>
<span className="material-symbols-outlined">star</span>
<span className="material-symbols-outlined">star</span>
<span className="material-symbols-outlined">star</span>
<span className="material-symbols-outlined">star</span>
</div>
<p className="text-sm text-slate-600 italic">"Expert en transport d'objets lourds. Maniaque de la protection et de la sécurité du matériel."</p>
</div>
</div>
</section>
<section className="px-4 md:px-20 py-16 bg-slate-50">
<h2 className="text-slate-900 text-3xl font-bold mb-8 text-center">Questions fréquentes</h2>
<div className="max-w-3xl mx-auto space-y-4">
<div className="bg-white rounded-lg border border-slate-200 p-6">
<h4 className="font-bold mb-2 flex justify-between items-center">
                                Proposez-vous des cartons de déménagement ?
                                <span className="material-symbols-outlined text-primary">expand_more</span>
</h4>
<p className="text-slate-600">Oui, selon la formule choisie, nous pouvons vous fournir tout le matériel nécessaire (cartons, ruban adhésif, papier bulle) ou mÃªme nous occuper de l'emballage complet.</p>
</div>
<div className="bg-white rounded-lg border border-slate-200 p-6">
<h4 className="font-bold mb-2 flex justify-between items-center">
                                Mes biens sont-ils assurés pendant le transport ?
                                <span className="material-symbols-outlined text-primary">expand_more</span>
</h4>
<p className="text-slate-600">Absolument. Tous nos déménagements incluent une assurance responsabilité civile professionnelle. Pour les objets de grande valeur, nous proposons des extensions d'assurance ad valorem.</p>
</div>
<div className="bg-white rounded-lg border border-slate-200 p-6">
<h4 className="font-bold mb-2 flex justify-between items-center">
                                Combien de temps à l'avance dois-je réserver ?
                                <span className="material-symbols-outlined text-primary">expand_more</span>
</h4>
<p className="text-slate-600">Nous recommandons de réserver au moins 2 à 3 semaines à l'avance, surtout pour les déménagements en fin de mois ou pendant le week-end, qui sont des périodes très demandées.</p>
</div>
</div>
</section>
</main>
<footer className="bg-white border-t border-slate-200 px-6 md:px-20 py-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="flex flex-col gap-4">
<div className="flex items-center gap-2 text-primary">
<span className="material-symbols-outlined">local_shipping</span>
<span className="font-bold text-xl text-slate-900">Déménagement Pro</span>
</div>
<p className="text-sm text-slate-500">Service professionnel de déménagement partout en France. Qualité, sécurité et sérénité garanties.</p>
<div className="flex gap-4 mt-2">
<a className="text-slate-400 hover:text-primary" href="#"><span className="material-symbols-outlined">public</span></a>
<a className="text-slate-400 hover:text-primary" href="#"><span className="material-symbols-outlined">thumb_up</span></a>
<a className="text-slate-400 hover:text-primary" href="#"><span className="material-symbols-outlined">share</span></a>
</div>
</div>
<div>
<h5 className="font-bold mb-4">Services</h5>
<ul className="space-y-2 text-sm text-slate-600">
<li><a className="hover:text-primary" href="#">Déménagement particulier</a></li>
<li><a className="hover:text-primary" href="#">Transfert de bureau</a></li>
<li><a className="hover:text-primary" href="#">Garde-meuble</a></li>
<li><a className="hover:text-primary" href="#">Location de monte-meuble</a></li>
</ul>
</div>
<div>
<h5 className="font-bold mb-4">Support</h5>
<ul className="space-y-2 text-sm text-slate-600">
<li><a className="hover:text-primary" href="#">Centre d'aide</a></li>
<li><a className="hover:text-primary" href="#">Contactez-nous</a></li>
<li><a className="hover:text-primary" href="#">Suivi de prestation</a></li>
<li><a className="hover:text-primary" href="#">Réclamations</a></li>
</ul>
</div>
<div>
<h5 className="font-bold mb-4">Newsletter</h5>
<p className="text-sm text-slate-600 mb-4">Recevez nos conseils pour un déménagement réussi.</p>
<div className="flex gap-2">
<input className="form-input flex-1 rounded-lg border-slate-300 text-sm focus:border-primary focus:ring-primary" placeholder="Email" type="email"/>
<button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold">OK</button>
</div>
</div>
</div>
<div className="mt-12 pt-8 border-t border-slate-100 text-center text-xs text-slate-500">
<p>Â© 2024 Déménagement Pro. Tous droits réservés. Mentions légales | Confidentialité</p>
</div>
</footer>
</div>
</div>

    </>
  );
};

export default DetailsDuServiceDemenagement;

