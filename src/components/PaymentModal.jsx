import React, { useState } from 'react';
import apiService from '../services/api';

const PaymentModal = ({ isOpen, onClose, project, onPaymentSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1); // 1: Method selection, 2: Card details, 3: Success

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

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in font-['Outfit',sans-serif]">
      <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-[2.5rem] shadow-2xl shadow-indigo-500/10 overflow-hidden border border-slate-100 dark:border-white/5">
        
        {/* Header */}
        <div className="p-8 border-b border-slate-50 dark:border-white/5 relative">
          <button onClick={onClose} className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors">
            <span className="material-symbols-outlined font-black">close</span>
          </button>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Paiement Sécurisé</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Transaction directe avec l'artisan {project.artisan_name}</p>
        </div>

        <div className="p-8">
          {step === 1 && (
            <div className="space-y-6">
              <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-3xl border border-indigo-100 dark:border-indigo-500/20">
                <p className="text-[10px] font-black uppercase text-indigo-400 tracking-widest mb-1">Montant à régler</p>
                <p className="text-4xl font-black text-indigo-600 dark:text-indigo-400 tracking-tighter">{project.total_price} DA</p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <button 
                  onClick={() => setStep(2)}
                  className="flex items-center justify-between p-5 bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-white/5 rounded-3xl hover:border-indigo-500 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="size-12 rounded-2xl bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 flex items-center justify-center">
                      <span className="material-symbols-outlined font-black">credit_card</span>
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-slate-900 dark:text-white">Carte Bancaire / CIB</p>
                      <p className="text-xs text-slate-500">Paiement instantané</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-slate-300 group-hover:text-indigo-500 transition-colors">chevron_right</span>
                </button>

                <button 
                  onClick={() => handlePayment('transfer')}
                  disabled={loading}
                  className="flex items-center justify-between p-5 bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-white/5 rounded-3xl hover:border-amber-500 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="size-12 rounded-2xl bg-amber-100 dark:bg-amber-900/40 text-amber-600 flex items-center justify-center">
                      <span className="material-symbols-outlined font-black">account_balance</span>
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-slate-900 dark:text-white">Virement Bancaire</p>
                      <p className="text-xs text-slate-500">Validation sous 24h</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-slate-300 group-hover:text-amber-500 transition-colors">chevron_right</span>
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
               <div className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Numéro de carte</label>
                    <input type="text" placeholder="0000 0000 0000 0000" className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-white/5 rounded-2xl focus:border-indigo-500 outline-none transition-all dark:text-white" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Expiration</label>
                      <input type="text" placeholder="MM/YY" className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-white/5 rounded-2xl focus:border-indigo-500 outline-none transition-all dark:text-white" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">CVC</label>
                      <input type="text" placeholder="123" className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-white/5 rounded-2xl focus:border-indigo-500 outline-none transition-all dark:text-white" />
                    </div>
                  </div>
               </div>
               <button 
                onClick={() => handlePayment('card')}
                disabled={loading}
                className="w-full py-5 bg-indigo-600 text-white rounded-[1.5rem] font-black text-sm uppercase tracking-widest hover:bg-indigo-700 shadow-xl shadow-indigo-600/20 active:scale-95 transition-all disabled:opacity-50"
               >
                 {loading ? 'Traitement...' : `Payer ${project.total_price} DA`}
               </button>
               <button onClick={() => setStep(1)} className="w-full py-2 text-slate-400 font-bold text-xs hover:text-slate-600 transition-colors uppercase tracking-widest">Retour</button>
            </div>
          )}

          {step === 3 && (
            <div className="py-10 text-center space-y-4">
              <div className="size-20 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 scale-110">
                <span className="material-symbols-outlined text-4xl font-black">verified</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Paiement Réussi !</h3>
              <p className="text-slate-500 dark:text-slate-400">Votre demande est désormais validée et payée. L'artisan va débuter l'intervention.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
