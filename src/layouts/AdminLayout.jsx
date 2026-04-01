import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const AdminLayout = ({ children, title = "Admin Portal", subtitle }) => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="flex h-screen overflow-hidden font-sans bg-[#f8f6f6] dark:bg-[#1e1b4b] text-slate-900 dark:text-slate-100">
      
      {/* Sidebar - Built with Indigo/Royal Purple Theme */}
      <aside className="w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col shrink-0">
        <div className="p-6 flex items-center gap-3">
          <div className="bg-[#6366f1] size-10 rounded-xl flex items-center justify-center text-white">
            <span className="material-symbols-outlined">admin_panel_settings</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-base font-bold leading-tight">{title}</h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">{subtitle || "Super Admin"}</p>
          </div>
        </div>
        
        <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto custom-scrollbar">
          <Link to="/dashboard/admin" className={`flex items-center gap-3 px-3 py-2 rounded-xl transition-colors ${path === '/dashboard/admin' ? 'bg-[#6366f1]/10 text-[#6366f1] font-bold' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium'}`}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: path === '/dashboard/admin' ? "'FILL' 1" : "" }}>dashboard</span>
            <span className="text-sm">Tableau de bord</span>
          </Link>
          <Link to="/dashboard/admin/artisans" className={`flex items-center gap-3 px-3 py-2 rounded-xl transition-colors ${path === '/dashboard/admin/artisans' ? 'bg-[#6366f1]/10 text-[#6366f1] font-bold' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium'}`}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: path === '/dashboard/admin/artisans' ? "'FILL' 1" : "" }}>engineering</span>
            <span className="text-sm">Gestion Artisans</span>
          </Link>
          <Link to="/dashboard/admin/clients" className={`flex items-center gap-3 px-3 py-2 rounded-xl transition-colors ${path === '/dashboard/admin/clients' ? 'bg-[#6366f1]/10 text-[#6366f1] font-bold' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium'}`}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: path === '/dashboard/admin/clients' ? "'FILL' 1" : "" }}>group</span>
            <span className="text-sm">Gestion Clients</span>
          </Link>
          <Link to="/dashboard/admin/verifications" className={`flex items-center gap-3 px-3 py-2 rounded-xl transition-colors ${path === '/dashboard/admin/verifications' ? 'bg-[#6366f1]/10 text-[#6366f1] font-bold' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium'}`}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: path === '/dashboard/admin/verifications' ? "'FILL' 1" : "" }}>verified_user</span>
            <span className="text-sm">Vérifications</span>
          </Link>
          <Link to="/dashboard/admin/payments" className={`flex items-center gap-3 px-3 py-2 rounded-xl transition-colors ${path === '/dashboard/admin/payments' ? 'bg-[#6366f1]/10 text-[#6366f1] font-bold' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium'}`}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: path === '/dashboard/admin/payments' ? "'FILL' 1" : "" }}>payments</span>
            <span className="text-sm">Finances & Paiements</span>
          </Link>
          <Link to="/dashboard/admin/disputes" className={`flex items-center gap-3 px-3 py-2 rounded-xl transition-colors ${path === '/dashboard/admin/disputes' ? 'bg-[#6366f1]/10 text-[#6366f1] font-bold' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium'}`}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: path === '/dashboard/admin/disputes' ? "'FILL' 1" : "" }}>report_problem</span>
            <span className="text-sm">Litiges & Recours</span>
          </Link>
          <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-800"></div>
          <a href="#" className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-colors">
            <span className="material-symbols-outlined">bar_chart</span>
            <span className="text-sm font-medium">Statistiques</span>
          </a>
          <Link to="/dashboard/admin/settings" className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-colors">
            <span className="material-symbols-outlined">settings</span>
            <span className="text-sm font-medium">Paramètres Système</span>
          </Link>
        </nav>
        
        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3 p-2 bg-slate-50 dark:bg-slate-800 rounded-xl">
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=60")' }}></div>
            <div className="flex-1 overflow-hidden">
              <p className="text-xs font-bold truncate">Marc Lefebvre</p>
              <p className="text-[10px] text-slate-500 dark:text-slate-400">Super Admin</p>
            </div>
            <span className="material-symbols-outlined text-slate-400 text-sm cursor-pointer hover:text-slate-600 dark:hover:text-slate-200">logout</span>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        
        {/* Header */}
        <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur flex items-center justify-between px-8 sticky top-0 z-50 shrink-0">
          <div className="flex items-center gap-4 flex-1 max-w-xl">
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
              <input type="text" placeholder="Rechercher sur la plateforme..." className="w-full pl-11 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-xl text-sm focus:ring-2 focus:ring-[#6366f1] outline-none transition-all" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="size-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border border-white dark:border-slate-900"></span>
            </button>
            <button className="size-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
              <span className="material-symbols-outlined">help</span>
            </button>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <div className="flex-1">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
