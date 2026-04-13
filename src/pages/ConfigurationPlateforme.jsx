import React from 'react';

const ConfigurationPlateforme = () => {
  return (
    <>
      
<div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
{/*  Header Section  */}
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 px-6 md:px-10 py-3 bg-white sticky top-0 z-50">
<div className="flex items-center gap-8">
<div className="flex items-center gap-4 text-primary">
<div className="size-8 bg-primary/10 rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-primary">shield_person</span>
</div>
<h2 className="text-slate-900 text-lg font-bold leading-tight tracking-[-0.015em]">Admin Dashboard</h2>
</div>
<label className="hidden md:flex flex-col min-w-40 !h-10 max-w-64">
<div className="flex w-full flex-1 items-stretch rounded-xl h-full border border-slate-200">
<div className="text-slate-400 flex items-center justify-center pl-4 rounded-l-xl" data-icon="search">
<span className="material-symbols-outlined text-[20px]">search</span>
</div>
<input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-slate-900 focus:outline-0 focus:ring-0 border-none bg-transparent placeholder:text-slate-400 px-4 rounded-l-none pl-2 text-sm font-normal" placeholder="Rechercher..." value=""/>
</div>
</label>
</div>
<div className="flex flex-1 justify-end gap-4 md:gap-6">
<div className="flex gap-2">
<button className="flex items-center justify-center rounded-xl h-10 w-10 hover:bg-slate-100 transition-colors">
<span className="material-symbols-outlined text-slate-600">notifications</span>
</button>
<button className="flex items-center justify-center rounded-xl h-10 w-10 hover:bg-slate-100 transition-colors">
<span className="material-symbols-outlined text-slate-600">settings</span>
</button>
</div>
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary/20" data-alt="Portrait d'un administrateur souriant" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBOmL8EJGXSjtzGfQDvUCHVOWk3feRSE3vfaqhrJYNy2xcYPpdjZ04zTlBnXP--KQ8qGkgdv7X6D_E3frlumDsTs_YwMfnLN-Gd9u3zsTkjjr552PxPZXp9a27OwPKmHHapLPERwj475rG4X4Sf7p8n9bskdNgsizUaYw2dlVRNtFFNTY4QSpPu7k-MxEZOsFp-avjHVnpCo-hSr4dW-xRszcFatHnhKERVf40znchH_Aq074KNNfKL0QKREmsNyN--vxwdsFIOv5df");'></div>
</div>
</header>
{/*  Navigation Tabs  */}
<div className="bg-white border-b border-slate-200 px-6 md:px-10">
<div className="flex overflow-x-auto no-scrollbar gap-8">
<a className="flex flex-col items-center justify-center border-b-[3px] border-transparent text-slate-500 pb-3 pt-4 whitespace-nowrap hover:text-primary transition-colors" href="#">
<p className="text-sm font-bold leading-normal tracking-[0.015em]">Mon compte</p>
</a>
<a className="flex flex-col items-center justify-center border-b-[3px] border-primary text-primary pb-3 pt-4 whitespace-nowrap" href="#">
<p className="text-sm font-bold leading-normal tracking-[0.015em]">Configuration Plateforme</p>
</a>
<a className="flex flex-col items-center justify-center border-b-[3px] border-transparent text-slate-500 pb-3 pt-4 whitespace-nowrap hover:text-primary transition-colors" href="#">
<p className="text-sm font-bold leading-normal tracking-[0.015em]">Notifications</p>
</a>
<a className="flex flex-col items-center justify-center border-b-[3px] border-transparent text-slate-500 pb-3 pt-4 whitespace-nowrap hover:text-primary transition-colors" href="#">
<p className="text-sm font-bold leading-normal tracking-[0.015em]">Logs &amp; Audit</p>
</a>
</div>
</div>
{/*  Main Content Area  */}
<main className="flex-1 px-6 md:px-10 py-8 max-w-[1200px] mx-auto w-full">
{/*  Page Header  */}
<div className="flex flex-col gap-2 mb-8">
<h1 className="text-slate-900 text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Configuration Plateforme</h1>
<p className="text-slate-600 text-base font-normal leading-normal">
                        Gérez les paramètres globaux, financiers et de sécurité de votre instance administrative.
                    </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
{/*  Section: Paramètres Financiers  */}
<section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">payments</span>
<h2 className="text-slate-900 text-xl font-bold">Paramètres Financiers</h2>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between p-3 rounded-lg bg-slate-50">
<span className="text-slate-600 text-sm">Devise par défaut</span>
<div className="flex items-center gap-2">
<span className="text-slate-900 font-medium">Euro (EUR)</span>
<button className="material-symbols-outlined text-slate-400 hover:text-primary text-sm">edit</button>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded-lg bg-slate-50">
<span className="text-slate-600 text-sm">TVA (%)</span>
<div className="flex items-center gap-2">
<span className="text-slate-900 font-medium">20.0%</span>
<button className="material-symbols-outlined text-slate-400 hover:text-primary text-sm">edit</button>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded-lg bg-slate-50">
<span className="text-slate-600 text-sm">Seuil de paiement</span>
<div className="flex items-center gap-2">
<span className="text-slate-900 font-medium">50.00 €</span>
<button className="material-symbols-outlined text-slate-400 hover:text-primary text-sm">edit</button>
</div>
</div>
</div>
<button className="mt-6 w-full py-2 bg-primary text-white rounded-lg font-semibold text-sm hover:bg-primary/90 transition-all">Enregistrer les modifications</button>
</section>
{/*  Section: Langues et Localisation  */}
<section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">language</span>
<h2 className="text-slate-900 text-xl font-bold">Langues &amp; Localisation</h2>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between p-3 rounded-lg bg-slate-50">
<span className="text-slate-600 text-sm">Langue principale</span>
<select className="bg-transparent border-none text-slate-900 text-sm font-medium focus:ring-0">
<option>Français (FR)</option>
<option>Anglais (EN)</option>
<option>Espagnol (ES)</option>
</select>
</div>
<div className="flex items-center justify-between p-3 rounded-lg bg-slate-50">
<span className="text-slate-600 text-sm">Fuseau horaire</span>
<div className="flex items-center gap-2">
<span className="text-slate-900 font-medium">(GMT+01:00) Paris</span>
<button className="material-symbols-outlined text-slate-400 hover:text-primary text-sm">edit</button>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded-lg bg-slate-50">
<span className="text-slate-600 text-sm">Format de date</span>
<div className="flex items-center gap-2">
<span className="text-slate-900 font-medium">JJ/MM/AAAA</span>
<button className="material-symbols-outlined text-slate-400 hover:text-primary text-sm">expand_more</button>
</div>
</div>
</div>
<div className="mt-6 flex items-center justify-between px-2">
<span className="text-sm text-slate-500">Auto-détection de la région</span>
<div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
<input defaultChecked className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-slate-300 appearance-none cursor-pointer checked:right-0 checked:border-primary" id="toggle_region" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-slate-300 cursor-pointer" htmlFor="toggle_region"></label>
</div>
</div>
</section>
{/*  Section: Sécurité de la Plateforme  */}
<section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm lg:col-span-2">
<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">security</span>
<h2 className="text-slate-900 text-xl font-bold">Sécurité de la Plateforme</h2>
</div>
<span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-bold uppercase tracking-wider">État : Sécurisé</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="flex flex-col gap-3 p-4 border border-slate-100 rounded-xl hover:border-primary/30 transition-all group">
<div className="flex items-center justify-between">
<span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">lock_open</span>
<span className="text-[10px] font-bold text-slate-400 uppercase">Paramètre</span>
</div>
<h3 className="text-slate-900 font-bold text-sm">Double Authentification (2FA)</h3>
<p className="text-slate-500 text-xs">Exiger le 2FA pour tous les administrateurs.</p>
<div className="mt-2 flex items-center gap-2">
<button className="bg-primary px-3 py-1 text-white text-[10px] font-bold rounded hover:bg-primary/90">ACTIVER</button>
</div>
</div>
<div className="flex flex-col gap-3 p-4 border border-slate-100 rounded-xl hover:border-primary/30 transition-all group">
<div className="flex items-center justify-between">
<span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">password</span>
<span className="text-[10px] font-bold text-slate-400 uppercase">Paramètre</span>
</div>
<h3 className="text-slate-900 font-bold text-sm">Complexité de Mot de Passe</h3>
<p className="text-slate-500 text-xs">Niveau minimum : Fort (12+ caractères).</p>
<div className="mt-2 flex items-center gap-2">
<button className="bg-slate-200 px-3 py-1 text-slate-700 text-[10px] font-bold rounded">CONFIGURER</button>
</div>
</div>
<div className="flex flex-col gap-3 p-4 border border-slate-100 rounded-xl hover:border-primary/30 transition-all group">
<div className="flex items-center justify-between">
<span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">timer</span>
<span className="text-[10px] font-bold text-slate-400 uppercase">Paramètre</span>
</div>
<h3 className="text-slate-900 font-bold text-sm">Expiration de Session</h3>
<p className="text-slate-500 text-xs">Déconnexion automatique après 30 minutes.</p>
<div className="mt-2 flex items-center gap-2">
<button className="bg-slate-200 px-3 py-1 text-slate-700 text-[10px] font-bold rounded">MODIFIER</button>
</div>
</div>
</div>
</section>
</div>
{/*  Action Bar Footer  */}
<div className="mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-4">
<button className="px-6 py-2.5 bg-primary text-white font-bold rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all">Sauvegarder tout</button>
<button className="px-6 py-2.5 bg-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-300 transition-all">Réinitialiser</button>
</div>
<p className="text-xs text-slate-500 italic">Dernière mise à jour : il y a 2 heures par Admin (ID: 4492)</p>
</div>
</main>
</div>
</div>
<style>
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        .toggle-checkbox:checked {
            right: 0;
            border-color: #6b21a8;
        }
        .toggle-checkbox:checked + .toggle-label {
            background-color: #6b21a8;
        }
    </style>

    </>
  );
};

export default ConfigurationPlateforme;
