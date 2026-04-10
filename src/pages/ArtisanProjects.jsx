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
      <div className="p-8 flex-1 flex flex-col overflow-y-auto font-['Outfit',sans-serif] bg-slate-50/20">
        
        {/* Page Title & CTA */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
          <div>
            <h1 className="text-4xl font-black tracking-tight text-slate-900 uppercase">Gestion des Projets</h1>
            <p className="text-slate-500 mt-2 font-bold uppercase tracking-widest text-xs">Suivez l'état de vos chantiers en temps réel</p>
          </div>
          <div className="flex gap-4">
          </div>
        </div>

        {/* Pending Opportunities Section */}
        {pendingDevis.length > 0 && (
          <section className="mb-12 bg-white rounded-[40px] p-10 border-2 border-secondary/20 shadow-2xl shadow-secondary/5 relative overflow-hidden group">
            <div className="absolute right-0 top-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="size-3 rounded-full bg-secondary animate-pulse shadow-[0_0_15px_rgba(255,107,0,0.5)]"></div>
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Opportunités à saisir ({pendingDevis.length})</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
              {pendingDevis.map(devis => (
                <div key={devis.id} className="bg-slate-50 p-8 rounded-[32px] border border-slate-100 space-y-6 hover:bg-white hover:border-secondary/30 transition-all group/card shadow-sm hover:shadow-xl">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="px-4 py-1.5 bg-secondary text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-secondary/20">{devis.category_name}</span>
                      <h4 className="mt-4 text-lg font-black text-slate-900 uppercase tracking-tight line-clamp-1">{devis.client_name}</h4>
                    </div>
                    <span className="text-xl font-black text-secondary">{devis.budget} DA</span>
                  </div>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed italic border-l-2 border-secondary/30 pl-4">"{devis.description}"</p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="text-xs font-black text-slate-400 uppercase tracking-tight flex items-center gap-2">
                       <span className="material-symbols-outlined text-sm">event</span>
                       {new Date(devis.date).toLocaleDateString()}
                    </span>
                    <button 
                      onClick={() => handleAcceptDevis(devis.id)}
                      className="px-6 py-2.5 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-secondary transition-all shadow-xl"
                    >
                      Accepter
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Tabs / Filters */}
        <div className="flex gap-4 mb-8 overflow-x-auto custom-scrollbar pb-2">
          {['Tous', 'En cours', 'Terminés', 'Annulés'].map(t => (
            <button 
              key={t}
              onClick={() => setFilter(t)}
              className={`px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest whitespace-nowrap transition-all border ${
                filter === t 
                ? 'bg-secondary text-white border-secondary shadow-xl shadow-secondary/20 scale-105 z-10' 
                : 'bg-white text-slate-400 border-slate-100 hover:border-secondary/30 hover:text-secondary shadow-sm'
              }`}
            >
              {t === 'Tous' ? 'Tous les projets' : t}
            </button>
          ))}
        </div>

        {/* Table Card */}
        <div className="bg-white rounded-[40px] border border-slate-100 shadow-2xl shadow-slate-200/40 overflow-hidden mb-12 flex flex-col">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50">
                  <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Projet / Service</th>
                  <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Client</th>
                  <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Date</th>
                  <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Montant</th>
                  <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Statut</th>
                  <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {loading ? (
                  <tr>
                    <td colSpan="6" className="px-10 py-20 text-center">
                      <div className="flex flex-col items-center gap-4">
                        <span className="animate-spin h-10 w-10 border-4 border-secondary/20 border-t-secondary rounded-full"></span>
                        <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Chargement...</p>
                      </div>
                    </td>
                  </tr>
                ) : filteredProjects.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="px-10 py-20 text-center">
                       <div className="flex flex-col items-center gap-4 max-w-xs mx-auto">
                          <div className="size-16 rounded-full bg-slate-50 flex items-center justify-center text-slate-300">
                             <span className="material-symbols-outlined text-4xl">inbox</span>
                          </div>
                          <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Aucun projet trouvé dans cette catégorie</p>
                       </div>
                    </td>
                  </tr>
                ) : (
                  filteredProjects.map((project) => (
                    <tr key={project.id} className="hover:bg-slate-50/50 transition-all group">
                      <td className="px-10 py-8">
                        <div className="flex flex-col gap-1">
                          <span className="font-black text-slate-900 uppercase tracking-tight text-sm group-hover:text-secondary transition-colors">{project.service_title}</span>
                          <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest bg-slate-50 border border-slate-100 rounded px-2 py-0.5 w-fit">{project.type}</span>
                        </div>
                      </td>
                      <td className="px-10 py-8 text-xs font-black text-slate-600 uppercase tracking-tight">{project.client_name}</td>
                      <td className="px-10 py-8">
                        <span className="text-xs font-black text-slate-500 uppercase">
                          {new Date(project.booking_date).toLocaleDateString('fr-FR', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric'
                          })}
                        </span>
                      </td>
                      <td className="px-10 py-8 font-black text-lg text-slate-900">{project.total_price} DA</td>
                      <td className="px-10 py-8">
                        <span className={`px-4 py-1.5 text-[9px] font-black rounded-full shadow-sm uppercase tracking-widest ${
                          project.status === 'confirmed' || project.status === 'accepté' ? 'bg-indigo-50 text-indigo-600 border border-indigo-100' :
                          project.status === 'completed' || project.status === 'terminé' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' :
                          project.status === 'cancelled' || project.status === 'annulé' || project.status === 'refusé' ? 'bg-red-50 text-red-600 border border-red-100' :
                          'bg-slate-50 text-slate-600 border border-slate-100'
                        }`}>
                          {project.status}
                        </span>
                      </td>
                      <td className="px-10 py-8">
                        <div className="flex items-center justify-center gap-3">
                          {(project.status === 'pending' || project.status === 'en attente') && (
                            <button 
                              onClick={() => updateStatus(project, 'confirmed')}
                              className="size-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all shadow-sm active:scale-90"
                              title="Confirmer"
                            >
                              <span className="material-symbols-outlined text-sm font-black">check</span>
                            </button>
                          )}
                          {(project.status === 'confirmed' || project.status === 'accepté') && (
                            <button 
                              onClick={() => updateStatus(project, 'completed')}
                              className="size-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all shadow-sm active:scale-90"
                              title="Terminer"
                            >
                              <span className="material-symbols-outlined text-sm font-black">done_all</span>
                            </button>
                          )}
                          {project.status !== 'completed' && project.status !== 'terminé' && project.status !== 'cancelled' && project.status !== 'annulé' && (
                            <button 
                              onClick={() => updateStatus(project, 'cancelled')}
                              className="size-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all shadow-sm active:scale-90"
                              title="Annuler"
                            >
                              <span className="material-symbols-outlined text-sm font-black">close</span>
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

          <div className="px-10 py-6 bg-slate-50/50 border-t border-slate-50 flex items-center justify-between">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Affichage de {filteredProjects.length} projets actifs</p>
            <div className="flex gap-2">
               <button className="size-8 rounded-lg bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-secondary transition-all shadow-sm">
                  <span className="material-symbols-outlined text-sm">chevron_left</span>
               </button>
               <button className="size-8 rounded-lg bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-secondary transition-all shadow-sm">
                  <span className="material-symbols-outlined text-sm">chevron_right</span>
               </button>
            </div>
          </div>
        </div>
      </div>
    </ArtisanLayout>
  );
};

export default ArtisanProjects;
