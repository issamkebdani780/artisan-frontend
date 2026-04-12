import React, { useState, useEffect } from 'react';
import AdminLayout from '../layouts/AdminLayout';
import apiService from '../services/api';

const ParametresAdmin = () => {
  const [isSaving, setIsSaving] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    // Attempt to load current admin email from storage
    try {
      const userStr = localStorage.getItem('user');
      if (userStr) {
        const user = JSON.parse(userStr);
        if (user.email) setEmail(user.email);
      }
    } catch (err) {}
  }, []);

  const handleSave = async () => {
    setError(null);
    if (password && password !== passwordConfirm) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    setIsSaving(true);
    try {
      const data = { email };
      if (password) data.password = password;
      
      await apiService.updateAdminSettings(data);
      
      // Update local storage if email changed
      const userStr = localStorage.getItem('user');
      if (userStr) {
        const user = JSON.parse(userStr);
        user.email = email;
        localStorage.setItem('user', JSON.stringify(user));
      }

      alert('Identifiants mis Ã  jour avec succÃ¨s! ' + (password ? 'Mot de passe modifiÃ©.' : ''));
      setPassword('');
      setPasswordConfirm('');
    } catch (err) {
      setError(err.message || 'Une erreur est survenue lors de la sauvegarde.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <AdminLayout title="ParamÃ¨tres SystÃ¨me" subtitle="GÃ©rez vos identifiants">
      <div className="space-y-8 max-w-6xl mx-auto w-full">
        
        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">ParamÃ¨tres Administrateur</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">Mettez Ã  jour vos informations de connexion sÃ©curisÃ©es pour le portail d'administration.</p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start">
          
          {/* Left Column: Dynamic Content */}
          <div className="xl:col-span-2 space-y-8">
            
            <section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-indigo-600">manage_accounts</span>
                <h2 className="text-xl font-bold">Identifiants de Connexion</h2>
              </div>
              
              {error && (
                <div className="mb-6 p-4 bg-red-50 text-red-700 text-sm font-medium rounded-xl border border-red-100 flex items-center gap-2">
                  <span className="material-symbols-outlined text-red-500">error</span>
                  {error}
                </div>
              )}

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-wider" htmlFor="admin-email">Adresse Email</label>
                  <div className="md:col-span-3">
                    <input 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-indigo-500 transition-all outline-none" 
                      id="admin-email" 
                      type="email" 
                      placeholder="admin@bricolopro.com" 
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-wider" htmlFor="admin-pass">Nouveau Mot de passe</label>
                  <div className="md:col-span-3">
                    <input 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-indigo-500 transition-all outline-none" 
                      id="admin-pass" 
                      type="password" 
                      placeholder="Laissez vide pour conserver l'actuel" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-wider" htmlFor="admin-pass-confirm">Confirmer</label>
                  <div className="md:col-span-3">
                    <input 
                      value={passwordConfirm}
                      onChange={(e) => setPasswordConfirm(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-indigo-500 transition-all outline-none" 
                      id="admin-pass-confirm" 
                      type="password" 
                      placeholder="âDA¢âDA¢âDA¢âDA¢âDA¢âDA¢âDA¢âDA¢" 
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Primary Action */}
            <div className="flex justify-end pt-4">
              <button 
                onClick={handleSave}
                disabled={isSaving}
                className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-indigo-700 transition-all flex items-center gap-2 shadow-lg shadow-indigo-600/20 disabled:opacity-70 disabled:cursor-wait"
              >
                {isSaving ? (
                  <span className="material-symbols-outlined text-sm animate-spin">sync</span>
                ) : (
                  <span className="material-symbols-outlined text-sm">lock_reset</span>
                )}
                {isSaving ? 'Enregistrement...' : 'Mettre Ã  jour les accÃ¨s'}
              </button>
            </div>
          </div>

          {/* Right Column: Sidebar Info */}
          <aside className="space-y-8">
            <div className="bg-indigo-600 text-white rounded-xl p-6 shadow-lg shadow-indigo-600/20 relative overflow-hidden group">
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-indigo-100 mb-2">
                  <span className="material-symbols-outlined text-lg">security_update_good</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest">Avis SÃ©curitÃ©</span>
                </div>
                <p className="text-sm italic leading-relaxed text-indigo-50">
                  "Utilisez un gestionnaire de mots de passe professionnel et modifiez ces identifiants tous les 90 jours afin de prÃ©server l'intÃ©gritÃ© de la plateforme."
                </p>
              </div>
              <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-700">
                <span className="material-symbols-outlined text-8xl">verified_user</span>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
              <h4 className="font-bold text-slate-900 dark:text-white mb-2">Historique Compte</h4>
              <ul className="space-y-3 mt-4">
                <li className="flex justify-between items-center text-xs text-slate-500">
                  <span>DerniÃ¨re connexion</span>
                  <span className="font-bold text-slate-700">Aujourd'hui, 08:30</span>
                </li>
                <li className="flex justify-between items-center text-xs text-slate-500">
                  <span>Dernier IP connu</span>
                  <span className="font-mono text-slate-700">192.168.1.1</span>
                </li>
                <li className="flex justify-between items-center text-xs text-slate-500">
                  <span>Mdp mis Ã  jour</span>
                  <span className="font-bold text-emerald-600">Il y a 4 mois</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </AdminLayout>
  );
};

export default ParametresAdmin;
