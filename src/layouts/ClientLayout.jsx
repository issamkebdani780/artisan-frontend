import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import apiService from '../services/api';
import logo from '../assets/logo.png';

const ClientLayout = ({ children, title = "Mihnati Client", subtitle = "Tableau de bord" }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  const user = JSON.parse(localStorage.getItem('user'));
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const handleLogout = () => {
    apiService.logout();
    navigate('/');
  };

  const navItems = [
    { path: '/dashboard/client/inbox', icon: 'home', label: 'Mes demandes' },
    { path: '/dashboard/client/settings', icon: 'settings', label: 'Paramètres' },
  ];

  return (
    <div className="bg-white font-['Outfit',sans-serif] text-slate-900 flex min-h-screen">
      
      {/* Sidebar Navigation */}
      <aside className={`
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        fixed lg:sticky top-0 left-0 w-72 bg-white border-r border-slate-50 flex flex-col justify-between shrink-0 h-screen z-60 transition-transform duration-300 shadow-sm
      `}>
        <div className="flex flex-col gap-10 p-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src={logo} alt="Mihnati Logo" className="h-12 w-auto object-contain" />
              <div className="flex flex-col">
                <h1 className="text-xl font-black tracking-tighter flex items-center gap-1 uppercase">
                  {title}
                </h1>
                <p className="text-primary text-[10px] font-black uppercase tracking-widest">{subtitle}</p>
              </div>
            </div>
            <button className="lg:hidden p-2 text-slate-400" onClick={() => setIsSidebarOpen(false)}>
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          
          <nav className="flex flex-col gap-3 overflow-y-auto pr-2 custom-scrollbar">
            {navItems.map((item, idx) => {
              const isActive = path === item.path;
              return (
                <Link 
                  key={idx} 
                  to={item.path} 
                  className={`flex items-center gap-4 px-5 py-4 rounded-2xl transition-all ${isActive ? 'bg-primary text-white shadow-xl shadow-primary/20' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <span className={`material-symbols-outlined ${isActive ? 'font-black' : ''}`}>{item.icon}</span>
                  <span className={`text-sm tracking-tight ${isActive ? 'font-black uppercase' : 'font-bold'}`}>{item.label}</span>
                </Link>
              );
            })}
            
            <button 
              onClick={handleLogout} 
              className="group flex items-center gap-4 px-6 py-5 rounded-2xl transition-all text-red-500 hover:bg-red-50 border border-transparent hover:border-red-100 font-bold text-xs uppercase tracking-[0.15em] mt-8"
            >
              <span className="material-symbols-outlined font-black group-hover:rotate-12 transition-transform">logout</span>
              Déconnexion
            </button>
          </nav>
        </div>
        
        <div className="p-8 border-t border-slate-50">
          <div className="bg-slate-50 border border-slate-100 p-6 rounded-[32px] flex flex-col gap-4 shadow-sm group/stats">
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Statut du compte</p>
            <p className="text-[10px] font-black text-slate-900 flex items-center gap-2">
               <span className="size-2 rounded-full bg-emerald-500 animate-pulse"></span>
               MEMBRE ACTIF
            </p>
          </div>
        </div>
      </aside>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 lg:hidden animate-in fade-in duration-300"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 min-h-screen relative">
        
        {/* Header */}
        <header className="h-24 bg-white/80 backdrop-blur-md border-b border-slate-50 px-8 flex items-center justify-between sticky top-0 z-50 w-full shrink-0">
          <div className="flex items-center gap-6 flex-1">
            <button className="lg:hidden size-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-600 shadow-sm" onClick={() => setIsSidebarOpen(true)}>
              <span className="material-symbols-outlined text-2xl">menu</span>
            </button>
            <div className="relative w-full max-w-md hidden lg:block">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
              <input type="text" placeholder="Rechercher des services..." className="w-full pl-12 pr-6 h-12 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:bg-white outline-none transition-all text-xs font-bold" />
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="size-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 relative hover:bg-slate-50 transition-colors shadow-sm">
              <span className="material-symbols-outlined text-xl">notifications</span>
              <span className="absolute top-3 right-3 size-2 bg-primary rounded-full ring-4 ring-white"></span>
            </button>
            <div className="w-px h-8 bg-slate-100 mx-4"></div>
            <div className="flex items-center gap-4 pl-2 font-['Outfit',sans-serif]">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-black text-slate-900 uppercase tracking-tight truncate max-w-[150px]">{user?.name || 'Client'}</p>
                <p className="text-[10px] font-black text-primary uppercase tracking-widest truncate max-w-[150px]">Particulier</p>
              </div>
              <div className="size-12 rounded-2xl bg-white p-1 border border-slate-100 shadow-xl shadow-slate-200/50 shrink-0 flex items-center justify-center text-primary font-black">
                {user?.name?.charAt(0) || 'C'}
              </div>
            </div>
          </div>
        </header>

        <div className="relative z-10 flex-1 flex flex-col">
          {children}
        </div>
        
      </main>
    </div>
  );
};

export default ClientLayout;
