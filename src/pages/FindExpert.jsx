import React, { useState, useEffect } from 'react';
import SearchFilters from '../components/SearchFilters';
import ExpertCard from '../components/ExpertCard';
import apiService from '../services/api';

const FindExpert = () => {
  const [experts, setExperts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');

  const fetchExperts = async (filters = {}) => {
    setLoading(true);
    try {
      const data = await apiService.getArtisans(filters);
      setExperts(data);
    } catch (err) {
      console.error('Error fetching experts:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExperts();
  }, []);

  const handleSearch = () => {
    fetchExperts({ specialty: searchTerm, location: location });
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section with Search */}
        <section className="mb-12">
          <div className="relative rounded-2xl overflow-hidden bg-blue-600/10 dark:bg-blue-600/5 p-8 md:p-12 border border-blue-600/20">
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-900 dark:text-white">Trouvez l'artisan idéal pour vos projets</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">Plus de 5000 experts vérifiés prêts à intervenir chez vous.</p>
              
              <div className="flex flex-col sm:flex-row gap-3 bg-white dark:bg-slate-900 p-2 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800">
                <div className="flex-1 flex items-center px-4 gap-3">
                  <span className="material-symbols-outlined text-slate-400">search</span>
                  <input 
                    type="text" 
                    placeholder="Rechercher un artisan ou une spécialité..." 
                    className="w-full border-none focus:ring-0 bg-transparent text-slate-900 dark:text-white placeholder:text-slate-400 py-3" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex-none sm:border-l border-slate-200 dark:border-slate-800 flex items-center px-4 gap-3">
                  <span className="material-symbols-outlined text-slate-400">location_on</span>
                  <input 
                    type="text" 
                    placeholder="Ville" 
                    className="w-32 border-none focus:ring-0 bg-transparent text-slate-900 dark:text-white placeholder:text-slate-400 py-3" 
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
                <button 
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-all"
                  onClick={handleSearch}
                >
                  Rechercher
                </button>
              </div>
            </div>
            
            <section className="relative h-[500px] overflow-hidden bg-slate-900 flex items-center">
          <div className="absolute inset-0 bg-linear-to-l from-slate-950/60 to-transparent"></div>
            </section>
          </div>
        </section>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <SearchFilters />

          {/* Expert Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Experts disponibles (128)</h2>
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-500">Trier par:</span>
                <select className="text-sm font-medium border-none bg-transparent focus:ring-0 cursor-pointer">
                  <option>Les mieux notés</option>
                  <option>Prix croissant</option>
                  <option>Disponibilité</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {experts.map(expert => (
                <ExpertCard key={expert.id} {...expert} />
              ))}
              
              {/* Placeholder Card for Grid Consistency */}
              <div className="hidden xl:flex bg-slate-100/50 dark:bg-slate-800/20 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl items-center justify-center p-6 flex-col gap-4 text-center min-h-[300px]">
                <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
                  <span className="material-symbols-outlined text-slate-400">add</span>
                </div>
                <p className="text-sm text-slate-500 font-medium italic">Vous êtes artisan ?<br/>Rejoignez nos experts.</p>
                <button className="text-blue-600 text-sm font-bold hover:underline">En savoir plus</button>
              </div>
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center gap-2">
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-500 hover:border-blue-600 hover:text-blue-600 transition-all">
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-600 text-white font-bold">1</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-blue-600 hover:text-blue-600 transition-all">2</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-blue-600 hover:text-blue-600 transition-all">3</button>
                <span className="px-2 text-slate-400">...</span>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-blue-600 hover:text-blue-600 transition-all">12</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-500 hover:border-blue-600 hover:text-blue-600 transition-all">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FindExpert;
