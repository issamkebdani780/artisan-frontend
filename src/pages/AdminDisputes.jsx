import React, { useState, useEffect } from 'react';
import AdminLayout from '../layouts/AdminLayout';
import apiService from '../services/api';

const AdminDisputes = () => {
  const [disputes, setDisputes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('Tous');

  useEffect(() => {
    const fetchDisputes = async () => {
      try {
        const data = await apiService.getAllDisputes();
        setDisputes(data);
      } catch (err) {
        console.error('Failed to fetch disputes:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchDisputes();
  }, []);

  const handleUpdateStatus = async (id, status) => {
    try {
      await apiService.updateDisputeStatus(id, status);
      setDisputes(disputes.map(d => d.id === id ? { ...d, status } : d));
    } catch (err) {
      alert('Erreur lors de la mise Ã  jour : ' + err.message);
    }
  };

  const filteredDisputes = disputes.filter(d => {
    if (filter === 'Tous') return true;
    return d.status === filter;
  });

  return (
    <AdminLayout title="Litiges & Recours">
      <div className="space-y-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-1">
            <h2 className="text-3xl font-black tracking-tight text-slate-900 font-[Outfit,sans-serif]">Gestion des Litiges</h2>
            <p className="text-slate-500 font-medium">MÃ©diation et rÃ©solution des conflits entre clients et artisans.</p>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-white border border-slate-200 px-6 py-3 rounded-2xl font-bold text-sm shadow-sm hover:shadow-md transition-all">
              <span className="material-symbols-outlined text-lg">download</span>
              Exporter CSV
            </button>
            <button className="bg-primary text-white px-8 py-3 rounded-2xl font-black text-sm shadow-lg shadow-primary/30 hover:brightness-110 transition-all font-[Outfit,sans-serif] tracking-wide">
              + Nouveau Dossier
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Total Litiges', value: disputes.length, icon: 'folder_open', color: 'bg-primary' },
            { label: 'En attente', value: disputes.filter(d => d.status === 'pending').length, icon: 'hourglass_empty', color: 'bg-amber-500' },
            { label: 'En cours', value: disputes.filter(d => d.status === 'in_progress').length, icon: 'sync', color: 'bg-blue-500' },
            { label: 'RÃ©solus', value: disputes.filter(d => d.status === 'resolved').length, icon: 'task_alt', color: 'bg-emerald-500' },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-4xl shadow-xl shadow-slate-200/50 border border-white/50 group hover:-translate-y-1 transition-all duration-300">
              <div className="flex justify-between items-start">
                <div className={`${stat.color} size-12 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-slate-200/20`}>
                  <span className="material-symbols-outlined">{stat.icon}</span>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">{stat.label}</p>
                <p className="text-2xl font-black text-slate-900 mt-1 tracking-tighter">{loading ? '...' : stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex bg-white/50 p-1.5 rounded-3xl border border-slate-200 w-fit">
          {['Tous', 'pending', 'in_progress', 'resolved'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-6 py-2.5 rounded-2xl text-sm font-black transition-all ${filter === tab ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-500 hover:text-slate-700'}`}
            >
              {tab === 'Tous' ? 'Tous' : tab === 'pending' ? 'En attente' : tab === 'in_progress' ? 'En cours' : 'RÃ©solus'}
            </button>
          ))}
        </div>

        {/* Disputes Table */}
        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-white/50 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-separate border-spacing-0">
              <thead>
                <tr className="text-left bg-slate-50/50">
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Dossier</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Parties ImpliquÃ©es</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Motif</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Statut</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {loading ? (
                  [1, 2, 3].map(i => (
                    <tr key={i} className="animate-pulse">
                      <td colSpan="5" className="px-8 py-6"><div className="h-10 bg-slate-100 rounded-2xl w-full"></div></td>
                    </tr>
                  ))
                ) : filteredDisputes.length === 0 ? (
                  <tr><td colSpan="5" className="text-center py-20 text-slate-400 font-bold italic font-[Outfit,sans-serif]">Aucun litige trouvÃ©</td></tr>
                ) : filteredDisputes.map((dispute) => (
                  <tr key={dispute.id} className="hover:bg-slate-50/50 transition-colors group text-[Outfit,sans-serif]">
                    <td className="px-8 py-6">
                      <p className="font-black text-slate-900 text-sm">#{dispute.id.toString().padStart(4, '0')}</p>
                      <p className="text-[10px] text-slate-400 font-bold mt-1 uppercase tracking-tighter">OUVERT LE {new Date(dispute.created_at).toLocaleDateString('fr-FR')}</p>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                           <span className="text-[9px] font-black px-2 py-0.5 bg-primary/10 text-primary rounded uppercase tracking-tighter">Client</span>
                           <span className="text-xs font-black text-slate-700 tracking-tight">{dispute.client_name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                           <span className="text-[9px] font-black px-2 py-0.5 bg-secondary/10 text-secondary rounded uppercase tracking-tighter">Artisan</span>
                           <span className="text-xs font-black text-slate-700 tracking-tight">{dispute.artisan_name}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                       <p className="text-sm font-bold text-slate-600 line-clamp-1">{dispute.reason || 'Non spÃ©cifiÃ©'}</p>
                    </td>
                    <td className="px-8 py-6">
                      <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-tighter ${
                        dispute.status === 'resolved' ? 'bg-emerald-100 text-emerald-700' : 
                        dispute.status === 'in_progress' ? 'bg-blue-100 text-blue-700' : 
                        'bg-amber-100 text-amber-700'
                      }`}>
                         {dispute.status === 'resolved' ? 'RÃ©solu' : dispute.status === 'in_progress' ? 'En cours' : 'En attente'}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <div className="flex justify-end gap-2">
                         {dispute.status !== 'resolved' && (
                           <button 
                            onClick={() => handleUpdateStatus(dispute.id, 'resolved')}
                            className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all"
                            title="RÃ©soudre"
                           >
                              <span className="material-symbols-outlined font-bold">check_circle</span>
                           </button>
                         )}
                         {dispute.status === 'pending' && (
                           <button 
                            onClick={() => handleUpdateStatus(dispute.id, 'in_progress')}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
                            title="Prendre en charge"
                           >
                              <span className="material-symbols-outlined font-bold">handyman</span>
                           </button>
                         )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDisputes;

