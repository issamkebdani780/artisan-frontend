import React from 'react';

const ServiceDetailsInstallationRobinetterie = () => {
  return (
    <>
      
{/*  Top Navigation  */}
<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center gap-2">
<div className="text-primary">
<span className="material-symbols-outlined text-3xl">plumbing</span>
</div>
<h1 className="text-xl font-bold tracking-tight">PlumbExpert</h1>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium hover:text-primary transition-colors" href="#">Services</a>
<a className="text-sm font-medium hover:text-primary transition-colors" href="#">Plombiers</a>
<a className="text-sm font-medium hover:text-primary transition-colors" href="#">Tarifs</a>
<a className="text-sm font-medium hover:text-primary transition-colors" href="#">FAQ</a>
</nav>
<div className="flex items-center gap-4">
<button className="hidden sm:flex bg-primary text-white px-5 py-2 rounded-lg font-bold text-sm hover:bg-primary/90 transition-all">
                        RÃ©server
                    </button>
<div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden border border-slate-300">
<img alt="Avatar utilisateur" data-alt="Portrait of a professional user profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCii50h8gtjsqSVeFQSjfKPh6-5Gjq4yupJssnXZw7CbTcv6AyxZmxdpPEu7pQF0OoE0SY7hRqb_ADtp6COxm8sdP67V2w5qbWu7Z76FTtD8KkyJ0a1KYSPC5fPfdH9vWOzyxOJqqDSlsPJrxmeBYb8_ZXoLkGL_ktO4h-twcg1EV7cI21hFbhJWhlWPsyEDxiGo9KjBgCkihtd1QwrxYC-bw0SYjfA2_PW2lwr1zKcaFaHAHEa9uHQWmYfWv12KW7baMqpNIk91hQK"/>
</div>
</div>
</div>
</div>
</header>
<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
{/*  Breadcrumbs  */}
<nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
<a className="hover:text-primary" href="#">Accueil</a>
<span className="material-symbols-outlined text-xs">chevron_right</span>
<a className="hover:text-primary" href="#">Services</a>
<span className="material-symbols-outlined text-xs">chevron_right</span>
<span className="text-slate-900 font-medium">Installation de Robinetterie</span>
</nav>
{/*  Hero Section  */}
<section className="grid lg:grid-cols-2 gap-12 items-center mb-16">
<div>
<span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-4">Service Premium</span>
<h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Installation professionnelle de robinets</h2>
<p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    Confiez la pose de vos mitigeurs, mÃ©langeurs et colonnes de douche Ã  nos experts certifiÃ©s. Nous assurons une installation Ã©tanche, durable et conforme aux normes en vigueur. Intervention en moins de 24h.
                </p>
<div className="flex flex-wrap gap-4">
<button className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
                        Demander un devis gratuit
                    </button>
<button className="flex items-center gap-2 border border-slate-300 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-colors">
<span className="material-symbols-outlined">call</span>
                        01 23 45 67 89
                    </button>
</div>
</div>
<div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl group">
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
<div className="absolute bottom-6 left-6 z-20">
<div className="flex items-center gap-2 mb-2">
<div className="flex text-yellow-400">
<span className="material-symbols-outlined fill-1">star</span>
<span className="material-symbols-outlined fill-1">star</span>
<span className="material-symbols-outlined fill-1">star</span>
<span className="material-symbols-outlined fill-1">star</span>
<span className="material-symbols-outlined fill-1">star</span>
</div>
<span className="text-white font-bold">4.9/5</span>
</div>
<p className="text-white/90 text-sm font-medium">Plus de 1,200 installations rÃ©ussies cette annÃ©e</p>
</div>
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" data-alt="Close-up of a modern chrome kitchen faucet being installed" ></div>
</div>
</section>
{/*  Pricing Section  */}
<section className="mb-16">
<h3 className="text-2xl font-bold mb-8">Nos Tarifs d'Installation</h3>
<div className="grid md:grid-cols-3 gap-6">
{/*  Card 1  */}
<div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-primary transition-colors flex flex-col">
<span className="material-symbols-outlined text-primary text-4xl mb-4">water_lux</span>
<h4 className="text-xl font-bold mb-2">Robinet Standard</h4>
<p className="text-slate-500 text-sm mb-6 flex-grow">Installation d'un mitigeur classique d'Ã©vier ou de lavabo.</p>
<div className="text-3xl font-black mb-6">79â‚¬ <span className="text-sm font-normal text-slate-500">TTC</span></div>
<ul className="space-y-3 mb-8 text-sm">
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> DÃ©pose de l'ancien robinet</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> Raccordement eau chaude/froide</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> Test d'Ã©tanchÃ©itÃ©</li>
</ul>
<button className="w-full py-3 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all">Choisir</button>
</div>
{/*  Card 2 (Featured)  */}
<div className="bg-slate-900 p-8 rounded-2xl border-4 border-primary text-white transform scale-105 shadow-xl flex flex-col relative overflow-hidden">
<div className="absolute top-4 right-[-35px] bg-yellow-400 text-slate-900 text-[10px] font-black py-1 px-10 rotate-45 uppercase">Populaire</div>
<span className="material-symbols-outlined text-4xl mb-4">shower</span>
<h4 className="text-xl font-bold mb-2">Pack Douche &amp; Bain</h4>
<p className="text-white/80 text-sm mb-6 flex-grow">Installation de colonne de douche thermostatique ou mÃ©langeur bain.</p>
<div className="text-3xl font-black mb-6">129â‚¬ <span className="text-sm font-normal text-white/70">TTC</span></div>
<ul className="space-y-3 mb-8 text-sm">
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-yellow-400 text-sm">check_circle</span> Pose murale &amp; fixation</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-yellow-400 text-sm">check_circle</span> Raccords excentrÃ©s inclus</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-yellow-400 text-sm">check_circle</span> Garantie 2 ans main d'oeuvre</li>
</ul>
<button className="w-full py-3 rounded-lg bg-white text-slate-900 font-bold hover:bg-yellow-400 transition-all">Choisir</button>
</div>
{/*  Card 3  */}
<div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-primary transition-colors flex flex-col">
<span className="material-symbols-outlined text-primary text-4xl mb-4">construction</span>
<h4 className="text-xl font-bold mb-2">EncastrÃ© / SpÃ©cial</h4>
<p className="text-slate-500 text-sm mb-6 flex-grow">Robinets encastrÃ©s, capteurs infrarouges ou systÃ¨mes complexes.</p>
<div className="text-3xl font-black mb-2">Sur Devis</div>
<p className="text-xs text-slate-400 mb-6">RÃ©ponse sous 2 heures</p>
<ul className="space-y-3 mb-8 text-sm">
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> Ã‰tude de faisabilitÃ©</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> MatÃ©riel spÃ©cifique</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> Finition luxe</li>
</ul>
<button className="w-full py-3 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all">Demander</button>
</div>
</div>
</section>
{/*  Experts Section  */}
<section className="mb-16 bg-white rounded-3xl p-8 lg:p-12 border border-slate-200">
<div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
<div className="max-w-xl">
<h3 className="text-3xl font-bold mb-4">Nos Experts Ã  ProximitÃ©</h3>
<p className="text-slate-600">Des professionnels qualifiÃ©s, vÃ©rifiÃ©s par nos soins et notÃ©s par la communautÃ©.</p>
</div>
<button className="text-primary font-bold flex items-center gap-1 hover:underline">
                    Voir tous les experts
                    <span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
{/*  Expert 1  */}
<div className="text-center group">
<div className="relative w-32 h-32 mx-auto mb-4">
<div className="absolute inset-0 bg-primary/20 rounded-full scale-110 group-hover:scale-125 transition-transform"></div>
<img alt="Jean Dupont" className="relative w-32 h-32 rounded-full object-cover border-4 border-white shadow-md" data-alt="Portrait of a smiling professional plumber" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARzP4LOJhOPVigaNLeSb7WiuGXo2A6Vg--wCJxT0ui1u8TqVI_XSEyyZ4Uy12Ci2-wbYyYIY8YSffNvp0XXvTK3QZ_Iejs-L0tlMp4euENiNbf03QFpXvE7WWMBZDalhdi75PbmUJPaaKqlLzLhJfshZJzBLMmACy11KYq9cuWZIVolZ681mEFuM6lw2ThBDcTeihL3vUJB7LEX2ejQ5x73sw2YmAXBUl7WFw2R1qPLnjsblVTp3r506x2Hzuh4mK2Np2XkTRZq4hN"/>
</div>
<h5 className="font-bold text-lg">Jean Dupont</h5>
<p className="text-sm text-slate-500 mb-2">Expert Robinetterie</p>
<div className="flex justify-center items-center gap-1 text-yellow-500 text-sm font-bold">
<span className="material-symbols-outlined text-base fill-1">star</span>
                        4.9 (84 avis)
                    </div>
</div>
{/*  Expert 2  */}
<div className="text-center group">
<div className="relative w-32 h-32 mx-auto mb-4">
<div className="absolute inset-0 bg-primary/20 rounded-full scale-110 group-hover:scale-125 transition-transform"></div>
<img alt="Sophie Martin" className="relative w-32 h-32 rounded-full object-cover border-4 border-white shadow-md" data-alt="Portrait of a confident female professional plumber" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmPeqWkaijMtUP2fkrp9DhhrjWBR6Nh-T6Fw14KLEJzpwJGvxkgqNk6LCSQpWE9KwnFLJIZ1tXmFFO99K4-pgP1svzbPTdPuuK4oCNOr7ZdCWf4heTNb2_4B_q5eNzRKavQy7qvYCV-ZuaOPbfkggLjbChbnb4pMo3rcYqdoqFMnavLWNWFrK-mZcZK1kZ40zbcQolkwpUbiNDlX5xVISmatGtRlBn0eywZXyA8eCI2se6RIaII66tXmBJcro0KWHcu38XDePF_pq1"/>
</div>
<h5 className="font-bold text-lg">Sophie Martin</h5>
<p className="text-sm text-slate-500 mb-2">SpÃ©cialiste Douche</p>
<div className="flex justify-center items-center gap-1 text-yellow-500 text-sm font-bold">
<span className="material-symbols-outlined text-base fill-1">star</span>
                        5.0 (52 avis)
                    </div>
</div>
{/*  Expert 3  */}
<div className="text-center group">
<div className="relative w-32 h-32 mx-auto mb-4">
<div className="absolute inset-0 bg-primary/20 rounded-full scale-110 group-hover:scale-125 transition-transform"></div>
<img alt="Marc Leroy" className="relative w-32 h-32 rounded-full object-cover border-4 border-white shadow-md" data-alt="Portrait of an experienced male plumber" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvz8xz4LJrZV7v7B9xPyMcnDbys2trNQFiln9qcMjSO1XoyxPCBKasqq2HeJXmc1viQtQvIGG0CK94foBvH0pjMFkY-7Ak6p89-WHkpupPe-ZOqXwvjvUSYLacgbxcaeGns7MKcpr6IGQ5HGk0dT8u9IYyZf4bkZjntGaXayW2O1xNj-6tXWFua_GHpP5URz2tKVF8T8ZtPUsl1u5PWkKarqF63NUWcg7DbEuvSogSOlqNN3Pyf8IuC3hzFogqR3KltKcqgy0hwQPv"/>
</div>
<h5 className="font-bold text-lg">Marc Leroy</h5>
<p className="text-sm text-slate-500 mb-2">MaÃ®tre Plombier</p>
<div className="flex justify-center items-center gap-1 text-yellow-500 text-sm font-bold">
<span className="material-symbols-outlined text-base fill-1">star</span>
                        4.8 (112 avis)
                    </div>
</div>
{/*  Expert 4  */}
<div className="text-center group">
<div className="relative w-32 h-32 mx-auto mb-4">
<div className="absolute inset-0 bg-primary/20 rounded-full scale-110 group-hover:scale-125 transition-transform"></div>
<img alt="Thomas Petit" className="relative w-32 h-32 rounded-full object-cover border-4 border-white shadow-md" data-alt="Portrait of a young energetic professional plumber" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdl69rNQ-Dkjd8WuD1kquDbpGkaHeSug_xyy_sUXhw5tm-eD2cAhmR3Lpk_9n3ZsWMh2p6vUK_CtpXmfC7fcGfuRwIZgvWcSNzhEJ-syQ4t21W1FsfHojufswzue5smb-TgoQTAs2b6PqhKQAVYf2ZzxSG8h5K7OE_cCzyHdrV5e04uJMIs5yZ-qnZgyFCJDBM3ReC7qUJ9vvQt40llHH88nr98S7WYjtGk0waDEEZk6_WQI--kUp36AA99Svk0if648KV0St9wMkG"/>
</div>
<h5 className="font-bold text-lg">Thomas Petit</h5>
<p className="text-sm text-slate-500 mb-2">Installation Rapide</p>
<div className="flex justify-center items-center gap-1 text-yellow-500 text-sm font-bold">
<span className="material-symbols-outlined text-base fill-1">star</span>
                        4.7 (67 avis)
                    </div>
</div>
</div>
</section>
{/*  Reviews Section  */}
<section className="mb-16">
<h3 className="text-2xl font-bold mb-8">Avis clients</h3>
<div className="grid md:grid-cols-2 gap-8">
<div className="bg-background-light p-6 rounded-2xl border border-slate-200">
<div className="flex items-center gap-4 mb-4">
<img alt="Client" className="w-12 h-12 rounded-full" data-alt="Headshot of a male customer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDT5LPTTFRcrjbMjoLa-KSCzUiBKXxvqYxAbf4BmoUq4H0El-NbT7s_gzK0nitk_fnxk6IXhCuQMl39ZTgcKDpMOvYFMJq87DhzvPrfhRHc_DrelHcIzV7SmSjC0biqMz3Q2J7OEGD6_RWr1R1_lf5di306a3is7L84UmzCE0IGJEp4Q-mBKn-td8OJqVutS768AhOspAzbgTptoYaj25JK_sPIxUQ92LtRNQJH3JLxPsbRAn069R584VkRi1RJwuIzA3bwHUnLT7jW"/>
<div>
<p className="font-bold">Pierre G.</p>
<p className="text-xs text-slate-500">Il y a 2 semaines</p>
</div>
<div className="ml-auto flex text-yellow-500">
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
</div>
</div>
<p className="text-slate-600 italic">"Service impeccable. Le plombier est arrivÃ© Ã  l'heure, a installÃ© mon nouveau robinet de cuisine en 45 minutes et a tout nettoyÃ© avant de partir. Prix conforme au devis."</p>
</div>
<div className="bg-background-light p-6 rounded-2xl border border-slate-200">
<div className="flex items-center gap-4 mb-4">
<img alt="Client" className="w-12 h-12 rounded-full" data-alt="Headshot of a female customer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOR_DfsC_LLO9dr9hnwdRf4ABmbL98dQzLGD_PQKERaxEtULOr7H1PLTfOItVoEn6l4nThSFDOhWlhH--LBG-FkxdDTFBA6pBdTpWbrBwjgo0tI0znlbnobNbOWDZXOG-Oy74zuHWDufDDXt9gVLu_-w_Z6HTBXKqP0zojYTLdxB5Gxq7x1dul-9-Y0cJr0acef5Cw478b8ThykVzlfaXooqhA4bPXeDUNxK4M80c8fzcfKXgTpeBw6CFvjw4KDH-Vv1eDTmEs89ey"/>
<div>
<p className="font-bold">Marie L.</p>
<p className="text-xs text-slate-500">Il y a 1 mois</p>
</div>
<div className="ml-auto flex text-yellow-500">
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
</div>
</div>
<p className="text-slate-600 italic">"TrÃ¨s satisfaite de la colonne de douche installÃ©e par Sophie. TrÃ¨s professionnelle et de bon conseil. Je recommande vivement PlumbExpert !"</p>
</div>
</div>
</section>
{/*  FAQ Section  */}
<section className="mb-16">
<h3 className="text-2xl font-bold mb-8">Questions FrÃ©quentes</h3>
<div className="space-y-4 max-w-3xl">
<details className="group bg-white border border-slate-200 rounded-xl overflow-hidden" open="">
<summary className="flex justify-between items-center p-6 cursor-pointer font-bold list-none">
                        Quelles sont les garanties aprÃ¨s l'installation ?
                        <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div className="px-6 pb-6 text-slate-600">
                        Toutes nos installations sont couvertes par une garantie de 2 ans sur la main d'Å“uvre. Si une fuite apparaÃ®t suite Ã  notre intervention, nous revenons gratuitement dans les 24h pour corriger le problÃ¨me.
                    </div>
</details>
<details className="group bg-white border border-slate-200 rounded-xl overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer font-bold list-none">
                        Fournissez-vous le robinet ou dois-je l'acheter ?
                        <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div className="px-6 pb-6 text-slate-600">
                        Nous pouvons faire les deux ! Vous pouvez acheter votre robinet vous-mÃªme, ou nous pouvons vous proposer une sÃ©lection de modÃ¨les de haute qualitÃ© issus de nos partenaires (Grohe, Hansgrohe, Jacob Delafon) avec une remise professionnelle.
                    </div>
</details>
<details className="group bg-white border border-slate-200 rounded-xl overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer font-bold list-none">
                        Combien de temps dure l'intervention ?
                        <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div className="px-6 pb-6 text-slate-600">
                        Pour un robinet standard, comptez environ 45 minutes Ã  1 heure. Pour une colonne de douche complÃ¨te ou un systÃ¨me encastrÃ©, l'intervention peut durer entre 2 et 4 heures selon la complexitÃ© des raccordements existants.
                    </div>
</details>
</div>
</section>
{/*  CTA Final  */}
<section className="bg-primary rounded-3xl p-10 text-center text-white relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
<div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full -ml-24 -mb-24"></div>
<h3 className="text-3xl font-black mb-4 relative z-10">PrÃªt Ã  rÃ©nover votre robinetterie ?</h3>
<p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto relative z-10">Prenez rendez-vous en ligne en moins de 2 minutes et profitez d'une installation parfaite.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
<button className="bg-white text-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-colors">RÃ©server maintenant</button>
<button className="bg-primary border-2 border-white/30 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors">Voir plus de services</button>
</div>
</section>
</main>
<footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-2">
<div className="flex items-center gap-2 text-white mb-6">
<span className="material-symbols-outlined text-primary">plumbing</span>
<span className="text-xl font-bold">PlumbExpert</span>
</div>
<p className="max-w-md">Le rÃ©seau nÂ°1 des experts en plomberie Ã  Paris et en ÃŽle-de-France. DisponibilitÃ© 24/7 pour vos urgences et projets d'installation.</p>
</div>
<div>
<h6 className="text-white font-bold mb-6">Navigation</h6>
<ul className="space-y-4 text-sm">
<li><a className="hover:text-primary transition-colors" href="#">Services</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Plombiers</a></li>
<li><a className="hover:text-primary transition-colors" href="#">A propos</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h6 className="text-white font-bold mb-6">LÃ©gal</h6>
<ul className="space-y-4 text-sm">
<li><a className="hover:text-primary transition-colors" href="#">CGV</a></li>
<li><a className="hover:text-primary transition-colors" href="#">ConfidentialitÃ©</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Mentions lÃ©gales</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
<p>Â© 2024 PlumbExpert. Tous droits rÃ©servÃ©s.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Facebook</a>
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
</div>
</div>
</footer>

    </>
  );
};

export default ServiceDetailsInstallationRobinetterie;

