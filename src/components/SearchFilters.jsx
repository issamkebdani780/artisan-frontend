import React from 'react';

const SearchFilters = () => {
  return (
    <aside className="w-full lg:w-64 shrink-0 space-y-8 bg-transparent">
      <div>
        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center gap-2">
          <span className="material-symbols-outlined text-sm text-blue-600">grid_view</span> CATÉGORIES
        </h3>
        <div className="space-y-1">
          {['Plomberie', 'Électricité', 'Menuiserie', 'Peinture', 'Jardinage'].map((category, idx) => {
            const icons = ['plumbing', 'bolt', 'carpenter', 'format_paint', 'yard'];
            return (
              <label key={idx} className="flex items-center justify-between p-3 rounded-xl hover:bg-white dark:hover:bg-slate-800 hover:shadow-sm cursor-pointer group transition-all">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-slate-400 group-hover:text-blue-600 transition-colors">{icons[idx]}</span>
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{category}</span>
                </div>
                <input type="checkbox" className="rounded-md border-slate-300 text-blue-600 focus:ring-blue-600 h-4 w-4 transition-all" />
              </label>
            );
          })}
        </div>
      </div>

      <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center gap-2">
          <span className="material-symbols-outlined text-sm text-blue-600">star_rate</span> ÉVALUATIONS
        </h3>
        <div className="space-y-3 px-1">
          {[4.5, 4.0].map((rating, idx) => (
            <label key={idx} className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center justify-center w-5 h-5">
                <input type="radio" name="rating" className="peer appearance-none w-5 h-5 border-2 border-slate-300 dark:border-slate-700 rounded-full checked:border-blue-600 transition-all" />
                <div className="absolute w-2.5 h-2.5 bg-blue-600 rounded-full scale-0 peer-checked:scale-100 transition-transform"></div>
              </div>
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                {rating}+ <span className="flex"><span className="material-symbols-outlined text-yellow-400 text-base fill-current">star</span></span>
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center gap-2">
          <span className="material-symbols-outlined text-sm text-blue-600">payments</span> FOURCHETTE DE PRIX
        </h3>
        <div className="px-1">
          <div className="relative h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full">
            <div className="absolute h-full bg-blue-600 rounded-full" style={{ left: '20%', right: '30%' }}></div>
            <input type="range" className="absolute w-full h-full opacity-0 cursor-pointer pointer-events-auto" />
          </div>
          <div className="flex justify-between mt-4">
            <div className="bg-white dark:bg-slate-800 px-2 py-1 rounded-md border border-slate-200 dark:border-slate-700 text-[10px] font-bold text-slate-600 dark:text-slate-400">10€/H</div>
            <div className="bg-white dark:bg-slate-800 px-2 py-1 rounded-md border border-slate-200 dark:border-slate-700 text-[10px] font-bold text-slate-600 dark:text-slate-400">100€/H</div>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center gap-2">
          <span className="material-symbols-outlined text-sm text-blue-600">event_available</span> DISPONIBILITÉ
        </h3>
        <div className="px-1">
          <label className="relative flex items-center justify-between cursor-pointer p-3 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700">
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Disponible aujourd'hui</span>
            <div className="relative">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-10 h-5 bg-slate-200 dark:bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
            </div>
          </label>
        </div>
      </div>
    </aside>
  );
};

export default SearchFilters;
