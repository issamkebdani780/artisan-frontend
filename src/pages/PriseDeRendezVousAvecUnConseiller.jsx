import React from 'react';

const PriseDeRendezVousAvecUnConseiller = () => {
  return (
    <>
      
<div className="layout-container flex h-full grow flex-col">
{/*  Header  */}
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/20 bg-white px-6 md:px-10 py-3 sticky top-0 z-50">
<div className="flex items-center gap-4">
<div className="text-primary">
<span className="material-symbols-outlined text-3xl">handyman</span>
</div>
<h2 className="text-slate-900 text-lg font-bold leading-tight tracking-[-0.015em]">Mihnati PRO</h2>
</div>
<div className="flex flex-1 justify-end gap-8">
<nav className="hidden md:flex items-center gap-9">
<a className="text-slate-600 text-sm font-medium hover:text-primary transition-colors" href="#">Tableau de bord</a>
<a className="text-slate-600 text-sm font-medium hover:text-primary transition-colors" href="#">Projets</a>
<a className="text-slate-600 text-sm font-medium hover:text-primary transition-colors" href="#">Conseils</a>
</nav>
<div className="flex gap-2">
<button className="flex size-10 cursor-pointer items-center justify-center rounded-xl bg-primary/10 text-primary hover:bg-primary/20 transition-all">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="flex size-10 cursor-pointer items-center justify-center rounded-xl bg-primary/10 text-primary hover:bg-primary/20 transition-all">
<span className="material-symbols-outlined">account_circle</span>
</button>
</div>
</div>
</header>
<main className="flex flex-1 justify-center py-10 px-4">
<div className="layout-content-container flex flex-col max-w-[960px] flex-1 gap-8">
{/*  Introduction  */}
<div className="flex flex-col gap-3">
<h1 className="text-slate-900 text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Prendre rendez-vous avec un conseiller</h1>
<p className="text-slate-600 text-base font-normal leading-normal max-w-2xl">
                        Un entretien personnalisé peut vous aider à clarifier les avertissements administratifs, optimiser votre gestion ou améliorer la qualité de vos services.
                    </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
{/*  Left Column: Date & Time  */}
<div className="flex flex-col gap-6 bg-white p-6 rounded-xl border border-primary/10 shadow-sm">
<div>
<h3 className="text-slate-900 text-lg font-bold mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">calendar_month</span> 1. Choisir une date
                            </h3>
{/*  Calendar  */}
<div className="flex flex-col gap-0.5 w-full">
<div className="flex items-center p-1 justify-between mb-2">
<button className="hover:text-primary transition-colors">
<span className="material-symbols-outlined">chevron_left</span>
</button>
<p className="text-slate-900 text-base font-bold flex-1 text-center">Novembre 2023</p>
<button className="hover:text-primary transition-colors">
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
<div className="grid grid-cols-7 text-center">
<p className="text-slate-400 text-[13px] font-bold h-10 flex items-center justify-center">L</p>
<p className="text-slate-400 text-[13px] font-bold h-10 flex items-center justify-center">M</p>
<p className="text-slate-400 text-[13px] font-bold h-10 flex items-center justify-center">M</p>
<p className="text-slate-400 text-[13px] font-bold h-10 flex items-center justify-center">J</p>
<p className="text-slate-400 text-[13px] font-bold h-10 flex items-center justify-center">V</p>
<p className="text-slate-400 text-[13px] font-bold h-10 flex items-center justify-center">S</p>
<p className="text-slate-400 text-[13px] font-bold h-10 flex items-center justify-center">D</p>
{/*  Days  */}
<button className="h-10 w-full text-slate-300 text-sm cursor-default">28</button>
<button className="h-10 w-full text-slate-300 text-sm cursor-default">29</button>
<button className="h-10 w-full text-slate-300 text-sm cursor-default">30</button>
<button className="h-10 w-full text-slate-300 text-sm cursor-default">31</button>
<button className="h-10 w-full text-slate-900 text-sm hover:bg-primary/10 rounded-full transition-colors">1</button>
<button className="h-10 w-full text-slate-900 text-sm hover:bg-primary/10 rounded-full transition-colors">2</button>
<button className="h-10 w-full text-slate-900 text-sm hover:bg-primary/10 rounded-full transition-colors">3</button>
<button className="h-10 w-full text-slate-900 text-sm hover:bg-primary/10 rounded-full transition-colors">4</button>
<button className="h-10 w-full text-slate-900 text-sm hover:bg-primary/10 rounded-full transition-colors">5</button>
<button className="h-10 w-full text-slate-900 text-sm hover:bg-primary/10 rounded-full transition-colors">6</button>
<button className="h-10 w-full text-slate-900 text-sm hover:bg-primary/10 rounded-full transition-colors">7</button>
<button className="h-10 w-full text-slate-900 text-sm hover:bg-primary/10 rounded-full transition-colors">8</button>
<button className="h-10 w-full text-slate-900 text-sm hover:bg-primary/10 rounded-full transition-colors">9</button>
<button className="h-10 w-full text-slate-900 text-sm hover:bg-primary/10 rounded-full transition-colors">10</button>
<button className="h-10 w-full text-slate-900 text-sm hover:bg-primary/10 rounded-full transition-colors">11</button>
<button className="h-10 w-full text-white text-sm bg-primary rounded-full font-bold">12</button>
<button className="h-10 w-full text-slate-900 text-sm hover:bg-primary/10 rounded-full transition-colors">13</button>
<button className="h-10 w-full text-slate-900 text-sm hover:bg-primary/10 rounded-full transition-colors">14</button>
<button className="h-10 w-full text-slate-900 text-sm hover:bg-primary/10 rounded-full transition-colors">15</button>
<button className="h-10 w-full text-slate-900 text-sm hover:bg-primary/10 rounded-full transition-colors">16</button>
<button className="h-10 w-full text-slate-900 text-sm hover:bg-primary/10 rounded-full transition-colors">17</button>
</div>
</div>
</div>
<div className="border-t border-primary/10 pt-6">
<h3 className="text-slate-900 text-lg font-bold mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">schedule</span> 2. Créneau horaire
                            </h3>
<div className="grid grid-cols-3 gap-3">
<button className="py-2.5 px-4 border border-primary/20 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-all">09:00</button>
<button className="py-2.5 px-4 border border-primary/20 rounded-lg text-sm font-medium bg-primary/20 text-primary border-primary ring-1 ring-primary">10:30</button>
<button className="py-2.5 px-4 border border-primary/20 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-all">11:00</button>
<button className="py-2.5 px-4 border border-primary/20 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-all">14:00</button>
<button className="py-2.5 px-4 border border-primary/20 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-all">15:30</button>
<button className="py-2.5 px-4 border border-primary/20 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-all">16:45</button>
</div>
</div>
</div>
{/*  Right Column: Details  */}
<div className="flex flex-col gap-6 bg-white p-6 rounded-xl border border-primary/10 shadow-sm">
<div>
<h3 className="text-slate-900 text-lg font-bold mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">video_chat</span> 3. Mode de rendez-vous
                            </h3>
<div className="flex flex-col gap-3">
<label className="flex items-center gap-4 p-4 rounded-lg border-2 border-primary/10 hover:border-primary/50 cursor-pointer transition-all group">
<input defaultChecked className="w-5 h-5 text-primary focus:ring-primary border-primary/30" name="mode" type="radio"/>
<div className="flex flex-col">
<span className="text-sm font-bold text-slate-900">Vidéoconférence</span>
<span className="text-xs text-slate-500">Idéal pour le partage d'écran et documents</span>
</div>
<span className="material-symbols-outlined ml-auto text-primary group-hover:scale-110 transition-transform">videocam</span>
</label>
<label className="flex items-center gap-4 p-4 rounded-lg border-2 border-primary/10 hover:border-primary/50 cursor-pointer transition-all group">
<input className="w-5 h-5 text-primary focus:ring-primary border-primary/30" name="mode" type="radio"/>
<div className="flex flex-col">
<span className="text-sm font-bold text-slate-900">Appel Téléphonique</span>
<span className="text-xs text-slate-500">Nous vous appellerons sur votre numéro</span>
</div>
<span className="material-symbols-outlined ml-auto text-primary group-hover:scale-110 transition-transform">call</span>
</label>
</div>
</div>
<div>
<h3 className="text-slate-900 text-lg font-bold mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">notes</span> 4. Notes additionnelles
                            </h3>
<div className="flex flex-col gap-2">
<label className="text-xs font-medium text-slate-500" htmlFor="topics">Précisez les sujets que vous souhaitez aborder</label>
<textarea className="w-full rounded-lg border-primary/20 bg-background-light focus:border-primary focus:ring-primary transition-all text-sm placeholder:text-slate-400" id="topics" placeholder="Ex: Questions sur les nouvelles normes de sécurité, aide administrative pour les taxes..." rows="4"></textarea>
</div>
</div>
<div className="mt-auto pt-6 border-t border-primary/10">
<button className="w-full py-4 px-6 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2">
<span className="material-symbols-outlined">check_circle</span>
                                Confirmer le rendez-vous
                            </button>
<p className="text-[11px] text-center mt-3 text-slate-400 uppercase tracking-wider font-semibold">Confirmation instantanée par email</p>
</div>
</div>
</div>
{/*  Footer / Info Section  */}
<div className="flex flex-wrap gap-4 items-center justify-between p-6 bg-primary/5 rounded-xl border border-primary/10">
<div className="flex items-center gap-4">
<div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
<span className="material-symbols-outlined">support_agent</span>
</div>
<div>
<p className="text-sm font-bold text-slate-900">Besoin d'aide urgente ?</p>
<p className="text-xs text-slate-500">Contactez notre support technique direct au 01 23 45 67 89</p>
</div>
</div>
<div className="flex gap-4">
<img alt="Logo de l'organisation artisanale" className="h-8 opacity-50 grayscale hover:grayscale-0 transition-all" data-alt="Official artisan union logo badge" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTkoKtogmi0v6ssJCzQy7ke7ucKVzgtgZQcSSpr2FowFeEFyPFFpl8cltZjaJsnNFWqzJeWpuQMrBxOCv_dRPJsIiPLvHo4NHvXMwp-hCDGkuSy5w1MRAxCHfIBphkV2yNMcWIxPrSOYmkIuG7X8Z54x9vI0uQ6-rRmHFbD_X-wnfwftzq7ID_OVn74d1Ip6ZOb8GwMMrVI3EITzW1tLDhXA4El63neKofZHMtwU06zcUgeZALBvTsJlBE73EXmnAm1w4RzIdRzll4"/>
</div>
</div>
</div>
</main>
</div>

    </>
  );
};

export default PriseDeRendezVousAvecUnConseiller;
