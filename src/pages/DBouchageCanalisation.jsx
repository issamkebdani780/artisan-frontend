import React from 'react';

const DBouchageCanalisation = () => {
  return (
    <>
      
<div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
{/*  Header / TopNavBar  */}
<header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 md:px-20 py-4 sticky top-0 z-50">
<div className="flex items-center gap-2 text-primary">
<span className="material-symbols-outlined text-3xl">plumbing</span>
<h2 className="text-slate-900 text-xl font-bold leading-tight tracking-tight">ExpertDÃ©bouchage</h2>
</div>
<div className="hidden lg:flex flex-1 justify-center gap-8">
<a className="text-slate-600 text-sm font-medium hover:text-primary transition-colors" href="#">Accueil</a>
<a className="text-primary text-sm font-semibold" href="#">Services</a>
<a className="text-slate-600 text-sm font-medium hover:text-primary transition-colors" href="#">Zones d'intervention</a>
<a className="text-slate-600 text-sm font-medium hover:text-primary transition-colors" href="#">Blog</a>
<a className="text-slate-600 text-sm font-medium hover:text-primary transition-colors" href="#">Contact</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden sm:flex min-w-[140px] items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20">
<span>01 02 03 04 05</span>
</button>
<div className="size-10 rounded-full bg-slate-100 flex items-center justify-center">
<span className="material-symbols-outlined text-slate-500">person</span>
</div>
</div>
</header>
<main className="flex-1 w-full max-w-[1280px] mx-auto px-4 md:px-10 py-8">
<div className="flex flex-col lg:flex-row gap-8">
{/*  Sidebar / Lead Form  */}
<aside className="w-full lg:w-[320px] order-2 lg:order-1">
<div className="sticky top-24 flex flex-col gap-6">
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<h3 className="text-slate-900 text-lg font-bold mb-2">Besoin d'aide ?</h3>
<p className="text-slate-500 text-sm mb-6">RÃ©ponse en moins de 5 minutes. Devis 100% gratuit et sans engagement.</p>
<nav className="flex flex-col gap-2 mb-6">
<a className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary font-medium" href="#">
<span className="material-symbols-outlined">description</span>
<span>Devis Gratuit</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-50 text-slate-700 transition-colors" href="#">
<span className="material-symbols-outlined">payments</span>
<span>Nos Tarifs</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-50 text-slate-700 transition-colors" href="#">
<span className="material-symbols-outlined">construction</span>
<span>Ã‰quipement</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-50 text-slate-700 transition-colors" href="#">
<span className="material-symbols-outlined">reviews</span>
<span>TÃ©moignages</span>
</a>
</nav>
<button className="w-full py-3 bg-primary text-white font-bold rounded-lg shadow-md hover:bg-primary/90 transition-all">
                                Demander un devis
                            </button>
</div>
<div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
<h4 className="text-primary font-bold mb-2 flex items-center gap-2">
<span className="material-symbols-outlined">verified</span>
                                Service CertifiÃ©
                            </h4>
<p className="text-sm text-slate-600">Intervention garantie conforme aux normes sanitaires en vigueur.</p>
</div>
</div>
</aside>
{/*  Content Area  */}
<div className="flex-1 order-1 lg:order-2">
{/*  Hero Section  */}
<div className="relative w-full h-[300px] rounded-2xl overflow-hidden mb-6 group">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Plumbing worker cleaning high pressure pipes" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhi8DrXAkM1LmgtOs-4n2dRsekRzQCjRb8Zi0PTJtTx8nHS8Z-BJQYpV9-IBvZ1sAyhqdgGTpe0PmMciCsl_l0NvGZ95kQ-_bMrzI6o_KNDfWBXh7BPkCOuDeOYjbPWH-6uV_ZOF3b0L9Q9jMKjuyCyHAd8CbG0ASbkOTJhaNExgute1R7t1LPGU7cbPBo6BHMmU5lfF93t2_O2lcQcS1SVyr9-X-B3KJuJ4TWgAptAs-rH532S-nWYBNSZE3abZaQaGQR42v7aUvV"/>
<div className="absolute bottom-0 left-0 p-8 z-20">
<nav className="flex gap-2 text-white/70 text-sm mb-4">
<a className="hover:text-white" href="#">Accueil</a>
<span>/</span>
<a className="hover:text-white" href="#">Services</a>
<span>/</span>
<span className="text-white font-medium">DÃ©bouchage Canalisation</span>
</nav>
<h1 className="text-white text-4xl font-extrabold tracking-tight">DÃ©bouchage Canalisation 24h/7j</h1>
</div>
</div>
{/*  Key Benefits  */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
<div className="bg-white p-5 rounded-xl border border-slate-200 flex flex-col gap-2">
<span className="material-symbols-outlined text-primary">schedule</span>
<p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">ArrivÃ©e Rapide</p>
<p className="text-slate-900 text-xl font-bold">-30 min</p>
</div>
<div className="bg-white p-5 rounded-xl border border-slate-200 flex flex-col gap-2">
<span className="material-symbols-outlined text-primary">euro</span>
<p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Prix Fixe</p>
<p className="text-slate-900 text-xl font-bold">DÃ¨s 75â‚¬</p>
</div>
<div className="bg-white p-5 rounded-xl border border-slate-200 flex flex-col gap-2">
<span className="material-symbols-outlined text-primary">verified_user</span>
<p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Garantie</p>
<p className="text-slate-900 text-xl font-bold">1 An</p>
</div>
<div className="bg-white p-5 rounded-xl border border-slate-200 flex flex-col gap-2">
<span className="material-symbols-outlined text-primary">event_available</span>
<p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">DisponibilitÃ©</p>
<p className="text-slate-900 text-xl font-bold">24h/7j</p>
</div>
</div>
{/*  Pricing Tables  */}
<section className="mb-16">
<h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
<span className="h-8 w-1.5 bg-primary rounded-full"></span>
                            Nos Tarifs Transparents
                        </h2>
<div className="grid md:grid-cols-3 gap-6">
<div className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-primary/50 transition-colors">
<div className="p-6 border-b border-slate-100">
<h3 className="font-bold text-lg mb-1">DÃ©bouchage Manuel</h3>
<p className="text-sm text-slate-500">Pour Ã©viers, lavabos et douches</p>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-3xl font-bold">75â‚¬</span>
<span className="text-slate-400 text-sm">TTC</span>
</div>
</div>
<ul className="p-6 space-y-3 text-sm text-slate-600">
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> Pompe Ã  vide</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> Furet professionnel</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> DÃ©placement inclus</li>
</ul>
</div>
<div className="bg-slate-900 text-white rounded-xl border border-primary overflow-hidden shadow-xl scale-105 relative">
<div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-bl-lg">Populaire</div>
<div className="p-6 border-b border-slate-800">
<h3 className="font-bold text-lg mb-1">Hydrocurage HP</h3>
<p className="text-sm text-slate-400">Pour canalisations principales</p>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-3xl font-bold">145â‚¬</span>
<span className="text-slate-400 text-sm">TTC</span>
</div>
</div>
<ul className="p-6 space-y-3 text-sm text-slate-300">
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> Haute-Pression 400 bars</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> Nettoyage complet</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> Garantie 1 an</li>
</ul>
</div>
<div className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-primary/50 transition-colors">
<div className="p-6 border-b border-slate-100">
<h3 className="font-bold text-lg mb-1">Inspection VidÃ©o</h3>
<p className="text-sm text-slate-500">Diagnostic prÃ©cis et rapport</p>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-3xl font-bold">95â‚¬</span>
<span className="text-slate-400 text-sm">TTC</span>
</div>
</div>
<ul className="p-6 space-y-3 text-sm text-slate-600">
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> CamÃ©ra endoscopique</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> DÃ©tection de cassure</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> Rapport numÃ©rique</li>
</ul>
</div>
</div>
</section>
{/*  Equipment Section  */}
<section className="mb-16 bg-slate-100 p-8 rounded-2xl">
<div className="flex flex-col md:flex-row gap-10 items-center">
<div className="flex-1">
<h2 className="text-2xl font-bold mb-4">Ã‰quipement de Pointe</h2>
<p className="text-slate-600 mb-6 leading-relaxed">
                                    Nous utilisons les derniÃ¨res technologies pour garantir un dÃ©bouchage durable sans endommager vos installations. Nos camions sont Ã©quipÃ©s de pompes haute pression et de camÃ©ras HD.
                                </p>
<div className="grid grid-cols-2 gap-4">
<div className="flex items-start gap-3">
<div className="p-2 bg-primary/10 rounded-lg text-primary"><span className="material-symbols-outlined">videocam</span></div>
<div>
<p className="font-bold text-sm">Inspection TV</p>
<p className="text-xs text-slate-500">Localisation exacte du bouchon</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="p-2 bg-primary/10 rounded-lg text-primary"><span className="material-symbols-outlined">waves</span></div>
<div>
<p className="font-bold text-sm">Curage HP</p>
<p className="text-xs text-slate-500">Nettoyage Ã  400 bars</p>
</div>
</div>
</div>
</div>
<div className="w-full md:w-1/3 aspect-square rounded-xl overflow-hidden shadow-2xl">
<img className="w-full h-full object-cover" data-alt="Modern professional plumbing equipment in a toolbox" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAKMe7oxZayTo8FUpPgAxFxZfk1MD3o1hEek1YxR9i0L5hhqyCly_gwFN0tzjPMC58kw3D7-ucNzz-zOdnO2u2tnYFGe0fVT-NIlRA3LujBBSrOmXvw0ftQQbKukA6Qu3oSv4fUByxo4emWQvu6S3HC8bMY7CfnESkPeYv4Mjow2ktjAtOFdcQ2gY9RpcvO0Z-AFRg_jdG3bx9JAmNiaQhHGwxxdnZH8wC5WIlsazkos7y38x3Sm0nAxVyFU3nARwGJe4_d-E_waY0"/>
</div>
</div>
</section>
{/*  Experts Section  */}
<section className="mb-16">
<h2 className="text-2xl font-bold mb-8">Nos Experts de ProximitÃ©</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 bg-white">
<div className="size-16 rounded-full overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="Portrait of a professional plumber smiling" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0-nQ0II491lW9vgB93mtW4O-ywJzk7__h4thNrA61LokP7o6DYFLbACdgNGlGUGmAtF7ryCWj-LGFvTno6AHsIs0uLCzfJeGqgiS_8fOMERGvzUzExOywGLDrPXzfdW67II_EHQklgtdjycdnqz2DIwIZPQadtBYhmObhOylfINas6Yn5TFmgEp8ABMPIwr1sj_OjO4OHXfSt7aDZMWiN5eqYZNa3veP8kRKx26CVy36fElYnd4eb0DsNeBw0SRB5p_4_gwoisfwb"/>
</div>
<div>
<p className="font-bold">Jean-Marc D.</p>
<p className="text-sm text-slate-500">Expert Curage (12 ans exp.)</p>
<div className="flex text-yellow-500 mt-1">
<span className="material-symbols-outlined text-sm">star</span>
<span className="material-symbols-outlined text-sm">star</span>
<span className="material-symbols-outlined text-sm">star</span>
<span className="material-symbols-outlined text-sm">star</span>
<span className="material-symbols-outlined text-sm">star</span>
</div>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 bg-white">
<div className="size-16 rounded-full overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="Portrait of a young technician in uniform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDugx_dldmaLr5w1pw7NQ3Y-MC_mu4XlgzQvq0guAR8d-qQBycOEh-piKddi-SHN4zek1_qyrv2fY9sBE6IKyofd5XONFQ55je3nxASH6ev4HqSXx9Y-Ib4Tx_mBxHlIWgzx5APIb-8hpPf4HS6YeiernebHef49vzYE7hFDon8EvCMRT1MuZ4XvKOB4c9Rw04t3GvHlw8xei60Y-8BXOHzfm_jnK_DOga9bgjOo3ug3dwxcu38LVmeODy_c4EDJeAgw4EUQXbVrbD4"/>
</div>
<div>
<p className="font-bold">Thomas L.</p>
<p className="text-sm text-slate-500">SpÃ©cialiste Inspection (8 ans exp.)</p>
<div className="flex text-yellow-500 mt-1">
<span className="material-symbols-outlined text-sm">star</span>
<span className="material-symbols-outlined text-sm">star</span>
<span className="material-symbols-outlined text-sm">star</span>
<span className="material-symbols-outlined text-sm">star</span>
<span className="material-symbols-outlined text-sm">star_half</span>
</div>
</div>
</div>
</div>
</section>
{/*  FAQ Section  */}
<section className="mb-16">
<h2 className="text-2xl font-bold mb-8">Questions FrÃ©quentes</h2>
<div className="space-y-4">
<div className="p-6 bg-white rounded-xl border border-slate-200">
<h4 className="font-bold mb-2 flex justify-between items-center cursor-pointer">
<span>Quel est le dÃ©lai d'intervention moyen ?</span>
<span className="material-symbols-outlined">expand_more</span>
</h4>
<p className="text-sm text-slate-600">En cas d'urgence, nous intervenons en moins de 30 minutes sur l'ensemble de notre zone de couverture.</p>
</div>
<div className="p-6 bg-white rounded-xl border border-slate-200">
<h4 className="font-bold mb-2 flex justify-between items-center cursor-pointer">
<span>Vos tarifs incluent-ils le dÃ©placement ?</span>
<span className="material-symbols-outlined">expand_more</span>
</h4>
<p className="text-sm text-slate-600">Oui, tous nos prix affichÃ©s sont transparents et incluent dÃ©jÃ  les frais de dÃ©placement et de main-d'Å“uvre de base.</p>
</div>
<div className="p-6 bg-white rounded-xl border border-slate-200">
<h4 className="font-bold mb-2 flex justify-between items-center cursor-pointer">
<span>Comment savoir si j'ai besoin d'un hydrocurage ?</span>
<span className="material-symbols-outlined">expand_more</span>
</h4>
<p className="text-sm text-slate-600">Si plusieurs Ã©vacuations sont bouchÃ©es ou si les odeurs persistent aprÃ¨s un dÃ©bouchage classique, un curage haute pression est souvent nÃ©cessaire.</p>
</div>
</div>
</section>
</div>
</div>
</main>
{/*  Footer  */}
<footer className="bg-slate-900 text-slate-400 py-12 px-10 border-t border-slate-800">
<div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 text-white mb-6">
<span className="material-symbols-outlined">plumbing</span>
<h2 className="text-xl font-bold">ExpertDÃ©bouchage</h2>
</div>
<p className="max-w-md">Solutions professionnelles de dÃ©bouchage et d'assainissement. Interventions rapides 24/7 pour particuliers et professionnels.</p>
</div>
<div>
<h5 className="text-white font-bold mb-6">Services</h5>
<ul className="space-y-4 text-sm">
<li><a className="hover:text-primary transition-colors" href="#">DÃ©bouchage WC</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Curage Canalisation</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Inspection CamÃ©ra</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Pompage Fosse Septique</a></li>
</ul>
</div>
<div>
<h5 className="text-white font-bold mb-6">LÃ©gal</h5>
<ul className="space-y-4 text-sm">
<li><a className="hover:text-primary transition-colors" href="#">Mentions LÃ©gales</a></li>
<li><a className="hover:text-primary transition-colors" href="#">CGV</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Protection des donnÃ©es</a></li>
</ul>
</div>
</div>
<div className="max-w-[1280px] mx-auto mt-12 pt-8 border-t border-slate-800 text-xs text-center">
                Â© 2024 ExpertDÃ©bouchage. Tous droits rÃ©servÃ©s.
            </div>
</footer>
</div>

    </>
  );
};

export default DBouchageCanalisation;

