import React, { useEffect, useState } from 'react';
import apiService from '../services/api';
import MainLayout from '../layouts/MainLayout';
import PaymentModal from '../components/PaymentModal';

const ClientProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));

  const fetchProjects = async () => {
    setLoading(true);
    try {
      if (user && user.id) {
        let bookingData = [];
        let devisData = [];

        // Fetch bookings with error handling
        try {
          bookingData = await apiService.getUserBookings(user.id);
        } catch (err) {
          console.error('Failed to fetch bookings:', err);
        }

        // Fetch devis with error handling
        try {
          devisData = await apiService.getUserDevis(user.id);
        } catch (err) {
          console.error('Failed to fetch devis:', err);
        }

        // Combine bookings and devis safely
        const safeBookingData = Array.isArray(bookingData) ? bookingData : [];
        const safeDevisData = Array.isArray(devisData) ? devisData : [];

        const combined = [
          ...safeBookingData.map(b => ({ ...b, type: 'booking' })),
          ...safeDevisData.map(d => ({
            id: `d-${d.id}`,
            artisan_id: d.artisan_id, // Important for payment
            service_title: d.category_name,
            artisan_name: d.artisan_name || 'En attente d\'attribution',
            booking_date: d.date,
            status: d.status,
            total_price: d.budget,
            type: 'devis'
          }))
        ].sort((a, b) => new Date(b.booking_date) - new Date(a.booking_date));

        setProjects(combined);
      }
    } catch (err) {
      console.error('Unexpected error fetching client projects:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleDeleteProject = async (project) => {
    if (!window.confirm('Supprimer cette demande définitivement ?')) return;
    try {
      if (project.type === 'devis') {
        const id = project.id.replace('d-', '');
        await apiService.deleteDevis(id);
      } else {
        await apiService.updateBookingStatus(project.id, 'cancelled');
      }
      setProjects(prev => prev.filter(p => p.id !== project.id));
    } catch (err) {
      alert("Erreur lors de la suppression.");
    }
  };

  return (
    <MainLayout>
      <div className="bg-slate-50 min-h-screen py-12 px-6 lg:px-20 font-['Outfit',sans-serif]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-10">
            <div>
              <h1 className="text-3xl font-black text-slate-900 tracking-tight">Mes Demandes & Réservations</h1>
              <p className="text-slate-500 mt-2">Suivez l'état de vos interventions en temps réel.</p>
            </div>
            <a href="/search" className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
              Réserver un autre service
            </a>
          </div>

          <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50/50 text-[10px] font-black uppercase text-slate-400 tracking-widest border-b border-slate-100">
                    <th className="px-8 py-5">Service / Type</th>
                    <th className="px-8 py-5">Artisan</th>
                    <th className="px-8 py-5">Date</th>
                    <th className="px-8 py-5">Budget</th>
                    <th className="px-8 py-5">Statut</th>
                    <th className="px-8 py-5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {loading ? (
                    <tr>
                      <td colSpan="6" className="px-8 py-20 text-center">
                        <div className="flex flex-col items-center gap-3">
                          <span className="animate-spin h-10 w-10 border-4 border-blue-600/30 border-t-blue-600 rounded-full"></span>
                          <p className="text-slate-400 font-bold">Chargement de vos projets...</p>
                        </div>
                      </td>
                    </tr>
                  ) : projects.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="px-8 py-20 text-center">
                        <div className="flex flex-col items-center gap-4">
                          <span className="material-symbols-outlined text-5xl text-slate-200">folder_open</span>
                          <p className="text-slate-500 font-medium">Vous n'avez pas encore de réservations en cours.</p>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    projects.map((project) => (
                      <tr key={project.id} className="hover:bg-slate-50/50 transition-colors group">
                        <td className="px-8 py-6">
                          <div className="flex flex-col">
                            <span className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors capitalize">{project.service_title}</span>
                            <span className="text-[10px] mt-1 font-black text-slate-400 uppercase tracking-widest bg-slate-100 w-fit px-2 py-0.5 rounded-full">{project.type}</span>
                          </div>
                        </td>
                        <td className="px-8 py-6 text-slate-600 font-medium">{project.artisan_name}</td>
                        <td className="px-8 py-6 text-slate-600 text-sm">
                          {new Date(project.booking_date).toLocaleDateString('fr-FR', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric'
                          })}
                        </td>
                        <td className="px-8 py-6 font-black text-slate-900">{project.total_price} DA</td>
                        <td className="px-8 py-6">
                          <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase shadow-xs ${project.status === 'confirmed' || project.status === 'accepté' ? 'bg-blue-100 text-blue-700' :
                              project.status === 'completed' ? 'bg-emerald-100 text-emerald-700' :
                                project.status === 'cancelled' || project.status === 'refusé' || project.status === 'annulé' ? 'bg-red-100 text-red-700' :
                                  'bg-orange-100 text-orange-700'
                            }`}>
                            {project.status === 'pending' || project.status === 'en attente' ? '🔍 ' :
                              project.status === 'confirmed' || project.status === 'accepté' ? '✅ ' :
                                project.status === 'completed' ? '⭐ ' : '❌ '}
                            {project.status}
                          </span>
                        </td>
                        <td className="px-8 py-6 text-right">
                          <div className="flex items-center justify-end gap-2">
                             {(project.status === 'accepté' || (project.status === 'confirmed' && project.type === 'booking')) && (
                                <button
                                  onClick={() => {
                                    setSelectedProject(project);
                                    setIsPaymentOpen(true);
                                  }}
                                  className="flex items-center gap-1.5 px-6 py-2 bg-indigo-600 text-white rounded-xl font-bold text-xs hover:bg-indigo-700 shadow-lg shadow-indigo-600/20 active:scale-95 transition-all"
                                >
                                  <span className="material-symbols-outlined text-sm">payments</span>
                                  Payer
                                </button>
                             )}
                            <button
                              onClick={() => handleDeleteProject(project)}
                              title="Supprimer"
                              className="flex items-center gap-1.5 px-4 py-2 bg-red-50 text-red-600 rounded-xl font-bold text-xs hover:bg-red-100 active:scale-95 transition-all"
                            >
                              <span className="material-symbols-outlined text-sm">delete</span>
                              Supprimer
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
      </div>
      
      {selectedProject && (
        <PaymentModal 
          isOpen={isPaymentOpen}
          onClose={() => setIsPaymentOpen(false)}
          project={selectedProject}
          onPaymentSuccess={fetchProjects}
        />
      )}
    </MainLayout>
  );
};

export default ClientProjects;
