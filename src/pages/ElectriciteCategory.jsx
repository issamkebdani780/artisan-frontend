import React from 'react';

const ElectriciteCategory = () => {
  return (
    <>
      
{/*  Unified Header  */}
<header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<div className="flex items-center gap-8">
<div className="flex items-center gap-2 text-primary">
<span className="material-symbols-outlined text-3xl font-bold">bolt</span>
<h2 className="text-slate-900 dark:text-slate-100 text-xl font-black tracking-tight">ProServices</h2>
</div>
<nav className="hidden md:flex items-center gap-6">
<a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Accueil</a>
<a className="text-sm font-semibold text-primary" href="#">Électricité</a>
<a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Plomberie</a>
<a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Chauffage</a>
</nav>
</div>
<div className="flex items-center gap-4 flex-1 justify-end max-w-md">
<div className="relative w-full hidden sm:block">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary text-sm" placeholder="Rechercher un service..." type="text"/>
</div>
<button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
<span className="material-symbols-outlined">notifications</span>
</button>
<div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold overflow-hidden border border-primary/30">
<img className="object-cover w-full h-full" data-alt="Avatar de l'utilisateur" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAly9WmyCZ_X3AcooIyzScNPZBtSqAsmjqBPdfLVuqk9KeT43qh7U2ZE0S6GruhovGYbNRY2fD3NzDd2PlEqtt1eF2ynKhNOUnUIgcNsk4sjniujznnICDqIp7uVmwkFqAcc5zJ595veAbnCIP29mALgNVUYRK-IEufv5dJzhb-TscbTyPw-yy5TKzk9TxJpxX27WYEhz--DN7edmbg7nEKIsTLxWULYGXt_geG8fK4M7Y2HeFM0n5iYr-2BMWxUCcUTRAqNbkXAqqi"/>
</div>
</div>
</div>
</div>
</header>
<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
{/*  Hero Section with Sidebar  */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
<div className="lg:col-span-2 relative rounded-2xl overflow-hidden min-h-[400px] flex items-end">
<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-10"></div>
<div className="w-full h-full bg-center bg-cover" data-alt="Électricien professionnel travaillant sur un tableau électrique" ></div>
</div>
<div className="relative z-20 p-8 md:p-12">
<span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">Services Certifiés</span>
<h1 className="text-white text-4xl md:text-5xl font-black leading-tight mb-4">
                        Travaux d'électricité <br/>professionnels à domicile.
                    </h1>
<p className="text-slate-200 text-lg max-w-xl mb-8">
                        Installation, mise aux normes et dépannage d'urgence par des experts qualifiés IRVE et Qualifelec.
                    </p>
<div className="flex gap-4">
<button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-primary/20">Nos Services</button>
<button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold py-3 px-8 rounded-xl border border-white/30 transition-all">En savoir plus</button>
</div>
</div>
</div>
{/*  Quote Sidebar  */}
<div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none flex flex-col justify-between">
<div>
<div className="flex items-center gap-3 mb-6">
<div className="p-3 bg-primary/10 rounded-xl">
<span className="material-symbols-outlined text-primary">request_quote</span>
</div>
<div>
<h3 className="font-bold text-xl">Besoin d'un devis ?</h3>
<p className="text-sm text-slate-500">Réponse sous 24h garantie</p>
</div>
</div>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-3 text-sm">
<span className="material-symbols-outlined text-green-500">check_circle</span>
<span>Déplacement gratuit sous conditions</span>
</div>
<div className="flex items-center gap-3 text-sm">
<span className="material-symbols-outlined text-green-500">check_circle</span>
<span>Tarification transparente</span>
</div>
<div className="flex items-center gap-3 text-sm">
<span className="material-symbols-outlined text-green-500">check_circle</span>
<span>Assurance décennale incluse</span>
</div>
</div>
</div>
<div className="space-y-4">
<div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 text-center">
<p className="text-xs text-slate-500 uppercase font-bold mb-1 tracking-widest">Urgence 24/7</p>
<p className="text-xl font-black text-slate-900 dark:text-white">01 23 45 67 89</p>
</div>
<button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all">
                        Demander un devis gratuit
                    </button>
</div>
</div>
</div>
{/*  Sub-services Grid  */}
<section className="mb-16">
<div className="flex justify-between items-end mb-8">
<div>
<h2 className="text-2xl font-black tracking-tight mb-2">Nos domaines d'intervention</h2>
<p className="text-slate-500">Des solutions complètes pour tous vos besoins électriques.</p>
</div>
<button className="text-primary font-bold text-sm flex items-center gap-1 hover:underline">
                    Tout voir <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{/*  Service 1  */}
<div className="group bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all hover:shadow-lg">
<div className="size-14 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-blue-600 text-3xl">lightbulb</span>
</div>
<h3 className="text-xl font-bold mb-3">Éclairage &amp; Design</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Installation de luminaires intérieurs et extérieurs, rubans LED et solutions domotiques connectées.</p>
<a className="text-primary font-bold text-sm flex items-center gap-2" href="#">Découvrir <span className="material-symbols-outlined text-sm">chevron_right</span></a>
</div>
{/*  Service 2  */}
<div className="group bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all hover:shadow-lg">
<div className="size-14 bg-orange-50 dark:bg-orange-900/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-orange-600 text-3xl">verified</span>
</div>
<h3 className="text-xl font-bold mb-3">Mise en Conformité</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Remise aux normes NF C 15-100, remplacement de tableaux électriques et diagnostics sécurité.</p>
<a className="text-primary font-bold text-sm flex items-center gap-2" href="#">Découvrir <span className="material-symbols-outlined text-sm">chevron_right</span></a>
</div>
{/*  Service 3  */}
<div className="group bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all hover:shadow-lg">
<div className="size-14 bg-green-50 dark:bg-green-900/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-green-600 text-3xl">ev_station</span>
</div>
<h3 className="text-xl font-bold mb-3">Bornes de Recharge</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Installation certifiée IRVE de points de charge pour véhicules électriques à domicile.</p>
<a className="text-primary font-bold text-sm flex items-center gap-2" href="#">Découvrir <span className="material-symbols-outlined text-sm">chevron_right</span></a>
</div>
</div>
</section>
{/*  Why Choose Us Section  */}
<section className="mb-16 bg-slate-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
<div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
<span className="material-symbols-outlined text-[300px] absolute -right-20 -top-10 text-white">bolt</span>
</div>
<div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-black mb-6">Pourquoi choisir nos électriciens ?</h2>
<p className="text-slate-400 text-lg mb-8">Nous sélectionnons rigoureusement chaque partenaire pour vous garantir une tranquillité d'esprit totale.</p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="flex items-start gap-4">
<div className="text-primary"><span className="material-symbols-outlined font-bold">handshake</span></div>
<div>
<h4 className="font-bold mb-1">Confiance</h4>
<p className="text-sm text-slate-400">Experts certifiés et vérifiés par nos soins.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="text-primary"><span className="material-symbols-outlined font-bold">timer</span></div>
<div>
<h4 className="font-bold mb-1">Réactivité</h4>
<p className="text-sm text-slate-400">Intervention sous 2h pour les urgences.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="text-primary"><span className="material-symbols-outlined font-bold">payments</span></div>
<div>
<h4 className="font-bold mb-1">Prix Juste</h4>
<p className="text-sm text-slate-400">De prix transparents et sans surprise.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="text-primary"><span className="material-symbols-outlined font-bold">security</span></div>
<div>
<h4 className="font-bold mb-1">Garantie</h4>
<p className="text-sm text-slate-400">Tous nos travaux sont garantis 10 ans.</p>
</div>
</div>
</div>
</div>
<div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
<div className="flex items-center gap-4 mb-6">
<div className="flex -space-x-3">
<img className="w-10 h-10 rounded-full border-2 border-slate-900" data-alt="Client satisfait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCOHHwjTGLRSmn7_9EFlMzq26MiCOxKoOgnVmFyXROwjO507qgN2qVirNDNoEidPKADL6QKnxHdlvbcRfF5DTfipVI57kYS20Bq8R1UzLt1BH1YzrnXxTS38nSm087lWNvdrsUT-5A5x4cxS4a4hnViyvKdloTLQtxom7Nxq-uQyiRSneTgTVti55Oz6xR4rzUS8QrvyP1eiWc7V137BmJqKZptYEUU4pd8-PdxJUMf5F12seTSyc7_L4ISgXvr_tg4MTviCoMnbHq"/>
<img className="w-10 h-10 rounded-full border-2 border-slate-900" data-alt="Client satisfait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB_16J3Ffh51bBnMZ3ZL_oM8A_12kzuua8av-PkvN_b8uvNhKdV0NDjsMaitNptjdrGdRJq2bAjCNSMEmnAhzJesm31sECsLUdOKg_LaFd5T7BqSB86w0q_8RNNCoHapvRzxrHOk3DBqZAdMpLJ28VY1tCKgxi2EGm5-d6iwzVilntQUJfMSrs4z4by31Q4H-S3BXwi0hDiBlH2evqVaikT5OOqk4qvrsDOQ31pEzYp30jmU9XZlfjdSjagea5DRLREI21AhXubt-J"/>
<img className="w-10 h-10 rounded-full border-2 border-slate-900" data-alt="Client satisfait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDj0_Bz9km0QcUfFxMjPgTanJTB1hyIDSpIfCFOS0J_3pwS97nPVV-x4ThZzMdqLAX98tXqPe-y5_CkB3pFpAHnLryfPIDQP_Obv4HOihUZfgX4wLIrr4GUCMDLMoIwEDWyQNt9PgD0saJgwEntLaR2gUnkJATzxFg2QTT-6J8GBf76Y-kNJCQCznXGlgvXIVqjUSqv6RyAWnkK4kr_7cVmTFJVVFkZoLVg2Tn3cQhsdqZV5z3o5Fj19Dw0417dkMQam5E-sS2ePzl2"/>
</div>
<div className="text-sm">
<p className="font-bold">Plus de 10 000 interventions</p>
<div className="flex items-center gap-1 text-yellow-400">
<span className="material-symbols-outlined text-xs fill-1">star</span>
<span className="material-symbols-outlined text-xs fill-1">star</span>
<span className="material-symbols-outlined text-xs fill-1">star</span>
<span className="material-symbols-outlined text-xs fill-1">star</span>
<span className="material-symbols-outlined text-xs fill-1">star</span>
<span className="text-white ml-1">4.9/5</span>
</div>
</div>
</div>
<blockquote className="text-lg italic text-slate-300">
                        "Un service impeccable. L'électricien est arrivé en 45 minutes pour une panne totale. Travail propre et facture conforme au devis initial. Je recommande !"
                    </blockquote>
<p className="mt-4 font-bold">âDA” Marc D., Paris 15ème</p>
</div>
</div>
</section>
{/*  Top Experts Section  */}
<section className="mb-16">
<div className="flex justify-between items-end mb-8">
<div>
<h2 className="text-2xl font-black tracking-tight mb-2">Nos experts à proximité</h2>
<p className="text-slate-500">Sélectionnés pour leur savoir-faire et leur ponctualité.</p>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
{/*  Expert 1  */}
<div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow group">
<div className="h-48 relative overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform" data-alt="Portrait de Thomas expert électricien" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9xUZ9rs_XknGa6nTkSpYfxho1BiVdSJU4jFl_RPgktmKJeS9dlGCe4Cpo1RXZpm-x8yCtntsiU5PgjQrn9RzTpu5GByDyUQNktnUEeGr9x33gVYeHcwLgCnbfyoWeo_jdT659Z6QbrGopwb0BkvrT0WxXUkR_FwiNtip1CUahUEdxTTaKYg3u3VpE2536JVBkqnkszGGWfsIc7PtCTTkL_tBBZwHwLPQMQf9AcS9JfCK8B2CYtLOmZ2haS4GTWDyQujwG1TXVbJYm"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 text-slate-900 font-bold text-xs shadow-sm">
<span className="material-symbols-outlined text-yellow-500 text-xs fill-1">star</span> 4.9
                        </div>
</div>
<div className="p-5">
<h4 className="font-bold text-lg mb-1">Thomas G.</h4>
<p className="text-slate-500 text-sm mb-4">Électricien Indépendant • 12 ans d'exp.</p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="text-[10px] uppercase font-black bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">Dépannage</span>
<span className="text-[10px] uppercase font-black bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">Domotique</span>
</div>
<button className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-2 rounded-xl transition-all">Voir profil</button>
</div>
</div>
{/*  Expert 2  */}
<div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow group">
<div className="h-48 relative overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform" data-alt="Portrait de Sarah experte électricité" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCShHoAxweJBJrZ6ZVgdQ5G7neKXvwmma52yirKSmw_SVUtWufitB7x2iQpP0OllGSp4K583e-qAaFTc3JIb2ZfruMdU2d7tZ-GhewWbCn_hqYbIKFHy_Si7NyGIo-a2uQ9ZStVDg9kXfPmOLfudN8vdskysFFoqhCyMdEAc_izW-USlX0wHj5JkqDiGkcUM5h4ALUSh1k2KPNC5EYwFCq_XVnrY-Q_HCX_lY6WSi7q-CzzuUDr8EK7zbSdD7cH9WjG1pQAgLegRX23"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 text-slate-900 font-bold text-xs shadow-sm">
<span className="material-symbols-outlined text-yellow-500 text-xs fill-1">star</span> 5.0
                        </div>
</div>
<div className="p-5">
<h4 className="font-bold text-lg mb-1">Sarah M.</h4>
<p className="text-slate-500 text-sm mb-4">SARL Élec Pro • 8 ans d'exp.</p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="text-[10px] uppercase font-black bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">Mise aux normes</span>
<span className="text-[10px] uppercase font-black bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">Rénovation</span>
</div>
<button className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-2 rounded-xl transition-all">Voir profil</button>
</div>
</div>
{/*  Expert 3  */}
<div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow group">
<div className="h-48 relative overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform" data-alt="Portrait de Jean expert maintenance" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaXppezjkdsGUPmDYgYAh4kskHKtPq0gVF-Lm4qo0npR2n2TOlBQrDpmb29Zybf_-m0TuNSDLezB7SvM0bySz4jHOlsXcdI1pkf95ZElM65r3M35ZpFr_XEG823DKG3oaOIbidIUr7SR_QZjpFkrqiCiemiW4APbm1EdktiXWX-oJgYuWhTr0TpIOetYTyAKsNdphNRGl_WN0KbSEsB1LsO3DSw9eJp_Q9Q8rSJv1q984ou6jhOBbH-HsLu9MsgoHR0kK9US--qsYz"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 text-slate-900 font-bold text-xs shadow-sm">
<span className="material-symbols-outlined text-yellow-500 text-xs fill-1">star</span> 4.8
                        </div>
</div>
<div className="p-5">
<h4 className="font-bold text-lg mb-1">Jean-Luc B.</h4>
<p className="text-slate-500 text-sm mb-4">Expert Maintenance • 20 ans d'exp.</p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="text-[10px] uppercase font-black bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">Industriel</span>
<span className="text-[10px] uppercase font-black bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">Tableaux</span>
</div>
<button className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-2 rounded-xl transition-all">Voir profil</button>
</div>
</div>
{/*  Expert 4  */}
<div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow group">
<div className="h-48 relative overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform" data-alt="Portrait de Karim spécialiste IRVE" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-gC8XEfjIPWOjRrli93wjOavheCV5pZp5jv-k04IUF7BOiX9zs4_y5r9RRdAsXvUR2YZ6LPPyA82NLr4j2EIKjBLCn0v6l9pO3UpVskwQqNM4DQvAlMePPNh7W6EOE-P0IbGE25gr22yZ4cV1Xcxe34L1icodGvUrHI9kCwEXN1dGiPoTEujJwGYxNTlFcB0qyZstpOYWqB1MDd-rOKDLCrz_y2oUS72jQmiatGXN5-KRGm6HQlV9lz-tyaM4hu_vsWe_7LkNefE_"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 text-slate-900 font-bold text-xs shadow-sm">
<span className="material-symbols-outlined text-yellow-500 text-xs fill-1">star</span> 4.9
                        </div>
</div>
<div className="p-5">
<h4 className="font-bold text-lg mb-1">Karim A.</h4>
<p className="text-slate-500 text-sm mb-4">Éco-Solution Élec • 5 ans d'exp.</p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="text-[10px] uppercase font-black bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">Bornes IRVE</span>
<span className="text-[10px] uppercase font-black bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">Solaire</span>
</div>
<button className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-2 rounded-xl transition-all">Voir profil</button>
</div>
</div>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
<div>
<h5 className="font-bold mb-4">ProServices</h5>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-primary" href="#">À propos</a></li>
<li><a className="hover:text-primary" href="#">Carrières</a></li>
<li><a className="hover:text-primary" href="#">Presse</a></li>
</ul>
</div>
<div>
<h5 className="font-bold mb-4">Services</h5>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-primary" href="#">Électricité</a></li>
<li><a className="hover:text-primary" href="#">Plomberie</a></li>
<li><a className="hover:text-primary" href="#">Serrurerie</a></li>
</ul>
</div>
<div>
<h5 className="font-bold mb-4">Aide</h5>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-primary" href="#">Centre d'aide</a></li>
<li><a className="hover:text-primary" href="#">Contact</a></li>
<li><a className="hover:text-primary" href="#">FAQ</a></li>
</ul>
</div>
<div>
<h5 className="font-bold mb-4">Légal</h5>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-primary" href="#">CGU</a></li>
<li><a className="hover:text-primary" href="#">Confidentialité</a></li>
<li><a className="hover:text-primary" href="#">Mentions légales</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-200 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-slate-500">© 2024 ProServices. Tous droits réservés.</p>
<div className="flex gap-4">
<span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-primary">social_leaderboard</span>
<span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-primary">share</span>
<span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-primary">language</span>
</div>
</div>
</div>
</footer>

    </>
  );
};

export default ElectriciteCategory;
