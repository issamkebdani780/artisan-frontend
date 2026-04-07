import React, { useEffect, useState } from 'react';
import ArtisanLayout from '../layouts/ArtisanLayout';
import apiService from '../services/api';

const ArtisanProjects = () => {
  const [projects, setProjects] = useState([]);
  const [pendingDevis, setPendingDevis] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('Tous');
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        if (user && user.id) {
          const [bookingData, assignedDevis, unassignedDevis] = await Promise.all([
            apiService.getArtisanBookings(user.id),
            apiService.getArtisanDevis(user.id),
            apiService.getPendingDevis(user.specialty || 'Plomberie')
          ]);
          
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

          setProjects(combined);
          setPendingDevis(unassignedDevis);
        }
      } catch (err) {
        console.error('Error fetching projects:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const updateStatus = async (item, newStatus) => {
    try {
      if (item.type === 'devis') {
        const devisId = item.id.toString().replace('d-', '');
        // Map common "ui" statuses to devis specific database statuses
        let statusToUpdate = newStatus;
        if (newStatus === 'confirmed') statusToUpdate = 'accepté';
        if (newStatus === 'completed') statusToUpdate = 'terminé';
        if (newStatus === 'cancelled') statusToUpdate = 'annulé';
        
        await apiService.updateDevisStatus(devisId, statusToUpdate);
        setProjects(projects.map(p => p.id === item.id ? { ...p, status: statusToUpdate } : p));
      } else {
        await apiService.updateBookingStatus(item.id, newStatus);
        setProjects(projects.map(p => p.id === item.id ? { ...p, status: newStatus } : p));
      }
    } catch (err) {
      alert('Erreur lors de la mise à jour du statut');
    }
  };

  const handleAcceptDevis = async (devisId) => {
    try {
      await apiService.acceptDevis(devisId);
      alert('Bravo ! Vous avez accepté ce projet.');
      window.location.reload();
    } catch (err) {
      alert('Erreur lors de l\'acceptation du devis');
    }
  };

  const filteredProjects = projects.filter(p => {
    if (filter === 'Tous') return true;
    if (filter === 'En cours') return p.status === 'confirmed' || p.status === 'pending' || p.status === 'en attente' || p.status === 'accepté';
    if (filter === 'Terminés') return p.status === 'completed' || p.status === 'terminé';
    if (filter === 'Annulés') return p.status === 'cancelled' || p.status === 'annulé';
    return true;
  });

  return (
    <ArtisanLayout title="Artisan PRO" subtitle="Gestion des projets">
      <div className="p-8 flex-1 flex flex-col overflow-y-auto">
        
        {/* Page Title & CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 text-slate-900 dark:text-white">
          <div>
            <h1 className="text-3xl font-black tracking-tight mb-2 text-slate-900 dark:text-white">Gestion des Projets</h1>
            <p className="text-slate-500">Suivez l'état de vos chantiers en cours et passés.</p>
          </div>
        </div>

        {/* Pending Opportunities Section */}
        {pendingDevis.length > 0 && (
          <section className="mb-10 bg-linear-to-r from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20 rounded-3xl p-8 border border-orange-200 dark:border-orange-900/50">
            <div className="flex items-center gap-3 mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
              </span>
              <h3 className="text-xl font-black text-orange-900 dark:text-orange-200">Demandes disponibles dans votre secteur ({pendingDevis.length})</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pendingDevis.map(devis => (
                <div key={devis.id} className="bg-white dark:bg-stone-900 p-6 rounded-2xl shadow-sm border border-orange-200/50 dark:border-stone-800 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-[10px] font-black uppercase">{devis.category_name}</span>
                      <h4 className="mt-2 font-black text-slate-900 dark:text-white">{devis.client_name}</h4>
                    </div>
                    <span className="text-sm font-black text-secondary">{devis.budget} DA</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 italic">"{devis.description}"</p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-slate-400 font-bold flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">calendar_today</span>
                      {new Date(devis.date).toLocaleDateString()}
                    </span>
                    <button 
                      onClick={() => handleAcceptDevis(devis.id)}
                      className="px-6 py-2 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-xl text-xs font-black hover:bg-slate-800 transition-all"
                    >
                      Accepter
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Tabs */}
        <div className="border-b border-slate-200 mb-6">
          <div className="flex gap-8 overflow-x-auto custom-scrollbar">
            {['Tous', 'En cours', 'Terminés', 'Annulés'].map(t => (
              <button 
                key={t}
                onClick={() => setFilter(t)}
                className={`border-b-2 pb-4 font-bold text-sm whitespace-nowrap transition-colors ${filter === t ? 'border-secondary text-secondary' : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'}`}
              >
                {t === 'Tous' ? 'Tous les projets' : t}
              </button>
            ))}
          </div>
        </div>

        {/* Table Card */}
        <div className="bg-white dark:bg-stone-900 rounded-2xl border border-slate-200 dark:border-stone-800 shadow-sm overflow-hidden flex flex-col">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50 dark:bg-stone-800/50">
                <tr>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Projet / Service</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Client</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Montant</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Statut</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-stone-800">
                {loading ? (
                  <tr>
                    <td colSpan="6" className="px-6 py-12 text-center text-slate-400">
                      <div className="flex flex-col items-center gap-2">
                        <span className="animate-spin h-8 w-8 border-4 border-secondary/30 border-t-secondary rounded-full"></span>
                        Chargement des projets...
                      </div>
                    </td>
                  </tr>
                ) : filteredProjects.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="px-6 py-12 text-center text-slate-400">
                      Aucun projet trouvé.
                    </td>
                  </tr>
                ) : (
                  filteredProjects.map((project) => (
                    <tr key={project.id} className="hover:bg-slate-50 dark:hover:bg-stone-800 transition-colors group">
                      <td className="px-6 py-5">
                        <div className="flex flex-col">
                          <span className="font-bold text-slate-900 dark:text-white group-hover:text-secondary transition-colors capitalize">{project.service_title}</span>
                          <span className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">{project.type}</span>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-slate-600 dark:text-slate-300 font-medium">{project.client_name}</td>
                      <td className="px-6 py-5 text-slate-600 dark:text-slate-400 text-sm">
                        {new Date(project.booking_date).toLocaleDateString('fr-FR', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric'
                        })}
                      </td>
                      <td className="px-6 py-5 font-black text-slate-900 dark:text-white">{project.total_price} DA</td>
                      <td className="px-6 py-5">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                          project.status === 'confirmed' || project.status === 'accepté' ? 'bg-blue-100 text-blue-700' :
                          project.status === 'completed' || project.status === 'terminé' ? 'bg-emerald-100 text-emerald-700' :
                          project.status === 'cancelled' || project.status === 'annulé' || project.status === 'refusé' ? 'bg-red-100 text-red-700' :
                          'bg-orange-100 text-orange-700'
                        }`}>
                          {project.status}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <div className="flex items-center justify-end gap-2">
                          {(project.status === 'pending' || project.status === 'en attente') && (
                            <button 
                              onClick={() => updateStatus(project, 'confirmed')}
                              className="p-2 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-100 transition-colors"
                              title="Confirmer"
                            >
                              <span className="material-symbols-outlined text-sm">check</span>
                            </button>
                          )}
                          {(project.status === 'confirmed' || project.status === 'accepté') && (
                            <button 
                              onClick={() => updateStatus(project, 'completed')}
                              className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                              title="Terminer"
                            >
                              <span className="material-symbols-outlined text-sm">done_all</span>
                            </button>
                          )}
                          {project.status !== 'completed' && project.status !== 'terminé' && project.status !== 'cancelled' && project.status !== 'annulé' && (
                            <button 
                              onClick={() => updateStatus(project, 'cancelled')}
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

          <div className="px-6 py-4 bg-slate-50 dark:bg-stone-900/50 border-t border-slate-100 dark:border-stone-800 flex items-center justify-between mt-auto">
            <p className="text-sm text-slate-500 dark:text-slate-400">Affichage de {filteredProjects.length} projets</p>
          </div>
        </div>
      </div>
    </ArtisanLayout>
  );
};

export default ArtisanProjects;
