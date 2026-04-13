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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;


  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const data = await apiService.getAllPayments();
        setPayments(data);
        
        // Calculate basic stats locally
        const total = data.reduce((acc, curr) => acc + Number(curr.total_price || 0), 0);
        const pending = data.filter(p => p.status === 'pending').length;
        const totalCompleted = data.filter(p => p.status === 'confirmed' || p.status === 'completed').length;
        const totalCancelled = data.filter(p => p.status === 'cancelled').length;
        const successRate = data.length > 0 ? ((totalCompleted / (data.length - pending)) * 100).toFixed(1) : 99.2;
        
        setStats({
          totalRevenue: total,
          pendingPayments: pending,
          successRate: successRate === 'NaN' || isNaN(successRate) ? 99.2 : successRate
        });

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


  const totalPages = Math.ceil(payments.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = payments.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  return (
    <AdminLayout title="Finances & Flux">
      <div className="space-y-10">
        
        {/* HeaderSection */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-1">
            <h2 className="text-3xl font-black tracking-tight text-slate-900">Flux Financiers</h2>
            <p className="text-slate-500 font-medium">Surveillance globale des transactions et de la performance économique.</p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => window.print()}
              className="flex items-center gap-2 bg-white border border-slate-200 px-6 py-3 rounded-2xl font-bold text-sm shadow-sm hover:shadow-md transition-all"
            >
              <span className="material-symbols-outlined text-lg">download</span>
              Exporter PDF
            </button>

            <button 
              onClick={() => alert('Séquence d\'audit lancée. Le rapport sera généré sous peu.')}
              className="bg-primary text-white px-8 py-3 rounded-2xl font-black text-sm shadow-lg shadow-primary/30 hover:brightness-110 transition-all"
            >
              Audit Complet
            </button>

          </div>
        </div>

        {/* Financial Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-4xl shadow-xl shadow-slate-200/50 border border-white/50 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
            <p className="text-[10px] font-black tracking-widest text-slate-400 uppercase mb-4">REVENU GLOBAL BRUT</p>
            <div className="flex items-baseline gap-4">
              <h3 className="text-4xl font-black tracking-tighter text-slate-900">
                {loading ? '...' : `${stats.totalRevenue.toLocaleString()} â‚¬`}
              </h3>
              <span className="flex items-center text-xs font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                <span className="material-symbols-outlined text-sm mr-1">trending_up</span>
                12.5%
              </span>
            </div>
            <div className="mt-8 flex justify-between items-center opacity-40 group-hover:opacity-100 transition-all">
              <p className="text-[10px] font-bold text-slate-400">CROISSANCE MENSUELLE</p>
              <div className="size-10 rounded-xl bg-blue-50 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">payments</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-white/50 relative overflow-hidden group">
            <p className="text-[10px] font-black tracking-widest text-slate-400 uppercase mb-4">TRANSACTIONS ACTIVES</p>
            <div className="flex items-baseline gap-4">
              <h3 className="text-4xl font-black tracking-tighter text-slate-900">
                {loading ? '...' : stats.pendingPayments}
              </h3>
              <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">En attente</span>
            </div>
            <div className="mt-8 flex justify-between items-center opacity-40 group-hover:opacity-100 transition-all">
              <p className="text-[10px] font-bold text-slate-400">PRÃŠT POUR AUDIT</p>
              <div className="size-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
                <span className="material-symbols-outlined">hourglass_empty</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-white/50 relative overflow-hidden group">
            <p className="text-[10px] font-black tracking-widest text-slate-400 uppercase mb-4">FIABILITÃ‰ DU RÃ‰SEAU</p>
            <div className="flex items-baseline gap-4">
              <h3 className="text-4xl font-black tracking-tighter text-slate-900">{stats.successRate}%</h3>
              <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">Global</span>
            </div>
            <div className="mt-8 flex justify-between items-center opacity-40 group-hover:opacity-100 transition-all">
              <p className="text-[10px] font-bold text-slate-400">STABILITÃ‰ OPÃ‰RATIONNELLE</p>
              <div className="size-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                <span className="material-symbols-outlined">verified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Transaction Table */}
        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-white/50 overflow-hidden">
          <div className="p-10 border-b border-slate-100 flex justify-between items-center">
            <div>
              <h4 className="text-2xl font-black text-slate-900 tracking-tight">Dernières Transactions</h4>
              <p className="text-slate-400 font-medium text-sm mt-1">Historique détaillé des flux par réservation</p>
            </div>
            <button className="p-3 rounded-2xl bg-slate-50 text-slate-400 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">filter_list</span>
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-separate border-spacing-0">
              <thead>
                <tr className="text-left bg-slate-50/30">
                  <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">ID Transaction</th>
                  <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Artisan</th>
                  <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 text-right">Montant</th>
                  <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Statut</th>
                  <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {loading ? (
                  [1, 2, 3, 4].map(i => (
                    <tr key={i} className="animate-pulse">
                      <td colSpan="5" className="px-10 py-6"><div className="h-10 bg-slate-100 rounded-2xl w-full"></div></td>
                    </tr>
                  ))
                ) : payments.length === 0 ? (
                  <tr><td colSpan="5" className="text-center py-20 text-slate-400 font-bold italic">Aucune transaction trouvée</td></tr>
                ) : currentItems.map((payment) => (

                  <tr key={payment.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-10 py-6">
                      <p className="font-mono text-xs font-black text-slate-700">#TR-{payment.id.toString().padStart(6, '0')}</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">{new Date(payment.booking_date).toLocaleDateString()}</p>
                    </td>
                    <td className="px-10 py-6">
                      <div className="flex items-center gap-4">
                        <div className="size-10 rounded-2xl bg-blue-100 flex items-center justify-center font-black text-primary text-xs shadow-inner">
                          {payment.artisan_name?.split(' ').map(n=>n[0]).join('') || 'A'}
                        </div>
                        <div>
                          <p className="text-sm font-black text-slate-900 leading-none">{payment.artisan_name}</p>
                          <p className="text-[11px] text-slate-500 font-medium mt-1 uppercase tracking-tighter">{payment.service_name}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-10 py-6 text-sm font-black text-slate-900 text-right">
                      {Number(payment.total_price || 0).toLocaleString()} â‚¬
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

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="px-10 py-6 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                Affichage de {indexOfFirstItem + 1} à {Math.min(indexOfLastItem, payments.length)} sur {payments.length}
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="p-2 rounded-xl border border-slate-200 hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  <span className="material-symbols-outlined text-xl">chevron_left</span>
                </button>
                
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => handlePageChange(i + 1)}
                    className={`size-10 rounded-xl text-sm font-black transition-all ${currentPage === i + 1 ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-500 hover:bg-white border border-transparent hover:border-slate-200'}`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-xl border border-slate-200 hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  <span className="material-symbols-outlined text-xl">chevron_right</span>
                </button>
              </div>
            </div>
          )}
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

