import React from 'react';

const GestionDesArtisansVueDashboard = () => {
  return (
    <>
      
<div className="flex flex-col">
{/*  Sidebar  */}
{/*  Main Content  */}
<main className="flex-1 flex flex-col min-h-screen">
{/*  Header  */}
<header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between px-8 shrink-0"><div className="flex items-center gap-3 pr-6 border-r border-slate-200 dark:border-slate-800 flex-col">
<div className="size-8 rounded-full bg-primary flex items-center justify-center text-white flex-col">
<span className="material-symbols-outlined text-lg">construction</span>
</div>
<div className="hidden sm:block">
<h1 className="text-slate-900 dark:text-white text-sm font-bold leading-tight">Annuaire Artisans</h1>
<p className="text-purple-brand text-[10px] font-bold uppercase tracking-wider">Purple Edition</p>
</div>
</div>
<div className="flex items-center gap-2 flex-col">
<span className="text-slate-500 text-sm">Accueil</span>
<span className="material-symbols-outlined text-sm text-slate-400">chevron_right</span>
<span className="text-slate-900 dark:text-white text-sm font-medium">Annuaire des Artisans</span>
</div>
<div className="flex items-center gap-4 flex-col">
<div className="relative w-64">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-xl text-sm focus:ring-2 focus:ring-purple-brand/50" placeholder="Rechercher un artisan..." type="text"/>
</div>
<button className="size-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-purple-brand hover:text-white transition-colors">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="bg-primary text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2">
<span className="material-symbols-outlined">person_add</span>
                        Nouvel Artisan
                    </button>
</div>
</header>
{/*  Content Area  */}
<div className="flex-1 overflow-y-auto p-8 bg-background-light dark:bg-background-dark">
<div className="max-w-7xl mx-auto space-y-6">
{/*  Page Title & Quick Stats  */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Total Artisans</h2>
<p className="text-slate-500 dark:text-slate-400 mt-1">Gérez et modifiez les profils des artisans inscrits sur la plateforme.</p>
</div>
<div className="flex gap-2 flex-col">
<button className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-semibold flex items-center gap-2 hover:bg-slate-50 transition-colors">
<span className="material-symbols-outlined">download</span>
                                Exporter CSV
                            </button>
<button className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-semibold flex items-center gap-2 hover:bg-slate-50 transition-colors">
<span className="material-symbols-outlined">filter_list</span>
                                Filtres Avancés
                            </button>
</div>
</div>
{/*  Filters Bar  */}
<div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-wrap gap-3 flex-col">
<div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg flex-col">
<span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Spécialité</span>
<select className="bg-transparent border-none text-sm font-medium focus:ring-0 p-0 pr-6">
<option>Toutes</option>
<option>Plomberie</option>
<option>Électricité</option>
<option>Menuiserie</option>
<option>Peinture</option>
</select>
</div>
<div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg flex-col">
<span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Statut</span>
<select className="bg-transparent border-none text-sm font-medium focus:ring-0 p-0 pr-6">
<option>Tous</option>
<option>Vérifié</option>
<option>En attente</option>
<option>Suspendu</option>
</select>
</div>
<div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg flex-col">
<span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Ville</span>
<select className="bg-transparent border-none text-sm font-medium focus:ring-0 p-0 pr-6">
<option>Toutes</option>
<option>Paris</option>
<option>Lyon</option>
<option>Marseille</option>
</select>
</div>
<button className="ml-auto text-sm text-purple-brand font-bold hover:underline">Réinitialiser</button>
</div>
{/*  Data Table  */}
<div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
<th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Artisan</th>
<th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Spécialité</th>
<th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Inscription</th>
<th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Statut</th>
<th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Évaluation</th>
<th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 dark:divide-slate-800">
<tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3 flex-col">
<div className="size-10 rounded-lg overflow-hidden bg-slate-100">
<img className="w-full h-full object-cover" data-alt="Portrait of Jean Dupont" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP-sY3g7BeMv-0ZsAABIKBQRheY9eRosg2ZB0imp_sv8hZFmbnSkveaD23BXnMXyUt0sQHOpJkA_w1isVPp3mxsesNa2XrJ4t-ZiT6gAyP3FylOBG5INGAVVMQL08keulO1HscrpIRH5VHJxZRrO_RsK_tGv57I2Kw6jUNFLnSQOcOBx0P4EN22chd-_eVmMbLpqwo0dtcLwLOh6ivSDGPHhnAtyhYQH1DYP2r2NBniH6Z16je_czSnbL4CID6pGqLTKKkgfNrZNlI"/>
</div>
<div>
<p className="text-sm font-bold text-slate-900 dark:text-white">Jean Dupont</p>
<p className="text-xs text-slate-500">jean.dupont@service.fr</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="px-2 py-1 bg-purple-brand/10 text-purple-brand text-xs font-bold rounded-lg">Plomberie</span>
</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">12 Oct 2023</td>
<td className="px-6 py-4">
<div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 flex-col">
<span className="material-symbols-outlined text-sm">verified</span>
<span className="text-xs font-bold">Vérifié</span>
</div>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-1 flex-col">
<span className="material-symbols-outlined text-yellow-500 text-sm FILL-1">star</span>
<span className="text-sm font-bold text-slate-900 dark:text-white">4.8</span>
</div>
</td>
<td className="px-6 py-4 text-right">
<div className="flex justify-end gap-2 flex-col">
<button className="p-1.5 text-slate-400 hover:text-purple-brand transition-colors">
<span className="material-symbols-outlined text-xl">edit</span>
</button>
<button className="p-1.5 text-slate-400 hover:text-red-500 transition-colors">
<span className="material-symbols-outlined text-xl">delete</span>
</button>
</div>
</td>
</tr>
<tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3 flex-col">
<div className="size-10 rounded-lg overflow-hidden bg-slate-100">
<img className="w-full h-full object-cover" data-alt="Portrait of Marie Lefebvre" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxbToY8BHG8TJF5_3UfJqDmiy9pZ4Snv4XNU9_bdlUFmKdtfWXyrpwBc7dbAAkeZsAhLzwjSLdufVAFgXVbZi7ow2s1jopMv1J4lmGjdLpqwNjFuyl6WBhehvgStGov7gJ9gnpe5DviMBUAUxtKPWTUa9KCD6UmJfParXDFhgYn4nP-RfMbx6hUT5RmEHnRF1mh--wW5VjNiISFs0SMFEZfuQCr0MedUgXXyUzN7IdniLYcJux4g9MQnRoz6lcrek2eobd4kcLLx9S"/>
</div>
<div>
<p className="text-sm font-bold text-slate-900 dark:text-white">Marie Lefebvre</p>
<p className="text-xs text-slate-500">m.lefebvre@elec-pro.com</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-lg dark:bg-blue-900/30 dark:text-blue-400">Électricité</span>
</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">15 Oct 2023</td>
<td className="px-6 py-4">
<div className="flex items-center gap-1.5 text-orange-500 flex-col">
<span className="material-symbols-outlined text-sm">pending</span>
<span className="text-xs font-bold">En attente</span>
</div>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-1 flex-col">
<span className="material-symbols-outlined text-yellow-500 text-sm FILL-1">star</span>
<span className="text-sm font-bold text-slate-900 dark:text-white">4.5</span>
</div>
</td>
<td className="px-6 py-4 text-right">
<div className="flex justify-end gap-2 flex-col">
<button className="p-1.5 text-slate-400 hover:text-purple-brand transition-colors">
<span className="material-symbols-outlined text-xl">edit</span>
</button>
<button className="p-1.5 text-slate-400 hover:text-red-500 transition-colors">
<span className="material-symbols-outlined text-xl">delete</span>
</button>
</div>
</td>
</tr>
<tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3 flex-col">
<div className="size-10 rounded-lg overflow-hidden bg-slate-100">
<img className="w-full h-full object-cover" data-alt="Portrait of Thomas Martin" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZ31yp4rgFrXMX7bTlA-o1TWqB94ehP2bAootq4Ln4M2GSfnqPwSCFPgaPnRoCf6kM7fLYvtLC1MxNa9PfxN10N_KQWy7CVFiU2U3W4ndYEPLEpFxWSDYb-j5-S38CJfJ0NkLLYJpCKriVbR9TnCNoVbauik32T2DOaLjROxvAONbwpiLZI5tVCfIof9I6X9boBFyFH27hoeMtFo3eLOiHw0EQHnrG7nQARodtSqWpvadN5NzgqNrQB7ghpe_lBbwB1z9jVyxgX6Yq"/>
</div>
<div>
<p className="text-sm font-bold text-slate-900 dark:text-white">Thomas Martin</p>
<p className="text-xs text-slate-500">thomas@bois-art.fr</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-lg dark:bg-amber-900/30 dark:text-amber-400">Menuiserie</span>
</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">20 Oct 2023</td>
<td className="px-6 py-4">
<div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 flex-col">
<span className="material-symbols-outlined text-sm">verified</span>
<span className="text-xs font-bold">Vérifié</span>
</div>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-1 flex-col">
<span className="material-symbols-outlined text-yellow-500 text-sm FILL-1">star</span>
<span className="text-sm font-bold text-slate-900 dark:text-white">4.9</span>
</div>
</td>
<td className="px-6 py-4 text-right">
<div className="flex justify-end gap-2 flex-col">
<button className="p-1.5 text-slate-400 hover:text-purple-brand transition-colors">
<span className="material-symbols-outlined text-xl">edit</span>
</button>
<button className="p-1.5 text-slate-400 hover:text-red-500 transition-colors">
<span className="material-symbols-outlined text-xl">delete</span>
</button>
</div>
</td>
</tr>
<tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3 flex-col">
<div className="size-10 rounded-lg overflow-hidden bg-slate-100">
<img className="w-full h-full object-cover" data-alt="Portrait of Sarah Bernard" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDi4gfWLlqM32ZGePD25UAm4NHt9Cvnopr8ai3AFMpaKe_ga-6rOetRyxabVd-EgE1mzYFvQJ6R1SEs8au69EZaDgJKhz2Cj42qWVU4_uc1X_o65DoGUv5NG4kup_dmYXnwodRhrk0lvuopbIHWGdiY8J4hZha3hTy5YBjC-HRUgeu2-JczWiGuHQTMy5xvAdJqTOTdeSCByO7LcdkGzeVS5-tl6RqSXJIQaqoQozjcf8WbWtJ2XOJ8c5AvgJ0iUz8AlPRB23xN52cb"/>
</div>
<div>
<p className="text-sm font-bold text-slate-900 dark:text-white">Sarah Bernard</p>
<p className="text-xs text-slate-500">sarah.peinture@gmail.com</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs font-bold rounded-lg dark:bg-pink-900/30 dark:text-pink-400">Peinture</span>
</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">05 Nov 2023</td>
<td className="px-6 py-4">
<div className="flex items-center gap-1.5 text-red-500 flex-col">
<span className="material-symbols-outlined text-sm">block</span>
<span className="text-xs font-bold">Suspendu</span>
</div>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-1 flex-col">
<span className="material-symbols-outlined text-yellow-500 text-sm FILL-1">star</span>
<span className="text-sm font-bold text-slate-900 dark:text-white">3.2</span>
</div>
</td>
<td className="px-6 py-4 text-right">
<div className="flex justify-end gap-2 flex-col">
<button className="p-1.5 text-slate-400 hover:text-purple-brand transition-colors">
<span className="material-symbols-outlined text-xl">edit</span>
</button>
<button className="p-1.5 text-slate-400 hover:text-red-500 transition-colors">
<span className="material-symbols-outlined text-xl">delete</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
{/*  Pagination  */}
<div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 flex items-center justify-between flex-col">
<p className="text-xs text-slate-500 font-medium">Affichage de 1 à 4 sur 124 artisans</p>
<div className="flex gap-2 flex-col">
<button className="size-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-400 hover:text-purple-brand transition-colors">
<span className="material-symbols-outlined text-sm">chevron_left</span>
</button>
<button className="size-8 flex items-center justify-center rounded-lg bg-purple-brand text-white font-bold text-xs">1</button>
<button className="size-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-50 font-bold text-xs">2</button>
<button className="size-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-50 font-bold text-xs">3</button>
<button className="size-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-400 hover:text-purple-brand transition-colors">
<span className="material-symbols-outlined text-sm">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
</div>
</main>
</div>
<style>
        .FILL-1 { font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
        
        /* Custom scrollbar for better look */
        ::-webkit-scrollbar {
            width: 6px;
        }
        ::-webkit-scrollbar-track {
            background: transparent;
        }
        ::-webkit-scrollbar-thumb {
            background: #4b2038;
            border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #ec5b13;
        }
    </style>

    </>
  );
};

export default GestionDesArtisansVueDashboard;
