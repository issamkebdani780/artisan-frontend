import React from 'react';

const Features = () => {
  return (
    <section className="bg-slate-50 px-6 md:px-20 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-slate-900 text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight">Pourquoi nous faire confiance ?</h2>
          <p className="text-slate-500 text-xl font-bold leading-relaxed">La solution la plus fiable pour vos projets de maison, garantissant qualité et sécurité.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { icon: 'verified_user', title: 'Profils Vérifiés', desc: "Tous nos artisans passent un processus de sélection rigoureux incluant vérification d'identité et d'expérience." },
            { icon: 'payments', title: 'Paiement Sécurisé', desc: "Réglez vos prestations en toute confiance. L'artisan n'est payé qu'une fois le travail validé par vos soins." },
            { icon: 'support_agent', title: 'Service Client 24/7', desc: "Une équipe dédiée pour vous accompagner à chaque étape de votre projet et répondre à toutes vos questions." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-xl shadow-slate-200/50 hover:scale-[1.02] transition-all group">
              <div className="size-16 bg-slate-50 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">{item.icon}</span>
              </div>
              <h3 className="text-slate-900 text-xl font-black mb-4 uppercase tracking-tight">{item.title}</h3>
              <p className="text-slate-500 font-bold text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
