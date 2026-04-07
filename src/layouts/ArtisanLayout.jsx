import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import apiService from '../services/api';
import logo from '../assets/logo.png';

const ArtisanLayout = ({ children, title = "Mihnati PRO", subtitle = "Premium Plan" }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  const user = JSON.parse(localStorage.getItem('user'));

  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const handleLogout = () => {
    apiService.logout();
    navigate('/');
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-sans text-slate-900 dark:text-slate-100 flex min-h-screen">
      
      {/* Sidebar Navigation */}
      <aside className={`
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        fixed lg:sticky top-0 left-0 w-72 bg-white dark:bg-stone-900 border-r border-secondary/10 flex flex-col justify-between shrink-0 h-screen z-60 transition-transform duration-300
      `}>
        <div className="flex flex-col gap-8 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-1 rounded-xl">
                <img src={logo} alt="Mihnati Logo" className="h-10 w-auto object-contain" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl font-black tracking-tight flex items-center gap-1">
                  {title}
                  <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                </h1>
                <p className="text-secondary text-xs font-bold uppercase tracking-widest">{subtitle}</p>
              </div>
            </div>
            <button className="lg:hidden p-2 text-slate-400" onClick={() => setIsSidebarOpen(false)}>
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          
          <nav className="flex flex-col gap-2 overflow-y-auto">
            <a href="/dashboard/artisan" className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${path === '/dashboard/artisan' ? 'bg-secondary text-white font-semibold shadow-md shadow-secondary/20' : 'text-slate-600 dark:text-slate-400 hover:bg-secondary/10 hover:text-secondary'}`}>
              <span className="material-symbols-outlined">home</span>
              Accueil
            </a>
            <a href="/dashboard/artisan/projects" className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${path === '/dashboard/artisan/projects' ? 'bg-secondary text-white font-semibold shadow-md shadow-secondary/20' : 'text-slate-600 dark:text-slate-400 hover:bg-secondary/10 hover:text-secondary'}`}>
              <span className="material-symbols-outlined">work</span>
              Mes projets
            </a>
            <a href={`/artisan/${user?.id}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-blue-600 font-bold hover:bg-blue-50">
              <span className="material-symbols-outlined">visibility</span>
              Voir mon profil public
            </a>
            <a href="/dashboard/artisan/pricing" className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${path === '/dashboard/artisan/pricing' ? 'bg-secondary text-white font-semibold shadow-md shadow-secondary/20' : 'text-slate-600 dark:text-slate-400 hover:bg-secondary/10 hover:text-secondary'}`}>
              <span className="material-symbols-outlined">payments</span>
              Mes tarifs
            </a>
            <a href="#" className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all hover:bg-secondary/10 hover:text-secondary text-slate-600 dark:text-slate-400`}>
              <span className="material-symbols-outlined">verified_user</span>
              Vérifications
            </a>
            <a href="#" className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all hover:bg-secondary/10 hover:text-secondary text-slate-600 dark:text-slate-400`}>
              <span className="material-symbols-outlined">mail</span>
              Messages
            </a>
            <a href="/dashboard/artisan/settings" className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${path === '/dashboard/artisan/settings' ? 'bg-secondary text-white font-semibold shadow-md shadow-secondary/20' : 'text-slate-600 dark:text-slate-400 hover:bg-secondary/10 hover:text-secondary'}`}>
              <span className="material-symbols-outlined">settings</span>
              Paramètres
            </a>
            <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-red-500 hover:bg-red-50 font-medium">
              <span className="material-symbols-outlined">logout</span>
              Déconnexion
            </button>
          </nav>
        </div>
        
        <div className="p-6 pt-0">
          <div className="bg-secondary/10 p-4 rounded-2xl flex flex-col gap-3">
            <p className="text-sm font-semibold">Taux de réponse</p>
            <div className="w-full bg-secondary/20 h-2 rounded-full overflow-hidden">
              <div className="bg-secondary h-full w-[95%] rounded-full"></div>
            </div>
            <p className="text-xs text-slate-500 dark:text-stone-400">Excellent (95%)</p>
          </div>
        </div>
      </aside>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 min-h-screen">
        
        {/* Header */}
        <header className="h-20 bg-white/80 dark:bg-stone-900/80 backdrop-blur-md border-b border-secondary/10 px-4 md:px-8 flex items-center justify-between sticky top-0 z-50 w-full shrink-0">
          <div className="flex items-center gap-4 flex-1">
            <button className="lg:hidden p-2 text-slate-600 dark:text-stone-300" onClick={() => setIsSidebarOpen(true)}>
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div className="relative w-96 hidden md:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
              <input type="text" placeholder="Rechercher projets, clients..." className="w-full pl-10 pr-4 py-2 bg-[#f8f6f6] dark:bg-stone-800 border-none rounded-xl focus:ring-2 focus:ring-secondary outline-none transition-all text-sm" />
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <button className="p-2 rounded-xl bg-[#f8f6f6] dark:bg-stone-800 relative hover:bg-secondary/10 transition-colors">
              <span className="material-symbols-outlined text-slate-600 dark:text-stone-300 text-xl">notifications</span>
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-secondary rounded-full border-2 border-white dark:border-stone-800"></span>
            </button>
            <button className="p-2 rounded-xl bg-[#f8f6f6] dark:bg-stone-800 hover:bg-secondary/10 transition-colors hidden sm:block">
              <span className="material-symbols-outlined text-slate-600 dark:text-stone-300 text-xl">chat_bubble</span>
            </button>
            <div className="h-8 w-px bg-secondary/20 mx-1 md:mx-2"></div>
            <div className="flex items-center gap-2 md:gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold truncate max-w-[120px]">{user?.name || 'Artisan'}</p>
                <p className="text-xs text-secondary font-medium truncate max-w-[120px]">{user?.specialty || 'Expert'}</p>
              </div>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-secondary/20 border-2 border-secondary overflow-hidden shrink-0">
                <img src={user?.profile_pic || "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60"} alt="Profile" className="w-full h-full object-cover" />
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
