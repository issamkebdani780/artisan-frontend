import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';

const MessageSuccess = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans">
      <Navbar />
      
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-20 max-w-4xl mx-auto w-full">
        {/* Success Icon Animation Container */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-indigo-500/10 rounded-full animate-ping opacity-25"></div>
          <div className="bg-indigo-500/20 p-6 rounded-full relative">
            <span className="material-symbols-outlined text-indigo-600 !text-7xl font-bold">check_circle</span>
          </div>
        </div>

        {/* Confirmation Message */}
        <div className="text-center mb-10">
          <h1 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black leading-tight mb-4">Message envoyé !</h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            Ahmed Mansouri a bien reçu votre message. Il vous répondra généralement en moins de 2 heures.
          </p>
        </div>

        {/* Information Recap Card */}
        <div className="w-full max-w-md mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl shadow-indigo-100/50 dark:shadow-none border border-slate-100 dark:border-slate-700 overflow-hidden">
            <div className="p-6 flex items-center gap-5">
              <div className="h-16 w-16 rounded-xl bg-slate-200 overflow-hidden shrink-0">
                <img 
                  src="https://i.pravatar.cc/150?u=ahmed" 
                  alt="Portrait de l'artisan Ahmed Mansouri" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">Destinataire</p>
                <h3 className="text-slate-900 dark:text-white text-lg font-black">Ahmed Mansouri</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="size-2 rounded-full bg-green-500 animate-pulse"></span>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Statut : Message transmis</p>
                </div>
              </div>
            </div>
            <div className="bg-indigo-50 dark:bg-indigo-900/20 px-6 py-4 border-t border-slate-100 dark:border-slate-700 flex items-center gap-3">
              <span className="material-symbols-outlined text-indigo-600 text-[20px]">schedule</span>
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Dernière mise à jour : À l'instant</span>
            </div>
          </div>
        </div>

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
            className="flex-1 flex items-center justify-center gap-2 h-14 bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl font-bold transition-all"
          >
            <span className="material-symbols-outlined">home</span>
            Retour à l'accueil
          </Link>
        </div>

        {/* Additional Help Text */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
            Besoin d'aide ? Consultez notre <Link to="/support" className="text-indigo-600 font-bold hover:underline">centre d'assistance</Link>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MessageSuccess;
