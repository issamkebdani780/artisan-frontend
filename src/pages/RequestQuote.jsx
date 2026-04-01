import React from 'react';

const RequestQuote = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 w-full flex-col font-sans">
      
      {/* Top Navigation Bar */}
      <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 py-4 md:px-20 lg:px-40 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <div className="size-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
            <span className="material-symbols-outlined">construction</span>
          </div>
          <h2 className="text-xl font-bold tracking-tight">Demander un devis</h2>
        </div>
        <button className="flex items-center justify-center rounded-full h-10 w-10 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 transition-colors">
          <span className="material-symbols-outlined text-slate-600 dark:text-slate-300">close</span>
        </button>
      </header>

      <main className="flex-1 px-4 py-8 md:px-20 lg:px-40">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
          
          {/* Main Form Section */}
          <div className="flex-1 space-y-8">
            <section>
              <h1 className="text-3xl font-bold mb-2">Parlez-nous de votre projet</h1>
              <p className="text-slate-600 dark:text-slate-400">Remplissez ce formulaire pour recevoir un devis personnalisé de la part de l'artisan.</p>
            </section>
            
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              
              {/* Project Details */}
              <div className="space-y-6">
                <h3 className="text-lg font-bold border-b border-slate-100 dark:border-slate-800 pb-2">1. Détails du projet</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-semibold">Titre du projet</span>
                    <input type="text" placeholder="Ex: Rénovation salle de bain" className="px-4 rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none h-12 transition-all" />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-semibold">Catégorie</span>
                    <select className="px-4 rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none h-12 transition-all">
                      <option>Plomberie</option>
                      <option>Électricité</option>
                      <option>Peinture</option>
                      <option>Menuiserie</option>
                    </select>
                  </label>
                  <label className="flex flex-col gap-2 md:col-span-2">
                    <span className="text-sm font-semibold">Numéro de téléphone</span>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
                        <span className="material-symbols-outlined text-sm">call</span>
                      </span>
                      <input type="tel" placeholder="+33 6 00 00 00 00" className="w-full pl-10 pr-4 rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none h-12 transition-all" />
                    </div>
                  </label>
                </div>
              </div>

              {/* Description Section */}
              <div className="space-y-6">
                <h3 className="text-lg font-bold border-b border-slate-100 dark:border-slate-800 pb-2">2. Description détaillée</h3>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold">Décrivez votre besoin</span>
                  <textarea rows="4" placeholder="Veuillez donner le plus de détails possible sur les travaux à réaliser..." className="rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none p-4 transition-all"></textarea>
                </label>
              </div>

              {/* Location & Photos */}
              <div className="space-y-6">
                <h3 className="text-lg font-bold border-b border-slate-100 dark:border-slate-800 pb-2">3. Localisation et Photos</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-semibold">Adresse ou Ville</span>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
                        <span className="material-symbols-outlined text-sm">location_on</span>
                      </span>
                      <input type="text" placeholder="Paris, France" className="w-full pl-10 pr-4 rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none h-12 transition-all" />
                    </div>
                  </label>
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-semibold">Photos du projet</span>
                    <div className="border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-lg h-12 flex items-center justify-center cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <span className="material-symbols-outlined mr-2 text-blue-600">cloud_upload</span>
                      <span className="text-sm text-slate-500">Ajouter des photos</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Budget & Timing */}
              <div className="space-y-6">
                <h3 className="text-lg font-bold border-b border-slate-100 dark:border-slate-800 pb-2">4. Budget et Délai</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-semibold">Budget estimé (€)</span>
                    <input type="number" placeholder="Ex: 1500" className="px-4 rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none h-12 transition-all" />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-semibold">Date de début souhaitée</span>
                    <input type="date" className="px-4 rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none h-12 transition-all text-slate-500" />
                  </label>
                </div>
              </div>

              {/* Preferences */}
              <div className="space-y-6">
                <h3 className="text-lg font-bold border-b border-slate-100 dark:border-slate-800 pb-2">5. Préférence de contact</h3>
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center gap-3 p-4 rounded-lg border border-slate-200 dark:border-slate-700 cursor-pointer hover:border-blue-600 transition-all has-[:checked]:border-blue-600 has-[:checked]:bg-blue-600/5 hover:bg-slate-50 dark:hover:bg-slate-800">
                    <input type="radio" name="contact" value="email" defaultChecked className="text-blue-600 focus:ring-blue-600 w-4 h-4 accent-blue-600" />
                    <span className="flex flex-col">
                      <span className="font-medium text-sm">Email</span>
                    </span>
                  </label>
                  <label className="flex items-center gap-3 p-4 rounded-lg border border-slate-200 dark:border-slate-700 cursor-pointer hover:border-blue-600 transition-all has-[:checked]:border-blue-600 has-[:checked]:bg-blue-600/5 hover:bg-slate-50 dark:hover:bg-slate-800">
                    <input type="radio" name="contact" value="phone" className="text-blue-600 focus:ring-blue-600 w-4 h-4 accent-blue-600" />
                    <span className="flex flex-col">
                      <span className="font-medium text-sm">Téléphone</span>
                    </span>
                  </label>
                  <label className="flex items-center gap-3 p-4 rounded-lg border border-slate-200 dark:border-slate-700 cursor-pointer hover:border-blue-600 transition-all has-[:checked]:border-blue-600 has-[:checked]:bg-blue-600/5 hover:bg-slate-50 dark:hover:bg-slate-800">
                    <input type="radio" name="contact" value="whatsapp" className="text-blue-600 focus:ring-blue-600 w-4 h-4 accent-blue-600" />
                    <span className="flex flex-col">
                      <span className="font-medium text-sm">WhatsApp</span>
                    </span>
                  </label>
                </div>
              </div>

              <button type="submit" className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
                Envoyer ma demande de devis
              </button>
            </form>
          </div>

          {/* Sidebar: Artisan Summary */}
          <aside className="w-full lg:w-[380px]">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <img src="https://images.unsplash.com/photo-1542037104857-ffbb0b915546?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=60" alt="Ahmed Mansouri" className="size-16 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-lg">Ahmed Mansouri</h4>
                    <p className="text-sm text-slate-500 flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs text-yellow-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      4.9 (124 avis)
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-blue-600">verified</span>
                    <div>
                      <p className="text-sm font-semibold">Artisan vérifié</p>
                      <p className="text-xs text-slate-500">Documents et identité validés</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-blue-600">history</span>
                    <div>
                      <p className="text-sm font-semibold">Réponse rapide</p>
                      <p className="text-xs text-slate-500">Répond généralement en moins de 2h</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-blue-600">handshake</span>
                    <div>
                      <p className="text-sm font-semibold">Garantie Travaux</p>
                      <p className="text-xs text-slate-500">Assurance décennale à jour</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                  <p className="text-sm text-slate-600 dark:text-slate-400 italic">
                    "Je suis spécialisé dans la rénovation intérieure et la plomberie depuis plus de 10 ans. Je m'engage à fournir un travail soigné et durable."
                  </p>
                </div>
              </div>

              {/* Mini Map Preview */}
              <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 h-40 relative">
                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="Map" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                  <div className="bg-white px-3 py-1 rounded-full shadow-lg flex items-center gap-2">
                    <span className="material-symbols-outlined text-blue-600 text-sm">location_on</span>
                    <span className="text-xs font-bold text-slate-800">Zone d'intervention : Paris & IDF</span>
                  </div>
                </div>
              </div>

            </div>
          </aside>
          
        </div>
      </main>

      <footer className="mt-20 border-t border-slate-200 dark:border-slate-800 py-10 text-center text-slate-500 text-sm">
        <p>© 2024 Plateforme Artisan - Tous droits réservés.</p>
      </footer>
      
    </div>
  );
};

export default RequestQuote;
