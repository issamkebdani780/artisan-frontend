import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import apiService from '../services/api';

const ClientInbox = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login/client');
      return;
    }
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
    fetchDevis();
  }, [user?.id]);

  const getStatusStyle = (status) => {
    switch(status) {
      case 'en attente': return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'accepté': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'refusé': return 'bg-rose-100 text-rose-700 border-rose-200';
      default: return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-['Outfit',sans-serif]">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-8 py-4 sticky top-0 z-50 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
          <div className="size-10 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-600/30">
            <span className="material-symbols-outlined">construction</span>
          </div>
          <h1 className="text-2xl font-black tracking-tight text-slate-900">BricoloPro</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-black text-slate-900">{user?.name}</p>
            <p className="text-xs text-slate-500">Tableau de bord Client</p>
          </div>
          <div className="size-10 rounded-full bg-blue-100 border-2 border-blue-600/10 flex items-center justify-center font-black text-blue-600">
            {user?.name?.charAt(0)}
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div>
            <h2 className="text-4xl font-black text-slate-900 mb-2">Mes Demandes</h2>
            <p className="text-slate-500 text-lg">Suivez l'état de vos projets et contactez vos artisans.</p>
          </div>
          <button 
             onClick={() => navigate('/search')}
             className="bg-blue-600 text-white px-8 py-3 rounded-2xl font-black hover:shadow-xl hover:shadow-blue-600/30 transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined">add</span>
            Nouveau Projet
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20 text-slate-400">
            <span className="animate-spin h-8 w-8 border-4 border-blue-600 border-t-transparent rounded-full mr-3"></span>
            Chargement de vos projets...
          </div>
        ) : bookings.length === 0 ? (
          <div className="bg-white p-20 rounded-3xl border-2 border-dashed border-slate-200 text-center space-y-4 shadow-sm">
            <div className="size-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400 mb-6">
              <span className="material-symbols-outlined text-4xl">inventory_2</span>
            </div>
            <h3 className="text-2xl font-black text-slate-900">Aucun projet en cours</h3>
            <p className="text-slate-500 max-w-sm mx-auto">Commencez par rechercher un artisan pour votre prochain projet de rénovation.</p>
            <button 
              onClick={() => navigate('/search')}
              className="text-blue-600 font-black hover:underline mt-4 block mx-auto outline-none"
            >
              Parcourir les experts
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
            {bookings.map(devis => (
              <div key={devis.id} className="bg-white rounded-3xl border border-slate-100 p-8 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-slate-200/60 transition-all group border-l-8 border-l-blue-600">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1 space-y-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider border-2 ${getStatusStyle(devis.status)}`}>
                        {devis.status}
                      </span>
                      <span className="text-slate-400 font-bold text-xs">•</span>
                      <span className="text-slate-500 text-xs font-bold uppercase tracking-widest flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">calendar_today</span>
                        Prévu le: {new Date(devis.date).toLocaleDateString()}
                      </span>
                    </div>

                    <h4 className="text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors uppercase tracking-tight">
                      {devis.category_name}
                    </h4>

                    <p className="text-slate-500 line-clamp-2 text-sm leading-relaxed">
                      {devis.description}
                    </p>

                    <div className="flex flex-wrap gap-8">
                      <div className="flex items-center gap-3">
                        <div className={`size-12 rounded-2xl flex items-center justify-center font-black ${devis.artisan_name ? 'bg-slate-100 text-slate-500' : 'bg-amber-50 text-amber-500 animate-pulse'}`}>
                          {devis.artisan_name ? devis.artisan_name.charAt(0) : '?'}
                        </div>
                        <div>
                          <p className="text-xs text-slate-400 font-black uppercase tracking-widest">Artisan</p>
                          <p className={`text-sm font-bold ${devis.artisan_name ? 'text-slate-900' : 'text-amber-600 italic'}`}>
                            {devis.artisan_name || "En attente d'acceptation"}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="size-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                          <span className="material-symbols-outlined text-2xl font-bold">payments</span>
                        </div>
                        <div>
                          <p className="text-xs text-slate-400 font-black uppercase tracking-widest">Budget Estimé</p>
                          <p className="text-sm font-bold text-slate-900">{devis.budget} DA</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row md:flex-col justify-end gap-3 min-w-[200px]">
                    <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-xl font-black text-xs hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
                       <span className="material-symbols-outlined text-sm font-bold">message</span>
                       Message
                    </button>
                    <button className="flex-1 bg-white border-2 border-slate-100 text-slate-600 py-3 px-6 rounded-xl font-black text-xs hover:bg-slate-50 transition-all active:scale-95">
                       Détails du devis
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) }
      </main>

      <footer className="mt-20 border-t border-slate-100 py-12 text-center text-slate-400 text-sm">
        <p>© 2026 BricoloPro Algérie - Tableau de bord Client v2.0</p>
      </footer>
    </div>
  );
};

export default ClientInbox;
