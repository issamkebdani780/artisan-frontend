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
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  const handleLogout = () => {
    apiService.logout();
    navigate('/');
  };

  const navItems = [
    { path: '/', icon: 'arrow_back', label: 'Retour à l\'accueil' },
    { path: '/dashboard/client/inbox', icon: 'home', label: 'Mes demandes' },
    { path: '/dashboard/client/settings', icon: 'settings', label: 'Paramètres' },
  ];

  const sidebarWidth = isCollapsed ? 'lg:w-[100px]' : 'lg:w-72';
  const headerLeft = isCollapsed ? 'lg:left-[100px]' : 'lg:left-72';

  return (
    <div className="bg-white font-['Outfit',sans-serif] text-slate-900 flex min-h-screen">
      
      {/* Sidebar Navigation */}
      <aside className={`
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        ${sidebarWidth}
        fixed lg:sticky top-0 left-0 bg-white border-r border-slate-50 flex flex-col justify-between shrink-0 h-screen z-60 transition-all duration-300 shadow-sm
      `}>
        <div className="flex flex-col gap-10 p-4 lg:p-8">
          <div className="flex items-center justify-between">
            <div className={`flex items-center gap-4 transition-all duration-300 ${isCollapsed ? 'lg:opacity-0 lg:scale-0 lg:w-0' : 'opacity-100 scale-100'}`}>
              <img src={logo} alt="Mihnati Logo" className="h-10 lg:h-12 w-auto object-contain" />
              <div className="flex flex-col">
                <h1 className="text-lg lg:text-xl font-black tracking-tighter flex items-center gap-1 uppercase truncate overflow-hidden">
                  {title}
                </h1>
                <p className="text-primary text-[10px] font-black uppercase tracking-widest truncate overflow-hidden">{subtitle}</p>
              </div>
            </div>
            <button 
              className="p-2 text-slate-400 hover:text-primary transition-colors" 
              onClick={() => {
                const isMobile = window.innerWidth < 1024;
                if (isMobile) setIsSidebarOpen(false);
                else setIsCollapsed(!isCollapsed);
              }}
            >
              <span className="material-symbols-outlined font-black">
                {isSidebarOpen && window.innerWidth < 1024 ? 'close' : (isCollapsed ? 'menu_open' : 'menu')}
              </span>
            </button>
          </div>
          
          <nav className="flex flex-col gap-3 overflow-y-auto custom-scrollbar">
            {navItems.map((item, idx) => {
              const isActive = path === item.path;
              return (
                <Link 
                  key={idx} 
                  to={item.path} 
                  className={`flex items-center gap-4 px-5 py-4 rounded-2xl transition-all ${isActive ? 'bg-primary text-white shadow-xl shadow-primary/20' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900 group'} ${isCollapsed ? 'lg:justify-center lg:px-0' : ''}`}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <div className="relative flex items-center gap-4">
                    <span className={`material-symbols-outlined ${isActive ? 'font-black' : ''} transition-all duration-300 ${isCollapsed ? 'lg:text-2xl' : ''}`}>{item.icon}</span>
                    <span className={`text-sm tracking-tight transition-all duration-300 ${isActive ? 'font-black uppercase' : 'font-bold'} ${isCollapsed ? 'lg:hidden' : 'block'}`}>{item.label}</span>
                    {isCollapsed && !isActive && (
                      <div className="absolute left-full ml-4 px-3 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap z-70 shadow-xl">
                        {item.label}
                      </div>
                    )}
                  </div>
                </Link>
              );
            })}
          </nav>
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
      <main className="flex-1 flex flex-col min-w-0 min-h-screen relative transition-all duration-300">
        
        {/* Header */}
        <header className={`h-24 bg-white/80 backdrop-blur-md border-b border-slate-50 px-8 flex items-center justify-between fixed ${headerLeft} left-0 right-0 top-0 z-50 shrink-0 transition-all duration-300`}>
          <div className="flex items-center gap-6 flex-1">
            <button className="lg:hidden size-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-600 shadow-sm" onClick={() => setIsSidebarOpen(true)}>
              <span className="material-symbols-outlined text-2xl">menu</span>
            </button>
            <div className={`relative w-full max-w-md transition-all duration-300 ${isCollapsed ? 'lg:max-w-xl' : 'lg:max-w-md'} hidden lg:block`}>
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

        {/* Header Spacer */}
        <div className="h-24 shrink-0"></div>

        <div className="relative z-10 flex-1 flex flex-col p-6 lg:p-12">
          {children}
        </div>
        
      </main>
    </div>
  );
};

export default ClientLayout;
