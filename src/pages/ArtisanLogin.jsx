import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import apiService from '../services/api';

const ArtisanLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await apiService.login({ email, password, role: 'artisan' });
      if (response.token) {
        navigate('/dashboard/artisan');
      } else {
        setError(response.error || 'Identifiants invalides');
      }
    } catch (err) {
      setError(err.message || 'Une erreur est survenue lors de la connexion');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#f8f9fc] w-full min-h-screen flex items-center justify-center relative overflow-x-hidden py-20 px-4 font-['Outfit',sans-serif]">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-15%] left-[-10%] w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-[-15%] right-[-10%] w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-[140px]"></div>
        <div className="absolute top-[20%] right-[10%] w-64 h-64 bg-indigo-500/5 rounded-full blur-[100px]"></div>
      </div>

      {/* Main Content */}
      <main className="w-full max-w-[640px] relative z-10">
        {/* Login Card */}
        <div className="bg-white rounded-3xl shadow-[0_25px_50px_-12px_rgba(16,24,40,0.08)] p-8 md:p-16 flex flex-col gap-12 border border-slate-200/60">
          
          {/* Header */}
          <div className="text-center space-y-4">
             <div className="flex justify-center mb-8 relative">
              <div className="bg-slate-100 p-1.5 rounded-2xl flex gap-2 w-fit border border-slate-200/50 shadow-inner">
                <Link to="/login/client" className="px-8 py-2.5 text-slate-500 hover:text-slate-900 rounded-xl font-black text-sm uppercase tracking-widest transition-all">
                  CLIENT
                </Link>
                <Link to="/login/artisan" className="px-8 py-2.5 bg-white text-orange-600 rounded-xl shadow-lg font-black text-sm uppercase tracking-widest transition-all">
                  ARTISAN
                </Link>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Connexion Artisan</h1>
            <p className="text-slate-500 text-lg max-w-[400px] mx-auto leading-relaxed">
              Accédez à votre tableau de bord et gérez vos services en Algérie.
            </p>
          </div>

          {error && (
            <div className="mb-4 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 flex items-center gap-3">
              <span className="material-symbols-outlined">error</span>
              <p className="font-semibold">{error}</p>
            </div>
          )}

          {/* Form */}
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="space-y-6">
              {/* Email Field */}
              <div className="space-y-3">
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500 flex items-center gap-2 px-1">
                  <span className="material-symbols-outlined text-lg text-orange-500" style={{ fontVariationSettings: "'opsz' 20" }}>mail</span>
                  Adresse Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@artisan.dz" 
                  required
                  className="w-full h-[72px] px-6 text-lg text-slate-900 bg-slate-50 border-2 border-transparent rounded-2xl focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500/40 focus:bg-white transition-all duration-300 placeholder:text-slate-400" 
                />
              </div>

              {/* Password Field */}
              <div className="space-y-3">
                <label htmlFor="password" className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500 flex items-center gap-2 px-1">
                  <span className="material-symbols-outlined text-lg text-orange-500" style={{ fontVariationSettings: "'opsz' 20" }}>lock</span>
                  Mot de passe
                </label>
                <div className="relative">
                  <input 
                    type="password" 
                    id="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••" 
                    required
                    className="w-full h-[72px] px-6 text-lg text-slate-900 bg-slate-50 border-2 border-transparent rounded-2xl focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500/40 focus:bg-white transition-all duration-300" 
                  />
                </div>
              </div>
            </div>

            {/* Options */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-base gap-4">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" className="w-5 h-5 rounded-md border-slate-200 text-orange-500 focus:ring-orange-500/20 cursor-pointer" />
                <span className="text-slate-500 group-hover:text-slate-900 transition-colors font-medium">Se souvenir de moi</span>
              </label>
              <a href="#" className="text-orange-500 font-bold hover:text-orange-400 transition-colors">Mot de passe oublié ?</a>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={loading}
              className="w-full h-[72px] bg-linear-to-br from-orange-500 to-orange-400 text-white rounded-2xl font-bold text-xl shadow-xl shadow-orange-500/20 hover:shadow-2xl hover:shadow-orange-500/30 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3"
            >
              {loading ? (
                <>
                  <span className="animate-spin h-6 w-6 border-4 border-white/30 border-t-white rounded-full"></span>
                  Connexion...
                </>
              ) : (
                'Se connecter au tableau de bord'
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative flex items-center py-4">
            <div className="grow border-t-2 border-slate-200/40"></div>
            <span className="shrink mx-4 text-slate-400 text-xs uppercase font-bold tracking-[0.25em]">Ou continuer avec</span>
            <div className="grow border-t-2 border-slate-200/40"></div>
          </div>

          {/* Footer Prompt */}
          <div className="text-center text-lg text-slate-500">
            Nouveau sur la plateforme ?{' '}
            <Link to="/register/artisan" className="text-orange-500 font-extrabold hover:underline underline-offset-8 decoration-2">
              Inscrivez-vous ici
            </Link>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-10 p-6 bg-white/80 backdrop-blur-md border border-white/50 rounded-2xl flex gap-5 items-center shadow-[0_25px_50px_-12px_rgba(16,24,40,0.08)]">
          <div className="w-14 h-14 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-orange-500 text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-base">Plateforme Certifiée</h4>
            <p className="text-sm font-medium text-slate-500 leading-relaxed">
              Votre sécurité est notre priorité. Rejoignez plus de 5,000 artisans déjà certifiés en Algérie.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ArtisanLogin;
