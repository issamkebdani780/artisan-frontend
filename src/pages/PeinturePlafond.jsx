import React from 'react';

const PeinturePlafond = () => {
  return (
    <>
      
<div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
{/*  Header  */}
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/10 px-6 py-3 bg-white dark:bg-slate-900 sticky top-0 z-50">
<div className="flex items-center gap-8">
<div className="flex items-center gap-3 text-primary">
<span className="material-symbols-outlined text-3xl font-bold">format_paint</span>
<h2 className="text-slate-900 dark:text-white text-xl font-black leading-tight tracking-tight">PlafondPro</h2>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary" href="#">Expertise</a>
<a className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary" href="#">Équipement</a>
<a className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary" href="#">Tarifs</a>
<a className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary" href="#">Peintres</a>
</nav>
</div>
<div className="flex flex-1 justify-end gap-6 items-center">
<label className="hidden lg:flex flex-col min-w-40 h-10 max-w-64">
<div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-slate-100 dark:bg-slate-800">
<div className="text-slate-400 flex items-center justify-center pl-4">
<span className="material-symbols-outlined text-xl">search</span>
</div>
<input className="form-input flex w-full min-w-0 flex-1 border-none bg-transparent focus:ring-0 text-sm placeholder:text-slate-500" placeholder="Rechercher un service..." value=""/>
</div>
</label>
<div className="flex gap-2">
<button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
<span className="material-symbols-outlined">account_circle</span>
</button>
</div>
<div className="bg-primary/20 rounded-full size-10 border-2 border-primary" data-alt="User profile avatar placeholder"></div>
</div>
</header>
<div className="flex flex-1">
{/*  Sidebar  */}
<aside className="hidden lg:flex w-72 flex-col justify-between border-r border-primary/10 bg-white dark:bg-slate-900 p-4 shrink-0">
<div className="flex flex-col gap-6">
<div className="flex items-center gap-3 px-2">
<div className="size-10 rounded-xl bg-primary flex items-center justify-center text-white">
<span className="material-symbols-outlined">layers</span>
</div>
<div className="flex flex-col">
<h1 className="text-slate-900 dark:text-white text-sm font-bold">Services Peinture</h1>
<p className="text-slate-500 text-xs font-medium uppercase tracking-wider">Expertise Plafonds</p>
</div>
</div>
<nav className="flex flex-col gap-1">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-primary/10 hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined">home</span>
<p className="text-sm font-semibold">Accueil</p>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary" href="#">
<span className="material-symbols-outlined">brush</span>
<p className="text-sm font-semibold">Peinture Plafond</p>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-primary/10 hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined">grid_view</span>
<p className="text-sm font-semibold">Plâtrerie</p>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-primary/10 hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined">wallpaper</span>
<p className="text-sm font-semibold">Revêtements</p>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-primary/10 hover:text-primary transition-colors mt-4" href="#">
<span className="material-symbols-outlined">settings</span>
<p className="text-sm font-semibold">Paramètres</p>
</a>
</nav>
</div>
<button className="w-full py-3 bg-primary text-white rounded-lg font-bold text-sm shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-lg">description</span>
                        Demander un devis
                    </button>
</aside>
{/*  Main Content  */}
<main className="flex-1 flex flex-col overflow-y-auto">
{/*  Hero Section  */}
<div className="p-6">
<div className="relative min-h-[320px] rounded-2xl overflow-hidden bg-primary flex flex-col justify-end p-8" data-alt="Modern renovated living room with flawless white ceiling" style='background-image: linear-gradient(180deg, rgba(139, 92, 246, 0.2) 0%, rgba(30, 41, 59, 0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCYv3GE9aftmVt5GSzl32GnXwJZyvBhB5esBhaHFhWGG3xZfzF7Kb0dpV3xuhtGEq4MyXKkJfWsQdzIoCKgbsQ6rFAcA5c6L3SGqnWvzDyS26_WZw8rln5L7_uddf0gjfNf5O4fABwwpEiDNb7zf6CFBePxR86xBSXxOTz3QB7H2vuNxOoaUwdMJdYQAYTylxm2jlTCrwby1hXqWCXyBIkRmHMORi8pixsPfaGu6eTTEId_8YsoypD6eiLCSEomIE2q_V_l31yoC_rv"); background-size: cover;'>
<div className="max-w-2xl">
<div className="flex flex-wrap gap-2 mb-4">
<span className="px-3 py-1 bg-primary/40 backdrop-blur-md text-white text-xs font-bold rounded-full uppercase tracking-widest">Premium Service</span>
<span className="px-3 py-1 bg-green-500/40 backdrop-blur-md text-white text-xs font-bold rounded-full uppercase tracking-widest">Certifié NF</span>
</div>
<h1 className="text-white text-4xl md:text-5xl font-black leading-tight mb-4">L'excellence pour vos plafonds</h1>
<p className="text-slate-200 text-lg font-medium max-w-lg mb-6">Finitions haute définition sans aucune trace de rouleau. Une expertise technique pour transformer vos espaces.</p>
<div className="flex gap-4">
<button className="px-6 py-3 bg-white text-primary rounded-xl font-bold shadow-xl">Découvrir l'offre</button>
<button className="px-6 py-3 bg-transparent border border-white/40 text-white rounded-xl font-bold hover:bg-white/10">Calculer mon projet</button>
</div>
</div>
</div>
</div>
{/*  Breadcrumbs  */}
<div className="px-6 py-2 flex items-center gap-2 text-sm text-slate-500">
<a className="hover:text-primary" href="#">Accueil</a>
<span className="material-symbols-outlined text-xs">chevron_right</span>
<a className="hover:text-primary" href="#">Peinture</a>
<span className="material-symbols-outlined text-xs">chevron_right</span>
<span className="text-slate-900 dark:text-white font-semibold">Plafonds</span>
</div>
{/*  Expertise & Equipment  */}
<div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
<section className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-primary/5">
<div className="flex items-center gap-4 mb-6">
<div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
<span className="material-symbols-outlined text-2xl font-bold">verified</span>
</div>
<div>
<h3 className="text-xl font-black">Expertise Certifiée</h3>
<p className="text-slate-500 text-sm">Normes de qualité et labels professionnels</p>
</div>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary text-xl">check_circle</span>
<div>
<p className="font-bold text-slate-800 dark:text-slate-200">Préparation des supports</p>
<p className="text-sm text-slate-500">Nettoyage, rebouchage et ponçage intégral pour une surface miroir.</p>
</div>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary text-xl">check_circle</span>
<div>
<p className="font-bold text-slate-800 dark:text-slate-200">Peinture "Sans Trace"</p>
<p className="text-sm text-slate-500">Application croisée optimisée pour un aspect mat profond ou satiné régulier.</p>
</div>
</li>
</ul>
</section>
<section className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-primary/5">
<div className="flex items-center gap-4 mb-6">
<div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
<span className="material-symbols-outlined text-2xl font-bold">construction</span>
</div>
<div>
<h3 className="text-xl font-black">Matériel Spécialisé</h3>
<p className="text-slate-500 text-sm">Technologie de pointe pour un rendu parfait</p>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-primary/5">
<span className="material-symbols-outlined text-primary mb-2">sprinkler</span>
<p className="font-bold text-sm">Station Airless</p>
<p className="text-xs text-slate-500">Projection haute pression pour zéro grain.</p>
</div>
<div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-primary/5">
<span className="material-symbols-outlined text-primary mb-2">precision_manufacturing</span>
<p className="font-bold text-sm">Ponceuse Girafe</p>
<p className="text-xs text-slate-500">Ponçage sans poussière avec aspiration.</p>
</div>
</div>
</section>
</div>
{/*  Pricing Section  */}
<div className="px-6 pb-6">
<section className="bg-primary/5 dark:bg-primary/10 p-8 rounded-3xl">
<h3 className="text-2xl font-black mb-6 text-center">Traitements Spécifiques &amp; Tarifs</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg border-b-4 border-primary">
<h4 className="font-black text-lg mb-2">Rafraîchissement</h4>
<p className="text-slate-500 text-sm mb-4">Pour plafonds sains sans dégâts majeurs.</p>
<div className="text-3xl font-black text-primary mb-4">18€ <span className="text-sm text-slate-400">/ m²</span></div>
<ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400">
<li>• Lessivage léger</li>
<li>• 2 couches mat</li>
<li>• Protection sol incluse</li>
</ul>
</div>
<div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg border-b-4 border-orange-500">
<h4 className="font-black text-lg mb-2">Traitement Fumée</h4>
<p className="text-slate-500 text-sm mb-4">Isolation des traces de nicotine et suie.</p>
<div className="text-3xl font-black text-orange-500 mb-4">26€ <span className="text-sm text-slate-400">/ m²</span></div>
<ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400">
<li>• Impression isolante solvantée</li>
<li>• Neutralisation des odeurs</li>
<li>• Finition haute opacité</li>
</ul>
</div>
<div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg border-b-4 border-red-500">
<h4 className="font-black text-lg mb-2">Sinistre / Humidité</h4>
<p className="text-slate-500 text-sm mb-4">Après dégâts des eaux ou taches rebelles.</p>
<div className="text-3xl font-black text-red-500 mb-4">32€ <span className="text-sm text-slate-400">/ m²</span></div>
<ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400">
<li>• Traitement anti-salpêtre</li>
<li>• Durcisseur de fonds</li>
<li>• Peinture hydrofuge</li>
</ul>
</div>
</div>
</section>
</div>
{/*  Expert Painters  */}
<div className="px-6 pb-12">
<div className="flex items-center justify-between mb-8">
<div>
<h3 className="text-2xl font-black">Nos Maîtres Peintres</h3>
<p className="text-slate-500">Experts sélectionnés avec plus de 10 ans d'expérience</p>
</div>
<button className="text-primary font-bold flex items-center gap-1 hover:underline">
                                Voir tous les experts <span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
{/*  Painter 1  */}
<div className="group bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-primary/5 hover:border-primary transition-all">
<div className="relative mb-4">
<div className="size-20 rounded-full bg-slate-200 mx-auto overflow-hidden border-2 border-primary/20" data-alt="Portrait of a professional painter wearing overalls">
<img alt="Julien" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAetFLRtfPIXjfyeYFeWWrbRgOxeI8MIR_qgJssNmew4wJfEUVKyVYjfAh75notM3RSAe7jUjKRcIuwpNTAl__0uRc3sMYvYuAiOYq72l-x0JlPrRV-HNHXct0FI_FaZzXL9i5tSl94qx7NR_U0kMJDGF4--td7e0FZ6p8GRLS9SIolMwsjYtIUa6RsGfeWJYl96HviyEgRKdFkYHHlyPbqSdVrw3g-WpmEmQnPRAt7oTuAEmaj2jzUFJNGMy-rBsTipR9vo0dvoljC"/>
</div>
<div className="absolute -bottom-1 right-1/2 translate-x-12 bg-green-500 size-4 rounded-full border-2 border-white"></div>
</div>
<div className="text-center">
<h4 className="font-black">Julien Morel</h4>
<p className="text-primary text-xs font-bold uppercase tracking-wider mb-3">Spécialiste Airless</p>
<div className="flex items-center justify-center gap-1 text-orange-400 mb-4">
<span className="material-symbols-outlined fill-1 text-sm">star</span>
<span className="material-symbols-outlined fill-1 text-sm">star</span>
<span className="material-symbols-outlined fill-1 text-sm">star</span>
<span className="material-symbols-outlined fill-1 text-sm">star</span>
<span className="material-symbols-outlined fill-1 text-sm">star</span>
<span className="text-slate-400 text-xs ml-1">(128)</span>
</div>
<button className="w-full py-2 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg text-xs font-bold group-hover:bg-primary group-hover:text-white transition-all">Réserver Julien</button>
</div>
</div>
{/*  Painter 2  */}
<div className="group bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-primary/5 hover:border-primary transition-all">
<div className="relative mb-4">
<div className="size-20 rounded-full bg-slate-200 mx-auto overflow-hidden border-2 border-primary/20" data-alt="Female professional painter with protective gear">
<img alt="Sarah" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRzn-nomhJOl7jvfo8dz2vnXHid_ELZaOTGl_7J5fwz6s4eI2AaS1DC3xn66G0pMoDammUbkECNVGZaqvNzpFcxOU_QMoC3k7R9FkimkEx19nUM3XloxnytrkKrurbDPUZX-oqRsmi0ged15cmQMaapOkEpbe4B1FmzH0E7u-nqKvQQKsNnH6eMkon9-g5X3p5WrjNeaOwSd5gUo7iVniM9-KVPFHRMw6qn1yOrKuvKmpx_59i3CNGBQoApZ8D-3Q25mqAo4lvy07V"/>
</div>
<div className="absolute -bottom-1 right-1/2 translate-x-12 bg-green-500 size-4 rounded-full border-2 border-white"></div>
</div>
<div className="text-center">
<h4 className="font-black">Sarah Martin</h4>
<p className="text-primary text-xs font-bold uppercase tracking-wider mb-3">Experte Finition Mat</p>
<div className="flex items-center justify-center gap-1 text-orange-400 mb-4">
<span className="material-symbols-outlined fill-1 text-sm">star</span>
<span className="material-symbols-outlined fill-1 text-sm">star</span>
<span className="material-symbols-outlined fill-1 text-sm">star</span>
<span className="material-symbols-outlined fill-1 text-sm">star</span>
<span className="material-symbols-outlined fill-1 text-sm">star</span>
<span className="text-slate-400 text-xs ml-1">(94)</span>
</div>
<button className="w-full py-2 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg text-xs font-bold group-hover:bg-primary group-hover:text-white transition-all">Réserver Sarah</button>
</div>
</div>
{/*  Painter 3  */}
<div className="group bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-primary/5 hover:border-primary transition-all">
<div className="relative mb-4">
<div className="size-20 rounded-full bg-slate-200 mx-auto overflow-hidden border-2 border-primary/20" data-alt="Experienced craftsman in a workshop">
<img alt="Marc" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxOuT6Xye85Ge7G1EwTexUl-lTOneWfiPa5wXksJwY1dTi8AtSGWHwGKSuIOYoT9baoviObZQVLLh2tw5bMM9GbfcLqTGDtoRoqcT8cO2Oi8dJh-0oREa3RYJDa3Vo07am9oVYwArlkd0ev1D2lojLIoxaF9vsKjQWaXtI2dxyHuSANME7WN9rGa07O0wqzAyS3mJ2EcBjaPxCiTEOM_sN57OIcwZTGtkT6R5WFUhR2gcwtkS575WsYuT1wW7Htgf0hwxS3bsYZPji"/>
</div>
<div className="absolute -bottom-1 right-1/2 translate-x-12 bg-green-500 size-4 rounded-full border-2 border-white"></div>
</div>
<div className="text-center">
<h4 className="font-black">Marc Lefebvre</h4>
<p className="text-primary text-xs font-bold uppercase tracking-wider mb-3">Plafonds Anciens</p>
<div className="flex items-center justify-center gap-1 text-orange-400 mb-4">
<span className="material-symbols-outlined fill-1 text-sm">star</span>
<span className="material-symbols-outlined fill-1 text-sm">star</span>
<span className="material-symbols-outlined fill-1 text-sm">star</span>
<span className="material-symbols-outlined fill-1 text-sm">star</span>
<span className="material-symbols-outlined fill-1 text-sm">star_half</span>
<span className="text-slate-400 text-xs ml-1">(215)</span>
</div>
<button className="w-full py-2 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg text-xs font-bold group-hover:bg-primary group-hover:text-white transition-all">Réserver Marc</button>
</div>
</div>
{/*  Painter 4  */}
<div className="group bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-primary/5 hover:border-primary transition-all">
<div className="relative mb-4">
<div className="size-20 rounded-full bg-slate-200 mx-auto overflow-hidden border-2 border-primary/20" data-alt="Skilled young professional painter">
<img alt="Karim" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4D8z2IOYCUVUUwGpuhEuKgQlAkhNVrInsfxr1z70wrccfT0e6KAARjXW_2kMk3-ilDZlQoezYjokjC8sbRXmCLsAQ52Leaoq2_arswqVu8Dg59hfpszydAEK6NwdpMj8agkbcy_ms1ITvvfbpkhfI-bgCud9_FwY2y1Yuh9kMXUmwBvn5144YpvubcfvUG0rrNn2YFDwXK6rsGiciaEu3WY1mN2pGi-yHcHXeZHijA3kdaES3CTjSXdB7RLP_mJLpfgwuVeKRrtB1"/>
</div>
<div className="absolute -bottom-1 right-1/2 translate-x-12 bg-green-500 size-4 rounded-full border-2 border-white"></div>
</div>
<div className="text-center">
<h4 className="font-black">Karim Bensaid</h4>
<p className="text-primary text-xs font-bold uppercase tracking-wider mb-3">Vitesse &amp; Précision</p>
<div className="flex items-center justify-center gap-1 text-orange-400 mb-4">
<span className="material-symbols-outlined fill-1 text-sm">star</span>
<span className="material-symbols-outlined fill-1 text-sm">star</span>
<span className="material-symbols-outlined fill-1 text-sm">star</span>
<span className="material-symbols-outlined fill-1 text-sm">star</span>
<span className="material-symbols-outlined fill-1 text-sm">star</span>
<span className="text-slate-400 text-xs ml-1">(67)</span>
</div>
<button className="w-full py-2 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg text-xs font-bold group-hover:bg-primary group-hover:text-white transition-all">Réserver Karim</button>
</div>
</div>
</div>
</div>
</main>
</div>
</div>
</div>

    </>
  );
};

export default PeinturePlafond;
