import React from 'react';
import CtaSection from '../components/CtaSection';
import logo from '../assets/logo.png';

const AboutUs = () => {
  return (
    <div className="bg-white font-['Outfit',sans-serif] transition-colors">
      {/* Hero Section */}
      <section className="relative py-24 px-6 md:px-20 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl -z-10"></div>
        
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 text-sm font-bold mb-8 animate-fade-in">
            <span className="material-symbols-outlined text-lg">info</span>
            Notre Mission
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight leading-[1.1] uppercase">
            Simplifier la mise en relation  <br className="hidden md:block" />
            <span className="bg-linear-to-r from-primary to-blue-500 bg-clip-text text-transparent italic">
              entre experts et particuliers
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
            Mihnati est nÃ©e d'une idÃ©e simple : trouver un artisan de confiance ne devrait pas Ãªtre un parcours du combattant. Nous construisons le futur des services Ã  domicile en AlgÃ©rie.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 md:px-20 bg-slate-50 transition-colors">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/10 rounded-[40px] blur-2xl group-hover:bg-primary/20 transition-all duration-500"></div>
            <img 
              src={logo} 
              alt="Mihnati Logo" 
              className="relative rounded-[32px] shadow-2xl border-8 border-white object-contain aspect-4/3 w-full transform group-hover:scale-[1.02] transition-transform duration-500 bg-white p-8"
            />
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 max-w-[240px] hidden md:block animate-bounce-slow transition-colors">
              <div className="flex items-center gap-4 mb-2">
                <div className="size-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <span className="material-symbols-outlined text-xl">check_circle</span>
                </div>
                <span className="font-black text-slate-900 text-lg">98%</span>
              </div>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">Clients Satisfaits</p>
            </div>
          </div>
          
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight uppercase">Une histoire de <br /><span className="text-primary italic">confiance</span></h2>
            <div className="space-y-6">
              {[
                { icon: 'verified_user', title: 'QualitÃ© Garantie', desc: "Nous vÃ©rifions rigoureusement chaque artisan avant qu'il ne rejoigne notre plateforme.", bg: 'bg-orange-50', color: 'text-orange-600' },
                { icon: 'security', title: 'Paiement SÃ©curisÃ©', desc: "Les fonds sont bloquÃ©s et ne sont libÃ©rÃ©s qu'aprÃ¨s validation de la fin des travaux.", bg: 'bg-blue-50', color: 'text-blue-600' },
                { icon: 'support_agent', title: 'Support 24/7', desc: "Notre Ã©quipe de support est lÃ  pour vous accompagner Ã  chaque Ã©tape de votre projet.", bg: 'bg-indigo-50', color: 'text-indigo-600' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-[32px] bg-white border border-slate-100 hover:border-primary/20 hover:shadow-xl transition-all group">
                  <div className={`size-14 shrink-0 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center group-hover:rotate-6 transition-transform shadow-sm`}>
                    <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 mb-1 uppercase tracking-tight">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Developers Section */}
      <section className="py-24 px-6 md:px-20 bg-slate-50 transition-colors">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 uppercase">L'Ã©quipe de dÃ©veloppement</h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-bold">Les esprits crÃ©atifs derriÃ¨re la plateforme Mihnati.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto font-['Outfit',sans-serif]">
          {[
            { name: "Abderrahmane Bachani", email: "abderrahmanebachani@gmail.com", role: "DÃ©veloppeur" },
            { name: "Mohammed Mokhtari", email: "mokhtari555mohammed@gmail.com", role: "DÃ©veloppeur" },
            { name: "Mustapha Fassih", email: "mustaphafassih17@gmail.com", role: "DÃ©veloppeur" },
            { name: "Wanis Riahi", email: "wanisriahi@gmail.com", role: "DÃ©veloppeur" },
            { name: "Mounaim Saidi", email: "mounaimsaidi40@gmail.com", role: "DÃ©veloppeur" },
            { name: "Abdelatif Sahnouni", email: "sahnouniabdelatif5@gmail.com", role: "DÃ©veloppeur" }
          ].map((dev, i) => (
            <div key={i} className="group flex flex-col items-center p-8 rounded-[40px] bg-white border border-slate-100 hover:border-primary/20 hover:shadow-2xl transition-all duration-300">
              <div className="size-20 rounded-2xl bg-slate-50 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform shadow-sm">
                <span className="material-symbols-outlined text-4xl">person</span>
              </div>
              <h4 className="font-black text-slate-900 text-center mb-1 leading-tight uppercase tracking-tight">{dev.name}</h4>
              <p className="text-primary text-[10px] font-black uppercase tracking-widest mb-4">{dev.role}</p>
              <a href={`mailto:${dev.email}`} className="size-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-300 hover:text-primary hover:bg-white border border-slate-100 transition-all">
                <span className="material-symbols-outlined text-xl">mail</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 md:px-20 bg-white transition-colors">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 uppercase">Nos Valeurs</h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-bold uppercase tracking-tight text-sm">Ce qui nous guide au quotidien pour vous offrir la meilleure expÃ©rience possible.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            { title: "Transparence", desc: "Pas de frais cachÃ©s, des prix clairs et des avis honnÃªtes pour chaque artisan.", icon: "visibility", color: "text-indigo-600" },
            { title: "Excellence", desc: "Nous visons l'excellence dans chaque interaction, du clic sur le site au coup de marteau.", icon: "star_rate", color: "text-amber-500" },
            { title: "ProximitÃ©", desc: "Nous favorisons l'Ã©conomie locale en mettant en avant les artisans de votre quartier.", icon: "location_home", color: "text-emerald-600" }
          ].map((val, i) => (
            <div key={i} className="p-12 rounded-[50px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all group">
              <div className={`size-20 rounded-3xl bg-white shadow-xl flex items-center justify-center ${val.color} mb-8 group-hover:scale-110 transition-transform`}>
                <span className="material-symbols-outlined text-4xl">{val.icon}</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight uppercase">{val.title}</h3>
              <p className="text-slate-500 leading-relaxed font-bold italic">"{val.desc}"</p>
            </div>
          ))}
        </div>
      </section>

      <CtaSection />
    </div>
  );
};

export default AboutUs;

