import React from 'react';

const DetailsDuServiceElectricite = () => {
  return (
    <>
      
<div className="relative flex min-h-screen flex-col">
{/*  Top Navigation  */}
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/10 px-6 md:px-40 py-3 bg-white sticky top-0 z-50 backdrop-blur-md">
<div className="flex items-center gap-4 text-primary">
<div className="size-8 flex items-center justify-center">
<span className="material-symbols-outlined text-3xl">lightbulb</span>
</div>
<h2 className="text-slate-900 text-lg font-bold leading-tight tracking-tight">ArtisanPro</h2>
</div>
<div className="flex flex-1 justify-end gap-8">
<nav className="hidden md:flex items-center gap-9">
<a className="text-slate-700 text-sm font-medium hover:text-primary transition-colors" href="#">Accueil</a>
<a className="text-slate-700 text-sm font-medium hover:text-primary transition-colors" href="#">Services</a>
<a className="text-slate-700 text-sm font-medium hover:text-primary transition-colors" href="#">Réalisations</a>
<a className="text-slate-700 text-sm font-medium hover:text-primary transition-colors" href="#">Blog</a>
<a className="text-slate-700 text-sm font-medium hover:text-primary transition-colors" href="#">Contact</a>
</nav>
<div className="flex gap-2">
<button className="flex cursor-pointer items-center justify-center rounded-lg h-10 bg-slate-100 text-slate-900 px-2.5">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="flex cursor-pointer items-center justify-center rounded-lg h-10 bg-primary text-white px-4 font-bold text-sm">
                            Connexion
                        </button>
</div>
</div>
</header>
<main className="flex-grow"><div className="layout-content-container flex flex-col max-w-[1024px] mx-auto flex-1 px-4 md:px-0 py-8">
{/*  Hero Section  */}
<div className="@container">
<div className="@[480px]:py-3">
<div className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-slate-200 @[480px]:rounded-xl min-h-[400px] relative group" style='background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 50%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuC3GPfsfxp_J7HrDQpWsw1cqF-LpbBUipZzrmr1CNt1gO3QsKtF_l0k2ooZm6ZJRs-DELKL-tEGpzNfBciWg3CmYZnAxdPEteSrQ0_Xt-E9Lj4WrQK8tLx79LgYuiz8qlomcwnMFt-Nw017HY7W1P2LF0NmVer9dR9cxoB8ILGb089IqsJHQIiEpCYLuQgt0boXvLJopcmHDsjq7IB_zJw9bBZ9SRZMUtw_M4a7ORP2CJ__wP5M1ar4BIYTzqEodED0ah_llI8U240H");'>
<div className="flex flex-col p-8 gap-2">
<span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full w-fit uppercase tracking-widest">Service Premium</span>
<h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tight">Dépannage et Installation Électrique</h1>
<p className="text-slate-200 text-lg max-w-2xl">Sublimez votre intérieur avec une installation professionnelle, sécurisée et sur-mesure pour tous vos systèmes d'éclairage.</p>
</div>
</div>
</div>
</div>
{/*  CTA & Pricing Quick Stats  */}
<div className="flex flex-wrap justify-between items-center gap-6 p-6 bg-white rounded-xl mt-6 border border-slate-100 shadow-sm">
<div className="flex flex-col gap-1">
<p className="text-slate-900 text-2xl font-bold">À partir de 45â‚¬ <span className="text-sm font-normal text-slate-500">/ prestation</span></p>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-sm">verified_user</span>
<p className="text-slate-600 text-sm">Assurance responsabilité civile incluse</p>
</div>
</div>
<div className="flex gap-3">
<button className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary text-white text-base font-bold transition-transform hover:scale-105">
                                Réserver maintenant
                            </button>
<button className="flex items-center justify-center rounded-lg h-12 px-6 bg-slate-100 text-slate-900 text-base font-bold">
                                Devis gratuit
                            </button>
</div>
</div>
{/*  Metrics Grid  */}
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-8">
<div className="flex flex-col gap-2 rounded-xl p-6 border border-slate-200 bg-white">
<span className="material-symbols-outlined text-primary">schedule</span>
<p className="text-slate-500 text-sm font-medium uppercase tracking-wider">Intervention rapide</p>
<p className="text-slate-900 text-2xl font-bold">Sous 2-4h</p>
</div>
<div className="flex flex-col gap-2 rounded-xl p-6 border border-slate-200 bg-white">
<span className="material-symbols-outlined text-primary">star</span>
<p className="text-slate-500 text-sm font-medium uppercase tracking-wider">Satisfaction Client</p>
<p className="text-slate-900 text-2xl font-bold">4.9/5 (2.5k avis)</p>
</div>
<div className="flex flex-col gap-2 rounded-xl p-6 border border-slate-200 bg-white">
<span className="material-symbols-outlined text-primary">construction</span>
<p className="text-slate-500 text-sm font-medium uppercase tracking-wider">Garantie Travaux</p>
<p className="text-slate-900 text-2xl font-bold">2 ans inclus</p>
</div>
</div>
{/*  Nos expertises  */}
<section className="py-8">
<h2 className="text-slate-900 text-3xl font-bold mb-8">Nos Expertises Spécialisées</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex items-start gap-4 p-5 rounded-xl bg-primary/5 border border-primary/10">
<div className="bg-primary text-white p-3 rounded-lg">
<span className="material-symbols-outlined">electrical_services</span>
</div>
<div>
<h3 className="text-lg font-bold mb-1">Installation &amp; Rénovation</h3>
<p className="text-slate-600 text-sm">Mise en place de circuits neufs et rénovation complète de votre installation électrique.</p>
</div>
</div>
<div className="flex items-start gap-4 p-5 rounded-xl bg-primary/5 border border-primary/10">
<div className="bg-primary text-white p-3 rounded-lg">
<span className="material-symbols-outlined">bolt</span>
</div>
<div>
<h3 className="text-lg font-bold mb-1">Dépannage Urgent</h3>
<p className="text-slate-600 text-sm">Recherche de pannes, courts-circuits et coupures de courant 24j/7.</p>
</div>
</div>
<div className="flex items-start gap-4 p-5 rounded-xl bg-primary/5 border border-primary/10">
<div className="bg-primary text-white p-3 rounded-lg">
<span className="material-symbols-outlined">smart_home</span>
</div>
<div>
<h3 className="text-lg font-bold mb-1">Domotique &amp; Connecté</h3>
<p className="text-slate-600 text-sm">Configuration de systèmes connectés, éclairages intelligents et sécurité.</p>
</div>
</div>
<div className="flex items-start gap-4 p-5 rounded-xl bg-primary/5 border border-primary/10">
<div className="bg-primary text-white p-3 rounded-lg">
<span className="material-symbols-outlined">ev_station</span>
</div>
<div>
<h3 className="text-lg font-bold mb-1">Bornes IRVE</h3>
<p className="text-slate-600 text-sm">Installation certifiée de bornes de recharge pour véhicules électriques.</p>
</div>
</div>
</div>
</section>
{/*  Safety Protocols  */}
<section className="py-12 px-8 bg-slate-900 text-white rounded-2xl my-8">
<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="flex-1">
<h2 className="text-3xl font-bold mb-6">La Sécurité : Notre Priorité Absolue</h2>
<p className="text-slate-400 mb-8">Toutes nos interventions respectent rigoureusement la norme NFC 15-100 pour garantir la protection des personnes et des biens.</p>
<ul className="space-y-4">
<li className="flex gap-3 items-center">
<span className="material-symbols-outlined text-primary">check_circle</span>
<span>Vérification systématique de la mise à la terre</span>
</li>
<li className="flex gap-3 items-center">
<span className="material-symbols-outlined text-primary">check_circle</span>
<span>Test de charge sur les installations</span>
</li>
<li className="flex gap-3 items-center">
<span className="material-symbols-outlined text-primary">check_circle</span>
<span>Coupure de sécurité et vérification d'absence de tension</span>
</li>
</ul>
</div>
<div className="w-full md:w-1/3 bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-center">
<span className="material-symbols-outlined text-6xl text-primary mb-4">gavel</span>
<h3 className="text-xl font-bold mb-2">Besoin d'un devis gratuit?</h3>
<p className="text-sm text-slate-300 mb-4">Nos électriciens sont certifiés Qualifelec et à votre disposition.</p>
<button className="w-full py-2 bg-primary text-white rounded-lg font-bold">Demander mon devis</button>
</div>
</div>
</section>
{/*  Experts Certifiés  */}
<section className="py-8">
<div className="flex justify-between items-end mb-8">
<div>
<h2 className="text-slate-900 text-3xl font-bold">Experts certifiés</h2>
<p className="text-slate-600 mt-2">Des professionnels passionnés près de chez vous.</p>
</div>
<button className="text-primary font-bold text-sm flex items-center gap-2">
                                Voir tous les experts <span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
{/*  Card 1  */}
<div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
<div className="h-48 bg-slate-300 bg-cover bg-center" ></div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="font-bold text-lg">Jean-Pierre Durand</h3>
<div className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-bold">
<span className="material-symbols-outlined text-xs">verified</span> VÉRIFIÉ
                                        </div>
</div>
<p className="text-slate-500 text-sm mb-4">Électricien certifié - 15 ans d'exp.</p>
<div className="flex items-center gap-1 text-primary mb-4">
<span className="material-symbols-outlined text-sm">star</span>
<span className="material-symbols-outlined text-sm">star</span>
<span className="material-symbols-outlined text-sm">star</span>
<span className="material-symbols-outlined text-sm">star</span>
<span className="material-symbols-outlined text-sm">star</span>
<span className="text-slate-400 text-xs ml-1">(124 avis)</span>
</div>
<button className="w-full py-2 bg-slate-100 rounded-lg text-sm font-bold hover:bg-primary hover:text-white transition-colors">Choisir cet expert</button>
</div>
</div>
{/*  Card 2  */}
<div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
<div className="h-48 bg-slate-300 bg-cover bg-center" ></div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="font-bold text-lg">Marc Lefebvre</h3>
<div className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-bold">
<span className="material-symbols-outlined text-xs">verified</span> VÉRIFIÉ
                                        </div>
</div>
<p className="text-slate-500 text-sm mb-4">Expert Dépannage Urgent</p>
<div className="flex items-center gap-1 text-primary mb-4">
<span className="material-symbols-outlined text-sm">star</span>
<span className="material-symbols-outlined text-sm">star</span>
<span className="material-symbols-outlined text-sm">star</span>
<span className="material-symbols-outlined text-sm">star</span>
<span className="material-symbols-outlined text-sm">star</span>
<span className="text-slate-400 text-xs ml-1">(89 avis)</span>
</div>
<button className="w-full py-2 bg-slate-100 rounded-lg text-sm font-bold hover:bg-primary hover:text-white transition-colors">Choisir cet expert</button>
</div>
</div>
{/*  Card 3  */}
<div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
<div className="h-48 bg-slate-300 bg-cover bg-center" ></div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="font-bold text-lg">Sofiane Amari</h3>
<div className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-bold">
<span className="material-symbols-outlined text-xs">verified</span> VÉRIFIÉ
                                        </div>
</div>
<p className="text-slate-500 text-sm mb-4">Spécialiste Installation Neuve</p>
<div className="flex items-center gap-1 text-primary mb-4">
<span className="material-symbols-outlined text-sm">star</span>
<span className="material-symbols-outlined text-sm">star</span>
<span className="material-symbols-outlined text-sm">star</span>
<span className="material-symbols-outlined text-sm">star</span>
<span className="material-symbols-outlined text-sm">star_half</span>
<span className="text-slate-400 text-xs ml-1">(56 avis)</span>
</div>
<button className="w-full py-2 bg-slate-100 rounded-lg text-sm font-bold hover:bg-primary hover:text-white transition-colors">Choisir cet expert</button>
</div>
</div>
</div>
</section>
{/*  Tarifs Transparents  */}
<section className="py-12">
<div className="rounded-xl border border-slate-200 overflow-hidden bg-white">
<div className="p-6 border-b border-slate-200">
<h2 className="text-xl font-bold">Tarifs transparents</h2>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-slate-50">
<th className="p-4 font-bold text-sm text-slate-500 uppercase">Prestation</th>
<th className="p-4 font-bold text-sm text-slate-500 uppercase">Délai Estimé</th>
<th className="p-4 font-bold text-sm text-slate-500 uppercase">Tarif Unitaire</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr>
<td className="p-4">Diagnostic &amp; Réparation standard</td>
<td className="p-4">30 - 60 min</td>
<td className="p-4 font-bold text-primary">50â‚¬</td>
</tr>
<tr>
<td className="p-4">Installation Luminaire</td>
<td className="p-4">30 - 45 min</td>
<td className="p-4 font-bold text-primary">45â‚¬</td>
</tr>
<tr>
<td className="p-4">Remplacement Tableau</td>
<td className="p-4">2h - 4h</td>
<td className="p-4 font-bold text-primary">Sur devis</td>
</tr>
</tbody>
</table>
</div>
</div>
<p className="mt-4 text-sm text-slate-500 text-center italic">* Les tarifs peuvent varier selon la complexité et l'état de l'installation.</p>
</section>
</div></main>
{/*  Footer  */}
<footer className="border-t border-slate-200 bg-white py-12 px-6 md:px-40">
<div className="max-w-[1024px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 text-primary mb-4">
<span className="material-symbols-outlined">lightbulb</span>
<span className="font-bold text-lg text-slate-900">ArtisanPro</span>
</div>
<p className="text-sm text-slate-500 leading-relaxed">Le réseau n°1 d'électriciens experts pour vos besoins domestiques et professionnels.</p>
</div>
<div>
<h4 className="font-bold mb-4">Services</h4>
<ul className="text-sm space-y-2 text-slate-500">
<li><a className="hover:text-primary" href="#">Eclairage intérieur</a></li>
<li><a className="hover:text-primary" href="#">Dépannage urgent</a></li>
<li><a className="hover:text-primary" href="#">Mise aux normes</a></li>
<li><a className="hover:text-primary" href="#">Domotique</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-4">Aide</h4>
<ul className="text-sm space-y-2 text-slate-500">
<li><a className="hover:text-primary" href="#">FAQ</a></li>
<li><a className="hover:text-primary" href="#">Garanties</a></li>
<li><a className="hover:text-primary" href="#">Nous contacter</a></li>
<li><a className="hover:text-primary" href="#">Mentions légales</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-4">Suivez-nous</h4>
<div className="flex gap-4">
<span className="material-symbols-outlined cursor-pointer hover:text-primary">social_leaderboard</span>
<span className="material-symbols-outlined cursor-pointer hover:text-primary">share</span>
<span className="material-symbols-outlined cursor-pointer hover:text-primary">camera</span>
</div>
</div>
</div>
<div className="max-w-[1024px] mx-auto mt-12 pt-8 border-t border-slate-100 text-center text-xs text-slate-400">
                    © 2024 ArtisanPro. Tous droits réservés.
                </div>
</footer>
</div>

    </>
  );
};

export default DetailsDuServiceElectricite;

