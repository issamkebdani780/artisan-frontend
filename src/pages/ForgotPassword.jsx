import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import apiService from '../services/api';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [step, setStep] = useState(1); // 1: Email, 2: OTP + New Password
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRequestOTP = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');
    try {
      const res = await apiService.forgotPassword(email);
      setMessage(res.message);
      setStep(2);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      return setError('Les mots de passe ne correspondent pas');
    }
    setLoading(true);
    setError('');
    try {
      await apiService.resetPassword(email, otp, newPassword);
      setMessage('Mot de passe rÃ©initialisÃ© avec succÃ¨s !');
      setTimeout(() => navigate('/login/client'), 2000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#f8fafc] w-full min-h-screen flex items-center justify-center p-6 md:p-12 font-['Outfit',sans-serif]">
      <div className="w-full max-w-xl">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-slate-100">
          <header className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-slate-900">Mot de passe oubliÃ©</h2>
            <p className="text-slate-500 mt-3">
              {step === 1 
                ? "Entrez votre email pour recevoir un code de rÃ©initialisation" 
                : "Entrez le code reÃ§u et votre nouveau mot de passe"}
            </p>
          </header>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 flex items-center gap-3 rounded-r-xl">
              <span className="material-symbols-outlined">error</span>
              <p className="font-semibold">{error}</p>
            </div>
          )}

          {message && (
            <div className="mb-6 p-4 bg-emerald-50 border-l-4 border-emerald-500 text-emerald-700 flex items-center gap-3 rounded-r-xl">
              <span className="material-symbols-outlined">check_circle</span>
              <p className="font-semibold">{message}</p>
            </div>
          )}

          {step === 1 ? (
            <form onSubmit={handleRequestOTP} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-slate-500">Adresse Email</label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors">mail</span>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-slate-100 border-2 border-transparent rounded-xl py-4 pl-12 pr-4 focus:bg-white focus:border-blue-500 transition-all outline-none"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>
              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-blue-700 transition-all"
              >
                {loading ? 'Envoi...' : 'Recevoir le code OTP'}
              </button>
            </form>
          ) : (
            <form onSubmit={handleResetPassword} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-slate-500">Code de vÃ©rification (6 chiffres)</label>
                <input 
                  type="text" 
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                  maxLength="6"
                  className="w-full bg-slate-100 border-2 border-transparent rounded-xl py-4 px-4 text-center text-3xl font-bold tracking-[1em] focus:bg-white focus:border-blue-500 transition-all outline-none"
                  placeholder="000000"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-slate-500">Nouveau Mot de Passe</label>
                <input 
                  type="password" 
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  className="w-full bg-slate-100 border-2 border-transparent rounded-xl py-4 px-4 focus:bg-white focus:border-blue-500 transition-all outline-none"
                  placeholder="â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-slate-500">Confirmer le Mot de Passe</label>
                <input 
                  type="password" 
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full bg-slate-100 border-2 border-transparent rounded-xl py-4 px-4 focus:bg-white focus:border-blue-500 transition-all outline-none"
                  placeholder="â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢"
                />
              </div>
              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-blue-700 transition-all"
              >
                {loading ? 'RÃ©initialisation...' : 'Changer le mot de passe'}
              </button>
            </form>
          )}

          <div className="mt-8 text-center">
            <Link to="/login/client" className="text-blue-600 font-bold hover:underline">
              Retour Ã  la connexion
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

