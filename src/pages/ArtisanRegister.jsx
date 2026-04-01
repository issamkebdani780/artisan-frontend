import React from 'react';
import { Link } from 'react-router-dom';

const ArtisanRegister = () => {
  return (
    <div className="bg-[#f8fafc] font-body text-slate-900 antialiased overflow-x-hidden pt-20">
      <main className="min-h-screen flex flex-col lg:flex-row">
        {/* Left Side: Visual & Inspiration */}
        <section className="hidden lg:flex w-[45%] relative overflow-hidden bg-slate-950">
          <img alt="Professional Background" className="absolute inset-0 w-full h-full object-cover opacity-50" src="https://images.unsplash.com/photo-1542621323-22ea68988a8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" />
          <div className="relative z-10 flex flex-col justify-end p-16 w-full bg-linear-to-b from-slate-900/10 to-slate-900/90">
            <div className="space-y-8 max-w-md">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-500 border border-orange-500/30 text-xs font-bold tracking-widest uppercase">REJOIGNEZ L'ÉLITE</span>
              <h1 className="text-5xl font-black text-white leading-tight tracking-tighter">
                Rejoignez l'élite des <span className="text-orange-500">services professionnels.</span>
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed font-light">
                Accédez à un réseau exclusif de professionnels vérifiés et gérez vos projets en toute sérénité avec ArtisanHub.
              </p>
              
              {/* Benefit Cards */}
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10 flex items-start gap-4 shadow-xl">
                  <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center shrink-0 shadow-lg">
                    <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Pros Vérifiés</h3>
                    <p className="text-sm text-slate-300 mt-0.5">Chaque membre subit un processus de vérification rigoureux en 5 étapes.</p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10 flex items-start gap-4 shadow-xl">
                  <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center shrink-0 shadow-lg">
                    <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Paiements Sécurisés</h3>
                    <p className="text-sm text-slate-300 mt-0.5">Infrastructure de paiement cryptée de bout en bout avec protection.</p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10 flex items-start gap-4 shadow-xl">
                  <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center shrink-0 shadow-lg">
                    <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>support_agent</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Support 24/7</h3>
                    <p className="text-sm text-slate-300 mt-0.5">Une équipe de conciergerie dédiée disponible à tout moment.</p>
                  </div>
                </div>
              </div>
              
              {/* Testimonial */}
              <div className="mt-8 bg-white/10 backdrop-blur-md p-6 rounded-2xl border-l-4 border-orange-500 shadow-2xl">
                <p className="text-slate-200 text-sm italic font-medium">"ArtisanHub a transformé notre gestion de prestataires. La qualité et la sécurité sont sans égales."</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border-2 border-white shadow-sm overflow-hidden bg-slate-200">
                    <img alt="Directeur Opérations" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Jean-Marc Aubert</div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Directeur Opérations, TechCorp</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Right Side: Registration Form */}
        <section className="w-full lg:w-[55%] bg-[#f8fafc] flex items-center justify-center py-16 px-6 sm:px-12 lg:px-24">
          <div className="w-full max-w-2xl">
            <div className="mb-10 text-center lg:text-left">
              <h2 className="text-4xl font-black text-slate-900 tracking-tighter">Créer votre profil Artisan</h2>
              <p className="text-slate-500 mt-2 text-lg">Commencez votre aventure avec ArtisanHub dès aujourd'hui.</p>
            </div>
            
            <form className="space-y-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 ml-1">Nom Complet</label>
                  <input type="text" placeholder="Ex: Rachid Mazouni" required className="w-full h-14 px-5 rounded-xl bg-[#e2e8f0] border-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-900 font-medium placeholder:text-slate-400" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 ml-1">Date de Naissance</label>
                  <input type="date" required className="w-full h-14 px-5 rounded-xl bg-[#e2e8f0] border-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-900 font-medium" />
                </div>
              </div>

              {/* Professional Specific Fields */}
              <div className="p-6 bg-orange-500/5 rounded-2xl border border-orange-500/20 space-y-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.15em] text-orange-500 ml-1">Catégorie Professionnelle</label>
                  <select defaultValue="" className="w-full h-14 px-5 rounded-xl bg-white border-2 border-orange-500/10 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 text-slate-900 font-semibold transition-all appearance-none cursor-pointer">
                    <option disabled value="">Sélectionnez votre spécialité</option>
                    <option>Maître Charpentier</option>
                    <option>Architecte d'Intérieur</option>
                    <option>Artisan Métallier</option>
                    <option>Paysagiste</option>
                    <option>Électricien Qualifié</option>
                    <option>Plombier Expert</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.15em] text-orange-500 ml-1">Années d'Expérience</label>
                  <input type="number" min="0" placeholder="Ex: 10" className="w-full h-14 px-5 rounded-xl bg-white border-2 border-orange-500/10 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-slate-900 font-medium placeholder:text-slate-300" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 ml-1">Email</label>
                <input type="email" placeholder="contact@exemple.com" required className="w-full h-14 px-5 rounded-xl bg-[#e2e8f0] border-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-900 font-medium placeholder:text-slate-400" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 ml-1">Numéro de Téléphone</label>
                  <div className="relative flex items-center">
                    <div className="absolute left-4 flex items-center gap-2 pointer-events-none border-r border-slate-300 pr-3">
                      <span className="text-sm font-bold text-slate-600 tracking-tight">+213</span>
                    </div>
                    <input type="tel" placeholder="05 50 12 34 56" required className="w-full h-14 pl-24 pr-5 rounded-xl bg-[#e2e8f0] border-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-900 font-medium placeholder:text-slate-400" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 ml-1">Adresse / Ville</label>
                  <input type="text" placeholder="Alger" required className="w-full h-14 px-5 rounded-xl bg-[#e2e8f0] border-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-900 font-medium placeholder:text-slate-400" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 ml-1">Mot de passe</label>
                  <input type="password" placeholder="••••••••" required className="w-full h-14 px-5 rounded-xl bg-[#e2e8f0] border-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-900 font-medium placeholder:text-slate-400" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 ml-1">Confirmer le mot de passe</label>
                  <input type="password" placeholder="••••••••" required className="w-full h-14 px-5 rounded-xl bg-[#e2e8f0] border-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-900 font-medium placeholder:text-slate-400" />
                </div>
              </div>

              {/* Password Security Markers */}
              <div className="bg-slate-100 p-5 rounded-xl border-l-4 border-indigo-500 shadow-sm">
                <h4 className="text-[10px] font-black text-slate-500 mb-3 uppercase tracking-wider">Sécurité du mot de passe :</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                  <li className="flex items-center gap-2 text-[11px] font-bold text-slate-600">
                    <span className="material-symbols-outlined text-green-500 text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span> 8+ Caractères
                  </li>
                  <li className="flex items-center gap-2 text-[11px] font-bold text-slate-400">
                    <span className="material-symbols-outlined text-[16px]">circle</span> Commence par une lettre
                  </li>
                  <li className="flex items-center gap-2 text-[11px] font-bold text-slate-400">
                    <span className="material-symbols-outlined text-[16px]">circle</span> Contient une majuscule
                  </li>
                  <li className="flex items-center gap-2 text-[11px] font-bold text-slate-400">
                    <span className="material-symbols-outlined text-[16px]">circle</span> Contient un chiffre
                  </li>
                </ul>
              </div>

              <div className="flex items-start gap-3 py-2">
                <input type="checkbox" required className="mt-1 w-5 h-5 rounded border-none bg-[#e2e8f0] text-indigo-500 focus:ring-indigo-500 focus:ring-offset-2 transition-all cursor-pointer" />
                <label className="text-sm text-slate-500 leading-relaxed">
                  J'accepte les <a href="#" className="text-indigo-500 font-bold hover:underline">Conditions d'Utilisation</a> et la <a href="#" className="text-indigo-500 font-bold hover:underline">Politique de Confidentialité</a>.
                </label>
              </div>

              <button type="submit" className="w-full h-16 bg-orange-500 text-white font-black text-lg rounded-2xl shadow-xl shadow-orange-500/30 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0.5 active:scale-[0.99] transition-all flex items-center justify-center gap-3">
                S'inscrire en tant que Professionnel
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              
              <div className="pt-4 text-center">
                <p className="text-slate-500 text-sm font-medium">
                  Déjà membre de la communauté ? <Link to="/login/artisan" className="text-indigo-500 font-black ml-1 hover:underline">Connexion</Link>
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ArtisanRegister;
