import React from 'react';
import { Link } from 'react-router-dom';

const CtaSection = () => {
  const userString = localStorage.getItem('user');
  const user = userString ? JSON.parse(userString) : null;

  return (
    <section className="px-6 md:px-20 py-24 text-center dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto bg-slate-50 dark:bg-slate-800 rounded-[50px] p-12 md:p-24 relative overflow-hidden border border-slate-100 dark:border-white/5 shadow-2xl shadow-slate-100 dark:shadow-none transition-colors">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px]"></div>
        
        <div className="relative z-10 flex flex-col items-center gap-8">
          <h2 className="text-slate-900 dark:text-white text-4xl md:text-6xl font-black max-w-3xl leading-tight tracking-tight uppercase">
            {user?.role === 'artisan' ? (
              <>Propulsez votre <br /><span className="text-primary italic">activité d'artisan</span></>
            ) : (
              <>Prêt à démarrer votre <br /><span className="text-primary italic">projet de rénovation ?</span></>
            )}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-xl font-bold max-w-2xl leading-relaxed">
            {user?.role === 'artisan' 
              ? "Gérez vos projets, répondez aux devis et développez votre clientèle en toute simplicité."
              : "Inscrivez-vous dès aujourd'hui et recevez des devis gratuits d'artisans qualifiés près de chez vous."
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-6 mt-6">
            {user?.role === 'artisan' ? (
              <>
                <Link 
                  to="/dashboard/artisan" 
                  className="px-12 py-5 bg-primary text-white font-black uppercase tracking-widest text-sm rounded-2xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 active:scale-95 flex items-center justify-center gap-3"
                >
                  Tableau de bord
                  <span className="material-symbols-outlined text-xl">dashboard</span>
                </Link>
                <Link 
                  to="/dashboard/artisan/projects" 
                  className="px-12 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-black uppercase tracking-widest text-sm rounded-2xl border border-slate-100 dark:border-white/5 shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-3"
                >
                  Mes projets
                  <span className="material-symbols-outlined text-xl">assignment</span>
                </Link>
              </>
            ) : (
              <>
                <Link 
                  to="/search" 
                  className="px-12 py-5 bg-primary text-white font-black uppercase tracking-widest text-sm rounded-2xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 active:scale-95 flex items-center justify-center gap-3"
                >
                  Trouver un artisan
                  <span className="material-symbols-outlined text-xl">arrow_forward</span>
                </Link>
                <Link 
                  to="/register/artisan" 
                  className="px-12 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-black uppercase tracking-widest text-sm rounded-2xl border border-slate-100 dark:border-white/5 shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center justify-center"
                >
                  Devenir prestataire
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
