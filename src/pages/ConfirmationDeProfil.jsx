import React from 'react';

const ConfirmationDeProfil = () => {
  return (
    <>
      
<div className="layout-container flex h-full min-h-screen flex-col">
{/*  Header / Navigation  */}
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 bg-white px-6 md:px-10 py-3 sticky top-0 z-50">
<div className="flex items-center gap-4 text-primary">
<div className="size-8">
<svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z" fill="currentColor"></path>
</svg>
</div>
<h2 className="text-slate-900 text-xl font-bold leading-tight tracking-[-0.015em]">ArtisanDirect</h2>
</div>
<div className="flex flex-1 justify-end gap-8 items-center">
<nav className="hidden md:flex items-center gap-9">
<a className="text-slate-700 text-sm font-medium hover:text-primary transition-colors" href="#">Accueil</a>
<a className="text-primary text-sm font-bold border-b-2 border-primary pb-1" href="#">Profil</a>
<a className="text-slate-700 text-sm font-medium hover:text-primary transition-colors" href="#">Paramètres</a>
</nav>
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-primary/20" data-alt="Portrait photo of a professional male user" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuC84f2Xt9d6IQ6uoshBMAX8qypiDX1Y0Q-0ajJ1M5amkLfWxEar4gEDgiW5QrlS14YPAU1w5ZX4x36oYgyNisJrnOOlSEU4nSte1JiydY7GBPDhh-LMhec_ML-XqlqPaJfYgJmorc_fwMaWHJufMYdQxKqacJc0VqyziOpH71-eZXkShH6aDOalErUoFzklLrhmwtRVprd-txne-K7XMnKC4TkvAUaXHJMdlG4n86eoZAAT843evVdPt8MutRKrhLlb3VfkaQZIpjs2");'></div>
</div>
</header>
<main className="flex-1 flex justify-center py-8 px-4 md:px-0">
<div className="layout-content-container flex flex-col max-w-[960px] flex-1 gap-8">
{/*  Page Title & Progress  */}
<div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
<div className="flex flex-wrap justify-between items-end gap-4 mb-6">
<div className="flex flex-col gap-1">
<h1 className="text-slate-900 text-3xl font-black leading-tight tracking-tight">Complétez votre profil</h1>
<p className="text-slate-500 text-base">Ces informations nous aident à personnaliser votre expérience sur ArtisanDirect.</p>
</div>
<div className="flex flex-col items-end gap-2 min-w-[120px]">
<div className="flex gap-2 items-center">
<span className="text-slate-900 text-sm font-bold">Progression</span>
<span className="text-primary text-sm font-black">65%</span>
</div>
<div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
<div className="h-full rounded-full bg-primary" ></div>
</div>
</div>
</div>
</div>
<form className="flex flex-col gap-6">
{/*  Section 1: Informations Personnelles  */}
<section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-200">
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-primary">person</span>
<h2 className="text-slate-900 text-xl font-bold">Informations personnelles</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/*  Photo Upload  */}
<div className="flex flex-col items-center gap-4">
<div className="relative group cursor-pointer">
<div className="size-32 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden border-4 border-slate-50 shadow-inner">
<span className="material-symbols-outlined text-slate-400 text-5xl group-hover:hidden">add_a_photo</span>
<img alt="Profile" className="w-full h-full object-cover hidden group-hover:block" data-alt="User profile picture preview" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnYVOqmaFu0Qq42XLZ-KJW6Us-thfQbErEcB9xPCFFm8sABu-U5ln8BvB9X6xczG7BOYZL2O97Rqb5l-pWycfbtoS-uVP8P5bfve49L-JS-Zf-pJltHxe3xNVaNBrL9eywE28OxG9jQwTGcRZ--NaxjEnj7CRa6_5LAShcXbPtpyVh7AUjM_wuzYOi2SpuVmJzu-odfdRpzmMMrNNFQZIq5TS-n4Ckk7SfBsfWXZ7vZR3uT0-xDpghRuWu9yi2AeTZhtOVNhbC7SJ6"/>
</div>
<div className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full shadow-lg">
<span className="material-symbols-outlined text-sm">edit</span>
</div>
</div>
<p className="text-xs text-slate-500 text-center">JPG, PNG ou GIF. <br/> Max 5 Mo.</p>
</div>
{/*  Name and Phone  */}
<div className="md:col-span-2 flex flex-col gap-5">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="flex flex-col gap-2">
<label className="text-sm font-semibold text-slate-700">Prénom</label>
<input className="w-full rounded-lg border-slate-300 focus:ring-primary focus:border-primary" type="text" value="Jean"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-sm font-semibold text-slate-700">Nom</label>
<input className="w-full rounded-lg border-slate-300 focus:ring-primary focus:border-primary" type="text" value="Dupont"/>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-sm font-semibold text-slate-700">Numéro de téléphone</label>
<div className="flex">
<span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-slate-300 bg-slate-50 text-slate-500 text-sm">+33</span>
<input className="w-full rounded-r-lg border-slate-300 focus:ring-primary focus:border-primary" placeholder="06 12 34 56 78" type="tel"/>
</div>
</div>
</div>
</div>
</section>
{/*  Section 2: Localisation  */}
<section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-200">
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-primary">location_on</span>
<h2 className="text-slate-900 text-xl font-bold">Localisation</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="flex flex-col gap-2 md:col-span-2">
<label className="text-sm font-semibold text-slate-700">Adresse</label>
<input className="w-full rounded-lg border-slate-300 focus:ring-primary focus:border-primary" placeholder="15 Rue de la Paix" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-sm font-semibold text-slate-700">Ville</label>
<input className="w-full rounded-lg border-slate-300 focus:ring-primary focus:border-primary" placeholder="Paris" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-sm font-semibold text-slate-700">Code Postal</label>
<input className="w-full rounded-lg border-slate-300 focus:ring-primary focus:border-primary" placeholder="75002" type="text"/>
</div>
</div>
<div className="mt-6 aspect-video w-full rounded-lg bg-slate-100 overflow-hidden relative border border-slate-200">
<img className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700" data-alt="Map showing the location of the user" data-location="Paris" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBL0rr02wZD0ZZwdvtueVzLcogCTYdm93hnCPTSJxd1VEzzw4yzpjCJU4d7blH8-U9_DxG9bnzpV9TcAK585CxDoJj18ZTS6OJJbLi8TVXu9nVwF42YxmaA9uZV_oIhpS1NO3h2oBwOWSAJQh_hqXVQImgzAgZFTjyhqYMH1XglRFA4hNeL2LN1wdTdCnFi4IwtwiZFlWID97iQuYiT8kt8sdI-aDi7Z69Pw_BjL6-zgmYiPPMLkpT5mVmYhzg3Nr0o0_ogvcmnBH03"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="bg-primary text-white p-2 rounded-full shadow-lg ring-4 ring-white/50">
<span className="material-symbols-outlined">person_pin_circle</span>
</div>
</div>
</div>
</section>
{/*  Section 3: Préférences  */}
<section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-200">
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-primary">settings</span>
<h2 className="text-slate-900 text-xl font-bold">Préférences</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="flex flex-col gap-4">
<label className="text-sm font-semibold text-slate-700">Langue préférée</label>
<select className="w-full rounded-lg border-slate-300 focus:ring-primary focus:border-primary">
<option value="fr">Français</option>
<option value="en">English</option>
<option value="es">Español</option>
</select>
</div>
<div className="flex flex-col gap-4">
<label className="text-sm font-semibold text-slate-700">Notifications</label>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer group">
<input defaultChecked className="rounded text-primary focus:ring-primary size-5 border-slate-300" type="checkbox"/>
<span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">Alertes de nouveaux messages</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input defaultChecked className="rounded text-primary focus:ring-primary size-5 border-slate-300" type="checkbox"/>
<span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">Mises à jour des projets</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="rounded text-primary focus:ring-primary size-5 border-slate-300" type="checkbox"/>
<span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">Offres promotionnelles</span>
</label>
</div>
</div>
</div>
</section>
{/*  Actions  */}
<div className="flex flex-col sm:flex-row justify-end gap-4 pb-12">
<button className="px-8 py-3 rounded-lg font-bold text-slate-600 border border-slate-300 hover:bg-slate-50 transition-all" type="button">
                            Annuler
                        </button>
