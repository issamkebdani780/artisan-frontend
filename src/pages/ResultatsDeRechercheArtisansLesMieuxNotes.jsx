import React from 'react';

const ResultatsDeRechercheArtisansLesMieuxNotes = () => {
  return (
    <>
      
<div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
{/*  Top Navigation Bar  */}
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 md:px-10 py-3 sticky top-0 z-50">
<div className="flex items-center gap-8">
<div className="flex items-center gap-4 text-primary">
<div className="size-6">
<svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M6 6H42L36 24L42 42H6L12 24L6 6Z"></path>
</svg>
</div>
<h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight tracking-[-0.015em]">Artisanat</h2>
</div>
<div className="hidden md:flex items-center gap-6">
<a className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal" href="#">Prix</a>
<button className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal">
<span className="material-symbols-outlined text-[20px]">dark_mode</span>
                        Mode Sombre
                    </button>
</div>
</div>
<div className="flex flex-1 justify-end gap-4 md:gap-8 items-center">
<label className="hidden lg:flex flex-col min-w-40 !h-10 max-w-64">
<div className="flex w-full flex-1 items-stretch rounded-lg h-full">
<div className="text-slate-500 flex border-none bg-slate-100 dark:bg-slate-800 items-center justify-center pl-4 rounded-l-lg">
<span className="material-symbols-outlined text-[20px]">search</span>
</div>
<input className="form-input flex w-full min-w-0 flex-1 border-none bg-slate-100 dark:bg-slate-800 focus:ring-0 h-full placeholder:text-slate-500 px-4 rounded-r-lg text-base font-normal" placeholder="Rechercher un artisan..." value=""/>
</div>
</label>
<button className="flex min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
<span>Connexion</span>
</button>
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-slate-200 dark:border-slate-700" data-alt="Avatar de l'utilisateur connectÃ©" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCzZHoRw03C7J5Q7F1-TvGKXmrpsIdB_c2rV7sic8ya6jBjgbmlleu5desrj-mz8sJaERArtHgaeSt1iTq52NDuaFn06N2y8jpYZonFmF1yxfxSGS7dHiNCA4qr1w4Pir_ecg5135IgytAbC9QbFvHsXqTx7VeyMFmVaV6AZ6XIv7F0Y_rmwOICEB7DTIqozq7A2rQiUQEIHLKLF4JtsJcPOZAM3c6_I_1cuBGp-DjyvjB_Z2dg7Q1VmLOIltLnBRlaYLcU-AT8PVmo");'></div>
</div>
</header>
<main className="flex flex-1 justify-center py-8 px-4 md:px-10 lg:px-20">
<div className="layout-content-container flex flex-col md:flex-row gap-8 w-full max-w-[1200px]">
{/*  Sidebar Filters  */}
<aside className="w-full md:w-72 flex flex-col gap-6 shrink-0">
<div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold mb-4">Filtres AvancÃ©s</h3>
<div className="flex flex-col gap-1">
{/*  Highlighting 'Notes' filter as requested  */}
<div className="flex items-center gap-3 px-3 py-3 rounded-lg bg-primary/10 text-primary border border-primary/20">
<span className="material-symbols-outlined text-[22px] fill-1">star</span>
<p className="text-sm font-bold leading-normal">Notes &amp; Avis</p>
<span className="ml-auto material-symbols-outlined text-[18px]">check_circle</span>
</div>
<div className="flex items-center gap-3 px-3 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg cursor-pointer transition-colors">
<span className="material-symbols-outlined text-[22px]">payments</span>
<p className="text-sm font-medium leading-normal">Fourchette de Prix</p>
</div>
<div className="flex items-center gap-3 px-3 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg cursor-pointer transition-colors">
<span className="material-symbols-outlined text-[22px]">event_available</span>
<p className="text-sm font-medium leading-normal">DisponibilitÃ©</p>
</div>
<div className="flex items-center gap-3 px-3 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg cursor-pointer transition-colors">
<span className="material-symbols-outlined text-[22px]">category</span>
<p className="text-sm font-medium leading-normal">CatÃ©gories d'Artisanat</p>
</div>
</div>
<div className="mt-8">
<h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">Score Minimum</h4>
<div className="flex flex-col gap-2">
<label className="flex items-center gap-3 cursor-pointer group">
<input defaultChecked className="form-radio text-primary border-slate-300 dark:border-slate-700 bg-transparent focus:ring-primary rounded-full" name="rating" type="radio"/>
<span className="text-sm text-slate-700 dark:text-slate-300 group-hover:text-primary">4.5+ Ã‰toiles</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="form-radio text-primary border-slate-300 dark:border-slate-700 bg-transparent focus:ring-primary rounded-full" name="rating" type="radio"/>
<span className="text-sm text-slate-700 dark:text-slate-300 group-hover:text-primary">4.0+ Ã‰toiles</span>
</label>
</div>
</div>
<button className="mt-8 w-full flex items-center justify-center rounded-lg h-11 bg-primary text-white text-sm font-bold transition-all hover:bg-primary/90 shadow-md shadow-primary/20">
                            Appliquer les filtres
                        </button>
</div>
<div className="bg-primary/5 dark:bg-primary/10 p-6 rounded-xl border border-primary/20 hidden md:block">
<p className="text-primary text-sm font-bold mb-2">Pourquoi choisir un artisan vÃ©rifiÃ© ?</p>
<p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">Les artisans avec le badge de vÃ©rification ont fourni des justificatifs de compÃ©tences et d'assurance professionnelle.</p>
</div>
</aside>
{/*  Results Section  */}
<div className="flex-1 flex flex-col gap-6">
<div className="flex flex-col gap-2">
<h1 className="text-slate-900 dark:text-slate-100 text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Artisans les mieux notÃ©s</h1>
<p className="text-slate-600 dark:text-slate-400 text-base font-normal">DÃ©couvrez nos experts les plus recommandÃ©s par la communautÃ©, basÃ©s sur des expÃ©riences rÃ©elles.</p>
</div>
{/*  Quick Tags  */}
<div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
<button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary text-white px-4 text-sm font-medium">
<span className="material-symbols-outlined text-[18px]">star</span>
                            4.5+ Ã‰toiles
                        </button>
<button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 text-sm font-medium text-slate-700 dark:text-slate-300 hover:border-primary transition-colors">
<span className="material-symbols-outlined text-[18px] text-primary">verified</span>
                            Artisans VÃ©rifiÃ©s
                        </button>
<button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 text-sm font-medium text-slate-700 dark:text-slate-300 hover:border-primary transition-colors">
                            Disponible ce mois
                        </button>
</div>
{/*  Artisan Cards List  */}
<div className="flex flex-col gap-6">
{/*  Artisan Card 1  */}
<div className="group flex flex-col @container items-stretch justify-start rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-md transition-all duration-300">
<div className="flex flex-col @[600px]:flex-row">
<div className="w-full @[600px]:w-64 h-48 @[600px]:h-auto bg-center bg-no-repeat bg-cover shrink-0 relative" data-alt="Atelier de menuiserie moderne" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuD54n7geanoXlkH39DgTqOajf0NHPor1aW9kdydJVkuMqg2kNHUKzArbWLT9kMlWld690ln6wKOFLrHoUPGdYE7AUk1KLPtcCKNnvEjBRvMXWozhMXXp8c7J5Xwsz5Es3_8xOnSbcbKIF14Ne51UeGGtbO_CWe8P4xOR4qW6gKwxhBAA-I7ozRvusVkzIBMRFFYMi2KBC3GqIreiFiEkFtZQ0F3J4JZ_YFwmMAucmRWv_42krrta8voVv4cHDr6lGn3Z1Rlj2z566in");'>
<div className="absolute top-3 left-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold text-primary uppercase tracking-widest border border-primary/20">Menuisier</div>
</div>
<div className="flex flex-1 flex-col p-5 md:p-6 gap-3">
<div className="flex justify-between items-start">
<div>
<div className="flex items-center gap-2 mb-1">
<h3 className="text-slate-900 dark:text-slate-100 text-xl font-bold">Jean Dupont</h3>
<span className="material-symbols-outlined text-primary text-[20px]" title="Artisan VÃ©rifiÃ©">verified</span>
</div>
<p className="text-slate-500 text-sm font-medium">Menuiserie &amp; Ã‰bÃ©nisterie sur mesure</p>
</div>
<div className="flex flex-col items-end">
<div className="flex items-center gap-1 bg-yellow-400/10 text-yellow-600 dark:text-yellow-500 px-2 py-1 rounded-lg">
<span className="material-symbols-outlined text-[18px] fill-1">star</span>
<span className="font-bold text-base leading-none">4.9</span>
</div>
<p className="text-[11px] text-slate-400 mt-1 uppercase font-semibold">128 avis vÃ©rifiÃ©s</p>
</div>
</div>
<div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border-l-4 border-primary/40 italic text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                        "Travail d'une prÃ©cision incroyable pour ma bibliothÃ¨que. Jean est ponctuel et trÃ¨s soigneux, je recommande vivement !"
                                        <span className="block mt-1 font-semibold not-italic text-slate-500 dark:text-slate-500 text-xs">âDA” Marie L.</span>
</div>
<div className="flex items-center justify-between mt-2 pt-3 border-t border-slate-100 dark:border-slate-800">
<div className="flex gap-4">
<div className="flex items-center gap-1 text-xs text-slate-500">
<span className="material-symbols-outlined text-[16px]">location_on</span>
                                                Paris, 75011
                                            </div>
<div className="flex items-center gap-1 text-xs text-green-600 dark:text-green-500 font-medium">
<span className="material-symbols-outlined text-[16px]">schedule</span>
                                                Dispo. sous 2 sem.
                                            </div>
</div>
<button className="flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-9 px-4 bg-primary text-white text-sm font-bold transition-all hover:bg-primary/90">
                                            Voir le profil
                                        </button>
</div>
</div>
</div>
</div>
{/*  Artisan Card 2  */}
<div className="group flex flex-col @container items-stretch justify-start rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-md transition-all duration-300">
<div className="flex flex-col @[600px]:flex-row">
<div className="w-full @[600px]:w-64 h-48 @[600px]:h-auto bg-center bg-no-repeat bg-cover shrink-0 relative" data-alt="Ã‰lectricien professionnel au travail" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBjtZaEdCRTRXY29s0F5f-jI1gVvMT2tK5bEKheKkJgNC3h8PQSvx6uZft9nxYhMwEKW0vyjWoP9RBNCsmmxqfqeKW05GK1-uq_jNuJhNC5SsZXbQBeJkXteAqKEPjv2c5dSXNDV-71B1n_f99O4nLkbcELu9YiAdtskjRnk_4JppLZCWPls_5gnFRn2myrG33zWBO0fcBf-syB00bp1TuVmGxfCYuLeVKyyVA8zjKo5DT_wgLlpL5jJFkF_8q5HSUT1JCC9rM5JIxa");'>
<div className="absolute top-3 left-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold text-primary uppercase tracking-widest border border-primary/20">Ã‰lectricien</div>
</div>
<div className="flex flex-1 flex-col p-5 md:p-6 gap-3">
<div className="flex justify-between items-start">
<div>
<div className="flex items-center gap-2 mb-1">
<h3 className="text-slate-900 dark:text-slate-100 text-xl font-bold">Marc Lefebvre</h3>
<span className="material-symbols-outlined text-primary text-[20px]" title="Artisan VÃ©rifiÃ©">verified</span>
</div>
<p className="text-slate-500 text-sm font-medium">Installation et rÃ©novation Ã©lectrique</p>
</div>
<div className="flex flex-col items-end">
<div className="flex items-center gap-1 bg-yellow-400/10 text-yellow-600 dark:text-yellow-500 px-2 py-1 rounded-lg">
<span className="material-symbols-outlined text-[18px] fill-1">star</span>
<span className="font-bold text-base leading-none">4.8</span>
</div>
<p className="text-[11px] text-slate-400 mt-1 uppercase font-semibold">94 avis vÃ©rifiÃ©s</p>
</div>
</div>
<div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border-l-4 border-primary/40 italic text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                        "RÃ©actif et trÃ¨s pÃ©dagogue sur les explications. L'installation est propre et aux normes. Un vrai pro !"
                                        <span className="block mt-1 font-semibold not-italic text-slate-500 dark:text-slate-500 text-xs">âDA” Thomas D.</span>
</div>
<div className="flex items-center justify-between mt-2 pt-3 border-t border-slate-100 dark:border-slate-800">
<div className="flex gap-4">
<div className="flex items-center gap-1 text-xs text-slate-500">
<span className="material-symbols-outlined text-[16px]">location_on</span>
                                                Lyon, 69002
                                            </div>
<div className="flex items-center gap-1 text-xs text-green-600 dark:text-green-500 font-medium">
<span className="material-symbols-outlined text-[16px]">schedule</span>
                                                Dispo. ImmÃ©diate
                                            </div>
</div>
<button className="flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-9 px-4 bg-primary text-white text-sm font-bold transition-all hover:bg-primary/90">
                                            Voir le profil
                                        </button>
</div>
</div>
</div>
</div>
{/*  Artisan Card 3  */}
<div className="group flex flex-col @container items-stretch justify-start rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-md transition-all duration-300">
<div className="flex flex-col @[600px]:flex-row">
<div className="w-full @[600px]:w-64 h-48 @[600px]:h-auto bg-center bg-no-repeat bg-cover shrink-0 relative" data-alt="CÃ©ramiste faÃ§onnant un vase" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDNHKASEDL6JU3dojHcPfySzsL6RUMocrIb_LHg-DE3qxkb1I8_UutE3Shhqk7rfM2ESAa2sJUgllngP2BxSjqsram8UbW62Macsb70OFM9yL0aYqiUTqj-8Ca7p0aC7zBLo2tKvKjokZqZGJRMFmkxD5gX288BSaFnhaKXHXjQPHU-JdWkbCmYIjn9c8jJS_bnqWugZv65_EOk45c0Wxs7F_zmU4WZaQpu8BtyzMsKRbci4eck0ziN_tb6Hcr4o6AUZMhe_uSBO8Yy");'>
<div className="absolute top-3 left-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold text-primary uppercase tracking-widest border border-primary/20">CÃ©ramiste</div>
</div>
<div className="flex flex-1 flex-col p-5 md:p-6 gap-3">
<div className="flex justify-between items-start">
<div>
<div className="flex items-center gap-2 mb-1">
<h3 className="text-slate-900 dark:text-slate-100 text-xl font-bold">Sophie Martin</h3>
<span className="material-symbols-outlined text-primary text-[20px]" title="Artisan VÃ©rifiÃ©">verified</span>
</div>
<p className="text-slate-500 text-sm font-medium">Poterie artisanale et cours particuliers</p>
</div>
<div className="flex flex-col items-end">
<div className="flex items-center gap-1 bg-yellow-400/10 text-yellow-600 dark:text-yellow-500 px-2 py-1 rounded-lg">
<span className="material-symbols-outlined text-[18px] fill-1">star</span>
<span className="font-bold text-base leading-none">4.9</span>
</div>
<p className="text-[11px] text-slate-400 mt-1 uppercase font-semibold">215 avis vÃ©rifiÃ©s</p>
</div>
</div>
<div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border-l-4 border-primary/40 italic text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                        "Les piÃ¨ces de Sophie sont magnifiques et uniques. J'ai aussi pris un cours avec elle, c'Ã©tait une expÃ©rience gÃ©niale !"
                                        <span className="block mt-1 font-semibold not-italic text-slate-500 dark:text-slate-500 text-xs">âDA” Claire G.</span>
</div>
<div className="flex items-center justify-between mt-2 pt-3 border-t border-slate-100 dark:border-slate-800">
<div className="flex gap-4">
<div className="flex items-center gap-1 text-xs text-slate-500">
<span className="material-symbols-outlined text-[16px]">location_on</span>
                                                Bordeaux, 33000
                                            </div>
<div className="flex items-center gap-1 text-xs text-green-600 dark:text-green-500 font-medium">
<span className="material-symbols-outlined text-[16px]">schedule</span>
                                                Boutique ouverte
                                            </div>
</div>
<button className="flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-9 px-4 bg-primary text-white text-sm font-bold transition-all hover:bg-primary/90">
                                            Voir le profil
                                        </button>
</div>
</div>
</div>
</div>
</div>
{/*  Pagination (Optional but good for layout)  */}
<div className="flex justify-center mt-4">
<nav className="flex items-center gap-2">
<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800">
<span className="material-symbols-outlined">chevron_left</span>
</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold">1</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800">2</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800">3</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800">
<span className="material-symbols-outlined">chevron_right</span>
</button>
</nav>
</div>
</div>
</div>
</main>
{/*  Footer (Optional)  */}
<footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-10 px-4 md:px-10 lg:px-20 mt-12">
<div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between gap-8">
<div>
<div className="flex items-center gap-3 text-primary mb-4">
<svg className="size-6" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M6 6H42L36 24L42 42H6L12 24L6 6Z"></path>
</svg>
<h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold">Artisanat</h2>
</div>
<p className="text-slate-500 text-sm max-w-xs leading-relaxed">Le rÃ©seau de confiance qui connecte les clients avec les meilleurs artisans de leur rÃ©gion.</p>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
<div className="flex flex-col gap-3">
<p className="text-slate-900 dark:text-slate-100 text-sm font-bold">Plateforme</p>
<a className="text-slate-500 text-sm hover:text-primary" href="#">Comment Ã§a marche</a>
<a className="text-slate-500 text-sm hover:text-primary" href="#">Tarifs</a>
<a className="text-slate-500 text-sm hover:text-primary" href="#">Avis Clients</a>
</div>
<div className="flex flex-col gap-3">
<p className="text-slate-900 dark:text-slate-100 text-sm font-bold">Artisans</p>
<a className="text-slate-500 text-sm hover:text-primary" href="#">S'inscrire</a>
<a className="text-slate-500 text-sm hover:text-primary" href="#">Guide de rÃ©ussite</a>
<a className="text-slate-500 text-sm hover:text-primary" href="#">VÃ©rification</a>
</div>
<div className="flex flex-col gap-3">
<p className="text-slate-900 dark:text-slate-100 text-sm font-bold">LÃ©gal</p>
<a className="text-slate-500 text-sm hover:text-primary" href="#">ConfidentialitÃ©</a>
<a className="text-slate-500 text-sm hover:text-primary" href="#">CGU</a>
<a className="text-slate-500 text-sm hover:text-primary" href="#">Contact</a>
</div>
</div>
</div>
<div className="max-w-[1200px] mx-auto mt-12 pt-6 border-t border-slate-100 dark:border-slate-800 text-center md:text-left">
<p className="text-slate-400 text-xs">Â© 2024 Artisanat. Tous droits rÃ©servÃ©s.</p>
</div>
</footer>
</div>
</div>

    </>
  );
};

export default ResultatsDeRechercheArtisansLesMieuxNotes;
