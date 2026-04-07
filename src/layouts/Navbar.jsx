import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import apiService from '../services/api';

const Navbar = () => {
  const [user, setUser] = useState(null);
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
    navigate('/');
  };

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-6 md:px-20 py-4 bg-white dark:bg-slate-900 sticky top-0 z-50">
      <Link to="/" className="flex items-center gap-3 text-indigo-600 hover:opacity-80 transition-opacity">
        <span className="material-symbols-outlined text-3xl font-bold">home_repair_service</span>
        <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight tracking-tight">BricoloPro</h2>
      </Link>
      <div className="hidden md:flex flex-1 justify-center gap-8">
        <Link className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm font-medium transition-colors" to="/">Accueil</Link>
        <Link className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm font-medium transition-colors" to="/search">Services</Link>
        <Link className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm font-medium transition-colors" to="/moving-booking">Déménagement</Link>
        <Link className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm font-medium transition-colors" to="/request-quote">Devis</Link>
        <Link className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm font-medium transition-colors" to="/about-us">About Us</Link>
      </div>
      <div className="flex items-center gap-3">
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
    </header>
  );
};

export default Navbar;
