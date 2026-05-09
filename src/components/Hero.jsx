import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  Search, 
  MapPin, 
  CheckCircle2 
} from 'lucide-react';

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search?specialty=${searchTerm}&location=${location}`);
  };

  return (
    <div className="w-full px-6 md:px-20 py-12 md:py-24 bg-white transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 lg:gap-24">
        <div className="flex-1 text-left space-y-10 relative z-10">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] animate-in fade-in slide-in-from-left-4 duration-500">
            <Sparkles className="size-4" />
            L'expertise à votre portée
          </div>
          <h1 className="text-slate-900 text-5xl md:text-8xl font-black leading-[0.95] tracking-tight uppercase animate-in fade-in slide-in-from-left-6 duration-700 delay-75">
            Trouvez <br />
            l'artisan <span className="text-primary italic">idéal</span> <br />
            pour vous
          </h1>
          <p className="text-slate-500 text-lg md:text-xl font-bold max-w-xl leading-relaxed animate-in fade-in slide-in-from-left-8 duration-700 delay-150">
            Des experts qualifiés et vérifiés à votre service pour tous vos besoins de rénovation, réparation et entretien.
          </p>
          
          <div className="flex flex-col sm:flex-row w-full max-w-3xl bg-white rounded-[32px] p-4 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-slate-100 transition-all hover:shadow-[0_48px_80px_-24px_rgba(0,0,0,0.15)] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <div className="flex flex-1 items-center px-6 py-4 border-b sm:border-b-0 sm:border-r border-slate-100 group">
              <Search className="text-slate-300 size-6 mr-4 group-focus-within:text-primary transition-colors" />
              <input 
                className="w-full border-0 focus:ring-0 bg-transparent text-slate-900 placeholder:text-slate-300 font-bold text-lg" 
                placeholder="Peinture, Électricité..." 
                type="text" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex flex-1 items-center px-6 py-4 group">
              <MapPin className="text-slate-300 size-6 mr-4 group-focus-within:text-primary transition-colors" />
              <input 
                className="w-full border-0 focus:ring-0 bg-transparent text-slate-900 placeholder:text-slate-300 font-bold text-lg" 
                placeholder="Votre ville" 
                type="text" 
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <button 
              className="w-full sm:w-auto bg-primary text-white font-black px-12 py-5 rounded-[24px] hover:bg-primary/90 transition-all shadow-2xl shadow-primary/30 active:scale-95 uppercase tracking-widest text-sm"
              onClick={handleSearch}
            >
              C'est parti
            </button>
          </div>
        </div>
        
        <div className="flex-1 relative hidden lg:block animate-in fade-in slide-in-from-right-12 duration-1000">
          <div className="absolute -inset-10 bg-primary/10 rounded-[100px] blur-[120px]"></div>
          <div className="relative group">
            <img 
              src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Artisan at work" 
              className="relative rounded-[60px] shadow-[0_64px_96px_-32px_rgba(0,0,0,0.2)] border-[12px] border-white object-cover aspect-4/5 w-full transition-all group-hover:scale-[1.02] duration-700"
            />
            <div className="absolute -bottom-12 -left-12 bg-white p-8 rounded-[40px] shadow-3xl border border-slate-50 flex items-center gap-6 animate-bounce-slow transition-all group-hover:-translate-y-4">
              <div className="size-16 rounded-[24px] bg-emerald-50 text-emerald-500 flex items-center justify-center border border-emerald-100 shadow-inner">
                <CheckCircle2 className="size-8" />
              </div>
              <div>
                <p className="text-3xl font-black text-slate-900 leading-none">100%</p>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mt-2">Artisans Vérifiés</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
