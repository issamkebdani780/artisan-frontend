import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import AdminLayout from '../layouts/AdminLayout';

import apiService from '../services/api';

const AdminClients = () => {
  const [searchParams] = useSearchParams();
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;



  useEffect(() => {
    const q = searchParams.get('search') || '';
    setSearch(q);
  }, [searchParams]);

  useEffect(() => {

    const fetchClients = async () => {
      try {
        const data = await apiService.getAllClients();
        setClients(data);
      } catch (err) {
        console.error('Failed to fetch clients:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchClients();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Voulez-vous vraiment supprimer ce compte client ?')) return;
    try {
      await apiService.deleteUser(id);
      setClients(clients.filter(c => c.id !== id));
    } catch (err) {
      alert('Échec de la suppression: ' + err.message);
    }
  };

  const filteredClients = clients.filter(c => {
    const query = search.toLowerCase();
    return c.name.toLowerCase().includes(query) || 
           c.email.toLowerCase().includes(query) ||
           (c.phone && c.phone.includes(query));
  });


  const totalPages = Math.ceil(filteredClients.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredClients.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  return (
    <AdminLayout title="Gestion des clients">
      <div className="space-y-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-1">
            <h2 className="text-3xl font-black tracking-tight text-slate-900">Clients Inscrits</h2>
            <p className="text-slate-500 font-medium">Gérez et suivez les inscriptions sur votre plateforme.</p>
          </div>
          <div className="flex gap-4">
            {/* Exporter CSV and Audit buttons removed */}
          </div>

        </div>

        {/* Filters Bar */}
        <div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-200 flex flex-wrap gap-4 items-center">
          <div className="flex-1 min-w-[300px] relative group">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">search</span>
            <input 
              type="text" 
              placeholder="Rechercher un client par nom ou email..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary/50 text-sm font-medium outline-none transition-all" 
            />
          </div>
          {/* Ajouter Client button removed */}

        </div>

        {/* Clients Table */}
        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-white/50 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-separate border-spacing-0">
              <thead>
                <tr className="text-left bg-slate-50/50">
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Client</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Contact</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Inscrit le</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Localisation</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {loading ? (
                  [1, 2, 3, 4, 5].map(i => (
                    <tr key={i} className="animate-pulse">
                      <td colSpan="5" className="px-8 py-6"><div className="h-10 bg-slate-100 rounded-2xl w-full"></div></td>
                    </tr>
                  ))
                ) : filteredClients.length === 0 ? (
                  <tr><td colSpan="5" className="text-center py-20 text-slate-400 font-bold italic">Aucun client trouvé</td></tr>
                ) : currentItems.map((client) => (

                  <tr key={client.id} className="hover:bg-slate-50/50 transition-all group">
                    <td className="px-10 py-6">
                      <div className="flex items-center gap-5">
                        <div className="size-14 bg-blue-50 text-primary rounded-[1.25rem] flex items-center justify-center font-black text-xl shadow-inner group-hover:scale-110 transition-transform">
                          {client.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-black text-slate-900 text-sm tracking-tight">{client.name}</p>
                          <p className="text-[11px] text-slate-500 font-medium mt-0.5 whitespace-nowrap overflow-hidden text-ellipsis max-w-[150px]">{client.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex flex-col gap-1">
                        <p className="text-sm font-bold text-slate-700">{client.phone || 'Non renseigné'}</p>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-sm font-bold text-slate-500">
                      {new Date(client.created_at).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' })}
                    </td>
                    <td className="px-8 py-6 text-sm font-bold text-slate-500">
                      {client.address || 'Algérie'}
                    </td>
                    <td className="px-8 py-6 text-right">
                      <button 
                        onClick={() => handleDelete(client.id)}
                        className="p-2 text-slate-400 hover:text-rose-500 transition-colors"
                        title="Supprimer"
                      >
                        <span className="material-symbols-outlined font-bold">delete</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="px-8 py-6 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                Affichage de {indexOfFirstItem + 1} à {Math.min(indexOfLastItem, filteredClients.length)} sur {filteredClients.length}
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

export default AdminClients;

