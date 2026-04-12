import React from 'react';

const ServiceMenage = () => {
  return (
    <>
      
<div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
{/*  Navigation  */}
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/10 px-6 md:px-20 py-4 bg-white dark:bg-slate-900">
<div className="flex items-center gap-4 text-primary">
<div className="size-8">
<span className="material-symbols-outlined text-3xl">cleaning_services</span>
</div>
<h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight">Ménage</h2>
</div>
<div className="flex flex-1 justify-end gap-8 items-center">
<nav className="hidden lg:flex items-center gap-8">
<a className="text-slate-700 dark:text-slate-200 text-sm font-medium hover:text-primary transition-colors" href="#">Accueil</a>
<a className="text-primary text-sm font-bold" href="#">Services</a>
<a className="text-slate-700 dark:text-slate-200 text-sm font-medium hover:text-primary transition-colors" href="#">Réalisations</a>
<a className="text-slate-700 dark:text-slate-200 text-sm font-medium hover:text-primary transition-colors" href="#">Blog</a>
<a className="text-slate-700 dark:text-slate-200 text-sm font-medium hover:text-primary transition-colors" href="#">Contact</a>
</nav>
<div className="flex items-center gap-3">
<button className="flex items-center justify-center rounded-lg h-10 w-10 bg-primary/10 text-primary hover:bg-primary/20 transition-all">
<span className="material-symbols-outlined text-xl">notifications</span>
</button>
<button className="flex min-w-[100px] items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold hover:bg-primary-dark transition-all">
<span>Connexion</span>
</button>
</div>
</div>
</header>
<main className="flex-1">
{/*  Hero Section  */}
<div className="px-6 md:px-20 py-8">
<div className="relative overflow-hidden rounded-xl bg-slate-800 min-h-[400px] flex flex-col justify-end p-8 md:p-12 shadow-2xl">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover opacity-60" data-alt="Modern clean living room with bright light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9l34xvdXnynt-Sy0kEd-l2HvlbRUHxzKGxq3OfGtVlImiV-fW3Fl7lEBQjGuOA-yRu_mIZwUcDvBd3LWbhT6o_0GwVWihOMLLuKhprfyhLPqGVY26GCrekTTgFkDQdLBlsEKqrNtYzGsksBHGmoIACBfJYslvL1o9cSfKuGOoHR7NooSQih2sKZFiQiKUdHkCH9EOlxCBjZV8qFIA8E82IE-Qu_dTGBpokcy9crNMGRnjPV2K5Y1h7YL_mcjOKBos8OjOUtwgXzLe"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
</div>
<div className="relative z-10 max-w-2xl">
<h1 className="text-white text-4xl md:text-6xl font-black leading-tight mb-4">
                                Services de Ménage à Domicile
                            </h1>
<p className="text-slate-200 text-lg md:text-xl font-normal mb-8 max-w-lg">
                                Des solutions professionnelles pour un intérieur impeccable, sain et serein au quotidien.
                            </p>
<button className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-primary/50">
                                En savoir plus
                            </button>
</div>
</div>
</div>
<div className="px-6 md:px-20 py-8 flex flex-col lg:flex-row gap-8">
{/*  Sidebar: Quote Request  */}
<aside className="w-full lg:w-1/3 order-2 lg:order-1">
<div className="sticky top-8 flex flex-col gap-6">
<div className="rounded-xl border border-primary/20 bg-white dark:bg-slate-800 p-8 shadow-sm">
<span className="material-symbols-outlined text-primary text-4xl mb-4">request_quote</span>
<h3 className="text-slate-900 dark:text-white text-xl font-bold mb-2">Besoin d'un devis gratuit?</h3>
<p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                    Obtenez une estimation personnalisée en moins de 2 minutes pour vos besoins spécifiques.
                                </p>
<button className="w-full flex items-center justify-center rounded-lg h-12 px-6 bg-primary text-white font-bold hover:bg-primary-dark transition-all shadow-md">
                                    Demander mon devis
                                </button>
</div>
{/*  Why Choose Us Mini Card  */}
<div className="rounded-xl bg-primary/5 border border-primary/10 p-8">
<h3 className="text-slate-900 dark:text-white text-lg font-bold mb-4">Pourquoi nous choisir ?</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
<span className="text-slate-600 dark:text-slate-400 text-sm">Personnel qualifié et vérifié</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
<span className="text-slate-600 dark:text-slate-400 text-sm">Produits éco-responsables</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
<span className="text-slate-600 dark:text-slate-400 text-sm">Sans engagement de durée</span>
</li>
</ul>
</div>
</div>
</aside>
{/*  Main Content Area  */}
<div className="w-full lg:w-2/3 order-1 lg:order-2 space-y-12">
{/*  Statistics  */}
<section className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="flex flex-col gap-2 rounded-xl p-8 border border-primary/10 bg-white dark:bg-slate-800 shadow-sm text-center">
<p className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">Maisons nettoyées</p>
<p className="text-primary text-4xl font-black">8000+</p>
</div>
<div className="flex flex-col gap-2 rounded-xl p-8 border border-primary/10 bg-white dark:bg-slate-800 shadow-sm text-center">
<p className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">Satisfaction</p>
<p className="text-primary text-4xl font-black">97%</p>
</div>
<div className="flex flex-col gap-2 rounded-xl p-8 border border-primary/10 bg-white dark:bg-slate-800 shadow-sm text-center">
<p className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">Assurance</p>
<p className="text-primary text-4xl font-black">Incluse</p>
</div>
</section>
{/*  Our Services  */}
<section>
<div className="flex items-center justify-between mb-8">
<h2 className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight">Nos Services</h2>
<a className="text-primary font-semibold hover:underline flex items-center gap-1" href="#">
                                    Voir tout <span className="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="group p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary transition-all">
<div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
<span className="material-symbols-outlined text-2xl">home_work</span>
</div>
<h4 className="text-slate-900 dark:text-white text-xl font-bold mb-2">Ménage régulier</h4>
<p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Entretien hebdomadaire ou bimensuel pour garder votre foyer toujours propre.</p>
</div>
<div className="group p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary transition-all">
<div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
<span className="material-symbols-outlined text-2xl">mop</span>
</div>
<h4 className="text-slate-900 dark:text-white text-xl font-bold mb-2">Nettoyage profond</h4>
<p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Un grand nettoyage de printemps pour désinfecter et assainir chaque recoin.</p>
</div>
<div className="group p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary transition-all">
<div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
<span className="material-symbols-outlined text-2xl">window</span>
</div>
<h4 className="text-slate-900 dark:text-white text-xl font-bold mb-2">Vitres</h4>
<p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Lavage de vitres professionnel pour une transparence éclatante et sans traces.</p>
</div>
<div className="group p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary transition-all">
<div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
<span className="material-symbols-outlined text-2xl">iron</span>
</div>
<h4 className="text-slate-900 dark:text-white text-xl font-bold mb-2">Repassage</h4>
<p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Soin du linge et repassage soigné pour vous libérer de cette corvée quotidienne.</p>
</div>
</div>
</section>
{/*  Testimonials  */}
<section className="bg-primary/5 rounded-2xl p-8 md:p-12">
<h2 className="text-slate-900 dark:text-white text-3xl font-bold mb-8 text-center">Ce que nos clients disent</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm italic relative">
<span className="material-symbols-outlined text-primary/20 text-6xl absolute top-2 right-4">format_quote</span>
<p className="text-slate-700 dark:text-slate-300 mb-4 relative z-10">
                                        "Un service impeccable. Julie vient chaque mardi et c'est un bonheur de rentrer dans une maison qui sent le propre."
                                    </p>
<div className="flex items-center gap-3">
<div className="size-10 rounded-full bg-slate-200 overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Female portrait for testimonial" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhTs9Z7UglUyCxFXfbUUVOZIG5dD1WZEMq5ibTFEWqmdWmrilXX2xKiDE9v01pjBsN3ZAYpzEdk88mgMUyTzWVPrJpKcOCiad1XWt7vk0FjnlowHca-JK19CEaj3nudpYPU0-ZGXx3YjBfexoIHyg55ripmJDIhNfNBnqQ5LYLHR2WgpDeq3YpFGoMYenZV-DilinGDiTVqFVSD735Abuzdfj9YbVOMoLM_XJ8zLOOwohTi9F0YyQ8oxxSpMWb4-dO3zKe0k0R7_rA"/>
</div>
<div>
<p className="text-slate-900 dark:text-white text-sm font-bold">Marie Laurent</p>
<p className="text-slate-500 dark:text-slate-400 text-xs">Cliente depuis 2 ans</p>
</div>
</div>
</div>
<div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm italic relative">
<span className="material-symbols-outlined text-primary/20 text-6xl absolute top-2 right-4">format_quote</span>
<p className="text-slate-700 dark:text-slate-300 mb-4 relative z-10">
                                        "Très professionnel et ponctuel. Le service de nettoyage de vitres a transformé mon appartement. Je recommande vivement."
                                    </p>
<div className="flex items-center gap-3">
<div className="size-10 rounded-full bg-slate-200 overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Male portrait for testimonial" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCVoMzflylvl2S8hQ0asy8G11OFZDyDQRI5zxn19KXmeioDlaTdVPjt3x-uY62BnC5hMKsSI9ow95iV966j6TRN_jnYYpGMQ9MyGGGZVAdUiPKJt1Dq0W6Pgut-nckStlqjgUGQPbr3onimUDE0poc_jvolF4aTw3bR-q1Ds2749Veo8md9m9lT2JpvDty136o-dwqZRui3MpdhgrgRepyzJS8f4k0-1sMGIASDvIpiDS54xnhs8KB9z5NWJlIBztXwmQTvOhlv6lH"/>
</div>
<div>
<p className="text-slate-900 dark:text-white text-sm font-bold">Thomas Dubois</p>
<p className="text-slate-500 dark:text-slate-400 text-xs">Client ponctuel</p>
</div>
</div>
</div>
</div>
</section>
</div>
</div>
</main>
{/*  Footer  */}
<footer className="bg-slate-900 text-slate-400 px-6 md:px-20 py-12 mt-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-3 text-white mb-6">
<span className="material-symbols-outlined text-primary text-3xl">cleaning_services</span>
<span className="text-xl font-bold">Ménage</span>
</div>
<p className="text-sm leading-relaxed">
                            Votre partenaire de confiance pour un domicile sain. Services professionnels, écologiques et assurés.
                        </p>
</div>
<div>
<h4 className="text-white font-bold mb-6">Services</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-primary transition-colors" href="#">Nettoyage régulier</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Lavage de vitres</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Repassage</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Fin de bail</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold mb-6">Entreprise</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-primary transition-colors" href="#">�DA propos</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Nos tarifs</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Recrutement</a></li>
<li><a className="hover:text-primary transition-colors" href="#">FAQ</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold mb-6">Contact</h4>
<ul className="space-y-3 text-sm">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-sm">mail</span> contact@menage.fr
                            </li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-sm">phone</span> 01 23 45 67 89
                            </li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-sm">location_on</span> Paris, France
                            </li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs">
                    © 2024 Ménage Inc. Tous droits réservés.
                </div>
</footer>
</div>
</div>

    </>
  );
};

export default ServiceMenage;