<button className="px-8 py-3 rounded-lg font-bold text-white shadow-md shadow-primary/20 transition-all flex items-center justify-center gap-2 bg-green-600 cursor-default" disabled="true" type="submit"><span className="material-symbols-outlined text-base">check</span>
Enregistré</button>
</div>
</form>
</div>
</main>
{/*  Footer  */}
<footer className="bg-white border-t border-slate-200 py-12">
<div className="max-w-[960px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex flex-col gap-2 items-center md:items-start">
<div className="flex items-center gap-2 text-primary">
<svg className="size-6" fill="currentColor" viewBox="0 0 48 48">
<path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"></path>
</svg>
<span className="font-black text-slate-900">ArtisanDirect</span>
</div>
<p className="text-sm text-slate-500">La plateforme nÂ°1 pour trouver vos artisans locaux.</p>
</div>
<div className="flex gap-8">
<a className="text-sm text-slate-500 hover:text-primary" href="#">Conditions d'utilisation</a>
<a className="text-sm text-slate-500 hover:text-primary" href="#">Confidentialité</a>
<a className="text-sm text-slate-500 hover:text-primary" href="#">Support</a>
</div>
<p className="text-sm text-slate-500">Â© 2024 ArtisanDirect Inc.</p>
</div>
</footer>
</div>
<div className="fixed inset-0 z-[100] flex items-start justify-center pt-10 pointer-events-none" id="success-overlay">
{/*  Backdrop  */}
<div className="fixed inset-0 bg-slate-900/10 backdrop-blur-[1px] transition-opacity"></div>
{/*  Toast Notification  */}
<div className="relative flex items-center gap-4 bg-white border-l-4 border-green-500 px-6 py-4 rounded-xl shadow-2xl shadow-slate-200/50 animate-[bounce_1s_ease-in-out_1] pointer-events-auto">
<div className="size-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
<span className="material-symbols-outlined font-bold">check_circle</span>
</div>
<div className="flex flex-col">
<p className="text-slate-900 font-bold">Profil mis à jour</p>
<p className="text-slate-500 text-sm">Profil enregistré avec succès !</p>
</div>
<button className="ml-4 text-slate-400 hover:text-slate-600 transition-colors" onclick="this.parentElement.parentElement.remove()">
<span className="material-symbols-outlined text-lg">close</span>
</button>
</div>
</div>
    </>
  );
};

export default ConfirmationDeProfil;

