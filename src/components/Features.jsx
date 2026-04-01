import React from 'react';

const Features = () => {
  return (
    <section className="bg-primary/5 dark:bg-primary/10 px-6 md:px-20 py-20">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black mb-4">Pourquoi choisir notre plateforme ?</h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg">La solution la plus fiable pour vos projets de maison, garantissant qualité et sécurité.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
            <span className="material-symbols-outlined text-3xl">verified_user</span>
          </div>
          <h3 className="text-slate-900 dark:text-white text-xl font-bold mb-3">Profils Vérifiés</h3>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed">Tous nos artisans passent un processus de sélection rigoureux incluant vérification d'identité et de diplômes.</p>
        </div>
        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
            <span className="material-symbols-outlined text-3xl">payments</span>
          </div>
          <h3 className="text-slate-900 dark:text-white text-xl font-bold mb-3">Paiement Sécurisé</h3>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed">Réglez vos prestations en toute confiance via notre interface. L'artisan n'est payé qu'une fois le travail validé.</p>
        </div>
        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
            <span className="material-symbols-outlined text-3xl">support_agent</span>
          </div>
          <h3 className="text-slate-900 dark:text-white text-xl font-bold mb-3">Service Client 24/7</h3>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed">Une équipe dédiée pour vous accompagner à chaque étape de votre projet et résoudre les éventuels litiges.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
