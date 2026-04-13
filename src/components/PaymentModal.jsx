import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import apiService from '../services/api';

const PaymentModal = ({ isOpen, onClose, project, onPaymentSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1); // 1: Method selection, 2: Card details, 3: Success

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePayment = async (method) => {
    setLoading(true);
    try {
      const paymentData = {
        devis_id: project.type === 'devis' ? project.id.replace('d-', '') : null,
        booking_id: project.type === 'booking' ? project.id : null,
        artisan_id: project.artisan_id,
        amount: project.total_price,
        payment_method: method,
        transaction_id: 'PAY_' + Math.random().toString(36).substr(2, 9).toUpperCase()
      };

      await apiService.processPayment(paymentData);
      setStep(3);
      setTimeout(() => {
        onPaymentSuccess();
        onClose();
      }, 2000);
    } catch (err) {
      alert("Erreur lors du paiement: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const modalContent = (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-6 bg-slate-900/80 backdrop-blur-xl animate-in fade-in duration-300 font-['Outfit',sans-serif]">
      <div className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-[0_32px_128px_-16px_rgba(0,0,0,0.5)] overflow-hidden border border-white/20 relative">
        
        {/* Animated Background Highlights */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
        <div className="absolute -top-24 -left-24 size-48 bg-indigo-500/10 blur-[100px] rounded-full"></div>
        <div className="absolute -bottom-24 -right-24 size-48 bg-purple-500/10 blur-[100px] rounded-full"></div>

        {/* Header */}
        <div className="p-8 md:p-10 border-b border-slate-50 relative overflow-hidden">
          <button 
            onClick={onClose} 
            className="absolute top-8 right-8 size-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-red-500 transition-all active:scale-90 z-10"
          >
            <span className="material-symbols-outlined font-black text-xl">close</span>
          </button>
          
          <div className="flex items-center gap-4 mb-2">
            <div className="px-3 py-1 bg-indigo-100 text-indigo-600 text-[10px] font-black uppercase tracking-[0.2em] rounded-full">
              Safe Transaction
            </div>
          </div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight leading-none">Paiement Sécurisé</h2>
          <p className="text-slate-500 text-sm mt-3 font-medium">Réparer votre maison avec l'expert <span className="text-indigo-600 font-bold">{project.artisan_name}</span></p>
        </div>

        <div className="p-8 md:p-10 max-h-[70vh] overflow-y-auto custom-scrollbar">
          {step === 1 && (
            <div className="space-y-8">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative bg-slate-50 p-8 rounded-3xl border border-white">
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-2">Total de la commande</p>
                  <div className="flex items-baseline gap-2">
                    <p className="text-5xl font-black text-slate-900 tracking-tighter">{project.total_price}</p>
                    <p className="text-xl font-black text-indigo-500 tracking-widest">DA</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] ml-2">Sélectionner une méthode</p>
                
                <button 
                  onClick={() => setStep(2)}
                  className="w-full flex items-center justify-between p-6 bg-white border border-slate-100 rounded-3xl hover:border-indigo-500 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all group scale-100 active:scale-[0.98]"
                >
                  <div className="flex items-center gap-5">
                    <div className="size-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center transform group-hover:rotate-6 transition-transform">
                      <span className="material-symbols-outlined text-2xl font-black">credit_card</span>
                    </div>
                    <div className="text-left">
                      <p className="font-black text-slate-900 text-base">Carte Bancaire / CIB</p>
                      <p className="text-xs text-slate-500">Confirmation instantanée</p>
                    </div>
                  </div>
                  <div className="size-8 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-indigo-500 group-hover:text-white transition-all">
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                  </div>
                </button>

                <button 
                  onClick={() => handlePayment('transfer')}
                  disabled={loading}
                  className="w-full flex items-center justify-between p-6 bg-white border border-slate-100 rounded-3xl hover:border-amber-500 hover:shadow-2xl hover:shadow-amber-500/10 transition-all group scale-100 active:scale-[0.98]"
                >
                  <div className="flex items-center gap-5">
                    <div className="size-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center transform group-hover:rotate-6 transition-transform">
                      <span className="material-symbols-outlined text-2xl font-black">account_balance</span>
                    </div>
                    <div className="text-left">
                      <p className="font-black text-slate-900 text-base">Virement Bancaire (CCP)</p>
                      <p className="text-xs text-slate-500">Validation manuelle</p>
                    </div>
                  </div>
                  <div className="size-8 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-all">
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                  </div>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] font-black uppercase text-slate-400 tracking-widest bg-slate-50 py-3 rounded-2xl border border-slate-100">
                <span className="material-symbols-outlined text-sm text-emerald-500">lock</span>
                Chiffrage SSL 256-bit
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8 animate-in slide-in-from-right-8 duration-300">
               <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Numéro de carte</label>
                    <div className="relative">
                      <span className="absolute left-5 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400">credit_card</span>
                      <input type="text" placeholder="0000 0000 0000 0000" className="w-full pl-14 pr-5 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:border-indigo-500 outline-none transition-all font-mono tracking-widest" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Expiration</label>
                      <input type="text" placeholder="MM / YY" className="w-full px-5 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:border-indigo-500 outline-none transition-all font-mono text-center" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">CVC</label>
                      <input type="password" placeholder="***" className="w-full px-5 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:border-indigo-500 outline-none transition-all font-mono text-center" />
                    </div>
                  </div>
               </div>
               
               <div className="space-y-4">
                <button 
                  onClick={() => handlePayment('card')}
                  disabled={loading}
                  className="w-full py-6 bg-indigo-600 text-white rounded-[1.5rem] font-black text-sm uppercase tracking-widest shadow-[0_20px_40px_-10px_rgba(79,70,229,0.3)] hover:bg-indigo-700 active:scale-95 transition-all disabled:opacity-50 flex items-center justify-center gap-3"
                >
                  {loading ? (
                    <span className="animate-spin size-5 border-2 border-white/30 border-t-white rounded-full"></span>
                  ) : (
                    <>
                      <span className="material-symbols-outlined">verified_user</span>
                      Confirmer le paiement
                    </>
                  )}
                </button>
                <button onClick={() => setStep(1)} className="w-full py-2 text-slate-400 font-black text-[10px] hover:text-slate-600 transition-colors uppercase tracking-[0.3em]">Annuler et retourner</button>
               </div>
            </div>
          )}

          {step === 3 && (
            <div className="py-12 text-center space-y-6 animate-in zoom-in-95 duration-500">
              <div className="size-24 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 relative">
                <div className="absolute inset-0 bg-emerald-500 animate-ping rounded-full opacity-20"></div>
                <span className="material-symbols-outlined text-5xl font-black relative z-10">check_circle</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-black text-slate-900 tracking-tight">Paiement Réussi</h3>
                <p className="text-slate-500 font-medium max-w-xs mx-auto">Votre intervention a été validée. L'artisan recevra ses fonds dès la fin des travaux.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
};

export default PaymentModal;
