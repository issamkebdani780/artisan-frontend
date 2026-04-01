import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/experts?specialty=${searchTerm}&location=${location}`);
  };

  return (
    <div className="w-full px-6 md:px-20 py-8">
      <div className="relative overflow-hidden rounded-xl bg-slate-900 min-h-[500px] flex items-center justify-center text-center p-6">
        <div className="absolute inset-0 opacity-50 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}></div>
        <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
        <div className="relative z-10 max-w-3xl flex flex-col gap-6">
          <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight">
            Trouvez l'artisan idéal pour vos travaux
          </h1>
          <p className="text-slate-200 text-base md:text-xl font-normal">
            Des experts qualifiés et vérifiés à votre service pour tous vos besoins de rénovation et réparation.
          </p>
          <div className="flex flex-col md:flex-row w-full max-w-2xl mx-auto bg-white dark:bg-slate-800 rounded-xl p-2 shadow-2xl">
            <div className="flex flex-1 items-center px-4 py-2 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-700">
              <span className="material-symbols-outlined text-slate-400 mr-2">search</span>
              <input 
                className="w-full border-0 focus:ring-0 bg-transparent text-slate-900 dark:text-white placeholder:text-slate-400" 
                placeholder="Plomberie, Peinture, Électricité..." 
                type="text" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex flex-1 items-center px-4 py-2">
              <span className="material-symbols-outlined text-slate-400 mr-2">location_on</span>
              <input 
                className="w-full border-0 focus:ring-0 bg-transparent text-slate-900 dark:text-white placeholder:text-slate-400" 
                placeholder="Votre ville" 
                type="text" 
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <button 
              className="bg-primary text-white font-bold px-8 py-3 rounded-lg hover:bg-primary/90 transition-all"
              onClick={handleSearch}
            >
              Rechercher
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
