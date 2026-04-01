import React from 'react';

const ProfilArtisan = () => {
  return (
    <>
      
<div className="layout-container flex h-full grow flex-col">
{/*  Header  */}
<header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 lg:px-20 py-3">
<div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
<div className="flex items-center gap-8">
<div className="flex items-center gap-2 text-primary">
<span className="material-symbols-outlined text-3xl font-bold">handyman</span>
<h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight tracking-tight">ArtisanHub</h2>
</div>
<div className="hidden md:flex flex-col min-w-64">
<div className="flex w-full items-stretch rounded-lg h-10 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
<div className="text-slate-500 flex items-center justify-center pl-3">
<span className="material-symbols-outlined text-xl">search</span>
</div>
<input className="w-full bg-transparent border-none focus:ring-0 text-sm placeholder:text-slate-500" placeholder="Rechercher un service..."/>
</div>
</div>
</div>
<div className="flex items-center gap-4 lg:gap-8">
<nav className="hidden sm:flex items-center gap-6">
<a className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="#">Tarifs</a>
<a className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="#">Aide</a>
</nav>
<div className="flex items-center gap-2">
<button className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
<span className="material-symbols-outlined text-xl">notifications</span>
</button>
<button className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
<span className="material-symbols-outlined text-xl">dark_mode</span>
</button>
<button className="hidden sm:flex min-w-[100px] items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold shadow-sm hover:bg-primary/90 transition-all">
                            Connexion
                        </button>
</div>
</div>
</div>
</header>
<main className="max-w-7xl mx-auto w-full px-4 lg:px-20 py-8">
{/*  Hero Section  */}
<div className="relative mb-12">
<div className="h-64 md:h-80 w-full rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-800">
<div className="w-full h-full bg-cover bg-center" data-alt="Modern professional woodworking and craftsmanship workshop banner" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBjwtfwuvBNhBRGIUv8xZ70L-oahk2L2sJCIkBfYv8F6zwWbVXwxSaNgzt6fPC4VngSo4kUif1QRUFbeJxDWe0nFyYQ9SX090MdWH7Amg0yD74OLbAjtlzrHGH1k16hBMbRVVCO8O0y3JcUnDnJZuRz45q_S8cLktAt9iq3B0dBsQ9pr3hcKAYrjgCmY6G50Cgyc9UbxRIybBxXSkwVO_Ci_dOcOhGsO0o-RAYLbKSdJZmnyFz3AvecR4QYynnTiAjHXZ8p6GdNI9u5");'></div>
</div>
<div className="absolute -bottom-16 left-8 flex flex-col md:flex-row items-end md:items-center gap-6">
<div className="relative">
<div className="size-32 md:size-40 rounded-full border-4 border-white dark:border-background-dark overflow-hidden bg-white shadow-xl">
<img alt="Ahmed Mansouri Profile" className="w-full h-full object-cover" data-alt="Professional portrait of Ahmed Mansouri craftsman" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtggIOlqPVHtICUWtPEzSFJWMM0oGBH9roTiPAiobLV4jKQEAVI2E0FAbHbkmeQ-4XUOxCgtwT4h5tompk8HlLHNhFRySmjG_A3qgk_SShgbSSBtsR9eOsdMAXybgyz5YyzwdU5w8dvA2HcttlvCz5ce3dziKQqI4v1MS9Fk2oSgEL8zQPlkYv3R8l6do-JSSsRVktYCHodeBipegvRJ8GkZk7ag5t0mwCeZCxHyl-05420PwJCPeKMBHD1TB9VfQ0KHLfbsFjNZcu"/>
</div>
<div className="absolute bottom-2 right-2 size-6 bg-green-500 rounded-full border-2 border-white dark:border-background-dark pulse-green"></div>
</div>
<div className="pb-2 md:pb-4 flex-1">
<div className="flex flex-wrap items-center gap-3">
<h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">Ahmed Mansouri</h1>
<span className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
<span className="size-2 bg-green-500 rounded-full"></span>
                                Disponible maintenant
                            </span>
</div>
<p className="text-slate-500 dark:text-slate-400 text-lg flex items-center gap-2">
                            Maître Artisan Menuisier &amp; Ébéniste
                            <span className="size-1 bg-slate-300 rounded-full"></span>
<span className="flex items-center text-primary">
<span className="material-symbols-outlined text-sm">verified</span>
<span className="ml-1 text-sm font-semibold uppercase tracking-wider">Vérifié</span>
</span>
</p>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-24">
{/*  Left Content  */}
<div className="lg:col-span-2 space-y-8">
{/*  Stats Grid  */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Projets</p>
<p className="text-2xl font-bold text-slate-900 dark:text-slate-100">150+</p>
</div>
<div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Expérience</p>
<p className="text-2xl font-bold text-slate-900 dark:text-slate-100">12 ans</p>
</div>
<div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Réponse</p>
<p className="text-2xl font-bold text-slate-900 dark:text-slate-100">&lt; 2h</p>
</div>
<div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Recommandé</p>
<p className="text-2xl font-bold text-slate-900 dark:text-slate-100">98%</p>
</div>
</div>
{/*  Verified Credentials  */}
<section>
<h3 className="text-xl font-bold mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">shield</span>
                            Informations Vérifiées
                        </h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-800">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-slate-400">badge</span>
<div>
<p className="text-sm font-semibold">Licence Pro</p>
<p className="text-xs text-slate-500">Valide jusqu'en 2026</p>
</div>
</div>
<a className="text-primary text-xs font-bold hover:underline" href="#">Voir</a>
</div>
<div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-800">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-slate-400">policy</span>
<div>
<p className="text-sm font-semibold">Assurance RC</p>
<p className="text-xs text-slate-500">Allianz Pro</p>
</div>
</div>
<a className="text-primary text-xs font-bold hover:underline" href="#">Voir</a>
</div>
<div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-800">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-slate-400">school</span>
<div>
<p className="text-sm font-semibold">Diplôme Ébéniste</p>
<p className="text-xs text-slate-500">CAP/BEP Spécialisé</p>
</div>
</div>
<a className="text-primary text-xs font-bold hover:underline" href="#">Voir</a>
</div>
</div>
</section>
{/*  Services & Pricing Table  */}
<section>
<h3 className="text-xl font-bold mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">lists</span>
                            Services &amp; Tarifs
                        </h3>
<div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wider">
<th className="px-6 py-4 font-semibold">Service</th>
<th className="px-6 py-4 font-semibold">Délai Est.</th>
<th className="px-6 py-4 font-semibold">Prix de Base</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 dark:divide-slate-800">
<tr>
<td className="px-6 py-4 font-medium">Réparation de mobilier ancien</td>
<td className="px-6 py-4 text-slate-500">3-5 jours</td>
<td className="px-6 py-4 text-primary font-bold">À partir de 85€</td>
</tr>
<tr>
<td className="px-6 py-4 font-medium">Pose de cuisine sur mesure</td>
<td className="px-6 py-4 text-slate-500">1-2 semaines</td>
<td className="px-6 py-4 text-primary font-bold">Sur devis</td>
</tr>
<tr>
<td className="px-6 py-4 font-medium">Conception de placards/dressings</td>
<td className="px-6 py-4 text-slate-500">1 semaine</td>
<td className="px-6 py-4 text-primary font-bold">À partir de 450€</td>
</tr>
<tr>
<td className="px-6 py-4 font-medium">Ponçage et vitrification parquet</td>
<td className="px-6 py-4 text-slate-500">2-3 jours</td>
<td className="px-6 py-4 text-primary font-bold">35€ / m²</td>
</tr>
</tbody>
</table>
</div>
</section>
{/*  Portfolio Gallery  */}
<section>
<div className="flex items-center justify-between mb-4">
<h3 className="text-xl font-bold flex items-center gap-2">
<span className="material-symbols-outlined text-primary">photo_library</span>
                                Portfolio Réalisations
                            </h3>
<button className="text-primary font-bold text-sm hover:underline">Voir tout</button>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
<div className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer">
<img alt="Projet 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform" data-alt="High-end custom kitchen cabinet installation" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDb-Kj6SbQTYnfKSvvLNr2P95TxPesFCzeFp8Nz9Hlt2doWZhU24VNmflM93L80w0MM8DPig5sdk_rodDtzGevC8iPZJTOjb-VbR1zk7sNWhrF3L09trcxwXqi9JqN3DpBxfV-A6Uhpogyt4hlSflEfT85sVwcbM0tAwMBRlZYPUxRQmu8Y3BAu4hEaFQWd1UTcxPyeR1f_c-kXeDTu1dkgkGcO5akftAMTUQWHc853JrcHC63x1ILxJtdvBS61YG7b-4AiXjShVnH5"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
<p className="text-white text-xs font-semibold">Cuisine Moderne en Chêne</p>
</div>
</div>
<div className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer">
<img alt="Projet 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform" data-alt="Bespoke solid wood library shelving" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZuXtrja3n-LtGW8GsslBiZ4XJA8rchqZ4ZHCQEOm8kyc-fALL-858-lTw5TSYiQF67Eh-N-d2iuALlA8iYX-3CSRvthEm953mKt9skaQcVZIvMIDJYTcCh9v94VckKIE-zBPoQFhCXPJtshHFY1kMj4pMIm4ZebjV5M9yjH3iTh7XD2XBtdgJb4upq1P3_nege9EH4wifMc3CV9zHCveYjknE9oH-ogayfklSQKxMBsWV5RPo7w11UKRjqGcRf1P6Vspb-pwjhjvI"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
<p className="text-white text-xs font-semibold">Bibliothèque Intégrée</p>
</div>
</div>
<div className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer">
<img alt="Projet 3" className="w-full h-full object-cover group-hover:scale-110 transition-transform" data-alt="Elegant walnut dining table craftsman work" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDZ6PnTq_2BAWvEDcCoPmTKzeTPvADXFCDS_ZWOj5OuewdXNJFcutPrTEhpJFPnId81tWdeZ7J5niERmsQsc8oJrIvtYG38tbS8N7m-_caZA_yQfZuqjVXQxAPUyIck-GHweq8u6r2LQG0palC8dNBYi3e1ihSkeDvqNYuDW2dcR0lGrzMvbF-ivqMYh1K4YGWDtJz4pJ2wE13tI81M-6ck_C2eOrvbnfJEhB6dliBy7nCBeEZSjjr9A9tIFvxEcLJpCtnrw5Sj6Jx"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
<p className="text-white text-xs font-semibold">Table de Salle à Manger</p>
</div>
</div>
</div>
</section>
{/*  Reviews  */}
<section>
<h3 className="text-xl font-bold mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">reviews</span>
                            Avis Clients (42)
                        </h3>
<div className="space-y-6">
<div className="flex gap-4">
<div className="size-10 rounded-full bg-slate-200 shrink-0">
<img alt="Reviewer" className="w-full h-full rounded-full" data-alt="Customer avatar for testimonial" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdHDqwtFzeWPSeGsGh68uEp-mj-w0zqbJD63pSA_36JhnwRSkyCldZdGjCArFaYUpYHGLBwGqOY7u8GsgBStqQ3G1rlJ9DO45pg-J8_CXG8q6zqU524HDJ23CqU7CAn9HF2g6FaxDxQGaMaoQi7i5s5_nS4kf9Iq-6aUE8W0nrUCDbvj4JI6kxYhE260hgha8x7fZ-J7eiCRvTSUwPZq0EK_wgpvyEIAmDhwdfIhHEeSAyc_P4KvBebpGzMIb_i-aJHXcKmlQI0qEj"/>
</div>
<div className="flex-1 border-b border-slate-100 dark:border-slate-800 pb-6">
<div className="flex items-center justify-between mb-1">
<p className="font-bold">Jean-Marc T.</p>
<p className="text-xs text-slate-400">Il y a 2 jours</p>
</div>
<div className="flex items-center gap-1 mb-2">
<span className="material-symbols-outlined text-yellow-400 text-sm fill-current">star</span>
<span className="material-symbols-outlined text-yellow-400 text-sm fill-current">star</span>
<span className="material-symbols-outlined text-yellow-400 text-sm fill-current">star</span>
<span className="material-symbols-outlined text-yellow-400 text-sm fill-current">star</span>
<span className="material-symbols-outlined text-yellow-400 text-sm fill-current">star</span>
</div>
<p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                        Travail exceptionnel pour la restauration de mon secrétaire Louis XV. Ahmed est un véritable passionné, méticuleux et ponctuel. Je recommande vivement !
                                    </p>
</div>
</div>
<div className="flex gap-4">
<div className="size-10 rounded-full bg-slate-200 shrink-0">
<img alt="Reviewer" className="w-full h-full rounded-full" data-alt="Customer avatar for review" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCgls4WyZ3G9VumleUkC0OpgO1TyCd96lfhoOgU14bdwegb5bI_a-if_aOw9sIJZPVPAlYz7CTBgk8P2bOHFeg6LUn0UEEjNcsdzG3nvQ78eJC_Ij8CTMs8dFB-ftTBwoKmhCu2MUH_MAP7866b1L6L82Nz1y6pYQFJy4hOBHOWxJPJanbQgYxHYKdF3VskyosjbXX30aw-tw8iitEK5H8zSCCZsLElou-37oCs4s5LKeozsLjJJ1tLssfHi_a36yu3gbHEGgRmh_R"/>
</div>
<div className="flex-1 pb-6">
<div className="flex items-center justify-between mb-1">
<p className="font-bold">Sophie L.</p>
<p className="text-xs text-slate-400">Il y a 2 semaines</p>
</div>
<div className="flex items-center gap-1 mb-2">
<span className="material-symbols-outlined text-yellow-400 text-sm fill-current">star</span>
<span className="material-symbols-outlined text-yellow-400 text-sm fill-current">star</span>
<span className="material-symbols-outlined text-yellow-400 text-sm fill-current">star</span>
<span className="material-symbols-outlined text-yellow-400 text-sm fill-current">star</span>
<span className="material-symbols-outlined text-yellow-400 text-sm">star</span>
</div>
<p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                        Installation de placard sur mesure parfaite. Chantier laissé très propre, délais respectés.
                                    </p>
</div>
</div>
</div>
</section>
</div>
{/*  Right Booking Widget  */}
<div className="lg:col-span-1">
<div className="sticky top-24 space-y-6"><div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden">
<div className="p-8">
<h4 className="text-xl font-extrabold text-slate-900 dark:text-slate-100 mb-8">Réserver un rendez-vous</h4>
<form className="space-y-6">
{/*  Service Selection  */}
<div className="space-y-2">
<label className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
<span className="material-symbols-outlined text-base">settings_suggest</span>
                    Service souhaité
                </label>
<div className="relative group">
<select className="w-full h-12 bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 rounded-2xl text-sm font-medium focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all appearance-none px-4">
<option>Réparation de mobilier</option>
<option>Pose de menuiserie</option>
<option>Conception sur-mesure</option>
<option>Autre prestation</option>
</select>
<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none group-focus-within:rotate-180 transition-transform">expand_more</span>
</div>
</div>
{/*  Date Picker  */}
<div className="space-y-2">
<label className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
<span className="material-symbols-outlined text-base">calendar_month</span>
                    Date souhaitée
                </label>
<input className="w-full h-12 bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 rounded-2xl text-sm font-medium focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all px-4" type="date"/>
</div>
{/*  Description Area  */}
<div className="space-y-2">
<label className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
<span className="material-symbols-outlined text-base">description</span>
                    Description du projet
                </label>
<textarea className="w-full bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 rounded-2xl text-sm font-medium focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all px-4 py-3 resize-none" placeholder="Décrivez brièvement votre besoin..." rows="3"></textarea>
</div>
{/*  Budget Display  */}
<div className="bg-slate-50 dark:bg-slate-800/80 p-5 rounded-2xl border border-slate-100 dark:border-slate-700">
<div className="flex justify-between items-center mb-1">
<div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
<span className="material-symbols-outlined text-sm">payments</span>
                        Estimation Budget
                    </div>
<span className="text-primary font-extrabold text-lg">120€ - 450€</span>
</div>
<p className="text-[10px] text-slate-500 leading-normal italic">*Basé sur les tarifs moyens du marché pour ce service.</p>
</div>
{/*  Actions  */}
<div className="space-y-3 pt-2">
<button className="w-full bg-primary hover:bg-blue-600 text-white font-bold h-14 rounded-2xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98] transition-all flex items-center justify-center gap-3 group" type="button">
<span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">send</span>
                    Demander un devis
                </button>
<button className="w-full bg-transparent border-2 border-slate-100 dark:border-slate-800 hover:border-primary/20 hover:bg-primary/5 text-slate-600 dark:text-slate-300 font-bold h-14 rounded-2xl transition-all flex items-center justify-center gap-3" type="button">
<span className="material-symbols-outlined">chat_bubble</span>
                    Contacter
                </button>
</div>
</form>
</div>
<div className="bg-slate-50/50 dark:bg-slate-800/30 border-t border-slate-100 dark:border-slate-800 py-4 px-8 flex items-center justify-center gap-3">
<span className="material-symbols-outlined text-green-500 text-lg">verified_user</span>
<span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Paiement sécurisé</span>
</div>
</div>
{/*  Why Us Card  */}
<div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 shadow-sm">
<h4 className="text-xs font-black mb-6 uppercase tracking-[0.2em] text-slate-400">Pourquoi Ahmed ?</h4>
<ul className="space-y-4">
<li className="flex items-start gap-4">
<div className="size-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-green-600 dark:text-green-400 text-sm font-bold">check</span>
</div>
<span className="text-sm font-medium text-slate-600 dark:text-slate-300">Garantie décennale incluse sur tous les ouvrages structurels.</span>
</li>
<li className="flex items-start gap-4">
<div className="size-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-green-600 dark:text-green-400 text-sm font-bold">check</span>
</div>
<span className="text-sm font-medium text-slate-600 dark:text-slate-300">Matériaux éco-responsables sourcés localement (FSC/PEFC).</span>
</li>
<li className="flex items-start gap-4">
<div className="size-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-green-600 dark:text-green-400 text-sm font-bold">check</span>
</div>
<span className="text-sm font-medium text-slate-600 dark:text-slate-300">Support SAV réactif sous 48h pendant 6 mois après livraison.</span>
</li>
</ul>
</div></div>
</div>
</div>
</main>
<footer className="mt-20 border-t border-slate-200 dark:border-slate-800 py-10 bg-white dark:bg-background-dark">
<div className="max-w-7xl mx-auto px-4 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 text-slate-400">
<span className="material-symbols-outlined">handyman</span>
<span className="text-sm font-bold">ArtisanHub © 2024</span>
</div>
<div className="flex gap-8">
<a className="text-xs text-slate-500 hover:text-primary" href="#">Conditions d'utilisation</a>
<a className="text-xs text-slate-500 hover:text-primary" href="#">Confidentialité</a>
<a className="text-xs text-slate-500 hover:text-primary" href="#">Cookies</a>
</div>
</div>
</footer>
</div>

    </>
  );
};

export default ProfilArtisan;
