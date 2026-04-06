import React, { useState } from 'react';
import ArtisanLayout from '../layouts/ArtisanLayout';
import apiService from '../services/api';

const ArtisanSettings = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [form, setForm] = useState({
    name: user?.name || '',
    specialty: user?.specialty ? user.specialty.split(',').map(s => s.trim()) : [],
    phone: user?.phone || '',
    address: user?.address || '',
    experience_years: user?.experience_years || 0,
    profile_pic: user?.profile_pic || 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=60'
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordForm, setPasswordForm] = useState({ current: '', new: '', confirm: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const submissionData = {
        ...form,
        specialty: Array.isArray(form.specialty) ? form.specialty.join(', ') : form.specialty
      };
      await apiService.updateProfile(user.id, submissionData);
      const updatedUser = { ...user, ...submissionData };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setMessage({ text: 'Profil mis à jour avec succès !', type: 'success' });
    } catch (err) {
      setMessage({ text: 'Erreur lors de la mise à jour.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    if (passwordForm.new !== passwordForm.confirm) {
      alert('Les nouveaux mots de passe ne correspondent pas');
      return;
    }
    
    console.log(`Sending password change request for user ${user?.id}...`);
    setLoading(true);
    try {
      const result = await apiService.changePassword(user.id, passwordForm.current, passwordForm.new);
      console.log('Result from server:', result);
      
      if (result.error) {
        alert(result.error);
        setMessage({ text: result.error, type: 'error' });
      } else {
        setMessage({ text: 'Mot de passe mis à jour avec succès !', type: 'success' });
        setShowPasswordModal(false);
        setPasswordForm({ current: '', new: '', confirm: '' });
      }
    } catch (err) {
      console.error('API Error:', err);
      alert('Une erreur serveur est survenue.');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteAccount = () => {
    if (window.confirm('Êtes-vous certain de vouloir supprimer votre compte ? Cette action est irréversible.')) {
      alert('Action simulée : Votre compte a été marqué pour suppression.');
      // Logic for actual deletion would go here
    }
  };

  return (
    <ArtisanLayout title="Artisan PRO" subtitle="Paramètres du compte">
      <div className="flex-1 overflow-y-auto font-['Outfit',sans-serif]">

        <header className="px-8 py-8">
          <h2 className="text-3xl font-black tracking-tight mb-2 text-slate-900 dark:text-white">Paramètres</h2>
          <p className="text-slate-500 dark:text-slate-400">Gérez vos informations personnelles et les préférences de votre compte.</p>
        </header>

        <div className="px-8 pb-12 flex flex-col gap-8 max-w-4xl">
          {message.text && (
            <div className={`p-4 rounded-xl flex items-center gap-3 ${message.type === 'success' ? 'bg-emerald-50 text-emerald-700 border-l-4 border-emerald-500' : 'bg-red-50 text-red-700 border-l-4 border-red-500'}`}>
              <span className="material-symbols-outlined">{message.type === 'success' ? 'check_circle' : 'error'}</span>
              <p className="font-bold text-sm">{message.text}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            <section className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-bold mb-6 text-slate-900 dark:text-white">Informations sur le profil</h3>
              <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
                <div className="relative group shrink-0">
                  <div className="h-32 w-32 rounded-full overflow-hidden border-4 border-slate-50 shadow-sm bg-slate-100">
                    <img src={form.profile_pic} alt="Avatar" className="h-full w-full object-cover" />
                  </div>
                  <button type="button" className="absolute bottom-0 right-0 bg-secondary text-white p-2 rounded-full shadow-lg hover:scale-105 transition-transform flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm">photo_camera</span>
                  </button>
                </div>

                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Nom complet</label>
                    <input name="name" value={form.name} onChange={handleChange} type="text" className="w-full rounded-lg border border-slate-200 bg-slate-50 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none px-4 py-2 transition-all font-medium text-slate-900" />
                  </div>
                  <div className="flex flex-col gap-1.5 md:col-span-2">
                    <div className="flex items-center justify-between mb-1">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Spécialités (Catégories multiples)</label>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">(Ctrl/Cmd click pour plusieurs)</span>
                    </div>
                    <select multiple name="specialty" value={form.specialty} onChange={(e) => {
                      const options = Array.from(e.target.selectedOptions, option => option.value);
                      setForm({ ...form, specialty: options });
                    }} className="w-full h-32 rounded-lg border border-slate-200 bg-slate-50 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none px-4 py-2 transition-all font-medium text-slate-900 overflow-y-auto custom-scrollbar">
                      <optgroup label="Menuiserie et Bois">
                        <option>Menuisier ébéniste</option>
                        <option>Menuisier de chantier (coffreur)</option>
                        <option>Presseur de bois</option>
                        <option>Décorateur bois intérieur</option>
                        <option>Fabricant de portes et fenêtres en bois</option>
                      </optgroup>
                      <optgroup label="Ferronnerie et Soudure">
                        <option>Ferronnier d’art</option>
                        <option>Soudeur (arc et argon)</option>
                        <option>Ferronnier métallier (portails et grilles)</option>
                        <option>Chaudronnier industriel</option>
                        <option>Soudeur carrosserie auto</option>
                      </optgroup>
                      <optgroup label="Plomberie et Réseaux">
                        <option>Plombier sanitaire</option>
                        <option>Plombier chauffage central</option>
                        <option>Monteur de réseaux de gaz</option>
                        <option>Installateur tuyauterie cuivre et PER</option>
                        <option>Plombier maintenance eau</option>
                      </optgroup>
                      <optgroup label="Électricité et Énergie">
                        <option>Électricien bâtiment</option>
                        <option>Électricien industriel</option>
                        <option>Technicien solaire photovoltaïque</option>
                        <option>Tireur de câbles et filerie</option>
                        <option>Réparateur tableaux électriques</option>
                      </optgroup>
                      <optgroup label="Peinture et Plâtre">
                        <option>Peintre décorateur</option>
                        <option>Peintre automobile</option>
                        <option>Plâtrier staffeur</option>
                        <option>Marbrier (ponçage et lustrage)</option>
                        <option>Vernisseur sur bois</option>
                      </optgroup>
                      <optgroup label="Maçonnerie et Finitions">
                        <option>Maçon (brique et ciment)</option>
                        <option>Carreleur (faïence et marbre)</option>
                        <option>Crépisseur (enduits traditionnels)</option>
                        <option>Technicien isolation thermique et étanchéité</option>
                        <option>Maçon rénovation</option>
                      </optgroup>
                      <optgroup label="Mécanique et Machines">
                        <option>Mécanicien automobile</option>
                        <option>Mécanicien moto</option>
                        <option>Technicien moteurs électriques</option>
                        <option>Réparateur groupes électrogènes et pompes</option>
                        <option>Mécanicien agricole</option>
                      </optgroup>
                      <optgroup label="Couture et Cuir">
                        <option>Tailleur homme</option>
                        <option>Couturière sur mesure (femme)</option>
                        <option>Rapiéceur retouche</option>
                        <option>Cordonnier (chaussures cuir)</option>
                        <option>Maroquinier (sellerie et petite maroquinerie)</option>
                      </optgroup>
                      <optgroup label="Verre et Miroiterie">
                        <option>Menuisier aluminium et verre</option>
                        <option>Verrier (coupe verre trempé)</option>
                        <option>Miroitier (pose miroirs et décor verre)</option>
                        <option>Vitrier automobile</option>
                        <option>Souffleur de verre artisanal</option>
                      </optgroup>
                      <optgroup label="Métiers alimentaires artisanaux">
                        <option>Boulanger traditionnel</option>
                        <option>Pâtissier (oriental et viennoiserie)</option>
                        <option>Fromager artisanal</option>
                        <option>Apiculteur (miel et dérivés)</option>
                        <option>Artisan conserveur (pickles et bocaux)</option>
                      </optgroup>
                      <optgroup label="Jardinage et Espaces Verts">
                        <option>Jardinier paysagiste</option>
                        <option>Ouvrier en aménagement des espaces verts</option>
                        <option>Technicien en entretien des jardins</option>
                        <option>Technicien en irrigation goutte-à-goutte et arrosage</option>
                        <option>Élagueur et tailleur d’arbres et palmiers</option>
                      </optgroup>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Téléphone</label>
                    <input name="phone" value={form.phone} onChange={handleChange} type="tel" className="w-full rounded-lg border border-slate-200 bg-slate-50 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none px-4 py-2 transition-all font-medium text-slate-900" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Années d'expérience</label>
                    <input name="experience_years" value={form.experience_years} onChange={handleChange} type="number" className="w-full rounded-lg border border-slate-200 bg-slate-50 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none px-4 py-2 transition-all font-medium text-slate-900" />
                  </div>
                  <div className="flex flex-col gap-1.5 md:col-span-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Adresse</label>
                    <input name="address" value={form.address} onChange={handleChange} type="text" className="w-full rounded-lg border border-slate-200 bg-slate-50 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none px-4 py-2 transition-all font-medium text-slate-900" />
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <button type="submit" disabled={loading} className="bg-secondary text-white px-8 py-3 rounded-xl font-black text-sm hover:opacity-90 transition-all flex items-center gap-2 shadow-lg shadow-secondary/20 disabled:opacity-50">
                  {loading ? 'Mise à jour...' : 'Enregistrer les modifications'}
                  {!loading && <span className="material-symbols-outlined text-sm">save</span>}
                </button>
              </div>
            </section>
          </form>

          {/* Section: Sécurité du compte */}
          <section className="bg-white dark:bg-slate-800 rounded-3xl p-10 border border-slate-200/60 dark:border-slate-700 shadow-sm">
            <div className="flex items-center gap-3 mb-8 text-slate-900 dark:text-white">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                <span className="material-symbols-outlined font-black">shield</span>
              </div>
              <h3 className="text-xl font-black tracking-tight">Sécurité du compte</h3>
            </div>
            
            <div className="p-2 bg-slate-50/50 rounded-2xl border border-slate-100">
              <div className="flex flex-col md:flex-row md:items-center justify-between p-6 rounded-xl bg-white border border-slate-200/50 shadow-xs">
                <div className="flex items-center gap-4">
                  <div className="size-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400">
                    <span className="material-symbols-outlined">lock</span>
                  </div>
                  <div>
                    <p className="font-black text-slate-900">Mot de passe</p>
                    <p className="text-sm text-slate-500 mt-0.5 font-medium">Dernière modification il y a 3 mois</p>
                  </div>
                </div>
                <button 
                  type="button" 
                  onClick={() => setShowPasswordModal(true)}
                  className="mt-4 md:mt-0 px-8 py-2.5 bg-white border-2 border-slate-100 rounded-xl text-sm font-black text-slate-700 hover:bg-slate-50 hover:border-slate-200 transition-all shadow-sm"
                >
                  Modifier
                </button>
              </div>
            </div>
          </section>

          {/* Section: Zone de danger */}
          <section className="bg-red-50/50 rounded-3xl p-10 border border-red-100/80 flex flex-col md:flex-row md:items-center justify-between gap-6 overflow-hidden relative group">
            <div className="absolute right-0 top-0 w-32 h-32 bg-red-500/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-black text-red-700 mb-2 tracking-tight">Zone de danger</h3>
              <p className="text-sm text-red-600/70 font-bold">Ces actions sont irréversibles. Soyez prudent.</p>
            </div>
            <button 
              type="button" 
              onClick={handleDeleteAccount}
              className="relative z-10 px-8 py-3 bg-white border-2 border-red-500/20 text-red-600 rounded-2xl text-sm font-black hover:bg-red-50 hover:border-red-500 transition-all shadow-sm flex items-center gap-3"
            >
              <span className="material-symbols-outlined text-lg font-bold">delete</span>
              Supprimer mon compte
            </button>
          </section>

        </div>

        {/* Password Change Modal */}
        {showPasswordModal && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in duration-300">
              <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                <h3 className="text-xl font-black text-slate-900">Changer le mot de passe</h3>
                <button onClick={() => setShowPasswordModal(false)} className="text-slate-400 hover:text-slate-600 transition-colors">
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
              <form onSubmit={handlePasswordChange} className="p-8 space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Mot de passe actuel</label>
                  <input 
                    type="password" 
                    required
                    value={passwordForm.current}
                    onChange={(e) => setPasswordForm({...passwordForm, current: e.target.value})}
                    className="w-full h-14 px-5 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-indigo-500 focus:bg-white transition-all outline-none font-medium" 
                    placeholder="••••••••"
                  />
                </div>
                <div className="space-y-4 pt-2">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Nouveau mot de passe</label>
                    <input 
                      type="password" 
                      required
                      value={passwordForm.new}
                      onChange={(e) => setPasswordForm({...passwordForm, new: e.target.value})}
                      className="w-full h-14 px-5 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-indigo-500 focus:bg-white transition-all outline-none font-medium" 
                      placeholder="••••••••"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Confirmer le nouveau</label>
                    <input 
                      type="password" 
                      required
                      value={passwordForm.confirm}
                      onChange={(e) => setPasswordForm({...passwordForm, confirm: e.target.value})}
                      className="w-full h-14 px-5 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-indigo-500 focus:bg-white transition-all outline-none font-medium" 
                      placeholder="••••••••"
                    />
                  </div>
                </div>
                <div className="flex gap-4 pt-4">
                  <button 
                    type="button" 
                    onClick={() => setShowPasswordModal(false)}
                    className="flex-1 h-14 rounded-2xl font-black text-slate-600 hover:bg-slate-100 transition-all border border-slate-200"
                  >
                    Annuler
                  </button>
                  <button 
                    type="submit"
                    className="flex-1 h-14 bg-slate-900 text-white rounded-2xl font-black hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20"
                  >
                    Mettre à jour
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </ArtisanLayout>
  );
};

export default ArtisanSettings;
