import React from 'react';

const DetailsDuServiceJardinageVert = () => {
  return (
    <>
      
<div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 bg-white px-6 md:px-40 py-3 sticky top-0 z-50">
<div className="flex items-center gap-8">
<div className="flex items-center gap-4 text-primary">
<div className="size-6 flex items-center justify-center">
<span className="material-symbols-outlined text-3xl">potted_plant</span>
</div>
<h2 className="text-slate-900 text-lg font-bold leading-tight tracking-[-0.015em]">JardinagePro</h2>
</div>
<div className="hidden md:flex items-center gap-9">
<a className="text-slate-700 text-sm font-medium hover:text-primary transition-colors" href="#">Accueil</a>
<a className="text-slate-700 text-sm font-medium hover:text-primary transition-colors" href="#">Services</a>
<a className="text-slate-700 text-sm font-medium hover:text-primary transition-colors" href="#">Jardiniers</a>
<a className="text-slate-700 text-sm font-medium hover:text-primary transition-colors" href="#">Aide</a>
</div>
</div>
<div className="flex flex-1 justify-end gap-4 md:gap-8">
<label className="hidden lg:flex flex-col min-w-40 !h-10 max-w-64">
<div className="flex w-full flex-1 items-stretch rounded-lg h-full">
<div className="text-slate-500 flex border-none bg-slate-100 items-center justify-center pl-4 rounded-l-lg">
<span className="material-symbols-outlined text-[20px]">search</span>
</div>
<input className="form-input flex w-full min-w-0 flex-1 border-none bg-slate-100 focus:ring-0 h-full placeholder:text-slate-500 px-4 rounded-r-lg text-sm" placeholder="Rechercher un service" value=""/>
</div>
</label>
<div className="flex gap-2">
<button className="flex items-center justify-center rounded-lg h-10 bg-slate-100 text-slate-900 px-3 hover:bg-slate-200 transition-colors">
<span className="material-symbols-outlined">shopping_cart</span>
</button>
<button className="flex items-center justify-center rounded-lg h-10 bg-primary text-white px-4 text-sm font-bold hover:bg-primary/90 transition-colors">
                            Connexion
                        </button>
</div>
</div>
</header>
<main className="flex flex-col flex-1">
<section className="px-4 md:px-40 py-8">
<div className="relative min-h-[480px] flex flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-start justify-end px-6 pb-12 md:px-12 overflow-hidden shadow-xl" data-alt="Magnifique jardin paysager avec fleurs et pelouse impeccable" style='background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDlRYFqqTmf9Ri8fLX-3S0HTorbsEqFw2iJe5rP8WRoo3Ec1BFDEtUtmvIJ9EYu0t61CjHngI6cg31_8ygzbfigkJ7ngGqbpZYFaqrBzaIehyFw5T-PtgPNna9V7X3j-masg_1L7m66WZ3Ecyiglt27WE2CCHrk1KQ-Dv1uDQxr2yMPNSKG0gvV-elTID7ss0fxohaRATHKBkItjWShp5gKBREvUk3iJOc2FyePpTjYkS7x_9fHJczEe1EamiwassCOWSLnnzUU9VKt");'>
<div className="flex flex-col gap-3 max-w-2xl">
<h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight">
                                Services de Jardinage Professionnels
                            </h1>
<p className="text-white/90 text-lg md:text-xl font-medium max-w-lg">
                                Donnez à votre jardin l'expertise qu'il mérite avec nos jardiniers qualifiés et passionnés.
                            </p>
</div>
<button className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-lg h-12 md:h-14 px-8 bg-primary text-white text-base font-bold shadow-lg hover:scale-105 transition-transform">
                            Réserver maintenant
                        </button>
</div>
</section>
<section className="px-4 md:px-40 py-10 bg-white">
<h2 className="text-slate-900 text-2xl md:text-3xl font-bold mb-8">Comment ça marche</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="bg-primary/10 text-primary w-12 h-12 rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-3xl">event_available</span>
</div>
<div>
<h3 className="text-slate-900 text-lg font-bold">1. Réservez</h3>
<p className="text-slate-500 text-sm mt-2">Choisissez votre créneau et décrivez vos besoins en quelques clics via notre plateforme.</p>
</div>
</div>
<div className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="bg-primary/10 text-primary w-12 h-12 rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-3xl">verified</span>
</div>
<div>
<h3 className="text-slate-900 text-lg font-bold">2. Choisissez</h3>
<p className="text-slate-500 text-sm mt-2">Sélectionnez le forfait adapté ou recevez un devis personnalisé d'un expert local.</p>
</div>
</div>
<div className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="bg-primary/10 text-primary w-12 h-12 rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-3xl">sentiment_satisfied</span>
</div>
<div>
<h3 className="text-slate-900 text-lg font-bold">3. C'est fait</h3>
<p className="text-slate-500 text-sm mt-2">Détendez-vous pendant que nos pros s'occupent de tout. Profitez de votre espace vert.</p>
</div>
</div>
</div>
</section>
<section className="px-4 md:px-40 py-16">
<h2 className="text-slate-900 text-2xl md:text-3xl font-bold mb-8">Tarification et Détails</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="flex flex-col rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
<div className="p-8 border-b border-slate-200">
<h3 className="text-xl font-bold mb-2">Entretien de Pelouse</h3>
<div className="flex items-baseline gap-1 mb-4">
<span className="text-3xl font-black text-primary">30â‚¬</span>
<span className="text-slate-500">/ heure</span>
</div>
<p className="text-slate-600 text-sm">Idéal pour un jardin toujours impeccable.</p>
</div>
<div className="p-8 flex-1">
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm">
<span className="material-symbols-outlined text-green-500 font-bold">check</span>
                                        Tonte de pelouse
                                    </li>
<li className="flex items-center gap-3 text-sm">
<span className="material-symbols-outlined text-green-500 font-bold">check</span>
                                        Désherbage manuel
                                    </li>
<li className="flex items-center gap-3 text-sm">
<span className="material-symbols-outlined text-green-500 font-bold">check</span>
                                        Découpe des bordures
                                    </li>
</ul>
</div>
<div className="p-8 pt-0">
<button className="w-full py-3 bg-slate-100 text-slate-900 font-bold rounded-lg hover:bg-primary hover:text-white transition-colors">Choisir ce plan</button>
</div>
</div>
<div className="flex flex-col rounded-xl border-2 border-primary bg-white overflow-hidden shadow-lg relative transform scale-105 z-10">
<div className="bg-primary text-white text-[10px] font-bold uppercase tracking-widest text-center py-1">Populaire</div>
<div className="p-8 border-b border-slate-200">
<h3 className="text-xl font-bold mb-2">Taille et Plantation</h3>
<div className="flex items-baseline gap-1 mb-4">
<span className="text-3xl font-black text-primary">45â‚¬</span>
<span className="text-slate-500">/ heure</span>
</div>
<p className="text-slate-600 text-sm">Redonnez forme et vie à vos massifs.</p>
</div>
<div className="p-8 flex-1">
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm">
<span className="material-symbols-outlined text-green-500 font-bold">check</span>
                                        Taille des arbustes et haies
                                    </li>
<li className="flex items-center gap-3 text-sm">
<span className="material-symbols-outlined text-green-500 font-bold">check</span>
                                        Plantation de fleurs de saison
                                    </li>
<li className="flex items-center gap-3 text-sm">
<span className="material-symbols-outlined text-green-500 font-bold">check</span>
                                        Enrichissement des sols (terreau)
                                    </li>
</ul>
</div>
<div className="p-8 pt-0">
<button className="w-full py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors">Choisir ce plan</button>
</div>
</div>
<div className="flex flex-col rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
<div className="p-8 border-b border-slate-200">
<h3 className="text-xl font-bold mb-2">Aménagement</h3>
<div className="flex items-baseline gap-1 mb-4">
<span className="text-3xl font-black text-primary">Sur devis</span>
</div>
<p className="text-slate-600 text-sm">Projets complexes et créations sur mesure.</p>
</div>
<div className="p-8 flex-1">
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm">
<span className="material-symbols-outlined text-green-500 font-bold">check</span>
                                        Conception de plans 3D
                                    </li>
<li className="flex items-center gap-3 text-sm">
<span className="material-symbols-outlined text-green-500 font-bold">check</span>
                                        Systèmes d'irrigation automatiques
                                    </li>
<li className="flex items-center gap-3 text-sm">
<span className="material-symbols-outlined text-green-500 font-bold">check</span>
                                        Terrasses et maçonnerie paysagère
                                    </li>
</ul>
</div>
<div className="p-8 pt-0">
<button className="w-full py-3 bg-slate-100 text-slate-900 font-bold rounded-lg hover:bg-primary hover:text-white transition-colors">Demander un devis</button>
</div>
</div>
</div>
</section>
<section className="px-4 md:px-40 py-16 bg-slate-100">
<h2 className="text-slate-900 text-2xl md:text-3xl font-bold mb-8">Nos meilleurs jardiniers</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center">
<img className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-primary/20" data-alt="Portrait professionnel de Luc B., jardinier expert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBE9g1grMnmbQS2rhBel7p6jHhqH9kq6SSwfMXO63ddd0lQFFjvxLln8IRFES--uc7FOfJq40RCcDbL-RS6uN4YuCIxOskKd6CP7MpVyZCjxDQQf8ndCdQ0Bm7oejR2T60NnsGwZYXTzW8s0T34faEtc1DBezEyXotXHgs6RIOVx80ApAP4LcVS5RP0hTxezA16O8oHFEpP1tDFezYBZc__1d4c99zbcOVut3-9t2_ZKtDdHSgwfZi-JI57e44jiN7vmYapgiSqYHp"/>
<h4 className="font-bold text-lg">Luc B.</h4>
<div className="flex mb-2 text-primary">
<span className="material-symbols-outlined fill-1">star</span>
<span className="material-symbols-outlined fill-1">star</span>
<span className="material-symbols-outlined fill-1">star</span>
<span className="material-symbols-outlined fill-1">star</span>
<span className="material-symbols-outlined fill-1">star</span>
</div>
<p className="text-slate-500 text-sm italic mb-4">"Expert en taille de fruitiers et entretien de grandes propriétés."</p>
<span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">12 ans d'expérience</span>
</div>
<div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center">
<img className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-primary/20" data-alt="Portrait professionnel d'Amélie R., paysagiste" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKCrE5La5jAcyqFPKTuFajDt5pKC3nCnHV4MjJXv7EMuOVzAzPsNy5Yzpg1nOJj_bpeN8gBI9uHnIi57wHn5guW8DFmOsSIL61IsxqSUSOsMa9PZc9-6DH_wYuI1eIf9P8uzXtA5uZC7216T3P8fo1lunBRWXuzikBQsXdm-jbHNrb7VRI9sa4s_5MdkfixYmLqco0hhSCyoIrkjKGVgij1vEYOJNipjRjNjOEIReYW4xx_fB7WL0D6Oz2dKDnbjukAuKwpj8N6UPU"/>
<h4 className="font-bold text-lg">Amélie R.</h4>
<div className="flex mb-2 text-primary">
<span className="material-symbols-outlined fill-1">star</span>
<span className="material-symbols-outlined fill-1">star</span>
<span className="material-symbols-outlined fill-1">star</span>
<span className="material-symbols-outlined fill-1">star</span>
<span className="material-symbols-outlined fill-1">star</span>
</div>
<p className="text-slate-500 text-sm italic mb-4">"Spécialisée en jardins écologiques et plantes mellifères."</p>
<span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">8 ans d'expérience</span>
</div>
<div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center">
<img className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-primary/20" data-alt="Portrait professionnel de Pierre V., expert en aménagement" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBB6HUkt41USaxxnaszXEyBibjfpC06snLOxCA-Sl511lfENsWiOR7IxTYbR--nzpq9m2vTFcMRfY-LWVAt8g5yYjyuSTjHDbQG-iD3YiurWlnmSL_ZLApXJ0lmesl3gMIjNuYUe__-XSjYVx93eVzumJm_QcpVgY8kfOKO9U73pAU7o2J8hveKLunN4dTC_a9SYMtG1_Grh0AZTk0Q-6yYPqAx39Pl64lvYyRjqOW53Qn00tSDmR7nxkZ-hzGSgaBr_Xgky2hLYpdB"/>
<h4 className="font-bold text-lg">Pierre V.</h4>
<div className="flex mb-2 text-primary">
<span className="material-symbols-outlined fill-1">star</span>
<span className="material-symbols-outlined fill-1">star</span>
<span className="material-symbols-outlined fill-1">star</span>
<span className="material-symbols-outlined fill-1">star</span>
<span className="material-symbols-outlined fill-1">star</span>
</div>
<p className="text-slate-500 text-sm italic mb-4">"Passionné par l'art topiaire et la création de jardins Zen."</p>
<span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">15 ans d'expérience</span>
</div>
</div>
</section>
<section className="px-4 md:px-40 py-16">
<h2 className="text-slate-900 text-2xl md:text-3xl font-bold mb-8">Questions Fréquentes</h2>
<div className="space-y-4 max-w-3xl">
<details className="group bg-white rounded-xl border border-slate-200 overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer font-bold list-none">
                                Les outils sont-ils fournis par le jardinier ?
                                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
</summary>
<div className="px-6 pb-6 text-slate-600 text-sm">
                                Oui, nos jardiniers professionnels apportent tout le matériel nécessaire (tondeuse, taille-haie, petits outils) pour réaliser les prestations courantes. Pour de très gros travaux d'aménagement, cela sera spécifié dans le devis.
                            </div>
</details>
<details className="group bg-white rounded-xl border border-slate-200 overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer font-bold list-none">
                                Comment se passe l'entretien en fonction des saisons ?
                                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
</summary>
<div className="px-6 pb-6 text-slate-600 text-sm">
                                Nous adaptons nos services : taille de printemps, tonte régulière en été, ramassage des feuilles en automne et protection des plantes sensibles en hiver. Vous pouvez souscrire à un contrat d'entretien annuel.
                            </div>
</details>
<details className="group bg-white rounded-xl border border-slate-200 overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer font-bold list-none">
                                Quels sont les modes de paiement acceptés ?
                                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
</summary>
<div className="px-6 pb-6 text-slate-600 text-sm">
                                Nous acceptons les paiements sécurisés par carte bancaire via notre plateforme, ainsi que les CESU (Chèque Emploi Service Universel) qui vous permettent de bénéficier d'un crédit d'impôt de 50%.
                            </div>
</details>
</div>
</section>
</main>
<footer className="px-6 md:px-40 py-12 bg-white border-t border-slate-200">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="flex flex-col gap-4">
<div className="flex items-center gap-2 text-primary">
<span className="material-symbols-outlined text-2xl">potted_plant</span>
<span className="font-bold text-xl text-slate-900">JardinagePro</span>
</div>
<p className="text-slate-500 text-sm">Votre partenaire de confiance pour un jardin resplendissant toute l'année.</p>
<div className="flex gap-4 mt-2">
<a className="text-slate-400 hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined">public</span>
</a>
<a className="text-slate-400 hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined">share</span>
</a>
<a className="text-slate-400 hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined">alternate_email</span>
</a>
</div>
</div>
<div>
<h5 className="font-bold mb-4">Services</h5>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-primary" href="#">Entretien Pelouse</a></li>
<li><a className="hover:text-primary" href="#">Taille de Haies</a></li>
<li><a className="hover:text-primary" href="#">Plantation</a></li>
<li><a className="hover:text-primary" href="#">Potager</a></li>
</ul>
</div>
<div>
<h5 className="font-bold mb-4">Entreprise</h5>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-primary" href="#">À propos</a></li>
<li><a className="hover:text-primary" href="#">Nos Jardiniers</a></li>
<li><a className="hover:text-primary" href="#">Blog Jardin</a></li>
<li><a className="hover:text-primary" href="#">Contact</a></li>
</ul>
</div>
<div>
<h5 className="font-bold mb-4">Newsletter</h5>
<p className="text-sm text-slate-500 mb-4">Recevez nos conseils de saison.</p>
<div className="flex gap-2">
<input className="form-input flex-1 bg-slate-100 border-none rounded-lg text-sm" placeholder="Votre email" type="email"/>
<button className="bg-primary text-white px-4 py-2 rounded-lg font-bold text-sm">OK</button>
</div>
</div>
</div>
<div className="mt-12 pt-8 border-t border-slate-100 text-center text-xs text-slate-400">
                    © 2024 JardinagePro. Tous droits réservés.
                </div>
</footer>
</div>
</div>

    </>
  );
};

export default DetailsDuServiceJardinageVert;

