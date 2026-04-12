import React, { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchFilters from '../components/SearchFilters';
import ExpertCard from '../components/ExpertCard';
import apiService from '../services/api';

const FindExpert = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [experts, setExperts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState(searchParams.get('specialty') || '');
  const [location, setLocation] = useState(searchParams.get('location') || '');

  const [filters, setFilters] = useState(() => {
    const cat = searchParams.get('category');
    return {
      selectedCategories: cat ? [cat] : [],
      minRating: null,
      maxPrice: 10000,
      onlyFavorites: false,
    };
  });

  const fetchExperts = useCallback(async (specialty, loc, activeFilters) => {
    setLoading(true);
    try {
      const params = {};
      if (specialty) params.specialty = specialty;
      if (loc) params.location = loc;
      if (activeFilters.minRating) params.minRating = activeFilters.minRating;
      
      if (activeFilters.maxPrice < 10000) params.maxPrice = activeFilters.maxPrice;
      if (activeFilters.onlyFavorites) params.onlyFavorites = 1;

      if (activeFilters.selectedCategories.length === 1) {
        params.category = activeFilters.selectedCategories[0];
      }

      const res = await apiService.getArtisans(params);
      let results = res && Array.isArray(res.data) ? res.data : (Array.isArray(res) ? res : []);

      if (activeFilters.selectedCategories.length > 1) {
        const categoryMap = {
            'Menuiserie et Bois': ['Menuisier', 'Presseur', 'Décorateur bois', 'fenêtres en bois'],
            'Ferronnerie et Soudure': ['Ferronnier', 'Soudeur', 'Chaudronnier'],
            'Plomberie et Réseaux': ['Plombier', 'Monteur de réseaux', 'tuyauterie'],
            'Électricité et Énergie': ['Électricien', 'solaire', 'câbles', 'tableaux électriques'],
            'Peinture et Plâtre': ['Peinture', 'Plâtrier', 'Marbrier', 'Vernisseur'],
            'Maçonnerie et Finitions': ['Maçon', 'Carreleur', 'Crépisseur', 'isolation'],
            'Mécanique et Machines': ['Mécanicien', 'moteurs', 'électrogènes'],
            'Couture et Cuir': ['Tailleur', 'Couturière', 'Rapiéceur', 'Cordonnier', 'Maroquinier'],
            'Verre et Miroiterie': ['verre', 'Verrier', 'Miroitier', 'Vitrier'],
            'Métiers alimentaires artisanaux': ['Boulanger', 'Pâtissier', 'Fromager', 'Apiculteur', 'conserveur'],
            'Jardinage et Espaces Verts': ['Jardinier', 'espaces verts', 'jardins', 'irrigation', 'Élagueur', 'palmiers']
        };

        results = results.filter(e =>
          activeFilters.selectedCategories.some(cat => {
            const keys = categoryMap[cat] || [cat.substring(0, 5).toLowerCase()];
            const spec = (e.role || e.specialty || '').toLowerCase();
            return keys.some(k => spec.includes(k.toLowerCase())) || spec.includes(cat.toLowerCase());
          })
        );
      }

      setExperts(results);
    } catch (err) {
      console.error('Error fetching experts:', err);
      setExperts([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchExperts(searchTerm, location, filters);
  }, [searchTerm, location, filters, fetchExperts]);

  const handleSearch = () => {
    setSearchParams({ specialty: searchTerm, location });
  };

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
    const newParams = new URLSearchParams(searchParams);
    if (newFilters.selectedCategories.length === 1) {
      newParams.set('category', newFilters.selectedCategories[0]);
    } else {
      newParams.delete('category');
    }
    setSearchParams(newParams);
  };

  return (
    <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white min-h-screen transition-colors">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Search */}
        <section className="mb-16">
          <div className="relative rounded-[40px] overflow-hidden bg-slate-50 dark:bg-slate-800 p-8 md:p-20 border border-slate-100 dark:border-white/5 transition-colors">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl"></div>
            <div className="relative z-10 max-w-4xl">
              <h2 className="text-3xl md:text-6xl font-black mb-6 text-slate-900 dark:text-white leading-tight tracking-tight uppercase">
                Trouvez l'expert <br /><span className="text-primary italic">idéal</span> pour vos projets
              </h2>
              <p className="text-slate-500 dark:text-slate-400 mb-10 text-xl font-bold">
                Plus de 1000 artisans qualifiés et vérifiés à votre service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 bg-white dark:bg-slate-900 p-3 rounded-3xl shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-white/5 transition-colors">
                <div className="flex-2 flex items-center px-6 gap-4 border-b sm:border-b-0 sm:border-r border-slate-50 dark:border-white/5">
                  <span className="material-symbols-outlined text-slate-300 dark:text-slate-600">search</span>
                  <input
                    type="text"
                    placeholder="Plomberie, Peinture, Électricité..."
                    className="w-full border-none focus:ring-0 bg-transparent text-slate-900 dark:text-white placeholder:text-slate-300 dark:placeholder:text-slate-600 py-4 outline-none font-bold"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  />
                </div>
                <div className="flex-1 flex items-center px-6 gap-4">
                  <span className="material-symbols-outlined text-slate-300 dark:text-slate-600">location_on</span>
                  <input
                    type="text"
                    placeholder="Votre ville"
                    className="w-full border-none focus:ring-0 bg-transparent text-slate-900 dark:text-white placeholder:text-slate-300 dark:placeholder:text-slate-600 py-4 outline-none font-bold"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  />
                </div>
                <button
                  className="bg-primary text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 active:scale-95"
                  onClick={handleSearch}
                >
                  Trouver
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <SearchFilters filters={filters} onChange={handleFiltersChange} />

          {/* Expert Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-50 dark:border-white/5">
              <h2 className="text-sm font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">
                {loading ? 'Recherche...' : `${experts.length} expert${experts.length !== 1 ? 's' : ''} trouvé${experts.length !== 1 ? 's' : ''}`}
              </h2>
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-black text-slate-300 dark:text-slate-600 uppercase tracking-widest">Trier par:</span>
                <select className="text-xs font-black text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 px-4 py-2 rounded-xl border border-slate-100 dark:border-white/5 focus:ring-0 cursor-pointer outline-none uppercase tracking-tight transition-colors">
                  <option>Les mieux notés</option>
                  <option>Prix croissant</option>
                  <option>Disponibilité</option>
                </select>
              </div>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-slate-50 dark:bg-slate-800/50 rounded-[40px] h-[400px] animate-pulse transition-colors"></div>
                ))}
              </div>
            ) : experts.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-32 text-center space-y-6 bg-slate-50 dark:bg-slate-800/40 rounded-[40px] border-2 border-dashed border-slate-200 dark:border-white/10 transition-colors">
                <div className="size-24 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-xl">
                  <span className="material-symbols-outlined text-slate-200 dark:text-slate-600 text-5xl">person_search</span>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Aucun artisan trouvé</h3>
                  <p className="text-slate-400 dark:text-slate-500 font-bold mt-2">Essayez d'ajuster vos filtres ou votre recherche.</p>
                </div>
                <button
                  onClick={() => { setFilters({ selectedCategories: [], minRating: null, maxPrice: 10000, onlyFavorites: false }); setSearchTerm(''); setLocation(''); }}
                  className="px-8 py-3 bg-white dark:bg-shadow-900 dark:bg-slate-700 text-primary font-black uppercase tracking-widest text-[10px] rounded-xl border border-slate-100 dark:border-white/5 shadow-lg hover:shadow-xl transition-all"
                >
                  Réinitialiser
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
                {experts.map((expert) => (
                  <ExpertCard key={expert.id} {...expert} />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default FindExpert;
