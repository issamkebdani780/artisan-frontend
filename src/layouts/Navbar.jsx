import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import apiService from '../services/api';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    apiService.logout();
    setUser(null);
    setIsMobileMenuOpen(false);
    navigate('/');
  };

  const navLinks = [
    { name: 'Accueil', to: '/' },
    { name: 'Services', to: '/search' },
    { name: 'Déménagement', to: '/moving-booking' },
    { name: 'Devis', to: '/request-quote' },
    { name: 'About Us', to: '/about-us' },
  ];

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-6 md:px-20 py-4 bg-white dark:bg-slate-900 sticky top-0 z-50">
      <Link to="/" className="flex items-center gap-3 text-indigo-600 hover:opacity-80 transition-opacity z-50">
        <span className="material-symbols-outlined text-3xl font-bold">home_repair_service</span>
        <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight tracking-tight">BricoloPro</h2>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex flex-1 justify-center gap-8">
        {navLinks.map((link) => (
          <Link 
            key={link.to} 
            className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm font-medium transition-colors" 
            to={link.to}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-3 z-50">
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <div className="flex items-center gap-4">
              <Link 
                to={user.role === 'artisan' ? '/dashboard/artisan' : '/dashboard/client/inbox'} 
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <div className="w-9 h-9 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 border border-indigo-200">
                  <span className="material-symbols-outlined text-xl">account_circle</span>
                </div>
                <div className="flex flex-col items-start leading-tight">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{user.role}</span>
                  <span className="text-sm font-bold text-slate-900 dark:text-slate-100 hidden lg:inline">{user.name}</span>
                </div>
              </Link>
              <button 
                onClick={handleLogout}
                className="text-slate-400 hover:text-red-500 p-2 transition-colors"
                title="Déconnexion"
              >
                <span className="material-symbols-outlined text-xl leading-none">logout</span>
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
               <Link to="/login/artisan" className="hidden lg:flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-orange-600 transition-all font-bold text-sm">
                  <span className="material-symbols-outlined text-xl">construction</span>
                  Espace Artisan
               </Link>
               <Link to="/login/client" className="flex min-w-[120px] bg-indigo-600 text-white rounded-xl h-11 px-6 items-center justify-center font-black text-sm shadow-xl shadow-indigo-600/20 hover:bg-indigo-700 transition-all active:scale-95">
                  Connexion
               </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="material-symbols-outlined text-2xl">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white dark:bg-slate-900 z-40 md:hidden flex flex-col pt-24 px-6 gap-6 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.to} 
                className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-4" 
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="mt-4 flex flex-col gap-4">
            {user ? (
              <>
                <Link 
                  to={user.role === 'artisan' ? '/dashboard/artisan' : '/dashboard/client/inbox'}
                  className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600">
                    <span className="material-symbols-outlined text-2xl">account_circle</span>
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest">{user.role}</p>
                    <p className="font-bold text-slate-900 dark:text-white">{user.name}</p>
                  </div>
                </Link>
                <button 
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-red-500 font-bold p-4"
                >
                  <span className="material-symbols-outlined">logout</span>
                  Déconnexion
                </button>
              </>
            ) : (
              <div className="flex flex-col gap-3">
                <Link 
                  to="/login/client" 
                  className="w-full bg-indigo-600 text-white rounded-xl h-12 flex items-center justify-center font-black text-sm shadow-xl shadow-indigo-600/20"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Connexion Client
                </Link>
                <Link 
                  to="/login/artisan" 
                  className="w-full border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded-xl h-12 flex items-center justify-center font-black text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Espace Artisan
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
