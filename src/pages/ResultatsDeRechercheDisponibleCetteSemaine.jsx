import React from 'react';

const ResultatsDeRechercheDisponibleCetteSemaine = () => {
  return (
    <>
      
{/*  Header Section  */}
<header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16 gap-4">
{/*  Logo  */}
<div className="flex items-center gap-2 shrink-0">
<div className="text-primary">
<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"></path>
</svg>
</div>
<span className="text-xl font-bold tracking-tight text-slate-900">ArtisanDirect</span>
</div>
{/*  Search Bar  */}
<div className="hidden md:flex flex-1 max-w-md">
<div className="relative w-full">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="material-symbols-outlined text-slate-400 text-xl">search</span>
</div>
<input className="block w-full pl-10 pr-3 py-2 border-none bg-slate-100 rounded-lg focus:ring-2 focus:ring-primary text-sm" placeholder="Quel service recherchez-vous ?" type="text"/>
</div>
</div>
{/*  Navigation & Actions  */}
<nav className="flex items-center gap-4 lg:gap-8">
<div className="hidden lg:flex items-center gap-6">
<a className="text-sm font-medium hover:text-primary transition-colors" href="#">Accueil</a>
<a className="text-sm font-medium text-primary" href="#">Artisans</a>
<a className="text-sm font-medium hover:text-primary transition-colors" href="#">Tarifs</a>
</div>
<div className="flex items-center gap-2">
<button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg">
<span className="material-symbols-outlined">language</span>
</button>
<button className="p-2 text-primary bg-primary/10 rounded-lg border border-primary/20 shadow-[0_0_15px_rgba(19,127,236,0.3)]">
<span className="material-symbols-outlined">dark_mode</span>
</button>
<button className="ml-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white text-sm font-bold rounded-lg transition-all">
                            Connexion
                        </button>
</div>
</nav>
</div>
</div>
</header>
{/*  Breadcrumbs  */}
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
<nav className="flex text-sm font-medium text-slate-500">
<a className="hover:text-primary" href="#">Accueil</a>
<span className="mx-2">/</span>
<span className="text-slate-900">Recherche</span>
</nav>
</div>
{/*  Main Content Layout  */}
<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
<div className="flex flex-col lg:flex-row gap-8">
{/*  Sidebar Filters  */}
<aside className="w-full lg:w-64 shrink-0 space-y-8">
<div>
<h2 className="text-lg font-bold text-slate-900 mb-1">Filtres</h2>
<p className="text-xs text-slate-500 mb-6">Affinez votre recherche d'expert</p>
<div className="space-y-2">
{/*  Filter Item Active  */}
<div className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary border border-primary/20">
<span className="material-symbols-outlined text-xl">calendar_today</span>
<span className="text-sm font-semibold uppercase tracking-wider">DISPONIBILITÉ</span>
</div>
<div className="pl-4 py-2 space-y-3 checkbox-tick">
<label className="flex items-center gap-3 cursor-pointer group">
<input defaultChecked className="h-5 w-5 rounded border-slate-300 text-primary focus:ring-primary bg-transparent checked:bg-primary" type="checkbox"/>
<span className="text-sm text-slate-700 group-hover:text-primary transition-colors">Cette semaine</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="h-5 w-5 rounded border-slate-300 text-primary focus:ring-primary bg-transparent" type="checkbox"/>
<span className="text-sm text-slate-700 group-hover:text-primary transition-colors">Aujourd'hui</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="h-5 w-5 rounded border-slate-300 text-primary focus:ring-primary bg-transparent" type="checkbox"/>
<span className="text-sm text-slate-700 group-hover:text-primary transition-colors">Demain</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="h-5 w-5 rounded border-slate-300 text-primary focus:ring-primary bg-transparent" type="checkbox"/>
<span className="text-sm text-slate-700 group-hover:text-primary transition-colors">Ce mois-ci</span>
</label>
</div>
{/*  Other Categories (Inactive Headings)  */}
<div className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer text-slate-600 mt-4">
<span className="material-symbols-outlined text-xl">handyman</span>
<span className="text-sm font-semibold uppercase tracking-wider">CATÉGORIE</span>
</div>
<div className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer text-slate-600">
<span className="material-symbols-outlined text-xl">payments</span>
<span className="text-sm font-semibold uppercase tracking-wider">TARIFS</span>
</div>
<div className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer text-slate-600">
<span className="material-symbols-outlined text-xl">star</span>
<span className="text-sm font-semibold uppercase tracking-wider">ÉVALUATIONS</span>
</div>
</div>
</div>
</aside>
{/*  Main Search Results  */}
<div className="flex-1">
<div className="mb-8">
<h1 className="text-3xl font-bold text-slate-900">Artisans disponibles cette semaine</h1>
<p className="text-slate-500 mt-2">Trouvez l'expert idéal pour vos travaux urgents parmis nos professionnels certifiés.</p>
</div>
{/*  Results Grid  */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
{/*  Artisan Card 1  */}
<div className="bg-white rounded-xl border border-slate-200 overflow-hidden group hover:shadow-lg transition-shadow">
<div className="relative h-48 w-full overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Professional electrician working on a panel" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBM3ydUJZ4rvd6qrTEwzimhPdvdsuUjkQxTkh4SeNdYmvvK0YVVVGRW6cdnXAsuO5u-hbNFsEo7MVdKWF4Uj2hyQWvncNhcBprAVtuMyQhTqdKhH09AST5qLv3p-8NW2TWw1AA8JejgxswvgglFvqS2H9dRoFt4HFbLUrOThDjGo7jIPzhqWJgJHIOIR1PSNWS-0Pb-oxcMzxDOhi1PIX7EeNS061Bs6N4JLaFHZ6djmMHxws7Zh3mLOs3XzJupwZy4PLcNOTfD5TrE"/>
<div className="absolute top-3 left-3 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Disponible</div>
</div>
<div className="p-5">
<div className="flex items-start justify-between mb-2">
<div>
<div className="flex items-center gap-1.5">
<h3 className="font-bold text-lg text-slate-900">Jean Dupuis</h3>
<span className="material-symbols-outlined text-primary text-lg" title="Vérifié">verified</span>
</div>
<p className="text-sm font-medium text-primary">Plomberie &amp; Chauffage</p>
</div>
</div>
<div className="flex items-center gap-1 mb-4">
<div className="flex text-yellow-400">
<span className="material-symbols-outlined text-[18px] fill-1">star</span>
<span className="material-symbols-outlined text-[18px] fill-1">star</span>
<span className="material-symbols-outlined text-[18px] fill-1">star</span>
<span className="material-symbols-outlined text-[18px] fill-1">star</span>
<span className="material-symbols-outlined text-[18px] fill-1">star_half</span>
</div>
<span className="text-xs font-semibold text-slate-600">(124 avis)</span>
</div>
<div className="flex gap-2">
<button className="flex-1 bg-primary text-white text-sm font-bold py-2 rounded-lg hover:bg-primary/90 transition-colors">Voir le profil</button>
<button className="px-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors">
<span className="material-symbols-outlined align-middle">chat</span>
</button>
</div>
</div>
</div>
{/*  Artisan Card 2  */}
<div className="bg-white rounded-xl border border-slate-200 overflow-hidden group hover:shadow-lg transition-shadow">
<div className="relative h-48 w-full overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Experienced plumber fixing kitchen pipes" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnlUSZ9RD0qnvL2NzsxYbObGbCTkRCdphzn-ZupxX4wacnJopDSuuN8WfxPb6tRCaPOA8HrbblGo_A67nruwuMYFKvwg5A1CWAYU-JPDiqYrV8PAs3lMofION9XJf0Waa0I5GqetsjiCAd1_4-Tv_LBACqLjycf9y1ho9Eh-1lCnwLTQf0QVw6fPUXhkTI-t5OUJpazunyaQ8S5A54aKX-irjbCchu0X9yUaL8U9ywB7gWkkvJ9YUJEst74rc8S3J1ss9TL0QRCA0g"/>
<div className="absolute top-3 left-3 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Disponible</div>
</div>
<div className="p-5">
<div className="flex items-start justify-between mb-2">
<div>
<div className="flex items-center gap-1.5">
<h3 className="font-bold text-lg text-slate-900">Marc Lefebvre</h3>
<span className="material-symbols-outlined text-primary text-lg">verified</span>
</div>
<p className="text-sm font-medium text-primary">Électricité générale</p>
</div>
</div>
<div className="flex items-center gap-1 mb-4">
<div className="flex text-yellow-400">
<span className="material-symbols-outlined text-[18px] fill-1">star</span>
<span className="material-symbols-outlined text-[18px] fill-1">star</span>
<span className="material-symbols-outlined text-[18px] fill-1">star</span>
<span className="material-symbols-outlined text-[18px] fill-1">star</span>
<span className="material-symbols-outlined text-[18px]">star</span>
</div>
<span className="text-xs font-semibold text-slate-600">(89 avis)</span>
</div>
<div className="flex gap-2">
<button className="flex-1 bg-primary text-white text-sm font-bold py-2 rounded-lg hover:bg-primary/90 transition-colors">Voir le profil</button>
<button className="px-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors">
<span className="material-symbols-outlined align-middle">chat</span>
</button>
</div>
</div>
</div>
{/*  Artisan Card 3  */}
<div className="bg-white rounded-xl border border-slate-200 overflow-hidden group hover:shadow-lg transition-shadow">
<div className="relative h-48 w-full overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Professional painter preparing wall surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHCJEwSNgC0IM88EMcIEUNKAIrCr1FpTWLVjqcIRTAAei0OhgxQkQTbvZRsyJqyb4_2K2OQY9pUhYnw_-lv-AAqj3Fez2OQIE82zvn85C8i9PahhEAFyHuABcS_crIMwNDbA-HZcLvj_x_C3iypso2296-ZfBnnQhnzOCWUGvuf-BGiMOsJ97SMLTBVvb4Ydx8H5sRkKA4Nf5LRBcBK1Sik1CH-ey4koq12GMGFH9i7-R2dRIjgNoVcCRkUWr8RJi3-aM6FauHXM-6"/>
<div className="absolute top-3 left-3 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Disponible</div>
</div>
<div className="p-5">
<div className="flex items-start justify-between mb-2">
<div>
<div className="flex items-center gap-1.5">
<h3 className="font-bold text-lg text-slate-900">Sophie Martin</h3>
<span className="material-symbols-outlined text-primary text-lg">verified</span>
</div>
<p className="text-sm font-medium text-primary">Peinture &amp; Décoration</p>
</div>
</div>
<div className="flex items-center gap-1 mb-4">
<div className="flex text-yellow-400">
<span className="material-symbols-outlined text-[18px] fill-1">star</span>
<span className="material-symbols-outlined text-[18px] fill-1">star</span>
<span className="material-symbols-outlined text-[18px] fill-1">star</span>
<span className="material-symbols-outlined text-[18px] fill-1">star</span>
<span className="material-symbols-outlined text-[18px] fill-1">star</span>
</div>
<span className="text-xs font-semibold text-slate-600">(215 avis)</span>
</div>
<div className="flex gap-2">
<button className="flex-1 bg-primary text-white text-sm font-bold py-2 rounded-lg hover:bg-primary/90 transition-colors">Voir le profil</button>
<button className="px-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors">
<span className="material-symbols-outlined align-middle">chat</span>
</button>
</div>
</div>
</div>
{/*  Artisan Card 4  */}
<div className="bg-white rounded-xl border border-slate-200 overflow-hidden group hover:shadow-lg transition-shadow">
<div className="relative h-48 w-full overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Carpenter working with wood tools" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFHzjZ1Pr_O6iss9t7qfQH0iCm1ZKfdrcyFJZCvPKFumH5Q2-kzyURYeSRloWeMHmlqNAmoECS6d7kJcsxHvyIoW-1UTBK7wwyniDSa3CSArC_68AzKMmmRYOnpBlPBAC7v6B3hiLaUVQbO71B4hSqTPeVkcloOM8ArCPuxjiOMggRWRV0cHyw5f9wTGI19O5LHN9Ai4O88k9S-FWU12T8-7ArRqc9keqASf62Z8BWH0M4pX2yjdcJYYbzuIRaQig61rZP0wJOs1dG"/>
<div className="absolute top-3 left-3 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Disponible</div>
</div>
<div className="p-5">
<div className="flex items-start justify-between mb-2">
<div>
<div className="flex items-center gap-1.5">
<h3 className="font-bold text-lg text-slate-900">Thomas Bernard</h3>
<span className="material-symbols-outlined text-primary text-lg">verified</span>
</div>
<p className="text-sm font-medium text-primary">Menuiserie</p>
</div>
</div>
<div className="flex items-center gap-1 mb-4">
<div className="flex text-yellow-400">
<span className="material-symbols-outlined text-[18px] fill-1">star</span>
<span className="material-symbols-outlined text-[18px] fill-1">star</span>
<span className="material-symbols-outlined text-[18px] fill-1">star</span>
<span className="material-symbols-outlined text-[18px] fill-1">star</span>
<span className="material-symbols-outlined text-[18px]">star</span>
</div>
<span className="text-xs font-semibold text-slate-600">(54 avis)</span>
</div>
<div className="flex gap-2">
<button className="flex-1 bg-primary text-white text-sm font-bold py-2 rounded-lg hover:bg-primary/90 transition-colors">Voir le profil</button>
<button className="px-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors">
<span className="material-symbols-outlined align-middle">chat</span>
</button>
</div>
</div>
</div>
{/*  Artisan Card 5  */}
<div className="bg-white rounded-xl border border-slate-200 overflow-hidden group hover:shadow-lg transition-shadow">
<div className="relative h-48 w-full overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Worker installing air conditioning" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtyeXsrm9-7_-MU-PYipJmWwQWhjHla2aPcl44ZPPlClHseU6Envupgh2TqV7fq5czFVn3BlIw_ujrJImz5k31xRADaclXSssiGwG3hOAigkufSH4Q6sk8sg6lSRwo8WDwR3i1xKISlZr7yKHWRehnyHV-IGJPI7-2tJuGjWqKovIusLmIqkiPP3DHOx3YWg89mfAZDEDV_x68TiV_5AV-RltpDv5wn7ULe6yLaKNyciELt5vie9o_7eQhwAi6ek1xtOSh5cY2V-lk"/>
<div className="absolute top-3 left-3 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Disponible</div>
</div>
<div className="p-5">
<div className="flex items-start justify-between mb-2">
<div>
<div className="flex items-center gap-1.5">
<h3 className="font-bold text-lg text-slate-900">Lucas Petit</h3>
<span className="material-symbols-outlined text-primary text-lg">verified</span>
</div>
<p className="text-sm font-medium text-primary">Climatisation &amp; Chauffage</p>
</div>
</div>
<div className="flex items-center gap-1 mb-4">
<div className="flex text-yellow-400">
<span className="material-symbols-outlined text-[18px] fill-1">star</span>
<span className="material-symbols-outlined text-[18px] fill-1">star</span>
<span className="material-symbols-outlined text-[18px] fill-1">star</span>
<span className="material-symbols-outlined text-[18px] fill-1">star</span>
<span className="material-symbols-outlined text-[18px] fill-1">star_half</span>
</div>
<span className="text-xs font-semibold text-slate-600">(76 avis)</span>
</div>
<div className="flex gap-2">
<button className="flex-1 bg-primary text-white text-sm font-bold py-2 rounded-lg hover:bg-primary/90 transition-colors">Voir le profil</button>
<button className="px-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors">
<span className="material-symbols-outlined align-middle">chat</span>
</button>
</div>
</div>
</div>
{/*  Artisan Card 6  */}
<div className="bg-white rounded-xl border border-slate-200 overflow-hidden group hover:shadow-lg transition-shadow">
<div className="relative h-48 w-full overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Locksmith working on a door lock" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBG9rCe9gqDLyYBIrEEKlJBRpfKD4f6VtpvVxUbmwF_bvY8MDYydub8NmVJQTpjdMNNy5SPmGHgfDw609tOnN5y9GcQjHJaSSx4jS4KAxXToWBumkCcn5EbdIRbYzye5KJYvP7SJmII7T5V32Fxd3HUqMRsFaiP04SAgNpy0N3AksoBw-9nz5LKpxOmnHryd-BdWOYdvaTxM2hDwaWtwDlvyJiPWnV-BeC-tp402PhANRWKFF0xlL8u_qIwOreEMF0cnsHaBU7QKZs"/>
<div className="absolute top-3 left-3 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Disponible</div>
</div>
<div className="p-5">
<div className="flex items-start justify-between mb-2">
<div>
<div className="flex items-center gap-1.5">
<h3 className="font-bold text-lg text-slate-900">Nicolas Roux</h3>
<span className="material-symbols-outlined text-primary text-lg">verified</span>
</div>
<p className="text-sm font-medium text-primary">Serrurerie d'urgence</p>
</div>
</div>
<div className="flex items-center gap-1 mb-4">
<div className="flex text-yellow-400">
<span className="material-symbols-outlined text-[18px] fill-1">star</span>
<span className="material-symbols-outlined text-[18px] fill-1">star</span>
<span className="material-symbols-outlined text-[18px] fill-1">star</span>
<span className="material-symbols-outlined text-[18px] fill-1">star</span>
<span className="material-symbols-outlined text-[18px] fill-1">star</span>
</div>
<span className="text-xs font-semibold text-slate-600">(342 avis)</span>
</div>
<div className="flex gap-2">
<button className="flex-1 bg-primary text-white text-sm font-bold py-2 rounded-lg hover:bg-primary/90 transition-colors">Voir le profil</button>
<button className="px-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors">
<span className="material-symbols-outlined align-middle">chat</span>
</button>
</div>
</div>
</div>
</div>
{/*  Pagination  */}
<div className="mt-12 flex items-center justify-center gap-2">
<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 hover:bg-slate-100 disabled:opacity-50" disabled>
<span className="material-symbols-outlined">chevron_left</span>
</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold">1</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 border border-transparent">2</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 border border-transparent">3</button>
<span className="px-2">...</span>
<button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 border border-transparent">8</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 hover:bg-slate-100">
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
</div>
</main>
{/*  Footer  */}
<footer className="bg-white border-t border-slate-200 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
<div>
<h4 className="font-bold text-slate-900 mb-4">Plateforme</h4>
<ul className="space-y-2 text-sm text-slate-600">
<li><a className="hover:text-primary" href="#">Comment ça marche</a></li>
<li><a className="hover:text-primary" href="#">Garantie Qualité</a></li>
<li><a className="hover:text-primary" href="#">Sécurité</a></li>
<li><a className="hover:text-primary" href="#">Tarification</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-slate-900 mb-4">Artisans</h4>
<ul className="space-y-2 text-sm text-slate-600">
<li><a className="hover:text-primary" href="#">Devenir Artisan</a></li>
<li><a className="hover:text-primary" href="#">Centre de formation</a></li>
<li><a className="hover:text-primary" href="#">Outils Pro</a></li>
<li><a className="hover:text-primary" href="#">Assurances</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-slate-900 mb-4">Aide</h4>
<ul className="space-y-2 text-sm text-slate-600">
<li><a className="hover:text-primary" href="#">Centre d'aide</a></li>
<li><a className="hover:text-primary" href="#">Contactez-nous</a></li>
<li><a className="hover:text-primary" href="#">FAQ</a></li>
<li><a className="hover:text-primary" href="#">Signaler un abus</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-slate-900 mb-4">Légal</h4>
<ul className="space-y-2 text-sm text-slate-600">
<li><a className="hover:text-primary" href="#">Mentions légales</a></li>
<li><a className="hover:text-primary" href="#">Confidentialité</a></li>
<li><a className="hover:text-primary" href="#">Cookies</a></li>
<li><a className="hover:text-primary" href="#">CGU</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-100">
<div className="flex items-center gap-2 mb-4 md:mb-0">
<div className="text-primary opacity-50">
<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"></path>
</svg>
</div>
<p className="text-sm text-slate-500">© 2024 ArtisanDirect. Tous droits réservés.</p>
</div>
<div className="flex gap-4">
<a className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-primary hover:text-white transition-all" href="#">
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
</a>
<a className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-primary hover:text-white transition-all" href="#">
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
</a>
<a className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-primary hover:text-white transition-all" href="#">
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path></svg>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
};

export default ResultatsDeRechercheDisponibleCetteSemaine;
