import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 px-6 md:px-20 py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
        <div className="col-span-2">
          <div className="flex items-center mb-8">
            <img src={logo} alt="Mihnati Logo" className="h-10 w-auto object-contain" />
          </div>
          <p className="text-slate-500 font-bold max-w-xs mb-8 leading-relaxed">
            La plateforme de confiance pour tous vos besoins en bricolage et rénovation. Connectez-vous avec les meilleurs experts locaux.
          </p>
          <div className="flex gap-4">
            <a className="size-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:text-primary transition-all border border-slate-100" href="#"><span className="material-symbols-outlined text-lg">public</span></a>
            <a className="size-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:text-primary transition-all border border-slate-100" href="#"><span className="material-symbols-outlined text-lg">groups</span></a>
            <a className="size-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:text-primary transition-all border border-slate-100" href="#"><span className="material-symbols-outlined text-lg">alternate_email</span></a>
          </div>
        </div>
        <div>
          <h4 className="font-black text-slate-900 mb-6 uppercase tracking-widest text-[10px]">Services</h4>
          <ul className="space-y-3 text-slate-500 text-sm font-bold">
            <li><a className="hover:text-primary transition-colors" href="#">Plomberie</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Électricité</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Peinture</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Menuiserie</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-black text-slate-900 mb-6 uppercase tracking-widest text-[10px]">Entreprise</h4>
          <ul className="space-y-3 text-slate-500 text-sm font-bold">
            <li><Link className="hover:text-primary transition-colors" to="/about-us">About Us</Link></li>
            <li><a className="hover:text-primary transition-colors" href="#">Contact</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Recrutement</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Blog</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-black text-slate-900 mb-6 uppercase tracking-widest text-[10px]">Support</h4>
          <ul className="space-y-3 text-slate-500 text-sm font-bold">
            <li><a className="hover:text-primary transition-colors" href="#">FAQ</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Mentions légales</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Confidentialité</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-slate-100 text-center text-slate-400 text-xs font-bold uppercase tracking-widest">
        © 2026 Mihnati. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
