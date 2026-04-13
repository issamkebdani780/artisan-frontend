import React from 'react';

const ResultatsDeRechercheDisponibleCeMois = () => {
  return (
    <>
      
{/*  Header Navigation  */}
<header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
<div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between gap-4">
<div className="flex items-center gap-8">
<a className="flex items-center gap-2 text-primary" href="#">
<span className="material-symbols-outlined text-3xl font-bold">handyman</span>
<h2 className="text-slate-900 text-xl font-black leading-tight tracking-tight">ArtisanDirect</h2>
</a>
<div className="hidden md:flex relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
<span className="material-symbols-outlined text-xl">search</span>
</div>
<input className="block w-64 lg:w-96 pl-10 pr-3 py-2 border-none bg-slate-100 rounded-lg focus:ring-2 focus:ring-primary text-sm transition-all" placeholder="Quel service recherchez-vous ?" type="text"/>
</div>
</div>
<div className="flex items-center gap-2 sm:gap-6">
<nav className="hidden lg:flex items-center gap-6">
<a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Accueil</a>
<a className="text-sm font-semibold text-primary transition-colors" href="#">Artisans</a>
<a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Tarifs</a>
</nav>
<div className="flex items-center gap-2 border-l border-slate-200 ml-2 pl-4">
<button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
<span className="material-symbols-outlined">translate</span>
</button>
<button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
<span className="material-symbols-outlined">dark_mode</span>
</button>
<button className="ml-2 px-5 py-2 bg-primary hover:bg-primary/90 text-white text-sm font-bold rounded-lg shadow-sm transition-all transform active:scale-95">
                        Connexion
                    </button>
</div>
</div>
</div>
</header>
<main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-8">
<div className="flex flex-col lg:flex-row gap-8">
{/*  Sidebar Filters  */}
<aside className="w-full lg:w-72 flex-shrink-0 space-y-6">
<div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-bold">Filtres</h3>
<button className="text-primary text-xs font-bold hover:underline">Réinitialiser</button>
</div>
{/*  Availability Filter  */}
<div className="space-y-4 mb-8">
<div className="flex items-center gap-2 text-slate-900 font-bold mb-3">
<span className="material-symbols-outlined text-primary">calendar_month</span>
<span className="text-sm uppercase tracking-wider">Disponibilité</span>
</div>
<div className="space-y-2">
<label className="flex items-center gap-3 p-3 rounded-lg border-2 border-primary bg-primary/5 cursor-pointer transition-all">
<input defaultChecked className="w-4 h-4 text-primary focus:ring-primary border-slate-300" name="availability" type="radio"/>
<span className="text-sm font-semibold text-primary">Disponible ce mois</span>
</label>
<label className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer transition-all">
<input className="w-4 h-4 text-primary focus:ring-primary border-slate-300" name="availability" type="radio"/>
<span className="text-sm font-medium">Cette semaine</span>
</label>
<label className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer transition-all">
<input className="w-4 h-4 text-primary focus:ring-primary border-slate-300" name="availability" type="radio"/>
<span className="text-sm font-medium">Dès aujourd'hui</span>
</label>
</div>
</div>
{/*  Other Filters  */}
<div className="space-y-6">
<div className="group">
<div className="flex items-center justify-between text-slate-600 cursor-pointer hover:text-primary mb-2">
<div className="flex items-center gap-2 font-bold">
<span className="material-symbols-outlined">category</span>
<span className="text-sm uppercase tracking-wider">Catégorie</span>
</div>
<span className="material-symbols-outlined">expand_more</span>
</div>
</div>
<div className="group">
<div className="flex items-center justify-between text-slate-600 cursor-pointer hover:text-primary mb-2">
<div className="flex items-center gap-2 font-bold">
<span className="material-symbols-outlined">payments</span>
<span className="text-sm uppercase tracking-wider">Tarifs</span>
</div>
<span className="material-symbols-outlined">expand_more</span>
</div>
</div>
<div className="group">
<div className="flex items-center justify-between text-slate-600 cursor-pointer hover:text-primary mb-2">
<div className="flex items-center gap-2 font-bold">
<span className="material-symbols-outlined">star</span>
<span className="text-sm uppercase tracking-wider">Ã‰valuations</span>
</div>
<span className="material-symbols-outlined">expand_more</span>
</div>
</div>
</div>
</div>
</aside>
{/*  Main Content Area  */}
<div className="flex-1 space-y-6">
{/*  Title and Breadcrumbs  */}
<div className="space-y-2">
<nav className="flex items-center gap-2 text-xs font-medium text-slate-500">
<a className="hover:text-primary" href="#">Accueil</a>
<span className="material-symbols-outlined text-[10px]">arrow_forward_ios</span>
<span className="text-slate-900">Artisans disponibles</span>
</nav>
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div className="space-y-1">
<h1 className="text-3xl font-black tracking-tight">Artisans disponibles ce mois</h1>
<p className="text-slate-500 max-w-xl">
                                Découvrez nos professionnels qualifiés et vérifiés, prÃªts à intervenir sur vos projets immédiatement.
                            </p>
</div>
<div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm font-semibold">
<span className="text-slate-500">Trier par :</span>
<select className="border-none bg-transparent p-0 pr-8 focus:ring-0 text-primary">
<option>Les mieux notés</option>
<option>Prix croissants</option>
<option>Plus proches</option>
</select>
</div>
</div>
</div>
{/*  Results Grid  */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
{/*  Artisan Card 1  */}
<div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
<div className="relative h-48 w-full bg-slate-200 overflow-hidden">
<img className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" data-alt="Professional electrician working on a panel" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAuC3dcjW19OdeHBF7sjyZgA-AGIAzM7H8p3kud6hydGvv09HDSj6tfvoxF_Du7PfjsthqkdhzSj0o8lBbHJA1Vb2L3BUgw2D3HX3qUEGgdXXdJpcXetKbwLDSZFHG8_X87ugSWyMj3GJbiUY3pEFzTlxHmtiMZLVrRhMjagrVKVPAGX38y8nqtCjCVVINMdmetYnVcMUZPCFDp6rQyHDdZ3L7pNwMnxaL2zVdeXnHG_-TXNNdnmiA0UARqFneP4gAoSaq9o38TlYa"/>
<div className="absolute top-4 left-4 flex gap-2">
<span className="bg-green-100 text-green-700 text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded-md flex items-center gap-1 shadow-sm border border-green-200">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                    Disponible
                                </span>
</div>
<button className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition-colors">
<span className="material-symbols-outlined">favorite</span>
</button>
</div>
<div className="p-5 flex-1 flex flex-col">
<div className="flex justify-between items-start mb-2">
<div>
<div className="flex items-center gap-1.5 mb-1">
<h3 className="text-lg font-bold leading-tight">Jean Dupuis</h3>
<span className="material-symbols-outlined text-primary text-xl fill-icon" title="Profil vérifié">verified</span>
</div>
<p className="text-slate-500 text-sm font-medium flex items-center gap-1">
<span className="material-symbols-outlined text-sm">construction</span>
                                        Plomberie &amp; Chauffage
                                    </p>
</div>
<div className="text-right">
<div className="flex items-center justify-end text-amber-500 font-bold gap-0.5">
<span className="material-symbols-outlined text-lg fill-icon">star</span>
<span>4.9</span>
</div>
<p className="text-slate-400 text-xs">(124 avis)</p>
</div>
</div>
<div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between gap-3 mt-auto">
<button className="flex-1 px-4 py-2.5 bg-primary/10 hover:bg-primary/20 text-primary font-bold rounded-lg transition-colors text-sm">
                                    Voir le profil
                                </button>
<button className="p-2.5 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
<span className="material-symbols-outlined">chat</span>
</button>
</div>
</div>
</div>
{/*  Artisan Card 2  */}
<div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
<div className="relative h-48 w-full bg-slate-200 overflow-hidden">
<img className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" data-alt="Worker fixing electrical components" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-Sjes8bb8STDaQq07MElh_z4dxgOOr5Ns0T-6complvyDTDYqfPg6Y8TwsFCcZcnUIWPRfDKRtyASvddhNT6i1Xp65rmywGj-GYwkOS72_18DR1oujbtD_CLOo97yljdoSpWPU2hNUjD_scSIK8bF6PGspeS236TLRb2JzjE2OenHvXvmj_LZvd-7mLeMADQo2zlcEYwftOSKp8yrXVdfOyRzX4LsAdRi8dat03Mf5apGLPCx4And5CvBMHsp1GvEk8-_pb7YVj_v"/>
<div className="absolute top-4 left-4 flex gap-2">
<span className="bg-green-100 text-green-700 text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded-md flex items-center gap-1 shadow-sm border border-green-200">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                    Disponible
                                </span>
</div>
<button className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition-colors">
<span className="material-symbols-outlined">favorite</span>
</button>
</div>
<div className="p-5 flex-1 flex flex-col">
<div className="flex justify-between items-start mb-2">
<div>
<div className="flex items-center gap-1.5 mb-1">
<h3 className="text-lg font-bold leading-tight">Marc Lefebvre</h3>
<span className="material-symbols-outlined text-primary text-xl fill-icon">verified</span>
</div>
<p className="text-slate-500 text-sm font-medium flex items-center gap-1">
<span className="material-symbols-outlined text-sm">bolt</span>
                                        Ã‰lectricité Générale
                                    </p>
</div>
<div className="text-right">
<div className="flex items-center justify-end text-amber-500 font-bold gap-0.5">
<span className="material-symbols-outlined text-lg fill-icon">star</span>
<span>4.8</span>
</div>
<p className="text-slate-400 text-xs">(89 avis)</p>
</div>
</div>
<div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between gap-3 mt-auto">
<button className="flex-1 px-4 py-2.5 bg-primary/10 hover:bg-primary/20 text-primary font-bold rounded-lg transition-colors text-sm">
                                    Voir le profil
                                </button>
<button className="p-2.5 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
<span className="material-symbols-outlined">chat</span>
</button>
</div>
</div>
</div>
{/*  Artisan Card 3  */}
<div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
<div className="relative h-48 w-full bg-slate-200 overflow-hidden">
<img className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" data-alt="Female designer in kitchen renovation" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-FIqrDn05dZ4kZQXqeYmT4Be5GxcFovw6CfA954BYZNVoLqdt85pSgq5IkGUypQxkxJj-v3tQw8DLDYTuiFrK7FgLI5DIlBxAYDSlj2ONJzDWUxn9H8LQpkEd31zO0oL1edutryIx6DcSmxu_58W2THPUppgOSFgIc-KFHTt1EkO52hOTxvAy6TBOWce2Wk4ld5j1gn7DlW-jR_Wli6uLVXo3X5xacMoLG0s1KPL-bfGzFCQ_hPtiC51l290SJeqdXPJqEYb65icP"/>
<div className="absolute top-4 left-4 flex gap-2">
<span className="bg-green-100 text-green-700 text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded-md flex items-center gap-1 shadow-sm border border-green-200">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                    Disponible
                                </span>
</div>
<button className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition-colors">
<span className="material-symbols-outlined">favorite</span>
</button>
</div>
<div className="p-5 flex-1 flex flex-col">
<div className="flex justify-between items-start mb-2">
<div>
<div className="flex items-center gap-1.5 mb-1">
<h3 className="text-lg font-bold leading-tight">Sophie Martin</h3>
<span className="material-symbols-outlined text-primary text-xl fill-icon">verified</span>
</div>
<p className="text-slate-500 text-sm font-medium flex items-center gap-1">
<span className="material-symbols-outlined text-sm">brush</span>
                                        Rénovation d'Intérieur
                                    </p>
</div>
<div className="text-right">
<div className="flex items-center justify-end text-amber-500 font-bold gap-0.5">
<span className="material-symbols-outlined text-lg fill-icon">star</span>
<span>5.0</span>
</div>
<p className="text-slate-400 text-xs">(210 avis)</p>
</div>
</div>
<div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between gap-3 mt-auto">
<button className="flex-1 px-4 py-2.5 bg-primary/10 hover:bg-primary/20 text-primary font-bold rounded-lg transition-colors text-sm">
                                    Voir le profil
                                </button>
<button className="p-2.5 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
<span className="material-symbols-outlined">chat</span>
</button>
</div>
</div>
</div>
{/*  Artisan Card 4  */}
<div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
<div className="relative h-48 w-full bg-slate-200 overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Carpenter building furniture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVEx2tjTOttE1qvjr2ocGXzOF6o56x0Sg72-xavWX_iDXFDjkSma8K4GoAdoOhDl2j1_hUKEndW59FkWSWqFxTESy6scOdfZrm6YHwVc9TytnmGWMVAFlBDqsck6rdbJZG7UgP3QV4N6O09DLznzSW_HkHVaQ5ovyQrJHSXKdbNXkrnZ5EAgNdr2HwZpmiG4C83rRO-mssRIouafTw0KnQ-1RuojsNJoi8kIwYnwomXqJe4jxioYCbJNavhHPTVWVAOnRipgFHgDXl"/>
<div className="absolute top-4 left-4">
<span className="bg-green-100 text-green-700 text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded-md flex items-center gap-1 shadow-sm border border-green-200">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                    Disponible
                                </span>
</div>
</div>
<div className="p-5 flex-1 flex flex-col">
<div className="flex justify-between items-start mb-2">
<div>
<div className="flex items-center gap-1.5 mb-1">
<h3 className="text-lg font-bold leading-tight">Antoine Roux</h3>
<span className="material-symbols-outlined text-primary text-xl fill-icon">verified</span>
</div>
<p className="text-slate-500 text-sm font-medium flex items-center gap-1">
<span className="material-symbols-outlined text-sm">carpenter</span>
                                        Menuiserie bois
                                    </p>
</div>
<div className="text-right">
<div className="flex items-center justify-end text-amber-500 font-bold gap-0.5">
<span className="material-symbols-outlined text-lg fill-icon">star</span>
<span>4.7</span>
</div>
<p className="text-slate-400 text-xs">(45 avis)</p>
</div>
</div>
<div className="mt-auto pt-4 flex items-center justify-between gap-3">
<button className="flex-1 px-4 py-2.5 bg-primary/10 hover:bg-primary/20 text-primary font-bold rounded-lg transition-colors text-sm">
                                    Voir le profil
                                </button>
<button className="p-2.5 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
<span className="material-symbols-outlined">chat</span>
</button>
</div>
</div>
</div>
{/*  Artisan Card 5  */}
<div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
<div className="relative h-48 w-full bg-slate-200 overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Worker repairing an air conditioner" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD90tQ0oOAIvu-Hl90pQltt1Ye5jG_FWV4oi_-xtemFcYf78mAjtP6sYuJONrCjlvQHMzcCkWkZvTAgX8cX9eGutfS7eKvvZ03x-tPUNcOzicoHdjMCp5m_A03U4qQYFDZonVrFt93BBInOGTEtS2Tj_TW1R-AO6n0ERYjL1NOiGMZilT_CdWEYXfmH1NC7AZMBQ5JCfWH-aVa_CGaSjvBvxToGf1Nnc18LEySS058iRNqFsJHzjSMo6Jdoi-PqzgC2tWAJa3Gv1vb_"/>
<div className="absolute top-4 left-4">
<span className="bg-green-100 text-green-700 text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded-md flex items-center gap-1 shadow-sm border border-green-200">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                    Disponible
                                </span>
</div>
</div>
<div className="p-5 flex-1 flex flex-col">
<div className="flex justify-between items-start mb-2">
<div>
<div className="flex items-center gap-1.5 mb-1">
<h3 className="text-lg font-bold leading-tight">Lucas Bernard</h3>
<span className="material-symbols-outlined text-primary text-xl fill-icon">verified</span>
</div>
<p className="text-slate-500 text-sm font-medium flex items-center gap-1">
<span className="material-symbols-outlined text-sm">ac_unit</span>
                                        Climatisation &amp; PAC
                                    </p>
</div>
<div className="text-right">
<div className="flex items-center justify-end text-amber-500 font-bold gap-0.5">
<span className="material-symbols-outlined text-lg fill-icon">star</span>
<span>4.9</span>
</div>
<p className="text-slate-400 text-xs">(62 avis)</p>
</div>
</div>
<div className="mt-auto pt-4 flex items-center justify-between gap-3">
<button className="flex-1 px-4 py-2.5 bg-primary/10 hover:bg-primary/20 text-primary font-bold rounded-lg transition-colors text-sm">
                                    Voir le profil
                                </button>
<button className="p-2.5 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
<span className="material-symbols-outlined">chat</span>
</button>
</div>
</div>
</div>
{/*  Artisan Card 6  */}
<div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
<div className="relative h-48 w-full bg-slate-200 overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Worker repairing a house roof" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQF4uHkaSm0vXqiBn-GubXHTJ1nZCjVifEoeiN8qIfQQ5GozTqxUAs_GkdGzZbGYV2qeHj5cYmvcFHzObKkYX0kPCj_zIqXB1pSdoSGLAJgBqLs-mRxlAjpGTsUCqgAsfDHDg4oXBwA7J_m12DyORZDQrOXsp-KUaFpuZpoTwDHMXGVoto-pmrrlNmD-N38eVT_bu2iUtCZfizsOYHqFxWtSsrWfE7INaIWXqTfTBfhYuLj0Ef7q_UYoX37VHEGUwgBBHRVvXQpsNB"/>
<div className="absolute top-4 left-4">
<span className="bg-green-100 text-green-700 text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded-md flex items-center gap-1 shadow-sm border border-green-200">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                    Disponible
                                </span>
</div>
</div>
<div className="p-5 flex-1 flex flex-col">
<div className="flex justify-between items-start mb-2">
<div>
<div className="flex items-center gap-1.5 mb-1">
<h3 className="text-lg font-bold leading-tight">Thierry Grand</h3>
<span className="material-symbols-outlined text-primary text-xl fill-icon">verified</span>
</div>
<p className="text-slate-500 text-sm font-medium flex items-center gap-1">
<span className="material-symbols-outlined text-sm">house</span>
                                        Couverture &amp; Toiture
                                    </p>
</div>
<div className="text-right">
<div className="flex items-center justify-end text-amber-500 font-bold gap-0.5">
<span className="material-symbols-outlined text-lg fill-icon">star</span>
<span>4.6</span>
</div>
<p className="text-slate-400 text-xs">(31 avis)</p>
</div>
</div>
<div className="mt-auto pt-4 flex items-center justify-between gap-3">
<button className="flex-1 px-4 py-2.5 bg-primary/10 hover:bg-primary/20 text-primary font-bold rounded-lg transition-colors text-sm">
                                    Voir le profil
                                </button>
<button className="p-2.5 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
<span className="material-symbols-outlined">chat</span>
</button>
</div>
</div>
</div>
</div>
{/*  Pagination  */}
<div className="flex items-center justify-center gap-2 pt-8">
<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-400">
<span className="material-symbols-outlined">chevron_left</span>
</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold">1</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 hover:bg-slate-50 font-bold">2</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 hover:bg-slate-50 font-bold">3</button>
<span className="px-2 text-slate-400">...</span>
<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 hover:bg-slate-50 font-bold">12</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-400">
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
</div>
</main>
<footer className="bg-white border-t border-slate-200 mt-20 pt-16 pb-8">
<div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="space-y-6">
<div className="flex items-center gap-2 text-primary">
<span className="material-symbols-outlined text-3xl font-bold">handyman</span>
<h2 className="text-slate-900 text-xl font-black tracking-tight">ArtisanDirect</h2>
</div>
<p className="text-slate-500 text-sm leading-relaxed">
                        La plateforme de référence pour connecter les particuliers aux meilleurs artisans locaux. Professionnalisme, réactivité et confiance.
                    </p>
<div className="flex items-center gap-4">
<a className="p-2 bg-slate-100 rounded-lg text-slate-600 hover:text-primary transition-colors" href="#">
<svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
</a>
<a className="p-2 bg-slate-100 rounded-lg text-slate-600 hover:text-primary transition-colors" href="#">
<svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
</a>
<a className="p-2 bg-slate-100 rounded-lg text-slate-600 hover:text-primary transition-colors" href="#">
<svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
</a>
</div>
</div>
<div>
<h4 className="text-sm font-black uppercase tracking-widest mb-6">Plateforme</h4>
<ul className="space-y-4">
<li><a className="text-slate-500 text-sm hover:text-primary transition-colors" href="#">Comment ça marche</a></li>
<li><a className="text-slate-500 text-sm hover:text-primary transition-colors" href="#">Devenir Artisan</a></li>
<li><a className="text-slate-500 text-sm hover:text-primary transition-colors" href="#">Tarification</a></li>
<li><a className="text-slate-500 text-sm hover:text-primary transition-colors" href="#">Garanties</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-black uppercase tracking-widest mb-6">Artisans</h4>
<ul className="space-y-4">
<li><a className="text-slate-500 text-sm hover:text-primary transition-colors" href="#">Plombiers</a></li>
<li><a className="text-slate-500 text-sm hover:text-primary transition-colors" href="#">Ã‰lectriciens</a></li>
<li><a className="text-slate-500 text-sm hover:text-primary transition-colors" href="#">Peintres</a></li>
<li><a className="text-slate-500 text-sm hover:text-primary transition-colors" href="#">Menuisiers</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-black uppercase tracking-widest mb-6">Aide</h4>
<ul className="space-y-4">
<li><a className="text-slate-500 text-sm hover:text-primary transition-colors" href="#">Centre d'aide</a></li>
<li><a className="text-slate-500 text-sm hover:text-primary transition-colors" href="#">Contact</a></li>
<li><a className="text-slate-500 text-sm hover:text-primary transition-colors" href="#">Confidentialité</a></li>
<li><a className="text-slate-500 text-sm hover:text-primary transition-colors" href="#">CGU</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-slate-400 text-xs">Â© 2024 ArtisanDirect. Tous droits réservés.</p>
<div className="flex items-center gap-6">
<img className="h-4 grayscale opacity-50" data-alt="Paypal logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOZy1E-PHlRXoG7mxvr6bCWy5oZAokUBGh9797lakjUcbvGzrtWPaTZiXqJu7qTxJ07ZVmQcQU0MANYthQWzfrUuZaYUMvfeiwfIXmTUJnjBdBcrQEVB-FoFjtshth54X-JLQfWNq_vBDobiO-TPInMjQbUWYQOT56fm6wS28G8sIqPPYhivqr5oTk7odrFB_4YEke5-zwo33XsIIN9mMS0nHFsDklNkjKtRpdo57XJUPn6Lr1JHtUzZ-RAmxIF4R1hMgQ-8I4RPxk"/>
<img className="h-4 grayscale opacity-50" data-alt="Visa logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbbkwuj-ceSml_T-11J0uTmPH0OWmkf-UcbKdoVK5gpVBwix0e8pMHIOJj52An_hpwPhzbbYJCCOWyhHBcRD_YtJrFbR9xYE_v8R1JKqDNwnubUli-1tULySiZp4nXE9bJAs_PrPTgfNj_5W0j3qYpIp3x3enq6KmegJZaOPqzhhXaxIw_mT33Cy4yHWiEMFfexwPe9FP67D11ZWPRsE4S5BVwlS8_M44Vl4yCxB24IydIni5RkR8nOIiOVYsgTQLKXXIULcYgyxMV"/>
<img className="h-4 grayscale opacity-50" data-alt="Mastercard logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpVepEhdnlxXWPHOgDSJZT2UfYsfUUfbDWVnRjmHXVznKp4fE0-zDb_wANgZkKsQsJLB7fggDNwfSrFB9CLG6tUYUM97PbvMHmiMGa1WVra-rhPyfaA11SzTZHxOW6m3sJ_VvwdF_0ypZKJWfk6Lj9qVX9-ink04VoofZxT4cNtua3ep5UYzMrcVosP8qyxXS_ajTC5mffnBgedizmmZlWUsuP8F0T1iceU7QV7wuwuG1N4niWHedlx74NTJuyJDmKvOXrhweIGYso"/>
</div>
</div>
</div>
</footer>

    </>
  );
};

export default ResultatsDeRechercheDisponibleCeMois;

