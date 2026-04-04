import React, { useState, useEffect } from 'react';
import AdminLayout from '../layouts/AdminLayout';
import apiService from '../services/api';

const VerificationsAdmin = () => {
  const [artisans, setArtisans] = useState([]);
  const [loading, setLoading] = useState(true);

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
    fetchUnverified();
  }, []);

  const handleVerify = async (id) => {
    if (!window.confirm('Voulez-vous vraiment vérifier cet artisan ?')) return;
    try {
      await apiService.verifyArtisan(id);
      setArtisans(artisans.filter(a => a.id !== id));
      alert('Artisan vérifié avec succès');
    } catch (err) {
      alert('Erreur lors de la vérification');
    }
  };

  return (
    <AdminLayout>
      <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-slate-50/30">
        {/* Page Title */}
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-black tracking-tight text-slate-900 font-['Outfit',sans-serif]">Vérifications</h1>
            <p className="text-slate-500 mt-2 text-lg">Gérez et examinez les demandes de certification des prestataires.</p>
          </div>
          <div className="bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-200 flex items-center gap-2">
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-sm font-bold text-slate-700">{artisans.length} Demandes en attente</span>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-black text-slate-400 uppercase tracking-widest font-['Outfit',sans-serif]">En attente</p>
              <div className="bg-indigo-50 text-indigo-600 p-3 rounded-2xl">
                <span className="material-symbols-outlined text-2xl">hourglass_empty</span>
              </div>
            </div>
            <p className="text-5xl font-black text-slate-900">{artisans.length}</p>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-indigo-600 w-1/3"></div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-black text-slate-400 uppercase tracking-widest font-['Outfit',sans-serif]">Vérifiés</p>
              <div className="bg-emerald-50 text-emerald-600 p-3 rounded-2xl">
                <span className="material-symbols-outlined text-2xl">verified</span>
              </div>
            </div>
            <p className="text-5xl font-black text-slate-900">124</p>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 w-full"></div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-black text-slate-400 uppercase tracking-widest font-['Outfit',sans-serif]">Taux de Rejet</p>
              <div className="bg-rose-50 text-rose-600 p-3 rounded-2xl">
                <span className="material-symbols-outlined text-2xl">error</span>
              </div>
            </div>
            <p className="text-5xl font-black text-slate-900">2.4%</p>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-rose-500 w-1/12"></div>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden">
          <div className="p-8 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
            <h3 className="text-xl font-black text-slate-900">Dossiers à traiter</h3>
            <div className="flex gap-4">
               <button className="p-3 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all shadow-sm">
                  <span className="material-symbols-outlined text-slate-600">filter_list</span>
               </button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50">
                  <th className="px-8 py-5 text-sm font-black uppercase text-slate-400 font-['Outfit',sans-serif]">Artisan</th>
                  <th className="px-8 py-5 text-sm font-black uppercase text-slate-400 font-['Outfit',sans-serif]">Spécialité</th>
                  <th className="px-8 py-5 text-sm font-black uppercase text-slate-400 font-['Outfit',sans-serif]">Inscription</th>
                  <th className="px-8 py-5 text-sm font-black uppercase text-slate-400 font-['Outfit',sans-serif]">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {loading ? (
                  <tr><td colSpan="4" className="p-8 text-center text-slate-400 font-medium">Chargement des données...</td></tr>
                ) : artisans.length === 0 ? (
                  <tr><td colSpan="4" className="p-8 text-center text-slate-400 font-medium italic">Aucune demande en attente</td></tr>
                ) : artisans.map(artisan => (
                  <tr key={artisan.id} className="hover:bg-slate-50/30 transition-all group">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center font-black text-lg">
                          {artisan.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-base font-black text-slate-900">{artisan.name}</p>
                          <p className="text-sm text-slate-400 font-medium">{artisan.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-black uppercase tracking-wider">{artisan.specialty || 'N/A'}</span>
                    </td>
                    <td className="px-8 py-6">
                      <p className="text-sm font-bold text-slate-500">{new Date(artisan.created_at).toLocaleDateString()}</p>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-3">
                        <button 
                          onClick={() => handleVerify(artisan.id)}
                          className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-xs font-black shadow-lg shadow-emerald-500/20 transition-all active:scale-95"
                        >
                          Vérifier
                        </button>
                        <button className="px-6 py-2.5 bg-white border border-slate-200 text-slate-600 rounded-xl text-xs font-black hover:bg-slate-50 transition-all">
                          Détails
                        </button>
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

export default VerificationsAdmin;
