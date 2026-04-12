import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search?specialty=${searchTerm}&location=${location}`);
  };

  return (
    <div className="w-full px-6 md:px-20 py-12 md:py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-left space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest">
            <span className="material-symbols-outlined text-sm">auto_awesome</span>
            L'expertise à votre portée
          </div>
          <h1 className="text-slate-900 dark:text-white text-4xl md:text-7xl font-black leading-[1.1] tracking-tight">
            Trouvez l'artisan <br />
            <span className="text-primary italic">idéal</span> pour vos <br />
            travaux
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl font-medium max-w-xl leading-relaxed">
            Des experts qualifiés et vérifiés à votre service pour tous vos besoins de rénovation, réparation et entretien.
          </p>
          
          <div className="flex flex-col sm:flex-row w-full max-w-2xl bg-white dark:bg-slate-800 rounded-3xl p-3 shadow-2xl shadow-primary/10 border border-slate-100 dark:border-white/5 transition-colors">
            <div className="flex flex-1 items-center px-4 py-3 border-b sm:border-b-0 sm:border-r border-slate-100 dark:border-white/5">
              <span className="material-symbols-outlined text-slate-400 mr-3">search</span>
              <input 
                className="w-full border-0 focus:ring-0 bg-transparent text-slate-900 dark:text-white placeholder:text-slate-400 font-bold" 
                placeholder="Plomberie, Peinture..." 
                type="text" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex flex-1 items-center px-4 py-3">
              <span className="material-symbols-outlined text-slate-400 mr-3">location_on</span>
              <input 
                className="w-full border-0 focus:ring-0 bg-transparent text-slate-900 dark:text-white placeholder:text-slate-400 font-bold" 
                placeholder="Votre ville" 
                type="text" 
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <button 
              className="w-full sm:w-auto bg-primary text-white font-black px-10 py-4 rounded-2xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 active:scale-95"
              onClick={handleSearch}
            >
              C'est parti
            </button>
          </div>
        </div>
        
        <div className="flex-1 relative hidden lg:block">
          <div className="absolute -inset-4 bg-primary/10 rounded-[60px] blur-3xl"></div>
          <img 
            src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
            alt="Artisan at work" 
            className="relative rounded-[50px] shadow-2xl border-8 border-white dark:border-slate-800 object-cover aspect-4/5 w-full transition-all"
          />
          <div className="absolute -bottom-8 -left-8 bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-xl border border-slate-50 dark:border-white/5 flex items-center gap-4 animate-bounce-slow transition-colors">
            <div className="size-12 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl">verified</span>
            </div>
            <div>
              <p className="text-xl font-black text-slate-900 dark:text-white leading-none">100%</p>
              <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-1">Artisans Vérifiés</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
