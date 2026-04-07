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

  const [filters, setFilters] = useState({
    selectedCategories: [],
    minRating: null,
    maxPrice: 1000,
    availableNow: false,
  });

  const fetchExperts = useCallback(async (specialty, loc, activeFilters) => {
    setLoading(true);
    try {
      const params = {};
      if (specialty) params.specialty = specialty;
      if (loc) params.location = loc;
      if (activeFilters.minRating) params.minRating = activeFilters.minRating;
      if (activeFilters.maxPrice) params.maxPrice = activeFilters.maxPrice;
      if (activeFilters.availableNow) params.availableOnly = 1;

      // If only one category, send it to backend for better performance
      if (activeFilters.selectedCategories.length === 1) {
        params.category = activeFilters.selectedCategories[0];
      }

      const res = await apiService.getArtisans(params);
      let results = res && Array.isArray(res.data) ? res.data : (Array.isArray(res) ? res : []);

      // Client-side filter for multi-category selection (if more than 1)
      if (activeFilters.selectedCategories.length > 1) {
        const categoryMap = {
            'Menuiserie et Bois': ['Menuisier', 'Presseur', 'Décorateur bois', 'fenêtres en bois'],
            'Ferronnerie et Soudure': ['Ferronnier', 'Soudeur', 'Chaudronnier'],
            'Plomberie et Réseaux': ['Plombier', 'Monteur de réseaux', 'tuyauterie'],
            'Électricité et Énergie': ['Électricien', 'solaire', 'câbles', 'tableaux électriques'],
            'Peinture et Plâtre': ['Peintre', 'Plâtrier', 'Marbrier', 'Vernisseur'],
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

  // Re-fetch whenever search params or filters change
  useEffect(() => {
    fetchExperts(searchTerm, location, filters);
  }, [searchTerm, location, filters, fetchExperts]);

  const handleSearch = () => {
    setSearchParams({ specialty: searchTerm, location });
  };

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Search */}
        <section className="mb-12">
          <div className="relative rounded-2xl overflow-hidden bg-blue-600/10 dark:bg-blue-600/5 p-8 md:p-12 border border-blue-600/20">
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-900 dark:text-white">
                Trouvez l'artisan idéal pour vos projets
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">
                Des experts qualifiés et vérifiés prêts à intervenir chez vous.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 bg-white dark:bg-slate-900 p-2 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800">
                <div className="flex-1 flex items-center px-4 gap-3">
                  <span className="material-symbols-outlined text-slate-400">search</span>
                  <input
                    type="text"
                    placeholder="Rechercher un artisan ou une spécialité..."
                    className="w-full border-none focus:ring-0 bg-transparent text-slate-900 dark:text-white placeholder:text-slate-400 py-3 outline-none"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  />
                </div>
                <div className="flex-none sm:border-l border-slate-200 dark:border-slate-800 flex items-center px-4 gap-3">
                  <span className="material-symbols-outlined text-slate-400">location_on</span>
                  <input
                    type="text"
                    placeholder="Ville"
                    className="w-32 border-none focus:ring-0 bg-transparent text-slate-900 dark:text-white placeholder:text-slate-400 py-3 outline-none"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
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
          </div>
        </section>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters — now fully connected */}
          <SearchFilters filters={filters} onChange={handleFiltersChange} />

          {/* Expert Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">
                {loading ? 'Recherche...' : `${experts.length} expert${experts.length !== 1 ? 's' : ''} trouvé${experts.length !== 1 ? 's' : ''}`}
              </h2>
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-500">Trier par:</span>
                <select className="text-sm font-medium border-none bg-transparent focus:ring-0 cursor-pointer outline-none">
                  <option>Les mieux notés</option>
                  <option>Prix croissant</option>
                  <option>Disponibilité</option>
                </select>
              </div>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="bg-white dark:bg-slate-800 rounded-xl h-72 animate-pulse border border-slate-100 dark:border-slate-700"></div>
                ))}
              </div>
            ) : experts.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-center space-y-4 bg-white dark:bg-slate-800 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700">
                <div className="size-16 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-slate-400 text-3xl">search_off</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Aucun artisan trouvé</h3>
                <p className="text-slate-500 max-w-sm">Essayez d'ajuster vos filtres ou votre recherche.</p>
                <button
                  onClick={() => { setFilters({ selectedCategories: [], minRating: null, maxPrice: 1000, availableNow: false }); setSearchTerm(''); setLocation(''); }}
                  className="text-blue-600 font-bold hover:underline mt-2"
                >
                  Réinitialiser la recherche
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
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
