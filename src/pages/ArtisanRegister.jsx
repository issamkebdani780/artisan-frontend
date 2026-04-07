import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import apiService from '../services/api';

const ArtisanRegister = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '', birthday: '', specialty: [], experience_years: '',
    email: '', phone: '', address: '', password: '', confirm: '',
    wilaya_id: '', commune_id: ''
  });
  const [files, setFiles] = useState({
    profilePic: null,
    documents: []
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [terms, setTerms] = useState(false);

  // Location data
  const [wilayas, setWilayas] = useState([]);
  const [communes, setCommunes] = useState([]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Fetch wilayas on mount
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

  // Handle wilaya change
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

  const handleProfilePicChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError('L\'image doit faire moins de 5MB');
        return;
      }
      setFiles({ ...files, profilePic: file });
      setError('');
    }
  };

  const handleDocumentsChange = (e) => {
    const selectedFiles = Array.from(e.target.files || []);
    if (selectedFiles.length > 5) {
      setError('Maximum 5 documents autorisés');
      return;
    }
    const validFiles = selectedFiles.filter(file => {
      if (file.size > 10 * 1024 * 1024) {
        setError(`${file.name} dépasse 10MB`);
        return false;
      }
      return true;
    });
    if (validFiles.length > 0) {
      setFiles({ ...files, documents: validFiles });
      setError('');
    }
  };

  const passwordChecks = {
    length: form.password.length >= 8,
    startLetter: /^[a-zA-Z]/.test(form.password),
    hasUpper: /[A-Z]/.test(form.password),
    hasNumber: /[0-9]/.test(form.password),
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (form.password !== form.confirm) { setError('Les mots de passe ne correspondent pas'); return; }
    if (!passwordChecks.length) { setError('Mot de passe trop court (8 caractères minimum)'); return; }
    if (!terms) { setError('Vous devez accepter les conditions d\'utilisation'); return; }
    if (!files.profilePic) { setError('La photo de profil est requise'); return; }
    if (files.documents.length === 0) { setError('Au moins un document est requis'); return; }

    setLoading(true);
    try {
      // Create FormData to handle file uploads
      const formData = new FormData();
      formData.append('name', form.name);
      formData.append('email', form.email);
      formData.append('phone', form.phone);
      formData.append('address', form.address);
      formData.append('birthday', form.birthday);
      formData.append('specialty', form.specialty.join(', '));
      formData.append('experience_years', form.experience_years);
      formData.append('wilaya_id', form.wilaya_id);
      formData.append('commune_id', form.commune_id);
      formData.append('password', form.password);
      formData.append('role', 'artisan');
      
      // Add files
      formData.append('profilePic', files.profilePic);
      files.documents.forEach((doc, index) => {
        formData.append('documents', doc);
      });

      // Register with files
      const res = await apiService.registerWithFiles(formData);
      if (res.userId) {
        await apiService.login({ email: form.email, password: form.password, role: 'artisan' });
        navigate('/dashboard/artisan');
      } else {
        setError(res.error || 'Erreur lors de l\'inscription');
      }
    } catch (err) {
      setError(err.message || 'Une erreur est survenue. Vérifiez votre connexion.');
    } finally {
      setLoading(false);
    }
  };

  const Check = ({ ok, label }) => (
    <li className="flex items-center gap-2 text-[11px] font-bold" style={{ color: ok ? '#22c55e' : '#94a3b8' }}>
      <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: ok ? "'FILL' 1" : "'FILL' 0" }}>
        {ok ? 'check_circle' : 'circle'}
      </span>
      {label}
    </li>
  );

  return (
    <div className="bg-[#f8fafc] font-['Outfit',sans-serif] text-slate-900 antialiased overflow-x-hidden pt-20">
      <main className="min-h-screen flex flex-col lg:flex-row">
        {/* Left Side: Visual */}
        <section className="hidden lg:flex w-[45%] relative overflow-hidden bg-slate-950">
          <img alt="Professional Background" className="absolute inset-0 w-full h-full object-cover opacity-50" src="https://images.unsplash.com/photo-1542621323-22ea68988a8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" />
          <div className="relative z-10 flex flex-col justify-end p-16 w-full bg-linear-to-b from-slate-900/10 to-slate-900/90">
            <div className="space-y-8 max-w-md">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-500 border border-orange-500/30 text-xs font-bold tracking-widest uppercase">REJOIGNEZ L'ÉLITE</span>
              <h1 className="text-5xl font-black text-white leading-tight tracking-tighter">
                Rejoignez l'élite des <span className="text-orange-500">services professionnels.</span>
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed font-light">
                Accédez à un réseau exclusif de professionnels vérifiés et gérez vos projets en toute sérénité.
              </p>
              <div className="space-y-4">
                {[
                  { icon: 'verified', title: 'Pros Vérifiés', desc: 'Chaque membre subit un processus de vérification rigoureux.' },
                  { icon: 'payments', title: 'Paiements Sécurisés', desc: 'Infrastructure de paiement cryptée de bout en bout.' },
                  { icon: 'support_agent', title: 'Support 24/7', desc: 'Une équipe dédiée disponible à tout moment.' }
                ].map((item, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{item.title}</h3>
                      <p className="text-sm text-slate-300 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Right Side: Form */}
        <section className="w-full lg:w-[55%] bg-[#f8fafc] flex items-center justify-center py-16 px-6 sm:px-12 lg:px-24">
          <div className="w-full max-w-2xl">
            <div className="mb-10 text-center lg:text-left">
              <h2 className="text-4xl font-black text-slate-900 tracking-tighter">Créer votre profil Artisan</h2>
              <p className="text-slate-500 mt-2 text-lg">Commencez votre aventure dès aujourd'hui.</p>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-xl flex items-center gap-3">
                <span className="material-symbols-outlined">error</span>
                <p className="font-semibold text-sm">{error}</p>
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 ml-1">Nom Complet</label>
                  <input name="name" type="text" value={form.name} onChange={handleChange} required placeholder="Ex: Rachid Mazouni" className="w-full h-14 px-5 rounded-xl bg-[#e2e8f0] border-none focus:ring-2 focus:ring-orange-500 transition-all font-medium placeholder:text-slate-400 outline-none" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 ml-1">Date de Naissance</label>
                  <input name="birthday" type="date" value={form.birthday} onChange={handleChange} className="w-full h-14 px-5 rounded-xl bg-[#e2e8f0] border-none focus:ring-2 focus:ring-orange-500 transition-all font-medium outline-none" />
                </div>
              </div>

              {/* Professional Fields */}
              <div className="p-6 bg-orange-500/5 rounded-2xl border border-orange-500/20 space-y-5">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-[10px] font-black uppercase tracking-[0.15em] text-orange-500 ml-1">Catégorie Professionnelle</label>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">(Ctrl/Cmd click pour plusieurs)</span>
                  </div>
                  <select multiple name="specialty" value={form.specialty} onChange={(e) => {
                      const options = Array.from(e.target.selectedOptions, option => option.value);
                      setForm({ ...form, specialty: options });
                    }} required className="w-full h-32 p-3 rounded-xl bg-white border-2 border-orange-500/10 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 font-semibold transition-all outline-none overflow-y-auto custom-scrollbar">
                    <option value="" disabled>Sélectionnez votre(vos) spécialité(s)</option>
                    
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

                    <optgroup label="Déménagement et Transport">
                      <option>Déménageur professionnel</option>
                      <option>Transporteur d'objets lourds</option>
                      <option>Aide au déménagement (manutention)</option>
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
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.15em] text-orange-500 ml-1">Années d'Expérience</label>
                  <input name="experience_years" type="number" min="0" value={form.experience_years} onChange={handleChange} placeholder="Ex: 10" className="w-full h-14 px-5 rounded-xl bg-white border-2 border-orange-500/10 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-medium placeholder:text-slate-300 outline-none" />
                </div>
              </div>

              {/* Location Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 ml-1">Wilaya</label>
                  <select name="wilaya_id" value={form.wilaya_id} onChange={handleWilayaChange} required className="w-full h-14 px-5 rounded-xl bg-[#e2e8f0] border-none focus:ring-2 focus:ring-orange-500 transition-all font-medium outline-none">
                    <option value="">Sélectionnez une wilaya</option>
                    {wilayas.map(wilaya => (
                      <option key={wilaya.id} value={wilaya.id}>{wilaya.name}</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 ml-1">Commune</label>
                  <select name="commune_id" value={form.commune_id} onChange={handleChange} required disabled={!form.wilaya_id} className="w-full h-14 px-5 rounded-xl bg-[#e2e8f0] border-none focus:ring-2 focus:ring-orange-500 transition-all font-medium outline-none disabled:opacity-50">
                    <option value="">Sélectionnez une commune</option>
                    {communes.map(commune => (
                      <option key={commune.id} value={commune.id}>{commune.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 ml-1">Email</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="contact@exemple.com" className="w-full h-14 px-5 rounded-xl bg-[#e2e8f0] border-none focus:ring-2 focus:ring-orange-500 transition-all font-medium placeholder:text-slate-400 outline-none" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 ml-1">Téléphone</label>
                  <div className="relative flex items-center">
                    <div className="absolute left-4 flex items-center gap-2 pointer-events-none border-r border-slate-300 pr-3">
                      <span className="text-sm font-bold text-slate-600">+213</span>
                    </div>
                    <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="05 50 12 34 56" className="w-full h-14 pl-24 pr-5 rounded-xl bg-[#e2e8f0] border-none focus:ring-2 focus:ring-orange-500 transition-all font-medium placeholder:text-slate-400 outline-none" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 ml-1">Adresse / Ville</label>
                  <input name="address" type="text" value={form.address} onChange={handleChange} required placeholder="Alger" className="w-full h-14 px-5 rounded-xl bg-[#e2e8f0] border-none focus:ring-2 focus:ring-orange-500 transition-all font-medium placeholder:text-slate-400 outline-none" />
                </div>
              </div>

              {/* File Upload Section */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border-2 border-blue-200 space-y-5">
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-blue-600" style={{ fontVariationSettings: "'FILL' 1" }}>cloud_upload</span>
                  <h4 className="text-[10px] font-black text-blue-700 uppercase tracking-[0.15em]">Documents Requis</h4>
                </div>

                {/* Profile Picture Upload */}
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-600 ml-1">
                    Photo de Profil * <span className="text-blue-600">(JPG, PNG - Max 5MB)</span>
                  </label>
                  <div className="relative border-2 border-dashed border-blue-300 rounded-xl p-4 hover:border-blue-500 hover:bg-blue-100/30 transition-all cursor-pointer group">
                    <input
                      type="file"
                      accept="image/jpeg,image/png,image/gif,image/webp"
                      onChange={handleProfilePicChange}
                      required
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="text-center py-6">
                      <span className="material-symbols-outlined text-3xl text-blue-400 block mb-2 group-hover:text-blue-600 transition-colors">image</span>
                      <p className="text-sm font-bold text-slate-600" >
                        {files.profilePic ? files.profilePic.name : 'Cliquez pour télécharger votre photo'}
                      </p>
                      <p className="text-xs text-slate-400 mt-1">ou glissez-déposez une image</p>
                    </div>
                  </div>
                </div>

                {/* Documents Upload */}
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-600 ml-1">
                    Justificatifs / Certificats * <span className="text-blue-600">(Max 5 fichiers, 10MB chacun)</span>
                  </label>
                  <div className="relative border-2 border-dashed border-indigo-300 rounded-xl p-4 hover:border-indigo-500 hover:bg-indigo-100/30 transition-all cursor-pointer group">
                    <input
                      type="file"
                      multiple
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      onChange={handleDocumentsChange}
                      required
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="text-center py-6">
                      <span className="material-symbols-outlined text-3xl text-indigo-400 block mb-2 group-hover:text-indigo-600 transition-colors">folder_open</span>
                      <p className="text-sm font-bold text-slate-600">
                        {files.documents.length > 0 ? `${files.documents.length} fichier(s) sélectionné(s)` : 'Sélectionnez vos documents'}
                      </p>
                      <p className="text-xs text-slate-400 mt-1">PDF, DOC, DOCX, JPG, PNG acceptés</p>
                    </div>
                  </div>
                  {files.documents.length > 0 && (
                    <div className="bg-white rounded-lg p-3 space-y-2">
                      {files.documents.map((doc, idx) => (
                        <div key={idx} className="flex items-center justify-between text-sm text-slate-600 bg-slate-50 p-2 rounded">
                          <span className="truncate">{doc.name}</span>
                          <span className="text-xs text-slate-400">({(doc.size / 1024 / 1024).toFixed(2)}MB)</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 ml-1">Mot de passe</label>
                  <input name="password" type="password" value={form.password} onChange={handleChange} required placeholder="••••••••" className="w-full h-14 px-5 rounded-xl bg-[#e2e8f0] border-none focus:ring-2 focus:ring-orange-500 transition-all font-medium outline-none" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 ml-1">Confirmer</label>
                  <input name="confirm" type="password" value={form.confirm} onChange={handleChange} required placeholder="••••••••" className="w-full h-14 px-5 rounded-xl bg-[#e2e8f0] border-none focus:ring-2 focus:ring-orange-500 transition-all font-medium outline-none" />
                </div>
              </div>

              <div className="bg-slate-100 p-5 rounded-xl border-l-4 border-orange-500">
                <h4 className="text-[10px] font-black text-slate-500 mb-3 uppercase tracking-wider">Sécurité du mot de passe :</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                  <Check ok={passwordChecks.length} label="8+ Caractères" />
                  <Check ok={passwordChecks.startLetter} label="Commence par une lettre" />
                  <Check ok={passwordChecks.hasUpper} label="Contient une majuscule" />
                  <Check ok={passwordChecks.hasNumber} label="Contient un chiffre" />
                </ul>
              </div>

              <div className="flex items-start gap-3 py-2">
                <input type="checkbox" checked={terms} onChange={(e) => setTerms(e.target.checked)} className="mt-1 w-5 h-5 rounded border-none bg-[#e2e8f0] text-orange-500 focus:ring-orange-500 cursor-pointer" />
                <label className="text-sm text-slate-500 leading-relaxed cursor-pointer" onClick={() => setTerms(!terms)}>
                  J'accepte les <a href="#" className="text-orange-500 font-bold hover:underline">Conditions d'Utilisation</a> et la <a href="#" className="text-orange-500 font-bold hover:underline">Politique de Confidentialité</a>.
                </label>
              </div>

              <button type="submit" disabled={loading} className="w-full h-16 bg-orange-500 text-white font-black text-lg rounded-2xl shadow-xl shadow-orange-500/30 hover:-translate-y-0.5 active:scale-[0.99] transition-all flex items-center justify-center gap-3 disabled:opacity-60">
                {loading ? (
                  <><span className="animate-spin h-6 w-6 border-4 border-white/30 border-t-white rounded-full"></span>Création du compte...</>
                ) : (
                  <>S'inscrire en tant que Professionnel<span className="material-symbols-outlined">arrow_forward</span></>
                )}
              </button>

              <div className="pt-2 text-center">
                <p className="text-slate-500 text-sm font-medium">
                  Déjà membre ? <Link to="/login/artisan" className="text-orange-500 font-black ml-1 hover:underline">Se connecter</Link>
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ArtisanRegister;
