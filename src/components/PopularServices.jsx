import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import apiService from '../services/api';

const ICON_MAP = {
  'Menuiserie et Bois': 'handyman',
  'Ferronnerie et Soudure': 'precision_manufacturing',
  'Plomberie et Réseaux': 'plumbing',
  'Électricité et Énergie': 'bolt',
  'Peinture et Plâtre': 'format_paint',
  'Maçonnerie et Finitions': 'foundation',
  'Mécanique et Machines': 'settings',
  'Couture et Cuir': 'content_cut',
  'Verre et Miroiterie': 'window',
  'Métiers Alimentaires': 'restaurant',
  'Jardinage et Espaces Verts': 'grass',
  'Déménagement et Transport': 'local_shipping',
  'PAINT': 'format_paint',
  'WALL': 'foundation',
  'COG': 'settings',
  'CISSORS': 'content_cut',
  'GLASS': 'window'
};

const PopularServices = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [expandedCategoryId, setExpandedCategoryId] = useState(null);
  const [subcategories, setSubcategories] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await apiService.getCategories();
        setCategories(data);
      } catch (err) {
        console.error('Failed to fetch categories:', err);
        setCategories([
          { id: 1, name: 'Menuiserie et Bois', icon: 'handyman', description: 'Ebéniste, coffreur, charpentier, travaux de bois...' },
          { id: 2, name: 'Ferronnerie et Soudure', icon: 'precision_manufacturing', description: 'Soudure arc et argon, ferronnerie d\'art, métallier...' },
          { id: 3, name: 'Plomberie et Réseaux', icon: 'plumbing', description: 'Sanitaire, chauffage central, fuites et débouchage...' },
          { id: 4, name: 'Électricité et Énergie', icon: 'bolt', description: 'Electricien bâtiment, industriel, solaire panneaux...' },
          { id: 5, name: 'Peinture et Plâtre', icon: 'format_paint', description: 'Peintre décorateur, automobile, staff et enduit...' },
          { id: 6, name: 'Maçonnerie et Finitions', icon: 'foundation', description: 'Maçon, carreleur, isolation, crépissage...' },
          { id: 7, name: 'Mécanique et Machines', icon: 'settings', description: 'Mécanicien auto et moto, maintenance industrielle...' },
          { id: 8, name: 'Couture et Cuir', icon: 'content_cut', description: 'Tailleur, couturière, retouches, cordonnerie...' },
          { id: 9, name: 'Verre et Miroiterie', icon: 'window', description: 'Menuisier aluminium, vitrier, miroitier...' },
          { id: 10, name: 'Métiers Alimentaires', icon: 'restaurant', description: 'Boulanger, pâtissier, traiteur, apiculture...' },
          { id: 11, name: 'Jardinage et Espaces Verts', icon: 'grass', description: 'Paysagiste, entretien jardin, taille haies...' },
          { id: 12, name: 'Déménagement et Transport', icon: 'local_shipping', description: 'Transport, aide aux cartons, déchargement...' },
        ]);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  const handleCategoryClick = async (categoryId) => {
    if (expandedCategoryId === categoryId) {
      setExpandedCategoryId(null);
      return;
    }

    setExpandedCategoryId(categoryId);

    if (!subcategories[categoryId]) {
      try {
        const data = await apiService.getSubcategoriesByCategory(categoryId);
        setSubcategories(prev => ({ ...prev, [categoryId]: data }));
      } catch (err) {
        console.error('Failed to fetch subcategories:', err);
      }
    }
  };

  const getIcon = (cat) => {
    return ICON_MAP[cat.name] || ICON_MAP[cat.icon] || cat.icon || 'handyman';
  };

  if (loading) return null;

  return (
    <section className="px-6 md:px-20 py-24 bg-white font-['Outfit',sans-serif]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <span className="text-blue-600 font-black text-sm uppercase tracking-[0.3em]">Services Qualifiés</span>
          <h2 className="text-slate-900 text-4xl md:text-6xl font-black tracking-tight uppercase">Solutions Artisanales</h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium text-lg">
            Découvrez nos catégories de services et trouvez l'expert idéalpour transformer vos projets en réalité.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`group relative rounded-[48px] transition-all duration-500 cursor-pointer overflow-hidden border-2 ${expandedCategoryId === category.id
                ? 'border-blue-600 bg-blue-50/30'
                : 'border-slate-50 bg-white hover:border-blue-200 hover:shadow-2xl'
                }`}
              onClick={() => handleCategoryClick(category.id)}
            >
              <div className="p-10 flex items-start gap-8">
                <div className={`size-20 rounded-3xl flex items-center justify-center shrink-0 transition-all duration-500 shadow-xl ${expandedCategoryId === category.id
                  ? 'bg-blue-600 text-white rotate-12'
                  : 'bg-slate-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'
                  }`}>
                  <span className="material-symbols-outlined text-4xl">{getIcon(category)}</span>
                </div>

                <div className="flex-1 pr-8">
                  <h3 className="text-2xl font-black text-slate-900 mb-2 tracking-tight uppercase">{category.name}</h3>
                  <p className="text-base text-slate-400 leading-relaxed font-medium line-clamp-2">
                    {category.description || 'Profitez de services d�DA�exception avec nos meilleurs artisans locaux.'}
                  </p>
                </div>

                <div className={`mt-6 transition-transform duration-500 ${expandedCategoryId === category.id ? 'rotate-180 text-blue-600' : 'text-slate-300'}`}>
                  <span className="material-symbols-outlined text-3xl font-black">keyboard_arrow_down</span>
                </div>
              </div>

              {/* Accordion Content */}
              <div className={`transition-all duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)] overflow-hidden ${expandedCategoryId === category.id ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <div className="px-10 pb-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {subcategories[category.id]?.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/subcategory/${sub.id}`);
                      }}
                      className="flex items-center gap-4 p-5 rounded-[24px] bg-white border border-slate-100 hover:border-blue-600 hover:text-blue-600 hover:shadow-xl transition-all text-left group/sub"
                    >
                      <div className="size-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover/sub:bg-blue-600 group-hover/sub:text-white transition-colors">
                        <span className="material-symbols-outlined text-xl">verified</span>
                      </div>

                      <span className="font-bold text-slate-700 group-hover/sub:text-blue-600 text-sm">{sub.name}</span>
                    </button>
                  ))}
                  {(!subcategories[category.id] || subcategories[category.id].length === 0) && (
                    <div className="col-span-full py-8 text-center bg-white/50 rounded-3xl border-2 border-dashed border-slate-100">
                      <p className="text-slate-400 text-sm font-bold uppercase tracking-widest italic animate-pulse">Chargement des métiers...</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularServices;

