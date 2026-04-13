import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const MessageSuccess = () => {
  const [searchParams] = useSearchParams();
  const artisanName = searchParams.get('artisanName');

  return (
    <div className="bg-slate-50 text-slate-900 font-sans pb-20 min-h-screen">
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-20 max-w-4xl mx-auto w-full">
        {/* Success Icon Animation Container */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-indigo-500/10 rounded-full animate-ping opacity-25"></div>
          <div className="bg-indigo-500/20 p-6 rounded-full relative">
            <span className="material-symbols-outlined text-indigo-600 text-7xl font-bold">check_circle</span>
          </div>
        </div>

        {/* Confirmation Message */}
        <div className="text-center mb-10">
          <h1 className="text-slate-900 text-3xl md:text-4xl font-black leading-tight mb-4">Demande Envoyée !</h1>
          <p className="text-slate-600 text-lg max-w-xl mx-auto leading-relaxed">
            {artisanName 
              ? `${decodeURIComponent(artisanName)} a bien reçu votre demande. Il vous répondra généralement sous peu.` 
              : "Votre demande de devis a été transmise aux artisans disponibles dans votre secteur. Vous recevrez une réponse prochainement."
            }
          </p>
        </div>

        {/* Information Recap Card (Only if artisanName exists) */}
        {artisanName && (
          <div className="w-full max-w-md mb-12">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
              <div className="p-6 flex items-center gap-5">
                <div className="h-16 w-16 rounded-xl bg-slate-200 overflow-hidden shrink-0 flex items-center justify-center text-slate-400">
                  <span className="material-symbols-outlined text-3xl">person</span>
                </div>
                <div className="flex-1">
                  <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">Destinataire</p>
                  <h3 className="text-slate-900 text-lg font-black">{decodeURIComponent(artisanName)}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="size-2 rounded-full bg-green-500 animate-pulse"></span>
                    <p className="text-slate-500 text-sm font-medium">Statut : Transmis</p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 flex items-center gap-3">
                <span className="material-symbols-outlined text-indigo-600 text-[20px]">verified</span>
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Demande Sécurisée par BricoloPro</span>
              </div>
            </div>
          </div>
        )}

        {!artisanName && (
           <div className="w-full max-w-md mb-12 bg-white p-8 rounded-3xl border-2 border-dashed border-slate-200 text-center">
              <span className="material-symbols-outlined text-4xl text-slate-300 mb-4">broadcast_on_home</span>
              <p className="text-slate-500 font-medium leading-relaxed">
                Plusieurs artisans de votre région peuvent désormais consulter votre besoin et vous envoyer une proposition.
              </p>
           </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
          <Link 
            to="/messages" 
            className="flex-1 flex items-center justify-center gap-2 h-14 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-indigo-200"
          >
            <span className="material-symbols-outlined">forum</span>
            Voir mes messages
          </Link>
          <Link 
            to="/" 
            className="flex-1 flex items-center justify-center gap-2 h-14 bg-white border-2 border-slate-100 hover:bg-slate-50 text-slate-700 rounded-xl font-bold transition-all"
          >
            <span className="material-symbols-outlined">home</span>
            Retour à l'accueil
          </Link>
        </div>

        {/* Additional Help Text */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 text-sm font-medium">
            Besoin d'aide ? Consultez notre <Link to="/support" className="text-indigo-600 font-bold hover:underline">centre d'assistance</Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default MessageSuccess;
