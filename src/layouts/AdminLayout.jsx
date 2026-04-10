import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import apiService from '../services/api';

const AdminLayout = ({ children, title = "Admin", subtitle }) => {
  const location = useLocation();
  const path = location.pathname;
  const user = apiService.getCurrentUser();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!user || user.role !== 'admin') {
      console.warn('Accès non autorisé au dashboard admin. Redirection...');
      navigate('/login/admin');
    }
  }, [user, navigate]);

  const handleLogout = () => {
    apiService.logout();
    navigate('/login/admin');
  };

  const navItems = [
    { name: 'Tableau de bord', path: '/dashboard/admin', icon: 'dashboard' },
    { name: 'Gestion des artisans', path: '/dashboard/admin/artisans', icon: 'engineering' },
    { name: 'Gestion des clients', path: '/dashboard/admin/clients', icon: 'group' },
    { name: 'Statistiques', path: '/dashboard/admin/stats', icon: 'bar_chart' },

    { name: 'Paramètres', path: '/dashboard/admin/settings', icon: 'settings' },
  ];

  return (
    <div className="flex h-screen overflow-hidden font-sans bg-[#EEF2FF] dark:bg-[#0F172A] text-slate-900 dark:text-slate-100">
      
      {/* Sidebar - Dark Premium Theme */}
      <aside className="w-72 bg-slate-900 text-white flex flex-col shrink-0 shadow-2xl relative z-50 border-r border-white/5">
        <div className="p-8 flex items-center gap-4">
          <div className="bg-linear-to-tr from-primary to-secondary size-11 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-2xl font-bold">diamond</span>
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tight leading-tight">{title}</h1>
            <p className="text-[10px] text-primary font-black uppercase tracking-widest opacity-80 decoration-secondary/50 underline decoration-2 underline-offset-4">Premium Edition</p>
          </div>
        </div>
        
        <nav className="flex-1 px-6 py-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => (
            <Link 
              key={item.path}
              to={item.path} 
              className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300 group ${path === item.path ? 'bg-primary/20 text-white font-black shadow-sm' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
            >
              <span className={`material-symbols-outlined text-2xl transition-transform group-hover:scale-110 ${path === item.path ? 'text-primary' : 'text-slate-400 group-hover:text-primary'}`} style={{ fontVariationSettings: path === item.path ? "'FILL' 1" : "" }}>
                {item.icon}
              </span>
              <span className="text-sm tracking-wide">{item.name}</span>
              {path === item.path && (
                <div className="ml-auto size-1.5 rounded-full bg-secondary shadow-[0_0_8px_rgba(242,139,44,0.8)]"></div>
              )}
            </Link>
          ))}
        </nav>
        
        {/* User Profile at Bottom of Sidebar */}
        <div className="p-6 mt-auto">
          <div className="p-4 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 flex flex-col gap-4 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-2xl bg-linear-to-br from-primary to-secondary flex items-center justify-center font-black text-white text-lg shadow-lg">
                {user?.name?.charAt(0) || 'A'}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-black text-white tracking-tight">{user?.name || 'Administrateur'}</p>
                <p className="text-[10px] text-primary font-bold truncate">Super Admin</p>
              </div>
            </div>
            <button 
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-white/10 hover:bg-rose-500 transition-all rounded-2xl text-[10px] font-black uppercase tracking-widest"
            >
              Déconnexion
              <span className="material-symbols-outlined text-sm">logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0">
        
        {/* Header - Transparent & Integrated */}
        <header className="h-24 bg-white/60 dark:bg-slate-900/60 backdrop-blur-3xl border-b border-slate-100 dark:border-white/5 flex items-center justify-between px-10 shrink-0 sticky top-0 z-40">
          <div className="flex items-center gap-4 text-slate-400">
             <span className="material-symbols-outlined text-xl">menu_open</span>
             <div className="w-px h-6 bg-slate-200 dark:bg-white/10"></div>
          </div>
          <div className="flex items-center gap-6 flex-1 max-w-2xl">
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                const q = e.target.search.value;
                if (!q) return;
                const target = path.includes('clients') ? 'clients' : 'artisans';
                navigate(`/dashboard/admin/${target}?search=${q}`);
              }}
              className="relative w-full group"
            >

              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">search</span>
              <input 
                name="search"
                type="text" 
                placeholder="Rechercher un artisan ou client..." 
                className="w-full pl-12 pr-6 py-3.5 bg-slate-100 dark:bg-white/5 border-transparent focus:bg-white dark:focus:bg-slate-900 border focus:border-primary/50 text-sm font-medium rounded-2xl outline-none transition-all" 
              />
            </form>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Notification and Language buttons removed */}
          </div>

        </header>

        {/* Dynamic Page Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-10 bg-[#F4F7FE] dark:bg-slate-900/20">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
