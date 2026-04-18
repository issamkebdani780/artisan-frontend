import React from 'react';

const DetailsDuServiceNettoyageProfond = () => {
  return (
    <>
      
<div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
{/*  Header / Nav  */}
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/10 bg-white px-6 md:px-20 py-4 sticky top-0 z-50">
<div className="flex items-center gap-4 text-primary">
<div className="size-8 flex items-center justify-center bg-primary/10 rounded-lg">
<span className="material-symbols-outlined">cleaning_services</span>
</div>
<h2 className="text-slate-900 text-xl font-bold leading-tight tracking-[-0.015em]">CleanPro</h2>
</div>
<div className="flex flex-1 justify-end gap-4 items-center">
<nav className="hidden md:flex gap-6 mr-6 text-sm font-medium">
<a className="text-primary" href="#">Services</a>
<a className="text-slate-600 hover:text-primary transition-colors" href="#">Experts</a>
<a className="text-slate-600 hover:text-primary transition-colors" href="#">Tarifs</a>
</nav>
<div className="flex gap-2">
<button className="flex items-center justify-center rounded-lg h-10 bg-slate-100 text-slate-900 px-3 hover:bg-slate-200 transition-colors">
<span className="material-symbols-outlined text-[20px]">share</span>
</button>
<button className="flex items-center justify-center rounded-lg h-10 bg-slate-100 text-slate-900 px-3 hover:bg-slate-200 transition-colors">
<span className="material-symbols-outlined text-[20px]">favorite</span>
</button>
</div>
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary/20" data-alt="Portrait photo de profil utilisateur" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCIiqdPYDqwa04-NtLNu0f9VRA3rXx697umtN-JjyjBYnFwVAv1k1SBjehOBRwZRpMRzxCBM_h1gzJOSzA48Y7qul2kdQVZ5K7vjPk5V6b8pWpvx2Q30W4dzfpqNxaeseMM7Wo37I2Gkx70H-mLAcCwcgRZw1hucO0enTr04A-C0W7ZVZJRjZDkCjGB9wHukAkJWAN4599KCYxjzUdDcGms0FZ9Ph8tMgCbOi5GoVR7T43vP8wMLuWQ9u90heBmLbu2vagPBeoUbbaq");'></div>
</div>
</header>
<main className="flex-1 max-w-[1200px] mx-auto w-full px-4 md:px-10 py-8">
{/*  Hero Image Section  */}
<div className="w-full mb-8">
<div className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-xl min-h-[400px] shadow-lg relative group" data-alt="Intérieur d'une cuisine moderne éclatante de propreté" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDC2687vQpFvjDmSVS-cimlUUsKvIPQlsgJJLhKnCgf4zKVhvR47jCzaKFE5yp2P8RcBLRe5N0FyiCIoQYR4KbFp8WsZQwpgVcdhRgT1xrDOCMGK10O2Knzb7pxAKkd88_zrt4MVJnJjxjecSK6oY5ZHT-OJadjrTDHQWqhh4WOP23mq7AyItOu2FqM1dOdWCchpRX3ljZ17YJV4BzqqjzvuUmEJXK_gEF6cos91jo3kQ3xkajdAbtL1ZuX6oQPQR8l0MVQDRc4usna");'>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="relative p-8 text-white">
<span className="bg-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 inline-block">Service Premium</span>
<h1 className="text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] mb-2">Nettoyage Profond</h1>
<p className="text-slate-200 text-lg max-w-2xl">Une remise à neuf complète et méticuleuse de votre domicile par nos experts certifiés.</p>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
{/*  Main Content  */}
<div className="lg:col-span-2 space-y-8">
{/*  Pricing Card  */}
<div className="bg-white p-6 rounded-xl border border-primary/10 shadow-sm flex flex-wrap items-center justify-between gap-4">
<div className="flex items-center gap-4">
<div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-3xl">payments</span>
</div>
<div>
<p className="text-slate-500 text-sm font-medium">Tarif transparent</p>
<p className="text-slate-900 text-3xl font-bold">45â‚¬ <span className="text-lg font-normal text-slate-500">/ heure</span></p>
</div>
</div>
<button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg transition-all shadow-md shadow-primary/20">
                            Réserver maintenant
                        </button>
</div>
{/*  Task List  */}
<section>
<h2 className="text-slate-900 text-2xl font-bold mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">checklist</span>
                            Tâches incluses dans le nettoyage profond
                        </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="flex gap-4 p-4 bg-white rounded-lg border border-slate-100">
<span className="material-symbols-outlined text-primary">kitchen</span>
<div>
<h3 className="font-bold text-slate-900">Électroménagers</h3>
<p className="text-sm text-slate-600">Nettoyage intérieur du four, du micro-ondes et du réfrigérateur.</p>
</div>
</div>
<div className="flex gap-4 p-4 bg-white rounded-lg border border-slate-100">
<span className="material-symbols-outlined text-primary">inventory_2</span>
<div>
<h3 className="font-bold text-slate-900">Placards &amp; Tiroirs</h3>
<p className="text-sm text-slate-600">Nettoyage minutieux de l'intérieur et extérieur des rangements.</p>
</div>
</div>
<div className="flex gap-4 p-4 bg-white rounded-lg border border-slate-100">
<span className="material-symbols-outlined text-primary">mop</span>
<div>
<h3 className="font-bold text-slate-900">Récurage Intensif</h3>
<p className="text-sm text-slate-600">Détartrage profond des joints, robinetteries et parois de douche.</p>
</div>
</div>
<div className="flex gap-4 p-4 bg-white rounded-lg border border-slate-100">
<span className="material-symbols-outlined text-primary">window</span>
<div>
<h3 className="font-bold text-slate-900">Fenêtres &amp; Rails</h3>
<p className="text-sm text-slate-600">Lavage des vitres intérieures, encadrements et rails coulissants.</p>
</div>
</div>
<div className="flex gap-4 p-4 bg-white rounded-lg border border-slate-100">
<span className="material-symbols-outlined text-primary">detector_status</span>
<div>
<h3 className="font-bold text-slate-900">Points de contact</h3>
<p className="text-sm text-slate-600">Désinfection des poignées, interrupteurs et plinthes.</p>
</div>
</div>
<div className="flex gap-4 p-4 bg-white rounded-lg border border-slate-100">
<span className="material-symbols-outlined text-primary">layers</span>
<div>
<h3 className="font-bold text-slate-900">Zones difficiles</h3>
<p className="text-sm text-slate-600">Nettoyage derrière les meubles lourds et sous les appareils.</p>
</div>
</div>
</div>
</section>
</div>
{/*  Sidebar: Top Rated Experts  */}
<aside className="space-y-6">
<div className="bg-white p-6 rounded-xl border border-primary/10 shadow-sm">
<h2 className="text-xl font-bold mb-6 text-slate-900">Experts disponibles</h2>
<div className="space-y-5">
{/*  Expert 1  */}
<div className="flex items-center gap-4">
<div className="size-14 rounded-full bg-cover bg-center border-2 border-primary" data-alt="Portrait d'une experte en nettoyage souriante" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBmvlqeqB3QdzFzGAHOYqE2QW3277IckxEeceiaae6QT2TBNeXUfwT1ekuPyvdH6N2k5Aq74rRDA-GpLuK5kInGduKz3qgFPLGNH89bgp77iINKsgvwh692QNSN6lqurvN9SlAgDkwsINEuCUy-si5jxGmFteFHMitFPkk9Fc_ruGRvP4gq5uusXeicn1FD_eV5M1KjwSl4__UErh-g6YotLH49RMhPv1PunpFxVO5LQADwVXwYbOUi9noYgDw5W_cU2z9_V-SNke1c");'></div>
<div className="flex-1">
<div className="flex justify-between items-start">
<h4 className="font-bold text-slate-900 leading-none">Sophie Martin</h4>
<span className="flex items-center text-amber-500 text-sm font-bold">
<span className="material-symbols-outlined text-xs">star</span> 4.9
                                        </span>
</div>
<p className="text-xs text-slate-500 mt-1">128 interventions</p>
<div className="flex gap-1 mt-1">
<span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded uppercase">Certifiée</span>
</div>
</div>
</div>
{/*  Expert 2  */}
<div className="flex items-center gap-4">
<div className="size-14 rounded-full bg-cover bg-center border-2 border-primary/20" data-alt="Portrait d'un expert en nettoyage professionnel" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCR9ZdtYOwltNQx4l27YXHV3GYNZEvOyPlYka3VpZz6MGuJtYQbsu-qgE-6OkOTnzj0SsGaVkhMAZ6e_HV6gnWY6-Sszw9-0en-5fohBvpYYqhS37fbdpzjL53t1oB0TwV4UjPv63RRPmx9LajkbzHsf5SxKGlb1C1tLT5TBAzriBxR9k1AT_cQnIDVv7EKHJbu5pQEJU4jBnv2dWzpMbtfjyTlb0mSef8hE4M_yrl1CvgdIJqYpZ5cd622fkfZRvcqGYBGpOSuSqwU");'></div>
<div className="flex-1">
<div className="flex justify-between items-start">
<h4 className="font-bold text-slate-900 leading-none">Marc Durand</h4>
<span className="flex items-center text-amber-500 text-sm font-bold">
<span className="material-symbols-outlined text-xs">star</span> 4.8
                                        </span>
</div>
<p className="text-xs text-slate-500 mt-1">94 interventions</p>
<div className="flex gap-1 mt-1">
<span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded uppercase">Ponctuel</span>
</div>
</div>
</div>
{/*  Expert 3  */}
<div className="flex items-center gap-4">
<div className="size-14 rounded-full bg-cover bg-center border-2 border-primary/20" data-alt="Portrait d'une employée de maison qualifiée" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAv3eOlYDWYFCJBhNZ1ktwH71AUiYhKG3BlpRIn3FGkuZaHdjgi87xUwV_Z-4AEjjMmlaLWJnrko27H8SJAb8x1-XL3wfoNK-DSy9p6K0OvXzTmAz7ETEOfohBc6BXucmbK7G7kedcTwWGP9d9IloV9rap3OwEwpadpLkI80iLMBIXVYzeshk7kpTxt3Ub4sS6XgBD0bjRbX8OwPoxuNcRKcHQrmR1t0bV2YO7N56I5cHxx35VTPNdqMbKVfaIPzCwhZTwZ92G5RRXg");'></div>
<div className="flex-1">
<div className="flex justify-between items-start">
<h4 className="font-bold text-slate-900 leading-none">Léa Roux</h4>
<span className="flex items-center text-amber-500 text-sm font-bold">
<span className="material-symbols-outlined text-xs">star</span> 5.0
                                        </span>
</div>
<p className="text-xs text-slate-500 mt-1">215 interventions</p>
<div className="flex gap-1 mt-1">
<span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded uppercase">Expert Plus</span>
</div>
</div>
</div>
</div>
<button className="w-full mt-6 text-primary font-bold text-sm hover:underline">Voir tous les experts</button>
</div>
{/*  Trust Indicators  */}
<div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
<h3 className="font-bold text-primary mb-4">Pourquoi nous choisir ?</h3>
<ul className="space-y-3">
<li className="flex items-start gap-2 text-sm text-slate-700">
<span className="material-symbols-outlined text-primary text-lg leading-none">verified_user</span>
<span>Assurance dommages incluse jusqu'à 2Mâ‚¬</span>
</li>
<li className="flex items-start gap-2 text-sm text-slate-700">
<span className="material-symbols-outlined text-primary text-lg leading-none">eco</span>
<span>Produits éco-responsables sur demande</span>
</li>
<li className="flex items-start gap-2 text-sm text-slate-700">
<span className="material-symbols-outlined text-primary text-lg leading-none">history</span>
<span>Annulation gratuite 24h avant</span>
</li>
</ul>
</div>
</aside>
</div>
{/*  Location Section  */}
<section className="mt-12">
<h2 className="text-slate-900 text-2xl font-bold mb-6">Zone d'intervention</h2>
<div className="w-full h-64 rounded-xl overflow-hidden border border-slate-200 shadow-inner">
<div className="w-full h-full bg-slate-200 relative flex items-center justify-center">
<img className="w-full h-full object-cover opacity-50 grayscale" data-alt="Carte stylisée de la zone de service à Paris" data-location="Paris, France" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAw0x3BmWwPvhVqp7ciswL-ZAKyUM33a2u938cnKLfcS2j8_BatDk3uTyGQ_Li7ziwuzfVt-548LaAf33IAsZJ2vXt1JBJv0Hsgu_iRWSdZ71KJKXL4jfN9I4kYAgaG0QIY4oiFEVzTDbQ2-UDwlR5UvcxVJrbQ0JbSlT11w5ZsbVPd0sa4FDC3VPhflI28j8P0LhBuDwatiwFre-dTNRAYDk-jWasXLwTZiVA1kbji5TWG79TonNXT39W1PvzBMDtaEK7GtZMnNwUr"/>
<div className="absolute bg-white px-4 py-2 rounded-lg shadow-lg border border-primary flex items-center gap-2">
<span className="material-symbols-outlined text-primary">location_on</span>
<span className="font-bold text-sm">Disponible à Paris et Île-de-France</span>
</div>
</div>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="bg-slate-900 text-slate-400 py-12 px-6 md:px-20 mt-12 border-t border-slate-800">
<div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-3 text-white mb-4">
<span className="material-symbols-outlined text-primary text-3xl">cleaning_services</span>
<h2 className="text-2xl font-bold">CleanPro</h2>
</div>
<p className="max-w-sm mb-6">Le leader du nettoyage professionnel à domicile. Nous transformons votre espace de vie avec excellence et rigueur.</p>
</div>
<div>
<h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Liens utiles</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-primary transition-colors" href="#">Aide &amp; Support</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Devenir Expert</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Blog Propreté</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Légal</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-primary transition-colors" href="#">Mentions Légales</a></li>
<li><a className="hover:text-primary transition-colors" href="#">CGU / CGV</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Confidentialité</a></li>
</ul>
</div>
</div>
<div className="max-w-[1200px] mx-auto mt-12 pt-8 border-t border-slate-800 text-center text-xs">
                © 2024 CleanPro SAS. Tous droits réservés.
            </div>
</footer>
</div>
</div>

    </>
  );
};

export default DetailsDuServiceNettoyageProfond;

