import React, { useState, useEffect } from 'react';
import AdminLayout from '../layouts/AdminLayout';
import apiService from '../services/api';

const VerificationsAdmin = () => {
  const [artisans, setArtisans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;


  const fetchUnverified = async () => {
    try {
      const data = await apiService.getUnverifiedArtisans();
      setArtisans(data);
    } catch (err) {
      console.error('Failed to fetch unverified artisans:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const [unverifiedData, statsData] = await Promise.all([
          apiService.getUnverifiedArtisans(),
          apiService.getDetailedStats()
        ]);
        setArtisans(unverifiedData);
        setStats(statsData.verificationStats);
      } catch (err) {
        console.error('Failed to load verification data:', err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);


  const handleVerify = async (id) => {
    if (!window.confirm('Voulez-vous vraiment vÃ©rifier cet artisan ?')) return;
    try {
      await apiService.verifyArtisan(id);
      setArtisans(artisans.filter(a => a.id !== id));
    } catch (err) {
      alert('Erreur lors de la vÃ©rification');
    }
  };

  const handleReject = async (id) => {
    if (!window.confirm('Voulez-vous vraiment refuser cet artisan ?')) return;
    try {
      await apiService.refuseArtisan(id);
      setArtisans(artisans.filter(a => a.id !== id));
    } catch (err) {
      alert('Erreur lors du refus');
    }
  };



  const totalPages = Math.ceil(artisans.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = artisans.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  return (
    <AdminLayout title="Certification">
      <div className="space-y-10">
        
        {/* HeaderSection */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-1">
            <h2 className="text-3xl font-black tracking-tight text-slate-900 font-['Outfit',sans-serif]">VÃ©rifications</h2>
            <p className="text-slate-500 font-medium">GÃ©rez et examinez les demandes de certification des prestataires.</p>
          </div>
          <div className="flex bg-white px-6 py-3 rounded-2xl shadow-sm border border-slate-200 items-center gap-3">
            <span className="size-3 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-sm font-black text-slate-700 font-['Outfit',sans-serif] uppercase tracking-widest">{loading ? '...' : artisans.length} Dossiers en attente</span>
          </div>
        </div>

        {/* Verification Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: 'Attente Action', value: artisans.length, icon: 'hourglass_empty', color: 'bg-indigo-600' },
            { label: 'CertifiÃ©s ce mois', value: stats?.certifiedMonth || 0, icon: 'verified', color: 'bg-emerald-500' },
            { label: 'Total CertifiÃ©s', value: stats?.totalCertified || 0, icon: 'verified_user', color: 'bg-primary' },
          ].map((stat, i) => (

            <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-white/50 group hover:-translate-y-1 transition-all duration-300">
              <div className="flex justify-between items-start mb-6">
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest font-['Outfit',sans-serif]">{stat.label}</p>
                 <div className={`${stat.color} p-3 rounded-2xl text-white shadow-lg`}>
                   <span className="material-symbols-outlined">{stat.icon}</span>
                 </div>
              </div>
              <p className="text-4xl font-black text-slate-900 tracking-tighter">{loading && i === 0 ? '...' : stat.value}</p>
              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mt-6">
                <div className={`h-full ${stat.color} transition-all duration-1000`} style={{ width: i === 0 ? '65%' : i === 1 ? '100%' : '10%' }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Table */}
        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-white/50 overflow-hidden">
          <div className="p-10 border-b border-slate-100 flex justify-between items-center">
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">Dossiers Ã  traiter</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-separate border-spacing-0">
              <thead>
                <tr className="text-left bg-slate-50/30">
                  <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Artisan</th>
                  <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">SpÃ©cialitÃ©</th>
                  <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Inscription</th>
                  <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {loading ? (
                  [1, 2, 3].map(i => (
                    <tr key={i} className="animate-pulse">
                      <td colSpan="4" className="px-10 py-6"><div className="h-10 bg-slate-100 rounded-2xl w-full"></div></td>
                    </tr>
                  ))
                ) : artisans.length === 0 ? (
                  <tr><td colSpan="4" className="text-center py-24 text-slate-400 font-bold italic">Aucune demande en attente</td></tr>
                ) : currentItems.map(artisan => (

                  <tr key={artisan.id} className="hover:bg-slate-50/50 transition-all group">
                    <td className="px-10 py-6">
                      <div className="flex items-center gap-5">
                        <div className="size-14 bg-indigo-50 text-indigo-600 rounded-[1.25rem] flex items-center justify-center font-black text-xl shadow-inner group-hover:scale-110 transition-transform">
                          {artisan.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-base font-black text-slate-900 tracking-tight">{artisan.name}</p>
                          <p className="text-[11px] text-slate-500 font-bold uppercase mt-1">{artisan.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-10 py-6">
                      <span className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-black uppercase tracking-widest border border-slate-100">{artisan.specialty || 'N/A'}</span>
                    </td>
                    <td className="px-10 py-6">
                      <p className="text-sm font-black text-slate-500 whitespace-nowrap">{new Date(artisan.created_at).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' })}</p>
                    </td>
                    <td className="px-10 py-6 text-right">
                      <div className="flex items-center justify-end gap-3">
                        <button 
                          onClick={() => handleVerify(artisan.id)}
                          className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-emerald-500/20 transition-all active:scale-95"
                        >
                          Approuver
                        </button>
                        <button 
                          onClick={() => handleReject(artisan.id)}
                          className="px-8 py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-rose-500/20 transition-all active:scale-95"
                        >
                          Rejeter
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
                Dossiers {indexOfFirstItem + 1} - {Math.min(indexOfLastItem, artisans.length)} sur {artisans.length}
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

    </AdminLayout>
  );
};

export default VerificationsAdmin;

