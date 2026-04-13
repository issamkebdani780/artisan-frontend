import React from 'react';

const PoseDePapierPeint = () => {
  return (
    <>
      
<div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
{/*  Top Navigation Bar  */}
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 px-6 md:px-10 py-4 bg-background-light sticky top-0 z-50">
<div className="flex items-center gap-4 text-primary">
<div className="size-8 flex items-center justify-center bg-primary/10 rounded-lg">
<span className="material-symbols-outlined text-primary">wallpaper</span>
</div>
<h2 className="text-slate-900 text-xl font-bold leading-tight tracking-tight">DécoExpert</h2>
</div>
<div className="flex flex-1 justify-end gap-4 md:gap-8">
<nav className="hidden md:flex items-center gap-8">
<a className="text-slate-600 text-sm font-medium hover:text-primary transition-colors" href="#">Accueil</a>
<a className="text-primary text-sm font-bold" href="#">Services</a>
<a className="text-slate-600 text-sm font-medium hover:text-primary transition-colors" href="#">Notifications</a>
</nav>
<button className="flex min-w-[100px] cursor-pointer items-center justify-center rounded-xl h-10 px-6 bg-primary text-white text-sm font-bold transition-all hover:opacity-90 active:scale-95 shadow-lg shadow-primary/20">
<span>Connexion</span>
</button>
</div>
</header>
<main className="flex-1 flex flex-col md:flex-row max-w-7xl mx-auto w-full px-4 md:px-10 py-8 gap-8">
{/*  Left Sidebar  */}
<aside className="w-full md:w-72 flex flex-col gap-6">
<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
<div className="flex items-center gap-3 mb-6">
<div className="bg-primary/10 rounded-full p-2">
<span className="material-symbols-outlined text-primary text-2xl">format_paint</span>
</div>
<div>
<h3 className="font-bold text-slate-900">Pose de Papier Peint</h3>
<p className="text-xs text-slate-500">Service Premium</p>
</div>
</div>
<nav className="flex flex-col gap-2">
<a className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary text-white font-medium" href="#">
<span className="material-symbols-outlined text-sm">dashboard</span>
<span className="text-sm">Tableau de bord</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-50 transition-colors" href="#">
<span className="material-symbols-outlined text-sm">description</span>
<span className="text-sm">Mes devis</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-50 transition-colors" href="#">
<span className="material-symbols-outlined text-sm">chat_bubble</span>
<span className="text-sm">Messages</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-50 transition-colors" href="#">
<span className="material-symbols-outlined text-sm">settings</span>
<span className="text-sm">Paramètres</span>
</a>
</nav>
</div>
{/*  Sidebar CTA  */}
<div className="bg-primary p-6 rounded-2xl text-white flex flex-col gap-4 shadow-xl shadow-primary/30 relative overflow-hidden group">
<div className="absolute -right-4 -top-4 opacity-10 group-hover:rotate-12 transition-transform">
<span className="material-symbols-outlined text-9xl">brush</span>
</div>
<h4 className="text-lg font-bold relative z-10">Besoin d'un devis gratuit?</h4>
<p className="text-white/80 text-xs leading-relaxed relative z-10">Recevez une estimation personnalisée en moins de 24h pour vos travaux de décoration.</p>
<button className="w-full bg-white text-primary font-bold py-3 rounded-xl hover:bg-slate-50 transition-colors text-sm relative z-10">
                            Demander un devis
                        </button>
</div>
</aside>
{/*  Main Content Area  */}
<div className="flex-1 flex flex-col gap-8">
{/*  Hero Section  */}
<section className="relative h-[300px] rounded-3xl overflow-hidden bg-slate-900">
<img alt="Interior with beautiful wallpaper" className="absolute inset-0 w-full h-full object-cover opacity-70" data-alt="Modern living room with designer floral wallpaper" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6ppI16O5yEjPXGK440Ah6_DhZEU7DeSo8Njp3H8uTiWFifT70YRj9HcghPhWHJoiZUlVzlfo-3dJWQaHEivQ6PNzts4DfkZnsWAvZ-O0tq80K7K9XRPpGek795VXHa91wpYfY4__TEeGne4pJN47qgs_vfKLcegpbXiFX7xJtVPbJEzr9PMDPUA6U0fz44knjg74rV_sq1X5KZGMjzvcBYPTj5IT1Grpx7E5NHMUgTmhrhvAbbAqWnTus3aIuLfVJMXiL8-bMoy87"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent flex flex-col justify-end p-8">
<span className="bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit mb-3">Service Professionnel</span>
<h1 className="text-white text-3xl md:text-4xl font-bold mb-2">Service de Pose de Papier Peint</h1>
<p className="text-slate-300 max-w-lg">Transformez votre intérieur avec une pose méticuleuse et des finitions invisibles.</p>
</div>
</section>
{/*  Why Us Section  */}
<section>
<h2 className="text-2xl font-bold text-slate-900 mb-6">Pourquoi nous choisir ?</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="p-6 rounded-2xl border border-slate-100 bg-white flex flex-col gap-4">
<div className="bg-primary/10 text-primary p-3 rounded-xl w-fit">
<span className="material-symbols-outlined">award_star</span>
</div>
<div>
<h3 className="font-bold text-slate-900 mb-2">Expertise reconnue</h3>
<p className="text-sm text-slate-600">Plus de 10 ans d'expérience dans la haute décoration murale.</p>
</div>
</div>
<div className="p-6 rounded-2xl border border-slate-100 bg-white flex flex-col gap-4">
<div className="bg-primary/10 text-primary p-3 rounded-xl w-fit">
<span className="material-symbols-outlined">verified</span>
</div>
<div>
<h3 className="font-bold text-slate-900 mb-2">Finition parfaite</h3>
<p className="text-sm text-slate-600">Une pose millimétrée sans bulles ni raccords visibles garantis.</p>
</div>
</div>
<div className="p-6 rounded-2xl border border-slate-100 bg-white flex flex-col gap-4">
<div className="bg-primary/10 text-primary p-3 rounded-xl w-fit">
<span className="material-symbols-outlined">inventory_2</span>
</div>
<div>
<h3 className="font-bold text-slate-900 mb-2">Matériaux premium</h3>
<p className="text-sm text-slate-600">Utilisation de colles écologiques et papiers de haute qualité.</p>
</div>
</div>
</div>
</section>
{/*  Pricing & Details  */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
{/*  Pricing  */}
<section className="bg-white p-8 rounded-2xl border border-slate-100">
<h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">payments</span>
                                Tarification transparente
                            </h2>
<div className="space-y-4">
<div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
<span className="text-slate-700">Pose papier peint classique</span>
<span className="text-primary font-bold">15â‚¬ / mÂ²</span>
</div>
<div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
<span className="text-slate-700">Papier peint panoramique</span>
<span className="text-primary font-bold">22â‚¬ / mÂ²</span>
</div>
<div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
<span className="text-slate-700">Dépose ancien revÃªtement</span>
<span className="text-primary font-bold">8â‚¬ / mÂ²</span>
</div>
</div>
<p className="text-xs text-slate-500 mt-6 italic">* Matériaux non inclus. Devis final après visite technique.</p>
</section>
{/*  Experts  */}
<section className="bg-white p-8 rounded-2xl border border-slate-100">
<h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">engineering</span>
                                Nos Experts
                            </h2>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-4 p-3 rounded-xl border border-slate-50">
<img alt="Portrait Marc Lefebvre" className="size-14 rounded-full object-cover" data-alt="Professional painter Marc Lefebvre smiling" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdw3oJ3UPRMV_EnYEdkuuwTwS-cKN4K5axM7CtJAbkplxdySXYJzB4CPIXWZ5Jhgnzhey61JCjkJd7nUiSNYVbISoTNYpMcFSwZC2-GvxeyXHekzfhw_suvWVKj0QJVDzmrRoH3b2NMsz7gPsrWuV_B9W6LPyL0_DfGbzgexEVA1gtWMA8nmlKHVqyIol3_APFl7--HJZB0ndcn-PiEwaqBQR59wmtGuJdBGNMVPa5KxxbshT-9ohNE9XqWaF9ceDhJwEl4ikxlusw"/>
<div>
<h4 className="font-bold text-slate-900">Marc Lefebvre</h4>
<p className="text-sm text-primary">Maître Artisan - 15 ans d'exp.</p>
</div>
</div>
<div className="flex items-center gap-4 p-3 rounded-xl border border-slate-50">
<img alt="Portrait Sophie Martin" className="size-14 rounded-full object-cover" data-alt="Professional designer Sophie Martin smiling" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDp2c1TZR2BO2K1WhYxPNc5VM-Qg7MqfGWHP-OumdKlN2jaN3yR3Yl5bOLrS1H__6cmLBlwm9u59-J4MnC92_YDquuq7962Qqlu_C-ufHE_IArIl--HsrHTfn2_81QPnbzkC3NFUNwlP9sI6h-79TepVTvNOqlOyxbWYmDgF_klA-Cv5MmDueIJW87EbBoVDSxGESKluLR_SCODsn-JzL9Y95_Ieti813bSSGee53KoTs7Qrsq48kyKyr8QwfvOluz2cUXVi_SOWO-F"/>
<div>
<h4 className="font-bold text-slate-900">Sophie Martin</h4>
<p className="text-sm text-primary">Spécialiste Pose Panoramique</p>
</div>
</div>
</div>
</section>
</div>
{/*  Customer Reviews  */}
<section className="pb-12">
<h2 className="text-2xl font-bold text-slate-900 mb-6">Avis clients</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-primary/5 p-6 rounded-2xl border-l-4 border-primary">
<div className="flex gap-1 mb-3 text-primary">
<span className="material-symbols-outlined text-sm">star</span>
<span className="material-symbols-outlined text-sm">star</span>
<span className="material-symbols-outlined text-sm">star</span>
<span className="material-symbols-outlined text-sm">star</span>
<span className="material-symbols-outlined text-sm">star</span>
</div>
<p className="text-slate-700 italic mb-4">"Travail remarquable. Marc a posé un papier peint panoramique très complexe et le résultat est bluffant. Aucune bulle, raccords invisibles."</p>
<div className="text-sm font-bold text-slate-900">âDAâ€ Jean-Pierre D.</div>
</div>
<div className="bg-primary/5 p-6 rounded-2xl border-l-4 border-primary">
<div className="flex gap-1 mb-3 text-primary">
<span className="material-symbols-outlined text-sm">star</span>
<span className="material-symbols-outlined text-sm">star</span>
<span className="material-symbols-outlined text-sm">star</span>
<span className="material-symbols-outlined text-sm">star</span>
<span className="material-symbols-outlined text-sm">star</span>
</div>
<p className="text-slate-700 italic mb-4">"Service très professionnel et ponctuel. Sophie est une véritable artiste. Mon salon est métamorphosé. Je recommande vivement !"</p>
<div className="text-sm font-bold text-slate-900">âDAâ€ Claire M.</div>
</div>
</div>
</section>
</div>
</main>
{/*  Footer Small  */}
<footer className="mt-auto border-t border-slate-200 px-6 py-6 text-center text-slate-500 text-sm">
<p>Â© 2024 DécoExpert - Service de pose de papier peint professionnel.</p>
</footer>
</div>
</div>

    </>
  );
};

export default PoseDePapierPeint;

