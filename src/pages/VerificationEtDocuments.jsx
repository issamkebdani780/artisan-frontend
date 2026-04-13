import React, { useEffect, useState } from 'react';
import ArtisanLayout from '../layouts/ArtisanLayout';
import apiService from '../services/api';

const VerificationEtDocuments = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const user = JSON.parse(localStorage.getItem('user'));

  const [currentUser, setCurrentUser] = useState(user);

  useEffect(() => {
    const fetchDocs = async () => {
      try {
        if (user && user.id) {
          const [docs, latestUser] = await Promise.all([
            apiService.getArtisanDocuments(user.id),
            apiService.getUserById(user.id)
          ]);
          setData(docs);
          setCurrentUser(latestUser);
          // Sync with localStorage
          localStorage.setItem('user', JSON.stringify(latestUser));
        }
      } catch (err) {
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchDocs();
  }, []);

  return (
    <ArtisanLayout title="Certification" subtitle="Dossier Professionnel">
      <div className="space-y-10">
        
        {/*  Status Dashboard  */}
        <div className={`bg-white rounded-[40px] p-10 border shadow-xl relative overflow-hidden group ${Number(currentUser?.is_verified) === -1 ? 'border-red-100 shadow-red-200/40' : 'border-slate-100 shadow-slate-200/40'}`}>
          <div className={`absolute right-0 top-0 w-80 h-80 ${Number(currentUser?.is_verified) === -1 ? 'bg-red-500/5' : 'bg-secondary/5'} rounded-full blur-3xl -translate-y-1/2 translate-x-1/4`}></div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 relative z-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                 <span className={`size-3 rounded-full ${Number(currentUser?.is_verified) === 1 ? 'bg-emerald-500 animate-pulse' : Number(currentUser?.is_verified) === -1 ? 'bg-red-500 animate-pulse' : 'bg-amber-500 animate-bounce'}`}></span>
                 <h2 className="text-3xl font-black tracking-tight text-slate-900 uppercase">
                   {Number(currentUser?.is_verified) === 1 ? 'Profil Certifié' : Number(currentUser?.is_verified) === -1 ? 'Dossier Refusé' : 'Vérification en cours'}
                 </h2>
              </div>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] max-w-md leading-loose">
                {Number(currentUser?.is_verified) === 1 
                  ? "Votre identité et vos compétences ont été validées par nos experts. Vous bénéficiez d'une visibilité prioritaire."
                  : Number(currentUser?.is_verified) === -1 ? "Votre dossier a été refusé car certains documents sont invalides ou illisibles. Veuillez rectifier votre profil."
                  : "Nos administrateurs examinent actuellement les pièces justificatives fournies lors de votre inscription."
                }
              </p>
            </div>
            
            <div className={`flex items-center gap-6 p-8 rounded-[32px] border backdrop-blur-sm ${Number(currentUser?.is_verified) === -1 ? 'bg-red-50/50 border-red-100' : 'bg-slate-50/50 border-slate-100'}`}>
               <div className="text-right">
                  <p className={`text-sm font-black uppercase ${Number(currentUser?.is_verified) === 1 ? 'text-emerald-600' : Number(currentUser?.is_verified) === -1 ? 'text-red-600' : 'text-amber-600'}`}>
                    Statut : {Number(currentUser?.is_verified) === 1 ? 'Approuvé' : Number(currentUser?.is_verified) === -1 ? 'Refusé' : 'Attente'}
                  </p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase mt-1">Dernière mise à jour: Aujourd'hui</p>
               </div>
               <div className={`size-16 rounded-2xl ${Number(currentUser?.is_verified) === 1 ? 'bg-emerald-500 shadow-emerald-200' : Number(currentUser?.is_verified) === -1 ? 'bg-red-500 shadow-red-200' : 'bg-amber-500 shadow-amber-200'} shadow-2xl flex items-center justify-center text-white ring-4 ring-white`}>
                  <span className="material-symbols-outlined text-4xl font-black">
                    {Number(currentUser?.is_verified) === 1 ? 'verified' : Number(currentUser?.is_verified) === -1 ? 'error' : 'pending_actions'}
                  </span>
               </div>
            </div>
          </div>
        </div>

        {/*  Uploaded Documents Section  */}
        <div className="space-y-6">
          <div className="flex items-center gap-4 px-2">
            <div className="h-8 w-1.5 bg-secondary rounded-full"></div>
            <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Pièces Jointes lors de l'Inscription</h3>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-64 bg-slate-100 rounded-[40px] animate-pulse"></div>
              ))}
            </div>
          ) : data?.documents?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.documents.map((doc, idx) => (
                <div key={idx} className="bg-white p-6 rounded-[40px] border border-slate-100 shadow-lg shadow-slate-200/40 group hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
                  <div className="aspect-video rounded-[32px] overflow-hidden bg-slate-50 border border-slate-100 mb-6 relative group-hover:scale-[1.02] transition-transform duration-700">
                    <img src={doc} alt={`Document ${idx + 1}`} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                       <a href={doc} target="_blank" rel="noreferrer" className="size-14 rounded-2xl bg-white text-slate-900 flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all">
                          <span className="material-symbols-outlined font-black">visibility</span>
                       </a>
                    </div>
                  </div>
                  <div className="flex justify-between items-center px-2">
                    <div>
                       <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Document #{idx + 1}</p>
                       <p className="text-sm font-black text-slate-900 mt-1 uppercase tracking-tight">Justificatif Professionnel</p>
                    </div>
                    <span className="material-symbols-outlined text-emerald-500 font-black">check_circle</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-[40px] p-20 border border-slate-100 shadow-xl flex flex-col items-center justify-center text-center">
               <div className="size-24 rounded-full bg-slate-50 flex items-center justify-center text-slate-200 mb-6">
                  <span className="material-symbols-outlined text-6xl">upload_file</span>
               </div>
               <h4 className="text-xl font-black text-slate-900 uppercase">Aucun document trouvé</h4>
               <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mt-2 max-w-xs">Contactez le support si vous avez déjà téléchargé vos documents lors de l'inscription.</p>
            </div>
          )}
        </div>

        {/*  Help Banner  */}
        <div className="bg-slate-900 rounded-[40px] p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="absolute left-0 bottom-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          <p className="text-sm font-bold uppercase tracking-widest leading-loose max-w-xl text-center md:text-left relative z-10">
            Besoin d'ajouter de nouveaux documents ou de mettre à jour votre situation ? Contactez notre service de validation via le centre de messages.
          </p>
          <a href="/dashboard/artisan/settings" className="relative z-10 px-10 py-5 bg-white text-slate-900 rounded-2xl font-black uppercase tracking-widest shadow-2xl hover:scale-105 active:scale-95 transition-all">
            Configuration Profil
          </a>
        </div>
      </div>
    </ArtisanLayout>
  );
};

export default VerificationEtDocuments;

