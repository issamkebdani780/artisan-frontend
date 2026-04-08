import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArtisanLayout from '../layouts/ArtisanLayout';
import apiService from '../services/api';

const ArtisanSettings = () => {
  const navigate = useNavigate();
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

  const categoryGroups = [
    {
      group: "Menuiserie et Bois",
      options: ["Menuisier ébéniste", "Menuisier de chantier (coffreur)", "Presseur de bois", "Décorateur bois intérieur", "Fabricant de portes et fenêtres en bois"]
    },
    {
      group: "Ferronnerie et Soudure",
      options: ["Ferronnier d’art", "Soudeur (arc et argon)", "Ferronnier métallier (portails et grilles)", "Chaudronnier industriel", "Soudeur carrosserie auto"]
    },
    {
      group: "Plomberie et Réseaux",
      options: ["Plombier sanitaire", "Plombier chauffage central", "Monteur de réseaux de gaz", "Installateur tuyauterie cuivre et PER", "Plombier maintenance eau"]
    },
    {
      group: "Électricité et Énergie",
      options: ["Électricien bâtiment", "Électricien industriel", "Technicien solaire photovoltaïque", "Tireur de câbles et filerie", "Réparateur tableaux électriques"]
    },
    {
      group: "Peinture et Plâtre",
      options: ["Peintre décorateur", "Peintre automobile", "Plâtrier staffeur", "Marbrier (ponçage et lustrage)", "Vernisseur sur bois"]
    },
    {
      group: "Maçonnerie et Finitions",
      options: ["Maçon (brique et ciment)", "Carreleur (faïence et marbre)", "Crépisseur (enduits traditionnels)", "Technicien isolation thermique et étanchéité", "Maçon rénovation"]
    },
    {
      group: "Mécanique et Machines",
      options: ["Mécanicien automobile", "Mécanicien moto", "Technicien moteurs électriques", "Réparateur groupes électrogènes et pompes", "Mécanicien agricole"]
    },
    {
      group: "Couture et Cuir",
      options: ["Tailleur homme", "Couturière sur mesure (femme)", "Rapiéceur retouche", "Cordonnier (chaussures cuir)", "Maroquinier (sellerie et petite maroquinerie)"]
    },
    {
      group: "Verre et Miroiterie",
      options: ["Menuisier aluminium et verre", "Verrier (coupe verre trempé)", "Miroitier (pose miroirs et décor verre)", "Vitrier automobile", "Souffleur de verre artisanal"]
    },
    {
      group: "Métiers alimentaires artisanaux",
      options: ["Boulanger traditionnel", "Pâtissier (oriental et viennoiserie)", "Fromager artisanal", "Apiculteur (miel et dérivés)", "Artisan conserveur (pickles et bocaux)"]
    },
    {
      group: "Jardinage et Espaces Verts",
      options: ["Jardinier paysagiste", "Ouvrier en aménagement des espaces verts", "Technicien en entretien des jardins", "Technicien en irrigation goutte-à-goutte et arrosage", "Élagueur et tailleur d’arbres et palmiers"]
    }
  ];

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const toggleSpecialty = (option) => {
    setForm(prev => {
      const isSelected = prev.specialty.includes(option);
      if (isSelected) {
        return { ...prev, specialty: prev.specialty.filter(s => s !== option) };
      } else {
        return { ...prev, specialty: [...prev.specialty, option] };
      }
    });
  };

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

  const handleDeleteAccount = async () => {
    if (window.confirm('🚨 Êtes-vous certain de vouloir supprimer votre compte définitivement ? Toutes vos données (services, projets, avis) seront perdues.')) {
      setLoading(true);
      try {
        await apiService.deleteAccount(user.id);
        alert('Votre compte a été supprimé avec succès.');
        localStorage.clear();
        navigate('/register/artisan');
      } catch (err) {
        alert('Erreur lors de la suppression du compte.');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <ArtisanLayout title="Artisan PRO" subtitle="Paramètres du compte">
      <div className="flex-1 overflow-y-auto font-['Outfit',sans-serif] bg-slate-50/30">

        <header className="px-8 py-10 bg-white border-b border-slate-100">
          <h2 className="text-3xl font-black tracking-tight mb-2 text-slate-900 uppercase">Paramètres</h2>
          <p className="text-slate-500 font-bold">Gérez vos informations personnelles et les préférences de votre compte.</p>
        </header>

        <div className="px-8 py-12 flex flex-col gap-10 max-w-6xl mx-auto">
          {message.text && (
            <div className={`p-6 rounded-[32px] flex items-center gap-4 animate-in fade-in slide-in-from-top-4 duration-500 ${message.type === 'success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-red-50 text-red-700 border border-red-100'}`}>
              <div className={`size-10 rounded-full flex items-center justify-center ${message.type === 'success' ? 'bg-emerald-100' : 'bg-red-100'}`}>
                <span className="material-symbols-outlined">{message.type === 'success' ? 'check_circle' : 'error'}</span>
              </div>
              <p className="font-black tracking-tight text-sm uppercase">{message.text}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-10">
            <section className="bg-white rounded-[40px] p-8 md:p-12 border border-slate-100 shadow-xl shadow-slate-200/40">
              <div className="flex items-center gap-4 mb-10 pb-6 border-b border-slate-50">
                <div className="size-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined font-black">person</span>
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Informations sur le profil</h3>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Identité et spécialités</p>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-12 items-start">
                <div className="relative group shrink-0 mx-auto lg:mx-0">
                  <div className="h-40 w-40 rounded-[40px] overflow-hidden border-4 border-slate-50 shadow-2xl bg-slate-100">
                    <img src={form.profile_pic} alt="Avatar" className="h-full w-full object-cover" />
                  </div>
                  <button type="button" className="absolute -bottom-2 -right-2 bg-secondary text-white size-12 rounded-2xl shadow-xl hover:scale-110 transition-all flex items-center justify-center border-4 border-white active:scale-95">
                    <span className="material-symbols-outlined">photo_camera</span>
                  </button>
                </div>

                <div className="flex-1 space-y-8 w-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-3">
                      <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Nom complet</label>
                      <input name="name" value={form.name} onChange={handleChange} type="text" className="w-full h-16 rounded-2xl border border-slate-100 bg-slate-50/50 focus:border-secondary focus:bg-white outline-none px-6 transition-all font-bold text-slate-900" />
                    </div>
                    <div className="flex flex-col gap-3">
                      <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Téléphone</label>
                      <input name="phone" value={form.phone} onChange={handleChange} type="tel" className="w-full h-16 rounded-2xl border border-slate-100 bg-slate-50/50 focus:border-secondary focus:bg-white outline-none px-6 transition-all font-bold text-slate-900" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 bg-slate-50/50 p-8 rounded-[32px] border border-slate-100">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                      <div>
                        <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 ml-1">Spécialités Professionnelles</label>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1 ml-1">Sélectionnez vos domaines d'expertise</p>
                      </div>
                      <span className="text-[10px] font-black text-secondary uppercase tracking-widest bg-secondary/5 px-4 py-2 rounded-full border border-secondary/10 shadow-sm">{form.specialty.length} sélectionnée(s)</span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-h-[500px] overflow-y-auto pr-4 custom-scrollbar">
                      {categoryGroups.map((group, idx) => (
                        <div key={idx} className="space-y-4">
                          <h4 className="text-[11px] font-black text-slate-800 uppercase tracking-[0.15em] flex items-center gap-2">
                            <span className="w-1.5 h-4 bg-secondary rounded-full"></span>
                            {group.group}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {group.options.map(option => {
                              const isSelected = form.specialty.includes(option);
                              return (
                                <button
                                  key={option}
                                  type="button"
                                  onClick={() => toggleSpecialty(option)}
                                  className={`px-4 py-2.5 rounded-xl text-xs font-black transition-all border-2 ${
                                    isSelected 
                                    ? 'bg-secondary border-secondary text-white shadow-lg shadow-secondary/20 scale-[1.02]' 
                                    : 'bg-white border-slate-100 text-slate-500 hover:border-secondary/30 hover:text-slate-900 shadow-sm'
                                  }`}
                                >
                                  {option}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-3">
                      <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Années d'expérience</label>
                      <input name="experience_years" value={form.experience_years} onChange={handleChange} type="number" className="w-full h-16 rounded-2xl border border-slate-100 bg-slate-50/50 focus:border-secondary focus:bg-white outline-none px-6 transition-all font-bold text-slate-900" />
                    </div>
                    <div className="flex flex-col gap-3">
                      <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Adresse</label>
                      <input name="address" value={form.address} onChange={handleChange} type="text" className="w-full h-16 rounded-2xl border border-slate-100 bg-slate-50/50 focus:border-secondary focus:bg-white outline-none px-6 transition-all font-bold text-slate-900" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-12 pt-8 border-t border-slate-50">
                <button type="submit" disabled={loading} className="bg-secondary text-white px-10 py-5 rounded-[24px] font-black text-sm hover:opacity-90 transition-all flex items-center gap-3 shadow-2xl shadow-secondary/30 disabled:opacity-50 active:scale-95 uppercase tracking-widest">
                  {loading ? 'Mise à jour...' : 'Enregistrer les modifications'}
                  {!loading && <span className="material-symbols-outlined text-xl">save</span>}
                </button>
              </div>
            </section>
          </form>

          {/* Section: Sécurité du compte */}
          <section className="bg-white rounded-[40px] p-8 md:p-12 border border-slate-100 shadow-xl shadow-slate-200/40">
            <div className="flex items-center gap-4 mb-10 pb-6 border-b border-slate-50">
              <div className="size-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-600">
                <span className="material-symbols-outlined font-black">shield</span>
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Sécurité & Accès</h3>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Protection et session</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-8 rounded-[32px] bg-slate-50/50 border border-slate-100 gap-6">
                <div className="flex items-center gap-5">
                  <div className="size-14 bg-white rounded-2xl flex items-center justify-center text-slate-400 shadow-sm">
                    <span className="material-symbols-outlined text-2xl">lock</span>
                  </div>
                  <div>
                    <p className="font-black text-slate-900 uppercase tracking-tight text-sm">Mot de passe</p>
                    <p className="text-[10px] text-slate-500 mt-1 font-bold">Sécurisez votre compte</p>
                  </div>
                </div>
                <button 
                  type="button" 
                  onClick={() => setShowPasswordModal(true)}
                  className="px-6 py-4 bg-white border border-slate-200 rounded-2xl text-[10px] font-black text-slate-700 uppercase tracking-widest hover:bg-slate-50 transition-all shadow-sm active:scale-95 whitespace-nowrap"
                >
                  Modifier
                </button>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-8 rounded-[32px] bg-red-50/30 border border-red-100 gap-6">
                <div className="flex items-center gap-5">
                  <div className="size-14 bg-white rounded-2xl flex items-center justify-center text-red-500 shadow-sm border border-red-50">
                    <span className="material-symbols-outlined text-2xl">logout</span>
                  </div>
                  <div>
                    <p className="font-black text-red-600 uppercase tracking-tight text-sm">Session</p>
                    <p className="text-[10px] text-red-400 mt-1 font-bold uppercase tracking-widest">Quitter la plateforme</p>
                  </div>
                </div>
                <button 
                  type="button" 
                  onClick={() => {
                    apiService.logout();
                    navigate('/');
                  }}
                  className="px-6 py-4 bg-red-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-red-700 transition-all shadow-xl shadow-red-500/20 active:scale-95 whitespace-nowrap"
                >
                  Déconnexion
                </button>
              </div>
            </div>
          </section>

          {/* Section: Zone de danger */}
          <section className="bg-red-50/50 rounded-[40px] p-8 md:p-12 border border-red-100 flex flex-col lg:flex-row lg:items-center justify-between gap-10 overflow-hidden relative group">
            <div className="absolute right-0 top-0 w-80 h-80 bg-red-500/5 rounded-full -translate-x-1/4 -translate-y-1/2 blur-3xl group-hover:bg-red-500/10 transition-colors duration-1000"></div>
            <div className="relative z-10 max-w-2xl">
              <h3 className="text-xl font-black text-red-600 mb-4 uppercase tracking-tight flex items-center gap-3">
                <span className="material-symbols-outlined font-black">gpp_maybe</span>
                Zone de danger
              </h3>
              <p className="text-sm text-red-600/80 font-bold leading-relaxed uppercase tracking-tight">
                La suppression de votre compte est définitive. Vous perdrez l'accès à vos services, vos projets, vos avis et l'ensemble de vos statistiques PRO.
              </p>
            </div>
            <button 
              type="button" 
              onClick={handleDeleteAccount}
              disabled={loading}
              className="relative z-10 px-12 py-5 bg-white border-2 border-red-500 text-red-600 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all shadow-2xl shadow-red-500/10 flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50"
            >
              <span className="material-symbols-outlined text-xl">delete_forever</span>
              Supprimer mon compte
            </button>
          </section>

        </div>

        {/* Password Change Modal */}
        {showPasswordModal && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300">
            <div className="bg-white rounded-[40px] w-full max-w-lg shadow-2xl border border-slate-100 overflow-hidden animate-in zoom-in-95 duration-300">
              <div className="p-10 border-b border-slate-50 flex justify-between items-center bg-slate-50/50">
                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Changer de mot de passe</h3>
                <button onClick={() => setShowPasswordModal(false)} className="size-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors shadow-sm active:scale-90">
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
              <form onSubmit={handlePasswordChange} className="p-10 space-y-8">
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Mot de passe actuel</label>
                  <input 
                    type="password" 
                    required
                    value={passwordForm.current}
                    onChange={(e) => setPasswordForm({...passwordForm, current: e.target.value})}
                    className="w-full h-16 px-6 rounded-2xl bg-slate-50 border border-slate-100 focus:border-secondary focus:bg-white transition-all outline-none font-bold text-slate-900 appearance-none" 
                    placeholder="••••••••"
                  />
                </div>
                <div className="space-y-6 pt-4">
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Nouveau mot de passe</label>
                    <input 
                      type="password" 
                      required
                      value={passwordForm.new}
                      onChange={(e) => setPasswordForm({...passwordForm, new: e.target.value})}
                      className="w-full h-16 px-6 rounded-2xl bg-slate-50 border border-slate-100 focus:border-secondary focus:bg-white transition-all outline-none font-bold text-slate-900 appearance-none" 
                      placeholder="••••••••"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Confirmer le nouveau</label>
                    <input 
                      type="password" 
                      required
                      value={passwordForm.confirm}
                      onChange={(e) => setPasswordForm({...passwordForm, confirm: e.target.value})}
                      className="w-full h-16 px-6 rounded-2xl bg-slate-50 border border-slate-100 focus:border-secondary focus:bg-white transition-all outline-none font-bold text-slate-900 appearance-none" 
                      placeholder="••••••••"
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <button 
                    type="button" 
                    onClick={() => setShowPasswordModal(false)}
                    className="flex-1 h-16 rounded-2xl font-black text-slate-500 uppercase tracking-widest text-xs hover:bg-slate-50 transition-all border border-slate-100 active:scale-95"
                  >
                    Annuler
                  </button>
                  <button 
                    type="submit"
                    className="flex-2 h-16 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20 active:scale-95"
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
