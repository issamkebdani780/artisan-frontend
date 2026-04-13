import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import apiService from '../services/api';

const ClientRegister = () => {
  const [activeTab, setActiveTab] = useState('client');
  const navigate = useNavigate();

  const [clientForm, setClientForm] = useState({ name: '', email: '', phone: '', password: '', confirm: '', wilaya_id: '', commune_id: '' });
  const [artisanForm, setArtisanForm] = useState({ name: '', email: '', phone: '', specialty: '', password: '', confirm: '', wilaya_id: '', commune_id: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const [wilayas, setWilayas] = useState([]);
  const [communes, setCommunes] = useState([]);

  const handleClientChange = (e) => setClientForm({ ...clientForm, [e.target.name]: e.target.value });
  const handleArtisanChange = (e) => setArtisanForm({ ...artisanForm, [e.target.name]: e.target.value });

  useEffect(() => {
    const fetchWilayas = async () => {
      try {
        const data = await apiService.getWilayas();
        setWilayas(data);
      } catch (err) {
        console.error('Error fetching wilayas:', err);
      }
    };
    fetchWilayas();
  }, []);

  const handleClientWilayaChange = async (e) => {
    const wilayaId = e.target.value;
    setClientForm({ ...clientForm, wilaya_id: wilayaId, commune_id: '' });
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

  const handleArtisanWilayaChange = async (e) => {
    const wilayaId = e.target.value;
    setArtisanForm({ ...artisanForm, wilaya_id: wilayaId, commune_id: '' });
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

  const [showOtpInput, setShowOtpInput] = useState(false);
  const [otp, setOtp] = useState('');
  const [registeringEmail, setRegisteringEmail] = useState('');

  const handleClientSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (clientForm.password !== clientForm.confirm) { setError('Les mots de passe ne correspondent pas'); return; }
    if (clientForm.password.length < 8) { setError('Mot de passe trop court (8 caractÃ¨res minimum)'); return; }
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('name', clientForm.name);
      formData.append('email', clientForm.email);
      formData.append('phone', clientForm.phone);
      formData.append('password', clientForm.password);
      formData.append('wilaya_id', clientForm.wilaya_id);
      formData.append('commune_id', clientForm.commune_id);
      formData.append('role', 'client');

      const res = await apiService.registerWithFiles(formData);
      if (res.requiresVerification) {
        setRegisteringEmail(clientForm.email);
        setShowOtpInput(true);
      } else if (res.userId) {
        await apiService.login({ email: clientForm.email, password: clientForm.password, role: 'client' });
        window.location.href = '/';
      } else {
        setError(res.error || 'Erreur lors de l\'inscription');
      }
    } catch (err) {
      setError(err.message || 'Une erreur est survenue. VÃ©rifiez votre connexion.');
    } finally {
      setLoading(false);
    }
  };

  const handleArtisanSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (artisanForm.password !== artisanForm.confirm) { setError('Les mots de passe ne correspondent pas'); return; }
    if (artisanForm.password.length < 8) { setError('Mot de passe trop court (8 caractÃ¨res minimum)'); return; }
    setLoading(true);
    try {
      const res = await apiService.register({ name: artisanForm.name, email: artisanForm.email, phone: artisanForm.phone, specialty: artisanForm.specialty, password: artisanForm.password, wilaya_id: artisanForm.wilaya_id, commune_id: artisanForm.commune_id, role: 'artisan' });
      if (res.requiresVerification) {
        setRegisteringEmail(artisanForm.email);
        setShowOtpInput(true);
      } else if (res.userId) {
        await apiService.login({ email: artisanForm.email, password: artisanForm.password, role: 'artisan' });
        navigate('/dashboard/artisan');
      } else {
        setError(res.error || 'Erreur lors de l\'inscription');
      }
    } catch (err) {
      setError('Une erreur est survenue. VÃ©rifiez votre connexion.');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await apiService.verifyOTP(registeringEmail, otp, 'register');
      const psw = activeTab === 'client' ? clientForm.password : artisanForm.password;
      const role = activeTab === 'client' ? 'client' : 'artisan';
      await apiService.login({ email: registeringEmail, password: psw, role });
      window.location.href = role === 'artisan' ? '/dashboard/artisan' : '/';
    } catch (err) {
      setError(err.message || 'Code OTP invalide');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#fcfdfe] font-['Outfit',sans-serif] text-slate-900 antialiased transition-colors">
      <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        {/* Left Editorial Section */}
        <div className="lg:col-span-5 space-y-12 lg:sticky lg:top-32">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.1] transition-colors">
              Rejoignez <span className="text-blue-600 italic">l'excellence</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed font-normal max-w-md transition-colors">
              AccÃ©dez Ã  un Ã©cosystÃ¨me privilÃ©giÃ© oÃ¹ le savoir-faire rencontre la passion. CrÃ©ez votre profil en quelques instants.
            </p>
          </div>
          
          <div className="space-y-5">
            {[
              { icon: 'verified', title: 'QualitÃ© CertifiÃ©e', desc: 'Un rÃ©seau rigoureusement sÃ©lectionnÃ© pour garantir une authenticitÃ© absolue.' },
              { icon: 'security', title: 'Confiance Totale', desc: 'Transactions sÃ©curisÃ©es par des protocoles bancaires de nouvelle gÃ©nÃ©ration.' },
              { icon: 'history_edu', title: 'Savoir-faire Unique', desc: 'DÃ©couvrez des histoires et des piÃ¨ces qui ne se trouvent nulle part ailleurs.' }
            ].map((item, i) => (
              <div key={i} className="group p-6 rounded-2xl bg-white border border-slate-100 flex items-start gap-5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] transition-all duration-300 hover:border-blue-600/20">
                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 mb-1 transition-colors">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-snug transition-colors">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Registration Form Section */}
        <div className="lg:col-span-7">
          <div className="flex justify-center p-1.5 bg-slate-100 rounded-2xl mb-8 gap-1.5 transition-colors">
            <button
              onClick={() => { setActiveTab('client'); setError(''); }}
              className={`flex-1 text-center py-3.5 rounded-xl font-bold text-sm cursor-pointer transition-all duration-300 ${activeTab === 'client' ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'text-slate-500 hover:bg-white/50'}`}
            >
              Compte Client
            </button>
            <button
              onClick={() => { setActiveTab('artisan'); setError(''); }}
              className={`flex-1 text-center py-3.5 rounded-xl font-bold text-sm cursor-pointer transition-all duration-300 ${activeTab === 'artisan' ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'text-slate-500 hover:bg-white/50'}`}
            >
              Compte Artisan
            </button>
          </div>

          <div className="bg-white p-8 lg:p-14 rounded-3xl shadow-[0_20px_50px_-12px_rgba(37,99,235,0.08)] border border-slate-50 transition-colors">
            
            {error && (
              <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-xl flex items-center gap-3 transition-colors">
                <span className="material-symbols-outlined">error</span>
                <p className="font-semibold text-sm">{error}</p>
              </div>
            )}

            {showOtpInput ? (
              <div className="space-y-10">
                <div className="space-y-3">
                  <h2 className="text-4xl font-black text-slate-900 tracking-tight transition-colors">VÃ©rification</h2>
                  <p className="text-slate-500 text-lg transition-colors">Un code de vÃ©rification a Ã©tÃ© envoyÃ© Ã  <strong>{registeringEmail}</strong>.</p>
                </div>
                <form onSubmit={handleVerifyOTP} className="space-y-8">
                  <div className="space-y-4">
                    <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1 transition-colors">Code OTP (6 chiffres)</label>
                    <input 
                      type="text" 
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      required
                      maxLength="6"
                      className="w-full text-center text-4xl font-black tracking-[0.5em] py-6 bg-slate-50/50 rounded-2xl border-2 border-dashed border-slate-200 focus:border-blue-600/30 focus:bg-white transition-all outline-none"
                      placeholder="000000"
                    />
                  </div>
                  <button type="submit" disabled={loading} className="w-full py-5 bg-blue-600 text-white font-black text-sm uppercase tracking-widest rounded-2xl shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all active:scale-[0.98]">
                    {loading ? 'VÃ©rification...' : 'VÃ©rifier et Continuer'}
                  </button>
                  <button type="button" onClick={() => setShowOtpInput(false)} className="w-full text-slate-500 font-bold text-sm hover:text-blue-600 transition-colors">
                    Retour au formulaire
                  </button>
                </form>
              </div>
            ) : activeTab === 'client' ? (
              <div className="space-y-10">
                <div className="space-y-3">
                  <h2 className="text-4xl font-black text-slate-900 tracking-tight transition-colors">CrÃ©er mon profil</h2>
                  <p className="text-slate-500 text-lg transition-colors">DÃ©couvrez le monde de l'artisanat d'exception.</p>
                </div>
                <form className="space-y-8" onSubmit={handleClientSubmit}>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1 transition-colors">Nom Complet</label>
                      <div className="relative group">
                        <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors text-xl">person</span>
                        <input name="name" type="text" value={clientForm.name} onChange={handleClientChange} required placeholder="Yassine Benali" className="w-full pl-14 pr-6 py-5 bg-slate-50/50 rounded-2xl border border-transparent focus:border-blue-600/20 focus:ring-8 focus:ring-blue-600/5 focus:bg-white transition-all outline-none font-medium placeholder:text-slate-400" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1 transition-colors">Email</label>
                        <div className="relative group">
                          <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors text-xl">mail</span>
                          <input name="email" type="email" value={clientForm.email} onChange={handleClientChange} required placeholder="jean@exemple.com" className="w-full pl-14 pr-6 py-5 bg-slate-50/50 rounded-2xl border border-transparent focus:border-blue-600/20 focus:ring-8 focus:ring-blue-600/5 focus:bg-white transition-all outline-none font-medium placeholder:text-slate-400" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1 transition-colors">TÃ©lÃ©phone</label>
                        <div className="relative group">
                          <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors text-xl">call</span>
                          <input name="phone" type="tel" value={clientForm.phone} onChange={handleClientChange} placeholder="05 50 12 34 56" className="w-full pl-14 pr-6 py-5 bg-slate-50/50 rounded-2xl border border-transparent focus:border-blue-600/20 focus:ring-8 focus:ring-blue-600/5 focus:bg-white transition-all outline-none font-medium placeholder:text-slate-400" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1 transition-colors">Wilaya</label>
                        <div className="relative group">
                          <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors text-xl">location_on</span>
                          <select name="wilaya_id" value={clientForm.wilaya_id} onChange={handleClientWilayaChange} required className="w-full pl-14 pr-6 py-5 bg-slate-50/50 rounded-2xl border border-transparent focus:border-blue-600/20 focus:ring-8 focus:ring-blue-600/5 focus:bg-white transition-all outline-none font-medium">
                            <option value="">SÃ©lectionnez une wilaya</option>
                            {wilayas.map(wilaya => (
                              <option key={wilaya.id} value={wilaya.id}>{wilaya.name}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1 transition-colors">Commune</label>
                        <div className="relative group">
                          <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors text-xl">location_city</span>
                          <select name="commune_id" value={clientForm.commune_id} onChange={handleClientChange} required disabled={!clientForm.wilaya_id} className="w-full pl-14 pr-6 py-5 bg-slate-50/50 rounded-2xl border border-transparent focus:border-blue-600/20 focus:ring-8 focus:ring-blue-600/5 focus:bg-white transition-all outline-none font-medium disabled:opacity-50">
                            <option value="">SÃ©lectionnez une commune</option>
                            {communes.map(commune => (
                              <option key={commune.id} value={commune.id}>{commune.name}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1 transition-colors">Mot de passe</label>
                        <div className="relative group">
                          <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors text-xl">lock</span>
                          <input name="password" type="password" value={clientForm.password} onChange={handleClientChange} required placeholder="â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢" className="w-full pl-14 pr-6 py-5 bg-slate-50/50 rounded-2xl border border-transparent focus:border-blue-600/20 focus:ring-8 focus:ring-blue-600/5 focus:bg-white transition-all outline-none font-medium placeholder:text-slate-400" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1 transition-colors">Confirmation</label>
                        <div className="relative group">
                          <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors text-xl">verified_user</span>
                          <input name="confirm" type="password" value={clientForm.confirm} onChange={handleClientChange} required placeholder="â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢" className="w-full pl-14 pr-6 py-5 bg-slate-50/50 rounded-2xl border border-transparent focus:border-blue-600/20 focus:ring-8 focus:ring-blue-600/5 focus:bg-white transition-all outline-none font-medium placeholder:text-slate-400" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 bg-blue-50/50 rounded-2xl space-y-2 border border-blue-100/50 transition-colors">
                    <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest">SÃ©curitÃ© requise</p>
                    <li className={`flex items-center gap-2.5 text-xs transition-colors ${clientForm.password.length >= 8 ? 'text-emerald-600' : 'text-slate-500'}`}>
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>{clientForm.password.length >= 8 ? 'check_circle' : 'radio_button_unchecked'}</span>
                      <span className="font-medium">8 caractÃ¨res minimum</span>
                    </li>
                  </div>

                  <button type="submit" disabled={loading} className="w-full py-5 bg-blue-600 text-white font-black text-sm uppercase tracking-widest rounded-2xl shadow-xl shadow-blue-200 hover:bg-blue-700 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 disabled:opacity-60 flex items-center justify-center gap-3">
                    {loading ? <><span className="animate-spin h-5 w-5 border-4 border-white/30 border-t-white rounded-full"></span>CrÃ©ation...</> : "S'inscrire Maintenant"}
                  </button>
                </form>
              </div>
            ) : (
              <div className="space-y-10">
                <div className="space-y-3">
                  <h2 className="text-4xl font-black text-slate-900 tracking-tight transition-colors">Inscription Artisan</h2>
                  <p className="text-slate-500 text-lg transition-colors">Rejoignez notre rÃ©seau de professionnels qualifiÃ©s.</p>
                </div>
                <form className="space-y-8" onSubmit={handleArtisanSubmit}>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1 transition-colors">Nom Complet</label>
                      <div className="relative group">
                        <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors text-xl">person</span>
                        <input name="name" type="text" value={artisanForm.name} onChange={handleArtisanChange} required placeholder="Rachid Mazouni" className="w-full pl-14 pr-6 py-5 bg-slate-50/50 rounded-2xl border border-transparent focus:border-blue-600/20 focus:ring-8 focus:ring-blue-600/5 focus:bg-white transition-all outline-none font-medium placeholder:text-slate-400" />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-2 mb-2">
                        <div>
                          <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1 transition-colors">SpÃ©cialitÃ©</label>
                          <p className="text-slate-500 text-xs mt-1 ml-1">Choisissez votre mÃ©tier principal.</p>
                        </div>
                        {artisanForm.specialty && (
                          <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2 py-1 rounded-lg border border-blue-100 transition-colors">SÃ©lectionnÃ©</span>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar p-1">
                        {[
                          { group: "BÃ¢timent", options: ["Plomberie", "Ã‰lectricitÃ©", "Peinture", "MaÃ§onnerie", "Menuiserie", "DÃ©mÃ©nagement"] },
                          { group: "ExtÃ©rieur", options: ["Jardinage", "Ã‰tanchÃ©itÃ©", "ClÃ´ture", "Nettoyage faÃ§ade"] },
                          { group: "Autre", options: ["MÃ©canique", "Serrurerie", "Vitrerie", "Climatisation"] }
                        ].map((group, idx) => (
                          <div key={idx} className="space-y-2">
                            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-wider transition-colors">{group.group}</h4>
                            <div className="flex flex-wrap gap-2">
                              {group.options.map(option => {
                                const isSelected = artisanForm.specialty === option;
                                return (
                                  <button
                                    key={option}
                                    type="button"
                                    onClick={() => setArtisanForm({ ...artisanForm, specialty: option })}
                                    className={`px-3 py-1.5 rounded-xl text-[11px] font-bold transition-all border-2 ${
                                      isSelected 
                                      ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/20' 
                                      : 'bg-slate-50/50 border-transparent text-slate-600 hover:border-blue-600/30'
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
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1 transition-colors">Email</label>
                        <div className="relative group">
                          <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors text-xl">mail</span>
                          <input name="email" type="email" value={artisanForm.email} onChange={handleArtisanChange} required placeholder="artisan@exemple.com" className="w-full pl-14 pr-6 py-5 bg-slate-50/50 rounded-2xl border border-transparent focus:border-blue-600/20 focus:ring-8 focus:ring-blue-600/5 focus:bg-white transition-all outline-none font-medium placeholder:text-slate-400" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1 transition-colors">TÃ©lÃ©phone</label>
                        <div className="relative group">
                          <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors text-xl">call</span>
                          <input name="phone" type="tel" value={artisanForm.phone} onChange={handleArtisanChange} placeholder="05 50 12 34 56" className="w-full pl-14 pr-6 py-5 bg-slate-50/50 rounded-2xl border border-transparent focus:border-blue-600/20 focus:ring-8 focus:ring-blue-600/5 focus:bg-white transition-all outline-none font-medium placeholder:text-slate-400" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1 transition-colors">Wilaya</label>
                        <div className="relative group">
                          <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors text-xl">location_on</span>
                          <select name="wilaya_id" value={artisanForm.wilaya_id} onChange={handleArtisanWilayaChange} required className="w-full pl-14 pr-6 py-5 bg-slate-50/50 rounded-2xl border border-transparent focus:border-blue-600/20 focus:ring-8 focus:ring-blue-600/5 focus:bg-white transition-all outline-none font-medium">
                            <option value="">SÃ©lectionnez une wilaya</option>
                            {wilayas.map(wilaya => (
                              <option key={wilaya.id} value={wilaya.id}>{wilaya.name}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1 transition-colors">Commune</label>
                        <div className="relative group">
                          <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors text-xl">location_city</span>
                          <select name="commune_id" value={artisanForm.commune_id} onChange={handleArtisanChange} required disabled={!artisanForm.wilaya_id} className="w-full pl-14 pr-6 py-5 bg-slate-50/50 rounded-2xl border border-transparent focus:border-blue-600/20 focus:ring-8 focus:ring-blue-600/5 focus:bg-white transition-all outline-none font-medium disabled:opacity-50">
                            <option value="">SÃ©lectionnez une commune</option>
                            {communes.map(commune => (
                              <option key={commune.id} value={commune.id}>{commune.name}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1 transition-colors">Mot de passe</label>
                        <div className="relative group">
                          <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors text-xl">lock</span>
                          <input name="password" type="password" value={artisanForm.password} onChange={handleArtisanChange} required placeholder="â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢" className="w-full pl-14 pr-6 py-5 bg-slate-50/50 rounded-2xl border border-transparent focus:border-blue-600/20 focus:ring-8 focus:ring-blue-600/5 focus:bg-white transition-all outline-none font-medium placeholder:text-slate-400" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1 transition-colors">Confirmation</label>
                        <div className="relative group">
                          <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors text-xl">verified_user</span>
                          <input name="confirm" type="password" value={artisanForm.confirm} onChange={handleArtisanChange} required placeholder="â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢" className="w-full pl-14 pr-6 py-5 bg-slate-50/50 rounded-2xl border border-transparent focus:border-blue-600/20 focus:ring-8 focus:ring-blue-600/5 focus:bg-white transition-all outline-none font-medium placeholder:text-slate-400" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 bg-blue-50/50 rounded-2xl space-y-2 border border-blue-100/50 transition-colors">
                    <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Informations</p>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed transition-colors">Pour finaliser votre inscription et vÃ©rifier votre compte, vous devrez fournir vos documents justificatifs dans l'Ã©tape suivante sur votre tableau de bord.</p>
                  </div>

                  <button type="submit" disabled={loading} className="w-full py-5 bg-blue-600 text-white font-black text-sm uppercase tracking-widest rounded-2xl shadow-xl shadow-blue-200 hover:bg-blue-700 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 disabled:opacity-60 flex items-center justify-center gap-3">
                    {loading ? <><span className="animate-spin h-5 w-5 border-4 border-white/30 border-t-white rounded-full"></span>CrÃ©ation...</> : "CrÃ©er mon Profil Pro"}
                  </button>
                </form>
              </div>
            )}

            <div className="mt-12 pt-10 border-t border-slate-100 flex flex-col items-center gap-4 transition-colors">
              <p className="text-sm text-slate-500 font-medium transition-colors">
                DÃ©jÃ  parmi nous ? <Link to={activeTab === 'client' ? '/login/client' : '/login/artisan'} className="text-blue-600 font-bold hover:underline ml-1">Se connecter</Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ClientRegister;

