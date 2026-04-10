import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import AdminLayout from '../layouts/AdminLayout';
import apiService from '../services/api';
const AdminArtisans = () => {
  const [searchParams] = useSearchParams();
  const [artisans, setArtisans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('Tous');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const searchQuery = searchParams.get('search')?.toLowerCase() || '';



  useEffect(() => {
    const q = searchParams.get('search')?.toLowerCase() || '';
    // No need for separate state here if we use searchParams directly in the filter
    // but the filter logic already uses searchQuery which depends on searchParams.
  }, [searchParams]);

  useEffect(() => {

    const fetchArtisans = async () => {
      try {
        const data = await apiService.getAllArtisans();
        setArtisans(data);
      } catch (err) {
        console.error('Failed to fetch artisans:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchArtisans();
  }, []);

  const handleVerify = async (id) => {
    if (!window.confirm('Voulez-vous vraiment valider cet artisan ?')) return;
    try {
      await apiService.verifyArtisan(id);
      setArtisans(artisans.map(a => a.id === id ? { ...a, is_verified: 1 } : a));
    } catch (err) {
      alert('Échec de la vérification');
    }
  };

  const handleRefuse = async (id) => {
    if (!window.confirm('Voulez-vous vraiment refuser cet artisan ?')) return;
    try {
      await apiService.refuseArtisan(id);
      setArtisans(artisans.map(a => a.id === id ? { ...a, is_verified: -1 } : a));
    } catch (err) {
      alert('Échec du refus');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Voulez-vous vraiment supprimer ce compte artisan ? Cette action est irréversible.')) return;
    try {
      await apiService.deleteUser(id);
      setArtisans(artisans.filter(a => a.id !== id));
    } catch (err) {
      alert('Échec de la suppression: ' + err.message);
    }
  };

  const filteredArtisans = artisans.filter(a => {
    const matchesSearch = !searchQuery || 
      a.name.toLowerCase().includes(searchQuery) || 
      (a.specialty && a.specialty.toLowerCase().includes(searchQuery)) ||
      a.email.toLowerCase().includes(searchQuery);

    if (!matchesSearch) return false;
    
    if (filter === 'Tous') return true;
    if (filter === 'En attente') return a.is_verified === 0;
    if (filter === 'Vérifiés') return a.is_verified === 1;
    if (filter === 'Refusés') return a.is_verified === -1;
    return true;
  });


  const totalPages = Math.ceil(filteredArtisans.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredArtisans.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  return (
    <AdminLayout title="Gestion des artisans">
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight font-[Outfit,sans-serif]">Annuaire des Artisans</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-1 font-medium">Gérez et vérifiez les professionnels inscrits sur votre plateforme.</p>
          </div>
          {/* Exporter CSV button removed */}

        </div>

        {/* Tabs / Filters */}
        <div className="flex bg-white/50 dark:bg-slate-800/50 p-1.5 rounded-3xl border border-slate-200 dark:border-white/5 w-fit">
          {['Tous', 'En attente', 'Vérifiés', 'Refusés'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-6 py-2.5 rounded-2xl text-sm font-black transition-all ${filter === tab ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
            >
              {tab}
              {tab === 'En attente' && artisans.filter(a => !a.is_verified).length > 0 && (
                <span className="ml-2 px-1.5 py-0.5 bg-secondary text-white text-[10px] rounded-md">
                  {artisans.filter(a => !a.is_verified).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Premium Table */}
        <div className="bg-white dark:bg-slate-800 rounded-[2.5rem] shadow-xl shadow-slate-200/50 dark:shadow-none border border-white/50 dark:border-white/5 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-separate border-spacing-0">
              <thead>
                <tr className="text-left bg-slate-50/50 dark:bg-slate-900/50">
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 dark:border-white/5">Artisan</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 dark:border-white/5">Spécialité</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 dark:border-white/5">Statut</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 dark:border-white/5">Évaluation</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 dark:border-white/5">Inscrit le</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 dark:border-white/5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                {loading ? (
                  [1, 2, 3, 4, 5].map(i => (
                    <tr key={i} className="animate-pulse">
                      <td colSpan="6" className="px-8 py-6"><div className="h-10 bg-slate-100 dark:bg-slate-700 rounded-2xl w-full"></div></td>
                    </tr>
                  ))
                ) : filteredArtisans.length === 0 ? (
                  <tr><td colSpan="6" className="text-center py-20 text-slate-400 font-bold italic font-[Outfit,sans-serif]">Aucun artisan trouvé</td></tr>
                ) : currentItems.map((artisan) => (

                  <tr key={artisan.id} className="hover:bg-slate-50/50 dark:hover:bg-white/5 transition-colors group font-[Outfit,sans-serif]">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="size-12 rounded-2xl bg-linear-to-br from-blue-100 to-blue-200 dark:from-blue-900/40 dark:to-blue-800/40 flex items-center justify-center font-black text-primary dark:text-blue-400 text-sm shadow-inner group-hover:scale-110 transition-transform">
                          {artisan.name.split(' ').map(n=>n[0]).join('')}
                        </div>
                        <div>
                          <p className="font-black text-slate-900 dark:text-white text-sm tracking-tight">{artisan.name}</p>
                          <p className="text-[11px] text-slate-500 font-medium mt-0.5">{artisan.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6 font-bold text-sm text-slate-600 dark:text-slate-300">
                      {artisan.specialty || 'Général'}
                    </td>
                    <td className="px-8 py-6">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${artisan.is_verified === 1 ? 'bg-emerald-100 text-emerald-700' : artisan.is_verified === -1 ? 'bg-rose-100 text-rose-700' : 'bg-amber-100 text-amber-700'}`}>
                        {artisan.is_verified === 1 ? 'Vérifié' : artisan.is_verified === -1 ? 'Refusé' : 'En attente'}
                      </span>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-secondary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="text-sm font-black text-slate-700 dark:text-slate-200">{artisan.rating || '0.0'}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 font-bold text-sm text-slate-500">
                      {new Date(artisan.created_at).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' })}
                    </td>
                    <td className="px-8 py-6 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {artisan.artisan_documents && (
                          <button 
                            onClick={() => {
                              const docs = artisan.artisan_documents.split(',');
                              docs.forEach(url => window.open(url.trim(), '_blank'));
                            }}
                            className="p-2 text-indigo-500 hover:bg-indigo-50 rounded-xl transition-colors"
                            title="Voir Documents / Certificats"
                          >
                            <span className="material-symbols-outlined font-bold">description</span>
                          </button>
                        )}
                        {artisan.is_verified === 0 && (
                          <>
                            <button 
                              onClick={() => handleVerify(artisan.id)}
                              className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-xl transition-colors"
                              title="Vérifier"
                            >
                              <span className="material-symbols-outlined font-bold">check_circle</span>
                            </button>
                            <button 
                              onClick={() => handleRefuse(artisan.id)}
                              className="p-2 text-amber-600 hover:bg-amber-50 rounded-xl transition-colors"
                              title="Refuser"
                            >
                              <span className="material-symbols-outlined font-bold">cancel</span>
                            </button>
                          </>
                        )}
                        <button 
                          onClick={() => handleDelete(artisan.id)}
                          className="p-2 text-rose-500 hover:bg-rose-50 rounded-xl transition-colors"
                          title="Supprimer"
                        >
                          <span className="material-symbols-outlined font-bold">delete</span>
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
            <div className="px-8 py-6 bg-slate-50/50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                Affichage de {indexOfFirstItem + 1} à {Math.min(indexOfLastItem, filteredArtisans.length)} sur {filteredArtisans.length}
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="p-2 rounded-xl border border-slate-200 dark:border-white/10 hover:bg-white dark:hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  <span className="material-symbols-outlined text-xl">chevron_left</span>
                </button>
                
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => handlePageChange(i + 1)}
                    className={`size-10 rounded-xl text-sm font-black transition-all ${currentPage === i + 1 ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-500 hover:bg-white dark:hover:bg-slate-800 border border-transparent hover:border-slate-200'}`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-xl border border-slate-200 dark:border-white/10 hover:bg-white dark:hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
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

export default AdminArtisans;
