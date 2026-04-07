import React from 'react';
import { Link } from 'react-router-dom';
import StatsSection from '../components/StatsSection';
import CtaSection from '../components/CtaSection';

const AboutUs = () => {
  return (
    <div className="bg-white dark:bg-slate-950 font-['Outfit',sans-serif]">
      {/* Hero Section */}
      <section className="relative py-24 px-6 md:px-20 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-indigo-50 dark:bg-indigo-900/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-blue-50 dark:bg-blue-900/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-bold mb-8 animate-fade-in">
            <span className="material-symbols-outlined text-lg">info</span>
            Notre Mission
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-8 tracking-tight leading-[1.1]">
            Simplifier la mise en relation  <br className="hidden md:block" />
            <span className="bg-linear-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent italic">
              entre experts et particuliers
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            BricoloPro est née d'une idée simple : trouver un artisan de confiance ne devrait pas être un parcours du combattant. Nous construisons le futur des services à domicile.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 md:px-20 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-indigo-500/10 rounded-[40px] blur-2xl group-hover:bg-indigo-500/20 transition-all duration-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1581578731548-c64695ce6958?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Notre équipe au travail" 
              className="relative rounded-[32px] shadow-2xl border-8 border-white dark:border-slate-800 object-cover aspect-4/3 w-full transform group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute -bottom-8 -right-8 bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 max-w-[240px] hidden md:block animate-bounce-slow">
              <div className="flex items-center gap-4 mb-2">
                <div className="size-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600">
                  <span className="material-symbols-outlined text-xl">check_circle</span>
                </div>
                <span className="font-black text-slate-900 dark:text-white text-lg">98%</span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">Clients Satisfaits</p>
            </div>
          </div>
          
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">Une histoire de <span className="text-indigo-600">confiance</span></h2>
            <div className="space-y-6">
              <div className="flex gap-6 p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-shadow group">
                <div className="size-14 shrink-0 rounded-2xl bg-orange-100 dark:bg-orange-900/20 text-orange-600 flex items-center justify-center group-hover:rotate-6 transition-transform">
                  <span className="material-symbols-outlined text-2xl">verified_user</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Qualité Garantie</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Nous vérifions rigoureusement chaque artisan avant qu'il ne rejoigne notre plateforme.</p>
                </div>
              </div>
              <div className="flex gap-6 p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-shadow group">
                <div className="size-14 shrink-0 rounded-2xl bg-blue-100 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center group-hover:rotate-6 transition-transform">
                  <span className="material-symbols-outlined text-2xl">security</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Paiement Sécurisé</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Les fonds sont bloqués et ne sont libérés qu'après validation de la fin des travaux.</p>
                </div>
              </div>
              <div className="flex gap-6 p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-shadow group">
                <div className="size-14 shrink-0 rounded-2xl bg-indigo-100 dark:bg-indigo-900/20 text-indigo-600 flex items-center justify-center group-hover:rotate-6 transition-transform">
                  <span className="material-symbols-outlined text-2xl">support_agent</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Support 24/7</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Notre équipe de support est là pour vous accompagner à chaque étape de votre projet.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Developers Section */}
      <section className="py-24 px-6 md:px-20 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">L'équipe de développement</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">Les esprits créatifs derrière la plateforme BricoloPro.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {[
            { name: "Abderrahmane Bachani", email: "abderrahmanebachani@gmail.com", role: "Développeur" },
            { name: "Mohammed Mokhtari", email: "mokhtari555mohammed@gmail.com", role: "Développeur" },
            { name: "Mustapha Fassih", email: "mustaphafassih17@gmail.com", role: "Développeur" },
            { name: "Wanis Riahi", email: "wanisriahi@gmail.com", role: "Développeur" },
            { name: "Mounaim Saidi", email: "mounaimsaidi40@gmail.com", role: "Développeur" }
          ].map((dev, i) => (
            <div key={i} className="group flex flex-col items-center p-8 rounded-[32px] bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="size-20 rounded-2xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-4xl">person</span>
              </div>
              <h4 className="font-black text-slate-900 dark:text-white text-center mb-1 leading-tight">{dev.name}</h4>
              <p className="text-indigo-600 dark:text-indigo-400 text-xs font-black uppercase tracking-widest mb-4">{dev.role}</p>
              <a href={`mailto:${dev.email}`} className="text-slate-400 hover:text-indigo-600 transition-colors">
                <span className="material-symbols-outlined text-xl">mail</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 md:px-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">Nos Valeurs</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">Ce qui nous guide au quotidien pour vous offrir la meilleure expérience possible.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            { title: "Transparence", desc: "Pas de frais cachés, des prix clairs et des avis honnêtes pour chaque artisan.", icon: "visibility" },
            { title: "Excellence", desc: "Nous visons l'excellence dans chaque interaction, du clic sur le site au coup de marteau.", icon: "star_rate" },
            { title: "Proximité", desc: "Nous favorisons l'économie locale en mettant en avant les artisans de votre quartier.", icon: "location_home" }
          ].map((val, i) => (
            <div key={i} className="p-10 rounded-[40px] bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:scale-[1.03] transition-all group">
              <div className="size-16 rounded-2xl bg-white dark:bg-slate-800 shadow-xl flex items-center justify-center text-indigo-600 mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">{val.icon}</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">{val.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaSection />
    </div>
  );
};

export default AboutUs;
