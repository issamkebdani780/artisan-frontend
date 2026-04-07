import React from 'react';

const CATEGORIES = [
  { label: 'Menuiserie et Bois', icon: 'carpenter' },
  { label: 'Ferronnerie et Soudure', icon: 'precision_manufacturing' },
  { label: 'Plomberie et Réseaux', icon: 'plumbing' },
  { label: 'Électricité et Énergie', icon: 'electrical_services' },
  { label: 'Peinture et Plâtre', icon: 'format_paint' },
  { label: 'Maçonnerie et Finitions', icon: 'handyman' },
  { label: 'Mécanique et Machines', icon: 'engineering' },
  { label: 'Couture et Cuir', icon: 'checkroom' },
  { label: 'Verre et Miroiterie', icon: 'grid_view' },
  { label: 'Métiers alimentaires artisanaux', icon: 'restaurant' },
  { label: 'Jardinage et Espaces Verts', icon: 'yard' },
];

const SearchFilters = ({ filters, onChange }) => {
  const { selectedCategories = [], minRating = null, maxPrice = 500, availableNow = false } = filters;

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

  const setAvailableNow = (val) => {
    onChange({ ...filters, availableNow: val });
  };

  return (
    <aside className="w-full lg:w-64 shrink-0 space-y-8 bg-transparent">
      {/* CATEGORIES */}
      <div>
        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center gap-2">
          <span className="material-symbols-outlined text-sm text-blue-600">grid_view</span> CATÉGORIES
        </h3>
        <div className="space-y-1">
          {CATEGORIES.map(({ label, icon }) => {
            const checked = selectedCategories.includes(label);
            return (
              <div
                key={label}
                className={`flex items-center justify-between p-3 rounded-xl cursor-pointer group transition-all ${checked ? 'bg-blue-600/10 border border-blue-600/20' : 'hover:bg-white dark:hover:bg-slate-800 hover:shadow-sm'}`}
                onClick={() => toggleCategory(label)}
              >
                <div className="flex items-center gap-3">
                  <span className={`material-symbols-outlined transition-colors ${checked ? 'text-blue-600' : 'text-slate-400 group-hover:text-blue-600'}`}>{icon}</span>
                  <span className={`text-sm font-semibold transition-colors ${checked ? 'text-blue-600' : 'text-slate-700 dark:text-slate-300'}`}>{label}</span>
                </div>
                <input
                  type="checkbox"
                  readOnly
                  checked={checked}
                  className="rounded-md border-slate-300 text-blue-600 focus:ring-blue-600 h-4 w-4 transition-all pointer-events-none"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* RATINGS */}
      <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center gap-2">
          <span className="material-symbols-outlined text-sm text-blue-600">star_rate</span> ÉVALUATIONS
        </h3>
        <div className="space-y-3 px-1">
          {[5.0, 4.0, 3.0, 2.0, 1.0].map((rating) => {
            const selected = minRating === rating;
            return (
              <div
                key={rating}
                className="flex items-center gap-3 cursor-pointer group"
                onClick={() => setMinRating(rating)}
              >
                <div className="relative flex items-center justify-center w-5 h-5">
                  <div className={`w-5 h-5 border-2 rounded-full transition-all ${selected ? 'border-blue-600' : 'border-slate-300 dark:border-slate-700'}`}></div>
                  {selected && <div className="absolute w-2.5 h-2.5 bg-blue-600 rounded-full"></div>}
                </div>
                <span className={`text-sm font-semibold flex items-center gap-1.5 transition-colors ${selected ? 'text-blue-600' : 'text-slate-700 dark:text-slate-300'}`}>
                  {rating === 5 ? '5.0' : `${rating}+`}
                  <span className="material-symbols-outlined text-yellow-400 text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* PRICE RANGE */}
      <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center gap-2">
          <span className="material-symbols-outlined text-sm text-blue-600">payments</span> FOURCHETTE DE PRIX
        </h3>
        <div className="px-1">
          <input
            type="range"
            min={10}
            max={10000}
            step={100}
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-full h-2 rounded-full accent-blue-600 cursor-pointer"
          />
          <div className="flex justify-between mt-4">
            <div className="bg-white dark:bg-slate-800 px-2 py-1 rounded-md border border-slate-200 dark:border-slate-700 text-[10px] font-bold text-slate-600 dark:text-slate-400">10 DA</div>
            <div className="bg-blue-600 text-white px-2 py-1 rounded-md text-[10px] font-bold">{maxPrice >= 10000 ? 'Illimité' : `${maxPrice} DA`}</div>
          </div>
        </div>
      </div>

      {/* AVAILABILITY */}
      <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center gap-2">
          <span className="material-symbols-outlined text-sm text-blue-600">event_available</span> DISPONIBILITÉ
        </h3>
        <div className="px-1">
          <div 
            onClick={() => setAvailableNow(!availableNow)}
            className="relative flex items-center justify-between cursor-pointer p-3 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700"
          >
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Disponible aujourd'hui</span>
            <div className="relative">
              <div className={`w-10 h-5 rounded-full transition-colors ${availableNow ? 'bg-blue-600' : 'bg-slate-200 dark:bg-slate-700'}`}></div>
              <div className={`absolute top-[2px] left-[2px] w-4 h-4 bg-white rounded-full shadow transition-transform ${availableNow ? 'translate-x-5' : ''}`}></div>
            </div>
          </div>
        </div>
      </div>

      {/* RESET BUTTON */}
    {(selectedCategories.length > 0 || minRating || availableNow || maxPrice !== 10000) && (
        <button
          onClick={() => onChange({ selectedCategories: [], minRating: null, maxPrice: 10000, availableNow: false })}
          className="w-full text-xs font-black text-red-500 hover:text-red-600 border border-red-200 hover:border-red-400 py-2 rounded-xl transition-all"
        >
          Réinitialiser les filtres
        </button>
      )}
    </aside>
  );
};

export default SearchFilters;
