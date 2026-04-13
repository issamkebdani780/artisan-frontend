import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ClientLayout from '../layouts/ClientLayout';
import apiService from '../services/api';

const ClientProfileSettings = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  
  const [activeTab, setActiveTab] = useState('profil'); // profil, localisation, securite
  
  const [form, setForm] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: user?.address || '',
    wilaya_id: user?.wilaya_id || '',
    commune_id: user?.commune_id || '',
  });

  const [wilayas, setWilayas] = useState([]);
  const [communes, setCommunes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  const [passwordForm, setPasswordForm] = useState({ current: '', new: '', confirm: '' });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const freshUser = await apiService.getUserById(user.id);
        setForm({
          name: freshUser.name || '',
          email: freshUser.email || '',
          phone: freshUser.phone || '',
          address: freshUser.address || '',
          wilaya_id: freshUser.wilaya_id || '',
          commune_id: freshUser.commune_id || '',
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await apiService.updateProfile(user.id, form);
      const updatedUser = { ...user, ...form };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setMessage({ text: 'Profil mis Ã  jour !', type: 'success' });
      setTimeout(() => setMessage({ text: '', type: '' }), 5000);
    } catch (err) {
      setMessage({ text: err.message || 'Erreur mise Ã  jour.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    if (passwordForm.new !== passwordForm.confirm) {
      setMessage({ text: 'MDP diffÃ©rents', type: 'error' });
      return;
    }
    setLoading(true);
    try {
      const result = await apiService.changePassword(user.id, passwordForm.current, passwordForm.new);
      if (result.error) {
        setMessage({ text: result.error, type: 'error' });
      } else {
        setMessage({ text: 'MDP mis Ã  jour !', type: 'success' });
        setPasswordForm({ current: '', new: '', confirm: '' });
        setTimeout(() => setMessage({ text: '', type: '' }), 5000);
      }
    } catch (err) {
      setMessage({ text: 'Erreur MDP.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => { apiService.logout(); navigate('/'); };

  return (
    <ClientLayout title="Espace Client" subtitle="ParamÃ¨tres">
      <div className="flex-1 font-['Outfit',sans-serif] py-4 text-left max-w-6xl">
        <div className="mb-10 px-2 text-left">
          <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase mb-2">ParamÃ¨tres de compte</h2>
          <p className="text-slate-500 font-bold max-w-xl leading-relaxed text-sm">GÃ©rez vos informations, votre localisation et votre sÃ©curitÃ© au mÃªme endroit.</p>
        </div>

        <div className="flex items-center gap-1 border-b border-slate-100 mb-10 px-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <button onClick={() => setActiveTab('profil')} className={`pb-4 px-6 text-sm font-black uppercase tracking-widest transition-all relative ${activeTab === 'profil' ? 'text-primary' : 'text-slate-400 hover:text-slate-600'}`}>
            Profil
            {activeTab === 'profil' && <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-full" />}
          </button>
          <button onClick={() => setActiveTab('localisation')} className={`pb-4 px-6 text-sm font-black uppercase tracking-widest transition-all relative ${activeTab === 'localisation' ? 'text-primary' : 'text-slate-400 hover:text-slate-600'}`}>
            Localisation
            {activeTab === 'localisation' && <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-full" />}
          </button>
          <button onClick={() => setActiveTab('securite')} className={`pb-4 px-6 text-sm font-black uppercase tracking-widest transition-all relative ${activeTab === 'securite' ? 'text-primary' : 'text-slate-400 hover:text-slate-600'}`}>
            SÃ©curitÃ©
            {activeTab === 'securite' && <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-full" />}
          </button>
        </div>

        {message.text && (
          <div className="mx-2 mb-8 max-w-2xl text-left">
             <div className={`p-4 rounded-2xl flex items-center gap-4 animate-in slide-in-from-top-4 duration-500 ${message.type === 'success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-red-50 text-red-700 border border-red-100'}`}>
              <span className="material-symbols-outlined text-xl">{message.type === 'success' ? 'check_circle' : 'error'}</span>
              <p className="font-bold text-xs uppercase tracking-tight">{message.text}</p>
            </div>
          </div>
        )}

        <div className="px-2 max-w-5xl text-left">
          {activeTab === 'profil' && (
            <div className="bg-white rounded-4xl p-8 lg:p-12 border border-slate-100 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] animate-in fade-in slide-in-from-bottom-2 duration-500">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="size-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary"><span className="material-symbols-outlined font-black">person</span></div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Informations de Profil</h3>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Vos donnÃ©es de base</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">Nom complet</label>
                    <input name="name" value={form.name} onChange={handleChange} type="text" className="w-full h-15 rounded-2xl border border-slate-100 bg-slate-50 focus:border-primary focus:bg-white outline-none px-6 transition-all font-bold text-slate-900 shadow-sm" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">Email</label>
                    <input name="email" value={form.email} onChange={handleChange} type="email" className="w-full h-15 rounded-2xl border border-slate-100 bg-slate-50 focus:border-primary focus:bg-white outline-none px-6 transition-all font-bold text-slate-900 shadow-sm" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">TÃ©lÃ©phone</label>
                    <input name="phone" value={form.phone} onChange={handleChange} type="tel" className="w-full h-15 rounded-2xl border border-slate-100 bg-slate-50 focus:border-primary focus:bg-white outline-none px-6 transition-all font-bold text-slate-900 shadow-sm" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">Adresse Textuelle</label>
                    <input name="address" value={form.address} onChange={handleChange} type="text" className="w-full h-15 rounded-2xl border border-slate-100 bg-slate-50 focus:border-primary focus:bg-white outline-none px-6 transition-all font-bold text-slate-900 shadow-sm" />
                  </div>
                </div>
                <div className="pt-8 border-t border-slate-50 flex justify-start">
                  <button type="submit" disabled={loading} className="px-10 py-5 bg-primary text-white rounded-[20px] font-black uppercase text-xs tracking-widest hover:opacity-90 transition-all shadow-xl shadow-primary/20 active:scale-95">Mettre Ã  jour le profil</button>
                </div>
              </form>
            </div>
          )}

          {activeTab === 'localisation' && (
            <div className="bg-white rounded-4xl p-8 lg:p-12 border border-slate-100 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] animate-in fade-in slide-in-from-bottom-2 duration-500">
               <form onSubmit={handleSubmit} className="space-y-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="size-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center"><span className="material-symbols-outlined font-black">location_on</span></div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Localisation GÃ©o</h3>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">RÃ©gion et Commune</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">Wilaya</label>
                    <div className="relative text-left">
                      <select name="wilaya_id" value={form.wilaya_id} onChange={handleWilayaChange} className="w-full h-15 rounded-2xl border border-slate-100 bg-slate-50 focus:border-primary focus:bg-white outline-none px-6 transition-all font-bold text-slate-900 appearance-none shadow-sm text-left">
                        <option value="">SÃ©lectionnez</option>
                        {wilayas.map(w => <option key={w.id} value={w.id}>{w.name}</option>)}
                      </select>
                      <span className="material-symbols-outlined absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">Commune</label>
                    <div className="relative text-left">
                      <select name="commune_id" value={form.commune_id} onChange={handleChange} disabled={!form.wilaya_id} className="w-full h-15 rounded-2xl border border-slate-100 bg-slate-50 focus:border-primary focus:bg-white outline-none px-6 transition-all font-bold text-slate-900 appearance-none disabled:opacity-50 shadow-sm text-left">
                        <option value="">SÃ©lectionnez</option>
                        {communes.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                      </select>
                      <span className="material-symbols-outlined absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                    </div>
                  </div>
                </div>
                <div className="pt-8 border-t border-slate-50 flex justify-start">
                  <button type="submit" disabled={loading} className="px-10 py-5 bg-primary text-white rounded-[20px] font-black uppercase text-xs tracking-widest hover:opacity-90 transition-all shadow-xl shadow-primary/20 active:scale-95">Enregistrer ma position</button>
                </div>
              </form>
            </div>
          )}

          {activeTab === 'securite' && (
            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-2 duration-500">
               <div className="bg-white rounded-4xl p-8 lg:p-12 border border-slate-100 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)]">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="size-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center"><span className="material-symbols-outlined font-black">shield</span></div>
                    <div>
                      <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">AccÃ¨s & Protection</h3>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Modifier identifiants</p>
                    </div>
                  </div>
                  <form onSubmit={handlePasswordChange} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                      <div className="space-y-3">
                        <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">Ancien MDP</label>
                        <input type="password" required value={passwordForm.current} onChange={(e) => setPasswordForm({...passwordForm, current: e.target.value})} className="w-full h-15 rounded-2xl border border-slate-100 bg-slate-50 focus:border-primary outline-none px-6 font-bold text-sm shadow-sm" placeholder="â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">Nouveau MDP</label>
                        <input type="password" required value={passwordForm.new} onChange={(e) => setPasswordForm({...passwordForm, new: e.target.value})} className="w-full h-15 rounded-2xl border border-slate-100 bg-slate-50 focus:border-primary outline-none px-6 font-bold text-sm shadow-sm" placeholder="â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">Confirmation</label>
                        <input type="password" required value={passwordForm.confirm} onChange={(e) => setPasswordForm({...passwordForm, confirm: e.target.value})} className="w-full h-15 rounded-2xl border border-slate-100 bg-slate-50 focus:border-primary outline-none px-6 font-bold text-sm shadow-sm" placeholder="â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢" />
                      </div>
                    </div>
                    <div className="pt-8 border-t border-slate-50 flex justify-start">
                      <button type="submit" disabled={loading} className="px-10 py-5 bg-slate-900 text-white rounded-[20px] font-black uppercase text-xs tracking-widest hover:bg-slate-800 transition-all active:scale-95 shadow-xl shadow-slate-900/10">Valider MDP</button>
                    </div>
                  </form>
               </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
                  <div className="bg-red-50/20 rounded-4xl p-10 border border-red-100/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div>
                      <h3 className="text-lg font-black text-red-600 uppercase mb-1">Session</h3>
                      <p className="text-[10px] font-black text-red-400 uppercase tracking-widest">Quitter Mihnati</p>
                    </div>
                    <button onClick={handleLogout} className="px-8 py-4 bg-red-600 text-white rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-red-700 active:scale-95 transition-all shadow-xl shadow-red-600/10">DÃ©connexion</button>
                  </div>
                   <div className="bg-slate-50 rounded-4xl p-10 border border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div>
                      <h3 className="text-lg font-black text-slate-900 uppercase mb-1">Compte</h3>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Suppression</p>
                    </div>
                    <button onClick={() => { if(window.confirm('ðŸš¨ Supprimer ?')) { apiService.logout(); navigate('/'); } }} className="px-8 py-4 border-2 border-slate-200 text-slate-500 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-red-600 hover:border-red-600 hover:text-white active:scale-95 transition-all">Supprimer</button>
                  </div>
                </div>
            </div>
          )}
        </div>
      </div>
    </ClientLayout>
  );
};

export default ClientProfileSettings;

