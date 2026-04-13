import React from 'react';

const Montage = () => {
  return (
    <>
      
<header className="sticky top-0 z-50 bg-white border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex items-center gap-8">
<div className="flex items-center gap-2 text-primary">
<span className="material-symbols-outlined text-3xl font-bold">build</span>
<h1 className="text-xl font-black tracking-tight text-slate-900">MihnaPro</h1>
</div>
<nav className="hidden md:flex items-center gap-6">
<a className="text-sm font-semibold text-slate-700 hover:text-primary transition-colors" href="#">Accueil</a>
<a className="text-sm font-semibold text-slate-700 hover:text-primary transition-colors" href="#">Artisans</a>
<a className="text-sm font-semibold text-slate-700 hover:text-primary transition-colors" href="#">Comment ça marche</a>
<a className="text-sm font-semibold text-slate-700 hover:text-primary transition-colors" href="#">Tarifs</a>
</nav>
</div>
<div className="flex-1 max-w-md mx-8 hidden lg:block">
<div className="relative">
<span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
<span className="material-symbols-outlined text-lg">search</span>
</span>
<input className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg bg-slate-50 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="De quel service avez-vous besoin ?" type="text"/>
</div>
</div>
<div className="flex items-center gap-3">
<button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg flex items-center justify-center transition-all mr-1" onclick="toggleDarkMode()" title="Changer de thème">
<span className="material-symbols-outlined text-xl">
        light_mode
    </span>
</button><div className="flex items-center mr-2">
<button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg flex items-center gap-1">
<span className="material-symbols-outlined text-lg">language</span>
<span className="text-xs font-bold uppercase tracking-wider">FR</span>
</button>
</div>
<button className="hidden sm:block px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-100 rounded-lg transition-all">Connexion</button>
<button className="px-5 py-2 text-sm font-bold text-white bg-primary hover:bg-primary/90 rounded-lg shadow-sm transition-all">S'inscrire</button>
</div>
</div>
</div>
</header>
<section className="relative bg-white overflow-hidden py-12 lg:py-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
<div className="flex-1 text-center lg:text-left">
<h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-6">
                    Trouvez l'artisan expert pour <span className="text-primary">tous vos travaux</span> à domicile
                </h1>
<p className="text-lg text-slate-600 mb-10 max-w-2xl">
                    Des services professionnels, vérifiés et proches de chez vous. Simplifiez votre quotidien avec MihnaPro.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
<button className="px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/25 hover:translate-y-[-2px] transition-all text-lg">
                        Trouver un expert
                    </button>
<button className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-all text-lg">
                        Devenir partenaire
                    </button>
</div>
</div>
<div className="flex-1 w-full relative">
<div className="aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-2xl">
<img className="w-full h-full object-cover" data-alt="Professional craftsman working with tools in a modern home" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCz1OZSicUXW-Xv1Hlc0rHEFP9PXzF0nQqNeHyTLkJm-yQxEUk3T2Xanj3tek11CemWodvAgkLfSwg3rk9TxHSbYKnPVKT4xdzy9qB7055TmTXPYFGEZWJJ3Zz0xXjGa8dq-gA58PhKA8_MY0OjIj0y_pP4uFZPFPasKgUpRdRS5W6c1GazdgX7Zaipa1unsNNYoq2GzVPdj5EYs2ch3GfKF7oiVq6Fo3Lz8j8f8HBHm6E34pO7omFwIS2t6ZYoQ4hjwlcdw-5Thw7_"/>
</div>
<div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
<span className="material-symbols-outlined">verified</span>
</div>
<div>
<p className="text-sm font-black text-slate-900">Artisans Certifiés</p>
<p className="text-xs text-slate-500">Profils vérifiés manuellement</p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-20 bg-background-light">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-black text-slate-900 mb-4">Nos services populaires</h2>
<p className="text-slate-600">Choisissez une catégorie pour voir nos spécialités</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="service-card relative group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 cursor-pointer overflow-hidden">
<div className="flex items-center gap-6 mb-4">
<div className="p-4 bg-blue-50 text-primary rounded-xl group-hover:bg-primary group-hover:text-white transition-colors">
<span className="material-symbols-outlined text-4xl">handyman</span>
</div>
<h3 className="text-xl font-bold text-slate-900">Montage</h3>
</div>
<p className="text-slate-500 mb-4 group-hover:opacity-0 transition-opacity opacity-0">Meubles, étagères, luminaires...</p>
<div className="sub-services absolute inset-0 bg-white p-8 flex-col justify-center animate-in fade-in slide-in-from-bottom-4 duration-300" >
<h4 className="font-black text-primary mb-4 text-lg border-b border-slate-100 pb-2">Services Montage</h4>
<div className="grid grid-cols-1 gap-4"><a className="flex items-center justify-between p-2 rounded-lg hover:bg-blue-50 transition-colors group/item" href="#">
<span className="text-sm font-semibold text-slate-700">Fixation TV</span>
<span className="material-symbols-outlined text-primary text-sm">arrow_forward</span>
</a>
<a className="flex items-center justify-between p-2 rounded-lg hover:bg-blue-50 transition-colors group/item" href="#">
<span className="text-sm font-semibold text-slate-700">Montage d'étagères</span>
<span className="material-symbols-outlined text-primary text-sm">arrow_forward</span>
</a>
<a className="flex items-center justify-between p-2 rounded-lg hover:bg-blue-50 transition-colors group/item" href="#">
<span className="text-sm font-semibold text-slate-700">Montage de meubles</span>
<span className="material-symbols-outlined text-primary text-sm">arrow_forward</span>
</a></div>
</div>
</div>
<div className="service-card relative group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 cursor-pointer overflow-hidden">
<div className="flex items-center gap-6 mb-4">
<div className="p-4 bg-green-50 text-green-600 rounded-xl group-hover:bg-green-600 group-hover:text-white transition-colors">
<span className="material-symbols-outlined text-4xl">cleaning_services</span>
</div>
<h3 className="text-xl font-bold text-slate-900">Ménage</h3>
</div>
<p className="text-slate-500 mb-4 group-hover:opacity-0 transition-opacity">Nettoyage complet, vitres...</p>
<div className="sub-services absolute inset-0 bg-white p-8 flex-col justify-center">
<h4 className="font-black text-green-600 mb-4 text-lg border-b border-slate-100 pb-2">Services Ménage</h4>
<div className="grid grid-cols-1 gap-4">
<a className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-50 transition-colors group/item" href="#">
<span className="material-symbols-outlined text-green-600 bg-green-50 p-2 rounded-lg">vacuum</span>
<span className="text-sm font-semibold text-slate-700">Nettoyage de printemps</span>
</a>
<a className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-50 transition-colors group/item" href="#">
<span className="material-symbols-outlined text-green-600 bg-green-50 p-2 rounded-lg">iron</span>
<span className="text-sm font-semibold text-slate-700">Repassage à domicile</span>
</a>
<a className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-50 transition-colors group/item" href="#">
<span className="material-symbols-outlined text-green-600 bg-green-50 p-2 rounded-lg">key</span>
<span className="text-sm font-semibold text-slate-700">Nettoyage fin de bail</span>
</a>
</div>
</div>
</div>
<div className="service-card relative group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 cursor-pointer overflow-hidden">
<div className="flex items-center gap-6 mb-4">
<div className="p-4 bg-cyan-50 text-cyan-600 rounded-xl group-hover:bg-cyan-600 group-hover:text-white transition-colors">
<span className="material-symbols-outlined text-4xl">plumbing</span>
</div>
<h3 className="text-xl font-bold text-slate-900">Plomberie</h3>
</div>
<p className="text-slate-500 mb-4 group-hover:opacity-0 transition-opacity">Fuites, robinetterie, débouchage...</p>
<div className="sub-services absolute inset-0 bg-white p-8 flex-col justify-center">
<h4 className="font-black text-cyan-600 mb-4 text-lg border-b border-slate-100 pb-2">Services Plomberie</h4>
<div className="grid grid-cols-1 gap-4">
<a className="flex items-center gap-3 p-2 rounded-lg hover:bg-cyan-50 transition-colors group/item" href="#">
<span className="material-symbols-outlined text-cyan-600 bg-cyan-50 p-2 rounded-lg">water_drop</span>
<span className="text-sm font-semibold text-slate-700">Réparation de fuite</span>
</a>
<a className="flex items-center gap-3 p-2 rounded-lg hover:bg-cyan-50 transition-colors group/item" href="#">
<span className="material-symbols-outlined text-cyan-600 bg-cyan-50 p-2 rounded-lg">mop</span>
<span className="text-sm font-semibold text-slate-700">Débouchage évier</span>
</a>
<a className="flex items-center gap-3 p-2 rounded-lg hover:bg-cyan-50 transition-colors group/item" href="#">
<span className="material-symbols-outlined text-cyan-600 bg-cyan-50 p-2 rounded-lg">toilet</span>
<span className="text-sm font-semibold text-slate-700">Installation WC</span>
</a>
</div>
</div>
</div>
<div className="service-card relative group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 cursor-pointer overflow-hidden">
<div className="flex items-center gap-6 mb-4">
<div className="p-4 bg-orange-50 text-orange-600 rounded-xl group-hover:bg-orange-600 group-hover:text-white transition-colors">
<span className="material-symbols-outlined text-4xl">bolt</span>
</div>
<h3 className="text-xl font-bold text-slate-900">Électricité</h3>
</div>
<p className="text-slate-500 mb-4 group-hover:opacity-0 transition-opacity">Prises, tableaux, éclairage...</p>
<div className="sub-services absolute inset-0 bg-white p-8 flex-col justify-center">
<h4 className="font-black text-orange-600 mb-4 text-lg border-b border-slate-100 pb-2">Services Électricité</h4>
<div className="grid grid-cols-1 gap-4">
<a className="flex items-center gap-3 p-2 rounded-lg hover:bg-orange-50 transition-colors group/item" href="#">
<span className="material-symbols-outlined text-orange-600 bg-orange-50 p-2 rounded-lg">power</span>
<span className="text-sm font-semibold text-slate-700">Remplacement de prise</span>
</a>
<a className="flex items-center gap-3 p-2 rounded-lg hover:bg-orange-50 transition-colors group/item" href="#">
<span className="material-symbols-outlined text-orange-600 bg-orange-50 p-2 rounded-lg">light</span>
<span className="text-sm font-semibold text-slate-700">Pose de luminaire</span>
</a>
<a className="flex items-center gap-3 p-2 rounded-lg hover:bg-orange-50 transition-colors group/item" href="#">
<span className="material-symbols-outlined text-orange-600 bg-orange-50 p-2 rounded-lg">build_circle</span>
<span className="text-sm font-semibold text-slate-700">Diagnostic panne</span>
</a>
</div>
</div>
</div>
<div className="service-card relative group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 cursor-pointer overflow-hidden">
<div className="flex items-center gap-6 mb-4">
<div className="p-4 bg-rose-50 text-rose-600 rounded-xl group-hover:bg-rose-600 group-hover:text-white transition-colors">
<span className="material-symbols-outlined text-4xl">format_paint</span>
</div>
<h3 className="text-xl font-bold text-slate-900">Peinture</h3>
</div>
<p className="text-slate-500 mb-4 group-hover:opacity-0 transition-opacity">Murs, plafonds, boiseries...</p>
<div className="sub-services absolute inset-0 bg-white p-8 flex-col justify-center">
<h4 className="font-black text-rose-600 mb-4 text-lg border-b border-slate-100 pb-2">Services Peinture</h4>
<div className="grid grid-cols-1 gap-4">
<a className="flex items-center gap-3 p-2 rounded-lg hover:bg-rose-50 transition-colors group/item" href="#">
<span className="material-symbols-outlined text-rose-600 bg-rose-50 p-2 rounded-lg">imagesmode</span>
<span className="text-sm font-semibold text-slate-700">Peinture murale</span>
</a>
<a className="flex items-center gap-3 p-2 rounded-lg hover:bg-rose-50 transition-colors group/item" href="#">
<span className="material-symbols-outlined text-rose-600 bg-rose-50 p-2 rounded-lg">wallpaper</span>
<span className="text-sm font-semibold text-slate-700">Pose papier peint</span>
</a>
<a className="flex items-center gap-3 p-2 rounded-lg hover:bg-rose-50 transition-colors group/item" href="#">
<span className="material-symbols-outlined text-rose-600 bg-rose-50 p-2 rounded-lg">brush</span>
<span className="text-sm font-semibold text-slate-700">Retouche peinture</span>
</a>
</div>
</div>
</div>
<div className="service-card relative group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 cursor-pointer overflow-hidden">
<div className="flex items-center gap-6 mb-4">
<div className="p-4 bg-indigo-50 text-indigo-600 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">
<span className="material-symbols-outlined text-4xl">local_shipping</span>
</div>
<h3 className="text-xl font-bold text-slate-900">Déménagement</h3>
</div>
<p className="text-slate-500 mb-4 group-hover:opacity-0 transition-opacity">Transport, aide bras, cartons...</p>
<div className="sub-services absolute inset-0 bg-white p-8 flex-col justify-center">
<h4 className="font-black text-indigo-600 mb-4 text-lg border-b border-slate-100 pb-2">Services Transport</h4>
<div className="grid grid-cols-1 gap-4">
<a className="flex items-center gap-3 p-2 rounded-lg hover:bg-indigo-50 transition-colors group/item" href="#">
<span className="material-symbols-outlined text-indigo-600 bg-indigo-50 p-2 rounded-lg">inventory_2</span>
<span className="text-sm font-semibold text-slate-700">Aide au chargement</span>
</a>
<a className="flex items-center gap-3 p-2 rounded-lg hover:bg-indigo-50 transition-colors group/item" href="#">
<span className="material-symbols-outlined text-indigo-600 bg-indigo-50 p-2 rounded-lg">fitness_center</span>
<span className="text-sm font-semibold text-slate-700">Transport objets lourds</span>
</a>
<a className="flex items-center gap-3 p-2 rounded-lg hover:bg-indigo-50 transition-colors group/item" href="#">
<span className="material-symbols-outlined text-indigo-600 bg-indigo-50 p-2 rounded-lg">local_shipping</span>
<span className="text-sm font-semibold text-slate-700">Petit déménagement</span>
</a>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-12 bg-primary text-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
<div className="flex flex-col items-center">
<span className="text-4xl font-black mb-2">15k+</span>
<span className="text-primary-foreground/80 font-medium">Clients Satisfaits</span>
</div>
<div className="flex flex-col items-center">
<span className="text-4xl font-black mb-2">2,500+</span>
<span className="text-primary-foreground/80 font-medium">Artisans Vérifiés</span>
</div>
<div className="flex flex-col items-center">
<span className="text-4xl font-black mb-2">40k+</span>
<span className="text-primary-foreground/80 font-medium">Projets Réalisés</span>
</div>
</div>
</div>
</section>
<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl font-black text-slate-900 mb-16">Comment ça marche</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
<div className="flex flex-col items-center gap-6">
<div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black text-xl">1</div>
<h3 className="text-xl font-bold">Décrivez votre besoin</h3>
<p className="text-slate-500">Dites-nous ce dont vous avez besoin, la date et le lieu.</p>
</div>
<div className="flex flex-col items-center gap-6">
<div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black text-xl">2</div>
<h3 className="text-xl font-bold">Comparez les devis</h3>
<p className="text-slate-500">Choisissez parmi les meilleurs artisans selon leurs notes et prix.</p>
</div>
<div className="flex flex-col items-center gap-6">
<div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black text-xl">3</div>
<h3 className="text-xl font-bold">Travail accompli</h3>
<p className="text-slate-500">Payez en toute sécurité une fois le service terminé avec succès.</p>
</div>
</div>
</div>
</section>
<section className="py-24 bg-background-light">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-black text-slate-900 mb-4">Artisans à la une</h2>
<p className="text-slate-600">Les mieux notés de votre région</p>
</div>
<button className="text-primary font-bold hover:underline">Voir tous les artisans</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg transition-all group">
<div className="relative w-full aspect-square mb-6 rounded-xl overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Professional craftsman smiling profile picture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuClxliG7Nz0XBQg4tI6Oc15NCa04rzk_KYVR1ziQtCTnIXJPT2_maYBgxwcW33FGvdRtXn9k4QdN8qvdVjn2EeEy7xHj6Cm19I-gANF5Y4FONAd-Z3sxEtRi_PTyHurKEQbnfxpfMzm4oyXddXB-9wnzdbKfOx674AkOTfBgPqK8XDhjdfB692QDcqhySHDC_Ilfe3ijMb748vxc47jf-by-Mmr7FMTzuPEAGJaRROl_YjlBikXH6V-5xMoiC-CZ9RsD5zkZ_PJY30P"/>
<div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
<span className="material-symbols-outlined text-yellow-400 text-sm fill-current">star</span>
<span className="text-xs font-bold">4.9</span>
</div>
</div>
<div className="flex items-center gap-2 mb-1">
<h4 className="font-bold text-slate-900">Ahmed Mansouri</h4>
<span className="material-symbols-outlined text-primary text-sm">verified</span>
</div>
<p className="text-xs text-slate-500 mb-4">Spécialiste Électricité &amp; Montage</p>
<div className="flex items-center justify-between">
<span className="text-sm font-bold">35€ <span className="text-slate-400 font-normal">/h</span></span>
<button className="px-4 py-2 bg-slate-100 text-slate-700 text-xs font-bold rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">Profil</button>
</div>
</div>
<div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg transition-all group">
<div className="relative w-full aspect-square mb-6 rounded-xl overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Verified plumber professional portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDo1QRtZKv0_5oN9u43WOgyBCvOEoCEEztPxZ_I0-rfR9ufB6Bu_gi94exkTkc-r3J2mghRzGrQocdJ8bjZBjZlzSgB7hrMaXMUSKU4RiTo4ZoZd1gAccQ9eWok4hsRrpNaXQkK3Wi-P_PeAmklUfrPAtjHELS499jChNw8ei7JUleTdTljkmufdPciw6DJJcwWLXoVScl3bdi2t1hapBYDCqSsczQzahq4b-mjJaI2D246ZZOZxxfnb-IjGyBgkvrjhUFgTgrKSKF2"/>
<div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
<span className="material-symbols-outlined text-yellow-400 text-sm fill-current">star</span>
<span className="text-xs font-bold">4.8</span>
</div>
</div>
<div className="flex items-center gap-2 mb-1">
<h4 className="font-bold text-slate-900">Karim B.</h4>
<span className="material-symbols-outlined text-primary text-sm">verified</span>
</div>
<p className="text-xs text-slate-500 mb-4">Expert Plomberie 24/7</p>
<div className="flex items-center justify-between">
<span className="text-sm font-bold">45€ <span className="text-slate-400 font-normal">/h</span></span>
<button className="px-4 py-2 bg-slate-100 text-slate-700 text-xs font-bold rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">Profil</button>
</div>
</div>
<div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg transition-all group">
<div className="relative w-full aspect-square mb-6 rounded-xl overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Interior painter professional portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVyZ0PN_UixjqFXLhizVq0iDgVwkhNCohPraCz1HEq5ybZSLwPf99YDo9yAeU9uFN4YTP0dNqgvhuuQAjX2hMYhkj_owF_JNtCJM1GMhOo5Bmo5lp3rvFjscDoyTxFa92e5KzWwNiWMMwgu4O7kZRi8OS5cYbzRfAyy19G4dzO7A4iNLRO8tPNwpseiu8w4ABWUieL1ObDkh87FKq1AyVcqb-s49c6n1VOdXPujalb4BDhevlB2wOpcEVTOVTyq6VFJmBHIKKPogP_"/>
<div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
<span className="material-symbols-outlined text-yellow-400 text-sm fill-current">star</span>
<span className="text-xs font-bold">5.0</span>
</div>
</div>
<div className="flex items-center gap-2 mb-1">
<h4 className="font-bold text-slate-900">Sarah L.</h4>
<span className="material-symbols-outlined text-primary text-sm">verified</span>
</div>
<p className="text-xs text-slate-500 mb-4">Peinture &amp; Décoration</p>
<div className="flex items-center justify-between">
<span className="text-sm font-bold">30€ <span className="text-slate-400 font-normal">/h</span></span>
<button className="px-4 py-2 bg-slate-100 text-slate-700 text-xs font-bold rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">Profil</button>
</div>
</div>
<div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg transition-all group">
<div className="relative w-full aspect-square mb-6 rounded-xl overflow-hidden">
<img className="w-full h-full object-cover" data-alt="General maintenance worker profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxJ5aIEWrDtqhBTdSJvKZUqCkQtXtG4PA4zYiwDebzuFH7Ktt7exUNK0sYkiPDXDipxQPPLMawY6GnuZTQYq8i25zb8yr-eSdu4t9Vnm_asxeVGa6-SI04uC5OTRKawKVwMinJO8ZYh6s90gEHhKR7qkDaLaHm6UUo_kSlCc5usj3tSpwlDzINAqmmjRRBhc9F4hV6zlBHUQ2-CUz0CKNYoo64_xws9nMrogqXcU-XxZOe8P5nYI_G8BipGXxvXYZx2SMlcGpdA8bm"/>
<div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
<span className="material-symbols-outlined text-yellow-400 text-sm fill-current">star</span>
<span className="text-xs font-bold">4.7</span>
</div>
</div>
<div className="flex items-center gap-2 mb-1">
<h4 className="font-bold text-slate-900">Omar Zed</h4>
<span className="material-symbols-outlined text-primary text-sm">verified</span>
</div>
<p className="text-xs text-slate-500 mb-4">Déménagement &amp; Transport</p>
<div className="flex items-center justify-between">
<span className="text-sm font-bold">28€ <span className="text-slate-400 font-normal">/h</span></span>
<button className="px-4 py-2 bg-slate-100 text-slate-700 text-xs font-bold rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">Profil</button>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 bg-white">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-black text-slate-900 text-center mb-16">Questions Fréquemment Posées</h2>
<div className="space-y-4">
<details className="group border border-slate-200 rounded-xl overflow-hidden" open="">
<summary className="flex justify-between items-center p-6 cursor-pointer bg-slate-50 hover:bg-slate-100 transition-colors list-none">
<span className="font-bold text-slate-900">Comment les artisans sont-ils vérifiés ?</span>
<span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div className="p-6 text-slate-600 leading-relaxed bg-white border-t border-slate-200">
                        Chaque artisan sur MihnaPro passe par un processus de vérification rigoureux comprenant la vérification de l'identité, des qualifications professionnelles et des antécédents. Nous recueillons également les avis réels des clients précédents.
                    </div>
</details>
<details className="group border border-slate-200 rounded-xl overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer bg-slate-50 hover:bg-slate-100 transition-colors list-none">
<span className="font-bold text-slate-900">Que se passe-t-il si je ne suis pas satisfait ?</span>
<span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div className="p-6 text-slate-600 leading-relaxed bg-white border-t border-slate-200">
                        Votre satisfaction est notre priorité. Si un service ne répond pas à vos attentes, notre équipe de support intervient pour résoudre le litige. Le paiement n'est libéré à l'artisan que lorsque vous confirmez la fin des travaux.
                    </div>
</details>
<details className="group border border-slate-200 rounded-xl overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer bg-slate-50 hover:bg-slate-100 transition-colors list-none">
<span className="font-bold text-slate-900">Est-ce que le service est assuré ?</span>
<span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div className="p-6 text-slate-600 leading-relaxed bg-white border-t border-slate-200">
                        Oui, tous les projets réservés et payés via MihnaPro bénéficient d'une assurance responsabilité civile professionnelle pour couvrir d'éventuels dommages accidentels pendant l'intervention.
                    </div>
</details>
</div>
</div>
</section>
<footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
<div>
<div className="flex items-center gap-2 text-white mb-6">
<span className="material-symbols-outlined text-3xl font-bold text-primary">build</span>
<span className="text-xl font-black tracking-tight">MihnaPro</span>
</div>
<p className="text-sm leading-relaxed mb-6">
                        La plateforme n°1 de mise en relation avec des artisans de confiance pour tous vos besoins domestiques et professionnels.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors" href="#">
<svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.324v-21.35c0-.732-.593-1.325-1.323-1.325z"></path></svg>
</a>
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors" href="#">
<svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
</a>
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors" href="#">
<svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
</a>
</div>
</div>
<div>
<h4 className="text-white font-bold mb-6">Liens Rapides</h4>
<ul className="space-y-4 text-sm">
<li><a className="hover:text-primary transition-colors" href="#">À propos de nous</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Comment ça marche</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Devenir Artisan</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Blog &amp; Conseils</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Conditions Générales</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold mb-6">Contact</h4>
<ul className="space-y-4 text-sm">
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary">mail</span>
                            support@mihnapro.com
                        </li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary">phone</span>
                            +33 1 23 45 67 89
                        </li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary">location_on</span>
                            Paris, France
                        </li>
</ul>
</div>
<div>
<h4 className="text-white font-bold mb-6">Newsletter</h4>
<p className="text-sm mb-4">Recevez nos meilleures offres et conseils déco.</p>
<form className="flex gap-2">
<input className="bg-slate-800 border-none rounded-lg px-4 py-2 text-sm w-full focus:ring-1 focus:ring-primary" placeholder="Email" type="email"/>
<button className="p-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
<span className="material-symbols-outlined">send</span>
</button>
</form>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
<p>© 2024 MihnaPro. Tous droits réservés.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Confidentialité</a>
<a className="hover:text-white transition-colors" href="#">Cookies</a>
<a className="hover:text-white transition-colors" href="#">Sécurité</a>
</div>
</div>
</div>
</footer>

    </>
  );
};

export default Montage;
