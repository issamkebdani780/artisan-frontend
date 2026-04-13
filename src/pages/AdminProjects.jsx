import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import AdminLayout from '../layouts/AdminLayout';
import apiService from '../services/api';

const AdminProjects = () => {
  const [searchParams] = useSearchParams();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('Tous');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const searchQuery = searchParams.get('search')?.toLowerCase() || '';

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await apiService.getAllProjects();
        setProjects(data);
      } catch (err) {
        console.error('Failed to fetch projects:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const filteredProjects = projects.filter(p => {
    const matchesSearch = !searchQuery || 
      (p.client_name && p.client_name.toLowerCase().includes(searchQuery)) || 
      (p.artisan_name && p.artisan_name.toLowerCase().includes(searchQuery)) ||
      (p.description && p.description.toLowerCase().includes(searchQuery));

    if (!matchesSearch) return false;
    
    if (filter === 'Tous') return true;
    if (filter === 'En attente') return p.status === 'en attente';
    if (filter === 'Accepté') return p.status === 'accepté';
    if (filter === 'Terminé') return p.status === 'terminé';
    if (filter === 'Refusé') return p.status === 'refusé';
    return true;
  });

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProjects.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'accepté': return 'bg-emerald-100 text-emerald-700';
      case 'terminé': return 'bg-blue-100 text-blue-700';
      case 'refusé': return 'bg-rose-100 text-rose-700';
      case 'en attente': default: return 'bg-amber-100 text-amber-700';
    }
  };

  return (
    <AdminLayout title="Gestion des projets">
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight font-[Outfit,sans-serif]">Historique des Projets</h2>
            <p className="text-slate-500 mt-1 font-medium">Consultez tous les projets (devis) et leurs intervenants.</p>
          </div>
        </div>

        {/* Tabs / Filters */}
        <div className="flex bg-white/50 p-1.5 rounded-3xl border border-slate-200 w-fit overflow-x-auto max-w-full">
          {['Tous', 'En attente', 'Accepté', 'Terminé', 'Refusé'].map((tab) => (
            <button
              key={tab}
              onClick={() => { setFilter(tab); setCurrentPage(1); }}
              className={`px-6 py-2.5 rounded-2xl text-sm font-black transition-all whitespace-nowrap ${filter === tab ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-500 hover:text-slate-700'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Premium Table */}
        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-white/50 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-separate border-spacing-0">
              <thead>
                <tr className="text-left bg-slate-50/50">
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Projet Info</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Client</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Artisan</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Date</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Statut</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {loading ? (
                  [1, 2, 3, 4, 5].map(i => (
                    <tr key={i} className="animate-pulse">
                      <td colSpan="5" className="px-8 py-6"><div className="h-10 bg-slate-100 rounded-2xl w-full"></div></td>
                    </tr>
                  ))
                ) : filteredProjects.length === 0 ? (
                  <tr><td colSpan="5" className="text-center py-20 text-slate-400 font-bold italic font-[Outfit,sans-serif]">Aucun projet trouvé</td></tr>
                ) : currentItems.map((project) => (
                  <tr key={project.id} className="hover:bg-slate-50/50 transition-colors group font-[Outfit,sans-serif]">
                    <td className="px-8 py-6">
                      <div>
                        <p className="font-black text-slate-900 text-sm tracking-tight line-clamp-1">{project.description || 'Devis sans description'}</p>
                        <p className="text-[11px] text-slate-500 font-medium mt-0.5">ID: #{project.id}</p>
                      </div>
                    </td>
                    <td className="px-8 py-6 font-bold text-sm text-slate-600">
                      {project.client_name || 'Client Inconnu'}
                    </td>
                    <td className="px-8 py-6 font-bold text-sm text-slate-600">
                      {project.artisan_name || 'Artisan Inconnu'}
                    </td>
                    <td className="px-8 py-6 font-bold text-sm text-slate-500">
                      {new Date(project.created_at).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' })}
                    </td>
                    <td className="px-8 py-6">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${getStatusColor(project.status)}`}>
                        {project.status || 'En attente'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="px-8 py-6 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest hidden sm:block">
                Affichage de {indexOfFirstItem + 1} à {Math.min(indexOfLastItem, filteredProjects.length)} sur {filteredProjects.length}
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

export default AdminProjects;

