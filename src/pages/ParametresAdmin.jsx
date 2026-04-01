import React from 'react';
import AdminLayout from '../layouts/AdminLayout';

const ParametresAdmin = () => {
  return (
    <AdminLayout title="Paramètres Système" subtitle="Gérez la configuration globale">
      <div className="flex-1 overflow-y-auto p-8 space-y-8 max-w-6xl mx-auto w-full">
        
        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Paramètres Système</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">Gérez la configuration globale de The Violet Protocol et ajustez les préférences système de votre environnement.</p>
        </div>

        {/* Tabbed Navigation */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 mb-8">
          <button className="px-6 py-4 text-sm font-bold border-b-2 border-indigo-600 text-indigo-600">Général</button>
          <button className="px-6 py-4 text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors">Sécurité</button>
          <button className="px-6 py-4 text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors">Notifications</button>
          <button className="px-6 py-4 text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors">Intégrations</button>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start">
          
          {/* Left Column: Content */}
          <div className="xl:col-span-2 space-y-8">
            
            {/* Identity Section */}
            <section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-indigo-600">branding_watermark</span>
                <h2 className="text-xl font-bold">Identité de la Plateforme</h2>
              </div>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Logo de l'app</label>
                  <div className="md:col-span-3 flex items-center gap-6">
                    <div className="h-20 w-20 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center border-2 border-dashed border-slate-200 dark:border-slate-700 group hover:border-indigo-400 transition-colors cursor-pointer overflow-hidden relative">
                      <img alt="Logo preview" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDREEjq9zqRROQNsZxJ3VFC4k7VyDxwvjCMtly88q_1URdh1n3CHwN1LwQXR40f7cBt5Ic5CoywIjThKbVU9BCiwnwABJOXRJOOiMyu1R35cVkwhRmNGrBex71-2JDVlbj7KYyiww3qKsW5tANIhMTT6lhmwshhBtvxD6qiVImTTa3mJ8qh0IDTV5GCLC9GBNzfZJ8TKnTr9QJbqC8Ej-ZT7ofs4tk6l0cp3em-qMaw19Psdrs2Od95m6Hk-_TnIrlpNC3oEyfdgkr"/>
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="material-symbols-outlined text-white">upload</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <button className="text-sm font-bold text-indigo-600 hover:text-indigo-800 transition-colors">Changer le logo</button>
                      <span className="text-xs text-slate-400">PNG, SVG jusqu'à 2Mo. 512x512 conseillé.</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-wider" htmlFor="platform-name">Nom du portail</label>
                  <div className="md:col-span-3">
                    <input className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-indigo-500 transition-all outline-none" id="platform-name" type="text" defaultValue="The Violet Protocol"/>
                  </div>
                </div>
              </div>
            </section>

            {/* Language Section */}
            <section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-indigo-600">language</span>
                <h2 className="text-xl font-bold">Langue par défaut</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Système</label>
                <div className="md:col-span-3 relative">
                  <select className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-indigo-500 transition-all outline-none appearance-none cursor-pointer">
                    <option value="fr">Français (France)</option>
                    <option value="en">English (UK)</option>
                    <option value="de">Deutsch</option>
                    <option value="es">Español</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">expand_more</span>
                </div>
              </div>
            </section>

            {/* Maintenance Toggle Section */}
            <section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600">
                    <span className="material-symbols-outlined">construction</span>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold">Mode Maintenance</h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Désactivez temporairement l'accès public au portail.</p>
                  </div>
                </div>
                <label className="inline-flex items-center cursor-pointer">
                  <input className="sr-only peer" type="checkbox" />
                  <div className="relative w-14 h-7 bg-slate-200 dark:bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>
            </section>

            {/* Primary Action */}
            <div className="flex justify-end">
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-indigo-700 transition-colors flex items-center gap-2 shadow-lg shadow-indigo-600/20">
                <span className="material-symbols-outlined text-sm">save</span>
                Enregistrer les modifications
              </button>
            </div>
          </div>

          {/* Right Column: Sidebar Info */}
          <aside className="space-y-8">
            {/* System Info Card */}
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-slate-900 dark:text-white">Informations Système</h3>
                <span className="material-symbols-outlined text-indigo-600">history</span>
              </div>
              <div className="space-y-6">
                <div className="flex items-center justify-between group">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Version</span>
                  <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-[10px] font-bold px-2 py-1 rounded">v2.4.1-purple</span>
                </div>
                <div className="flex items-center justify-between group">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Dernier Backup</span>
                  <span className="text-sm text-slate-600 dark:text-slate-300 font-medium">Il y a 2h 14min</span>
                </div>
                <div className="pt-4 space-y-4 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span className="text-sm font-medium">Moteur de Curation : Stable</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span className="text-sm font-medium">Base de données : Optimisée</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-orange-400"></div>
                    <span className="text-sm font-medium">Sync Cloud : En cours...</span>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Insight Component */}
            <div className="bg-indigo-600 text-white rounded-xl p-6 shadow-lg shadow-indigo-600/20 relative overflow-hidden group">
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-indigo-100 mb-2">
                  <span className="material-symbols-outlined text-lg">auto_awesome</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest">AI Insight</span>
                </div>
                <p className="text-sm italic leading-relaxed text-indigo-50">
                  "L'activation du mode maintenance est recommandée le dimanche à 03:00 GMT pour minimiser l'impact sur les curations actives."
                </p>
              </div>
              <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-700">
                <span className="material-symbols-outlined text-8xl">bolt</span>
              </div>
            </div>

            {/* Help Resource */}
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
              <h4 className="font-bold text-slate-900 dark:text-white mb-2">Besoin d'aide ?</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Consultez la documentation technique sur la configuration des protocoles.</p>
              <a className="text-sm font-bold text-indigo-600 hover:text-indigo-700 transition-colors inline-flex items-center gap-1" href="#">
                Voir le guide <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </aside>
        </div>
      </div>
    </AdminLayout>
  );
};

export default ParametresAdmin;
