import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-6 md:px-20 py-4 bg-white dark:bg-slate-900 sticky top-0 z-50">
      <Link to="/" className="flex items-center gap-3 text-primary hover:opacity-80 transition-opacity">
        <span className="material-symbols-outlined text-3xl font-bold">home_repair_service</span>
        <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight tracking-tight">BricoloPro</h2>
      </Link>
      <div className="hidden md:flex flex-1 justify-center gap-8">
        <Link className="text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" to="/">Accueil</Link>
        <Link className="text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" to="/search">Services</Link>
        <Link className="text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" to="/moving-booking">Déménagement</Link>
        <Link className="text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" to="/request-quote">Devis</Link>
        <Link className="text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" to="/register/artisan">Devenir Prestataire</Link>
        <Link className="text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" to="/help">Aide</Link>
      </div>
      <div className="flex items-center gap-3">
        <Link to="/login/client" className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold transition-opacity hover:opacity-90">
          Connexion
        </Link>
        <button className="flex min-w-[40px] md:min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-2 md:px-4 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs md:text-sm font-bold">
          <span className="material-symbols-outlined text-lg mr-1 md:hidden">language</span>
          <span className="hidden md:inline">FR | AR | EN</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
