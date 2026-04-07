import React, { useState } from 'react';
import Hero from '../components/Hero';
import FeaturedCraftsmen from '../components/FeaturedCraftsmen';
import PopularServices from '../components/PopularServices';
import StatsSection from '../components/StatsSection';
import Features from '../components/Features';
import CtaSection from '../components/CtaSection';

const Home = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    { q: "Comment les artisans sont-ils vérifiés ?", a: "Chaque artisan sur BricoloPro passe par un processus de vérification rigoureux comprenant la vérification de l'identité, des qualifications professionnelles et des antécédents. Nous consultons également les avis réels des clients précédents." },
    { q: "Que se passe-t-il si je ne suis pas satisfait ?", a: "Votre satisfaction est notre priorité. Si un service ne répond pas aux normes, notre équipe de support intervient pour médiation. Nous ne libérons le paiement final que lorsque vous confirmez le travail terminé." },
    { q: "Est-ce que le service est assuré ?", a: "Oui, tous les travaux réservés via notre plateforme bénéficient d'une assurance protection travaux couvrant les dommages matériels accidentels pendant l'intervention." }
  ];

  return (
    <div className="bg-white dark:bg-slate-950 font-['Outfit',sans-serif]">
      <Hero />
      
      {/* Popular Services Section */}
      <PopularServices />

      {/* Stats Section */}
      {/* <StatsSection /> */}

      {/* How it works (Features renamed/reused) */}
      <section className="py-20 px-6 md:px-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">Comment ça marche</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">Trouvez votre expert en quelques minutes seulement.</p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          <div className="text-center group">
            <div className="size-16 rounded-full bg-blue-100 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center text-2xl font-black mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/10">1</div>
            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">Déscrivez votre besoin</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed px-4">Dites-nous ce dont vous avez besoin, la date et le lieu de l'intervention.</p>
          </div>
          <div className="text-center group">
            <div className="size-16 rounded-full bg-blue-100 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center text-2xl font-black mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/10">2</div>
            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">Comparez les devis</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed px-4">Choisissez parmi les meilleurs artisans selon leurs notes et prix.</p>
          </div>
          <div className="text-center group">
            <div className="size-16 rounded-full bg-blue-100 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center text-2xl font-black mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/10">3</div>
            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">Travail accompli</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed px-4">Payez en toute sécurité une fois le service rendu à votre entière satisfaction.</p>
          </div>
        </div>
      </section>

      {/* Featured Artisans - Now real data */}
      <FeaturedCraftsmen />

      {/* FAQ Section */}
      <section className="py-24 px-6 md:px-20 bg-white dark:bg-slate-950">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white text-center mb-16 tracking-tight">Questions Fréquemment Posées</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="border border-slate-100 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left bg-slate-50/50 dark:bg-slate-900/30 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors outline-none"
                >
                  <span className="font-bold text-slate-800 dark:text-slate-200">{faq.q}</span>
                  <span className={`material-symbols-outlined transition-transform text-slate-400 ${openFaq === idx ? 'rotate-180' : ''}`}>expand_more</span>
                </button>
                {openFaq === idx && (
                  <div className="p-8 bg-white dark:bg-slate-950 text-slate-500 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-800">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
};

export default Home;
