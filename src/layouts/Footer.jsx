import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-6 md:px-20 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
        <div className="col-span-2">
          <div className="flex items-center gap-3 text-primary mb-6">
            <span className="material-symbols-outlined text-3xl font-bold">home_repair_service</span>
            <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight">BricoloPro</h2>
          </div>
          <p className="text-slate-500 dark:text-slate-400 max-w-xs mb-6">
            La plateforme de confiance pour tous vos besoins en bricolage et rénovation. Connectez-vous avec les meilleurs experts locaux.
          </p>
          <div className="flex gap-4">
            <a className="text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
            <a className="text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">groups</span></a>
            <a className="text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">alternate_email</span></a>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-slate-900 dark:text-white">Services</h4>
          <ul className="space-y-2 text-slate-500 dark:text-slate-400 text-sm">
            <li><a className="hover:text-primary" href="#">Plomberie</a></li>
            <li><a className="hover:text-primary" href="#">Électricité</a></li>
            <li><a className="hover:text-primary" href="#">Peinture</a></li>
            <li><a className="hover:text-primary" href="#">Menuiserie</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-slate-900 dark:text-white">Entreprise</h4>
          <ul className="space-y-2 text-slate-500 dark:text-slate-400 text-sm">
            <li><Link className="hover:text-primary" to="/about-us">About Us</Link></li>
            <li><a className="hover:text-primary" href="#">Contact</a></li>
            <li><a className="hover:text-primary" href="#">Recrutement</a></li>
            <li><a className="hover:text-primary" href="#">Blog</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-slate-900 dark:text-white">Support</h4>
          <ul className="space-y-2 text-slate-500 dark:text-slate-400 text-sm">
            <li><a className="hover:text-primary" href="#">FAQ</a></li>
            <li><a className="hover:text-primary" href="#">Mentions légales</a></li>
            <li><a className="hover:text-primary" href="#">Confidentialité</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-slate-500 dark:text-slate-400 text-sm">
        © 2024 BricoloPro. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
