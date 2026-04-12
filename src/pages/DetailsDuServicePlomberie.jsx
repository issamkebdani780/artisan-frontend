import React from 'react';

const DetailsDuServicePlomberie = () => {
  return (
    <>
      
<div className="layout-container flex h-full grow flex-col">
{/*  Header  */}
<header className="flex items-center justify-between whitespace-nowrap border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark px-6 md:px-20 py-4 sticky top-0 z-50">
<div className="flex items-center gap-4 text-primary">
<div className="size-8">
<svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" fill="currentColor"></path>
</svg>
</div>
<h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight tracking-tight">Plomberie Pro</h2>
</div>
<div className="flex flex-1 justify-end gap-8 items-center">
<div className="hidden md:flex items-center gap-6">
<a className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors text-sm font-semibold" href="#">FR</a>
<a className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors text-sm font-semibold" href="#">AR</a>
<a className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors text-sm font-semibold" href="#">EN</a>
</div>
<div className="flex gap-3">
<button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
<span className="material-symbols-outlined text-[20px]">notifications</span>
</button>
<button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
<span className="material-symbols-outlined text-[20px]">person</span>
</button>
</div>
</div>
</header>
<main className="flex-1">
{/*  Hero Section  */}
<section className="px-6 md:px-20 py-8">
<div className="relative min-h-[450px] w-full flex flex-col justify-end overflow-hidden rounded-xl bg-slate-900 shadow-2xl">
<img alt="Plombier professionnel travaillant sur une tuyauterie" className="absolute inset-0 h-full w-full object-cover opacity-60" data-alt="Professional plumber working on metal pipes under a sink" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeAYjDdw3xzyNxuMzzRB0ZXoxrbTeNtBXldDEguDS_tPgWmQ_gKpnTk9kH8ar27T9NU4WpJEVyP8hM4rg5HGu4lH6LojAXPvnkzWpgkFKsayjUsiC_TJgEGHFz8mDk6B2dcVzapdKPWSzOm-PADso6jqyq7GXR2DDvqkefVQKL8Z5eBGXT1q5oAo6mM7TgvTikOLRn0iSeWFpO34x-a3t3iVnLXR_APE9dDc1dy3lMVRp1z_yqRTvJZrSuVs2tWSr-NhrhE8ct2cks"/>
<div className="relative p-8 md:p-12 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent">
<h1 className="text-white text-4xl md:text-5xl font-extrabold leading-tight max-w-2xl mb-4">
                            Dépannage et Installation de Plomberie
                        </h1>
<p className="text-slate-200 text-lg md:text-xl max-w-3xl leading-relaxed">
                            Confiez vos travaux de plomberie à des experts certifiés. Qu'il s'agisse d'une fuite urgente, d'une installation de robinetterie ou d'un débouchage, nous sommes là pour vous.
                        </p>
<div className="mt-8 flex gap-4">
<button className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-primary/90 transition-all shadow-lg">Réserver maintenant</button>
<button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-3 rounded-lg font-bold hover:bg-white/20 transition-all">Voir les tarifs</button>
</div>
</div>
</div>
</section>
{/*  How it works  */}
<section className="px-6 md:px-20 py-12 bg-white dark:bg-slate-900/50">
<h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Comment ça marche</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="flex flex-col items-center text-center p-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark hover:shadow-md transition-shadow">
<div className="size-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-4xl">calendar_month</span>
</div>
<h3 className="text-xl font-bold mb-3">1. Réservez</h3>
<p className="text-slate-600 dark:text-slate-400">Décrivez votre problème en quelques clics via notre formulaire simple et rapide.</p>
</div>
<div className="flex flex-col items-center text-center p-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark hover:shadow-md transition-shadow">
<div className="size-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-4xl">engineering</span>
</div>
<h3 className="text-xl font-bold mb-3">2. Choisissez</h3>
<p className="text-slate-600 dark:text-slate-400">Sélectionnez un expert local qualifié parmi nos professionnels vérifiés et certifiés.</p>
</div>
<div className="flex flex-col items-center text-center p-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark hover:shadow-md transition-shadow">
<div className="size-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-4xl">verified_user</span>
</div>
<h3 className="text-xl font-bold mb-3">3. C'est réparé</h3>
<p className="text-slate-600 dark:text-slate-400">Le plombier intervient rapidement et vous payez en toute sécurité après la prestation.</p>
</div>
</div>
</section>
{/*  Pricing Section  */}
<section className="px-6 md:px-20 py-16">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
<div>
<h2 className="text-3xl font-bold">Tarification et Détails</h2>
<p className="text-slate-500 mt-2">Des prix transparents, sans frais cachés.</p>
</div>
<a className="text-primary font-semibold flex items-center gap-2" href="#">Voir tous les services <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
<div className="flex justify-between items-start mb-4">
<h3 className="text-lg font-bold">Réparation de fuite</h3>
<span className="text-primary font-bold">�DA partir de 45€</span>
</div>
<ul className="space-y-3 mb-6 text-slate-600 dark:text-slate-400 text-sm">
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-lg">check_circle</span> Diagnostic inclus</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-lg">check_circle</span> Réparation immédiate</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-lg">check_circle</span> Garantie 1 an</li>
</ul>
<button className="w-full py-2 bg-slate-100 dark:bg-slate-800 hover:bg-primary hover:text-white transition-colors rounded-lg font-semibold">Choisir</button>
</div>
<div className="p-6 bg-primary text-white rounded-xl shadow-xl scale-105 border-2 border-primary">
<div className="flex justify-between items-start mb-4">
<h3 className="text-lg font-bold">Installation robinet</h3>
<span className="text-white font-bold">�DA partir de 60€</span>
</div>
<ul className="space-y-3 mb-6 text-white/80 text-sm">
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-white text-lg">check_circle</span> Dépose ancien robinet</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-white text-lg">check_circle</span> Raccordement standard</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-white text-lg">check_circle</span> Test d'étanchéité</li>
</ul>
<button className="w-full py-2 bg-white text-primary hover:bg-slate-100 transition-colors rounded-lg font-bold">Choisir</button>
</div>
<div className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
<div className="flex justify-between items-start mb-4">
<h3 className="text-lg font-bold">Débouchage canalisation</h3>
<span className="text-primary font-bold">�DA partir de 50€</span>
</div>
<ul className="space-y-3 mb-6 text-slate-600 dark:text-slate-400 text-sm">
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-lg">check_circle</span> Utilisation furet/pompe</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-lg">check_circle</span> Désinfection rapide</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-lg">check_circle</span> Conseils entretien</li>
</ul>
<button className="w-full py-2 bg-slate-100 dark:bg-slate-800 hover:bg-primary hover:text-white transition-colors rounded-lg font-semibold">Choisir</button>
</div>
</div>
</section>
{/*  Experts Section  */}
<section className="px-6 md:px-20 py-16 bg-slate-50 dark:bg-background-dark/50">
<h2 className="text-3xl font-bold mb-12">Nos meilleurs plombiers</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/*  Expert 1  */}
<div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<div className="flex items-center gap-4 mb-4">
<img alt="Portrait de Marc L." className="size-16 rounded-full object-cover" data-alt="Close-up portrait of a smiling male professional" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2KKMq5UPa5PZKhTjsxDK0-WqEgWwdxb2E92l3n0N8PZoVw3yCFOraezrvBFfMq-rk5IshP_2su97iqN5O73vo0f-L6ztkpMsRP4E2jpQyfRUO_7aUQJi0Oh3swXIZdHREkrxWV74iE5Zu6za2B6Yrz8nU0G3yDvCZzbDZj7yWiFt_odwV28JQPFehQwcMjkjGIwk81fhYkOW5FY2HZ3j-tEKpxOTGXNlLpKdjHQEPzwoGUJ75dVvIX3itqyvqo1w3KjGyrcfERVdN"/>
<div>
<h4 className="font-bold text-lg">Marc L.</h4>
<div className="flex items-center text-yellow-500">
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="text-sm font-bold ml-1">4.9</span>
<span className="text-slate-400 text-xs font-normal ml-1">(120 avis)</span>
</div>
</div>
</div>
<p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                            Expert en dépannage d'urgence avec plus de 15 ans d'expérience. Spécialiste des systèmes de chauffage et tuyauterie cuivre.
                        </p>
<div className="flex gap-2">
<span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded uppercase">Urgence</span>
<span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded uppercase">Certifié</span>
</div>
</div>
{/*  Expert 2  */}
<div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<div className="flex items-center gap-4 mb-4">
<img alt="Portrait de Sophie G." className="size-16 rounded-full object-cover" data-alt="Portrait of a professional woman smiling" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHoICPgCuGSSeDn5e9bCOju1DvWm_YSkVJdRex83169rXOw2aKIdJSbfvlSV9xDPJf45QAXUYRUFsxZm703Cdt8Em3Gjus2m7RYxXj6zxSu2Q8szqyFJjNSnHDLpldeuNyzF8zJWH0rncTdtEFIKwDocmkSxSebgo7s1118MRKFnBBocAtY80j3DO3ggQM0m84MI6-k7c82Ed6iNhNYaV5nn29hywwllBPzc-f8gWzuE2jUp_9gCxYuXUNGQTJjvPlLk7f3Y1I70yR"/>
<div>
<h4 className="font-bold text-lg">Sophie G.</h4>
<div className="flex items-center text-yellow-500">
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="text-sm font-bold ml-1">4.8</span>
<span className="text-slate-400 text-xs font-normal ml-1">(85 avis)</span>
</div>
</div>
</div>
<p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                            Spécialisée dans la rénovation de salle de bain et l'installation de robinetterie haut de gamme. Travail soigné et précis.
                        </p>
<div className="flex gap-2">
<span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded uppercase">Design</span>
<span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded uppercase">Ponctuel</span>
</div>
</div>
{/*  Expert 3  */}
<div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<div className="flex items-center gap-4 mb-4">
<img alt="Portrait de Ahmed K." className="size-16 rounded-full object-cover" data-alt="Portrait of a friendly male professional" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnId61l9mCi8NWCIAOZHlNOQTW1p0ZHdlAN5Cp_gm4JLY51Js_WDyFM91KA25ojgxShdTEFBoqXIedLL2QnFjtlL4PEQH5woix0yMpwqR1hti2kt9IguLZXKcTJZriDBwBXJYod6C8OIuKn8Sc2JHXUAaaTr897RPE2XIrwpGdnVM8--yr9frr2QQVj4oOPeuW4HJkJMVR_Jn4UN0TU5wW6Pxw7AlxUzkWp8oz9cSjYKLx_cozA5xfDMhrAhBjTQAedEhSd-sKi0AF"/>
<div>
<h4 className="font-bold text-lg">Ahmed K.</h4>
<div className="flex items-center text-yellow-500">
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="text-sm font-bold ml-1">4.9</span>
<span className="text-slate-400 text-xs font-normal ml-1">(150 avis)</span>
</div>
</div>
</div>
<p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                            Expert en débouchage complexe et assainissement. Disponible 24/7 pour toute intervention majeure sur le réseau.
                        </p>
<div className="flex gap-2">
<span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded uppercase">24/7</span>
<span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded uppercase">Maître Artisan</span>
</div>
</div>
</div>
</section>
{/*  FAQ Section  */}
<section className="px-6 md:px-20 py-16 max-w-4xl mx-auto">
<h2 className="text-3xl font-bold mb-10 text-center">Questions fréquentes</h2>
<div className="space-y-4">
<details className="group bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-4" open="">
<summary className="flex items-center justify-between cursor-pointer font-bold list-none">
<span>Quels sont vos délais d'intervention pour une urgence ?</span>
<span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
</summary>
<p className="mt-4 text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4">
                            Pour les urgences comme une fuite d'eau importante ou un débouchage total, nos experts interviennent en moyenne en moins de 45 minutes dans les zones couvertes.
                        </p>
</details>
<details className="group bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-4">
<summary className="flex items-center justify-between cursor-pointer font-bold list-none">
<span>Les pièces de rechange sont-elles incluses dans le prix ?</span>
<span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
</summary>
<p className="mt-4 text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4">
                            Le tarif affiché correspond à la main-d'œuvre et au déplacement. Les pièces de rechange nécessaires (joints, robinets, siphons) sont facturées en supplément après validation d'un devis gratuit sur place.
                        </p>
</details>
<details className="group bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-4">
<summary className="flex items-center justify-between cursor-pointer font-bold list-none">
<span>Comment se passe le paiement ?</span>
<span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
</summary>
<p className="mt-4 text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4">
                            Le paiement s'effectue directement sur notre plateforme sécurisée une fois la prestation terminée et validée par vos soins. Nous acceptons les cartes bancaires et les virements instantanés.
                        </p>
</details>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="bg-slate-900 text-slate-300 px-6 md:px-20 py-16 border-t border-slate-800">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-3 text-white mb-6">
<div className="size-6">
<svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" fill="currentColor"></path>
</svg>
</div>
<span className="text-xl font-bold">Plomberie Pro</span>
</div>
<p className="text-sm leading-relaxed">
                        Votre partenaire de confiance pour tous vos besoins en plomberie. Rapidité, efficacité et transparence au meilleur prix.
                    </p>
</div>
<div>
<h5 className="text-white font-bold mb-6">Services</h5>
<ul className="space-y-4 text-sm">
<li><a className="hover:text-primary transition-colors" href="#">Réparation fuites</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Débouchage</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Installation</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Entretien chauffe-eau</a></li>
</ul>
</div>
<div>
<h5 className="text-white font-bold mb-6">Support</h5>
<ul className="space-y-4 text-sm">
<li><a className="hover:text-primary transition-colors" href="#">Aide &amp; FAQ</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Conditions Générales</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Confidentialité</a></li>
</ul>
</div>
<div>
<h5 className="text-white font-bold mb-6">Contact</h5>
<ul className="space-y-4 text-sm">
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary">call</span>
<span>0800 123 456 (Gratuit)</span>
</li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary">mail</span>
<span>contact@plomberie-pro.fr</span>
</li>
<li className="flex gap-4 mt-6">
<a className="size-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors" href="#">
<span className="material-symbols-outlined text-sm">social_leaderboard</span>
</a>
<a className="size-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors" href="#">
<span className="material-symbols-outlined text-sm">alternate_email</span>
</a>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-800 text-xs text-center md:text-left flex flex-col md:flex-row justify-between gap-4">
<span>© 2024 Plomberie Pro. Tous droits réservés.</span>
<div className="flex justify-center md:justify-end gap-6">
<a href="#">Mentions légales</a>
<a href="#">Cookies</a>
</div>
</div>
</footer>
</div>

    </>
  );
};

export default DetailsDuServicePlomberie;
