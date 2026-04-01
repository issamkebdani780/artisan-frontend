import React, { useState } from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';

const MovingBooking = () => {
  const [distance, setDistance] = useState(450);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans">
      <Navbar />
      
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="mb-10 text-center lg:text-left">
            <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-3">Réservez votre déménagement professionnel</h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              Calculez instantanément votre tarif basé sur la distance, le volume et la main-d'œuvre nécessaire. Simple, rapide et transparent.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Booking Form */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 sm:p-8">
                {/* Step 1: Route & Schedule */}
                <section className="mb-10">
                  <div className="flex items-center gap-3 mb-6 text-indigo-600">
                    <span className="material-symbols-outlined text-2xl">location_on</span>
                    <h2 className="text-xl font-bold text-slate-900">Itinéraire et Date</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Lieu de départ</label>
                      <div className="flex gap-2">
                        <div className="relative flex-grow">
                          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                            <span className="material-symbols-outlined text-lg">home</span>
                          </span>
                          <input 
                            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all" 
                            placeholder="Adresse ou Code Postal" 
                            type="text"
                          />
                        </div>
                        <button className="px-3 flex items-center justify-center border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-indigo-600" title="Localiser">
                          <span className="material-symbols-outlined text-lg">my_location</span>
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Destination</label>
                      <div className="flex gap-2">
                        <div className="relative flex-grow">
                          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                            <span className="material-symbols-outlined text-lg">flag</span>
                          </span>
                          <input 
                            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all" 
                            placeholder="Adresse d'arrivée" 
                            type="text"
                          />
                        </div>
                        <button className="px-3 flex items-center justify-center border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-indigo-600" title="Localiser">
                          <span className="material-symbols-outlined text-lg">my_location</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* SVG Map Mockup */}
                  <div className="w-full h-64 bg-slate-100 rounded-xl mb-8 relative overflow-hidden border border-slate-200 shadow-inner">
                    <div className="absolute inset-0 bg-indigo-50/30"></div>
                    <svg className="absolute inset-0 w-full h-full z-10 p-12" preserveAspectRatio="none" viewBox="0 0 400 200">
                      <path 
                        d="M50,150 C150,150 250,50 350,50" 
                        fill="none" 
                        stroke="#4f46e5" 
                        strokeDasharray="4, 8" 
                        strokeLinecap="round" 
                        strokeWidth="4"
                      />
                      <circle cx="50" cy="150" fill="white" r="8" stroke="#4f46e5" strokeWidth="3" />
                      <circle cx="50" cy="150" fill="#4f46e5" r="3" />
                      <circle cx="350" cy="50" fill="white" r="8" stroke="#4f46e5" strokeWidth="3" />
                      <circle cx="350" cy="50" fill="#4f46e5" r="3" />
                    </svg>
                    <div className="absolute top-4 left-4 z-20">
                      <div className="bg-white px-3 py-1.5 rounded-lg shadow-sm border border-slate-200 flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">Itinéraire optimisé</span>
                      </div>
                    </div>
                  </div>

                  {/* Calendar Widget Preview */}
                  <div className="bg-slate-50 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-4 px-2">
                       <button className="p-1 hover:bg-slate-200 rounded-lg transition-colors">
                        <span className="material-symbols-outlined text-lg">chevron_left</span>
                      </button>
                      <span className="font-bold text-slate-800">Mai 2024</span>
                      <button className="p-1 hover:bg-slate-200 rounded-lg transition-colors">
                        <span className="material-symbols-outlined text-lg">chevron_right</span>
                      </button>
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-bold text-slate-400 mb-2 uppercase">
                      <div>LU</div><div>MA</div><div>ME</div><div>JE</div><div>VE</div><div>SA</div><div>DI</div>
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-center font-medium text-sm">
                      {[29, 30, 1, 2].map(day => (
                        <div key={day} className="py-2 text-slate-300">{day}</div>
                      ))}
                      <div className="py-2 bg-indigo-600 text-white rounded-lg font-bold shadow-md shadow-indigo-200">3</div>
                      {[4, 5, 6, 7, 8, 9, 10].map(day => (
                        <div key={day} className="py-2 hover:bg-white rounded-lg cursor-pointer transition-colors text-slate-600">{day}</div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Step 2: Items & Weight */}
                <section className="mb-10">
                  <div className="flex items-center gap-3 mb-6 text-indigo-600">
                    <span className="material-symbols-outlined text-2xl">inventory_2</span>
                    <h2 className="text-xl font-bold text-slate-900">Détails des objets & Poids</h2>
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                    {[
                      { icon: 'chair', label: 'Bois', selected: true },
                      { icon: 'grid_view', label: 'Verre', selected: false },
                      { icon: 'shopping_bag', label: 'Plastique', selected: true },
                      { icon: 'delete_outline', label: 'Rebuts', selected: false }
                    ].map((item, idx) => (
                      <button 
                        key={idx}
                        className={`flex flex-col items-center justify-center p-4 border-2 rounded-xl transition-all ${
                          item.selected 
                          ? 'border-indigo-600 bg-indigo-50 shadow-md' 
                          : 'border-slate-100 bg-white hover:border-slate-300'
                        }`}
                      >
                        <span className={`material-symbols-outlined text-3xl mb-2 ${item.selected ? 'text-indigo-600' : 'text-slate-400'}`}>
                          {item.icon}
                        </span>
                        <span className={`text-xs font-bold ${item.selected ? 'text-slate-900' : 'text-slate-500'}`}>{item.label}</span>
                        <div className={`mt-2 w-4 h-4 rounded-full flex items-center justify-center border ${
                          item.selected ? 'bg-indigo-600 border-indigo-600' : 'border-slate-200'
                        }`}>
                          {item.selected && <span className="material-symbols-outlined text-[10px] text-white font-bold">check</span>}
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-4 flex justify-between">
                        Estimation du poids <span>~ {distance} kg</span>
                      </label>
                      <input 
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600" 
                        max="2000" min="0" step="100" type="range"
                        value={distance}
                        onChange={(e) => setDistance(e.target.value)}
                      />
                      <div className="flex justify-between text-[10px] mt-2 text-slate-400 font-bold uppercase tracking-wider">
                        <span>&lt; 100kg</span>
                        <span>500kg</span>
                        <span>1000kg</span>
                        <span>1500kg</span>
                        <span>2000kg+</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { icon: 'priority_high', label: 'Piano / Objet très lourd' },
                        { icon: 'warning', label: 'Fragile / Haute valeur' }
                      ].map((option, idx) => (
                        <label key={idx} className="flex items-center gap-3 p-3 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors group">
                          <input className="w-5 h-5 rounded text-indigo-600 border-slate-300 focus:ring-indigo-500" type="checkbox"/>
                          <span className="material-symbols-outlined text-slate-400 group-hover:text-indigo-600 transition-colors">{option.icon}</span>
                          <span className="text-sm font-medium text-slate-700">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Step 3: Labor & Estimation */}
                <section className="border-t border-slate-100 pt-8">
                  <div className="flex items-center gap-3 mb-6 text-indigo-600">
                    <span className="material-symbols-outlined text-2xl">payments</span>
                    <h2 className="text-xl font-bold text-slate-900">Estimation du Budget</h2>
                  </div>
                  
                  <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-indigo-800 uppercase tracking-wide">Tarif estimé tout inclus</p>
                      <p className="text-xs text-indigo-600 mt-1">Distance, volume et assurance inclus.</p>
                    </div>
                    <div className="text-center md:text-right">
                      <span className="text-4xl font-black text-indigo-600">1,250 €</span>
                      <span className="block text-[10px] text-indigo-500 font-bold uppercase tracking-widest mt-1">Paiement sécurisé</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="flex-grow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg shadow-indigo-200 transition-all flex items-center justify-center gap-2">
                      <span>Réserver mon déménagement</span>
                      <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                    <button className="px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-lg transition-all">
                      Enregistrer
                    </button>
                  </div>
                </section>
              </div>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-6 leading-tight">Pourquoi nous ?</h3>
                <ul className="space-y-6">
                  {[
                    { icon: 'verified', title: 'Déménageurs Certifiés', desc: 'Tous nos partenaires sont rigoureusement vérifiés et assurés.' },
                    { icon: 'history', title: 'Suivi Temps Réel', desc: "Suivez l'arrivée de votre équipe directement sur l'app." },
                    { icon: 'support_agent', title: 'Support Dédié 7j/7', desc: 'Une équipe disponible pour vous accompagner à chaque étape.' }
                  ].map((feature, idx) => (
                    <li key={idx} className="flex gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center">
                        <span className="material-symbols-outlined">{feature.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-slate-800">{feature.title}</h4>
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">{feature.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                        <img alt="User" src={`https://i.pravatar.cc/100?u=${i}`} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">+2,500 clients satisfaits</span>
                </div>
              </div>

              <div className="bg-slate-900 rounded-xl p-6 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-lg font-bold mb-2">Besoin d'aide ?</h3>
                  <p className="text-indigo-300 text-xs mb-6 leading-relaxed">Nos conseillers sont à votre écoute pour vous aider.</p>
                  <a className="block w-full text-center py-3 border border-white/20 rounded-lg font-bold hover:bg-white hover:text-slate-900 transition-all" href="tel:0123456789">
                    01 23 45 67 89
                  </a>
                </div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-600/20 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MovingBooking;
