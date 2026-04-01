import React from 'react';

const PeintureInterieure = () => {
  return (
    <>
      
<div className="relative flex flex-col min-h-screen">
<header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-6 py-3">
<div className="max-w-7xl mx-auto flex items-center justify-between">
<div className="flex items-center gap-8">
<div className="flex items-center gap-3">
<div className="bg-primary text-white p-1.5 rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined">brush</span>
</div>
<h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Services Pro</h2>
</div>
<nav className="hidden md:flex items-center gap-6">
<a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Expertise</a>
<a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Processus</a>
<a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Peintres</a>
<a className="text-sm font-semibold text-primary underline underline-offset-4" href="#">Devis</a>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg px-3 py-1.5 border border-transparent focus-within:border-primary/50 transition-all">
<span className="material-symbols-outlined text-slate-400 text-xl">search</span>
<input className="bg-transparent border-none focus:ring-0 text-sm w-48 placeholder:text-slate-400" placeholder="Rechercher un service..." type="text"/>
</div>
<div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden border-2 border-primary/30">
<img alt="Avatar utilisateur" data-alt="Portrait of a professional user smiling" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYSJrNzOsbEoYVLTGZfqFu4vl7TrLL2m1zPLek67ZBe8sr1I_-JhO_LYBKrT7-noVJ6RJHop4L2b1atRKSLRJI0FDwoBAWH0mYtEra4lT8eeYFPyWJjiALSn5LlFD-4n9PVx2WskQTg7tqsOZ7QGSKjhaDRl99y8G-RAPaCIFXoZAgGhV6RpRqmi7T3wte2QDnWL8hIYV-QfJ4QgRDzCnJihRQ0F5L5FPcKOEN_UtZ575hWLy6ObFnrOKnVx-Uqr_VCivXxnVOeQgi"/>
</div>
</div>
</div>
</header>
<div className="flex flex-1 max-w-7xl mx-auto w-full">
<aside className="hidden lg:flex flex-col w-72 border-r border-primary/10 p-6 gap-8 shrink-0">
<div className="flex flex-col gap-1">
<h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Navigation</h3>
<nav className="flex flex-col gap-1 mt-2">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-primary/5 transition-all text-slate-600 dark:text-slate-400" href="#">
<span className="material-symbols-outlined">home</span>
<span className="text-sm font-medium">Tableau de bord</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-primary text-white shadow-lg shadow-primary/25" href="#">
<span className="material-symbols-outlined">format_paint</span>
<span className="text-sm font-medium">Peinture Intérieure</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-primary/5 transition-all text-slate-600 dark:text-slate-400" href="#">
<span className="material-symbols-outlined">deck</span>
<span className="text-sm font-medium">Peinture Extérieure</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-primary/5 transition-all text-slate-600 dark:text-slate-400" href="#">
<span className="material-symbols-outlined">palette</span>
<span className="text-sm font-medium">Décoration &amp; Design</span>
</a>
</nav>
</div>
<div className="flex flex-col gap-1">
<h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Support</h3>
<nav className="flex flex-col gap-1 mt-2">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-primary/5 transition-all text-slate-600 dark:text-slate-400" href="#">
<span className="material-symbols-outlined">description</span>
<span className="text-sm font-medium">Mes Devis</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-primary/5 transition-all text-slate-600 dark:text-slate-400" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="text-sm font-medium">Paramètres</span>
</a>
</nav>
</div>
<div className="mt-auto bg-primary/10 rounded-2xl p-5 border border-primary/20">
<p className="text-sm font-bold text-primary mb-1">Besoin d'aide ?</p>
<p className="text-xs text-slate-600 dark:text-slate-400 mb-4">Nos experts sont disponibles pour vous conseiller.</p>
<button className="w-full py-2 bg-primary text-white text-xs font-bold rounded-lg hover:bg-primary/90 transition-all">Contacter un pro</button>
</div>
</aside>
<main className="flex-1 overflow-y-auto px-6 py-8">
<section className="relative rounded-3xl overflow-hidden min-h-[400px] flex flex-col justify-center px-10 mb-12 group">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="Modern interior with freshly painted purple accent wall" ></div>
<div className="absolute inset-0 bg-gradient-to-r from-background-dark/90 via-background-dark/50 to-transparent"></div>
<div className="relative max-w-lg">
<span className="inline-block px-3 py-1 bg-primary text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">Service Premium</span>
<h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">Redonnez vie à votre intérieur</h1>
<p className="text-slate-200 text-lg mb-8 leading-relaxed">Une finition impeccable et durable, réalisée par les meilleurs artisans de votre région. Transformez chaque pièce selon vos envies.</p>
<div className="flex flex-wrap gap-4">
<button className="px-8 py-3 bg-primary text-white font-bold rounded-xl hover:shadow-xl hover:shadow-primary/40 transition-all">Demander un devis</button>
<button className="px-8 py-3 bg-white/10 backdrop-blur-md text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all">Voir nos réalisations</button>
</div>
</div>
</section>
<div className="mb-16">
<div className="flex flex-col mb-8">
<h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Notre Processus d'Excellence</h2>
<div className="h-1.5 w-20 bg-primary mt-2 rounded-full"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-primary/10 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
<span className="material-symbols-outlined text-3xl">wallpaper</span>
</div>
<h3 className="text-xl font-bold mb-3">1. Préparation des surfaces</h3>
<p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Ponçage minutieux, rebouchage des fissures et lissage des imperfections. Nous créons la toile parfaite pour une finition lisse comme du velours.</p>
</div>
<div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-primary/10 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
<span className="material-symbols-outlined text-3xl">layers</span>
</div>
<h3 className="text-xl font-bold mb-3">2. Double Couche de Finition</h3>
<p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Application experte de deux couches croisées utilisant des peintures professionnelles haut de gamme. Intensité de couleur et durabilité garanties.</p>
</div>
<div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-primary/10 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
<span className="material-symbols-outlined text-3xl">shield</span>
</div>
<h3 className="text-xl font-bold mb-3">3. Protection Totale</h3>
<p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Bâchage hermétique des sols et du mobilier. Nous traitons votre domicile avec respect et le laissons impeccable après notre passage.</p>
</div>
</div>
</div>
<div className="mb-16">
<div className="flex items-center justify-between mb-8">
<div>
<h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Nos Experts Certifiés</h2>
<p className="text-slate-500 text-sm mt-1">Sélectionnés pour leur savoir-faire et leur minutie.</p>
</div>
<a className="text-primary font-bold text-sm flex items-center gap-1 hover:underline" href="#">Voir tout le réseau <span className="material-symbols-outlined text-base">arrow_forward</span></a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
<div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-primary/5 shadow-sm group">
<div className="h-32 bg-primary/5 relative">
<img alt="Artisan Painter" className="w-full h-full object-cover" data-alt="Portrait of a smiling professional male painter in uniform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACvxG5adJBkRx4fJ2_nJkCfUCpmpNheHBhs8-CYAYLxcJXODNEBziPCbSxzTMoD3NU_kiz1udwAMwMIX-_Gu8nrELkYFA8WwhW7z7wFfN_UFdiP4GCxv0jYaxpLnFsL4YeCrNY4vpKU8uvPqIVbQKV6tE5CwXdIwR0N1ltYe4lRT36F-wWGL04bT_FGVov6lq-frqo1ok5RVmZzuGLZZqLKlO7G8HDM6k3jOaPsmYblyPT8ZsDP8MaiLwTaAGyR9ek1HkEYWLklNRH"/>
<div className="absolute bottom-2 right-2 bg-white dark:bg-slate-900 px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
<span className="material-symbols-outlined text-amber-400 text-sm font-fill">star</span>
<span className="text-xs font-bold italic">4.9</span>
</div>
</div>
<div className="p-4">
<h4 className="font-bold text-slate-900 dark:text-white">Marc Dupont</h4>
<p className="text-xs text-slate-500 mb-4">12 ans d'expérience</p>
<button className="w-full py-2 border border-primary text-primary text-xs font-bold rounded-lg hover:bg-primary hover:text-white transition-all">Choisir ce pro</button>
</div>
</div>
<div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-primary/5 shadow-sm group">
<div className="h-32 bg-primary/5 relative">
<img alt="Artisane Painter" className="w-full h-full object-cover" data-alt="Professional woman painter smiling at work" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWnzBvdm4BubWDvyAInY2oVq16Cd_9oeNRvtrFcK5flYn6kCCddYnVZau7TAcWQCPIk5y4An1xUru9FXOH9I5wHL61OQ4f_JgqO13HGBHdPsxiB2NBhxHG9urlJRtiSk2HdR-2a3DGFCOxYgv08z8NxkVmPS-vfQjyKhLak-qRDXQhCKElY470Z9Na7pGVNV3ldmqJ-kcO9YzsVRaBI2bEG0GbwE_TfskRY3n6hsisHHIFviUHKK5SslyiS03nEak4CKbv-uVJ2hfR"/>
<div className="absolute bottom-2 right-2 bg-white dark:bg-slate-900 px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
<span className="material-symbols-outlined text-amber-400 text-sm font-fill">star</span>
<span className="text-xs font-bold italic">5.0</span>
</div>
</div>
<div className="p-4">
<h4 className="font-bold text-slate-900 dark:text-white">Sarah Lefevre</h4>
<p className="text-xs text-slate-500 mb-4">Spécialiste décoration</p>
<button className="w-full py-2 border border-primary text-primary text-xs font-bold rounded-lg hover:bg-primary hover:text-white transition-all">Choisir ce pro</button>
</div>
</div>
<div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-primary/5 shadow-sm group">
<div className="h-32 bg-primary/5 relative">
<img alt="Artisan Painter" className="w-full h-full object-cover" data-alt="Senior male painter with white hair and professional workspace" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLftGd6HlLxQIbuIh-GTKNNZwHk16ZIpr2dMbFUvPXGpoHEmqPzEUeretM82J-mGukvRoiN1r_JOLggy5aUHfb8xlbRJohaF6HDxGkaQycs-F1-sRn5xnPH0IkmrVCVZdOpDOgjtsO_FvfbV0Bxdv11gRL113dPsTQVC2dT4VmtqkfYuV_UfySQWDWHpZa1NadPaPKrjNM__xBRtPjvWdEBPZM6L8lQhGusyxN9k-bYarteHt8Y5xR0MfXZnLgJqG1PxWf5YTOiCnt"/>
<div className="absolute bottom-2 right-2 bg-white dark:bg-slate-900 px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
<span className="material-symbols-outlined text-amber-400 text-sm font-fill">star</span>
<span className="text-xs font-bold italic">4.8</span>
</div>
</div>
<div className="p-4">
<h4 className="font-bold text-slate-900 dark:text-white">Thomas Bernard</h4>
<p className="text-xs text-slate-500 mb-4">Expert grands volumes</p>
<button className="w-full py-2 border border-primary text-primary text-xs font-bold rounded-lg hover:bg-primary hover:text-white transition-all">Choisir ce pro</button>
</div>
</div>
<div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-primary/5 shadow-sm group">
<div className="h-32 bg-primary/5 relative">
<img alt="Artisane Painter" className="w-full h-full object-cover" data-alt="Smiling professional woman in work clothes" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD65Eo9w9wqX9mHI45v5YTREeFajsHS5l4tYH9o12uXDvuwkff2lCtKB7KsrErbLOcndWvKvI7DGExONW-dUKK8fjpUT8yqSVBjUBSLzgWzweUJ5WgTtgX4-QONNlvjcLvJwToe1d-o8df4CWCi3udfMPrdryd_DPQn0X7it8E2V314oMqSdMpbsv04Wuz27WtkRUNtbw9N1H0Cd_sHTRJyynn8hvxfsjEIsyWukOQ4J7_k5glFkF8pa-2dAQRg9xLaidFK1keaTf_p"/>
<div className="absolute bottom-2 right-2 bg-white dark:bg-slate-900 px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
<span className="material-symbols-outlined text-amber-400 text-sm font-fill">star</span>
<span className="text-xs font-bold italic">4.9</span>
</div>
</div>
<div className="p-4">
<h4 className="font-bold text-slate-900 dark:text-white">Julie Petit</h4>
<p className="text-xs text-slate-500 mb-4">Finitions artistiques</p>
<button className="w-full py-2 border border-primary text-primary text-xs font-bold rounded-lg hover:bg-primary hover:text-white transition-all">Choisir ce pro</button>
</div>
</div>
</div>
</div>
<section className="bg-primary rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-black mb-6">Prêt à transformer votre intérieur ?</h2>
<p className="text-slate-100 mb-10 text-lg opacity-90">Obtenez un devis gratuit et personnalisé en moins de 2 minutes. Nos experts vous répondent sous 24h.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-white text-primary hover:bg-slate-100 font-black py-4 px-10 rounded-xl transition-all shadow-xl shadow-primary/20">Demander mon devis gratuit</button>
<button className="bg-transparent border-2 border-white/40 hover:border-white text-white font-bold py-4 px-10 rounded-xl transition-all">Appeler un conseiller</button>
</div>
<div className="mt-8 flex items-center justify-center gap-6 opacity-70">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-sm">verified</span>
<span className="text-xs font-medium">Satisfaction garantie</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-sm">event_available</span>
<span className="text-xs font-medium">RDV sous 48h</span>
</div>
</div>
</div>
</section>
<footer className="mt-20 py-8 border-t border-primary/10 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
<p>© 2024 Services Pro Peinture. Tous droits réservés.</p>
<div className="flex gap-6">
<a className="hover:text-primary transition-colors" href="#">Mentions légales</a>
<a className="hover:text-primary transition-colors" href="#">Confidentialité</a>
<a className="hover:text-primary transition-colors" href="#">CGV</a>
</div>
</footer>
</main>
</div>
</div>

    </>
  );
};

export default PeintureInterieure;
