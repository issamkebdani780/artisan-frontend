import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import apiService from '../services/api';

const AdminLogin = () => {
  const [email, setEmail] = useState('admin@gmail.com');
  const [password, setPassword] = useState('admin123');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await apiService.login({ email, password, role: 'admin' });
      if (response.token) {
        navigate('/dashboard/admin');
      } else {
        setError(response.error || 'Accès refusé. Réservé aux administrateurs.');
      }
    } catch (err) {
      setError(err.message || 'Une erreur est survenue lors de la connexion');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6 bg-slate-950 relative overflow-hidden font-['Outfit',sans-serif]">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="w-full max-w-xl relative z-10">
        <div className="bg-white dark:bg-slate-900 rounded-[3rem] shadow-2xl border border-white/10 overflow-hidden flex flex-col md:flex-row shadow-primary/5">
          {/* Left Side: Branding (Hidden on mobile) */}
          <div className="hidden md:flex w-2/5 bg-linear-to-br from-primary to-primary-dark p-12 flex-col justify-between text-white relative">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
            </div>
            
            <div className="relative z-10">
              <div className="size-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/30">
                <span className="material-symbols-outlined text-3xl font-black">diamond</span>
              </div>
              <h1 className="text-3xl font-black tracking-tighter leading-none mb-4 uppercase">Bricolo<span className="text-secondary">Pro</span></h1>
              <p className="text-blue-100 text-sm font-medium leading-relaxed opacity-80">Interface de gestion centralisée pour le futur de l'artisanat.</p>
            </div>

            <div className="relative z-10">
              <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                <p className="text-[10px] font-black uppercase tracking-widest text-blue-200 mb-1">Status Système</p>
                <div className="flex items-center gap-2">
                   <div className="size-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_#34d399]"></div>
                   <span className="text-xs font-bold">Systèmes opérationnels</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Login Form */}
          <div className="flex-1 p-10 md:p-14 bg-white dark:bg-slate-900">
            <div className="mb-10 text-center md:text-left">
              <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Portail Admin</h2>
              <p className="text-slate-400 font-medium text-sm mt-2">Accès sécurisé réservé aux administrateurs.</p>
            </div>

            {error && (
              <div className="mb-8 p-4 bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 text-rose-700 dark:text-rose-400 flex items-center gap-3 rounded-r-2xl text-xs font-bold animate-shake">
                <span className="material-symbols-outlined text-lg">warning</span>
                <p>{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2 group">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 group-focus-within:text-primary transition-colors">Identifiant</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">alternate_email</span>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@gmail.com" 
                    required
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border-2 border-slate-100 dark:border-white/5 rounded-2xl py-4 pl-12 pr-6 focus:ring-4 focus:ring-primary/10 focus:border-primary/50 text-sm font-black text-slate-900 dark:text-white transition-all outline-none" 
                  />
                </div>
              </div>
              
              <div className="space-y-2 group">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 group-focus-within:text-primary transition-colors">Clé de Sécurité</label>
                  <button type="button" onClick={() => setShowPass(!showPass)} className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline">
                    {showPass ? 'Masquer' : 'Afficher'}
                  </button>
                </div>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">lock</span>
                  <input 
                    type={showPass ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="admin123" 
                    required
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border-2 border-slate-100 dark:border-white/5 rounded-2xl py-4 pl-12 pr-6 focus:ring-4 focus:ring-primary/10 focus:border-primary/50 text-sm font-black text-slate-900 dark:text-white transition-all outline-none" 
                  />
                </div>
              </div>

              <div className="pt-2">
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-primary hover:bg-primary-dark text-white font-black py-4.5 rounded-2xl shadow-xl shadow-primary/20 hover:shadow-primary/30 active:scale-[0.98] transition-all text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3"
                >
                  {loading ? (
                    <>
                      <div className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Authentification...
                    </>
                  ) : (
                    <>
                      DÉVERROUILLER L'ACCÈS
                      <span className="material-symbols-outlined text-sm">security</span>
                    </>
                  )}
                </button>
              </div>
            </form>
            
            <div className="mt-10 pt-10 border-t border-slate-100 dark:border-white/5 text-center">
              <Link to="/" className="inline-flex items-center gap-2 text-slate-400 text-[10px] font-black uppercase tracking-widest hover:text-primary transition-colors group">
                <span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span>
                RETOUR AU SITE PUBLIC
              </Link>
            </div>
          </div>
        </div>
        
        {/* Footer info */}
        <p className="mt-8 text-center text-slate-500 dark:text-slate-600 text-[9px] font-black uppercase tracking-[0.3em] opacity-50">
          © 2026 BRICOLOPRO ADMINISTRATION �DA� V.4.0.5 �DA� SÉCURITÉ RENFORCÉE
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
