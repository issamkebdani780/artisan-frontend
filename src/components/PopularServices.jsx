import React from 'react';
import { useNavigate } from 'react-router-dom';

const SERVICES = [
  { id: 1, title: 'Montage', category: 'Montage', icon: 'handyman', desc: 'Meubles, étagères, luminaires...' },
  { id: 2, title: 'Ménage', category: 'Nettoyage', icon: 'cleaning_services', desc: 'Nettoyage complet, vitres...' },
  { id: 3, title: 'Plomberie', category: 'Plomberie et Réseaux', icon: 'plumbing', desc: 'Fuites, robinetterie, débouchage...' },
  { id: 4, title: 'Électricité', category: 'Électricité et Énergie', icon: 'bolt', desc: 'Prises, tableaux, éclairage...' },
  { id: 5, title: 'Peinture', category: 'Peinture et Plâtre', icon: 'format_paint', desc: 'Murs, plafonds, boiseries...' },
  { id: 6, title: 'Déménagement', category: 'Déménagement et Transport', icon: 'local_shipping', desc: 'Transport, aide aux cartons...' },
];

const PopularServices = () => {
  const navigate = useNavigate();

  const handleServiceClick = (category) => {
    navigate(`/search?category=${encodeURIComponent(category)}`);
  };

  return (
    <section className="px-6 md:px-20 py-16 bg-white dark:bg-slate-950">
      <div className="text-center mb-12">
        <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black mb-3">Nos services populaires</h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">Choisissez une catégorie pour voir nos spécialistes qualifiés prêts à vous aider.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {SERVICES.map((service) => (
          <div 
            key={service.id}
            onClick={() => handleServiceClick(service.category)}
            className="group p-8 rounded-3xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-600/30 hover:shadow-2xl hover:shadow-blue-600/10 transition-all cursor-pointer flex items-start gap-6 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full translate-x-1/2 -translate-y-1/2 scale-150 group-hover:bg-blue-600/10 transition-colors"></div>
            
            <div className="size-16 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 shrink-0 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">{service.icon}</span>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{service.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularServices;
