import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import apiService from '../services/api';

const ClientLogin = () => {
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
      const response = await apiService.login({ email, password, role: 'client' });
      if (response.token) {
        navigate('/dashboard/client/inbox');
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
    <div className="bg-[#f8fafc] w-full min-h-screen flex items-center justify-center p-6 md:p-12 font-['Outfit',sans-serif] transition-colors">
      <main className="w-full max-w-2xl">
        <div className="bg-white p-8 md:p-16 rounded-2xl shadow-[0_30px_60px_-12px_rgba(37,99,235,0.12),0_18px_36px_-18px_rgba(0,0,0,0.05)] border border-slate-100 transition-colors">
          <header className="mb-12 text-center relative">
            <div className="flex justify-center mb-8">
              <div className="bg-slate-100 p-1.5 rounded-2xl flex gap-2 w-fit border border-slate-200/50 shadow-inner">
                <Link to="/login/client" className="px-8 py-2.5 bg-white text-blue-600 rounded-xl shadow-lg font-black text-sm uppercase tracking-widest transition-all">
                  CLIENT
                </Link>
                <Link to="/login/artisan" className="px-8 py-2.5 text-slate-500 hover:text-slate-900 rounded-xl font-black text-sm uppercase tracking-widest transition-all">
                  ARTISAN
                </Link>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 transition-colors">Connexion Client</h2>
            <p className="text-slate-500 mt-4 text-lg transition-colors">Ravis de vous revoir parmi nous</p>
          </header>
          
          {error && (
            <div className="mb-8 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 flex items-center gap-3 rounded-r-xl transition-colors">
              <span className="material-symbols-outlined">error</span>
              <p className="font-semibold">{error}</p>
            </div>
          )}

          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="space-y-3">
              <label className="text-sm font-bold uppercase tracking-widest text-slate-500 ml-1 transition-colors">Adresse Email</label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors text-2xl">mail</span>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nom@exemple.com" 
                  required
                  className="w-full bg-slate-100 border-2 border-transparent rounded-xl py-5 pl-14 pr-6 text-lg text-slate-900 focus:ring-0 focus:border-blue-500 focus:bg-white transition-all outline-none" 
                />
              </div>
            </div>
            
            <div className="space-y-3">
              <label className="text-sm font-bold uppercase tracking-widest text-slate-500 ml-1 transition-colors">Mot de passe</label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors text-2xl">lock</span>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢" 
                  required
                  className="w-full bg-slate-100 border-2 border-transparent rounded-xl py-5 pl-14 pr-6 text-lg text-slate-900 focus:ring-0 focus:border-blue-500 focus:bg-white transition-all outline-none" 
                />
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-600 transition-all" />
                <span className="text-base text-slate-500 group-hover:text-slate-900 transition-colors">Se souvenir de moi</span>
              </label>
              <Link to="/forgot-password" title="RÃ©initialiser mon mot de passe" className="text-base font-semibold text-blue-600 hover:text-blue-700 hover:underline underline-offset-8 transition-colors">
                Mot de passe oubliÃ© ?
              </Link>
            </div>
            
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-gradient-to-br from-blue-600 to-blue-500 text-white font-bold py-5 rounded-xl shadow-xl shadow-blue-500/25 active:scale-[0.98] transition-all duration-200 mt-6 text-xl flex items-center justify-center gap-3"
            >
              {loading ? (
                <>
                  <span className="animate-spin h-6 w-6 border-4 border-white/30 border-t-white rounded-full"></span>
                  Connexion...
                </>
              ) : (
                'Se connecter'
              )}
            </button>
          </form>
          
          <div className="mt-12 pt-10 border-t border-slate-100">
            <p className="text-center text-slate-500 text-lg transition-colors">
              Pas encore de compte ?{' '}
              <Link to="/register/client" className="text-blue-600 font-bold hover:text-blue-700 hover:underline underline-offset-8 transition-colors">
                CrÃ©er un profil client
              </Link>
            </p>
          </div>
          
          {/* AI Insight Component */}
          <div className="mt-12 p-6 bg-slate-50 rounded-xl border-l-[6px] border-blue-600 flex gap-5 items-start transition-colors">
            <span className="material-symbols-outlined text-blue-600 text-3xl">lightbulb</span>
            <p className="text-sm text-slate-500 leading-relaxed transition-colors">
              <span className="font-bold text-slate-900 text-base block mb-1">Conseil :</span> 
              Utilisez une adresse email valide pour recevoir vos confirmations de commande et les notifications de suivi en direct sur votre tableau de bord.
            </p>
          </div>
        </div>
        
        {/* Footer Links */}
        <div className="mt-10 flex justify-center gap-10 pb-8 transition-colors">
          <a href="#" className="text-sm font-semibold uppercase tracking-widest text-slate-400 hover:text-blue-600 transition-colors">Privacy Policy</a>
          <a href="#" className="text-sm font-semibold uppercase tracking-widest text-slate-400 hover:text-blue-600 transition-colors">Terms of Service</a>
        </div>
      </main>
    </div>
  );
};

export default ClientLogin;

