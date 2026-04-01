import React from 'react';
import AdminLayout from '../layouts/AdminLayout';

const VerificationsAdmin = () => {
  return (
    <AdminLayout>
      <div className="flex-1 overflow-y-auto p-8 space-y-8">
        {/*  Page Title  */}
        <div>
          <h1 className="text-3xl font-black tracking-tight text-slate-900">Vérifications</h1>
          <p className="text-slate-500 mt-2">Gérez et examinez les demandes de certification des prestataires pour maintenir les standards d'excellence.</p>
        </div>

        {/*  Stats Summary  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Awaiting Verification</p>
              <span className="material-symbols-outlined text-indigo-600 bg-indigo-50 p-2 rounded-lg">hourglass_empty</span>
            </div>
            <p className="text-4xl font-black text-slate-900">42</p>
            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-indigo-600 w-2/3"></div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Approved Today</p>
              <span className="material-symbols-outlined text-emerald-600 bg-emerald-50 p-2 rounded-lg">verified</span>
            </div>
            <p className="text-4xl font-black text-slate-900">156</p>
            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 w-3/4"></div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Rejection Rate</p>
              <span className="material-symbols-outlined text-amber-600 bg-amber-50 p-2 rounded-lg">trending_down</span>
            </div>
            <p className="text-4xl font-black text-slate-900">4.2%</p>
            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-amber-500 w-1/4"></div>
            </div>
          </div>
        </div>

        {/*  Filter & Table Section  */}
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
          {/*  Internal Filter Bar  */}
          <div className="p-4 border-b border-slate-200 bg-slate-50/50 flex flex-wrap gap-4 items-center">
            <div className="flex-1 relative min-w-[200px]">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
              <input className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-600/20" placeholder="Filter by artisan name..." type="text"/>
            </div>
            <select className="text-sm bg-white border border-slate-200 rounded-lg px-3 py-2">
              <option>All Specialties</option>
              <option>Menuiserie</option>
              <option>Électricité</option>
            </select>
            <button className="bg-white border border-slate-200 text-slate-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">tune</span>
              Advanced Filters
            </button>
          </div>
          {/*  Data Table  */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50">
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Artisan Details</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Specialty</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Docs</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Status</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <img alt="Marc Lemoine" className="w-10 h-10 rounded-lg object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=60" />
                      <div>
                        <p className="text-sm font-bold text-slate-900">Marc Lemoine</p>
                        <p className="text-xs text-slate-500">m.lemoine@email.com</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-sm text-slate-600">Menuiserie d'Art</span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex gap-1.5 text-emerald-600">
                      <span className="material-symbols-outlined text-lg">assignment_turned_in</span>
                      <span className="material-symbols-outlined text-lg">badge</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-bold bg-amber-100 text-amber-700 uppercase">Under Review</span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="text-indigo-600 hover:bg-indigo-50 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors">Review Docs</button>
                      <button className="bg-indigo-600 text-white px-4 py-1.5 rounded-lg text-xs font-bold hover:shadow-lg transition-all shadow-indigo-600/20">Review</button>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <img alt="Sarah Benali" className="w-10 h-10 rounded-lg object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=60" />
                      <div>
                        <p className="text-sm font-bold text-slate-900">Sarah Benali</p>
                        <p className="text-xs text-slate-500">s.benali@tech.net</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-sm text-slate-600">Électricité Générale</span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex gap-1.5">
                      <span className="material-symbols-outlined text-emerald-600 text-lg">assignment_turned_in</span>
                      <span className="material-symbols-outlined text-red-500 text-lg">error</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-bold bg-red-100 text-red-700 uppercase">Action Required</span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="text-indigo-600 hover:bg-indigo-50 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors">Review Docs</button>
                      <button className="bg-indigo-600 text-white px-4 py-1.5 rounded-lg text-xs font-bold hover:shadow-lg transition-all shadow-indigo-600/20">Review</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/*  Pagination  */}
          <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
            <p className="text-xs text-slate-500 font-medium">Affichage de 2 sur 42 vérifications</p>
            <div className="flex gap-2">
              <button className="p-1.5 rounded-lg border border-slate-200 hover:bg-white disabled:opacity-50" disabled>
                <span className="material-symbols-outlined text-sm">chevron_left</span>
              </button>
              <button className="p-1.5 rounded-lg border border-slate-200 hover:bg-white">
                <span className="material-symbols-outlined text-sm">chevron_right</span>
              </button>
            </div>
          </div>
        </div>

        {/*  AI Insight Card  */}
        <div className="bg-white rounded-lg border border-indigo-600/20 p-6 flex items-center gap-6 shadow-sm relative overflow-hidden group">
          <div className="absolute inset-0 bg-indigo-600/[0.02] pointer-events-none"></div>
          <div className="size-14 bg-indigo-600/10 rounded-lg flex items-center justify-center text-indigo-600 flex-shrink-0">
            <span className="material-symbols-outlined text-3xl">bolt</span>
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-bold text-slate-900 mb-1">Curation Insight: Screening Efficiency</h4>
            <p className="text-sm text-slate-500 leading-relaxed max-w-3xl">
              The platform's current artisan screening efficiency is <span className="text-indigo-600 font-bold">14% higher</span> than the industry average. Our metadata analysis has successfully flagged 3 high-risk applications this week.
            </p>
          </div>
          <button className="bg-slate-100 hover:bg-slate-200 text-slate-900 px-6 py-2.5 rounded-lg text-sm font-bold transition-colors">
            View Detailed Report
          </button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default VerificationsAdmin;
