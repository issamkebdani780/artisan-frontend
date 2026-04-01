import React from 'react';
import ArtisanLayout from '../layouts/ArtisanLayout';

const ArtisanSettings = () => {
  return (
    <ArtisanLayout title="Artisan PRO" subtitle="Paramètres du compte">
      <div className="flex-1 overflow-y-auto">
        
        <header className="px-8 py-8">
          <h2 className="text-3xl font-black tracking-tight mb-2">Paramètres</h2>
          <p className="text-slate-500 dark:text-slate-400">Gérez vos informations personnelles et les préférences de votre compte.</p>
        </header>

        <div className="px-8 pb-12 flex flex-col gap-8 max-w-4xl">
          
          {/* Section: Informations sur le profil */}
          <section className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800">
            <h3 className="text-lg font-bold mb-6">Informations sur le profil</h3>
            <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
              <div className="relative group shrink-0">
                <div className="h-32 w-32 rounded-full overflow-hidden border-4 border-slate-50 dark:border-slate-800 shadow-sm">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=60" alt="Avatar" className="h-full w-full object-cover" />
                </div>
                <button className="absolute bottom-0 right-0 bg-[#ec5b13] text-white p-2 rounded-full shadow-lg hover:scale-105 transition-transform flex items-center justify-center">
                  <span className="material-symbols-outlined text-sm">photo_camera</span>
                </button>
              </div>
              
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Nom complet</label>
                  <input type="text" defaultValue="Jean Dupont" className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:border-[#ec5b13] focus:ring-2 focus:ring-[#ec5b13]/50 outline-none px-4 py-2 transition-all" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Métier</label>
                  <input type="text" defaultValue="Menuisier Ébéniste" className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:border-[#ec5b13] focus:ring-2 focus:ring-[#ec5b13]/50 outline-none px-4 py-2 transition-all" />
                </div>
                <div className="flex flex-col gap-1.5 md:col-span-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Bio / Description</label>
                  <textarea rows="3" defaultValue="Menuisier passionné avec plus de 10 ans d'expérience dans la création de mobilier sur mesure et la rénovation d'intérieurs." className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:border-[#ec5b13] focus:ring-2 focus:ring-[#ec5b13]/50 outline-none px-4 py-2 custom-scrollbar transition-all"></textarea>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <button className="bg-[#ec5b13] text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">save</span>
                Enregistrer les modifications
              </button>
            </div>
          </section>

          {/* Section: Sécurité du compte */}
          <section className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-[#ec5b13]">security</span>
              <h3 className="text-lg font-bold">Sécurité du compte</h3>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">Mot de passe</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Dernière modification il y a 3 mois</p>
                </div>
                <button className="mt-4 md:mt-0 px-4 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Modifier le mot de passe</button>
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">Authentification à deux facteurs</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Ajoutez une couche de sécurité supplémentaire</p>
                </div>
                <button className="mt-4 md:mt-0 px-4 py-2 bg-[#ec5b13]/10 text-[#ec5b13] font-bold rounded-lg text-sm hover:bg-[#ec5b13]/20 transition-colors">Activer 2FA</button>
              </div>
            </div>
          </section>

          {/* Section: Préférences & Langue */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Notifications */}
            <section className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 flex flex-col">
              <h3 className="text-lg font-bold mb-6">Notifications</h3>
              <div className="flex flex-col gap-6">
                <label className="flex items-center justify-between cursor-pointer group">
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 group-hover:text-[#ec5b13] transition-colors">Nouveaux messages</span>
                  <div className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#ec5b13]"></div>
                  </div>
                </label>
                <label className="flex items-center justify-between cursor-pointer group">
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 group-hover:text-[#ec5b13] transition-colors">Mises à jour des projets</span>
                  <div className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#ec5b13]"></div>
                  </div>
                </label>
                <label className="flex items-center justify-between cursor-pointer group">
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 transition-colors">Offres promotionnelles</span>
                  <div className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#ec5b13]"></div>
                  </div>
                </label>
              </div>
            </section>
            
            {/* Langue */}
            <section className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-bold mb-6">Langue et région</h3>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Langue de l'interface</label>
                  <select className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:border-[#ec5b13] focus:ring-2 focus:ring-[#ec5b13] text-sm outline-none px-4 py-2 transition-all">
                    <option value="fr" defaultValue>Français</option>
                    <option value="en">English</option>
                    <option value="de">Deutsch</option>
                    <option value="it">Italiano</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Fuseau horaire</label>
                  <select className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:border-[#ec5b13] focus:ring-2 focus:ring-[#ec5b13] text-sm outline-none px-4 py-2 transition-all">
                    <option value="utc1" defaultValue>(UTC+01:00) Paris, Bruxelles, Madrid</option>
                    <option value="utc0">(UTC+00:00) Londres, Lisbonne</option>
                  </select>
                </div>
              </div>
            </section>
          </div>

          {/* Danger Zone */}
          <section className="bg-red-50 dark:bg-red-950/20 rounded-xl p-8 border border-red-100 dark:border-red-900/30 w-full flex flex-col md:flex-row md:items-center justify-between gap-4 mt-4">
            <div>
              <h3 className="text-lg font-bold text-red-700 dark:text-red-400 mb-1">Zone de danger</h3>
              <p className="text-sm text-red-600/70 dark:text-red-400/70">Ces actions sont irréversibles. Soyez prudent et réfléchissez bien.</p>
            </div>
            <button className="px-6 py-2.5 border-2 border-red-200 dark:border-red-900 text-red-700 dark:text-red-400 rounded-lg text-sm font-bold hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">delete</span>
              Supprimer mon compte
            </button>
          </section>
          
        </div>
      </div>
    </ArtisanLayout>
  );
};

export default ArtisanSettings;
