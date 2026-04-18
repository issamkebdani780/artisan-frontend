import React from 'react';
import { Link } from 'react-router-dom';

const ServicePricing = () => {
  return (
    <div className="flex-grow pt-8 pb-24">
      <section className="max-w-7xl mx-auto px-4 lg:px-20 py-12 lg:py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-black mb-6 tracking-tight text-slate-900">Tarifs des Services</h1>
          <p className="text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto">
            Découvrez nos tarifs de base pour vos travaux à domicile. Nous prônons la transparence et des prix justes pour chaque intervention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          
          <div className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:border-blue-600/50">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-600">
                <span className="material-symbols-outlined text-3xl">plumbing</span>
              </div>
              <span className="text-sm font-bold uppercase tracking-wider text-slate-400">Plomberie</span>
            </div>
            <div className="mb-8">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-slate-900">45â‚¬</span>
                <span className="text-slate-500 font-medium">dès</span>
              </div>
            </div>
            <ul className="flex-grow space-y-4 mb-8">
              <li className="flex items-center gap-3 text-slate-600">
                <span className="material-symbols-outlined text-blue-600 text-xl">check_circle</span>
                <span>Réparation de fuite</span>
              </li>
              <li className="flex items-center gap-3 text-slate-600">
                <span className="material-symbols-outlined text-blue-600 text-xl">check_circle</span>
                <span>Débouchage canalisation</span>
              </li>
              <li className="flex items-center gap-3 text-slate-600">
                <span className="material-symbols-outlined text-blue-600 text-xl">check_circle</span>
                <span>Installation de robinet</span>
              </li>
            </ul>
            <Link to="/request-quote" className="w-full inline-flex justify-center items-center rounded-xl bg-slate-900 text-white py-3 font-bold transition-all group-hover:bg-blue-600 group-hover:text-white">
              Demander un devis
            </Link>
          </div>

          <div className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:border-yellow-500/50">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-500/10 text-yellow-500">
                <span className="material-symbols-outlined text-3xl">bolt</span>
              </div>
              <span className="text-sm font-bold uppercase tracking-wider text-slate-400">Électricité</span>
            </div>
            <div className="mb-8">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-slate-900">50â‚¬</span>
                <span className="text-slate-500 font-medium">dès</span>
              </div>
            </div>
            <ul className="flex-grow space-y-4 mb-8">
              <li className="flex items-center gap-3 text-slate-600">
                <span className="material-symbols-outlined text-yellow-500 text-xl">check_circle</span>
                <span>Installation de prise</span>
              </li>
              <li className="flex items-center gap-3 text-slate-600">
                <span className="material-symbols-outlined text-yellow-500 text-xl">check_circle</span>
                <span>Tableau électrique</span>
              </li>
              <li className="flex items-center gap-3 text-slate-600">
                <span className="material-symbols-outlined text-yellow-500 text-xl">check_circle</span>
                <span>Diagnostic de panne</span>
              </li>
            </ul>
            <Link to="/request-quote" className="w-full inline-flex justify-center items-center rounded-xl bg-slate-900 text-white py-3 font-bold transition-all group-hover:bg-yellow-500 group-hover:text-white">
              Demander un devis
            </Link>
          </div>

          <div className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:border-emerald-500/50 relative overflow-hidden">
            <div className="absolute top-4 -right-8 bg-emerald-500 text-white text-xs font-bold px-10 py-1 rotate-45 shadow-sm">Populaire</div>
            <div className="mb-6 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500">
                <span className="material-symbols-outlined text-3xl">format_paint</span>
              </div>
              <span className="text-sm font-bold uppercase tracking-wider text-slate-400">Peinture</span>
            </div>
            <div className="mb-8">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-slate-900">35â‚¬</span>
                <span className="text-slate-500 font-medium">par mÂ²</span>
              </div>
            </div>
            <ul className="flex-grow space-y-4 mb-8">
              <li className="flex items-center gap-3 text-slate-600">
                <span className="material-symbols-outlined text-emerald-500 text-xl">check_circle</span>
                <span>Peinture murale</span>
              </li>
              <li className="flex items-center gap-3 text-slate-600">
                <span className="material-symbols-outlined text-emerald-500 text-xl">check_circle</span>
                <span>Lessivage plafonds</span>
              </li>
              <li className="flex items-center gap-3 text-slate-600">
                <span className="material-symbols-outlined text-emerald-500 text-xl">check_circle</span>
                <span>Enduit de lissage</span>
              </li>
            </ul>
            <Link to="/request-quote" className="w-full inline-flex justify-center items-center rounded-xl bg-slate-900 text-white py-3 font-bold transition-all group-hover:bg-emerald-500 group-hover:text-white">
              Demander un devis
            </Link>
          </div>
          
          <div className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:border-purple-500/50">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-500">
                <span className="material-symbols-outlined text-3xl">cleaning_services</span>
              </div>
              <span className="text-sm font-bold uppercase tracking-wider text-slate-400">Ménage</span>
            </div>
            <div className="mb-8">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-slate-900">25â‚¬</span>
                <span className="text-slate-500 font-medium">/ h</span>
              </div>
            </div>
            <ul className="flex-grow space-y-4 mb-8">
              <li className="flex items-center gap-3 text-slate-600">
                <span className="material-symbols-outlined text-purple-500 text-xl">check_circle</span>
                <span>Nettoyage courant</span>
              </li>
              <li className="flex items-center gap-3 text-slate-600">
                <span className="material-symbols-outlined text-purple-500 text-xl">check_circle</span>
                <span>Lavage de vitres</span>
              </li>
              <li className="flex items-center gap-3 text-slate-600">
                <span className="material-symbols-outlined text-purple-500 text-xl">check_circle</span>
                <span>Repassage à domicile</span>
              </li>
            </ul>
            <Link to="/request-quote" className="w-full inline-flex justify-center items-center rounded-xl bg-slate-900 text-white py-3 font-bold transition-all group-hover:bg-purple-500 group-hover:text-white">
              Demander un devis
            </Link>
          </div>
          
          <div className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:border-[#ec5b13]/50 relative overflow-hidden">
            <div className="absolute top-4 -right-10 bg-[#ec5b13] text-white text-xs font-bold px-10 py-1 rotate-45 shadow-sm">Bientôt Complet</div>
            <div className="mb-6 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ec5b13]/10 text-[#ec5b13]">
                <span className="material-symbols-outlined text-3xl">handyman</span>
              </div>
              <span className="text-sm font-bold uppercase tracking-wider text-slate-400">Bricolage</span>
            </div>
            <div className="mb-8">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-slate-900">40â‚¬</span>
                <span className="text-slate-500 font-medium">dès</span>
              </div>
            </div>
            <ul className="flex-grow space-y-4 mb-8">
              <li className="flex items-center gap-3 text-slate-600">
                <span className="material-symbols-outlined text-[#ec5b13] text-xl">check_circle</span>
                <span>Montage meuble en kit</span>
              </li>
              <li className="flex items-center gap-3 text-slate-600">
                <span className="material-symbols-outlined text-[#ec5b13] text-xl">check_circle</span>
                <span>Fixation murale (TV, étagère)</span>
              </li>
              <li className="flex items-center gap-3 text-slate-600">
                <span className="material-symbols-outlined text-[#ec5b13] text-xl">check_circle</span>
                <span>Pose de tringles à rideaux</span>
              </li>
            </ul>
            <Link to="/request-quote" className="w-full inline-flex justify-center items-center rounded-xl bg-slate-900 text-white py-3 font-bold transition-all group-hover:bg-[#ec5b13] group-hover:text-white">
              Demander un devis
            </Link>
          </div>
          
          <div className="grow flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-slate-300 p-8 text-center bg-transparent group hover:border-blue-600 transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-5xl text-slate-400 mb-4 group-hover:text-blue-600 group-hover:scale-110 transition-transform">more_horiz</span>
            <h3 className="text-xl font-bold mb-2">Autre chose ?</h3>
            <p className="text-slate-500 mb-6">Jardinage, serrurerie, maçonnerie... nous vous mettons en relation avec le bon artisan.</p>
            <Link to="/request-quote" className="text-blue-600 font-bold hover:underline flex items-center gap-2">
              Demander un devis personnalisé
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
          
        </div>
      </section>

      {/* Pricing Information Section */}
      <section className="bg-white py-20 px-4 border-t border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Comprendre nos tarifs</h2>
            <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start group">
              <div className="size-16 rounded-2xl bg-blue-50 flex items-center justify-center shadow-inner mb-6 text-blue-600 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">priority_high</span>
              </div>
              <h4 className="text-xl font-bold mb-3 text-slate-900">Urgences & Horaires</h4>
              <p className="text-slate-600 leading-relaxed">Les interventions de nuit, le week-end ou les jours fériés peuvent inclure une majoration de 20% à 50% selon l'artisan.</p>
            </div>
            <div className="flex flex-col items-center md:items-start group">
              <div className="size-16 rounded-2xl bg-blue-50 flex items-center justify-center shadow-inner mb-6 text-blue-600 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">inventory_2</span>
              </div>
              <h4 className="text-xl font-bold mb-3 text-slate-900">Matériel & Fournitures</h4>
              <p className="text-slate-600 leading-relaxed">Le coût des matériaux (peinture, pièces de plomberie, etc.) est généralement facturé en sus du coût horaire ou forfaitaire de la main-d'Å“uvre.</p>
            </div>
            <div className="flex flex-col items-center md:items-start group">
              <div className="size-16 rounded-2xl bg-blue-50 flex items-center justify-center shadow-inner mb-6 text-blue-600 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">account_tree</span>
              </div>
              <h4 className="text-xl font-bold mb-3 text-slate-900">Complexité</h4>
              <p className="text-slate-600 leading-relaxed">La difficulté d'accès ou l'âge de l'installation peuvent modifier le volume d'heures requises. Chaque devis est 100% personnalisé.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 text-center max-w-5xl mx-auto">
        <div className="bg-blue-600 rounded-[2.5rem] p-12 lg:p-20 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/20 rounded-full blur-3xl mix-blend-overlay"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/20 rounded-full blur-3xl mix-blend-overlay"></div>
          <h2 className="text-3xl lg:text-5xl font-black mb-6 leading-tight relative z-10">Un projet spécifique en tête ?</h2>
          <p className="text-xl text-blue-100 mb-10 relative z-10 max-w-2xl mx-auto">Obtenez une estimation précise et 100% gratuite pour vos travaux en moins de 24 heures.</p>
          <Link to="/request-quote" className="inline-flex bg-white text-blue-600 px-10 py-5 rounded-2xl text-xl font-bold shadow-xl transition-all hover:scale-105 hover:bg-slate-50 relative z-10">
            Commencer mon estimation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicePricing;

