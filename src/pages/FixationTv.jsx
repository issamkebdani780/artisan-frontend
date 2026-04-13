import React from 'react';

const FixationTv = () => {
  return (
    <>
      
<div className="layout-container flex h-full grow flex-col">
{/*  Header  */}
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/10 bg-white px-6 md:px-10 py-3 sticky top-0 z-50">
<div className="flex items-center gap-4 text-primary">
<div className="size-8 flex items-center justify-center bg-primary/10 rounded-lg">
<span className="material-symbols-outlined text-primary text-2xl">tv</span>
</div>
<h2 className="text-slate-900 text-lg font-bold leading-tight tracking-[-0.015em]">Fixation TV Pro</h2>
</div>
<div className="flex flex-1 justify-end gap-8 items-center">
<nav className="hidden md:flex items-center gap-9">
<a className="text-slate-700 text-sm font-medium hover:text-primary transition-colors" href="#">Accueil</a>
<a className="text-primary text-sm font-bold border-b-2 border-primary" href="#">Services</a>
</nav>
<div className="flex gap-2">
<button className="flex items-center justify-center rounded-lg h-10 w-10 bg-primary/10 text-primary transition-all hover:bg-primary/20">
<span className="material-symbols-outlined text-[20px]">notifications</span>
</button>
<button className="flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold tracking-[0.015em] hover:bg-primary/90 transition-all shadow-sm">
                        Connexion
                    </button>
</div>
</div>
</header>
<main className="flex-1 max-w-[1280px] mx-auto w-full px-4 md:px-10 py-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
{/*  Sidebar (Desktop Left)  */}
<aside className="lg:col-span-3 order-2 lg:order-1 flex flex-col gap-6">
<div className="bg-white p-6 rounded-xl shadow-sm border border-primary/10">
<div className="flex items-center gap-3 mb-4">
<div className="bg-primary/10 p-2 rounded-full">
<span className="material-symbols-outlined text-primary">description</span>
</div>
<div>
<h3 className="font-bold text-slate-900 text-base">Devis Rapide</h3>
<p className="text-xs text-slate-500">Réponse sous 24h</p>
</div>
</div>
<p className="text-sm text-slate-600 mb-6 leading-relaxed">
                            Besoin d'un devis gratuit pour votre installation TV ? Nos experts vous répondent immédiatement.
                        </p>
<button className="w-full py-3 bg-primary text-white rounded-lg font-bold text-sm flex items-center justify-center gap-2 hover:bg-primary/90 transition-all">
<span className="material-symbols-outlined text-sm">send</span>
                            Commencer
                        </button>
</div>
<div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
<h4 className="font-bold text-slate-900 text-sm mb-3">Besoin d'aide ?</h4>
<div className="flex items-center gap-3 text-sm text-slate-600">
<span className="material-symbols-outlined text-primary">call</span>
<span>01 23 45 67 89</span>
</div>
</div>
</aside>
{/*  Content Area  */}
<div className="lg:col-span-9 order-1 lg:order-2 flex flex-col gap-8">
{/*  Hero Section  */}
<section className="relative overflow-hidden rounded-xl h-[300px] md:h-[400px] group">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="Modern living room with a large TV mounted on the wall" style='background-image: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0,0,0,0.2)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDZOKSjxExCusf1ZM_ugvP6HtWUTWSCRSNqfDIGvhsqcDJja4aNaw6_hjL8RhpS84nzs1xhHODubhOz8SlJIkxLDm84JnsN9LGcy-nDNFC_I3OP-gKbwVgMp3lLK0cp8-erUJVuTMvZH69ilrWQB_Ong5oA-YpJLxCocefRbhgbQmm7MKR1qFwsM-tJJ8RVZPIDhNhMDb3nwk7Xy_CbtzDQy1AsiTpzyb1IMQLwTNXiKN8yttbHw9PuS75hWJX_39LCKWfRbZoqD59_");'>
</div>
<div className="relative h-full flex flex-col justify-center p-8 md:p-12 text-white">
<span className="bg-primary px-3 py-1 rounded text-xs font-bold uppercase tracking-wider mb-4 w-fit">Installation Pro</span>
<h1 className="text-3xl md:text-5xl font-extrabold leading-tight max-w-lg">
                                Service de Fixation TV Professionnel
                            </h1>
<p className="mt-4 text-slate-200 max-w-md hidden md:block">
                                Sécurisez votre équipement avec une installation sur mesure, propre et garantie.
                            </p>
</div>
</section>
{/*  Why Choose Us  */}
<section>
<h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">verified_user</span>
                            Pourquoi nous choisir ?
                        </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="bg-white p-5 rounded-xl border border-primary/5 shadow-sm">
<span className="material-symbols-outlined text-primary text-3xl mb-3">shield</span>
<h3 className="font-bold text-slate-900 mb-2">Sécurité Garantie</h3>
<p className="text-sm text-slate-600">Support robuste certifié pour tous types de murs et poids d'écrans.</p>
</div>
<div className="bg-white p-5 rounded-xl border border-primary/5 shadow-sm">
<span className="material-symbols-outlined text-primary text-3xl mb-3">cable</span>
<h3 className="font-bold text-slate-900 mb-2">Installation Propre</h3>
<p className="text-sm text-slate-600">Câbles dissimulés et finitions soignées pour un salon épuré.</p>
</div>
<div className="bg-white p-5 rounded-xl border border-primary/5 shadow-sm">
<span className="material-symbols-outlined text-primary text-3xl mb-3">straighten</span>
<h3 className="font-bold text-slate-900 mb-2">Niveau Parfait</h3>
<p className="text-sm text-slate-600">Alignement au laser millimétré pour un confort visuel optimal.</p>
</div>
</div>
</section>
{/*  Service Details  */}
<section className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 md:p-8 rounded-xl border border-primary/10 shadow-sm">
<div className="flex flex-col gap-6">
<h2 className="text-2xl font-bold text-slate-900">Détails de l'intervention</h2>
<div className="flex flex-col gap-4">
<div className="flex gap-4">
<div className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center shrink-0">1</div>
<div>
<h4 className="font-bold text-sm">Conseil sur le support (VESA)</h4>
<p className="text-sm text-slate-600">Nous vous aidons à choisir entre fixe, inclinable ou articulé.</p>
</div>
</div>
<div className="flex gap-4">
<div className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center shrink-0">2</div>
<div>
<h4 className="font-bold text-sm">Perçage de précision</h4>
<p className="text-sm text-slate-600">Adapté à la nature de votre mur (placo, brique, béton).</p>
</div>
</div>
<div className="flex gap-4">
<div className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center shrink-0">3</div>
<div>
<h4 className="font-bold text-sm">Mise en service</h4>
<p className="text-sm text-slate-600">Branchement des périphériques et test de fonctionnement.</p>
</div>
</div>
</div>
</div>
<div className="rounded-lg overflow-hidden h-full min-h-[250px] relative">
<img alt="Professional tools for TV installation" className="w-full h-full object-cover" data-alt="Technician tools and level placed near a TV screen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3T2KD07ZsIMZ8pbsyzc_ZD2fvD5DVJ-p0dhEV8i2_tg_QF_5URwTl2BbICbshh3O6t4W_BuYsUaxpxR7iKR_wqC8yciLYS1ngcE0LFc_J7-eZ9eXgh7bN7J-mPuDxFdSmd_mIXkWZLRC8CG7LDjYHoQxjbJ36-RAP3pWSk41tLekd8lUimjphVPUgN6nSwhHQo1inPU3ph9uZytuBQWJNb8C3BCrb7yLa4AJFZ-shSR2btgLNEXKzNMWkAVVE1a-fOBsgbio1pE3W"/>
</div>
</section>
{/*  Our Experts  */}
<section>
<h2 className="text-2xl font-bold text-slate-900 mb-6">Nos Experts Installateurs</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
<img alt="Expert face" className="size-16 rounded-full object-cover" data-alt="Portrait of a smiling professional technician" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJ-C0PiqZ1HXcRT33nNeLlHikTs5msiLuGdR_czU0GeHStbUGtUZXyXVZNIcGOKSFu4gp3mewaHfk9qKos5nW8Uawv1ogsmN6dVudQ12jfXxLiCTVXSitlUO5R4xXIpWnorRCl16Vab7cMdCzE8C0p5Ym1nwJiIMk56Kn0uSJn4ohS0SDvQiUH7_-Fy0W9hrlPl4D-h2yYZTI8tb23u1hH1KeIfgElHuVEhaYmamlyUFbr7MO291w54nLGdLf1nrr0wYfzGMlPJQaF"/>
<div>
<p className="font-bold text-slate-900">Marc L.</p>
<p className="text-xs text-primary font-medium">Expert Fixation Murales</p>
<p className="text-xs text-slate-500 mt-1">12 ans d'expérience</p>
</div>
</div>
<div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
<img alt="Expert face" className="size-16 rounded-full object-cover" data-alt="Portrait of a professional service woman" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2h3eFXf0XXRZerBOYxF6oNJK0yp4orKmRrkuhqMSIwKrNEzRlVkcsxHQwA5F4dLG7jrD2PAk03H6dhRef-fIiF2lc-hwM0gab59YkzOqxJ52hhfjz5Ceu7pjoE09rf5ORaLH8WdQGULZCCfwDy2PXCioUmIa_Bew07Twx3O6n2nHoOToiZ5rvqFMUqvotOOnqJLAjfUmQsNRM1ljqWzhF3FQMRTBh6cFJrYY1wr084uEc5jsIxs8VGXOX3i_XXnxCTY3_GMPMVgA_"/>
<div>
<p className="font-bold text-slate-900">Sarah B.</p>
<p className="text-xs text-primary font-medium">Spécialiste Home Cinéma</p>
<p className="text-xs text-slate-500 mt-1">8 ans d'expérience</p>
</div>
</div>
</div>
</section>
{/*  FAQ  */}
<section>
<h2 className="text-2xl font-bold text-slate-900 mb-6">Questions Fréquentes</h2>
<div className="flex flex-col gap-3">
<details className="group bg-white rounded-xl border border-primary/10 transition-all">
<summary className="flex justify-between items-center p-5 cursor-pointer font-bold text-sm list-none">
<span>Fournissez-vous le support mural ?</span>
<span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
</summary>
<div className="px-5 pb-5 text-sm text-slate-600">
                                    Oui, nous pouvons fournir une gamme complète de supports certifiés ou installer celui que vous avez déjà acheté.
                                </div>
</details>
<details className="group bg-white rounded-xl border border-primary/10 transition-all">
<summary className="flex justify-between items-center p-5 cursor-pointer font-bold text-sm list-none">
<span>Combien de temps dure une installation ?</span>
<span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
</summary>
<div className="px-5 pb-5 text-sm text-slate-600">
                                    Une installation standard dure entre 1h et 1h30, incluant le réglage et le nettoyage du chantier.
                                </div>
</details>
</div>
</section>
</div>
</div>
</main>
{/*  Footer  */}
<footer className="bg-white border-t border-primary/10 mt-12 py-12">
<div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-3 text-primary mb-4">
<span className="material-symbols-outlined">tv</span>
<h2 className="text-slate-900 text-xl font-bold">Fixation TV Pro</h2>
</div>
<p className="text-sm text-slate-500 max-w-sm">
                        L'expert de l'installation audiovisuelle à domicile. Sécurité, esthétique et professionnalisme au service de votre divertissement.
                    </p>
</div>
<div>
<h3 className="font-bold text-slate-900 mb-4">Liens Utiles</h3>
<ul className="flex flex-col gap-2 text-sm text-slate-500">
<li><a className="hover:text-primary transition-colors" href="#">Nos Tarifs</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Témoignages</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h3 className="font-bold text-slate-900 mb-4">Légal</h3>
<ul className="flex flex-col gap-2 text-sm text-slate-500">
<li><a className="hover:text-primary transition-colors" href="#">Mentions Légales</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Confidentialité</a></li>
<li><a className="hover:text-primary transition-colors" href="#">CGV</a></li>
</ul>
</div>
</div>
<div className="max-w-[1280px] mx-auto px-6 md:px-10 mt-12 pt-8 border-t border-primary/5 text-center text-xs text-slate-400">
                © 2024 Fixation TV Pro. Tous droits réservés.
            </div>
</footer>
</div>

    </>
  );
};

export default FixationTv;
