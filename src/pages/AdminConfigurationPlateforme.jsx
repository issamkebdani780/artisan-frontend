import React from 'react';
import AdminLayout from '../layouts/AdminLayout';

const AdminConfigurationPlateforme = () => {
  return (
    <AdminLayout title="Configuration" subtitle="Violet Protocol">
      <div className="p-8 space-y-8 flex-1 overflow-y-auto max-w-6xl mx-auto w-full">
        
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">Configuration de la Plateforme</h2>
          <p className="text-slate-500 max-w-2xl">Gérez l'identité visuelle, les préférences linguistiques et les paramètres opérationnels de votre instance Violet Protocol.</p>
        </div>

        {/* Tabbed Navigation */}
        <div className="flex space-x-8 mb-10 border-b border-slate-200">
          <a className="pb-4 text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors" href="#">Mon compte</a>
          <a className="pb-4 text-sm font-bold text-indigo-600 border-b-2 border-indigo-600 transition-all" href="#">Configuration Plateforme</a>
          <a className="pb-4 text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors" href="#">Notifications</a>
          <a className="pb-4 text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors" href="#">Logs & Audit</a>
        </div>

        {/* Bento Layout Settings */}
        <div className="grid grid-cols-12 gap-8">
          
          {/* General Settings Column */}
          <div className="col-span-12 lg:col-span-7 space-y-8">
            
            {/* Language & Region */}
            <section className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 transition-all hover:shadow-md">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                  <span className="material-symbols-outlined text-2xl">language</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Langue & Région</h3>
                  <p className="text-xs text-slate-500">Définissez la langue par défaut de l'interface</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button className="flex flex-col items-center justify-center p-4 rounded-lg border-2 border-indigo-600 bg-indigo-50 transition-all">
                  <span className="text-2xl mb-2">ðŸ‡«ðŸ‡·</span>
                  <span className="text-sm font-semibold">Français</span>
                  <span className="text-[10px] text-indigo-600 uppercase font-bold mt-1">Actif</span>
                </button>
                <button className="flex flex-col items-center justify-center p-4 rounded-lg border-2 border-transparent bg-slate-50 hover:bg-slate-100 transition-all">
                  <span className="text-2xl mb-2">ðŸ‡¸ðŸ‡¦</span>
                  <span className="text-sm font-medium">Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©</span>
                </button>
                <button className="flex flex-col items-center justify-center p-4 rounded-lg border-2 border-transparent bg-slate-50 hover:bg-slate-100 transition-all">
                  <span className="text-2xl mb-2">ðŸ‡¬ðŸ‡§</span>
                  <span className="text-sm font-medium">English</span>
                </button>
              </div>
            </section>

            {/* Service Categories */}
            <section className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                    <span className="material-symbols-outlined text-2xl">category</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Catégories de Services</h3>
                    <p className="text-xs text-slate-500">Gérer les types de services opérationnels</p>
                  </div>
                </div>
                <button className="text-indigo-600 text-sm font-bold flex items-center hover:opacity-80">
                  <span className="material-symbols-outlined mr-1">add_circle</span>
                  Ajouter
                </button>
              </div>
              <div className="space-y-3">
                {['Curation Digitale', 'Audit de Données', 'Support Client'].map((cat, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg group hover:bg-slate-100 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-indigo-600' : i === 1 ? 'bg-orange-500' : 'bg-slate-400'}`}></div>
                      <span className="text-sm font-medium">{cat}</span>
                    </div>
                    <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1 hover:text-indigo-600"><span className="material-symbols-outlined text-sm">edit</span></button>
                      <button className="p-1 hover:text-red-500"><span className="material-symbols-outlined text-sm">delete</span></button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Branding & Mode */}
          <div className="col-span-12 lg:col-span-5 space-y-8">
            
            {/* Maintenance Mode */}
            <div className="bg-indigo-600 bg-linear-to-br from-indigo-600 to-indigo-700 text-white rounded-xl p-8 shadow-xl shadow-indigo-600/20 relative overflow-hidden group">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-xl">Mode Maintenance</h3>
                  <div className="relative inline-flex items-center cursor-pointer">
                    <input className="sr-only peer" type="checkbox" />
                    <div className="w-11 h-6 bg-white/20 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-white/40"></div>
                  </div>
                </div>
                <p className="text-white/80 text-sm leading-relaxed mb-6">Activez ce mode pour suspendre l'accès public. Les administrateurs gardent un accès complet.</p>
                <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest bg-white/10 w-fit px-3 py-1 rounded-full">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span>Plateforme en ligne</span>
                </div>
              </div>
              <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform duration-500">
                <span className="material-symbols-outlined text-[160px]">engineering</span>
              </div>
            </div>

            {/* Branding Settings */}
            <section className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold mb-8">Personnalisation (Branding)</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Logo de la Plateforme</label>
                  <div className="flex items-center space-x-6 p-4 border-2 border-dashed border-slate-200 rounded-xl hover:border-indigo-600/50 transition-colors cursor-pointer group">
                    <div className="w-16 h-16 bg-slate-50 flex items-center justify-center rounded-lg text-slate-400">
                      <span className="material-symbols-outlined text-3xl">upload_file</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold group-hover:text-indigo-600 transition-colors">Remplacer le logo</p>
                      <p className="text-[10px] text-slate-500">PNG, SVG (max. 2MB)</p>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Couleur Primaire</label>
                  <div className="flex flex-wrap gap-3">
                    <button className="w-10 h-10 rounded-full bg-indigo-600 ring-4 ring-indigo-100 ring-offset-2"></button>
                    <button className="w-10 h-10 rounded-full bg-blue-600 hover:scale-110 transition-transform"></button>
                    <button className="w-10 h-10 rounded-full bg-emerald-600 hover:scale-110 transition-transform"></button>
                    <button className="w-10 h-10 rounded-full bg-rose-600 hover:scale-110 transition-transform"></button>
                    <button className="w-10 h-10 rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center">
                      <span className="material-symbols-outlined text-sm">palette</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Insight Tip */}
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-indigo-600 border border-slate-200">
              <div className="flex items-start space-x-4">
                <span className="material-symbols-outlined text-indigo-600 mt-1">lightbulb</span>
                <div>
                  <p className="text-sm font-bold mb-1 text-slate-900">Conseil d'optimisation</p>
                  <p className="text-xs text-slate-500 leading-relaxed">Changer la couleur primaire mettra à jour instantanément tous les composants pour maintenir la cohérence de la marque.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Action Bar */}
        <div className="mt-12 flex justify-end space-x-4 border-t border-slate-200 pt-8">
          <button className="px-6 py-3 text-sm font-bold text-slate-500 hover:bg-slate-100 rounded-lg transition-all">Annuler les modifications</button>
          <button className="px-8 py-3 bg-linear-to-r from-indigo-600 to-indigo-700 text-white text-sm font-bold rounded-lg shadow-lg shadow-indigo-600/30 hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all">
            Enregistrer les modifications
          </button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminConfigurationPlateforme;

