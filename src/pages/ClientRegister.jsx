import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ClientRegister = () => {
  const [activeTab, setActiveTab] = useState('client');

  return (
    <div className="bg-[#fcfdfe] font-body text-slate-900 antialiased">
      <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        {/* Left Editorial Section */}
        <div className="lg:col-span-5 space-y-12 lg:sticky lg:top-32">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.1]">
              Rejoignez <span className="text-blue-600 italic">l'excellence</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed font-normal max-w-md">
              Accédez à un écosystème privilégié où le savoir-faire rencontre la passion. Créez votre profil en quelques instants.
            </p>
          </div>
          
          <div className="space-y-5">
            {[
              { icon: 'verified', title: 'Qualité Certifiée', desc: 'Un réseau rigoureusement sélectionné pour garantir une authenticité absolue.' },
              { icon: 'security', title: 'Confiance Totale', desc: 'Transactions sécurisées par des protocoles bancaires de nouvelle génération.' },
              { icon: 'history_edu', title: 'Savoir-faire Unique', desc: 'Découvrez des histoires et des pièces qui ne se trouvent nulle part ailleurs.' }
            ].map((item, i) => (
              <div key={i} className="group p-6 rounded-2xl bg-white border border-slate-100 flex items-start gap-5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_4px_6px_-2px_rgba(0,0,0,0.05)] transition-all duration-300 hover:border-blue-600/20">
                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-snug">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex items-center gap-4 py-6 border-t border-slate-100">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((n) => (
                <div key={n} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm">
                  <img alt={`User ${n}`} className="w-full h-full object-cover" src={`https://i.pravatar.cc/100?img=${n + 10}`} />
                </div>
              ))}
            </div>
            <p className="text-sm font-medium text-slate-500">
              Rejoignez plus de <span className="text-slate-900 font-bold">12,000+</span> passionnés d'artisanat.
            </p>
          </div>
        </div>

        {/* Right Registration Form Section */}
        <div className="lg:col-span-7">
          <div className="flex justify-center p-1.5 bg-slate-100 rounded-2xl mb-8 gap-1.5">
            <button 
              onClick={() => setActiveTab('client')}
              className={`flex-1 text-center py-3.5 rounded-xl font-bold text-sm cursor-pointer transition-all duration-300 ${activeTab === 'client' ? 'bg-blue-600 text-white shadow-[0_4px_12px_rgba(37,99,235,0.25)]' : 'text-slate-500 hover:bg-white/50'}`}
            >
              Compte Client
            </button>
            <button 
              onClick={() => setActiveTab('artisan')}
              className={`flex-1 text-center py-3.5 rounded-xl font-bold text-sm cursor-pointer transition-all duration-300 ${activeTab === 'artisan' ? 'bg-blue-600 text-white shadow-[0_4px_12px_rgba(37,99,235,0.25)]' : 'text-slate-500 hover:bg-white/50'}`}
            >
              Compte Artisan
            </button>
          </div>

          <div className="bg-white p-8 lg:p-14 rounded-3xl shadow-[0_20px_50px_-12px_rgba(37,99,235,0.08)] border border-slate-50">
            {activeTab === 'client' ? (
              <div className="space-y-10">
                <div className="space-y-3">
                  <h2 className="text-4xl font-black text-slate-900 tracking-tight">Créer mon profil</h2>
                  <p className="text-slate-500 text-lg">Découvrez le monde de l'artisanat d'exception.</p>
                </div>
                <form className="space-y-8">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">Nom Complet</label>
                      <div className="relative group">
                        <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors text-xl">person</span>
                        <input type="text" placeholder="Yassine Benali" className="w-full pl-14 pr-6 py-5 bg-slate-50/50 rounded-2xl border border-transparent focus:border-blue-600/20 focus:ring-8 focus:ring-blue-600/5 focus:bg-white transition-all outline-none text-slate-900 font-medium placeholder:text-slate-400" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">Email</label>
                        <div className="relative group">
                          <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors text-xl">mail</span>
                          <input type="email" placeholder="jean@exemple.com" className="w-full pl-14 pr-6 py-5 bg-slate-50/50 rounded-2xl border border-transparent focus:border-blue-600/20 focus:ring-8 focus:ring-blue-600/5 focus:bg-white transition-all outline-none text-slate-900 font-medium placeholder:text-slate-400" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">Téléphone</label>
                        <div className="relative group">
                          <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors text-xl">call</span>
                          <input type="tel" placeholder="05 50 12 34 56" className="w-full pl-14 pr-6 py-5 bg-slate-50/50 rounded-2xl border border-transparent focus:border-blue-600/20 focus:ring-8 focus:ring-blue-600/5 focus:bg-white transition-all outline-none text-slate-900 font-medium placeholder:text-slate-400" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">Mot de passe</label>
                        <div className="relative group">
                          <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors text-xl">lock</span>
                          <input type="password" placeholder="••••••••" className="w-full pl-14 pr-6 py-5 bg-slate-50/50 rounded-2xl border border-transparent focus:border-blue-600/20 focus:ring-8 focus:ring-blue-600/5 focus:bg-white transition-all outline-none text-slate-900 font-medium placeholder:text-slate-400" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">Confirmation</label>
                        <div className="relative group">
                          <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors text-xl">verified_user</span>
                          <input type="password" placeholder="••••••••" className="w-full pl-14 pr-6 py-5 bg-slate-50/50 rounded-2xl border border-transparent focus:border-blue-600/20 focus:ring-8 focus:ring-blue-600/5 focus:bg-white transition-all outline-none text-slate-900 font-medium placeholder:text-slate-400" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 bg-blue-50/50 rounded-2xl space-y-3 border border-blue-100/50">
                    <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Sécurité requise</p>
                    <ul className="text-xs text-slate-600 space-y-2">
                      <li className="flex items-center gap-2.5">
                        <span className="material-symbols-outlined text-sm text-blue-600" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        <span className="font-medium">8 caractères minimum</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-6">
                    <button type="submit" className="w-full py-5 bg-blue-600 text-white font-black text-sm uppercase tracking-widest rounded-2xl shadow-xl shadow-blue-200 hover:bg-blue-700 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300">
                      S'inscrire Maintenant
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="space-y-10">
                <div className="space-y-3">
                  <h2 className="text-4xl font-black text-slate-900 tracking-tight">Ouvrir mon Atelier</h2>
                  <p className="text-slate-500 text-lg">Rejoignez l'élite des créateurs et artisans.</p>
                </div>
                <form className="space-y-8">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">Nom de l'Atelier</label>
                      <div className="relative group">
                        <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors text-xl">storefront</span>
                        <input type="text" placeholder="Ex: Atelier d'Alger" className="w-full pl-14 pr-6 py-5 bg-slate-50/50 rounded-2xl border border-transparent focus:border-blue-600/20 focus:ring-8 focus:ring-blue-600/5 focus:bg-white transition-all outline-none text-slate-900 font-medium placeholder:text-slate-400" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Pro</label>
                        <div className="relative group">
                          <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors text-xl">business_center</span>
                          <input type="email" placeholder="contact@votre-atelier.com" className="w-full pl-14 pr-6 py-5 bg-slate-50/50 rounded-2xl border border-transparent focus:border-blue-600/20 focus:ring-8 focus:ring-blue-600/5 focus:bg-white transition-all outline-none text-slate-900 font-medium placeholder:text-slate-400" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">Téléphone Pro</label>
                        <div className="relative group">
                          <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors text-xl">call</span>
                          <input type="tel" placeholder="05 50 12 34 56" className="w-full pl-14 pr-6 py-5 bg-slate-50/50 rounded-2xl border border-transparent focus:border-blue-600/20 focus:ring-8 focus:ring-blue-600/5 focus:bg-white transition-all outline-none text-slate-900 font-medium placeholder:text-slate-400" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">Mot de passe</label>
                        <div className="relative group">
                          <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors text-xl">lock</span>
                          <input type="password" placeholder="••••••••" className="w-full pl-14 pr-6 py-5 bg-slate-50/50 rounded-2xl border border-transparent focus:border-blue-600/20 focus:ring-8 focus:ring-blue-600/5 focus:bg-white transition-all outline-none text-slate-900 font-medium placeholder:text-slate-400" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">Confirmation</label>
                        <div className="relative group">
                          <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors text-xl">verified_user</span>
                          <input type="password" placeholder="••••••••" className="w-full pl-14 pr-6 py-5 bg-slate-50/50 rounded-2xl border border-transparent focus:border-blue-600/20 focus:ring-8 focus:ring-blue-600/5 focus:bg-white transition-all outline-none text-slate-900 font-medium placeholder:text-slate-400" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <button type="submit" className="w-full py-5 bg-blue-600 text-white font-black text-sm uppercase tracking-widest rounded-2xl shadow-xl shadow-blue-200 hover:bg-blue-700 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300">
                      Ouvrir Mon Atelier
                    </button>
                  </div>
                </form>
              </div>
            )}

            <div className="mt-12 pt-10 border-t border-slate-100 flex flex-col items-center gap-4">
              <p className="text-sm text-slate-500 font-medium">
                Déjà parmi nous ? <Link to={activeTab === 'client' ? '/login/client' : '/login/artisan'} className="text-blue-600 font-bold hover:underline ml-1">Se connecter</Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ClientRegister;
