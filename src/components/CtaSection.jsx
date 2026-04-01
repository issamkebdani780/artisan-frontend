import React from 'react';
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <section className="px-6 md:px-20 py-20 text-center">
      <div className="bg-slate-900 rounded-3xl p-10 md:p-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary opacity-10"></div>
        <div className="relative z-10 flex flex-col items-center gap-6">
          <h2 className="text-white text-3xl md:text-5xl font-black max-w-2xl">Prêt à démarrer votre projet de rénovation ?</h2>
          <p className="text-slate-400 text-lg max-w-xl">Inscrivez-vous dès aujourd'hui et recevez des devis gratuits d'artisans qualifiés près de chez vous.</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link to="/search" className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:scale-105 transition-transform flex items-center justify-center">Trouver un artisan</Link>
            <Link to="/register/artisan" className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:scale-105 transition-transform flex items-center justify-center">Devenir prestataire</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
