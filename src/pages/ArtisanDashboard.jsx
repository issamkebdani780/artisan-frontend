import React, { useEffect, useState } from 'react';
import ArtisanLayout from '../layouts/ArtisanLayout';
import apiService from '../services/api';
import ChatModal from '../components/ChatModal';

const ArtisanDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [pendingDevis, setPendingDevis] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatUser, setChatUser] = useState(null);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const [stats, setStats] = useState({
    totalRevenue: 0,
    completedBookings: 0,
    activeBookings: 0,
    pendingDevis: 0,
    totalDevis: 0,
    rating: 0,
    reviewCount: 0,
    isVerified: false
  });

  const fetchDashboardData = async () => {
    setLoading(true);
    try {
      if (currentUser && currentUser.id) {
        const [bookingData, devisData, assignedDevis, dashboardStats, latestUser] = await Promise.all([
          apiService.getArtisanBookings(currentUser.id),
          apiService.getPendingDevis(currentUser.specialty || 'Plomberie'),
          apiService.getArtisanDevis(currentUser.id),
          apiService.getArtisanDashboardStats(currentUser.id),
          apiService.getUserById(currentUser.id)
        ]);

        setCurrentUser(latestUser);
        localStorage.setItem('user', JSON.stringify(latestUser));
        
        const safeBookingData = Array.isArray(bookingData) ? bookingData : [];
        const safeAssignedDevis = Array.isArray(assignedDevis) ? assignedDevis : [];

        const combined = [
          ...safeBookingData.map(b => ({ ...b, type: 'booking' })),
          ...safeAssignedDevis.filter(d => d.artisan_id !== null).map(d => ({
            id: `d-${d.id}`,
            service_title: d.category_name,
            client_name: d.client_name,
            client_id: d.client_id,
            booking_date: d.date,
            status: d.status,
            total_price: d.budget,
            type: 'devis'
          }))
        ].sort((a, b) => new Date(b.booking_date) - new Date(a.booking_date));

        setBookings(combined);
        setPendingDevis(devisData);
        setStats(dashboardStats);
      }
    } catch (err) {
      console.error('Error fetching dashboard data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, [currentUser?.id]);

  const updateStatus = async (item, newStatus) => {
    try {
      if (item.type === 'devis') {
        const devisId = item.id.toString().replace('d-', '');
        let statusToUpdate = newStatus;
        if (newStatus === 'confirmed') statusToUpdate = 'accepté';
        if (newStatus === 'completed') statusToUpdate = 'terminé';
        if (newStatus === 'cancelled') statusToUpdate = 'annulé';
        
        await apiService.updateDevisStatus(devisId, statusToUpdate);
        setBookings(prev => 
          prev.map(b => b.id === item.id ? { ...b, status: statusToUpdate } : b)
        );
      } else {
        await apiService.updateBookingStatus(item.id, newStatus);
        setBookings(prev =>
          prev.map(b => b.id === item.id ? { ...b, status: newStatus } : b)
        );
      }
      fetchDashboardData(); // Refresh stats mostly
    } catch (err) {
      alert('Erreur lors de la mise à jour du statut');
    }
  };

  const handleAcceptDevis = async (devisId) => {
    try {
      await apiService.acceptDevis(devisId);
      setPendingDevis(prev => prev.filter(d => d.id !== devisId));
      fetchDashboardData(); // Refresh bookings and stats
      alert('Bravo ! Vous avez accepté ce projet.');
    } catch (err) {
      alert("Erreur lors de l'acceptation du devis");
    }
  };


  const activeProjects = bookings.filter(b => b.status === 'confirmed' || b.status === 'pending' || b.status === 'en attente').length;

  return (
    <ArtisanLayout title="Mihnati PRO" subtitle="Premium Plan">
      <div className="p-8 flex flex-col gap-10 flex-1 overflow-y-auto font-['Outfit',sans-serif] bg-slate-50/20">
        
        {/* Verification Status Banner */}
        {Number(currentUser?.is_verified) !== 1 && (
          <div className={`${Number(currentUser?.is_verified) === -1 ? 'bg-red-50 border-red-200' : 'bg-amber-50 border-amber-200'} border-2 rounded-[32px] p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-700`}>
            <div className="flex items-center gap-6">
              <div className={`size-16 rounded-full ${Number(currentUser?.is_verified) === -1 ? 'bg-red-200/50 text-red-700' : 'bg-amber-200/50 text-amber-700'} flex items-center justify-center shrink-0`}>
                <span className="material-symbols-outlined text-4xl font-black">{Number(currentUser?.is_verified) === -1 ? 'error' : 'pending_actions'}</span>
              </div>
              <div className="space-y-1 text-center md:text-left">
                <h4 className={`text-xl font-black tracking-tight uppercase ${Number(currentUser?.is_verified) === -1 ? 'text-red-900' : 'text-amber-900'}`}>
                  {Number(currentUser?.is_verified) === -1 ? 'Votre dossier a été refusé' : 'Votre profil est en cours de vérification'}
                </h4>
                <p className={`${Number(currentUser?.is_verified) === -1 ? 'text-red-700/70' : 'text-amber-700/70'} text-[10px] font-bold uppercase tracking-widest leading-relaxed`}>
                  {Number(currentUser?.is_verified) === -1 
                    ? "Certains documents ne sont pas conformes. Veuillez consulter vos messages pour plus de détails et mettre à jour votre profil."
                    : "Nos administrateurs examinent vos documents. Vous recevrez une notification une fois validé."
                  }
                </p>
              </div>
            </div>
            <a href="/dashboard/artisan/settings" className={`px-8 py-4 ${Number(currentUser?.is_verified) === -1 ? 'bg-red-900 shadow-red-900/20' : 'bg-amber-900 shadow-amber-900/20'} text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl hover:scale-[1.02] active:scale-95 transition-all`}>
              {Number(currentUser?.is_verified) === -1 ? 'Rectifier mon dossier' : 'Vérifier mes documents'}
            </a>
          </div>
        )}

        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h2 className="text-4xl font-black tracking-tight text-slate-900 uppercase transition-colors">Bonjour, {currentUser?.name || 'Artisan'} 👋</h2>
            <p className="text-slate-500 mt-2 font-bold uppercase tracking-widest text-xs">Vous avez <span className="text-secondary">{activeProjects}</span> projets actifs à traiter</p>
          </div>
          <div className="flex gap-4">
            <a 
              href="/dashboard/artisan/pricing"
              className="flex items-center gap-3 px-8 py-4 bg-secondary text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl shadow-secondary/30 hover:scale-[1.02] active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-sm font-black">add_circle</span>
              Nouveau Service
            </a>
          </div>
        </div>

        {/* New Opportunities (Devis Broadcast) */}
        {pendingDevis.length > 0 && (
          <section className="bg-white rounded-[40px] p-10 border-2 border-secondary/20 shadow-2xl shadow-secondary/5 relative overflow-hidden group transition-colors">
            <div className="absolute right-0 top-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="size-3 rounded-full bg-secondary animate-pulse shadow-[0_0_15px_rgba(255,107,0,0.5)]"></div>
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Opportunités à saisir ({pendingDevis.length})</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
              {pendingDevis.map(devis => (
                <div key={devis.id} className="bg-slate-50 p-8 rounded-[32px] border border-slate-100 space-y-6 hover:bg-white hover:border-secondary/30 transition-all group/card shadow-sm hover:shadow-xl">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="px-4 py-1.5 bg-secondary text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-secondary/20">{devis.category_name}</span>
                      <h4 className="mt-4 text-lg font-black text-slate-900 uppercase tracking-tight">{devis.client_name}</h4>
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-black text-secondary">{devis.budget} DA</span>
                      <p className="text-[10px] font-bold text-slate-400 uppercase mt-1">Budget estimé</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed italic border-l-2 border-secondary/30 pl-4">"{devis.description}"</p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-slate-400">
                      <span className="material-symbols-outlined text-lg">event</span>
                      <span className="text-xs font-black uppercase tracking-tight">{new Date(devis.date).toLocaleDateString()}</span>
                    </div>
                    <button 
                      onClick={() => handleAcceptDevis(devis.id)}
                      className="px-8 py-3 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-secondary transition-all shadow-xl active:scale-95"
                    >
                      Accepter
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: 'Revenus Totaux', value: `${(stats.totalRevenue || 0).toLocaleString()} DA`, icon: 'payments', trend: 'Paiements cumulés', color: 'bg-emerald-50 text-emerald-600' },
            { label: 'Projets Actifs', value: (stats.activeBookings || 0) + (stats.pendingDevis || 0), icon: 'pending_actions', trend: 'À traiter', color: 'bg-orange-50 text-orange-600' },
            { label: 'Avis Clients', value: `${stats.rating || '0.0'}/5`, icon: 'star', trend: `${stats.reviewCount || 0} avis`, color: 'bg-yellow-50 text-yellow-600' },
            { label: 'Total Projets', value: (stats.completedBookings || 0) + (stats.totalDevis || 0), icon: 'assignment', trend: 'Expérience globale', color: 'bg-secondary text-white', highlight: true }
          ].map((stat, i) => (
            <div key={i} className={`p-8 rounded-[32px] border border-slate-100 shadow-xl shadow-slate-200/40 relative overflow-hidden group transition-all hover:translate-y-[-4px] ${stat.highlight ? 'bg-secondary text-white' : 'bg-white'}`}>
              {!stat.highlight && <div className="absolute -right-6 -top-6 size-24 bg-slate-50 rounded-full group-hover:scale-150 transition-transform duration-700"></div>}
              <div className="relative z-10">
                <div className={`size-12 rounded-2xl flex items-center justify-center mb-6 shadow-sm ${stat.highlight ? 'bg-white/20' : stat.color}`}>
                  <span className="material-symbols-outlined font-black">{stat.icon}</span>
                </div>
                <p className={`text-[10px] font-black uppercase tracking-widest mb-1 ${stat.highlight ? 'text-white/70' : 'text-slate-400'}`}>{stat.label}</p>
                <h3 className="text-3xl font-black tracking-tighter transition-colors">{stat.value}</h3>
                <p className={`text-[10px] font-bold uppercase mt-4 flex items-center gap-1 ${stat.highlight ? 'text-white/80' : 'text-slate-500'}`}>
                  <span className="material-symbols-outlined text-xs">trending_up</span>
                  {stat.trend}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Projects List */}
        <div className="bg-white rounded-[40px] border border-slate-100 shadow-xl shadow-slate-200/40 overflow-hidden mb-12 transition-colors">
          <div className="p-8 md:p-10 border-b border-slate-50 flex justify-between items-center bg-white">
            <div>
              <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Réservations Récentes</h4>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Historique des 30 derniers jours</p>
            </div>
            <button className="size-12 rounded-2xl bg-slate-50 flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all shadow-sm active:scale-90" onClick={() => window.location.reload()}>
              <span className="material-symbols-outlined font-black">refresh</span>
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50">
                  <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Service / Client</th>
                  <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Date</th>
                  <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Statut</th>
                  <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] text-right">Montant</th>
                  <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {loading ? (
                  <tr>
                    <td colSpan="5" className="px-10 py-20 text-center">
                      <div className="flex flex-col items-center gap-4">
                        <span className="animate-spin h-10 w-10 border-4 border-secondary/20 border-t-secondary rounded-full"></span>
                        <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Chargement...</p>
                      </div>
                    </td>
                  </tr>
                ) : bookings.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="px-10 py-20 text-center">
                      <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Aucune donnée disponible</p>
                    </td>
                  </tr>
                ) : (
                  bookings.map((booking) => (
                    <tr key={booking.id} className="hover:bg-slate-50/50 transition-all group">
                      <td className="px-10 py-8">
                        <div className="flex flex-col gap-1">
                          <span className="font-black text-slate-900 uppercase tracking-tight text-sm">{booking.service_title}</span>
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-xs">account_circle</span>
                            {booking.client_name} {booking.client_phone ? `• ${booking.client_phone}` : ''}
                          </span>
                        </div>
                      </td>
                      <td className="px-10 py-8">
                        <span className="text-xs font-black text-slate-600 uppercase">
                          {new Date(booking.booking_date).toLocaleDateString('fr-FR', {
                            day: 'numeric', month: 'short', year: 'numeric'
                          })}
                        </span>
                      </td>
                      <td className="px-10 py-8">
                        <span className={`px-4 py-1.5 text-[9px] font-black rounded-full shadow-sm uppercase tracking-widest ${
                          booking.status === 'confirmed' || booking.status === 'accepté' ? 'bg-indigo-50 text-indigo-600 border border-indigo-100' :
                          booking.status === 'completed' || booking.status === 'terminé' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' :
                          booking.status === 'cancelled' || booking.status === 'refusé' || booking.status === 'annulé' ? 'bg-red-50 text-red-600 border border-red-100' :
                          'bg-slate-50 text-slate-600 border border-slate-100'
                        }`}>
                          {booking.status}
                        </span>
                      </td>
                      <td className="px-10 py-8 text-right">
                        <span className="text-lg font-black text-slate-900">{booking.total_price} DA</span>
                      </td>
                      <td className="px-10 py-8 text-center">
                        <div className="flex items-center justify-center gap-3">
                          {(booking.status === 'pending' || booking.status === 'en attente' || booking.status === 'cancelled' || booking.status === 'annulé') && (
                            <button onClick={() => updateStatus(booking, 'confirmed')} className="size-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all shadow-sm active:scale-90" title="Confirmer">
                              <span className="material-symbols-outlined text-sm font-black">check</span>
                            </button>
                          )}
                          {booking.status === 'confirmed' && (
                            <button onClick={() => updateStatus(booking, 'completed')} className="size-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all shadow-sm active:scale-90" title="Terminer">
                              <span className="material-symbols-outlined text-sm font-black">done_all</span>
                            </button>
                          )}
                          {booking.status !== 'completed' && booking.status !== 'terminé' && booking.status !== 'cancelled' && booking.status !== 'annulé' && (
                            <button onClick={() => updateStatus(booking, 'cancelled')} className="size-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all shadow-sm active:scale-90" title="Annuler">
                              <span className="material-symbols-outlined text-sm font-black">close</span>
                            </button>
                          )}
                          <button 
                            onClick={() => {
                              setChatUser({ id: booking.client_id, name: booking.client_name });
                              setSelectedProjectId(booking.id);
                              setIsChatOpen(true);
                            }}
                            className="size-10 rounded-xl bg-slate-50 text-slate-600 flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm active:scale-90 border border-slate-100" 
                            title="Messages"
                          >
                            <span className="material-symbols-outlined text-sm font-black">message</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {isChatOpen && chatUser && (
        <ChatModal 
          isOpen={isChatOpen}
          onClose={() => setIsChatOpen(false)}
          otherUser={chatUser}
          devisId={selectedProjectId?.toString().startsWith('d-') ? selectedProjectId.replace('d-', '') : null}
          bookingId={!selectedProjectId?.toString().startsWith('d-') ? selectedProjectId : null}
        />
      )}
    </ArtisanLayout>
  );
};

export default ArtisanDashboard;
