import React from 'react';
import { 
  Hammer, 
  Wrench, 
  Droplets, 
  Zap, 
  Paintbrush, 
  Construction, 
  Settings, 
  Scissors, 
  Grid2X2, 
  Utensils, 
  Leaf,
  LayoutGrid,
  Star,
  Check,
  CreditCard,
  Heart
} from 'lucide-react';

const CATEGORIES = [
  { label: 'Menuiserie et Bois', icon: Hammer },
  { label: 'Ferronnerie et Soudure', icon: Wrench },
  { label: 'Plomberie et Réseaux', icon: Droplets },
  { label: 'Électricité et Énergie', icon: Zap },
  { label: 'Peinture et Plâtre', icon: Paintbrush },
  { label: 'Maçonnerie et Finitions', icon: Construction },
  { label: 'Mécanique et Machines', icon: Settings },
  { label: 'Couture et Cuir', icon: Scissors },
  { label: 'Verre et Miroiterie', icon: Grid2X2 },
  { label: 'Métiers alimentaires artisanaux', icon: Utensils },
  { label: 'Jardinage et Espaces Verts', icon: Leaf },
];

const SearchFilters = ({ filters, onChange }) => {
  const { selectedCategories = [], minRating = null, maxPrice = 500, onlyFavorites = false } = filters;

  const toggleCategory = (cat) => {
    const updated = selectedCategories.includes(cat)
      ? selectedCategories.filter((c) => c !== cat)
      : [...selectedCategories, cat];
    onChange({ ...filters, selectedCategories: updated });
  };

  const setMinRating = (rating) => {
    onChange({ ...filters, minRating: minRating === rating ? null : rating });
  };

  const setMaxPrice = (val) => {
    onChange({ ...filters, maxPrice: Number(val) });
  };

  const setOnlyFavorites = (val) => {
    onChange({ ...filters, onlyFavorites: val });
  };

  return (
    <aside className="w-full lg:w-72 shrink-0 space-y-12 bg-transparent">
      {/* CATEGORIES */}
      <div>
        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300 mb-8 flex items-center gap-3 transition-colors">
          <LayoutGrid className="size-4 text-primary" /> CATÉGORIES
        </h3>
        <div className="space-y-2">
          {CATEGORIES.map(({ label, icon: Icon }) => {
            const checked = selectedCategories.includes(label);
            return (
              <div
                key={label}
                className={`flex items-center justify-between p-4 rounded-2xl cursor-pointer group transition-all ${checked ? 'bg-primary text-white shadow-xl shadow-primary/20 scale-[1.02]' : 'bg-slate-50 border border-slate-50 hover:bg-white hover:border-slate-100 hover:shadow-lg'}`}
                onClick={() => toggleCategory(label)}
              >
                <div className="flex items-center gap-4">
                  <Icon className={`size-5 transition-colors ${checked ? 'text-white' : 'text-slate-400 group-hover:text-primary'}`} />
                  <span className={`text-[11px] font-black uppercase tracking-tight transition-colors ${checked ? 'text-white' : 'text-slate-600'}`}>{label}</span>
                </div>
                <div className={`size-5 rounded-lg border-2 flex items-center justify-center transition-all ${checked ? 'bg-white border-white' : 'border-slate-200'}`}>
                  {checked && <Check className="text-primary size-3 stroke-[4px]" />}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* RATINGS */}
      <div className="pt-10 border-t border-slate-50 transition-colors">
        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300 mb-8 flex items-center gap-3 transition-colors">
          <Star className="size-4 text-primary" /> ÉVALUATIONS
        </h3>
        <div className="space-y-4 px-1">
          {[5.0, 4.0, 3.0, 2.0, 1.0].map((rating) => {
            const selected = minRating === rating;
            return (
              <div
                key={rating}
                className="flex items-center gap-4 cursor-pointer group"
                onClick={() => setMinRating(rating)}
              >
                <div className={`size-6 rounded-full border-2 flex items-center justify-center transition-all ${selected ? 'border-primary bg-primary' : 'border-slate-200 hover:border-primary'}`}>
                  {selected && <div className="size-2 bg-white rounded-full"></div>}
                </div>
                <span className={`text-sm font-black flex items-center gap-2 transition-colors ${selected ? 'text-primary' : 'text-slate-500 group-hover:text-primary'}`}>
                  {rating === 5 ? '5.0' : `${rating}+`}
                  <Star className="size-4 text-yellow-400 fill-yellow-400" />
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* PRICE RANGE */}
      <div className="pt-10 border-t border-slate-50 transition-colors">
        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300 mb-8 flex items-center gap-3 transition-colors">
          <CreditCard className="size-4 text-primary" /> BUDGET MAX
        </h3>
        <div className="px-1">
          <input
            type="range"
            min={10}
            max={10000}
            step={100}
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-full h-2 rounded-full accent-primary cursor-pointer bg-slate-100 appearance-none"
          />
          <div className="flex justify-between mt-6">
            <div className="bg-slate-50 px-4 py-2 rounded-xl text-[10px] font-black text-slate-400 uppercase tracking-widest border border-slate-50">10 DA</div>
            <div className="bg-primary text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-primary/20">{maxPrice >= 10000 ? 'Illimité' : `${maxPrice} DA`}</div>
          </div>
        </div>
      </div>

      {/* FAVORITES */}
      <div className="pt-10 border-t border-slate-50 transition-colors">
        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300 mb-8 flex items-center gap-3 transition-colors">
          <Heart className="size-4 text-rose-500" /> FAVORIS
        </h3>
        <div className="px-1">
          <div 
            onClick={() => setOnlyFavorites(!onlyFavorites)}
            className={`relative flex items-center justify-between cursor-pointer p-5 rounded-2xl border transition-all ${onlyFavorites ? 'bg-rose-50 border-rose-100 shadow-xl shadow-rose-500/5' : 'bg-slate-50 border-slate-50 transition-colors'}`}
          >
            <span className={`text-xs font-black uppercase tracking-tight ${onlyFavorites ? 'text-rose-600' : 'text-slate-500'}`}>Mes Artisans Favoris</span>
            <div className="relative">
              <div className={`w-10 h-5 rounded-full transition-colors ${onlyFavorites ? 'bg-rose-500' : 'bg-slate-200'}`}></div>
              <div className={`absolute top-[2px] left-[2px] w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${onlyFavorites ? 'translate-x-5' : ''}`}></div>
            </div>
          </div>
        </div>
      </div>

      {/* RESET BUTTON */}
    {(selectedCategories.length > 0 || minRating || onlyFavorites || maxPrice !== 10000) && (
        <button
          onClick={() => onChange({ selectedCategories: [], minRating: null, maxPrice: 10000, onlyFavorites: false })}
          className="w-full text-xs font-black text-red-500 hover:text-red-600 border border-red-200 hover:border-red-400 py-3 rounded-xl transition-all"
        >
          Réinitialiser les filtres
        </button>
      )}
    </aside>
  );
};

export default SearchFilters;
