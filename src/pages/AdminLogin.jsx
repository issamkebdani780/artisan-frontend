import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiService from '../services/api';

const AdminLogin = () => {
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
      const response = await apiService.login({ email, password, role: 'admin' });
      if (response.token) {
        navigate('/dashboard/admin');
      } else {
        setError(response.error || 'Accès refusé. Réservé aux administrateurs.');
      }
    } catch (err) {
      setError('Une erreur est survenue lors de la connexion');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-900 w-full min-h-screen flex items-center justify-center p-6 font-['Outfit',sans-serif]">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-slate-200">
            <span className="material-symbols-outlined text-slate-800 text-3xl">admin_panel_settings</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Administration</h2>
          <p className="text-slate-500 font-medium text-sm mt-1">Connexion sécurisée</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 flex items-center gap-3 rounded-r-xl text-sm">
            <span className="material-symbols-outlined text-lg">error</span>
            <p className="font-bold">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Identifiant Admin</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@bricolopro.dz" 
              required
              className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl py-4 px-5 focus:ring-0 focus:border-slate-800 transition-all outline-none" 
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Clé de Sécurité</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••" 
              required
              className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl py-4 px-5 focus:ring-0 focus:border-slate-800 transition-all outline-none" 
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-slate-900 text-white font-black py-4 rounded-xl shadow-lg active:scale-[0.98] transition-all text-sm uppercase tracking-widest flex items-center justify-center gap-2 mt-4"
          >
            {loading ? 'Authentification...' : 'Déverrouiller le Dashboard'}
          </button>
        </form>
        
        <div className="mt-8 text-center">
          <a href="/" className="text-slate-400 text-xs font-bold hover:text-slate-900 transition-colors uppercase tracking-widest">Retour au site public</a>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
