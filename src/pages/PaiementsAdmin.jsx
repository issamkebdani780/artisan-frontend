import React, { useState, useEffect } from 'react';
import AdminLayout from '../layouts/AdminLayout';
import apiService from '../services/api';

const PaiementsAdmin = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalRevenue: 0,
    pendingPayments: 0,
    successRate: 99.2
  });

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const data = await apiService.getAllPayments();
        setPayments(data);
        
        // Calculate basic stats locally if not provided by backend
        const total = data.reduce((acc, curr) => acc + Number(curr.total_price || 0), 0);
        const pending = data.filter(p => p.status === 'pending').length;
        
        setStats(prev => ({
          ...prev,
          totalRevenue: total,
          pendingPayments: pending
        }));
      } catch (err) {
        console.error('Failed to fetch payments:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchPayments();
  }, []);

  const handleUpdateStatus = async (id, status) => {
    try {
      await apiService.updateBookingStatus(id, status);
      setPayments(payments.map(p => p.id === id ? { ...p, status } : p));
      
      // Re-calculate stats
      const newStatus = status;
      const oldStatus = payments.find(p => p.id === id).status;
      if (oldStatus === 'pending' && newStatus === 'confirmed') {
        setStats(prev => ({ ...prev, pendingPayments: Math.max(0, prev.pendingPayments - 1) }));
      }
    } catch (err) {
      alert('Erreur: ' + err.message);
    }
  };

  return (
    <AdminLayout title="Finances & Flux">
      <div className="space-y-10">
        
        {/* HeaderSection */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-1">
            <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Flux Financiers</h2>
            <p className="text-slate-500 dark:text-slate-400 font-medium">Surveillance globale des transactions et de la performance économique.</p>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 px-6 py-3 rounded-2xl font-bold text-sm shadow-sm hover:shadow-md transition-all">
              <span className="material-symbols-outlined text-lg">download</span>
              Exporter PDF
            </button>
            <button className="bg-primary text-white px-8 py-3 rounded-2xl font-black text-sm shadow-lg shadow-primary/30 hover:brightness-110 transition-all">
              Audit Complet
            </button>
          </div>
        </div>

        {/* Financial Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-4xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-white/50 dark:border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
            <p className="text-[10px] font-black tracking-widest text-slate-400 uppercase mb-4">REVENU GLOBAL BRUT</p>
            <div className="flex items-baseline gap-4">
              <h3 className="text-4xl font-black tracking-tighter text-slate-900 dark:text-white">
                {loading ? '...' : `${stats.totalRevenue.toLocaleString()} €`}
              </h3>
              <span className="flex items-center text-xs font-black text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1 rounded-full">
                <span className="material-symbols-outlined text-sm mr-1">trending_up</span>
                12.5%
              </span>
            </div>
            <div className="mt-8 flex justify-between items-center opacity-40 group-hover:opacity-100 transition-all">
              <p className="text-[10px] font-bold text-slate-400">CROISSANCE MENSUELLE</p>
              <div className="size-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">payments</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 dark:shadow-none border border-white/50 dark:border-white/5 relative overflow-hidden group">
            <p className="text-[10px] font-black tracking-widest text-slate-400 uppercase mb-4">TRANSACTIONS ACTIVES</p>
            <div className="flex items-baseline gap-4">
              <h3 className="text-4xl font-black tracking-tighter text-slate-900 dark:text-white">
                {loading ? '...' : stats.pendingPayments}
              </h3>
              <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">En attente</span>
            </div>
            <div className="mt-8 flex justify-between items-center opacity-40 group-hover:opacity-100 transition-all">
              <p className="text-[10px] font-bold text-slate-400">PRÊT POUR AUDIT</p>
              <div className="size-10 rounded-xl bg-amber-50 dark:bg-amber-900/30 flex items-center justify-center text-amber-600">
                <span className="material-symbols-outlined">hourglass_empty</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 dark:shadow-none border border-white/50 dark:border-white/5 relative overflow-hidden group">
            <p className="text-[10px] font-black tracking-widest text-slate-400 uppercase mb-4">FIABILITÉ DU RÉSEAU</p>
            <div className="flex items-baseline gap-4">
              <h3 className="text-4xl font-black tracking-tighter text-slate-900 dark:text-white">{stats.successRate}%</h3>
              <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">Global</span>
            </div>
            <div className="mt-8 flex justify-between items-center opacity-40 group-hover:opacity-100 transition-all">
              <p className="text-[10px] font-bold text-slate-400">STABILITÉ OPÉRATIONNELLE</p>
              <div className="size-10 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600">
                <span className="material-symbols-outlined">verified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Transaction Table */}
        <div className="bg-white dark:bg-slate-800 rounded-[2.5rem] shadow-xl shadow-slate-200/50 dark:shadow-none border border-white/50 dark:border-white/5 overflow-hidden">
          <div className="p-10 border-b border-slate-100 dark:border-white/5 flex justify-between items-center">
            <div>
              <h4 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Dernières Transactions</h4>
              <p className="text-slate-400 font-medium text-sm mt-1">Historique détaillé des flux par réservation</p>
            </div>
            <button className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/50 text-slate-400 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">filter_list</span>
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-separate border-spacing-0">
              <thead>
                <tr className="text-left bg-slate-50/30 dark:bg-slate-900/30">
                  <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 dark:border-white/5">ID Transaction</th>
                  <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 dark:border-white/5">Artisan</th>
                  <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 dark:border-white/5 text-right">Montant</th>
                  <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 dark:border-white/5">Statut</th>
                  <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 dark:border-white/5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                {loading ? (
                  [1, 2, 3, 4].map(i => (
                    <tr key={i} className="animate-pulse">
                      <td colSpan="5" className="px-10 py-6"><div className="h-10 bg-slate-100 dark:bg-slate-700 rounded-2xl w-full"></div></td>
                    </tr>
                  ))
                ) : payments.length === 0 ? (
                  <tr><td colSpan="5" className="text-center py-20 text-slate-400 font-bold italic">Aucune transaction trouvée</td></tr>
                ) : payments.map((payment) => (
                  <tr key={payment.id} className="hover:bg-slate-50/50 dark:hover:bg-white/5 transition-colors group">
                    <td className="px-10 py-6">
                      <p className="font-mono text-xs font-black text-slate-700 dark:text-slate-300">#TR-{payment.id.toString().padStart(6, '0')}</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">{new Date(payment.booking_date).toLocaleDateString()}</p>
                    </td>
                    <td className="px-10 py-6">
                      <div className="flex items-center gap-4">
                        <div className="size-10 rounded-2xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center font-black text-primary dark:text-blue-400 text-xs shadow-inner">
                          {payment.artisan_name?.split(' ').map(n=>n[0]).join('') || 'A'}
                        </div>
                        <div>
                          <p className="text-sm font-black text-slate-900 dark:text-white leading-none">{payment.artisan_name}</p>
                          <p className="text-[11px] text-slate-500 font-medium mt-1 uppercase tracking-tighter">{payment.service_name}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-10 py-6 text-sm font-black text-slate-900 dark:text-white text-right">
                      {Number(payment.total_price || 0).toLocaleString()} €
                    </td>
                    <td className="px-10 py-6">
                      <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-tighter ${
                        payment.status === 'confirmed' || payment.status === 'completed' ? 'bg-emerald-100 text-emerald-700' : 
                        payment.status === 'pending' ? 'bg-amber-100 text-amber-700' : 
                        'bg-rose-100 text-rose-700'
                      }`}>
                         {payment.status === 'confirmed' || payment.status === 'completed' ? 'Succès' : payment.status === 'pending' ? 'En attente' : 'Annulé'}
                      </span>
                    </td>
                    <td className="px-10 py-6 text-right">
                      <div className="flex justify-end gap-2">
                         {payment.status === 'pending' && (
                           <button 
                            onClick={() => handleUpdateStatus(payment.id, 'confirmed')}
                            className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all"
                            title="Confirmer Transaction"
                           >
                              <span className="material-symbols-outlined font-bold">check_circle</span>
                           </button>
                         )}
                         <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined font-bold">visibility</span>
                         </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Floating Insight */}
      <div className="fixed bottom-10 right-10 max-w-sm bg-primary text-white p-8 rounded-4xl shadow-2xl shadow-primary/40 z-50 transform hover:scale-105 transition-all cursor-pointer group">
        <div className="flex items-start gap-6">
          <div className="size-12 rounded-2xl bg-white/20 flex items-center justify-center text-white shrink-0">
            <span className="material-symbols-outlined text-3xl">auto_awesome</span>
          </div>
          <div className="flex-1">
            <h5 className="text-lg font-black tracking-tight mb-2">IA Insight</h5>
            <p className="text-sm text-blue-50 font-medium leading-relaxed opacity-90">
              Le volume de transactions est stable. <span className="font-black text-white underline">Vérification</span> des paiements en attente recommandée.
            </p>
            <div className="mt-4 flex items-center gap-2 group-hover:translate-x-1 transition-transform">
              <span className="text-xs font-black uppercase tracking-widest">Détails de l'analyse</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default PaiementsAdmin;
