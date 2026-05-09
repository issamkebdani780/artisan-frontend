import React from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ClipboardList, 
  ArrowRight 
} from 'lucide-react';

const CtaSection = () => {
  const userString = localStorage.getItem('user');
  const user = userString ? JSON.parse(userString) : null;

  return (
    <section className="px-6 md:px-20 py-24 text-center transition-colors">
      <div className="max-w-7xl mx-auto bg-slate-50 rounded-[60px] p-12 md:p-24 relative overflow-hidden border border-slate-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] transition-colors">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]"></div>
        
        <div className="relative z-10 flex flex-col items-center gap-10">
          <h2 className="text-slate-900 text-4xl md:text-7xl font-black max-w-4xl leading-[1.1] tracking-tight uppercase">
            {user?.role === 'artisan' ? (
              <>Propulsez votre <br /><span className="text-primary italic">activité d'artisan</span></>
            ) : (
              <>Prêt à démarrer votre <br /><span className="text-primary italic">projet de rénovation ?</span></>
            )}
          </h2>
          <p className="text-slate-500 text-lg md:text-xl font-bold max-w-2xl leading-relaxed">
            {user?.role === 'artisan' 
              ? "Gérez vos projets, répondez aux devis et développez votre clientèle en toute simplicité."
              : "Inscrivez-vous dès aujourd'hui et recevez des devis gratuits d'artisans qualifiés près de chez vous."
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-6 mt-4">
            {user?.role === 'artisan' ? (
              <>
                <Link 
                  to="/dashboard/artisan" 
                  className="px-12 py-5 bg-primary text-white font-black uppercase tracking-widest text-sm rounded-[24px] hover:bg-primary/90 transition-all shadow-2xl shadow-primary/30 active:scale-95 flex items-center justify-center gap-3"
                >
                  Tableau de bord
                  <LayoutDashboard className="size-5" />
                </Link>
                <Link 
                  to="/dashboard/artisan/projects" 
                  className="px-12 py-5 bg-white text-slate-900 font-black uppercase tracking-widest text-sm rounded-[24px] border border-slate-100 shadow-xl hover:shadow-2xl transition-all active:scale-95 flex items-center justify-center gap-3"
                >
                  Mes projets
                  <ClipboardList className="size-5" />
                </Link>
              </>
            ) : (
              <>
                <Link 
                  to="/search" 
                  className="px-12 py-5 bg-primary text-white font-black uppercase tracking-widest text-sm rounded-[24px] hover:bg-primary/90 transition-all shadow-2xl shadow-primary/30 active:scale-95 flex items-center justify-center gap-3"
                >
                  Trouver un artisan
                  <ArrowRight className="size-5" />
                </Link>
                <Link 
                  to="/register/artisan" 
                  className="px-12 py-5 bg-white text-slate-900 font-black uppercase tracking-widest text-sm rounded-[24px] border border-slate-100 shadow-xl hover:shadow-2xl transition-all active:scale-95 flex items-center justify-center"
                >
                  Devenir artisan
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
