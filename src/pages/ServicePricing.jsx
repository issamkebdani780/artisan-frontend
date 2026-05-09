import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Droplets, 
  Zap, 
  Paintbrush, 
  Sparkles, 
  Hammer, 
  MoreHorizontal, 
  AlertCircle, 
  Package, 
  Layers, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const ServicePricing = () => {
  return (
    <div className="flex-grow pt-8 pb-24 font-['Outfit',sans-serif]">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-12 lg:py-16">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-blue-600 font-black text-sm uppercase tracking-[0.3em] inline-block mb-4">Transparence Totale</span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 tracking-tight text-slate-900 leading-tight uppercase">
            Tarifs des <span className="text-blue-600 italic">Services</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed px-4">
            Découvrez nos tarifs de base pour vos travaux à domicile. Nous prônons la transparence et des prix justes pour chaque intervention.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20">
          
          {/* Plomberie */}
          <div className="group flex flex-col rounded-[32px] md:rounded-[40px] border-2 border-slate-50 bg-white p-8 md:p-10 shadow-sm transition-all hover:shadow-2xl hover:border-blue-600/20 hover:-translate-y-1">
            <div className="mb-8 flex items-center justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                <Droplets className="size-8" />
              </div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Plomberie</span>
            </div>
            <div className="mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">4500 DA</span>
                <span className="text-slate-400 font-bold text-sm uppercase tracking-widest">dès</span>
              </div>
            </div>
            <ul className="flex-grow space-y-4 mb-10">
              {[
                "Réparation de fuite",
                "Débouchage canalisation",
                "Installation de robinet"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-600 font-medium">
                  <CheckCircle2 className="text-blue-600 size-5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/request-quote" className="w-full inline-flex justify-center items-center gap-2 rounded-2xl bg-slate-900 text-white py-4 font-bold transition-all hover:bg-blue-600 active:scale-95 shadow-lg shadow-slate-900/10">
              Demander un devis
              <ArrowRight className="size-4" />
            </Link>
          </div>

          {/* Électricité */}
          <div className="group flex flex-col rounded-[32px] md:rounded-[40px] border-2 border-slate-50 bg-white p-8 md:p-10 shadow-sm transition-all hover:shadow-2xl hover:border-yellow-500/20 hover:-translate-y-1">
            <div className="mb-8 flex items-center justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-500/10 text-yellow-500 group-hover:bg-yellow-500 group-hover:text-white transition-all duration-500">
                <Zap className="size-8" />
              </div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Électricité</span>
            </div>
            <div className="mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">5000 DA</span>
                <span className="text-slate-400 font-bold text-sm uppercase tracking-widest">dès</span>
              </div>
            </div>
            <ul className="flex-grow space-y-4 mb-10">
              {[
                "Installation de prise",
                "Tableau électrique",
                "Diagnostic de panne"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-600 font-medium">
                  <CheckCircle2 className="text-yellow-500 size-5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/request-quote" className="w-full inline-flex justify-center items-center gap-2 rounded-2xl bg-slate-900 text-white py-4 font-bold transition-all hover:bg-yellow-500 active:scale-95 shadow-lg shadow-slate-900/10">
              Demander un devis
              <ArrowRight className="size-4" />
            </Link>
          </div>

          {/* Peinture */}
          <div className="group flex flex-col rounded-[32px] md:rounded-[40px] border-2 border-slate-50 bg-white p-8 md:p-10 shadow-sm transition-all hover:shadow-2xl hover:border-emerald-500/20 hover:-translate-y-1 relative overflow-hidden">
            <div className="absolute top-6 -right-10 bg-emerald-500 text-white text-[10px] font-black px-12 py-1.5 rotate-45 shadow-sm uppercase tracking-widest">Populaire</div>
            <div className="mb-8 flex items-center justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500">
                <Paintbrush className="size-8" />
              </div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Peinture</span>
            </div>
            <div className="mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">3500 DA</span>
                <span className="text-slate-400 font-bold text-sm uppercase tracking-widest">par m²</span>
              </div>
            </div>
            <ul className="flex-grow space-y-4 mb-10">
              {[
                "Peinture murale",
                "Lessivage plafonds",
                "Enduit de lissage"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-600 font-medium">
                  <CheckCircle2 className="text-emerald-500 size-5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/request-quote" className="w-full inline-flex justify-center items-center gap-2 rounded-2xl bg-slate-900 text-white py-4 font-bold transition-all hover:bg-emerald-500 active:scale-95 shadow-lg shadow-slate-900/10">
              Demander un devis
              <ArrowRight className="size-4" />
            </Link>
          </div>
          
          {/* Ménage */}
          <div className="group flex flex-col rounded-[32px] md:rounded-[40px] border-2 border-slate-50 bg-white p-8 md:p-10 shadow-sm transition-all hover:shadow-2xl hover:border-purple-500/20 hover:-translate-y-1">
            <div className="mb-8 flex items-center justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all duration-500">
                <Sparkles className="size-8" />
              </div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Ménage</span>
            </div>
            <div className="mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">2500 DA</span>
                <span className="text-slate-400 font-bold text-sm uppercase tracking-widest">/ h</span>
              </div>
            </div>
            <ul className="flex-grow space-y-4 mb-10">
              {[
                "Nettoyage courant",
                "Lavage de vitres",
                "Repassage à domicile"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-600 font-medium">
                  <CheckCircle2 className="text-purple-500 size-5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/request-quote" className="w-full inline-flex justify-center items-center gap-2 rounded-2xl bg-slate-900 text-white py-4 font-bold transition-all hover:bg-purple-500 active:scale-95 shadow-lg shadow-slate-900/10">
              Demander un devis
              <ArrowRight className="size-4" />
            </Link>
          </div>
          
          {/* Bricolage */}
          <div className="group flex flex-col rounded-[32px] md:rounded-[40px] border-2 border-slate-50 bg-white p-8 md:p-10 shadow-sm transition-all hover:shadow-2xl hover:border-orange-500/20 hover:-translate-y-1 relative overflow-hidden">
            <div className="absolute top-6 -right-10 bg-orange-500 text-white text-[10px] font-black px-12 py-1.5 rotate-45 shadow-sm uppercase tracking-widest">Bientôt Complet</div>
            <div className="mb-8 flex items-center justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                <Hammer className="size-8" />
              </div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Bricolage</span>
            </div>
            <div className="mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">4000 DA</span>
                <span className="text-slate-400 font-bold text-sm uppercase tracking-widest">dès</span>
              </div>
            </div>
            <ul className="flex-grow space-y-4 mb-10">
              {[
                "Montage meuble en kit",
                "Fixation murale (TV)",
                "Pose de tringles"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-600 font-medium">
                  <CheckCircle2 className="text-orange-500 size-5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/request-quote" className="w-full inline-flex justify-center items-center gap-2 rounded-2xl bg-slate-900 text-white py-4 font-bold transition-all hover:bg-orange-500 active:scale-95 shadow-lg shadow-slate-900/10">
              Demander un devis
              <ArrowRight className="size-4" />
            </Link>
          </div>
          
          {/* Autre chose ? */}
          <div className="grow flex flex-col items-center justify-center rounded-[32px] md:rounded-[40px] border-4 border-dashed border-slate-100 p-10 text-center bg-slate-50/30 group hover:border-blue-600 hover:bg-blue-50/20 transition-all cursor-pointer">
            <div className="size-20 rounded-full bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <MoreHorizontal className="size-10 text-slate-400 group-hover:text-blue-600" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight uppercase">Autre chose ?</h3>
            <p className="text-slate-500 mb-8 font-medium leading-relaxed">Jardinage, serrurerie, maçonnerie... nous vous mettons en relation avec le bon artisan.</p>
            <Link to="/request-quote" className="text-blue-600 font-black flex items-center gap-2 hover:translate-x-1 transition-transform uppercase text-sm tracking-widest">
              Devis personnalisé
              <ArrowRight className="size-5" />
            </Link>
          </div>
          
        </div>
      </section>

      {/* Pricing Information Section */}
      <section className="bg-slate-50/50 py-24 px-4 sm:px-6 border-y border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <span className="text-blue-600 font-black text-sm uppercase tracking-[0.3em] inline-block mb-4">Fonctionnement</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">Comprendre nos <span className="text-blue-600">Tarifs</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10 md:gap-16">
            <div className="flex flex-col items-center md:items-start group text-center md:text-left">
              <div className="size-20 rounded-3xl bg-white shadow-xl flex items-center justify-center mb-8 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 -rotate-6 group-hover:rotate-0">
                <AlertCircle className="size-10" />
              </div>
              <h4 className="text-2xl font-black mb-4 text-slate-900 uppercase tracking-tight">Urgences & Horaires</h4>
              <p className="text-slate-500 leading-relaxed font-medium">Les interventions de nuit, le week-end ou les jours fériés peuvent inclure une majoration de 20% à 50% selon l'artisan.</p>
            </div>
            <div className="flex flex-col items-center md:items-start group text-center md:text-left">
              <div className="size-20 rounded-3xl bg-white shadow-xl flex items-center justify-center mb-8 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 rotate-6 group-hover:rotate-0">
                <Package className="size-10" />
              </div>
              <h4 className="text-2xl font-black mb-4 text-slate-900 uppercase tracking-tight">Matériel & Fournitures</h4>
              <p className="text-slate-500 leading-relaxed font-medium">Le coût des matériaux (peinture, pièces de plomberie, etc.) est généralement facturé en sus du coût horaire ou forfaitaire de la main-d'œuvre.</p>
            </div>
            <div className="flex flex-col items-center md:items-start group text-center md:text-left">
              <div className="size-20 rounded-3xl bg-white shadow-xl flex items-center justify-center mb-8 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 -rotate-3 group-hover:rotate-0">
                <Layers className="size-10" />
              </div>
              <h4 className="text-2xl font-black mb-4 text-slate-900 uppercase tracking-tight">Complexité</h4>
              <p className="text-slate-500 leading-relaxed font-medium">La difficulté d'accès ou l'âge de l'installation peuvent modifier le volume d'heures requises. Chaque devis est 100% personnalisé.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 text-center max-w-6xl mx-auto">
        <div className="bg-slate-900 rounded-[40px] md:rounded-[60px] p-12 lg:p-24 text-white relative overflow-hidden shadow-3xl">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 space-y-8">
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black leading-tight uppercase tracking-tight">
              Un projet spécifique <br /> <span className="text-blue-500">en tête ?</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl mx-auto font-medium">Obtenez une estimation précise et 100% gratuite pour vos travaux en moins de 24 heures.</p>
            <Link to="/request-quote" className="inline-flex items-center gap-3 bg-blue-600 text-white px-10 sm:px-14 py-5 sm:py-6 rounded-2xl sm:rounded-3xl text-lg sm:text-xl font-black shadow-2xl shadow-blue-600/20 transition-all hover:scale-105 hover:bg-blue-700 active:scale-95 uppercase tracking-widest">
              Commencer mon estimation
              <ArrowRight className="size-6" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePricing;

