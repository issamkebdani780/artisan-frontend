import React from 'react';

const ResultatsDeRechercheArtisansVerifies = () => {
  return (
    <>
      
<div className="flex flex-col min-h-screen">
{/*  Header  */}
<header className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16 gap-8">
{/*  Logo and Nav  */}
<div className="flex items-center gap-8">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-3xl">dashboard</span>
<h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Artisans Pro</h1>
</div>
<nav className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors" href="#">Accueil</a>
<a className="text-sm font-medium text-primary underline underline-offset-4" href="#">Artisans</a>
<a className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors" href="#">Tarifs</a>
</nav>
</div>
{/*  Search and Actions  */}
<div className="flex flex-1 items-center justify-end gap-4 max-w-xl">
<div className="relative w-full max-w-xs hidden sm:block">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
<input className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-lg py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all" placeholder="Rechercher un artisan..." type="text"/>
</div>
<div className="flex items-center gap-2">
<button className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 transition-colors">
<span className="material-symbols-outlined text-slate-600 dark:text-slate-300">language</span>
</button>
<button className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 transition-colors">
<span className="material-symbols-outlined text-slate-600 dark:text-slate-300">dark_mode</span>
</button>
<div className="h-8 w-8 rounded-full bg-primary/20 overflow-hidden ml-2 border border-slate-200 dark:border-slate-700">
<img alt="Avatar utilisateur" data-alt="Portrait of a user smiling for profile picture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0aA6miR8QG6i20Dwuckt8-RDLKCdUrxUfPUUU2l0dsfWOM1QzPc577-iHLieONaAyrz1gWzv56cLs1CJnGngLR8bvvbnz5Yg9R9zZvCvFwzY3_0BgNKnGE1A_HQLxPk-jhYMDizce4ogmPE73dXA4cudf2G8ArHxzNgkt86VRAZGI8fUiGMW--NA-bMnGnA-Ydc4dLZZALC_PnvIDOiBA9K5a1a9uraOLmhY4PwFu5ar4vjjtNeVyiE6YjTNW4cufeyFM__FjKRDK"/>
</div>
</div>
</div>
</div>
</div>
</header>
{/*  Main Layout  */}
<div className="flex-1 flex max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 gap-8">
{/*  Sidebar Filters  */}
<aside className="w-64 hidden lg:flex flex-col gap-8 flex-shrink-0">
<div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
<div className="flex flex-col mb-6">
<h2 className="text-lg font-bold">Filtres</h2>
<p className="text-xs text-slate-500 dark:text-slate-400">Affinez votre recherche</p>
</div>
<nav className="flex flex-col gap-2">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" href="#">
<span className="material-symbols-outlined text-xl">group</span>
<span className="text-sm font-medium">Tous les artisans</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary transition-colors" href="#">
<span className="material-symbols-outlined text-xl" >verified_user</span>
<span className="text-sm font-bold">Artisans Vérifiés</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" href="#">
<span className="material-symbols-outlined text-xl">favorite</span>
<span className="text-sm font-medium">Mes favoris</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" href="#">
<span className="material-symbols-outlined text-xl">chat</span>
<span className="text-sm font-medium">Messages</span>
</a>
</nav>
<div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800">
<h3 className="text-sm font-bold mb-4">Catégories</h3>
<div className="flex flex-col gap-2">
<label className="flex items-center gap-2 cursor-pointer">
<input defaultChecked className="rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary" type="checkbox"/>
<span className="text-sm">Rénovation</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input className="rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary" type="checkbox"/>
<span className="text-sm">Électricité</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input className="rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary" type="checkbox"/>
<span className="text-sm">Plomberie</span>
</label>
</div>
</div>
</div>
</aside>
{/*  Main Content Area  */}
<main className="flex-1 flex flex-col gap-8">
{/*  Breadcrumbs  */}
<nav className="flex items-center gap-2 text-sm">
<a className="text-slate-500 hover:text-primary transition-colors" href="#">Accueil</a>
<span className="material-symbols-outlined text-slate-400 text-xs">chevron_right</span>
<span className="font-medium text-slate-900 dark:text-slate-100">Artisans Vérifiés</span>
</nav>
{/*  Hero Header  */}
<div className="flex flex-col gap-4">
<h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">Artisans Vérifiés par notre communauté</h2>
<p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                        Découvrez des professionnels rigoureusement sélectionnés pour la qualité de leur travail et leur fiabilité absolue.
                    </p>
</div>
{/*  Trust Banner  */}
<section className="bg-primary/5 dark:bg-primary/10 rounded-xl border border-primary/20 p-6 flex flex-col md:flex-row items-center gap-6">
<div className="flex-1 flex flex-col gap-2">
<h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
<span className="material-symbols-outlined text-primary">security</span>
                            Pourquoi choisir un artisan vérifié ?
                        </h3>
<p className="text-sm text-slate-600 dark:text-slate-400">
                            Chaque professionnel est soumis à une vérification d'identité, un contrôle des assurances décennales et une vérification de casier judiciaire pour votre sécurité totale.
                        </p>
</div>
<a className="flex items-center gap-2 text-sm font-bold text-primary group" href="#">
                        En savoir plus sur la vérification
                        <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
</a>
</section>
{/*  Listing Grid  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{/*  Artisan Card 1  */}
<div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-md transition-shadow">
<div className="relative h-48 w-full">
<img alt="Plombier au travail" className="w-full h-full object-cover" data-alt="Professional plumber working on pipes in kitchen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfciciXwt-OQew6ebB8ZeKXx_XNsw1a1QhxTOFFlTEGOZyJk6vGN47lRRoyhaSNG0NrETtdKt3XkkHixKiAUzWmMHLdaWcmbZwAPfDsK49wOgE0MLtWroVwD2chX9Kwdtv-LKC3cgJ788qEMbj1-h-n_j8wTd4DUE6jZyULION7PmiBgCrmLEW7hiqmyV-5OPRWAoZ8vw_JSkf1Ctr_BqdLfMQdgkI2ciMGLiaDyEmwi2Bn2wv0vcdZuEYXAF_86fo4J6_ZOdtLda-"/>
<div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded flex items-center gap-1">
<span className="material-symbols-outlined text-xs">verified</span>
                                Vérifié
                            </div>
<button className="absolute top-4 right-4 bg-white/80 dark:bg-slate-900/80 p-1.5 rounded-full backdrop-blur-sm">
<span className="material-symbols-outlined text-slate-700 dark:text-slate-200">favorite</span>
</button>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<div className="flex flex-col gap-1">
<h3 className="text-xl font-bold">Jean Dupuis</h3>
<p className="text-sm text-slate-500 dark:text-slate-400">Plomberie &amp; Chauffage</p>
</div>
<div className="flex items-center gap-1 bg-amber-50 dark:bg-amber-900/20 text-amber-600 px-2 py-1 rounded-lg text-sm font-bold">
<span className="material-symbols-outlined text-sm" >star</span>
                                    4.9
                                </div>
</div>
<div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-6">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-sm">reviews</span>
                                    124 avis vérifiés
                                </div>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-sm">location_on</span>
                                    Paris (75)
                                </div>
</div>
<div className="flex items-center gap-2">
<button className="flex-1 bg-primary text-white font-bold py-2.5 rounded-lg text-sm hover:bg-primary/90 transition-colors">Voir le profil</button>
<button className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">
<span className="material-symbols-outlined">chat_bubble</span>
</button>
</div>
</div>
</div>
{/*  Artisan Card 2  */}
<div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-md transition-shadow">
<div className="relative h-48 w-full">
<img alt="Electricien professionnel" className="w-full h-full object-cover" data-alt="Electrician testing fuse box panel in house" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUfCCNpMqYzxJYnnQpl_0kazMyWdt2SRxYcg_zBSzjPWWH6ez2nQkGhnxQ1gDY9soDnalqB7SRUpdkz5cleSJT55Y4KNfE6AeC378Z7Dkx7me1qQv3uNe75ChGH6boe_9aJYtGhx5TuFR7qbu3UHmOo1wwFk-C0VAPLT8aQcccBDnN2s_ZQvujpnXGFt-OEaTVHk1OyB9q7_QZ5vkm2p34pqe5ELrVRSMbWmgEt8hMybmUeSBib0UtIj1PsBd6-GcBwvBGDnbrbceb"/>
<div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded flex items-center gap-1">
<span className="material-symbols-outlined text-xs">verified</span>
                                Vérifié
                            </div>
<button className="absolute top-4 right-4 bg-white/80 dark:bg-slate-900/80 p-1.5 rounded-full backdrop-blur-sm">
<span className="material-symbols-outlined text-slate-700 dark:text-slate-200">favorite</span>
</button>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<div className="flex flex-col gap-1">
<h3 className="text-xl font-bold">Marc Lefebvre</h3>
<p className="text-sm text-slate-500 dark:text-slate-400">Expert Électricien</p>
</div>
<div className="flex items-center gap-1 bg-amber-50 dark:bg-amber-900/20 text-amber-600 px-2 py-1 rounded-lg text-sm font-bold">
<span className="material-symbols-outlined text-sm" >star</span>
                                    4.8
                                </div>
</div>
<div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-6">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-sm">reviews</span>
                                    86 avis vérifiés
                                </div>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-sm">location_on</span>
                                    Lyon (69)
                                </div>
</div>
<div className="flex items-center gap-2">
<button className="flex-1 bg-primary text-white font-bold py-2.5 rounded-lg text-sm hover:bg-primary/90 transition-colors">Voir le profil</button>
<button className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">
<span className="material-symbols-outlined">chat_bubble</span>
</button>
</div>
</div>
</div>
{/*  Artisan Card 3  */}
<div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-md transition-shadow">
<div className="relative h-48 w-full">
<img alt="Menuisier au travail" className="w-full h-full object-cover" data-alt="Carpenter working with wood tools in workshop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2fU3ql4AUlFx7R6uo81NRe2_9FWyTzWfxgs81GSMJ_uLYaTK6fpcKNWegA3O7-rncv6qi8IHJWXB2PCunCJwqIdP-swfymj0n9jqnGAg7337yoRzUthxIx2ABNYAmEbcJannVDeWd9T5NkhOw913x-XvJVUj8PnS6UeN3YIOicqMvcbtTIxk2_JsDDnZIdfdeqH_I8Obk6zTzobu00ko-oMyuSLStStBS-Mj6Hk-MYvViRgAaNgcuWS0iv1VXaUEeEN4yVfnYt2sg"/>
<div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded flex items-center gap-1">
<span className="material-symbols-outlined text-xs">verified</span>
                                Vérifié
                            </div>
<button className="absolute top-4 right-4 bg-white/80 dark:bg-slate-900/80 p-1.5 rounded-full backdrop-blur-sm">
<span className="material-symbols-outlined text-slate-700 dark:text-slate-200">favorite</span>
</button>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<div className="flex flex-col gap-1">
<h3 className="text-xl font-bold">Sophie Martin</h3>
<p className="text-sm text-slate-500 dark:text-slate-400">Menuiserie &amp; Agencement</p>
</div>
<div className="flex items-center gap-1 bg-amber-50 dark:bg-amber-900/20 text-amber-600 px-2 py-1 rounded-lg text-sm font-bold">
<span className="material-symbols-outlined text-sm" >star</span>
                                    5.0
                                </div>
</div>
<div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-6">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-sm">reviews</span>
                                    210 avis vérifiés
                                </div>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-sm">location_on</span>
                                    Bordeaux (33)
                                </div>
</div>
<div className="flex items-center gap-2">
<button className="flex-1 bg-primary text-white font-bold py-2.5 rounded-lg text-sm hover:bg-primary/90 transition-colors">Voir le profil</button>
<button className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">
<span className="material-symbols-outlined">chat_bubble</span>
</button>
</div>
</div>
</div>
{/*  Artisan Card 4  */}
<div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-md transition-shadow">
<div className="relative h-48 w-full">
<img alt="Peintre en bâtiment" className="w-full h-full object-cover" data-alt="House painter applying blue paint to white wall" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQ3py1IPms2bVtHP918Jnc-yBa3K4L3RP_OM9M-y4yxo2LVHeLWzjsB1fMIzHd_uZKOeWQVpj9lzxJJZbnQZLIDz606dKwdomVnCP4j-VdafPQ7hIrG0UtJvx-Ii3MBHuMwDO1fv1jQqT7Oo9l2HzePg6NIjZZd3Z-lG-1ZALrxk-EnWuWGfl1mkkc46556uUfWcJy60H7jTxJgmXsy2_0-z2CdSr7KIA2SItKeElKhMz1SHORBEoq4bhF_3qVVxWPWQ8l8z9CJZAw"/>
<div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded flex items-center gap-1">
<span className="material-symbols-outlined text-xs">verified</span>
                                Vérifié
                            </div>
<button className="absolute top-4 right-4 bg-white/80 dark:bg-slate-900/80 p-1.5 rounded-full backdrop-blur-sm">
<span className="material-symbols-outlined text-slate-700 dark:text-slate-200">favorite</span>
</button>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<div className="flex flex-col gap-1">
<h3 className="text-xl font-bold">Thomas Morel</h3>
<p className="text-sm text-slate-500 dark:text-slate-400">Peinture &amp; Décoration</p>
</div>
<div className="flex items-center gap-1 bg-amber-50 dark:bg-amber-900/20 text-amber-600 px-2 py-1 rounded-lg text-sm font-bold">
<span className="material-symbols-outlined text-sm" >star</span>
                                    4.7
                                </div>
</div>
<div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-6">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-sm">reviews</span>
                                    54 avis vérifiés
                                </div>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-sm">location_on</span>
                                    Nantes (44)
                                </div>
</div>
<div className="flex items-center gap-2">
<button className="flex-1 bg-primary text-white font-bold py-2.5 rounded-lg text-sm hover:bg-primary/90 transition-colors">Voir le profil</button>
<button className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">
<span className="material-symbols-outlined">chat_bubble</span>
</button>
</div>
</div>
</div>
</div>
{/*  Pagination (Optional but recommended)  */}
<div className="flex justify-center mt-4">
<nav className="flex items-center gap-2">
<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800">
<span className="material-symbols-outlined text-slate-400">chevron_left</span>
</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold">1</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800">2</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800">3</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800">
<span className="material-symbols-outlined text-slate-400">chevron_right</span>
</button>
</nav>
</div>
</main>
</div>
{/*  Simple Footer  */}
<footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 mt-12 py-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-xl">dashboard</span>
<span className="font-bold text-slate-900 dark:text-white">Artisans Pro</span>
</div>
<div className="flex gap-6">
<a className="hover:text-primary transition-colors" href="#">Conditions Générales</a>
<a className="hover:text-primary transition-colors" href="#">Politique de Confidentialité</a>
<a className="hover:text-primary transition-colors" href="#">Support</a>
</div>
<div>© 2024 Artisans Pro. Tous droits réservés.</div>
</div>
</footer>
</div>

    </>
  );
};

export default ResultatsDeRechercheArtisansVerifies;
