import React from 'react';

const ServiceDetails = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      <div className="layout-content-container flex flex-col max-w-[1024px] flex-1 mx-auto px-4 md:px-0 py-8">
        
        {/* Hero Section */}
        <div className="@container">
          <div className="@[480px]:py-3">
            <div 
              className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-slate-200 @[480px]:rounded-xl min-h-[400px] relative group" 
              style={{ backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 50%), url("https://images.unsplash.com/photo-1621905252507-b35492d90cb4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80")' }}
            >
              <div className="flex flex-col p-8 gap-2 relative z-10">
                <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full w-fit uppercase tracking-widest">Norme NF C 15-100</span>
                <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tight">Mise aux Normes Électriques</h1>
                <p className="text-slate-200 text-lg max-w-2xl">Protégez votre foyer et vos proches avec une installation électrique certifiée, sûre et performante.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA & Quick Stats */}
        <div className="flex flex-wrap justify-between items-center gap-6 p-6 bg-white dark:bg-slate-900 rounded-xl mt-6 border border-slate-100 dark:border-slate-800 shadow-sm">
          <div className="flex flex-col gap-1">
            <p className="text-slate-900 dark:text-slate-100 text-2xl font-bold">Besoin d'un devis gratuit ?</p>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-blue-600 text-sm">verified_user</span>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Étude personnalisée sous 24h</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center justify-center rounded-lg h-12 px-8 bg-blue-600 text-white text-base font-bold transition-transform hover:scale-105">
              Demander mon devis
            </button>
            <button className="flex items-center justify-center rounded-lg h-12 px-6 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-base font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
              Voir nos tarifs
            </button>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-8">
          <div className="flex flex-col gap-2 rounded-xl p-6 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
            <span className="material-symbols-outlined text-blue-600">verified_user</span>
            <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">Interventions</p>
            <p className="text-slate-900 dark:text-slate-100 text-2xl font-bold">5000+</p>
          </div>
          <div className="flex flex-col gap-2 rounded-xl p-6 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
            <span className="material-symbols-outlined text-blue-600">sentiment_satisfied</span>
            <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">Satisfaction</p>
            <p className="text-slate-900 dark:text-slate-100 text-2xl font-bold">98%</p>
          </div>
          <div className="flex flex-col gap-2 rounded-xl p-6 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
            <span className="material-symbols-outlined text-blue-600">workspace_premium</span>
            <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">Garantie</p>
            <p className="text-slate-900 dark:text-slate-100 text-2xl font-bold">10 ans</p>
          </div>
        </div>

        {/* Services Section */}
        <section className="py-8">
          <h2 className="text-slate-900 dark:text-slate-100 text-3xl font-bold mb-8">Nos services diagnostics & travaux</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 p-5 rounded-xl bg-blue-600/5 border border-blue-600/10 hover:shadow-md transition-shadow">
              <div className="bg-blue-600 text-white p-3 rounded-lg">
                <span className="material-symbols-outlined">troubleshoot</span>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Diagnostic Complet</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Analyse détaillée de votre tableau, des prises de terre et de l'état des conducteurs.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-5 rounded-xl bg-blue-600/5 border border-blue-600/10 hover:shadow-md transition-shadow">
              <div className="bg-blue-600 text-white p-3 rounded-lg">
                <span className="material-symbols-outlined">electrical_services</span>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Remise à neuf du Tableau</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Remplacement des anciens fusibles par des disjoncteurs magnétothermiques modernes.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-5 rounded-xl bg-blue-600/5 border border-blue-600/10 hover:shadow-md transition-shadow">
              <div className="bg-blue-600 text-white p-3 rounded-lg">
                <span className="material-symbols-outlined">settings_input_component</span>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Câblage & Prises</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Remplacement des fils vétustes et installation de prises sécurisées avec obturateurs.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-5 rounded-xl bg-blue-600/5 border border-blue-600/10 hover:shadow-md transition-shadow">
              <div className="bg-blue-600 text-white p-3 rounded-lg">
                <span className="material-symbols-outlined">gavel</span>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Mise à la Terre</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Installation d'une prise de terre efficace pour évacuer les courants de fuite.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Protocols */}
        <section className="py-12 px-8 bg-slate-900 text-white rounded-2xl my-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-600 opacity-5 pointer-events-none"></div>
          <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6">Pourquoi mettre aux normes ?</h2>
              <p className="text-slate-400 mb-8">Une installation vétuste est la première cause d'incendies domestiques. Respecter la norme NF C 15-100 garantit votre sécurité.</p>
              <ul className="space-y-4">
                <li className="flex gap-3 items-center">
                  <span className="material-symbols-outlined text-blue-500">check_circle</span>
                  <span>Protection contre les électrisations</span>
                </li>
                <li className="flex gap-3 items-center">
                  <span className="material-symbols-outlined text-blue-500">check_circle</span>
                  <span>Prévention des risques d'incendie</span>
                </li>
                <li className="flex gap-3 items-center">
                  <span className="material-symbols-outlined text-blue-500">check_circle</span>
                  <span>Valorisation de votre patrimoine immobilier</span>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-center">
              <span className="material-symbols-outlined text-6xl text-blue-500 mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              <h3 className="text-xl font-bold mb-2">Certifications</h3>
              <p className="text-sm text-slate-300">Agrément Qualifelec, assurance décennale et attestations CONSUEL systématiques.</p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-12">Ils nous font confiance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm transition-shadow hover:shadow-md">
              <p className="text-slate-600 dark:text-slate-400 italic mb-6">"Équipe très professionnelle. Le diagnostic a été clair et les travaux de mise aux normes ont été réalisés proprement et dans les délais."</p>
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full overflow-hidden border-2 border-slate-100">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60" alt="Customer" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold">Jean-Marc D.</p>
                  <p className="text-xs text-slate-500">Propriétaire à Boulogne</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm transition-shadow hover:shadow-md">
              <p className="text-slate-600 dark:text-slate-400 italic mb-6">"Une mise aux normes complète effectuée avec soin. Le technicien a pris le temps d'expliquer chaque étape, un vrai gage de sécurité."</p>
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full overflow-hidden border-2 border-slate-100">
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60" alt="Customer" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold">Sophie L.</p>
                  <p className="text-xs text-slate-500">Versailles</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ServiceDetails;
