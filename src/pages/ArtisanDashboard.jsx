import React, { useEffect, useState } from 'react';
import ArtisanLayout from '../layouts/ArtisanLayout';
import apiService from '../services/api';

const ArtisanDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [pendingDevis, setPendingDevis] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = JSON.parse(localStorage.getItem('user'));

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

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        if (user && user.id) {
          const [bookingData, devisData, assignedDevis, dashboardStats] = await Promise.all([
            apiService.getArtisanBookings(user.id),
            apiService.getPendingDevis(user.specialty || 'Plomberie'),
            apiService.getArtisanDevis(user.id),
            apiService.getArtisanDashboardStats(user.id)
          ]);
          
          // Combine bookings and assigned devis safely
          const safeBookingData = Array.isArray(bookingData) ? bookingData : [];
          const safeAssignedDevis = Array.isArray(assignedDevis) ? assignedDevis : [];

          const combined = [
            ...safeBookingData.map(b => ({ ...b, type: 'booking' })),
            ...safeAssignedDevis.filter(d => d.artisan_id !== null).map(d => ({
              id: `d-${d.id}`,
              service_title: d.category_name,
              client_name: d.client_name,
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
    fetchDashboardData();
  }, []);

  const updateStatus = async (item, newStatus) => {
    try {
      if (item.type === 'devis') {
        const devisId = item.id.toString().replace('d-', '');
        let statusToUpdate = newStatus;
        if (newStatus === 'confirmed') statusToUpdate = 'accepté';
        if (newStatus === 'cancelled') statusToUpdate = 'refusé';
        
        await apiService.updateDevisStatus(devisId, statusToUpdate);
        // Update state instead of reloading
        setPendingDevis(prev => 
          prev.map(d => d.id === item.id ? { ...d, status: statusToUpdate } : d)
        );
      } else {
        await apiService.updateBookingStatus(item.id, newStatus);
        // Update state instead of reloading
        setBookings(prev =>
          prev.map(b => b.id === item.id ? { ...b, status: newStatus } : b)
        );
      }
    } catch (err) {
      alert('Erreur lors de la mise à jour du statut');
    }
  };

  const handleAcceptDevis = async (devisId) => {
    try {
      await apiService.acceptDevis(devisId);
      // Update state instead of reloading
      setPendingDevis(prev => prev.filter(d => d.id !== `d-${devisId}`));
      alert('Bravo ! Vous avez accepté ce projet.');
    } catch (err) {
      alert('Erreur lors de l\'acceptation du devis');
    }
  };

  const totalRevenue = bookings
    .filter(b => b.status === 'completed' || b.status === 'accepté')
    .reduce((acc, b) => acc + parseFloat(b.total_price || 0), 0);

  const activeProjects = bookings.filter(b => b.status === 'confirmed' || b.status === 'pending' || b.status === 'en attente').length;

  return (
    <ArtisanLayout title="Artisan PRO" subtitle="Premium Plan">
      <div className="p-8 flex flex-col gap-8 flex-1 overflow-y-auto font-['Outfit',sans-serif]">
        
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-slate-900">Bonjour, {user?.name || 'Artisan'} 👋</h2>
            <p className="text-slate-500 mt-1">Vous avez <span className="text-secondary font-bold">{activeProjects}</span> projets en cours aujourd'hui.</p>
          </div>
          <div className="flex gap-3">
            <a 
              href="/dashboard/artisan/pricing"
              className="flex items-center gap-2 px-6 py-3 bg-secondary text-white rounded-xl font-bold text-sm shadow-lg shadow-secondary/20 hover:scale-[1.02] transition-transform"
            >
              <span className="material-symbols-outlined text-sm">add</span>
              Ajouter un Service
            </a>
          </div>
        </div>

        {/* New Opportunities (Devis Broadcast) */}
        {pendingDevis.length > 0 && (
          <section className="bg-linear-to-r from-orange-50 to-orange-100 rounded-3xl p-8 border border-secondary/20">
            <div className="flex items-center gap-3 mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
              </span>
              <h3 className="text-xl font-black text-orange-900">Opportunités à saisir ({pendingDevis.length})</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pendingDevis.map(devis => (
                <div key={devis.id} className="bg-white p-6 rounded-2xl shadow-sm border border-secondary/20/50 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-[10px] font-black uppercase">{devis.category_name}</span>
                      <h4 className="mt-2 font-black text-slate-900 line-clamp-1">{devis.client_name} propose un projet</h4>
                    </div>
                    <span className="text-sm font-black text-secondary">{devis.budget} DA</span>
                  </div>
                  <p className="text-sm text-slate-600 line-clamp-2 italic">"{devis.description}"</p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-slate-400 font-bold flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">calendar_today</span>
                      Prévu le: {new Date(devis.date).toLocaleDateString()}
                    </span>
                    <button 
                      onClick={() => handleAcceptDevis(devis.id)}
                      className="px-6 py-2 bg-slate-900 text-white rounded-xl text-xs font-black hover:bg-slate-800 transition-all flex items-center gap-2"
                    >
                      <span className="material-symbols-outlined text-sm font-bold">check_circle</span>
                      Accepter ce projet
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-orange-500/10 shadow-sm relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-secondary/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
            <p className="text-slate-500 text-sm font-semibold relative z-10">Revenus Totaux</p>
            <h3 className="text-3xl font-black mt-2 relative z-10 text-slate-900">{(stats.totalRevenue || 0).toLocaleString()} DA</h3>
            <div className="flex items-center gap-1 mt-4 text-emerald-500 font-bold text-sm relative z-10">
              <span className="material-symbols-outlined text-sm">payments</span>
              <span>Paiements cumulés</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl border border-orange-500/10 shadow-sm relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-secondary/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
            <p className="text-slate-500 text-sm font-semibold relative z-10">Projets Actifs</p>
            <h3 className="text-3xl font-black mt-2 relative z-10 text-slate-900">{(stats.activeBookings || 0) + (stats.pendingDevis || 0)}</h3>
            <div className="flex items-center gap-1 mt-4 text-orange-500 font-bold text-sm relative z-10">
              <span className="material-symbols-outlined text-sm">pending_actions</span>
              <span>À traiter</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl border border-orange-500/10 shadow-sm relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-secondary/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
            <p className="text-slate-500 text-sm font-semibold relative z-10">Avis Clients</p>
            <h3 className="text-3xl font-black mt-2 relative z-10 text-slate-900">{stats.rating || '0.0'}/5</h3>
            <div className="flex items-center gap-1 mt-4 text-yellow-500 font-bold text-sm relative z-10">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span>{stats.reviewCount || 0} avis</span>
            </div>
          </div>
          
          <div className="bg-secondary p-6 rounded-2xl shadow-xl shadow-secondary/20 text-white relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
            <p className="text-white/80 text-sm font-semibold relative z-10">Total Projets</p>
            <h3 className="text-3xl font-black mt-2 relative z-10">{(stats.completedBookings || 0) + (stats.totalDevis || 0)}</h3>
            <div className="flex items-center gap-1 mt-4 font-bold text-sm relative z-10">
              <span className="material-symbols-outlined text-sm">assignment</span>
              Expérience globale
            </div>
          </div>
        </div>

        {/* Recent Projects List */}
        <div className="bg-white rounded-2xl border border-orange-500/10 shadow-sm overflow-hidden min-h-[400px]">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <h4 className="text-xl font-black text-slate-800">Réservations Récentes</h4>
            <button className="text-orange-500 font-bold text-sm hover:underline" onClick={() => window.location.reload()}>Actualiser</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#f8f6f6] border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Service / Client</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Statut</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Montant</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {loading ? (
                  <tr>
                    <td colSpan="5" className="px-6 py-12 text-center text-slate-400">
                      <div className="flex flex-col items-center gap-2">
                        <span className="animate-spin h-8 w-8 border-4 border-orange-500/30 border-t-orange-500 rounded-full"></span>
                        Chargement des données...
                      </div>
                    </td>
                  </tr>
                ) : bookings.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="px-6 py-12 text-center text-slate-400">
                      Aucune réservation pour le moment.
                    </td>
                  </tr>
                ) : (
                  bookings.map((booking) => (
                    <tr key={booking.id} className="hover:bg-slate-50 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="font-bold text-slate-900 capitalize">{booking.service_title}</span>
                          <span className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                            <span className="material-symbols-outlined text-xs">person</span>
                            {booking.client_name} {booking.client_phone ? `• ${booking.client_phone}` : ''}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600 font-medium">
                        {new Date(booking.booking_date).toLocaleDateString('fr-FR', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric'
                        })}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 text-[10px] font-bold rounded-full shadow-sm uppercase ${
                          booking.status === 'confirmed' || booking.status === 'accepté' ? 'bg-blue-100 text-blue-600' :
                          booking.status === 'completed' ? 'bg-emerald-100 text-emerald-600' :
                          booking.status === 'cancelled' || booking.status === 'refusé' ? 'bg-red-100 text-red-600' :
                          'bg-secondary/10 text-secondary'
                        }`}>
                          {booking.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right font-black text-slate-900">{booking.total_price} DA</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          {(booking.status === 'pending' || booking.status === 'en attente') && (
                            <button 
                              onClick={() => updateStatus(booking, 'confirmed')}
                              className="p-2 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-100 transition-colors"
                              title="Confirmer"
                            >
                              <span className="material-symbols-outlined text-sm">check</span>
                            </button>
                          )}
                          {(booking.status === 'confirmed' || booking.status === 'accepté') && (
                            <button 
                              onClick={() => updateStatus(booking, 'completed')}
                              className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                              title="Terminer"
                            >
                              <span className="material-symbols-outlined text-sm">done_all</span>
                            </button>
                          )}
                          {booking.status !== 'completed' && booking.status !== 'cancelled' && (
                            <button 
                              onClick={() => updateStatus(booking, 'cancelled')}
                              className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                              title="Annuler"
                            >
                              <span className="material-symbols-outlined text-sm">close</span>
                            </button>
                          )}
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
    </ArtisanLayout>
  );
};

export default ArtisanDashboard;
