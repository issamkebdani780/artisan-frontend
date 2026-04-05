import React from 'react';

const ClientProfileSettings = () => {
  return (
    <div className="flex h-full min-h-screen flex-col font-sans bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">

      {/* Header / Navigation */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 md:px-10 py-3 sticky top-0 z-50">
        <div className="flex items-center gap-4 text-primary">
          <div className="size-8 bg-primary text-white rounded-lg flex items-center justify-center font-black">
            A
          </div>
          <h2 className="text-slate-900 dark:text-slate-50 text-xl font-bold leading-tight tracking-tight">ArtisanDirect</h2>
        </div>
        <div className="flex flex-1 justify-end gap-8 items-center">
          <nav className="hidden md:flex items-center gap-9">
            <a href="/" className="text-slate-700 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors">Accueil</a>
            <a href="#" className="text-primary text-sm font-bold border-b-2 border-primary pb-1">Profil</a>
            <a href="#" className="text-slate-700 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors">Paramètres</a>
          </nav>
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-primary/20" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542037104857-ffbb0b915546?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=60")' }}></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex justify-center py-8 px-4 md:px-0">
        <div className="flex flex-col max-w-[960px] w-full gap-8">

          {/* Page Title & Progress */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="flex flex-wrap justify-between items-end gap-4 mb-6">
              <div className="flex flex-col gap-1">
                <h1 className="text-slate-900 dark:text-slate-50 text-3xl font-black leading-tight tracking-tight">Complétez votre profil</h1>
                <p className="text-slate-500 dark:text-slate-400 text-base">Ces informations nous aident à personnaliser votre expérience sur ArtisanDirect.</p>
              </div>
              <div className="flex flex-col items-end gap-2 min-w-[120px]">
                <div className="flex gap-2 items-center">
                  <span className="text-slate-900 dark:text-slate-50 text-sm font-bold">Progression</span>
                  <span className="text-primary text-sm font-black">65%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div className="h-full rounded-full bg-primary" style={{ width: '65%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>

            {/* Section 1: Informations Personnelles */}
            <section className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary">person</span>
                <h2 className="text-slate-900 dark:text-slate-50 text-xl font-bold">Informations personnelles</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Photo Upload */}
                <div className="flex flex-col items-center gap-4">
                  <div className="relative group cursor-pointer">
                    <div className="size-32 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden border-4 border-slate-50 dark:border-slate-800 shadow-inner">
                      <span className="material-symbols-outlined text-slate-400 text-5xl group-hover:hidden">add_a_photo</span>
                      <img src="https://images.unsplash.com/photo-1542037104857-ffbb0b915546?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=60" alt="Profile" className="w-full h-full object-cover hidden group-hover:block" />
                    </div>
                    <div className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full shadow-lg">
                      <span className="material-symbols-outlined text-sm">edit</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 text-center">JPG, PNG ou GIF. <br /> Max 5 Mo.</p>
                </div>

                {/* Name and Phone */}
                <div className="md:col-span-2 flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Prénom</label>
                      <input type="text" defaultValue="Jean" className="w-full rounded-lg border-slate-300 dark:border-slate-700 dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:outline-none px-4 py-2" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Nom</label>
                      <input type="text" defaultValue="Dupont" className="w-full rounded-lg border-slate-300 dark:border-slate-700 dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:outline-none px-4 py-2" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Numéro de téléphone</label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-500 text-sm">+33</span>
                      <input type="tel" placeholder="06 12 34 56 78" className="w-full rounded-r-lg border-slate-300 dark:border-slate-700 dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:outline-none px-4 py-2" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Localisation */}
            <section className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-[#137fec]">location_on</span>
                <h2 className="text-slate-900 dark:text-slate-50 text-xl font-bold">Localisation</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Adresse</label>
                  <input type="text" placeholder="15 Rue de la Paix" className="w-full rounded-lg border-slate-300 dark:border-slate-700 dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:outline-none px-4 py-2" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Ville</label>
                  <input type="text" placeholder="Paris" className="w-full rounded-lg border-slate-300 dark:border-slate-700 dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:outline-none px-4 py-2" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Code Postal</label>
                  <input type="text" placeholder="75002" className="w-full rounded-lg border-slate-300 dark:border-slate-700 dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:outline-none px-4 py-2" />
                </div>
              </div>
              <div className="mt-6 aspect-video w-full rounded-lg bg-slate-100 overflow-hidden relative border border-slate-200 dark:border-slate-800">
                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="Map Preview" className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-opacity duration-700" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-primary text-white p-2 rounded-full shadow-lg ring-4 ring-white/50">
                    <span className="material-symbols-outlined">person_pin_circle</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Préférences */}
            <section className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-[#137fec]">settings</span>
                <h2 className="text-slate-900 dark:text-slate-50 text-xl font-bold">Préférences</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-4">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Langue préférée</label>
                  <select className="w-full rounded-lg border-slate-300 dark:border-slate-700 dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:outline-none px-4 py-2">
                    <option value="fr">Français</option>
                    <option value="en">English</option>
                    <option value="es">Español</option>
                  </select>
                </div>
                <div className="flex flex-col gap-4">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Notifications</label>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" defaultChecked className="rounded text-primary focus:ring-primary size-5 border-slate-300 dark:border-slate-700 dark:bg-slate-800" />
                      <span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors">Alertes de nouveaux messages</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" defaultChecked className="rounded text-primary focus:ring-primary size-5 border-slate-300 dark:border-slate-700 dark:bg-slate-800" />
                      <span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors">Mises à jour des projets</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="rounded text-primary focus:ring-primary size-5 border-slate-300 dark:border-slate-700 dark:bg-slate-800" />
                      <span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors">Offres promotionnelles</span>
                    </label>
                  </div>
                </div>
              </div>
            </section>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row justify-end gap-4 pb-12">
              <button type="button" className="px-8 py-3 rounded-lg font-bold text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                Annuler
              </button>
              <button type="submit" className="px-8 py-3 rounded-lg font-bold bg-primary text-white hover:bg-primary/90 shadow-md shadow-primary/20 transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-base">save</span>
                Enregistrer les modifications
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12 mt-auto">
        <div className="max-w-[960px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <div className="flex items-center gap-2 text-primary">
              <div className="size-6 bg-primary text-white rounded-[4px] flex items-center justify-center font-black text-xs">
                A
              </div>
              <span className="font-black text-slate-900 dark:text-slate-50">ArtisanDirect</span>
            </div>
            <p className="text-sm text-slate-500">La plateforme n°1 pour trouver vos artisans locaux.</p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-sm text-slate-500 hover:text-primary">Conditions d'utilisation</a>
            <a href="#" className="text-sm text-slate-500 hover:text-primary">Confidentialité</a>
            <a href="#" className="text-sm text-slate-500 hover:text-primary">Support</a>
          </div>
          <p className="text-sm text-slate-500">© 2024 ArtisanDirect Inc.</p>
        </div>
      </footer>
    </div>
  );
};

export default ClientProfileSettings;
