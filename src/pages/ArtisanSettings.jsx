import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ArtisanLayout from '../layouts/ArtisanLayout';
import apiService from '../services/api';

const ArtisanSettings = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  
  const [activeTab, setActiveTab] = useState('profil'); // profil, expertise, securite
  
  const [form, setForm] = useState({
    name: user?.name || '',
    email: user?.email || '',
    specialty: user?.specialty ? user.specialty.split(',').map(s => s.trim()) : [],
    phone: user?.phone || '',
    address: user?.address || '',
    wilaya_id: user?.wilaya_id || '',
    commune_id: user?.commune_id || '',
    experience_years: (() => { try { return JSON.parse(user?.experience_years || '{}'); } catch { return {}; } })(),
    profile_pic: user?.profile_pic || 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=60'
  });

  const [wilayas, setWilayas] = useState([]);
  const [communes, setCommunes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  const [passwordForm, setPasswordForm] = useState({ current: '', new: '', confirm: '' });

  const categoryGroups = [
    {
      group: "Menuiserie et Bois",
      options: ["Menuisier ébéniste", "Menuisier de chantier (coffreur)", "Presseur de bois", "Décorateur bois intérieur", "Fabricant de portes et fenêtres en bois"]
    },
    {
      group: "Ferronnerie et Soudure",
      options: ["Ferronnier d'art", "Soudeur (arc et argon)", "Ferronnier métallier (portails et grilles)", "Chaudronnier industriel", "Soudeur carrosserie auto"]
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
      options: ["Jardinier paysagiste", "Ouvrier en aménagement des espaces verts", "Technicien en entretien des jardins", "Technicien en irrigation goutte-à-goutte et arrosage", "Élagueur et tailleur d'arbres et palmiers"]
    }
  ];

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const freshUser = await apiService.getUserById(user.id);
        const savedSpecialty = freshUser.specialty ? freshUser.specialty.split(',').map(s => s.trim()) : [];
        let expObj = {};
        try {
          expObj = typeof freshUser.experience_years === 'string' ? JSON.parse(freshUser.experience_years) : (freshUser.experience_years || {});
        } catch(e) {}
        setForm({
          name: freshUser.name || '',
          email: freshUser.email || '',
          phone: freshUser.phone || '',
          address: freshUser.address || '',
          wilaya_id: freshUser.wilaya_id || '',
          commune_id: freshUser.commune_id || '',
          specialty: savedSpecialty,
          experience_years: expObj,
          profile_pic: freshUser.profile_pic || form.profile_pic
        });
        
        localStorage.setItem('user', JSON.stringify({ ...user, ...freshUser }));

        const wilayaData = await apiService.getWilayas();
        setWilayas(wilayaData);

        if (freshUser.wilaya_id) {
          const communeData = await apiService.getCommunes(freshUser.wilaya_id);
          setCommunes(communeData);
        }
      } catch (err) {
        console.error('Error fetching settings data:', err);
      }
    };
    fetchUserData();
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleWilayaChange = async (e) => {
    const wilayaId = e.target.value;
    setForm({ ...form, wilaya_id: wilayaId, commune_id: '' });
    setCommunes([]);
    if (wilayaId) {
      try {
        const data = await apiService.getCommunes(wilayaId);
        setCommunes(data);
      } catch (err) {
        console.error('Error fetching communes:', err);
      }
    }
  };

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
        specialty: Array.isArray(form.specialty) ? form.specialty.join(', ') : form.specialty,
        experience_years: JSON.stringify(form.experience_years)
      };
      await apiService.updateProfile(user.id, submissionData);
      const updatedUser = { ...user, ...submissionData };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setMessage({ text: 'Profil PRO mis à jour !', type: 'success' });
      setTimeout(() => setMessage({ text: '', type: '' }), 5000);
    } catch (err) {
      setMessage({ text: err.message || 'Erreur lors de la mise à jour.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    if (passwordForm.new !== passwordForm.confirm) {
      setMessage({ text: 'MDP différents', type: 'error' });
      return;
    }
    setLoading(true);
    try {
      const result = await apiService.changePassword(user.id, passwordForm.current, passwordForm.new);
      if (result.error) {
        setMessage({ text: result.error, type: 'error' });
      } else {
        setMessage({ text: 'MDP mis à jour !', type: 'success' });
        setPasswordForm({ current: '', new: '', confirm: '' });
        setTimeout(() => setMessage({ text: '', type: '' }), 5000);
      }
    } catch (err) {
      setMessage({ text: 'Une erreur est survenue.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => { apiService.logout(); navigate('/'); };

  return (
    <ArtisanLayout title="Mihnati PRO" subtitle="Paramètres">
      <div className="flex-1 font-['Outfit',sans-serif] text-left max-w-6xl py-4">
        <div className="mb-10 px-4 text-left">
          <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase mb-2">Paramètres Expert</h2>
          <p className="text-slate-500 font-bold max-w-xl text-sm leading-relaxed">Gérez votre visibilité et la sécurité de votre compte professionnel.</p>
        </div>

         <div className="flex items-center gap-1 border-b border-slate-100 mb-10 px-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <button onClick={() => setActiveTab('profil')} className={`pb-4 px-6 text-xs font-black uppercase tracking-widest transition-all relative ${activeTab === 'profil' ? 'text-secondary' : 'text-slate-400 hover:text-slate-600'}`}>
            Identité
            {activeTab === 'profil' && <div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary rounded-full" />}
          </button>
          <button onClick={() => setActiveTab('expertise')} className={`pb-4 px-6 text-xs font-black uppercase tracking-widest transition-all relative ${activeTab === 'expertise' ? 'text-secondary' : 'text-slate-400 hover:text-slate-600'}`}>
            Expertise & Lieu
            {activeTab === 'expertise' && <div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary rounded-full" />}
          </button>
          <button onClick={() => setActiveTab('securite')} className={`pb-4 px-6 text-xs font-black uppercase tracking-widest transition-all relative ${activeTab === 'securite' ? 'text-secondary' : 'text-slate-400 hover:text-slate-600'}`}>
            Accès & Sécurité
            {activeTab === 'securite' && <div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary rounded-full" />}
          </button>
        </div>

        {/* Hidden File Input */}
        <input 
          type="file" 
          id="profilePicInput" 
          hidden 
          accept="image/*" 
          onChange={async (e) => {
            const file = e.target.files[0];
            if (!file) return;
            
            setLoading(true);
            try {
              const formData = new FormData();
              formData.append('profilePic', file);
              const result = await apiService.updateArtisanProfilePicture(user.id, formData);
              
              const updatedUser = { ...user, profile_pic: result.profilePic };
              localStorage.setItem('user', JSON.stringify(updatedUser));
              setForm({ ...form, profile_pic: result.profilePic });
              setMessage({ text: 'Photo de profil mise à jour !', type: 'success' });
            } catch (err) {
              setMessage({ text: err.message || "Erreur lors de l'upload.", type: 'error' });
            } finally {
              setLoading(false);
            }
          }}
        />

        {message.text && (
          <div className="mx-4 mb-8 max-w-2xl text-left">
            <div className={`p-4 rounded-2xl flex items-center gap-4 animate-in slide-in-from-top-4 duration-500 ${message.type === 'success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-red-50 text-red-700 border border-red-100'}`}>
              <span className="material-symbols-outlined">{message.type === 'success' ? 'check_circle' : 'error'}</span>
              <p className="font-bold text-xs uppercase tracking-tight">{message.text}</p>
            </div>
          </div>
        )}

        <div className="px-4 max-w-5xl text-left">
          {activeTab === 'profil' && (
            <div className="bg-white rounded-4xl p-8 lg:p-12 border border-slate-100 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] animate-in fade-in slide-in-from-bottom-2 duration-500">
               <form onSubmit={handleSubmit} className="space-y-10">
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                  <div className="relative group shrink-0 mx-auto lg:mx-0">
                    <div className="h-44 w-44 rounded-[40px] overflow-hidden border-8 border-slate-50 shadow-2xl bg-slate-100 transition-all group-hover:scale-105 duration-500">
                      <img src={form.profile_pic} alt="Avatar" className="h-full w-full object-cover" />
                    </div>
                    <button 
                      type="button" 
                      onClick={() => document.getElementById('profilePicInput').click()}
                      className="absolute -bottom-2 -right-2 bg-secondary text-white size-14 rounded-2xl shadow-2xl hover:scale-110 flex items-center justify-center border-4 border-white active:scale-95"
                    >
                      <span className="material-symbols-outlined">photo_camera</span>
                    </button>
                  </div>
                   <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2 text-left">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Nom complet</label>
                        <input name="name" value={form.name} onChange={handleChange} type="text" className="w-full h-15 rounded-2xl border border-slate-100 bg-slate-50 focus:border-secondary focus:bg-white outline-none px-6 font-bold text-slate-900 shadow-sm" />
                      </div>
                      <div className="space-y-2 text-left">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email PRO</label>
                        <input name="email" value={form.email} onChange={handleChange} type="email" className="w-full h-15 rounded-2xl border border-slate-100 bg-slate-50 focus:border-secondary focus:bg-white outline-none px-6 font-bold text-slate-900 shadow-sm" />
                      </div>
                      <div className="space-y-2 text-left">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Téléphone</label>
                        <input name="phone" value={form.phone} onChange={handleChange} type="tel" className="w-full h-15 rounded-2xl border border-slate-100 bg-slate-50 focus:border-secondary focus:bg-white outline-none px-6 font-bold text-slate-900 shadow-sm" />
                      </div>

                   </div>
                </div>
                <div className="pt-10 border-t border-slate-50 flex justify-start">
                  <button type="submit" disabled={loading} className="px-10 py-5 bg-secondary text-white rounded-[20px] font-black uppercase text-xs tracking-widest hover:opacity-90 transition-all shadow-xl shadow-secondary/20 active:scale-95">Mettre à jour l'identité</button>
                </div>
               </form>
            </div>
          )}

          {activeTab === 'expertise' && (
            <div className="bg-white rounded-4xl p-8 lg:p-12 border border-slate-100 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] animate-in fade-in slide-in-from-bottom-2 duration-500">
               <form onSubmit={handleSubmit} className="space-y-10">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Wilaya</label>
                      <div className="relative text-left">
                        <select name="wilaya_id" value={form.wilaya_id} onChange={handleWilayaChange} className="w-full h-15 rounded-2xl border border-slate-100 bg-slate-50 focus:border-secondary focus:bg-white outline-none px-6 font-bold text-slate-900 appearance-none shadow-sm text-left">
                          <option value="">Sélectionnez</option>
                          {wilayas.map(w => <option key={w.id} value={w.id}>{w.name}</option>)}
                        </select>
                        <span className="material-symbols-outlined absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Commune</label>
                      <div className="relative text-left">
                        <select name="commune_id" value={form.commune_id} onChange={handleChange} disabled={!form.wilaya_id} className="w-full h-15 rounded-2xl border border-slate-100 bg-slate-50 focus:border-secondary focus:bg-white outline-none px-6 font-bold text-slate-900 appearance-none disabled:opacity-50 shadow-sm text-left">
                          <option value="">Sélectionnez</option>
                          {communes.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                        </select>
                        <span className="material-symbols-outlined absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 text-left">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Adresse Locale</label>
                    <input name="address" value={form.address} onChange={handleChange} type="text" className="w-full h-15 rounded-2xl border border-slate-100 bg-slate-50 focus:border-secondary focus:bg-white outline-none px-6 font-bold text-slate-900 shadow-sm" />
                  </div>
                  <div className="bg-slate-50/50 rounded-4xl p-8 border border-slate-100 text-left">
                    <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-6 px-2">Spécialités Expert</h4>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-h-[400px] overflow-y-auto pr-4 custom-scrollbar">
                      {categoryGroups.map((group, idx) => (
                        <div key={idx} className="space-y-4 text-left">
                          <h4 className="text-[11px] font-black text-slate-800 uppercase tracking-tighter flex items-center gap-2">
                            <span className="w-1 h-3 bg-secondary rounded-full"></span>
                            {group.group}
                          </h4>
                          <div className="flex flex-wrap gap-2 text-wrap text-left">
                            {group.options.map(option => {
                              const isSelected = form.specialty.includes(option);
                              return (
                                <button key={option} type="button" onClick={() => toggleSpecialty(option)} className={`px-4 py-2.5 rounded-xl text-[10px] font-black transition-all border-2 ${isSelected ? 'bg-secondary border-secondary text-white' : 'bg-white border-slate-50 text-slate-400 hover:text-slate-900'}`}>{option}</button>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-slate-50/50 rounded-4xl p-8 border border-slate-100 text-left">
                    <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-6 px-2">Expérience par Spécialité (ans)</h4>
                    {form.specialty.length === 0 ? (
                      <p className="text-sm text-slate-400 font-bold px-2">Sélectionnez d'abord au moins une spécialité ci-dessus.</p>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {form.specialty.map(spec => (
                          <div key={spec} className="space-y-2 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 truncate block" title={spec}>{spec}</label>
                            <input 
                              type="number" 
                              min="0"
                              value={form.experience_years?.[spec] || ''} 
                              onChange={(e) => setForm({
                                ...form,
                                experience_years: { ...form.experience_years, [spec]: e.target.value }
                              })} 
                              placeholder="Années d'expérience" 
                              required
                              className="w-full h-12 rounded-xl bg-slate-50 border-none focus:border-secondary focus:bg-white outline-none px-4 font-bold text-slate-900 shadow-sm transition-all" 
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="pt-10 border-t border-slate-50 flex justify-start">
                    <button type="submit" disabled={loading} className="px-10 py-5 bg-secondary text-white rounded-[20px] font-black uppercase text-xs tracking-widest hover:opacity-90 transition-all shadow-xl shadow-secondary/20 active:scale-95">Sauvegarder Expertise</button>
                  </div>
               </form>
            </div>
          )}

          {activeTab === 'securite' && (
            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-2 duration-500">
               <div className="bg-white rounded-4xl p-8 md:p-12 border border-slate-100 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)]">
                  <div className="flex items-center gap-4 mb-10 text-slate-900 uppercase">
                    <span className="material-symbols-outlined font-black text-2xl">key</span>
                    <h3 className="text-xl font-black">Accès & Sécurité</h3>
                  </div>
                  <form onSubmit={handlePasswordChange} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                       <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Ancien MDP</label>
                        <input type="password" required value={passwordForm.current} onChange={(e) => setPasswordForm({...passwordForm, current: e.target.value})} className="w-full h-15 rounded-2xl border border-slate-100 bg-slate-50 focus:border-secondary outline-none px-6 font-bold text-sm shadow-sm" placeholder="••••••••" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Nouveau MDP</label>
                        <input type="password" required value={passwordForm.new} onChange={(e) => setPasswordForm({...passwordForm, new: e.target.value})} className="w-full h-15 rounded-2xl border border-slate-100 bg-slate-50 focus:border-secondary outline-none px-6 font-bold text-sm shadow-sm" placeholder="••••••••" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Confirmation</label>
                        <input type="password" required value={passwordForm.confirm} onChange={(e) => setPasswordForm({...passwordForm, confirm: e.target.value})} className="w-full h-15 rounded-2xl border border-slate-100 bg-slate-50 focus:border-secondary outline-none px-6 font-bold text-sm shadow-sm" placeholder="••••••••" />
                      </div>
                    </div>
                    <div className="pt-10 border-t border-slate-50 flex justify-start">
                      <button type="submit" disabled={loading} className="px-10 py-5 bg-slate-900 text-white rounded-[20px] font-black uppercase text-xs tracking-widest hover:bg-slate-800 transition-all active:scale-95 shadow-xl shadow-slate-900/10">Valider MDP</button>
                    </div>
                  </form>
               </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl text-left">
                  <div className="bg-red-50/20 rounded-4xl p-10 border border-red-100/50 flex items-center justify-between group text-left">
                    <div className="text-left">
                      <h3 className="text-lg font-black text-red-600 uppercase mb-1">Session PRO</h3>
                      <p className="text-[10px] font-black text-red-400 uppercase tracking-widest">Quitter l'espace</p>
                    </div>
                    <button onClick={handleLogout} className="px-8 py-4 bg-red-600 text-white rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-red-700 active:scale-95 transition-all shadow-xl shadow-red-600/10">Déconnexion</button>
                  </div>
                   <div className="bg-slate-50 rounded-4xl p-10 border border-slate-100 flex items-center justify-between group text-left">
                    <div className="text-left">
                      <h3 className="text-lg font-black text-slate-900 uppercase mb-1">Accès Expert</h3>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Action Critique</p>
                    </div>
                    <button onClick={() => { if(window.confirm('🚨 Supprimer profil expert ?')) { apiService.logout(); navigate('/'); } }} className="px-8 py-4 border-2 border-slate-200 text-slate-500 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-red-600 hover:border-red-600 hover:text-white active:scale-95 transition-all">Supprimer</button>
                  </div>
                </div>
            </div>
          )}
        </div>
      </div>
    </ArtisanLayout>
  );
};

export default ArtisanSettings;
