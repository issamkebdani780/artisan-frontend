import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Hammer, 
  Wrench, 
  Droplets, 
  Zap, 
  Paintbrush, 
  Construction, 
  Settings, 
  Scissors, 
  Layers, 
  Utensils, 
  Sprout, 
  Truck,
  ChevronDown,
  CheckCircle2,
  Search,
  ArrowRight
} from 'lucide-react';
import apiService from '../services/api';

const ICON_MAP = {
  'Menuiserie et Bois': Hammer,
  'Ferronnerie et Soudure': Wrench,
  'Plomberie et Réseaux': Droplets,
  'Électricité et Énergie': Zap,
  'Peinture et Plâtre': Paintbrush,
  'Maçonnerie et Finitions': Construction,
  'Mécanique et Machines': Settings,
  'Couture et Cuir': Scissors,
  'Verre et Miroiterie': Layers,
  'Métiers Alimentaires': Utensils,
  'Jardinage et Espaces Verts': Sprout,
  'Déménagement et Transport': Truck,
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
          { id: 1, name: 'Menuiserie et Bois', icon: 'Hammer', description: 'Ebéniste, coffreur, charpentier, travaux de bois...' },
          { id: 2, name: 'Ferronnerie et Soudure', icon: 'Wrench', description: "Soudure arc et argon, ferronnerie d'art, métallier..." },
          { id: 3, name: 'Plomberie et Réseaux', icon: 'Droplets', description: 'Sanitaire, chauffage central, fuites et débouchage...' },
          { id: 4, name: 'Électricité et Énergie', icon: 'Zap', description: 'Electricien bâtiment, industriel, solaire panneaux...' },
          { id: 5, name: 'Peinture et Plâtre', icon: 'Paintbrush', description: 'Peintre décorateur, automobile, staff et enduit...' },
          { id: 6, name: 'Maçonnerie et Finitions', icon: 'Construction', description: 'Maçon, carreleur, isolation, crépissage...' },
          { id: 7, name: 'Mécanique et Machines', icon: 'Settings', description: 'Mécanicien auto et moto, maintenance industrielle...' },
          { id: 8, name: 'Couture et Cuir', icon: 'Scissors', description: 'Tailleur, couturière, retouches, cordonnerie...' },
          { id: 9, name: 'Verre et Miroiterie', icon: 'Layers', description: 'Menuisier aluminium, vitrier, miroitier...' },
          { id: 10, name: 'Métiers Alimentaires', icon: 'Utensils', description: 'Boulanger, pâtissier, traiteur, apiculture...' },
          { id: 11, name: 'Jardinage et Espaces Verts', icon: 'Sprout', description: 'Paysagiste, entretien jardin, taille haies...' },
          { id: 12, name: 'Déménagement et Transport', icon: 'Truck', description: 'Transport, aide aux cartons, déchargement...' },
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

  const IconComponent = ({ category }) => {
    const Icon = ICON_MAP[category.name] || Settings;
    return <Icon className="size-8" />;
  };

  if (loading) return (
    <div className="py-24 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
    </div>
  );

  return (
    <section className="px-4 sm:px-6 md:px-20 py-24 bg-white font-['Outfit',sans-serif]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20 space-y-4">
          <span className="text-blue-600 font-black text-sm uppercase tracking-[0.3em] inline-block mb-2">Services Qualifiés</span>
          <h2 className="text-slate-900 text-3xl sm:text-4xl md:text-6xl font-black tracking-tight uppercase leading-tight">
            Solutions <span className="text-blue-600 italic">Artisanales</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium text-base sm:text-lg px-4">
            Découvrez nos catégories de services et trouvez l'expert idéal pour transformer vos projets en réalité.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`group relative rounded-[32px] md:rounded-[48px] transition-all duration-500 cursor-pointer overflow-hidden border-2 ${
                expandedCategoryId === category.id
                  ? 'border-blue-600 bg-blue-50/30'
                  : 'border-slate-50 bg-white hover:border-blue-200 hover:shadow-2xl hover:-translate-y-1'
              }`}
              onClick={() => handleCategoryClick(category.id)}
            >
              <div className="p-6 sm:p-8 md:p-10 flex items-start gap-4 sm:gap-6 md:gap-8">
                <div className={`size-14 sm:size-16 md:size-20 rounded-2xl md:rounded-3xl flex items-center justify-center shrink-0 transition-all duration-500 shadow-xl ${
                  expandedCategoryId === category.id
                    ? 'bg-blue-600 text-white rotate-12'
                    : 'bg-slate-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-6'
                }`}>
                  <IconComponent category={category} />
                </div>

                <div className="flex-1 pr-4 sm:pr-8">
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-2 tracking-tight uppercase group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm md:text-base text-slate-400 leading-relaxed font-medium line-clamp-2">
                    {category.description || "Profitez de services d'exception avec nos meilleurs artisans locaux."}
                  </p>
                </div>

                <div className={`mt-4 sm:mt-6 transition-transform duration-500 ${expandedCategoryId === category.id ? 'rotate-180 text-blue-600' : 'text-slate-300'}`}>
                  <ChevronDown className="size-6 md:size-8" strokeWidth={3} />
                </div>
              </div>

              {/* Accordion Content */}
              <div className={`transition-all duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)] overflow-hidden ${
                expandedCategoryId === category.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 sm:px-8 md:px-10 pb-10 grid grid-cols-1 gap-3 sm:gap-4">
                  {subcategories[category.id]?.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/subcategory/${sub.id}`);
                      }}
                      className="flex items-center justify-between p-4 sm:p-5 rounded-2xl sm:rounded-[24px] bg-white border border-slate-100 hover:border-blue-600 hover:text-blue-600 hover:shadow-lg transition-all text-left group/sub active:scale-95"
                    >
                      <div className="flex items-center gap-4">
                        <div className="size-8 sm:size-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover/sub:bg-blue-600 group-hover/sub:text-white transition-colors">
                          <CheckCircle2 className="size-4 sm:size-5" />
                        </div>
                        <span className="font-bold text-slate-700 group-hover/sub:text-blue-600 text-sm sm:text-base">{sub.name}</span>
                      </div>
                      <ArrowRight className="size-4 text-slate-300 group-hover/sub:text-blue-600 group-hover/sub:translate-x-1 transition-all" />
                    </button>
                  ))}
                  {(!subcategories[category.id] || subcategories[category.id].length === 0) && (
                    <div className="col-span-full py-8 text-center bg-white/50 rounded-3xl border-2 border-dashed border-slate-100">
                      <div className="flex flex-col items-center gap-3">
                        <div className="size-10 border-4 border-blue-600/30 border-t-blue-600 rounded-full animate-spin"></div>
                        <p className="text-slate-400 text-xs sm:text-sm font-bold uppercase tracking-widest italic">Chargement des métiers...</p>
                      </div>
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
