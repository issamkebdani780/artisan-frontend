import React from 'react';

const MontageDetageres = () => {
  return (
    <>
      
<div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
{/*  Top Navigation Bar  */}
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 bg-white px-4 md:px-10 py-3 sticky top-0 z-50">
<div className="flex items-center gap-4 text-primary">
<div className="size-8">
<svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_6_330)">
<path clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fillRule="evenodd"></path>
</g>
<defs>
<clippath id="clip0_6_330"><rect fill="white" height="48" width="48"></rect></clippath>
</defs>
</svg>
</div>
<h2 className="text-slate-900 text-lg font-bold leading-tight tracking-tight">ShelfMaster</h2>
</div>
<div className="hidden md:flex flex-1 justify-end gap-8 items-center">
<nav className="flex items-center gap-9">
<a className="text-slate-600 text-sm font-medium hover:text-primary transition-colors" href="#">Services</a>
<a className="text-slate-600 text-sm font-medium hover:text-primary transition-colors" href="#">Comment ça marche</a>
<a className="text-slate-600 text-sm font-medium hover:text-primary transition-colors" href="#">Expertise</a>
<a className="text-slate-600 text-sm font-medium hover:text-primary transition-colors" href="#">Avis</a>
</nav>
<div className="flex gap-2">
<button className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold">
                            Connexion
                        </button>
<button className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-slate-100 text-slate-900 text-sm font-bold">
                            S'inscrire
                        </button>
</div>
</div>
</header>
<main className="mx-auto flex w-full max-w-[1280px] flex-1 flex-col md:flex-row gap-6 p-4 md:p-10">
{/*  Left Sidebar Navigation & Quote  */}
<aside className="w-full md:w-80 flex flex-col gap-6">
<div className="flex flex-col gap-4 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<div className="flex flex-col">
<h1 className="text-slate-900 text-xl font-bold">Devis Gratuit</h1>
<p className="text-slate-500 text-sm font-normal">Des experts prÃªts à vous aider.</p>
</div>
<nav className="flex flex-col gap-1">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary" href="#overview">
<span className="material-symbols-outlined text-xl">info</span>
<p className="text-sm font-semibold">Présentation</p>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50" href="#expertise">
<span className="material-symbols-outlined text-xl">build</span>
<p className="text-sm font-medium">Expertise IKEA &amp; Plus</p>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50" href="#offer">
<span className="material-symbols-outlined text-xl">list_alt</span>
<p className="text-sm font-medium">Nos Services</p>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50" href="#reviews">
<span className="material-symbols-outlined text-xl">grade</span>
<p className="text-sm font-medium">Avis Clients</p>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50" href="#faq">
<span className="material-symbols-outlined text-xl">help</span>
<p className="text-sm font-medium">FAQ</p>
</a>
</nav>
<button className="w-full py-3 px-4 bg-primary text-white rounded-lg font-bold text-sm shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all mt-2">
                            Demander un devis
                        </button>
</div>
<div className="hidden md:block overflow-hidden rounded-xl border border-slate-200">
<div className="h-48 w-full bg-slate-200" data-location="Paris, France" >
<div className="flex items-center justify-center h-full bg-primary/5">
<span className="material-symbols-outlined text-primary text-4xl">map</span>
</div>
</div>
<div className="p-4 bg-white">
<p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Zone d'intervention</p>
<p className="text-sm text-slate-700 mt-1">Services disponibles à Paris et en ÃŽle-de-France.</p>
</div>
</div>
</aside>
{/*  Main Content Area  */}
<div className="flex-1 flex flex-col gap-8">
{/*  Hero Section  */}
<section className="relative @container" id="overview">
<div className="bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-xl min-h-[320px] relative group" data-alt="Modern minimalist wooden shelves installed on a white wall" style='background-image: linear-gradient(0deg, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0) 60%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDrgGdMjCTbGDX1oMfuxsro-7afTEWQyKkkZhg6crptpFpz49ZLMCIB-qcxAQ1M4uYgitAWq8D0TXjdcHOOEW77X9YY_OK0QOEfNNskuVWG06VcZJoTdigRJ6BCvTksVG_xYdFpmSg7e1r-WlfTlX-0eSJjFj9RNI_5R5HXnAJQiyAEJy03M54q5qcB-KAS8YIbdKb_qY_ClTEZBZOVnPoIuZ_I6_cfi_sNJA_PEujpL1YcTWX29eQKOU_sQLoTzAXHAHRpnhpD_LrE");'>
<div className="p-6 md:p-10">
<div className="flex flex-wrap gap-2 mb-4">
<span className="bg-primary px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">Recommandé</span>
<span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">Garanti 1 an</span>
</div>
<h1 className="text-white text-3xl md:text-5xl font-extrabold leading-tight">Montage d'Ã‰tagères Professionnel</h1>
<p className="text-slate-200 mt-4 max-w-2xl text-lg">Fixation murale sécurisée et montage de meubles en kit pour tous vos espaces de rangement.</p>
</div>
</div>
</section>
{/*  Breadcrumbs  */}
<div className="flex flex-wrap items-center gap-2 text-sm">
<a className="text-slate-500 hover:text-primary transition-colors" href="#">Accueil</a>
<span className="material-symbols-outlined text-slate-400 text-sm">chevron_right</span>
<a className="text-slate-500 hover:text-primary transition-colors" href="#">Bricolage</a>
<span className="material-symbols-outlined text-slate-400 text-sm">chevron_right</span>
<span className="text-slate-900 font-semibold">Montage d'Ã‰tagères</span>
</div>
{/*  Expertise Section  */}
<section className="flex flex-col gap-6" id="expertise">
<div className="flex items-center gap-2 border-l-4 border-primary pl-4">
<h2 className="text-2xl font-bold tracking-tight">Expertise Montage Meubles</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="p-5 rounded-xl border border-slate-200 bg-white flex gap-4">
<div className="bg-primary/10 text-primary p-3 rounded-lg h-fit">
<span className="material-symbols-outlined">kitchen</span>
</div>
<div>
<h3 className="font-bold text-slate-900">Spécialiste IKEA</h3>
<p className="text-sm text-slate-500 mt-1">Maîtrise parfaite des gammes Kallax, Billy, Pax et BestÃ¥.</p>
</div>
</div>
<div className="p-5 rounded-xl border border-slate-200 bg-white flex gap-4">
<div className="bg-primary/10 text-primary p-3 rounded-lg h-fit">
<span className="material-symbols-outlined">architecture</span>
</div>
<div>
<h3 className="font-bold text-slate-900">Fixation sur mesure</h3>
<p className="text-sm text-slate-500 mt-1">Installation sur placo, brique, béton ou bois avec chevilles adaptées.</p>
</div>
</div>
</div>
</section>
{/*  What Taskers Offer  */}
<section className="bg-slate-900 rounded-2xl p-8 text-white" id="offer">
<h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
<span className="material-symbols-outlined text-primary">verified</span>
                            Ce que nos Taskeurs proposent
                        </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="flex flex-col gap-3">
<div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary font-bold">1</div>
<h4 className="font-bold text-lg">Préparation &amp; Mesure</h4>
<p className="text-slate-400 text-sm">Vérification de l'emplacement, détection des câbles et mise à niveau parfaite.</p>
</div>
<div className="flex flex-col gap-3">
<div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary font-bold">2</div>
<h4 className="font-bold text-lg">Perçage &amp; Fixation</h4>
<p className="text-slate-400 text-sm">Utilisation d'outils professionnels pour un ancrage solide et sécurisé.</p>
</div>
<div className="flex flex-col gap-3">
<div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary font-bold">3</div>
<h4 className="font-bold text-lg">Finitions</h4>
<p className="text-slate-400 text-sm">Nettoyage du chantier et test de charge pour votre tranquillité d'esprit.</p>
</div>
</div>
</section>
{/*  Reviews Section  */}
<section className="flex flex-col gap-6" id="reviews">
<div className="flex items-center justify-between">
<h2 className="text-2xl font-bold tracking-tight">Avis de nos clients</h2>
<div className="flex items-center gap-1 text-primary">
<span className="material-symbols-outlined fill-1">star</span>
<span className="font-bold">4.9/5</span>
<span className="text-slate-400 text-sm font-normal">(124 avis)</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="p-6 rounded-xl border border-slate-200 bg-white">
<div className="flex gap-1 text-yellow-500 mb-3">
<span className="material-symbols-outlined fill-1 text-sm">star</span>
<span className="material-symbols-outlined fill-1 text-sm">star</span>
<span className="material-symbols-outlined fill-1 text-sm">star</span>
<span className="material-symbols-outlined fill-1 text-sm">star</span>
<span className="material-symbols-outlined fill-1 text-sm">star</span>
</div>
<p className="italic text-slate-600">"Travail impeccable pour mes étagères de bibliothèque. Très professionnel et outillé."</p>
<div className="mt-4 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold">M</div>
<div>
<p className="text-sm font-bold">Marc L.</p>
<p className="text-xs text-slate-400">Il y a 2 jours</p>
</div>
</div>
</div>
<div className="p-6 rounded-xl border border-slate-200 bg-white">
<div className="flex gap-1 text-yellow-500 mb-3">
<span className="material-symbols-outlined fill-1 text-sm">star</span>
<span className="material-symbols-outlined fill-1 text-sm">star</span>
<span className="material-symbols-outlined fill-1 text-sm">star</span>
<span className="material-symbols-outlined fill-1 text-sm">star</span>
<span className="material-symbols-outlined fill-1 text-sm">star</span>
</div>
<p className="italic text-slate-600">"Rapide et efficace pour monter ma penderie IKEA. Je recommande vivement !"</p>
<div className="mt-4 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold">S</div>
<div>
<p className="text-sm font-bold">Sophie R.</p>
<p className="text-xs text-slate-400">Il y a 1 semaine</p>
</div>
</div>
</div>
</div>
</section>
{/*  FAQ Section  */}
<section className="flex flex-col gap-6 mb-10" id="faq">
<h2 className="text-2xl font-bold tracking-tight">Questions Fréquentes</h2>
<div className="space-y-4">
<details className="group p-4 rounded-xl border border-slate-200 bg-white cursor-pointer transition-all hover:bg-slate-50">
<summary className="flex justify-between items-center font-bold text-slate-900 list-none">
                                    Fournissez-vous les chevilles et vis ?
                                    <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<p className="mt-3 text-sm text-slate-600 leading-relaxed">
                                    Oui, nos taskeurs disposent généralement d'un kit de base. Cependant, pour des murs spécifiques (placo, béton cellulaire), il est préférable de le préciser lors de la commande pour qu'ils apportent le matériel adapté.
                                </p>
</details>
<details className="group p-4 rounded-xl border border-slate-200 bg-white cursor-pointer transition-all hover:bg-slate-50">
<summary className="flex justify-between items-center font-bold text-slate-900 list-none">
                                    Combien de temps faut-il pour une étagère ?
                                    <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<p className="mt-3 text-sm text-slate-600 leading-relaxed">
                                    Comptez environ 30 à 45 minutes par étagère murale simple, incluant la mise à niveau et la fixation. Pour un meuble type bibliothèque Billy, prévoyez environ 1 heure.
                                </p>
</details>
<details className="group p-4 rounded-xl border border-slate-200 bg-white cursor-pointer transition-all hover:bg-slate-50">
<summary className="flex justify-between items-center font-bold text-slate-900 list-none">
                                    Le service est-il assuré ?
                                    <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<p className="mt-3 text-sm text-slate-600 leading-relaxed">
                                    Absolument. Toutes nos interventions sont couvertes par une assurance responsabilité civile professionnelle pour votre tranquillité.
                                </p>
</details>
</div>
</section>
</div>
</main>
{/*  Footer  */}
<footer className="bg-white border-t border-slate-200 py-10 px-4 md:px-10">
<div className="mx-auto max-w-[1280px] grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 text-primary mb-4">
<span className="material-symbols-outlined">shelves</span>
<span className="font-bold text-xl text-slate-900">ShelfMaster</span>
</div>
<p className="text-sm text-slate-500">Solution nÂ°1 pour le montage et la fixation de vos rangements à domicile.</p>
</div>
<div>
<h5 className="font-bold mb-4 text-slate-900">Services</h5>
<ul className="text-sm space-y-2 text-slate-500">
<li><a className="hover:text-primary" href="#">Montage IKEA</a></li>
<li><a className="hover:text-primary" href="#">Ã‰tagères Murales</a></li>
<li><a className="hover:text-primary" href="#">Dressings</a></li>
<li><a className="hover:text-primary" href="#">Cuisine</a></li>
</ul>
</div>
<div>
<h5 className="font-bold mb-4 text-slate-900">Aide</h5>
<ul className="text-sm space-y-2 text-slate-500">
<li><a className="hover:text-primary" href="#">Contact</a></li>
<li><a className="hover:text-primary" href="#">FAQ</a></li>
<li><a className="hover:text-primary" href="#">Tarifs</a></li>
</ul>
</div>
<div>
<h5 className="font-bold mb-4 text-slate-900">Légal</h5>
<ul className="text-sm space-y-2 text-slate-500">
<li><a className="hover:text-primary" href="#">CGU</a></li>
<li><a className="hover:text-primary" href="#">Confidentialité</a></li>
<li><a className="hover:text-primary" href="#">Mentions légales</a></li>
</ul>
</div>
</div>
<div className="mx-auto max-w-[1280px] mt-10 pt-8 border-t border-slate-100 text-center text-xs text-slate-400">
                    Â© 2024 ShelfMaster Services. Tous droits réservés.
                </div>
</footer>
</div>
</div>

    </>
  );
};

export default MontageDetageres;

