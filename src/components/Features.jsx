import React from 'react';
import { 
  ShieldCheck, 
  CreditCard, 
  Headset 
} from 'lucide-react';

const Features = () => {
  return (
    <section className="bg-slate-50 px-6 md:px-20 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-4">Engagement & Qualité</div>
          <h2 className="text-slate-900 text-4xl md:text-6xl font-black mb-8 uppercase tracking-tight leading-tight">Pourquoi nous faire <br /><span className="text-primary italic">confiance ?</span></h2>
          <p className="text-slate-500 text-lg md:text-xl font-bold leading-relaxed max-w-2xl mx-auto">La solution la plus fiable pour vos projets de maison, garantissant qualité et sécurité à chaque étape.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { icon: ShieldCheck, title: 'Profils Vérifiés', desc: "Tous nos artisans passent un processus de sélection rigoureux incluant vérification d'identité et d'expérience." },
            { icon: CreditCard, title: 'Paiement Sécurisé', desc: "Réglez vos prestations en toute confiance. L'artisan n'est payé qu'une fois le travail validé par vos soins." },
            { icon: Headset, title: 'Service Client 24/7', desc: "Une équipe dédiée pour vous accompagner à chaque étape de votre projet et répondre à toutes vos questions." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-10 md:p-12 rounded-[48px] border border-slate-100 shadow-xl shadow-slate-200/40 hover:scale-[1.02] hover:shadow-2xl transition-all group">
              <div className="size-20 bg-slate-50 rounded-3xl flex items-center justify-center text-primary mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500 border border-slate-50 shadow-inner">
                <item.icon className="size-10" />
              </div>
              <h3 className="text-slate-900 text-2xl font-black mb-4 uppercase tracking-tight">{item.title}</h3>
              <p className="text-slate-500 font-bold text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
