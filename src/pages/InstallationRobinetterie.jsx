import React from 'react';

const InstallationRobinetterie = () => {
  return (
    <>
      
<div className="relative flex h-auto min-screen w-full flex-col group/design-root overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 bg-white px-6 lg:px-40 py-3 sticky top-0 z-50">
<div className="flex items-center gap-8">
<div className="flex items-center gap-3 text-primary">
<div className="size-8 flex items-center justify-center bg-primary/10 rounded-lg">
<span className="material-symbols-outlined text-primary">plumbing</span>
</div>
<h2 className="text-slate-900 text-lg font-bold leading-tight tracking-tight">PlumbPro</h2>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-slate-600 text-sm font-medium hover:text-primary transition-colors" href="#">Services</a>
<a className="text-slate-600 text-sm font-medium hover:text-primary transition-colors" href="#">Tarifs</a>
<a className="text-slate-600 text-sm font-medium hover:text-primary transition-colors" href="#">Réalisations</a>
<a className="text-slate-600 text-sm font-medium hover:text-primary transition-colors" href="#">Blog</a>
</nav>
</div>
<div className="flex flex-1 justify-end gap-4 items-center">
<label className="hidden sm:flex flex-col min-w-40 h-10 max-w-64">
<div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-slate-100">
<div className="text-slate-500 flex items-center justify-center pl-3">
<span className="material-symbols-outlined text-xl">search</span>
</div>
<input className="form-input flex w-full min-w-0 flex-1 border-none bg-transparent focus:ring-0 text-sm placeholder:text-slate-500" placeholder="Rechercher un service..." value=""/>
</div>
</label>
<button className="hidden sm:flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors">
                        Connexion
                    </button>
<div className="bg-slate-200 aspect-square rounded-full size-10 flex items-center justify-center overflow-hidden border border-slate-200">
<img className="w-full h-full object-cover" data-alt="Avatar de l'utilisateur" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCziaqvHezK8RlonYZAVHOocsaP-v3Cei6StXNeDVTdQRLJmENoppuEDcHiObUgWwNfv3oW1v3YqjqXnswB_bbr3GqUJDAM9Zg_1rWgC_Nw4jjzgubVfiGkY6uw79Tae9AgbmeDHA3UafYXCBfUZZ-za9GTrybb0bEkY7-MpCl6OQFRw_Tj5lLzM-Ro6RKQUOZQhmulybWEwBtAnWVylm2CtsS_J45_XVwed40lrkKCDYfywIaraQD0joPML8HAGMolJSG0O7_WMNLL"/>
</div>
</div>
</header>
<main className="px-4 lg:px-40 py-8 flex flex-col lg:flex-row gap-8">
<aside className="w-full lg:w-72 flex flex-col gap-6 order-2 lg:order-1">
<div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
<div className="flex items-center gap-4 mb-6">
<div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
<span className="material-symbols-outlined text-primary">assignment_turned_in</span>
</div>
<div>
<h3 className="text-slate-900 font-bold">Devis Gratuit</h3>
<p className="text-slate-500 text-xs">Réponse en moins de 2h</p>
</div>
</div>
<nav className="flex flex-col gap-1">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary font-semibold text-sm" href="#types">
<span className="material-symbols-outlined text-xl">water_lux</span> Types de Robinets
                            </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 text-slate-600 text-sm transition-colors" href="#pricing">
<span className="material-symbols-outlined text-xl">payments</span> Tarifs
                            </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 text-slate-600 text-sm transition-colors" href="#experts">
<span className="material-symbols-outlined text-xl">engineering</span> Experts
                            </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 text-slate-600 text-sm transition-colors" href="#faq">
<span className="material-symbols-outlined text-xl">help</span> FAQ
                            </a>
</nav>
<button className="w-full mt-6 bg-primary text-white py-3 rounded-lg font-bold text-sm shadow-md shadow-primary/20 hover:scale-[1.02] transition-transform">
                            Demander un devis
                        </button>
</div>
<div className="bg-slate-900 rounded-xl p-6 text-white overflow-hidden relative">
<div className="relative z-10">
<h4 className="font-bold text-lg mb-2">Urgence ?</h4>
<p className="text-slate-300 text-sm mb-4">Intervention immédiate 24/7 pour vos fuites.</p>
<a className="inline-flex items-center gap-2 text-primary font-bold" href="tel:0123456789">
<span className="material-symbols-outlined">call</span> 01 23 45 67 89
                            </a>
</div>
<div className="absolute -right-4 -bottom-4 opacity-20">
<span className="material-symbols-outlined text-[100px]">emergency</span>
</div>
</div>
</aside>
<div className="flex-1 order-1 lg:order-2">
<nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
<a className="hover:text-primary" href="#">Accueil</a>
<span className="material-symbols-outlined text-sm">chevron_right</span>
<a className="hover:text-primary" href="#">Plomberie</a>
<span className="material-symbols-outlined text-sm">chevron_right</span>
<span className="text-slate-900 font-medium">Installation Robinetterie</span>
</nav>
<div className="relative h-[320px] rounded-2xl overflow-hidden mb-10 group">
<img className="w-full h-full object-cover" data-alt="Robinet moderne chromé installé sur un évier" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6fzNIPNRL_d8YszpT-5_LFm9eaXMzUN0-MxNw_EKGCQt95tPg36Dq9BB2aYjP5KhFWILR4b6-_4ouJEaKgsfQWXDPl-x8iuU9JMwDPfbWQg1yTS1YS29F2YtmxNfs2EVWYQfoNcwJNFPF9cv0XNb1TkU8p2IRlDVaPnwLvNJewJJVSZqQZAtk8HzmyieuvYpFYkkMduX52U_ztwEavVp38NWleqRbfYW0hvSKOjhZbDgM5__aooZOqMlKjJNq8qCV4X7su0g7DbzG"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent flex flex-col justify-end p-8">
<span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-3">SERVICE PREMIUM</span>
<h1 className="text-white text-4xl font-extrabold tracking-tight">Installation de Robinetterie</h1>
<p className="text-slate-200 mt-2 max-w-xl">Améliorez votre confort avec une installation professionnelle de mitigeurs, mélangeurs et colonnes de douche.</p>
</div>
</div>
<section className="mb-12" id="types">
<h2 className="text-2xl font-bold mb-6 text-slate-900">Nos solutions de robinetterie</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-primary transition-colors">
<div className="size-12 rounded-lg bg-slate-100 flex items-center justify-center mb-4">
<span className="material-symbols-outlined text-primary">faucet</span>
</div>
<h3 className="font-bold mb-2">Standard</h3>
<p className="text-sm text-slate-500 mb-4">Mitigeurs classiques pour évier ou lavabo. Simplicité et efficacité.</p>
<p className="text-primary font-bold">À partir de 89â‚¬</p>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-primary transition-colors">
<div className="size-12 rounded-lg bg-slate-100 flex items-center justify-center mb-4">
<span className="material-symbols-outlined text-primary">inventory_2</span>
</div>
<h3 className="font-bold mb-2">Pack Installation</h3>
<p className="text-sm text-slate-500 mb-4">Matériel inclus + pose. La solution clé en main pour votre cuisine ou bain.</p>
<p className="text-primary font-bold">À partir de 159â‚¬</p>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-primary transition-colors">
<div className="size-12 rounded-lg bg-slate-100 flex items-center justify-center mb-4">
<span className="material-symbols-outlined text-primary">water_drop</span>
</div>
<h3 className="font-bold mb-2">Spécialité</h3>
<p className="text-sm text-slate-500 mb-4">Robinets thermostatiques, colonnes de douche hydromassantes, designs haut de gamme.</p>
<p className="text-primary font-bold">Sur devis</p>
</div>
</div>
</section>
<section className="mb-12" id="pricing">
<div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
<div className="p-6 border-b border-slate-200">
<h2 className="text-2xl font-bold text-slate-900">Grille Tarifaire Transparente</h2>
</div>
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-slate-50">
<th className="p-4 text-sm font-bold text-slate-600">Prestation</th>
<th className="p-4 text-sm font-bold text-slate-600">Main d'Å"uvre</th>
<th className="p-4 text-sm font-bold text-slate-600">Durée estimée</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200">
<tr>
<td className="p-4 text-sm">Pose mitigeur classique</td>
<td className="p-4 text-sm font-semibold">89â‚¬ TTC</td>
<td className="p-4 text-sm text-slate-500">1h00</td>
</tr>
<tr>
<td className="p-4 text-sm">Pose mélangeur baignoire</td>
<td className="p-4 text-sm font-semibold">119â‚¬ TTC</td>
<td className="p-4 text-sm text-slate-500">1h30</td>
</tr>
<tr>
<td className="p-4 text-sm">Remplacement colonne de douche</td>
<td className="p-4 text-sm font-semibold">149â‚¬ TTC</td>
<td className="p-4 text-sm text-slate-500">2h00</td>
</tr>
</tbody>
</table>
<div className="p-4 bg-slate-50 flex items-center gap-2">
<span className="material-symbols-outlined text-slate-500 text-sm">info</span>
<p className="text-[10px] text-slate-500">Les tarifs incluent le déplacement en zone urbaine. Hors fourniture du matériel si non précisé.</p>
</div>
</div>
</section>
<section className="mb-12" id="experts">
<h2 className="text-2xl font-bold mb-6 text-slate-900">Nos experts à proximité</h2>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-200">
<img className="size-16 rounded-full object-cover" data-alt="Portrait de Jean-Michel, plombier expert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaO-i_uyPEzFj7WVifpLFeOJ_ejrtHuJQQZLpqMsBnNl-ntzzbu4uyyJIIeZS3TEiSsmCa9YodWpwu50maKKc5qN0TVHGTYvL4oK2KdPxMyAJfIbgfQyOCS6Qj6KdowKku6goTFmiYq_SUt_N5KQffxm0T1mg3ciuOWLT1dMowlo3AxnOwFjMXmeA05hNwmoQDb6Sg8lRtT3W3hQ6CzKHgsBtwXVaPBGTXsKJl-TVfolyXi6dKa4kokbMt5VYbD4jWt5uM_mE_zP24"/>
<div className="flex-1">
<div className="flex items-center justify-between">
<h4 className="font-bold">Jean-Michel D.</h4>
<div className="flex items-center text-yellow-500">
<span className="material-symbols-outlined text-sm">star</span>
<span className="text-xs font-bold ml-1">4.9 (124 avis)</span>
</div>
</div>
<p className="text-xs text-slate-500">Expert Robinetterie &amp; Sanitaire • Disponible aujourd'hui</p>
<div className="flex items-center gap-2 mt-2">
<span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded">RGE</span>
<span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded">Garantie Décennale</span>
</div>
</div>
</div>
<div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-200">
<img className="size-16 rounded-full object-cover" data-alt="Portrait de Marc L., plombier qualifié" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeqmkeWH6bsIJiSMOCesw4cSQVWF7Yxa-wAhUjllg3gQ5d3xnf7I_P9no1c7a1Q2GIxcYLs_ksA7EPqKNh5wV25d8o-v8Y55V0T3MIqSV1ijyQ2CFXYZV45O9NpjGu4y1A5RtGyb7LASnkvEKTekPyTQhDBJl71s1quxYir854PAa4KUigkBhnpIeWG72uu_0xY7WXpcT8MJrQz8NyMZIlbuQbmPidVmDEHsWeOWSP8_SrIjzvS2awqBvNhzym66dOnz3-ZZcP5gRV"/>
<div className="flex-1">
<div className="flex items-center justify-between">
<h4 className="font-bold">Marc L.</h4>
<div className="flex items-center text-yellow-500">
<span className="material-symbols-outlined text-sm">star</span>
<span className="text-xs font-bold ml-1">4.8 (89 avis)</span>
</div>
</div>
<p className="text-xs text-slate-500">Spécialiste installation cuisine • Prochain RDV demain</p>
<div className="flex items-center gap-2 mt-2">
<span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded">Qualibat</span>
</div>
</div>
</div>
</div>
</section>
<section className="mb-12" id="faq">
<h2 className="text-2xl font-bold mb-6 text-slate-900">Questions Fréquentes</h2>
<div className="space-y-4">
<details className="group bg-white border border-slate-200 rounded-xl overflow-hidden" open="">
<summary className="flex items-center justify-between p-4 cursor-pointer font-bold text-sm select-none">
                                    Combien de temps dure l'installation d'un robinet ?
                                    <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
</summary>
<div className="p-4 pt-0 text-sm text-slate-500 leading-relaxed border-t border-slate-50">
                                    En moyenne, une installation standard prend entre 45 minutes et 1h30. Cela inclut la dépose de l'ancien matériel, le nettoyage de la portée de joint, et la mise en service du nouveau robinet avec test d'étanchéité.
                                </div>
</details>
<details className="group bg-white border border-slate-200 rounded-xl overflow-hidden">
<summary className="flex items-center justify-between p-4 cursor-pointer font-bold text-sm select-none">
                                    Fournissez-vous le matériel ou dois-je l'acheter ?
                                    <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
</summary>
<div className="p-4 pt-0 text-sm text-slate-500 leading-relaxed border-t border-slate-50">
                                    Nous proposons les deux options. Nous pouvons installer le modèle que vous avez déjà acheté, ou vous proposer une sélection de mitigeurs professionnels de haute qualité avec garantie fabricant.
                                </div>
</details>
<details className="group bg-white border border-slate-200 rounded-xl overflow-hidden">
<summary className="flex items-center justify-between p-4 cursor-pointer font-bold text-sm select-none">
                                    Y a-t-il une garantie sur l'installation ?
                                    <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
</summary>
<div className="p-4 pt-0 text-sm text-slate-500 leading-relaxed border-t border-slate-50">
                                    Oui, toutes nos installations sont couvertes par notre garantie de parfait achèvement et notre assurance responsabilité civile professionnelle. En cas de fuite sur les raccords effectués, nous intervenons gratuitement.
                                </div>
</details>
</div>
</section>
</div>
</main>
<footer className="bg-slate-900 text-slate-400 py-12 px-6 lg:px-40 mt-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-3 text-white mb-6">
<span className="material-symbols-outlined text-primary">plumbing</span>
<span className="text-xl font-bold">PlumbPro</span>
</div>
<p className="text-sm">Votres partenaire de confiance pour tous vos travaux de plomberie et sanitaire depuis 2010.</p>
</div>
<div>
<h5 className="text-white font-bold mb-6">Services</h5>
<ul className="space-y-4 text-sm">
<li><a className="hover:text-primary transition-colors" href="#">Dépannage Urgence</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Installation Robinetterie</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Chauffe-eau</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Débouchage</a></li>
</ul>
</div>
<div>
<h5 className="text-white font-bold mb-6">Entreprise</h5>
<ul className="space-y-4 text-sm">
<li><a className="hover:text-primary transition-colors" href="#">À Propos</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Recrutement</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Mentions Légales</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h5 className="text-white font-bold mb-6">Suivez-nous</h5>
<div className="flex gap-4">
<a className="size-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors" href="#"><span className="material-symbols-outlined text-white">share</span></a>
<a className="size-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors" href="#"><span className="material-symbols-outlined text-white">groups</span></a>
</div>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
<p>© 2024 PlumbPro France. Tous droits réservés.</p>
<div className="flex gap-6">
<a href="#">Cookies</a>
<a href="#">Confidentialité</a>
</div>
</div>
</footer>
</div>
</div>

    </>
  );
};

export default InstallationRobinetterie;

