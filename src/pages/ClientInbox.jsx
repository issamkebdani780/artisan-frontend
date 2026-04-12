import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import apiService from '../services/api';
import ClientLayout from '../layouts/ClientLayout';
import PaymentModal from '../components/PaymentModal';
import ChatModal from '../components/ChatModal';

const ClientInbox = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reviewModal, setReviewModal] = useState(null); // { artisanId, artisanName }
  const [reviewForm, setReviewForm] = useState({ rating: 0, comment: '' });
  const [reviewSubmitting, setReviewSubmitting] = useState(false);
  const [reviewedIds, setReviewedIds] = useState(new Set());
  const [selectedProject, setSelectedProject] = useState(null);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatUser, setChatUser] = useState(null);
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login/client');
      return;
    }
    fetchDevis();
  }, [user?.id]);

  const fetchDevis = async () => {
    try {
      const data = await apiService.getUserDevis(user.id);
      setBookings(data);
    } catch (err) {
      console.error('Failed to fetch devis:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (devisId) => {
    if (!window.confirm('Supprimer cette demande définitivement ?')) return;
    try {
      await apiService.deleteDevis(devisId);
      setBookings(prev => prev.filter(d => d.id !== devisId));
    } catch (err) {
      alert("Erreur lors de la suppression.");
    }
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    if (reviewForm.rating === 0) return alert('Veuillez choisir une note.');
    setReviewSubmitting(true);
    try {
      const res = await apiService.submitReview({
        artisan_id: reviewModal.artisanId,
        rating: reviewForm.rating,
        comment: reviewForm.comment,
      });
      if (res.error) {
        alert(res.error);
      } else {
        setReviewedIds(prev => new Set([...prev, reviewModal.artisanId]));
        setReviewModal(null);
        setReviewForm({ rating: 0, comment: '' });
        alert('⭐ Merci pour votre avis !');
      }
    } catch (err) {
      alert(`Erreur lors de l'envoi: ${err.message}`);
    } finally {
      setReviewSubmitting(false);
    }
  };

  const getStatusStyle = (status) => {
    switch(status) {
      case 'en attente': return 'bg-amber-50 text-amber-600 border-amber-100';
      case 'accepté': return 'bg-indigo-50 text-indigo-600 border-indigo-100';
      case 'refusé': return 'bg-red-50 text-red-600 border-red-100';
      case 'terminé': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      default: return 'bg-slate-50 text-slate-600 border-slate-100';
    }
  };

  return (
    <ClientLayout title="Mihnati Client" subtitle="Gestion des demandes">
      <div className="p-8 md:p-12 flex flex-col flex-1 bg-slate-50/20 font-['Outfit',sans-serif]">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tight">Mes Demandes</h2>
            <p className="text-slate-500 mt-2 font-bold uppercase tracking-widest text-xs">Suivez l'état de vos projets en temps réel</p>
          </div>
        </div>

        {loading ? (
          <div className="flex-1 flex flex-col items-center justify-center py-20">
            <span className="animate-spin h-12 w-12 border-4 border-primary border-t-transparent rounded-full mb-4"></span>
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Chargement de vos demandes...</p>
          </div>
        ) : bookings.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center bg-white rounded-[40px] border-2 border-dashed border-slate-100 p-20 text-center shadow-sm">
            <div className="size-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 mb-8">
              <span className="material-symbols-outlined text-4xl">inventory_2</span>
            </div>
            <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-2">Aucune demande trouvée</h3>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] max-w-xs mx-auto mb-10 leading-relaxed text-center">Vous n'avez pas encore de demandes de devis actives sur la plateforme.</p>
            <button 
              onClick={() => navigate('/search')}
              className="px-10 py-4 border-2 border-primary text-primary rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-xl shadow-primary/10 active:scale-95"
            >
              Parcourir les artisans
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8">
            {bookings.map(devis => (
              <div key={devis.id} className="bg-white rounded-[40px] border border-slate-100 p-8 md:p-10 shadow-2xl shadow-slate-200/40 hover:shadow-primary/5 transition-all group overflow-hidden relative">
                <div className="absolute right-0 top-0 w-32 h-full bg-slate-50/30 -skew-x-12 translate-x-16 group-hover:translate-x-12 transition-transform duration-700"></div>
                
                <div className="flex flex-col lg:flex-row gap-10 relative z-10">
                  <div className="flex-1 space-y-8">
                    <div className="flex flex-wrap items-center gap-4">
                      <span className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border shadow-sm ${getStatusStyle(devis.status)}`}>
                        {devis.status}
                      </span>
                      <div className="h-4 w-px bg-slate-200 hidden sm:block"></div>
                      <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">event</span>
                        Créé le: {new Date(devis.createdAt || devis.date).toLocaleDateString()}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-3xl font-black text-slate-900 uppercase tracking-tight group-hover:text-primary transition-colors mb-3">
                        {devis.category_name}
                      </h4>
                      <p className="text-slate-500 font-medium leading-relaxed italic border-l-3 border-primary/20 pl-6 text-sm">
                        "{devis.description}"
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-12 pt-4">
                      <div className="flex items-center gap-4">
                        <div className={`size-14 rounded-2xl flex items-center justify-center font-black shadow-sm ${devis.artisan_name ? 'bg-slate-100 text-slate-400 border border-slate-200' : 'bg-amber-50 text-amber-500 border border-amber-100 animate-pulse'}`}>
                          <span className="material-symbols-outlined">{devis.artisan_name ? 'person' : 'person_search'}</span>
                        </div>
                        <div>
                          <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">Artisan</p>
                          <p className={`text-sm font-black uppercase tracking-tight ${devis.artisan_name ? 'text-slate-900' : 'text-amber-600'}`}>
                            {devis.artisan_name || "En sélection..."}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="size-14 bg-indigo-50 border border-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm">
                          <span className="material-symbols-outlined font-black">payments</span>
                        </div>
                        <div>
                          <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">Budget Prévu</p>
                          <p className="text-lg font-black text-slate-900 tracking-tight">{devis.budget} <span className="text-xs ml-1">DA</span></p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row lg:flex-col justify-end gap-4 min-w-[240px] pt-8 lg:pt-0 border-t lg:border-t-0 lg:border-l border-slate-50 lg:pl-10">
                     {devis.status === 'accepté' && (
                        <button
                          onClick={() => {
                            setSelectedProject({
                              ...devis,
                              id: `d-${devis.id}`,
                              type: 'devis',
                              total_price: devis.budget,
                              service_title: devis.category_name
                            });
                            setIsPaymentOpen(true);
                          }}
                          className="flex-1 lg:flex-none h-14 px-8 bg-indigo-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl shadow-indigo-600/20 hover:bg-indigo-700 transition-all flex items-center justify-center gap-3 active:scale-95"
                        >
                          <span className="material-symbols-outlined text-sm font-black">payments</span>
                          Débloquer le paiement
                        </button>
                     )}
                    <button 
                      onClick={() => {
                        setChatUser({ id: devis.artisan_id, name: devis.artisan_name });
                        setSelectedProject(devis);
                        setIsChatOpen(true);
                      }}
                      disabled={!devis.artisan_id}
                      className="flex-1 lg:flex-none h-14 px-8 bg-primary text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:shadow-xl hover:shadow-primary/20 transition-all flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50"
                    >
                       <span className="material-symbols-outlined text-sm font-black">message</span>
                       Messages
                    </button>
                    {(devis.status === 'accepté' || devis.status === 'terminé') && devis.artisan_id && !reviewedIds.has(devis.artisan_id) && (
                      <button
                        onClick={() => setReviewModal({ artisanId: devis.artisan_id, artisanName: devis.artisan_name })}
                        className="flex-1 lg:flex-none h-14 px-8 bg-amber-50 border border-amber-100 text-amber-600 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-amber-100 transition-all active:scale-95 flex items-center justify-center gap-3"
                      >
                        <span className="material-symbols-outlined text-sm font-black">social_leaderboard</span>
                        Laisser un avis
                      </button>
                    )}
                    <button
                       onClick={() => handleDelete(devis.id)}
                       className="flex-1 lg:flex-none h-14 px-8 bg-white border border-red-100 text-red-500 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-red-50 transition-all active:scale-95 flex items-center justify-center gap-3"
                    >
                       <span className="material-symbols-outlined text-sm font-black">delete</span>
                       Supprimer
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) }
      </div>

      {/* Review Modal */}
      {reviewModal && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-slate-900/60 backdrop-blur-md px-4 animate-in fade-in duration-300" onClick={() => setReviewModal(null)}>
          <div className="bg-white rounded-[40px] shadow-2xl p-10 w-full max-w-lg border border-slate-100 animate-in zoom-in-95 duration-300" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-8">
              <div>
                <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2">Artisan: {reviewModal.artisanName}</p>
                <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Rédiger un avis</h3>
              </div>
              <button onClick={() => setReviewModal(null)} className="size-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:text-red-500 transition-all active:scale-90 shadow-sm border border-slate-100">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <form onSubmit={handleSubmitReview} className="space-y-8">
              <div className="bg-slate-50/50 p-8 rounded-[32px] border border-slate-100">
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest text-center mb-6">Quelle note donnez-vous ?</p>
                <div className="flex justify-center gap-3">
                  {[1,2,3,4,5].map(star => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setReviewForm(f => ({ ...f, rating: star }))}
                      className={`text-4xl transition-all hover:scale-125 ${
                        star <= reviewForm.rating ? 'text-amber-400 drop-shadow-md scale-110' : 'text-slate-200'
                      }`}
                    >
                      {star <= reviewForm.rating ? '★' : '☆'}
                    </button>
                  ))}
                </div>
                {reviewForm.rating > 0 && (
                  <p className="text-[10px] font-black text-amber-600 uppercase tracking-widest mt-6 text-center bg-white px-4 py-2 rounded-full border border-amber-100 shadow-sm w-fit mx-auto">
                    {['', 'Insatisfaisant', 'Moyen', 'Satisfaisant', 'Très Satisfaisant', 'Exceptionnel !'][reviewForm.rating]}
                  </p>
                )}
              </div>
              
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Votre commentaire</label>
                <textarea
                  rows={4}
                  placeholder="Partagez votre expérience avec cet artisan..."
                  value={reviewForm.comment}
                  onChange={e => setReviewForm(f => ({ ...f, comment: e.target.value }))}
                  className="w-full rounded-[32px] bg-slate-50 border border-slate-100 p-8 text-slate-900 focus:bg-white focus:border-primary outline-none resize-none transition-all font-medium text-sm leading-relaxed"
                />
              </div>
              
              <button
                type="submit"
                disabled={reviewSubmitting || reviewForm.rating === 0}
                className="w-full bg-slate-900 text-white h-20 rounded-[32px] font-black text-sm uppercase tracking-widest hover:bg-primary transition-all disabled:opacity-50 flex items-center justify-center gap-4 shadow-2xl shadow-slate-900/20 active:scale-[0.98]"
              >
                {reviewSubmitting ? (
                  <span className="animate-spin h-6 w-6 border-4 border-white/30 border-t-white rounded-full"></span>
                ) : (
                  <>
                    <span className="material-symbols-outlined font-black">send_and_archive</span>
                    Publier l'avis
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}

       {selectedProject && (
        <PaymentModal 
          isOpen={isPaymentOpen}
          onClose={() => setIsPaymentOpen(false)}
          project={selectedProject}
          onPaymentSuccess={fetchDevis}
        />
       )}

       {selectedProject && isChatOpen && (
        <ChatModal 
          isOpen={isChatOpen}
          onClose={() => setIsChatOpen(false)}
          otherUser={chatUser}
          devisId={selectedProject.id}
        />
       )}
    </ClientLayout>
  );
};

export default ClientInbox;
