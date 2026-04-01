import React from 'react';
import { useLocation } from 'react-router-dom';

const ArtisanLayout = ({ children, title = "Artisan PRO", subtitle = "Premium Plan" }) => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="bg-[#f8f6f6] dark:bg-[#221610] font-sans text-slate-900 dark:text-slate-100 flex min-h-screen">
      
      {/* Sidebar Navigation */}
      <aside className="w-72 bg-white dark:bg-stone-900 border-r border-[#ec5b13]/10 flex flex-col justify-between shrink-0 h-screen sticky top-0">
        <div className="flex flex-col gap-8 p-6">
          <div className="flex items-center gap-3">
            <div className="bg-[#ec5b13]/10 p-2 rounded-xl">
              <span className="material-symbols-outlined text-[#ec5b13] text-3xl font-bold">handyman</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-black tracking-tight flex items-center gap-1">
                {title}
                <span className="material-symbols-outlined text-[#ec5b13] text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              </h1>
              <p className="text-[#ec5b13] text-xs font-bold uppercase tracking-widest">{subtitle}</p>
            </div>
          </div>
          
          <nav className="flex flex-col gap-2 overflow-y-auto">
            <a href="/dashboard/artisan" className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${path === '/dashboard/artisan' ? 'bg-[#ec5b13] text-white font-semibold shadow-md shadow-[#ec5b13]/20' : 'text-slate-600 dark:text-slate-400 hover:bg-[#ec5b13]/10 hover:text-[#ec5b13]'}`}>
              <span className="material-symbols-outlined">home</span>
              Accueil
            </a>
            <a href="/dashboard/artisan/projects" className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${path === '/dashboard/artisan/projects' ? 'bg-[#ec5b13] text-white font-semibold shadow-md shadow-[#ec5b13]/20' : 'text-slate-600 dark:text-slate-400 hover:bg-[#ec5b13]/10 hover:text-[#ec5b13]'}`}>
              <span className="material-symbols-outlined">work</span>
              Mes projets
            </a>
            <a href="/dashboard/artisan/pricing" className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${path === '/dashboard/artisan/pricing' ? 'bg-[#ec5b13] text-white font-semibold shadow-md shadow-[#ec5b13]/20' : 'text-slate-600 dark:text-slate-400 hover:bg-[#ec5b13]/10 hover:text-[#ec5b13]'}`}>
              <span className="material-symbols-outlined">payments</span>
              Mes tarifs
            </a>
            <a href="#" className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all hover:bg-[#ec5b13]/10 hover:text-[#ec5b13] text-slate-600 dark:text-slate-400`}>
              <span className="material-symbols-outlined">verified_user</span>
              Vérifications
            </a>
            <a href="#" className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all hover:bg-[#ec5b13]/10 hover:text-[#ec5b13] text-slate-600 dark:text-slate-400`}>
              <span className="material-symbols-outlined">mail</span>
              Messages
            </a>
            <a href="/dashboard/artisan/settings" className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${path === '/dashboard/artisan/settings' ? 'bg-[#ec5b13] text-white font-semibold shadow-md shadow-[#ec5b13]/20' : 'text-slate-600 dark:text-slate-400 hover:bg-[#ec5b13]/10 hover:text-[#ec5b13]'}`}>
              <span className="material-symbols-outlined">settings</span>
              Paramètres
            </a>
          </nav>
        </div>
        
        <div className="p-6 pt-0">
          <div className="bg-[#ec5b13]/10 p-4 rounded-2xl flex flex-col gap-3">
            <p className="text-sm font-semibold">Taux de réponse</p>
            <div className="w-full bg-[#ec5b13]/20 h-2 rounded-full overflow-hidden">
              <div className="bg-[#ec5b13] h-full w-[95%] rounded-full"></div>
            </div>
            <p className="text-xs text-slate-500 dark:text-stone-400">Excellent (95%)</p>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-h-screen">
        
        {/* Header */}
        <header className="h-20 bg-white/80 dark:bg-stone-900/80 backdrop-blur-md border-b border-[#ec5b13]/10 px-8 flex items-center justify-between sticky top-0 z-50 w-full shrink-0">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-96">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
              <input type="text" placeholder="Rechercher projets, clients..." className="w-full pl-10 pr-4 py-2 bg-[#f8f6f6] dark:bg-stone-800 border-none rounded-xl focus:ring-2 focus:ring-[#ec5b13] outline-none transition-all" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-xl bg-[#f8f6f6] dark:bg-stone-800 relative hover:bg-[#ec5b13]/10 transition-colors">
              <span className="material-symbols-outlined text-slate-600 dark:text-stone-300">notifications</span>
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-[#ec5b13] rounded-full border-2 border-white dark:border-stone-800"></span>
            </button>
            <button className="p-2 rounded-xl bg-[#f8f6f6] dark:bg-stone-800 hover:bg-[#ec5b13]/10 transition-colors">
              <span className="material-symbols-outlined text-slate-600 dark:text-stone-300">chat_bubble</span>
            </button>
            <div className="h-8 w-px bg-[#ec5b13]/20 mx-2"></div>
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold">Jean Dupont</p>
                <p className="text-xs text-[#ec5b13] font-medium">Menuisier Expert</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#ec5b13]/20 border-2 border-[#ec5b13] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60" alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </header>

        {children}
        
      </main>
    </div>
  );
};

export default ArtisanLayout;
