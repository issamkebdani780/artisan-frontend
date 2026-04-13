import React from 'react';

const AmenagementPaysager = () => {
  return (
    <>
      
<div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
{/*  Header Section  */}
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 bg-white px-6 md:px-20 py-4 sticky top-0 z-50">
<div className="flex items-center gap-3">
<div className="text-primary">
<span className="material-symbols-outlined text-4xl">park</span>
</div>
<h2 className="text-slate-900 text-xl font-bold leading-tight tracking-tight">EcoPaysage</h2>
</div>
<div className="flex flex-1 justify-end gap-8 items-center">
<nav className="hidden md:flex items-center gap-8">
<a className="text-slate-600 text-sm font-medium hover:text-primary transition-colors" href="#">Accueil</a>
<a className="text-primary text-sm font-bold leading-normal" href="#">Services</a>
<a className="text-slate-600 text-sm font-medium hover:text-primary transition-colors" href="#">Notifications</a>
</nav>
<button className="flex min-w-[100px] cursor-pointer items-center justify-center rounded-xl h-10 px-5 bg-primary text-white text-sm font-bold transition-transform hover:scale-105 active:scale-95">
<span>Connexion</span>
</button>
</div>
</header>
<main className="flex flex-1 justify-center py-8 px-4 md:px-20">
<div className="layout-content-container flex flex-col max-w-[1200px] flex-1 gap-8">
<div className="flex flex-col md:flex-row gap-8">
{/*  Sidebar / Left Navigation & CTA  */}
<aside className="w-full md:w-72 flex flex-col gap-6">
<div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
<div className="flex items-center gap-3 mb-6">
<div className="bg-primary/10 p-2 rounded-full text-primary">
<span className="material-symbols-outlined">dashboard</span>
</div>
<div>
<h3 className="font-bold text-sm">Navigation</h3>
<p className="text-xs text-slate-500">DÃ©tails du service</p>
</div>
</div>
<div className="flex flex-col gap-1">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary font-semibold text-sm" href="#expertise">
<span className="material-symbols-outlined text-xl">verified</span>
                                        Pourquoi nous ?
                                    </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 text-sm" href="#experts">
<span className="material-symbols-outlined text-xl">groups</span>
                                        Nos Experts
                                    </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 text-sm" href="#tarifs">
<span className="material-symbols-outlined text-xl">payments</span>
                                        Tarification
                                    </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 text-sm" href="#portfolio">
<span className="material-symbols-outlined text-xl">imagesmode</span>
                                        RÃ©alisations
                                    </a>
</div>
</div>
{/*  CTA Box  */}
<div className="bg-primary rounded-xl p-6 text-white shadow-lg shadow-primary/20">
<span className="material-symbols-outlined text-3xl mb-3">request_quote</span>
<h3 className="text-lg font-bold mb-2 leading-tight">Besoin d'un devis gratuit ?</h3>
<p className="text-sm text-white/80 mb-4 leading-relaxed">Nos experts vous rÃ©pondent sous 24h pour Ã©tudier votre projet.</p>
<button className="w-full bg-white text-primary font-bold py-3 rounded-lg text-sm hover:bg-slate-50 transition-colors">
                                    Demander mon devis
                                </button>
</div>
</aside>
{/*  Main Content Area  */}
<div className="flex-1 flex flex-col gap-10">
{/*  Hero Section  */}
<section className="relative h-[300px] rounded-xl overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="Jardin paysager moderne avec terrasse en bois et plantes vertes" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBAIHf1evm3RDTyqhLxPhux9A6kkfzw1u0se__uBrSkBnPuFU_XuPX1_BUwvtSC1CQ7xAilw9kg2RT0MeZgn2Y5m_3j7K6Q8iN_P8TjkEhuN2dj5m2nil7BKecEaHBhGYMTjqdaVHaQFjhyaHEZVhsIvUYMIZs-3xOzoUdiTd6-aOJjmmCV00JstHMWa7XWn2XqxaYjl8NtuuZ87LFrEG8_reEHP_FOW8bE62XMgLbDQOF8ZVBYjVrpE-Dp4KKhEz-rXVsZqmjqCKvH");'></div>
<div className="absolute bottom-0 left-0 p-8 z-20">
<span className="inline-block bg-primary px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-white mb-3">Service Premium</span>
<h1 className="text-white text-3xl md:text-4xl font-black leading-tight">AmÃ©nagement Paysager Professionnel</h1>
<p className="text-white/80 mt-2 max-w-lg">Transformez votre extÃ©rieur en un havre de paix durable et esthÃ©tique.</p>
</div>
</section>
{/*  Expertise Section  */}
<section className="scroll-mt-24" id="expertise">
<h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">eco</span> Pourquoi nous choisir ?
                                </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="p-5 rounded-xl border border-slate-200 bg-white hover:border-primary transition-colors">
<span className="material-symbols-outlined text-primary text-3xl mb-3">history_edu</span>
<h3 className="font-bold mb-2">15 ans d'expertise</h3>
<p className="text-sm text-slate-500 leading-relaxed">Une maÃ®trise parfaite des vÃ©gÃ©taux et des structures minÃ©rales.</p>
</div>
<div className="p-5 rounded-xl border border-slate-200 bg-white hover:border-primary transition-colors">
<span className="material-symbols-outlined text-primary text-3xl mb-3">psychology_alt</span>
<h3 className="font-bold mb-2">Design sur-mesure</h3>
<p className="text-sm text-slate-500 leading-relaxed">Chaque jardin est unique et reflÃ¨te votre personnalitÃ© et vos besoins.</p>
</div>
<div className="p-5 rounded-xl border border-slate-200 bg-white hover:border-primary transition-colors">
<span className="material-symbols-outlined text-primary text-3xl mb-3">nature_people</span>
<h3 className="font-bold mb-2">Approche Ã‰cologique</h3>
<p className="text-sm text-slate-500 leading-relaxed">Utilisation de mÃ©thodes respectueuses de la biodiversitÃ© locale.</p>
</div>
</div>
</section>
{/*  Experts Section  */}
<section className="scroll-mt-24" id="experts">
<h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">psychology</span> Nos Experts Paysagistes
                                </h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50">
<div className="w-20 h-20 rounded-full bg-cover bg-center" data-alt="Portrait de Jean-Marc Dupont paysagiste" ></div>
<div>
<h4 className="font-bold text-lg">Jean-Marc Dupont</h4>
<p className="text-primary text-sm font-medium">Architecte Paysagiste Senior</p>
<p className="text-xs text-slate-500 mt-1">SpÃ©cialiste en jardins zen et structures japonaises.</p>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50">
<div className="w-20 h-20 rounded-full bg-cover bg-center" data-alt="Portrait de Sarah Lambert paysagiste" ></div>
<div>
<h4 className="font-bold text-lg">Sarah Lambert</h4>
<p className="text-primary text-sm font-medium">Experte en Botanique</p>
<p className="text-xs text-slate-500 mt-1">SpÃ©cialiste en Ã©cosystÃ¨mes durables et potagers urbains.</p>
</div>
</div>
</div>
</section>
{/*  Pricing Section  */}
<section className="scroll-mt-24" id="tarifs">
<h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">sell</span> Nos Forfaits Design
                                </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex flex-col p-6 rounded-xl border-2 border-slate-100 relative overflow-hidden">
<h3 className="text-lg font-bold mb-1">Ã‰tude &amp; Plan</h3>
<p className="text-3xl font-black text-primary mb-4">450â‚¬ <span className="text-sm font-normal text-slate-500">/ projet</span></p>
<ul className="space-y-3 mb-6 flex-1">
<li className="flex items-start gap-2 text-sm"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> RelevÃ© de terrain prÃ©cis</li>
<li className="flex items-start gap-2 text-sm"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> Plan de masse 2D</li>
<li className="flex items-start gap-2 text-sm"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> Liste des vÃ©gÃ©taux conseillÃ©s</li>
</ul>
<button className="w-full py-2.5 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors">Choisir ce forfait</button>
</div>
<div className="flex flex-col p-6 rounded-xl border-2 border-primary bg-primary/5 relative overflow-hidden">
<div className="absolute top-4 right-[-35px] bg-primary text-white text-[10px] font-bold px-10 py-1 rotate-45 shadow-sm">POPULAIRE</div>
<h3 className="text-lg font-bold mb-1">Immersion 3D</h3>
<p className="text-3xl font-black text-primary mb-4">890â‚¬ <span className="text-sm font-normal text-slate-500">/ projet</span></p>
<ul className="space-y-3 mb-6 flex-1">
<li className="flex items-start gap-2 text-sm"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> Tout le forfait Ã‰tude &amp; Plan</li>
<li className="flex items-start gap-2 text-sm"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> ModÃ©lisation 3D rÃ©aliste</li>
<li className="flex items-start gap-2 text-sm"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> VidÃ©o de visite virtuelle</li>
</ul>
<button className="w-full py-2.5 rounded-lg bg-primary text-white font-bold hover:opacity-90 transition-opacity">Choisir ce forfait</button>
</div>
</div>
</section>
{/*  Portfolio Section  */}
<section className="scroll-mt-24 pb-12" id="portfolio">
<h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">auto_awesome</span> RÃ©alisations RÃ©centes
                                </h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer shadow-md">
<img alt="RÃ©alisation 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Jardin de villa contemporaine avec piscine et massifs" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXaz6IwZ9RotQGhZ2D3mUXhtNHUDXhM6P9vxeUcOBF6vNhPeNIvvbESnDM3PiBwZ4TbYHBxeERo3hjtsHwGeQnUJwyKpsschN3A2uEj2qTKFQrRtMUoths0ApWHbzNgSD8y_RtR_cCODL2Eqk2QYcIWq9m3vgKZcQ7tch2McI9DceQGeh97GBSn93CzI0E0qCBv7TVgQN5O5mR9dn9hAZUwB7Tf-d4FdEk7EcafVSK-YMKpslhwPlBzFa6znGsw_PfR1eqJLeSLPCz"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
<p className="text-white font-bold">Villa ModernitÃ© - Lyon</p>
<p className="text-white/70 text-xs">Jardin minimaliste &amp; Bassin</p>
</div>
</div>
<div className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer shadow-md">
<img alt="RÃ©alisation 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Petit jardin de ville optimisÃ©" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARQ9k67PAc4vVzuTh6Gz7brkh9BF5CZUq5rYYyt-h7qRLh5KX-csGb-JhyvlV4JRznj5aV8c31CECqV680nU4_Wz7qSrBcN7YbqNGk6DFMV0uOYoMranVz9dCsKiDwIX_XGzQpDBw4LYeltA0spYaz9jmrSVY8X94i6qEkMNL9MRO-IoYcz7qWoSG2d3keoq2Imr9dX4HQv0PBbm5VkGAv4l_26Xbw6DbE0VQv7uYCfO56nRvdF6eg6DEIMpHe9uPSJvMtPjtRhF8j"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
<p className="text-white font-bold">Patio Urbain - Paris</p>
<p className="text-white/70 text-xs">Optimisation petit espace</p>
</div>
</div>
</div>
</section>
</div>
</div>
</div>
</main>
{/*  Footer Small  */}
<footer className="bg-slate-100 border-t border-slate-200 py-8 px-6 text-center">
<p className="text-slate-500 text-sm">Â© 2024 EcoPaysage. Tous droits rÃ©servÃ©s. Design pour un amÃ©nagement durable.</p>
</footer>
</div>
</div>

    </>
  );
};

export default AmenagementPaysager;

