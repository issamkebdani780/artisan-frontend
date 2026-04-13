import React from 'react';

const JardinageNouveau = () => {
  return (
    <>
      
<div className="flex h-screen overflow-hidden">
{/*  SideNavBar  */}
<aside className="w-64 flex-shrink-0 border-r border-slate-200 bg-white hidden lg:flex flex-col">
<div className="p-6 flex flex-col h-full">
<div className="flex items-center gap-3 mb-8">
<div className="bg-primary/10 rounded-full p-2 text-primary">
<span className="material-symbols-outlined text-3xl">park</span>
</div>
<div className="flex flex-col">
<h1 className="text-slate-900 text-base font-bold leading-tight">Mon Jardin</h1>
<p className="text-slate-500 text-xs font-normal">Expertise Pro</p>
</div>
</div>
<nav className="flex flex-col gap-1 grow">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="text-sm font-medium">Tableau de bord</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors" href="#">
<span className="material-symbols-outlined">grid_view</span>
<span className="text-sm font-medium">Tous les services</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary" href="#">
<span className="material-symbols-outlined" >content_cut</span>
<span className="text-sm font-bold">Jardinage</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors" href="#">
<span className="material-symbols-outlined">calendar_today</span>
<span className="text-sm font-medium">Planning</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="text-sm font-medium">ParamÃ¨tres</span>
</a>
</nav>
<button className="mt-auto w-full bg-primary hover:bg-primary/90 text-white rounded-lg py-3 px-4 text-sm font-bold transition-all shadow-sm flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm">add_circle</span>
                RÃ©server un expert
            </button>
</div>
</aside>
{/*  Main Content Area  */}
<main className="flex-1 flex flex-col overflow-y-auto">
{/*  Header  */}
<header className="sticky top-0 z-30 flex items-center justify-between bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-4">
<div className="flex items-center gap-4 lg:hidden">
<span className="material-symbols-outlined">menu</span>
<span className="text-lg font-bold">Jardinage Pro</span>
</div>
<div className="hidden lg:flex items-center gap-8">
<nav className="flex items-center gap-6">
<a className="text-slate-900 text-sm font-semibold border-b-2 border-primary pb-1" href="#">Services</a>
<a className="text-slate-500 hover:text-primary text-sm font-medium transition-colors" href="#">Tarifs</a>
<a className="text-slate-500 hover:text-primary text-sm font-medium transition-colors" href="#">RÃ©alisations</a>
<a className="text-slate-500 hover:text-primary text-sm font-medium transition-colors" href="#">Aide</a>
</nav>
</div>
<div className="flex items-center gap-4 flex-1 justify-end">
<div className="relative max-w-xs w-full hidden sm:block">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
<input className="w-full pl-10 pr-4 py-2 rounded-lg bg-slate-100 border-none focus:ring-2 focus:ring-primary text-sm" placeholder="Rechercher..." type="text"/>
</div>
<div className="flex items-center gap-2">
<button className="p-2 rounded-lg bg-slate-100 text-slate-600 relative">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
</button>
<div className="h-8 w-8 rounded-full bg-primary/20 border-2 border-primary/40 overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover" data-alt="Photo de profil utilisateur" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQFIocqufE70P3ht5pe1Y-QQGHom2KGd22wDafSetgCqLNVci3RAXOv2_1al04fjCRjtXmlR20pkLoACA6fqHCUs9Wgc_UWbCILtkMxnyYWO8rsOm5wxRR_tl1F2BK6wG9IFJU16DFK4SFn0bnfl0huce0f2vc8_r6WJcGB44kObPnVy3J_vGyr-lXvEkhp6A2iif7VIsnHqRbyiTj1dJ_7SVfx3UGhsayxqAUXEKrpHpr6u98aPZ-KW3D0f5RzDKssUQ03HibUF9Y"/>
</div>
</div>
</div>
</header>
{/*  Sub-service Content  */}
<div className="flex-1 p-6 lg:p-10">
{/*  Hero Section  */}
<section className="relative rounded-2xl overflow-hidden mb-12 min-h-[400px] flex flex-col justify-end p-8 lg:p-16">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10"></div>
<img alt="Hero background" className="absolute inset-0 w-full h-full object-cover" data-alt="Beau jardin entretenu avec pelouse verte et fleurs" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF5es-Z9F-7CRPnmfhf_gZjmf94MY6VkhNVldRSggvsQ-3n5mNfJwa5rdnbZEvxf3zHBgZQjciO1VgYsvb_yqdBFyA2FjumdbvIGwb6LfFikNRPPV8R15DdufwNupzwx4GQ-JYxkaB0EpTxL4l018LnMNksFZBm6MGJmUxYhnRHIOtFqzkZOR0dwC7WvW-mUYKJjmYKaKICU0HYmeyZPZphMXf1ONq4aoMkTPAcu1D-2TwHRnh8pkDr6TMdszgNzKaJw897VzcVgiW"/>
<div className="relative z-20 max-w-2xl">
<h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">Donnez vie Ã  vos espaces extÃ©rieurs</h2>
<p className="text-slate-200 text-lg mb-8 leading-relaxed">
                        Que ce soit pour un entretien rÃ©gulier ou une transformation complÃ¨te, nos experts paysagistes s'occupent de tout pour faire rayonner votre jardin.
                    </p>
<div className="flex flex-wrap gap-4">
<button className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-primary/90 transition-all flex items-center gap-2">
                            Demander un devis gratuit
                            <span className="material-symbols-outlined">arrow_forward</span>
</button>
<button className="bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-3 rounded-xl font-bold hover:bg-white/30 transition-all">
                            Voir nos tarifs
                        </button>
</div>
</div>
</section>
{/*  Service Options  */}
<section className="mb-16">
<div className="mb-10 text-center max-w-2xl mx-auto">
<h3 className="text-3xl font-bold mb-4">Nos solutions sur mesure</h3>
<p className="text-slate-500">Une gamme complÃ¨te de services pour rÃ©pondre Ã  tous les besoins de votre jardin, quelle que soit la saison.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-primary transition-all shadow-sm">
<div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-4xl">energy_savings_leaf</span>
</div>
<h4 className="text-xl font-bold mb-3">Entretien Courant</h4>
<p className="text-slate-500 mb-6 text-sm leading-relaxed">Tonte de pelouse, dÃ©sherbage des massifs, nettoyage des allÃ©es et Ã©vacuation des dÃ©chets verts.</p>
<a className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all" href="#">
                            En savoir plus <span className="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
<div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-primary transition-all shadow-sm">
<div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-4xl">content_cut</span>
</div>
<h4 className="text-xl font-bold mb-3">Taille &amp; Ã‰lague</h4>
<p className="text-slate-500 mb-6 text-sm leading-relaxed">Taille de haies, d'arbustes dÃ©coratifs, d'arbres fruitiers et Ã©lagage sÃ©curisÃ© pour la santÃ© de vos plantes.</p>
<a className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all" href="#">
                            En savoir plus <span className="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
<div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-primary transition-all shadow-sm">
<div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-4xl">landscape</span>
</div>
<h4 className="text-xl font-bold mb-3">Paysagisme</h4>
<p className="text-slate-500 mb-6 text-sm leading-relaxed">CrÃ©ation de nouveaux espaces, plantation, pose de gazon en rouleau et amÃ©nagement de terrasses.</p>
<a className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all" href="#">
                            En savoir plus <span className="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
</div>
</section>
{/*  Pricing Section  */}
<section className="mb-16 bg-slate-100 -mx-6 lg:-mx-10 px-6 lg:px-10 py-16">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
<div className="max-w-lg">
<h3 className="text-3xl font-bold mb-4">Des tarifs transparents</h3>
<p className="text-slate-500">Choisissez la formule qui convient le mieux Ã  vos besoins et Ã  votre budget.</p>
</div>
<div className="flex bg-white p-1 rounded-lg border border-slate-200">
<button className="px-4 py-2 rounded-md bg-primary text-white text-sm font-bold">Ponctuel</button>
<button className="px-4 py-2 rounded-md text-slate-500 text-sm font-medium">Abonnement</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{/*  Pack 1  */}
<div className="bg-white rounded-2xl p-8 border border-slate-200 flex flex-col">
<span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Essentiel</span>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-black">45â‚¬</span>
<span className="text-slate-500 text-sm">/heure</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm">
<span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                    Tonte de pelouse (-100mÂ²)
                                </li>
<li className="flex items-center gap-3 text-sm text-slate-400 line-through">
<span className="material-symbols-outlined text-slate-300 text-xl">cancel</span>
                                    Taille de haies complexes
                                </li>
<li className="flex items-center gap-3 text-sm">
<span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                    DÃ©sherbage manuel
                                </li>
</ul>
<button className="w-full py-3 border border-primary text-primary font-bold rounded-xl hover:bg-primary/5 transition-colors">Choisir ce pack</button>
</div>
{/*  Pack 2  */}
<div className="bg-white rounded-2xl p-8 border-2 border-primary relative flex flex-col shadow-xl">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold py-1 px-4 rounded-full uppercase tracking-widest">Le plus populaire</div>
<span className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Complet</span>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-black">120â‚¬</span>
<span className="text-slate-500 text-sm">/forfait</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm">
<span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                    Entretien pelouse &amp; massifs
                                </li>
<li className="flex items-center gap-3 text-sm">
<span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                    Taille de haies jusqu'Ã  2m
                                </li>
<li className="flex items-center gap-3 text-sm">
<span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                    Ã‰vacuation des dÃ©chets
                                </li>
</ul>
<button className="w-full py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-colors shadow-lg">Choisir ce pack</button>
</div>
{/*  Pack 3  */}
<div className="bg-white rounded-2xl p-8 border border-slate-200 flex flex-col">
<span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Expert</span>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-black">Sur devis</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm">
<span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                    Design paysager complet
                                </li>
<li className="flex items-center gap-3 text-sm">
<span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                    Ã‰lagage grands arbres
                                </li>
<li className="flex items-center gap-3 text-sm">
<span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                    SystÃ¨mes d'arrosage auto
                                </li>
</ul>
<button className="w-full py-3 border border-slate-300 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-colors">Demander un devis</button>
</div>
</div>
</div>
</section>
{/*  Experts Nearby  */}
<section className="mb-16">
<div className="flex items-center justify-between mb-8">
<h3 className="text-2xl font-bold">Experts Ã  proximitÃ© de chez vous</h3>
<a className="text-primary font-semibold text-sm hover:underline" href="#">Voir tout (24)</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-white rounded-xl overflow-hidden border border-slate-200 p-4 flex flex-col items-center text-center group">
<div className="w-20 h-20 rounded-full mb-4 ring-2 ring-primary/20 p-1">
<img alt="Expert" className="w-full h-full object-cover rounded-full" data-alt="Portrait d'un jardinier professionnel souriant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0qoo0pwlOyBl5kP2lEOVbLvo3nsgkKefes-q_5y0YDAJwAfoFQn0KFBUHzUQXjy9K6KX17Y9SSuqn6FvyyXgbkPNLX4p0UiFt-78wPznT9e5AJPEVxTsBH-sbKtC2dNIR2WZoY_WdlcOyE6fM7J394T5IUyHA2lE1AL7CC9PR1Lw2a3r7NxO8aGhpOtny9my0MO0Q_E1tQtZxv8hN6O79LpFP89gsjvo8OHmAU0NlXmHH0OXn1Zf3-EcWsK1Y_PRvrmqZ-V_6IXQT"/>
</div>
<h5 className="font-bold text-slate-900">Julien Morel</h5>
<p className="text-xs text-slate-500 mb-2">Paysagiste DiplÃ´mÃ©</p>
<div className="flex items-center gap-1 mb-4">
<span className="material-symbols-outlined text-yellow-500 text-sm">star</span>
<span className="text-xs font-bold">4.9</span>
<span className="text-xs text-slate-400">(42 avis)</span>
</div>
<button className="w-full py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-bold group-hover:bg-primary group-hover:text-white transition-all">Consulter</button>
</div>
<div className="bg-white rounded-xl overflow-hidden border border-slate-200 p-4 flex flex-col items-center text-center group">
<div className="w-20 h-20 rounded-full mb-4 ring-2 ring-primary/20 p-1">
<img alt="Expert" className="w-full h-full object-cover rounded-full" data-alt="Portrait d'une jardiniÃ¨re professionnelle experte" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCX-LEx1Z2aDbeYGjJJ0PXld6XYOyVb25xhfnU7xLIOpHvKT_GkHZjFYuDPaWas_JypIEXlVsXd0M94blp_-6LG7OwgJzir0M9eXdYQHiWTdeT7RaRxBkCXCavdqivPgmjcweSMc1zrqMO8lK5RpfoLHZxmclyeVHQnnMcllVCuOGVD7kgxzbWudOyfuvGplX5hhu06eJue-b5VzHXFvcBHtT02n-Y8bhbiZlXPMCAUuqsBb6GcO9Wbg2AqNKLqLPkfarVZ9XDii5IX"/>
</div>
<h5 className="font-bold text-slate-900">Sarah Lefebvre</h5>
<p className="text-xs text-slate-500 mb-2">SpÃ©cialiste Taille &amp; Haies</p>
<div className="flex items-center gap-1 mb-4">
<span className="material-symbols-outlined text-yellow-500 text-sm">star</span>
<span className="text-xs font-bold">4.8</span>
<span className="text-xs text-slate-400">(35 avis)</span>
</div>
<button className="w-full py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-bold group-hover:bg-primary group-hover:text-white transition-all">Consulter</button>
</div>
<div className="bg-white rounded-xl overflow-hidden border border-slate-200 p-4 flex flex-col items-center text-center group">
<div className="w-20 h-20 rounded-full mb-4 ring-2 ring-primary/20 p-1">
<img alt="Expert" className="w-full h-full object-cover rounded-full" data-alt="Portrait d'un Ã©lagueur professionnel" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmUhJexNRy8ajaSZDLvkl42XV18scRhtaNBcpGi57RQK4bOh1rEIniUwmKF-Te9qlO75fANrYVyvMhQH-REF9zfNhxe4kz_LcgcuN3wmUnLONhEkQLfLF8Ue71tvL8PjE7G-i3eVhcwYnO0iCYEEX1yg-HGym8hWei2zBdm8jTwiby2G2AX47ud8R_VRVO4g6W3kQO742YCLf31CkHdBKGJwo0vIvbly32z2L1SoRIDmLYBFdEiMUw-okJV1AMk_CnfAYF2XHbpfi1"/>
</div>
<h5 className="font-bold text-slate-900">Marc Dubois</h5>
<p className="text-xs text-slate-500 mb-2">Ã‰lagueur CertifiÃ©</p>
<div className="flex items-center gap-1 mb-4">
<span className="material-symbols-outlined text-yellow-500 text-sm">star</span>
<span className="text-xs font-bold">5.0</span>
<span className="text-xs text-slate-400">(21 avis)</span>
</div>
<button className="w-full py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-bold group-hover:bg-primary group-hover:text-white transition-all">Consulter</button>
</div>
<div className="bg-white rounded-xl overflow-hidden border border-slate-200 p-4 flex flex-col items-center text-center group">
<div className="w-20 h-20 rounded-full mb-4 ring-2 ring-primary/20 p-1">
<img alt="Expert" className="w-full h-full object-cover rounded-full" data-alt="Portrait d'une architecte paysagiste" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_x9qc2tjzhTKl9XzPz3sinQ1rORzHXlDpH5BASu-22c0iVN1s8Yz03ESct2XW1dSZ6qsGucyMi8vWlLJVOW4SUnsxhKYn_jhiwD9Q4hUsv9-dODPXrWigTbiRC2cZCK5KTo1MkXoMBLLE0RI1BL_EeOIQIjAn0dg2PSUzsFp_1fOQ_RYaNV6trI-q0UlhrQ9tTVDy1AkUBqCA4bZSA2EZt4iZmhSLjUdrfLo4QDQmvdeJydeyGG9YA8zHPOfmn6sWsio7qrcF0gx5"/>
</div>
<h5 className="font-bold text-slate-900">AmÃ©lie Petit</h5>
<p className="text-xs text-slate-500 mb-2">Architecte ExtÃ©rieur</p>
<div className="flex items-center gap-1 mb-4">
<span className="material-symbols-outlined text-yellow-500 text-sm">star</span>
<span className="text-xs font-bold">4.7</span>
<span className="text-xs text-slate-400">(18 avis)</span>
</div>
<button className="w-full py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-bold group-hover:bg-primary group-hover:text-white transition-all">Consulter</button>
</div>
</div>
</section>
{/*  FAQ Section  */}
<section className="max-w-3xl mx-auto mb-16">
<h3 className="text-2xl font-bold mb-8 text-center">Questions frÃ©quentes</h3>
<div className="space-y-4">
<div className="bg-white border border-slate-200 rounded-xl p-6">
<div className="flex items-center justify-between cursor-pointer">
<h6 className="font-bold text-slate-900">Intervenez-vous en cas de pluie ?</h6>
<span className="material-symbols-outlined text-slate-400">expand_more</span>
</div>
<p className="mt-4 text-sm text-slate-500 leading-relaxed">
                            Pour des raisons de sÃ©curitÃ© et pour ne pas dÃ©grader votre terrain, nous reportons les interventions en cas de fortes pluies. Une nouvelle date est fixÃ©e sans frais supplÃ©mentaires.
                        </p>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-6">
<div className="flex items-center justify-between cursor-pointer">
<h6 className="font-bold text-slate-900">Proposez-vous le crÃ©dit d'impÃ´t ?</h6>
<span className="material-symbols-outlined text-slate-400">expand_more</span>
</div>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-6">
<div className="flex items-center justify-between cursor-pointer">
<h6 className="font-bold text-slate-900">Faut-il Ãªtre prÃ©sent lors de l'intervention ?</h6>
<span className="material-symbols-outlined text-slate-400">expand_more</span>
</div>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-6">
<div className="flex items-center justify-between cursor-pointer">
<h6 className="font-bold text-slate-900">Ã‰vacuez-vous les dÃ©chets verts ?</h6>
<span className="material-symbols-outlined text-slate-400">expand_more</span>
</div>
</div>
</div>
</section>
</div>
{/*  Footer  */}
<footer className="bg-white border-t border-slate-200 px-6 py-10">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-3">
<div className="bg-primary/10 rounded-full p-2 text-primary">
<span className="material-symbols-outlined text-2xl">park</span>
</div>
<span className="text-xl font-bold">Mon Jardin Pro</span>
</div>
<div className="flex gap-8 text-sm text-slate-500">
<a className="hover:text-primary transition-colors" href="#">Politique de confidentialitÃ©</a>
<a className="hover:text-primary transition-colors" href="#">CGV</a>
<a className="hover:text-primary transition-colors" href="#">Contact</a>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:text-primary cursor-pointer transition-all">
<span className="material-symbols-outlined text-xl">share</span>
</div>
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:text-primary cursor-pointer transition-all">
<span className="material-symbols-outlined text-xl">mail</span>
</div>
</div>
</div>
<div className="mt-8 text-center text-slate-400 text-xs">
                Â© 2024 Mon Jardin Service Professionnel. Tous droits rÃ©servÃ©s.
            </div>
</footer>
</main>
</div>

    </>
  );
};

export default JardinageNouveau;

