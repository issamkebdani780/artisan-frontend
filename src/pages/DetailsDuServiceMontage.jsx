import React from 'react';

const DetailsDuServiceMontage = () => {
  return (
    <>
      
<div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
{/*  Navigation  */}
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 px-4 md:px-10 lg:px-40 py-3 bg-white sticky top-0 z-50">
<div className="flex items-center gap-8">
<div className="flex items-center gap-4 text-primary">
<div className="size-6">
<svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z"></path>
</svg>
</div>
<h2 className="text-slate-900 text-lg font-bold leading-tight tracking-[-0.015em]">TaskService</h2>
</div>
<nav className="hidden md:flex items-center gap-9">
<a className="text-slate-700 text-sm font-medium hover:text-primary" href="#">Services</a>
<a className="text-slate-700 text-sm font-medium hover:text-primary" href="#">Devenir Taskeur</a>
<a className="text-slate-700 text-sm font-medium hover:text-primary" href="#">Connexion</a>
</nav>
</div>
<div className="flex flex-1 justify-end gap-4 md:gap-8">
<label className="hidden sm:flex flex-col min-w-40 !h-10 max-w-64">
<div className="flex w-full flex-1 items-stretch rounded-lg h-full">
<div className="text-slate-500 flex border-none bg-slate-100 items-center justify-center pl-4 rounded-l-lg">
<span className="material-symbols-outlined text-[20px]">search</span>
</div>
<input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-slate-900 focus:outline-0 focus:ring-0 border-none bg-slate-100 h-full placeholder:text-slate-500 px-4 pl-2 text-base font-normal" placeholder="Rechercher un service" value=""/>
</div>
</label>
<button className="flex min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold tracking-[0.015em] hover:bg-primary/90">
                    S'inscrire
                </button>
</div>
</header>
<main className="flex-1">
<div className="px-4 md:px-10 lg:px-40 py-5">
<div className="layout-content-container flex flex-col max-w-[1200px] mx-auto flex-1">
{/*  Hero Section  */}
<section className="flex flex-col gap-6 py-6 md:py-10 lg:flex-row items-center">
<div className="w-full lg:w-1/2 aspect-video bg-cover bg-center rounded-xl shadow-lg order-2 lg:order-1" data-alt="Professional handyman assembling a modern wooden shelf in a bright living room" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDCGmAK_z_c4m-VNJuPLC9eHLAEk-jYqKv8E9n-LlrzrWdBeYEah2vWSf6POGEwDw66t4TA4kd9goe9O4_TEFnkvVJdKepNgf2-W1gK__TFekiuKwoRt6nNVohJVzEgNqR_7g6hOqQlqvfruyfYyYNogwIaRAdDvhJ9dez1vZOXt-DRCk6xSiYEPYEGZv32TuqosE00HSsi0kelmpSFwgYtLZtCGnqnfqmE0RBq_De3MVTKXFkhY12LooXFuglNLZrNhTRPbK85L_eN");'>
</div>
<div className="flex flex-col gap-6 w-full lg:w-1/2 lg:pl-12 order-1 lg:order-2">
<div className="flex flex-col gap-3 text-left">
<span className="text-primary font-bold text-sm tracking-wider uppercase">Installation Ã  domicile</span>
<h1 className="text-slate-900 text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                                    Montage de meubles
                                </h1>
<p className="text-slate-600 text-lg leading-relaxed">
                                    Confiez le montage de vos meubles Ã  des professionnels qualifiÃ©s. Qu'il s'agisse d'IKEA, de Conforama ou de meubles sur mesure, nous sommes lÃ  pour un rÃ©sultat parfait, sans stress.
                                </p>
</div>
<div className="flex flex-wrap gap-4">
<button className="flex-1 sm:flex-none min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold tracking-[0.015em] hover:bg-primary/90">
                                    RÃ©server maintenant
                                </button>
<button className="flex-1 sm:flex-none min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 border-2 border-primary text-primary text-base font-bold hover:bg-primary/5">
                                    Voir les tarifs
                                </button>
</div>
</div>
</section>
{/*  How it works  */}
<section className="py-12 border-t border-slate-200">
<h2 className="text-slate-900 text-3xl font-bold leading-tight tracking-tight mb-8">Comment Ã§a marche</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="bg-primary/10 text-primary w-12 h-12 rounded-full flex items-center justify-center">
<span className="material-symbols-outlined text-2xl">calendar_month</span>
</div>
<div className="flex flex-col gap-2">
<h3 className="text-slate-900 text-xl font-bold">1. RÃ©servez</h3>
<p className="text-slate-600 text-sm leading-normal">DÃ©crivez votre projet et choisissez une date qui vous convient. C'est rapide et simple.</p>
</div>
</div>
<div className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="bg-primary/10 text-primary w-12 h-12 rounded-full flex items-center justify-center">
<span className="material-symbols-outlined text-2xl">person_search</span>
</div>
<div className="flex flex-col gap-2">
<h3 className="text-slate-900 text-xl font-bold">2. Choisissez</h3>
<p className="text-slate-600 text-sm leading-normal">SÃ©lectionnez parmi nos experts locaux basÃ©s sur leurs avis et leurs tarifs transparents.</p>
</div>
</div>
<div className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="bg-primary/10 text-primary w-12 h-12 rounded-full flex items-center justify-center">
<span className="material-symbols-outlined text-2xl">verified</span>
</div>
<div className="flex flex-col gap-2">
<h3 className="text-slate-900 text-xl font-bold">3. C'est fait</h3>
<p className="text-slate-600 text-sm leading-normal">Le Taskeur arrive avec ses outils et monte vos meubles. Payez en toute sÃ©curitÃ© via l'app.</p>
</div>
</div>
</div>
</section>
{/*  Pricing & Details  */}
<section className="py-12 bg-slate-50 rounded-2xl p-8 mb-12">
<div className="max-w-3xl">
<h2 className="text-slate-900 text-3xl font-bold leading-tight mb-4">Tarification et DÃ©tails</h2>
<p className="text-slate-600 mb-8">Nous offrons une tarification transparente pour tous vos besoins de montage.</p>
<div className="space-y-4">
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-slate-100">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary">schedule</span>
<span className="font-medium">Taux horaire moyen</span>
</div>
<span className="text-primary font-bold">Ã€ partir de 35â‚¬ / h</span>
</div>
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-slate-100">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary">package_2</span>
<span className="font-medium">Forfait Commode / Petit Meuble</span>
</div>
<span className="text-primary font-bold">DÃ¨s 45â‚¬</span>
</div>
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-slate-100">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary">dresser</span>
<span className="font-medium">Forfait Grande Armoire (3+ portes)</span>
</div>
<span className="text-primary font-bold">DÃ¨s 120â‚¬</span>
</div>
</div>
</div>
</section>
{/*  Top Rated Artisans  */}
<section className="py-12">
<div className="flex items-center justify-between mb-8">
<h2 className="text-slate-900 text-3xl font-bold">Nos meilleurs artisans</h2>
<a className="text-primary font-semibold flex items-center gap-1 hover:underline" href="#">
                                Voir tous les profils <span className="material-symbols-outlined">chevron_right</span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{/*  Artisan 1  */}
<div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
<div className="p-6">
<div className="flex items-center gap-4 mb-4">
<div className="w-16 h-16 rounded-full bg-slate-200 bg-cover bg-center" data-alt="Portrait of a male professional tasker" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCtlq_OhQnFqjnffKXTa3Gjql8JPkxp-kdoXWcQoNvsCTXifBkVyiaJN4Uhlsfo2-1E0MyM6qA-dkpgsdkjOKet0Nhj063NeitY3fkkcNH3B65_26AHUo88gyu-c1tTtw6c5YrGVotoCx95Evru-3M-adnI4zuNVH-mnA57h88A6BQ2owzmKOXPDXhiJxBdmpnwGnYv7S7Lv1G2SD8Nfyg3T3m2tjInGEl1__D92QJrrW3EJoCDRdrfWtiXAG-L3v8PurWz2edZYliF");'></div>
<div>
<h3 className="font-bold text-lg">Thomas B.</h3>
<div className="flex items-center text-yellow-500">
<span className="material-symbols-outlined text-[18px] fill-current">star</span>
<span className="text-slate-900 ml-1 font-bold">4.9</span>
<span className="text-slate-500 text-sm font-normal ml-1">(124 avis)</span>
</div>
</div>
</div>
<p className="text-slate-600 text-sm mb-4 line-clamp-2">"Expert en montage IKEA avec plus de 5 ans d'expÃ©rience. Rapide et soigneux."</p>
<div className="flex items-center justify-between pt-4 border-t border-slate-100">
<span className="font-bold text-primary">38â‚¬ / h</span>
<button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary/90">RÃ©server</button>
</div>
</div>
</div>
{/*  Artisan 2  */}
<div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
<div className="p-6">
<div className="flex items-center gap-4 mb-4">
<div className="w-16 h-16 rounded-full bg-slate-200 bg-cover bg-center" data-alt="Portrait of a female professional tasker" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuARMjgiMBywd3EgzPElHqIB9W2FYDRk-7CCWhJHVaax5dkDvS1uVFfAWFJuFeZDUPOrgv3Ys7ldjHDQgwWYYERvreeapjbfWeKQKL02Jr_I71Q-Kc5rvDqb_KVMbNiljwj7oAaMI-QOZQXPg8Qwk0IYRCI2VWKot3j6CFiEV9sYVTYfLnnzEl86V-0YZ0WbdusGEgu5D-q4lM--J7ByOxz_6ALpW3_phUHu_sJ3__HCfU9JS4Rz6wNCoOTWNxkcZ1WgFUCIqFnYQ9Qq");'></div>
<div>
<h3 className="font-bold text-lg">Sarah L.</h3>
<div className="flex items-center text-yellow-500">
<span className="material-symbols-outlined text-[18px] fill-current">star</span>
<span className="text-slate-900 ml-1 font-bold">5.0</span>
<span className="text-slate-500 text-sm font-normal ml-1">(89 avis)</span>
</div>
</div>
</div>
<p className="text-slate-600 text-sm mb-4 line-clamp-2">"Polyvalente et Ã©quipÃ©e de tous les outils nÃ©cessaires. SpÃ©cialiste dressings."</p>
<div className="flex items-center justify-between pt-4 border-t border-slate-100">
<span className="font-bold text-primary">42â‚¬ / h</span>
<button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary/90">RÃ©server</button>
</div>
</div>
</div>
{/*  Artisan 3  */}
<div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
<div className="p-6">
<div className="flex items-center gap-4 mb-4">
<div className="w-16 h-16 rounded-full bg-slate-200 bg-cover bg-center" data-alt="Portrait of a male professional tasker" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDGaOJWVzn5uWnRvO-LdPZYkddXxr2C5nP1kB6xo5N0XLjAyk-FcZWY4R5nsvNUZqwTuZsEQZmgLs-xIS63Un55oYRYNtlM4bhjBU4-x9eGddgIVM7uUnqlPOAp-dPLUQAUTbb9rzkY4F0cRiK2uDhDEYBAYDQlDF9nfi2xlLTzZC2gXxXg6jtwvdCFiACOdDV8Iqyg-PSy9cqA5TbUpIeZfD9bf1TCBcdeozoYxSgynFOLzP8q-22d7Ac6uSXLwR-IzFabEr_O2gx0");'></div>
<div>
<h3 className="font-bold text-lg">Karim A.</h3>
<div className="flex items-center text-yellow-500">
<span className="material-symbols-outlined text-[18px] fill-current">star</span>
<span className="text-slate-900 ml-1 font-bold">4.8</span>
<span className="text-slate-500 text-sm font-normal ml-1">(210 avis)</span>
</div>
</div>
</div>
<p className="text-slate-600 text-sm mb-4 line-clamp-2">"Ponctuel et efficace. Je peux Ã©galement fixer vos meubles au mur pour la sÃ©curitÃ©."</p>
<div className="flex items-center justify-between pt-4 border-t border-slate-100">
<span className="font-bold text-primary">35â‚¬ / h</span>
<button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary/90">RÃ©server</button>
</div>
</div>
</div>
</div>
</section>
{/*  FAQ  */}
<section className="py-12 border-t border-slate-200">
<h2 className="text-slate-900 text-3xl font-bold mb-8">Questions frÃ©quentes</h2>
<div className="space-y-4 max-w-3xl">
<details className="group bg-white border border-slate-200 rounded-lg">
<summary className="flex items-center justify-between p-4 cursor-pointer font-bold">
                                    Quels types de meubles pouvez-vous monter ?
                                    <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
</summary>
<div className="px-4 pb-4 text-slate-600">
                                    Nos experts peuvent monter tout type de mobilier : lits, armoires, bureaux, bibliothÃ¨ques, cuisines, et meubles de jardin de toutes les marques courantes (IKEA, But, Leroy Merlin, etc.).
                                </div>
</details>
<details className="group bg-white border border-slate-200 rounded-lg">
<summary className="flex items-center justify-between p-4 cursor-pointer font-bold">
                                    Le Taskeur apporte-t-il ses propres outils ?
                                    <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
</summary>
<div className="px-4 pb-4 text-slate-600">
                                    Oui, tous nos monteurs professionnels viennent Ã©quipÃ©s d'une boÃ®te Ã  outils complÃ¨te comprenant visseuses, marteaux, niveaux et clÃ©s nÃ©cessaires.
                                </div>
</details>
<details className="group bg-white border border-slate-200 rounded-lg">
<summary className="flex items-center justify-between p-4 cursor-pointer font-bold">
                                    Que faire si une piÃ¨ce est manquante dans mon colis ?
                                    <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
</summary>
<div className="px-4 pb-4 text-slate-600">
                                    Le Taskeur vous informera immÃ©diatement. S'il s'agit d'une vis standard, il est possible qu'il en ait une de rechange. Sinon, vous devrez contacter le service client du revendeur.
                                </div>
</details>
</div>
</section>
</div>
</div>
</main>
{/*  Footer  */}
<footer className="bg-white border-t border-slate-200 px-4 md:px-10 lg:px-40 py-12">
<div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="flex flex-col gap-4 col-span-1 md:col-span-2">
<div className="flex items-center gap-2 text-primary">
<svg className="size-6" fill="currentColor" viewBox="0 0 48 48">
<path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z"></path>
</svg>
<span className="text-xl font-bold text-slate-900">TaskService</span>
</div>
<p className="text-slate-500 max-w-xs">Simplifiez votre quotidien en dÃ©lÃ©guant vos tÃ¢ches mÃ©nagÃ¨res et bricolage Ã  des experts de confiance.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined">social_leaderboard</span>
</a>
<a className="text-slate-400 hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined">photo_camera</span>
</a>
</div>
</div>
<div>
<h4 className="font-bold mb-4">Plateforme</h4>
<ul className="space-y-2 text-slate-500 text-sm">
<li><a className="hover:text-primary" href="#">Ã€ propos</a></li>
<li><a className="hover:text-primary" href="#">Comment Ã§a marche</a></li>
<li><a className="hover:text-primary" href="#">SÃ©curitÃ©</a></li>
<li><a className="hover:text-primary" href="#">Avis clients</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-4">Langue</h4>
<div className="flex flex-col gap-2">
<select className="bg-slate-50 border border-slate-200 rounded-lg text-sm px-3 py-2 outline-none focus:ring-1 focus:ring-primary">
<option selected="" value="fr">FranÃ§ais</option>
<option value="en">English</option>
<option value="ar">Ã˜Â§Ã™â€žÃ˜Â¹Ã˜Â±Ã˜Â¨Ã™Å Ã˜Â©</option>
</select>
</div>
</div>
</div>
<div className="max-w-[1200px] mx-auto mt-12 pt-8 border-t border-slate-100 text-center text-slate-400 text-sm">
                Â© 2024 TaskService. Tous droits rÃ©servÃ©s.
            </div>
</footer>
</div>
</div>

    </>
  );
};

export default DetailsDuServiceMontage;

