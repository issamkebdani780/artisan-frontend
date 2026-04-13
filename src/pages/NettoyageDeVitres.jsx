import React from 'react';

const NettoyageDeVitres = () => {
  return (
    <>
      
<div className="relative flex h-auto min-h-screen w-full flex-row overflow-x-hidden">
{/*  Sidebar Navigation  */}
<aside className="hidden lg:flex w-80 flex-col bg-white border-r border-slate-200 sticky top-0 h-screen">
<div className="flex flex-col h-full justify-between p-6">
<div className="flex flex-col gap-8">
{/*  Brand  */}
<div className="flex items-center gap-3">
<div className="bg-primary flex items-center justify-center rounded-lg size-10 text-white">
<span className="material-symbols-outlined">window</span>
</div>
<div className="flex flex-col">
<h1 className="text-slate-900 text-lg font-bold leading-none">AquaShine Pro</h1>
<p className="text-slate-500 text-xs font-medium">Experts en Nettoyage</p>
</div>
</div>
{/*  Nav Links  */}
<nav className="flex flex-col gap-2">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-primary/10 hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined text-[24px]">home</span>
<span className="text-sm font-semibold">Tableau de bord</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary" href="#">
<span className="material-symbols-outlined text-[24px]">cleaning_services</span>
<span className="text-sm font-semibold">Nos Services</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-primary/10 hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined text-[24px]">payments</span>
<span className="text-sm font-semibold">Tarification</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-primary/10 hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined text-[24px]">verified_user</span>
<span className="text-sm font-semibold">SÃ©curitÃ© &amp; Garanties</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-primary/10 hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined text-[24px]">mail</span>
<span className="text-sm font-semibold">Contact</span>
</a>
</nav>
</div>
<div className="flex flex-col gap-4">
<div className="p-4 bg-primary/5 rounded-xl border border-primary/10">
<p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Support 24/7</p>
<p className="text-sm text-slate-600 leading-snug">Besoin d'aide pour un devis spÃ©cifique ?</p>
<button className="mt-3 w-full py-2 bg-primary text-white text-xs font-bold rounded-lg hover:bg-primary/90">Appeler un expert</button>
</div>
</div>
</div>
</aside>
{/*  Main Content Area  */}
<main className="flex-1 flex flex-col min-w-0">
{/*  Header  */}
<header className="sticky top-0 z-10 flex items-center justify-between bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-4">
<div className="flex items-center gap-4">
<button className="lg:hidden text-slate-600">
<span className="material-symbols-outlined">menu</span>
</button>
<div className="flex flex-col">
<h2 className="text-slate-900 text-xl font-bold tracking-tight">Nettoyage de Vitres</h2>
<nav className="flex text-[10px] text-slate-500 uppercase font-bold tracking-widest gap-2">
<span className="hover:text-primary cursor-pointer">Accueil</span>
<span>/</span>
<span className="text-primary">Services Professionnels</span>
</nav>
</div>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex relative group">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
<input className="pl-10 pr-4 py-2 bg-slate-100 border-none rounded-full text-sm focus:ring-2 focus:ring-primary w-64" placeholder="Rechercher un service..." type="text"/>
</div>
<div className="flex gap-2">
<button className="p-2 bg-slate-100 rounded-full text-slate-600 relative">
<span className="material-symbols-outlined text-xl">notifications</span>
<span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
</button>
<button className="p-2 bg-slate-100 rounded-full text-slate-600">
<span className="material-symbols-outlined text-xl">account_circle</span>
</button>
</div>
</div>
</header>
{/*  Hero Section  */}
<section className="p-6">
<div className="relative h-[320px] rounded-3xl overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 to-transparent z-10"></div>
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="Modern building windows being cleaned by professional cleaner" ></div>
<div className="relative z-20 h-full flex flex-col justify-end p-10 max-w-2xl">
<span className="bg-primary/20 text-teal-300 text-xs font-bold px-3 py-1 rounded-full w-fit mb-4 backdrop-blur-md border border-white/10 uppercase tracking-widest">Service Premium</span>
<h1 className="text-white text-4xl md:text-5xl font-black leading-tight mb-4">La clartÃ© absolue pour vos fenÃªtres.</h1>
<p className="text-teal-100 text-lg font-medium mb-6">Expertise rÃ©sidentielle et commerciale avec technologie d'eau pure et accÃ¨s haute altitude.</p>
<div className="flex gap-4">
<button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-primary/20 transition-all active:scale-95">RÃ©server maintenant</button>
<button className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md px-8 py-3 rounded-xl font-bold transition-all">Voir nos tarifs</button>
</div>
</div>
</div>
</section>
{/*  Tab Selector  */}
<div className="px-6 mb-8">
<div className="flex border-b border-slate-200 gap-10">
<button className="flex flex-col items-center border-b-2 border-primary text-primary pb-4 px-2">
<span className="text-sm font-bold">RÃ©sidentiel</span>
</button>
<button className="flex flex-col items-center border-b-2 border-transparent text-slate-500 hover:text-slate-900 pb-4 px-2 transition-all">
<span className="text-sm font-bold">Commercial</span>
</button>
<button className="flex flex-col items-center border-b-2 border-transparent text-slate-500 hover:text-slate-900 pb-4 px-2 transition-all">
<span className="text-sm font-bold">Grandes Hauteurs</span>
</button>
</div>
</div>
{/*  Pricing Cards  */}
<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 mb-12">
{/*  Card 1  */}
<div className="flex flex-col bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-xl transition-all group">
<div className="size-14 rounded-2xl bg-teal-50 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-3xl">home_work</span>
</div>
<h3 className="text-xl font-bold mb-2">Standard Maison</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-black text-slate-900">49â‚¬</span>
<span className="text-slate-500 font-medium">/ intervention</span>
</div>
<ul className="flex flex-col gap-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-slate-600">
<span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                        Jusqu'Ã  10 fenÃªtres standards
                    </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                        Nettoyage intÃ©rieur &amp; extÃ©rieur
                    </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                        Encadrements &amp; rebords inclus
                    </li>
</ul>
<button className="w-full py-3 rounded-xl bg-slate-100 text-slate-900 font-bold hover:bg-primary hover:text-white transition-colors">Choisir ce plan</button>
</div>
{/*  Card 2  */}
<div className="flex flex-col bg-white rounded-2xl border-2 border-primary p-8 shadow-xl relative scale-105 z-10">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">Plus Populaire</div>
<div className="size-14 rounded-2xl bg-primary flex items-center justify-center text-white mb-6">
<span className="material-symbols-outlined text-3xl">apartment</span>
</div>
<h3 className="text-xl font-bold mb-2">Business Pro</h3>
<div className="flex items-baseline gap-1 mb-6 text-primary">
<span className="text-4xl font-black">129â‚¬</span>
<span className="text-slate-500 font-medium">/ mois</span>
</div>
<ul className="flex flex-col gap-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-slate-600">
<span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                        Vitrine &amp; Bureaux (Mensuel)
                    </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                        Technologie Eau Pure (H2O)
                    </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                        Planning flexible (Hors heures)
                    </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                        Garantie sans traces 100%
                    </li>
</ul>
<button className="w-full py-3 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">S'abonner maintenant</button>
</div>
{/*  Card 3  */}
<div className="flex flex-col bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-xl transition-all group">
<div className="size-14 rounded-2xl bg-teal-50 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-3xl">factory</span>
</div>
<h3 className="text-xl font-bold mb-2">Industriel &amp; Grand</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-black text-slate-900">Sur devis</span>
</div>
<ul className="flex flex-col gap-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-slate-600">
<span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                        AccÃ¨s tÃ©lescopique &amp; nacelle
                    </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                        Immeubles de grande hauteur
                    </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                        Maintenance pÃ©riodique annuelle
                    </li>
</ul>
<button className="w-full py-3 rounded-xl bg-slate-100 text-slate-900 font-bold hover:bg-primary hover:text-white transition-colors">Demander un devis</button>
</div>
</section>
{/*  Equipment Section  */}
<section className="bg-white py-16 px-6">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl font-black text-slate-900 mb-4">Ã‰quipement de Pointe</h2>
<p className="text-slate-500 max-w-2xl mx-auto">Nous investissons dans les derniÃ¨res technologies pour garantir un rÃ©sultat parfait sans utiliser de produits chimiques nocifs.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="space-y-8">
<div className="flex gap-6">
<div className="shrink-0 size-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
<span className="material-symbols-outlined">water_drop</span>
</div>
<div>
<h4 className="text-lg font-bold mb-1">Technologie Eau Pure</h4>
<p className="text-sm text-slate-600 leading-relaxed">Notre systÃ¨me de filtration dÃ©minÃ©ralise l'eau pour un sÃ©chage naturel sans aucune trace ni dÃ©pÃ´t minÃ©ral.</p>
</div>
</div>
<div className="flex gap-6">
<div className="shrink-0 size-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
<span className="material-symbols-outlined">vertical_align_top</span>
</div>
<div>
<h4 className="text-lg font-bold mb-1">Perches TÃ©lescopiques Carbone</h4>
<p className="text-sm text-slate-600 leading-relaxed">Nous atteignons jusqu'Ã  20 mÃ¨tres de hauteur depuis le sol, garantissant sÃ©curitÃ© et rapiditÃ© d'exÃ©cution.</p>
</div>
</div>
<div className="flex gap-6">
<div className="shrink-0 size-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
<span className="material-symbols-outlined">shield_moon</span>
</div>
<div>
<h4 className="text-lg font-bold mb-1">Protection UV &amp; Solaire</h4>
<p className="text-sm text-slate-600 leading-relaxed">Traitement optionnel pour rÃ©duire la chaleur et protÃ©ger votre mobilier de la dÃ©coloration solaire.</p>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-square rounded-3xl bg-primary/10 flex items-center justify-center overflow-hidden">
<img alt="Professional cleaning gear and tools close up" className="w-full h-full object-cover grayscale opacity-50 mix-blend-multiply" data-alt="Modern cleaning tools and specialized equipment layout" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZIgQmCsbM6F14BJiYxxED8WoFRw1HfgaHuqMBxpPGOaF_8DlgKnoIQp713YEmy9PDXjtRwu2nkrQQvLZBiq16x4g-Jwi-HwMWef5Af0m0uh5mjMzSfZBuWtLPOsCGDMReYj_neeX9a_FU4p_cOct1YgPfsfOBOl4Q29a0aOey-LU74TkTi9q-7lQKxRW6BGo438cBxzmZXH2PI_QkOc1ZdFqZ_nzpmKIiZAPukOOmXBIIjcOyhM7I0yut6NzI_cXFTl0jSW2GR9Oo"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="bg-white p-6 rounded-2xl shadow-2xl border border-primary/20 max-w-[200px]">
<p className="text-primary font-black text-4xl mb-1">100%</p>
<p className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Ã‰cologique &amp; Sans DÃ©tergent</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Guarantee & Experts Section  */}
<section className="p-6 md:p-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
{/*  Experts  */}
<div className="bg-primary text-white rounded-3xl p-10 flex flex-col justify-between">
<div>
<h3 className="text-3xl font-black mb-6">Nos Meilleurs Experts</h3>
<div className="flex flex-col gap-6">
<div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl border border-white/20">
<img alt="Expert face" className="size-14 rounded-full border-2 border-primary" data-alt="Portrait of a smiling professional cleaning technician" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfhylJELAuqMke8mAaPT3M17etkPd3kPwglHK1yKVUOZKpVDYawCwSxNMukgaT6UESfvnfccHRgQXOzEit5aZhc6WH0O-uXQQvaie5m8ZomyyTDspi_QDtLw22SN4IzeZ9ok6gmbAnxlO1mlLlp9-3PF03VM_l3LsPBJxvZGDOksqJCuiqZHyD5mcJNIjEfWPCL3clYRQUxLkkJIIGqZYKLGsdBBtXR_bam7JGDZ4fjFppse8kbl-tZy9yBGor0WAXSTtdzVCnO0Ou"/>
<div>
<p className="font-bold">Jean-Marc Dupont</p>
<p className="text-xs text-teal-200">SpÃ©cialiste Haute Hauteur (8 ans exp.)</p>
</div>
<div className="ml-auto flex items-center gap-1 bg-white/20 px-2 py-1 rounded-lg">
<span className="material-symbols-outlined text-xs fill-1">star</span>
<span className="text-xs font-bold">4.9</span>
</div>
</div>
<div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl border border-white/20">
<img alt="Expert face" className="size-14 rounded-full border-2 border-primary" data-alt="Portrait of a professional female window cleaner" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7tkzXK2LF3gMi6-QfpLK9I1EPqmFwT9FoSo-h8-JiO0Hwh0542RTBA9rkynHFZ2uxj4DxNm-oxnkCQC09LdiXrYfvvq0DsOPXrFwGB1Yu8Rkc1u-pxM1zmiZns5lwp00_VChQUI6SgfBoIwcIohCf4arBUgplrJIHYNk--YBSIsXRJOAhq0-T_SO0ffN3EJ36zY7KC4gvbTj6dEuqXfPdhABh9bThNIMPxM2WMnyN0IyNQ0gGsOVYLjU3JEcUgvIQDyuXZJlbzI3R"/>
<div>
<p className="font-bold">Sarah Lambert</p>
<p className="text-xs text-teal-200">Experte RÃ©sidentiel (5 ans exp.)</p>
</div>
<div className="ml-auto flex items-center gap-1 bg-white/20 px-2 py-1 rounded-lg">
<span className="material-symbols-outlined text-xs fill-1">star</span>
<span className="text-xs font-bold">5.0</span>
</div>
</div>
</div>
</div>
<p className="mt-8 text-sm text-teal-100 font-medium">Tous nos techniciens sont formÃ©s aux normes de sÃ©curitÃ© les plus strictes et assurÃ©s.</p>
</div>
{/*  Security  */}
<div className="bg-white rounded-3xl p-10 border border-slate-200">
<h3 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-4xl">verified</span>
                        Garanties &amp; SÃ©curitÃ©
                    </h3>
<div className="grid grid-cols-2 gap-6">
<div className="p-5 bg-background-light rounded-2xl text-center">
<span className="material-symbols-outlined text-primary mb-2 text-3xl">policy</span>
<h5 className="text-sm font-bold mb-1">RC Pro Incluse</h5>
<p className="text-[10px] text-slate-500">Protection intÃ©grale de vos biens lors de l'intervention.</p>
</div>
<div className="p-5 bg-background-light rounded-2xl text-center">
<span className="material-symbols-outlined text-primary mb-2 text-3xl">rebase_edit</span>
<h5 className="text-sm font-bold mb-1">Satisafaction 48h</h5>
<p className="text-[10px] text-slate-500">Une trace oubliÃ©e ? On repasse gratuitement sous 48h.</p>
</div>
<div className="p-5 bg-background-light rounded-2xl text-center">
<span className="material-symbols-outlined text-primary mb-2 text-3xl">eco</span>
<h5 className="text-sm font-bold mb-1">ZÃ©ro Chimie</h5>
<p className="text-[10px] text-slate-500">SÃ©curisÃ© pour vos enfants, animaux et plantes.</p>
</div>
<div className="p-5 bg-background-light rounded-2xl text-center">
<span className="material-symbols-outlined text-primary mb-2 text-3xl">task_alt</span>
<h5 className="text-sm font-bold mb-1">Checklist QualitÃ©</h5>
<p className="text-[10px] text-slate-500">Chaque vitre est vÃ©rifiÃ©e selon 5 points de contrÃ´le.</p>
</div>
</div>
</div>
</div>
</section>
{/*  Footer Call to Action  */}
<footer className="mt-auto px-6 pb-12">
<div className="bg-slate-900 rounded-3xl p-10 text-center text-white relative overflow-hidden">
<div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
<h2 className="text-3xl font-black mb-4 relative z-10">PrÃªt pour des vitres Ã©tincelantes ?</h2>
<p className="text-slate-400 mb-8 relative z-10">Estimation gratuite en ligne en moins de 2 minutes.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
<button className="bg-primary text-white font-bold px-10 py-4 rounded-xl hover:bg-primary/90 transition-all">DÃ©marrer mon devis</button>
<button className="bg-white/10 text-white font-bold px-10 py-4 rounded-xl hover:bg-white/20 transition-all border border-white/10">Contacter un conseiller</button>
</div>
</div>
<div className="mt-8 text-center text-xs text-slate-500 font-medium">
                Â© 2024 AquaShine Pro Services. Tous droits rÃ©servÃ©s. Mentions lÃ©gales &amp; ConfidentialitÃ©.
            </div>
</footer>
</main>
</div>

    </>
  );
};

export default NettoyageDeVitres;

