import React from 'react';

const DTailsDuServiceMenage = () => {
  return (
    <>
      
<div className="layout-container flex h-full grow flex-col">
{/*  Header  */}
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 md:px-20 py-3 sticky top-0 z-50">
<div className="flex items-center gap-8">
<div className="flex items-center gap-3 text-primary">
<span className="material-symbols-outlined text-3xl">cleaning_services</span>
<h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight">MénagePro</h2>
</div>
<div className="hidden md:flex items-center gap-6">
<a className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="#">FR</a>
<a className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="#">AR</a>
<a className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="#">EN</a>
</div>
</div>
<div className="flex flex-1 justify-end gap-4 items-center">
<label className="hidden lg:flex flex-col min-w-40 h-10 max-w-64">
<div className="flex w-full flex-1 items-stretch rounded-lg h-full overflow-hidden">
<div className="text-slate-500 flex border-none bg-slate-100 dark:bg-slate-800 items-center justify-center pl-4">
<span className="material-symbols-outlined text-xl">search</span>
</div>
<input className="form-input flex w-full min-w-0 flex-1 border-none bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-0 h-full placeholder:text-slate-500 text-sm font-normal px-4" placeholder="Trouver un service..."/>
</div>
</label>
<button className="flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-all">
                    Connexion
                </button>
</div>
</header>
<main className="flex-1">
{/*  Hero Section  */}
<section className="relative w-full">
<div className="flex min-h-[500px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center p-6 text-center" data-alt="Professional cleaner cleaning a modern living room" >
<div className="max-w-3xl flex flex-col gap-4">
<h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight">
                            Services de Ménage à Domicile
                        </h1>
<p className="text-white/90 text-lg md:text-xl font-normal leading-relaxed">
                            Des professionnels qualifiés pour un intérieur impeccable. Simple, rapide et fiable. Réservez votre prestation en moins de 2 minutes.
                        </p>
<div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition-all">
                                Réserver maintenant
                            </button>
<button className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all">
                                Voir les tarifs
                            </button>
</div>
</div>
</div>
</section>
<div className="max-w-7xl mx-auto px-6 py-12">
{/*  How it Works  */}
<section className="mb-20">
<h2 className="text-slate-900 dark:text-white text-3xl font-bold mb-10 text-center">Comment ça marche</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="flex flex-col items-center text-center p-6 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
<div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
<span className="material-symbols-outlined text-3xl">event_available</span>
</div>
<h3 className="text-xl font-bold mb-3">Réservez en ligne</h3>
<p className="text-slate-600 dark:text-slate-400">Choisissez une date, l'heure et la fréquence qui vous conviennent le mieux.</p>
</div>
<div className="flex flex-col items-center text-center p-6 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
<div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
<span className="material-symbols-outlined text-3xl">verified_user</span>
</div>
<h3 className="text-xl font-bold mb-3">Un expert intervient</h3>
<p className="text-slate-600 dark:text-slate-400">Notre agent rigoureusement sélectionné arrive avec tout le matériel nécessaire.</p>
</div>
<div className="flex flex-col items-center text-center p-6 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
<div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
<span className="material-symbols-outlined text-3xl">mood</span>
</div>
<h3 className="text-xl font-bold mb-3">Profitez de votre temps</h3>
<p className="text-slate-600 dark:text-slate-400">Détendez-vous et retrouvez un foyer parfaitement propre et sain.</p>
</div>
</div>
</section>
{/*  Pricing Section  */}
<section className="mb-20">
<h2 className="text-slate-900 dark:text-white text-3xl font-bold mb-10">Tarification et Détails</h2>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
{/*  Card 1  */}
<div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 flex flex-col h-full">
<div className="p-6 border-b border-slate-100 dark:border-slate-800">
<h3 className="text-xl font-bold text-slate-900 dark:text-white">Ménage Régulier</h3>
<p className="text-slate-500 text-sm mt-1">Entretien courant de votre maison</p>
<div className="mt-4">
<span className="text-3xl font-black text-primary">25€</span>
<span className="text-slate-500">/ heure</span>
</div>
</div>
<div className="p-6 flex-1">
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
<span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                                        Dépoussiérage et sols
                                    </li>
<li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
<span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                                        Nettoyage cuisine et sanitaires
                                    </li>
<li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
<span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                                        Rangement rapide
                                    </li>
</ul>
</div>
<div className="p-6 bg-slate-50 dark:bg-slate-800/50">
<button className="w-full py-3 bg-white dark:bg-slate-700 border text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all border-[#1abc9c] text-[#1abc9c] border-[#1abc9c]">Choisir ce forfait</button>
</div>
</div>
{/*  Card 2  */}
<div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border-2 relative flex flex-col h-full shadow-xl scale-105 z-10 border-[#1abc9c]">
<div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold uppercase px-3 py-1 rounded-bl-lg">Populaire</div>
<div className="p-6 border-b border-slate-100 dark:border-slate-800">
<h3 className="text-xl font-bold text-slate-900 dark:text-white">Nettoyage Profond</h3>
<p className="text-slate-500 text-sm mt-1">Remise à neuf complète de l'intérieur</p>
<div className="mt-4">
<span className="text-3xl font-black text-primary">35€</span>
<span className="text-slate-500">/ heure</span>
</div>
</div>
<div className="p-6 flex-1">
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
<span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                                        Tout le ménage régulier
                                    </li>
<li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
<span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                                        Nettoyage intérieur placards
                                    </li>
<li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
<span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                                        Lavage des vitres inclus
                                    </li>
<li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
<span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                                        Détartrage complet
                                    </li>
</ul>
</div>
<div className="p-6 bg-primary/5 dark:bg-primary/10">
<button className="w-full py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all shadow-md">Réserver maintenant</button>
</div>
</div>
{/*  Card 3  */}
<div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 flex flex-col h-full">
<div className="p-6 border-b border-slate-100 dark:border-slate-800">
<h3 className="text-xl font-bold text-slate-900 dark:text-white">Nettoyage Fin de Bail</h3>
<p className="text-slate-500 text-sm mt-1">Garanti pour votre état des lieux</p>
<div className="mt-4">
<span className="text-3xl font-black text-primary">45€</span>
<span className="text-slate-500">/ heure</span>
</div>
</div>
<div className="p-6 flex-1">
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
<span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                                        Nettoyage spécialisé complet
                                    </li>
<li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
<span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                                        Nettoyage des murs et plinthes
                                    </li>
<li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
<span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                                        Prêt pour la remise des clés
                                    </li>
</ul>
</div>
<div className="p-6 bg-slate-50 dark:bg-slate-800/50">
<button className="w-full py-3 bg-white dark:bg-slate-700 border text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all border-[#1abc9c] text-[#1abc9c] border-[#1abc9c]">Demander un devis</button>
</div>
</div>
</div>
</section>
{/*  Best Agents Section  */}
<section className="mb-20">
<div className="flex justify-between items-end mb-10">
<div>
<h2 className="text-slate-900 dark:text-white text-3xl font-bold">Nos meilleurs agents</h2>
<p className="text-slate-500 mt-2">Des professionnels qualifiés et évalués par la communauté.</p>
</div>
<button className="text-primary font-bold hover:underline">Voir tous les agents</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/*  Agent 1  */}
<div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm text-center">
<div className="relative w-24 h-24 mx-auto mb-4">
<img alt="Cleaning agent profile" className="w-full h-full object-cover rounded-full" data-alt="Female cleaning professional smiling" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWh1ttR_VMj9Wsv8HE5YALZZ1OXvvhzdY0XYmedNvWv8hkGo6pnbsVBcpRws3SDuf1hPaDjv3Hr0AVghrN4gstfJ7YUkit7W3hWXrreE3Ez1843XC0-DDI5ImzOTDM2ylCoKzN8hPZk2JvfkaUTv30ekVpBXG1wOd_I7Zz4IWU5amM2PIPVNeK-PCd9qkGxqBE_XrP23dehr6s9-ezZsOX22KIsURu7DKSLt43twX3GNjywuiSwNZYnEzgveJxsKB6P-DZyAk6iOfn"/>
<div className="absolute bottom-0 right-0 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></div>
</div>
<h4 className="text-lg font-bold text-slate-900 dark:text-white">Sarah L.</h4>
<div className="flex items-center justify-center gap-1 text-yellow-400 my-2">
<span className="material-symbols-outlined text-lg fill-1">star</span>
<span className="material-symbols-outlined text-lg fill-1">star</span>
<span className="material-symbols-outlined text-lg fill-1">star</span>
<span className="material-symbols-outlined text-lg fill-1">star</span>
<span className="material-symbols-outlined text-lg fill-1">star</span>
<span className="text-slate-600 dark:text-slate-400 text-xs font-bold ml-1">(124 avis)</span>
</div>
<p className="text-slate-500 text-sm mb-6 leading-relaxed">
                                "Spécialiste du nettoyage écologique avec 5 ans d'expérience. Ponctuelle et minutieuse."
                            </p>
<button className="w-full py-2 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all">Réserver Sarah</button>
</div>
{/*  Agent 2  */}
<div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm text-center">
<div className="relative w-24 h-24 mx-auto mb-4">
<img alt="Cleaning agent profile" className="w-full h-full object-cover rounded-full" data-alt="Male cleaning professional professional look" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADqnEZaURUKtXbTHNgpRL48Wz-Ng1H2k9UKfdAg3zazBXcisDzhWoX0iISTGDH41lC4OHDUiNe8uT9WmQPp-aRlIQdDNKrasTsP4OIKmaZmCXUFPsHvBxk1YNA0IJKtLj8kKhNlhy9_GLBw9fYjeO3cMhWW15sltrnkK1utA8W6B0laKQZmcxblVhV_1lFr1OqzbbWMHqzyz_ID78upyK0N1On8Sc8JCoKB6Svbswnjq7kjFa-G3VTkn1ZvNBdrTkSQRm0VjJc0VSz"/>
<div className="absolute bottom-0 right-0 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></div>
</div>
<h4 className="text-lg font-bold text-slate-900 dark:text-white">Marc D.</h4>
<div className="flex items-center justify-center gap-1 text-yellow-400 my-2">
<span className="material-symbols-outlined text-lg fill-1">star</span>
<span className="material-symbols-outlined text-lg fill-1">star</span>
<span className="material-symbols-outlined text-lg fill-1">star</span>
<span className="material-symbols-outlined text-lg fill-1">star</span>
<span className="material-symbols-outlined text-lg fill-1">star</span>
<span className="text-slate-600 dark:text-slate-400 text-xs font-bold ml-1">(89 avis)</span>
</div>
<p className="text-slate-500 text-sm mb-6 leading-relaxed">
                                "Expert en nettoyage de fin de chantier et vitrerie. Travail efficace et soigné."
                            </p>
<button className="w-full py-2 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all">Réserver Marc</button>
</div>
{/*  Agent 3  */}
<div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm text-center">
<div className="relative w-24 h-24 mx-auto mb-4">
<img alt="Cleaning agent profile" className="w-full h-full object-cover rounded-full" data-alt="Young female professional cleaning staff" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7jb-_A_NzKhw9TJVBIh-gPQmNOMJ95efn0RTWK3fX86OevMfu9rkXsN3IBDQL3PkPpRIe1iVintiLKji2t4laZJ9Sbe4G_NRHXgLdZ12RkUNU8zoy8OO0Z6ettROfJKk2qF2EAm2QZQ5F7YPd6tTzWd70GeYNTRmGrHbC01GjyvNeeYyRWlitdIDPMCzGw8h46OFgEWsavlqTiq4nNelrjP1quRH7T_qEjfWSi6YUTq7Z0audFK4WXkyh289q-v2KN9_4UfrmbWVo"/>
<div className="absolute bottom-0 right-0 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></div>
</div>
<h4 className="text-lg font-bold text-slate-900 dark:text-white">Inès K.</h4>
<div className="flex items-center justify-center gap-1 text-yellow-400 my-2">
<span className="material-symbols-outlined text-lg fill-1">star</span>
<span className="material-symbols-outlined text-lg fill-1">star</span>
<span className="material-symbols-outlined text-lg fill-1">star</span>
<span className="material-symbols-outlined text-lg fill-1">star</span>
<span className="material-symbols-outlined text-lg fill-1">star</span>
<span className="text-slate-600 dark:text-slate-400 text-xs font-bold ml-1">(210 avis)</span>
</div>
<p className="text-slate-500 text-sm mb-6 leading-relaxed">
                                "Passionnée par l'organisation et le rangement. Je transforme votre foyer en havre de paix."
                            </p>
<button className="w-full py-2 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all">Réserver Inès</button>
</div>
</div>
</section>
{/*  FAQ Section  */}
<section className="mb-20">
<h2 className="text-slate-900 dark:text-white text-3xl font-bold mb-10 text-center">Questions fréquentes</h2>
<div className="max-w-3xl mx-auto space-y-4">
<div className="border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden">
<button className="w-full px-6 py-4 text-left flex justify-between items-center bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
<span className="font-semibold">Dois-je être présent lors du ménage ?</span>
<span className="material-symbols-outlined">expand_more</span>
</button>
</div>
<div className="border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden">
<button className="w-full px-6 py-4 text-left flex justify-between items-center bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
<span className="font-semibold">Les produits de nettoyage sont-ils inclus ?</span>
<span className="material-symbols-outlined">expand_more</span>
</button>
</div>
<div className="border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden">
<button className="w-full px-6 py-4 text-left flex justify-between items-center bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
<span className="font-semibold">Comment se passe le paiement ?</span>
<span className="material-symbols-outlined">expand_more</span>
</button>
</div>
<div className="border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden">
<button className="w-full px-6 py-4 text-left flex justify-between items-center bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
<span className="font-semibold">Puis-je annuler ou reporter une session ?</span>
<span className="material-symbols-outlined">expand_more</span>
</button>
</div>
</div>
</section>
</div>
</main>
{/*  Footer  */}
<footer className="bg-slate-900 text-slate-300 py-12 px-6 md:px-20 border-t border-slate-800">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-3 text-white mb-6">
<span className="material-symbols-outlined text-3xl text-primary">cleaning_services</span>
<h2 className="text-xl font-bold">MénagePro</h2>
</div>
<p className="text-sm leading-relaxed mb-6">
                        La plateforme de confiance pour trouver des professionnels du nettoyage près de chez vous.
                    </p>
<div className="flex gap-4">
<a className="hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
<a className="hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">mail</span></a>
<a className="hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">call</span></a>
</div>
</div>
<div>
<h4 className="text-white font-bold mb-6">Services</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-primary transition-colors" href="#">Ménage régulier</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Nettoyage en profondeur</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Repassage à domicile</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Bureaux &amp; locaux</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold mb-6">Société</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-primary transition-colors" href="#">�DA propos</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Devenir agent</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold mb-6">Informations</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-primary transition-colors" href="#">Conditions générales</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Confidentialité</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Assurances</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Centre d'aide</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 text-center text-xs">
<p>© 2024 MénagePro - Tous droits réservés.</p>
</div>
</footer>
</div>

    </>
  );
};

export default DTailsDuServiceMenage;
