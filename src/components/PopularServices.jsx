import React from 'react';
import { useNavigate } from 'react-router-dom';

const SERVICES = [
  { id: 1, title: 'Menuiserie et Bois', category: 'Menuiserie et Bois', icon: 'handyman', desc: 'Ebéniste, coffreur, charpentier, travaux de bois...' },
  { id: 2, title: 'Ferronnerie et Soudure', category: 'Ferronnerie et Soudure', icon: 'precision_manufacturing', desc: 'Soudure arc et argon, ferronnerie d\'art, métallier...' },
  { id: 3, title: 'Plomberie et Réseaux', category: 'Plomberie et Réseaux', icon: 'plumbing', desc: 'Sanitaire, chauffage central, fuites et débouchage...' },
  { id: 4, title: 'Électricité et Énergie', category: 'Électricité et Énergie', icon: 'bolt', desc: 'Electricien bâtiment, industriel, solaire panneaux...' },
  { id: 5, title: 'Peinture et Plâtre', category: 'Peinture et Plâtre', icon: 'format_paint', desc: 'Peintre décorateur, automobile, staff et enduit...' },
  { id: 6, title: 'Maçonnerie et Finitions', category: 'Maçonnerie et Finitions', icon: 'foundation', desc: 'Maçon, carreleur, isolation, crépissage...' },
  { id: 7, title: 'Mécanique et Machines', category: 'Mécanique et Machines', icon: 'settings', desc: 'Mécanicien auto et moto, maintenance industrielle...' },
  { id: 8, title: 'Couture et Cuir', category: 'Couture et Cuir', icon: 'content_cut', desc: 'Tailleur, couturière, retouches, cordonnerie...' },
  { id: 9, title: 'Verre et Miroiterie', category: 'Verre et Miroiterie', icon: 'window', desc: 'Menuisier aluminium, vitrier, miroitier...' },
  { id: 10, title: 'Métiers Alimentaires', category: 'Métiers Alimentaires Artisanaux', icon: 'restaurant', desc: 'Boulanger, pâtissier, traiteur, apiculture...' },
  { id: 11, title: 'Jardinage et Espaces Verts', category: 'Jardinage et Espaces Verts', icon: 'grass', desc: 'Paysagiste, entretien jardin, taille haies...' },
  { id: 12, title: 'Déménagement et Transport', category: 'Déménagement et Transport', icon: 'local_shipping', desc: 'Transport, aide aux cartons, déchargement...' },
];

const PopularServices = () => {
  const navigate = useNavigate();

  const handleServiceClick = (category) => {
    navigate(`/search?category=${encodeURIComponent(category)}`);
  };

  return (
    <section className="px-6 md:px-20 py-20 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-slate-900 text-3xl md:text-5xl font-black mb-4 tracking-tight uppercase">Nos services populaires</h2>
        <p className="text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">Choisissez une catégorie pour voir nos spécialistes qualifiés prêts à vous aider.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {SERVICES.map((service) => (
          <div 
            key={service.id}
            onClick={() => handleServiceClick(service.category)}
            className="group p-8 rounded-[40px] border border-slate-100 bg-white hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all cursor-pointer flex items-start gap-6 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full translate-x-1/2 -translate-y-1/2 scale-150 group-hover:bg-primary/10 transition-colors"></div>
            
            <div className="size-16 rounded-2xl bg-slate-50 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform shadow-sm">
              <span className="material-symbols-outlined text-3xl">{service.icon}</span>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-xl font-black text-slate-900 mb-2 tracking-tight uppercase">{service.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-bold tracking-tight">
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
