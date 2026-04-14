import React from 'react';
import { Link } from 'react-router-dom';

const AvertissementsAdministratifsSecrets = () => {
  return (
    <>
      
<div className="flex min-h-screen overflow-x-hidden">
{/*  Sidebar  */}
<aside className="w-72 bg-slate-900 text-white flex flex-col fixed h-full z-50">
<div className="p-6 flex flex-col h-full">
<div className="flex items-center gap-3 mb-10">
<div className="size-10 rounded-full bg-primary flex items-center justify-center text-white">
<span className="material-symbols-outlined">construction</span>
</div>
<div className="flex flex-col">
<h1 className="text-white text-lg font-bold leading-tight">ArtisanDirect</h1>
<p className="text-slate-400 text-xs font-normal">Tableau de bord Artisan</p>
</div>
</div>
<nav className="flex flex-col gap-2 flex-grow">
<Link className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-800 transition-colors" to="/">
<span className="material-symbols-outlined">home</span>
<p className="text-sm font-medium">Accueil</p>
</Link>
<Link className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-800 transition-colors" to="/search">
<span className="material-symbols-outlined">verified_user</span>
<p className="text-sm font-medium">Vérification</p>
</Link>
<Link className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-800 transition-colors" to="/dashboard/artisan/projects">
<span className="material-symbols-outlined">work</span>
<p className="text-sm font-medium">Mes projets</p>
</Link>
<Link className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-800 transition-colors" to="/dashboard/client/inbox">
<span className="material-symbols-outlined">chat</span>
<p className="text-sm font-medium">Messages</p>
</Link>
<Link className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-primary text-white font-bold" to="/dashboard/admin/disputes">
<span className="material-symbols-outlined" >report_problem</span>
<p className="text-sm font-medium">Litiges &amp; Avertissements</p>
</Link>
<Link className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-800 transition-colors" to="/dashboard/artisan/settings">
<span className="material-symbols-outlined">settings</span>
<p className="text-sm font-medium">Paramètres</p>
</Link>
</nav>
<div className="mt-auto pt-6 border-t border-slate-800">
<div className="flex items-center gap-3 px-3">
<div className="size-10 rounded-full bg-slate-700 overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Photo de profil de l'Mihnati PROfessionnel" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmsO37M5DnDENuKVh9fxasWxG53agXq4IcGvWcQ8LASSgg6ywaXxVuD1ZqqDm6oZJIuDdLaebjXeSWZw52kMA7OJLSVUvGVi0cPisLWzfqX-EFp7tVFIJ-qtSEHOBnETN3H-emMHZj7xZOj4dsH6LYcLovS9Wie8ejCySVHZUG3s3r_QNY5kp88fIlRr4vYM69HQJR_R1d6G9P0v4LRvq2cVinAClS3O_3ca8e3EIiM0ld66x7cJoai8IVsQmOby1Sfg_dG0-hbMcy"/>
</div>
<div className="flex flex-col">
<p className="text-sm font-bold">Jean Dupont</p>
<p className="text-xs text-slate-400">Ã‰lectricien Agréé</p>
</div>
</div>
</div>
</div>
</aside>
{/*  Main Content  */}
<main className="flex-1 ml-72 min-h-screen">
{/*  Header  */}
<header className="h-16 border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-40 px-8 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary">gavel</span>
<h2 className="text-lg font-bold tracking-tight">Espace Administratif</h2>
</div>
<div className="flex items-center gap-4">
<button className="size-10 flex items-center justify-center rounded-xl bg-slate-100 text-slate-600 relative">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-2 right-2 size-2 bg-primary rounded-full"></span>
</button>
<div className="h-8 w-[1px] bg-slate-200 mx-2"></div>
<button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">support_agent</span>
                    Aide Support
                </button>
</div>
</header>
<div className="p-8 max-w-5xl mx-auto">
{/*  Title Section  */}
<div className="mb-10">
<h1 className="text-4xl font-black text-slate-900 mb-2 tracking-tight">Avertissements Administratifs</h1>
<p className="text-slate-600 text-lg">Suivi officiel de la conformité et de la qualité de vos services sur la plateforme.</p>
</div>
{/*  Privacy Policy Banner  */}
<div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10 flex flex-col md:flex-row items-center gap-6">
<div className="size-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-primary text-3xl">visibility_off</span>
</div>
<div className="flex-1 text-center md:text-left">
<h3 className="text-lg font-bold text-slate-900 mb-1">Politique de Confidentialité &amp; Neutralité</h3>
<p className="text-slate-600 leading-relaxed">
                        Pour maintenir un environnement professionnel neutre et serein, les plaintes sont traitées de manière strictement anonyme par l'administration d'ArtisanDirect. 
                        <strong>L'identité du client rapporteur n'est pas divulguée</strong> afin d'éviter tout conflit direct et de garantir l'objectivité de l'arbitrage.
                    </p>
</div>
<button className="whitespace-nowrap bg-white border border-slate-200 px-6 py-2.5 rounded-xl text-sm font-bold shadow-sm">
                    Consulter le règlement
                </button>
</div>
{/*  Warnings List  */}
<div className="space-y-6">
<h2 className="text-xl font-bold flex items-center gap-2 mb-4">
<span className="material-symbols-outlined text-primary">history</span>
                    Historique des signalements
                </h2>
{/*  Warning Card 1  */}
<div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:border-primary/50 transition-all duration-300">
<div className="flex items-stretch flex-col md:flex-row">
<div className="w-full md:w-48 bg-orange-500 flex flex-col items-center justify-center p-6 text-white text-center">
<span className="material-symbols-outlined text-4xl mb-2">warning</span>
<span className="text-xs font-bold uppercase tracking-wider opacity-80">Gravité</span>
<span className="text-lg font-black leading-tight">Premier Avertissement</span>
</div>
<div className="flex-1 p-6">
<div className="flex justify-between items-start mb-4">
<div>
<div className="flex items-center gap-2 mb-1">
<span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-tighter">REF: AD-2024-0812</span>
<span className="text-slate-400 text-xs">• Mis à jour le 12 Mai 2024</span>
</div>
<h3 className="text-xl font-bold text-slate-900">Qualité de service &amp; Finitions</h3>
</div>
<span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">En attente de réponse</span>
</div>
<p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
                                "L'administration a reçu un signalement concernant des finitions non conformes au devis initial. Après examen des photos fournies par le client anonyme, il apparaît que les standards de qualité ArtisanDirect n'ont pas été pleinement respectés sur ce chantier."
                            </p>
<div className="flex flex-wrap gap-4 pt-4 border-t border-slate-100">
<button className="flex items-center gap-2 text-primary font-bold text-sm">
<span className="material-symbols-outlined text-[18px]">edit_document</span>
                                    Fournir une explication
                                </button>
<button className="flex items-center gap-2 text-slate-500 font-bold text-sm">
<span className="material-symbols-outlined text-[18px]">visibility</span>
                                    Voir les preuves admin
                                </button>
</div>
</div>
</div>
</div>
{/*  Warning Card 2  */}
<div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm opacity-75 grayscale-[0.5]">
<div className="flex items-stretch flex-col md:flex-row">
<div className="w-full md:w-48 bg-slate-500 flex flex-col items-center justify-center p-6 text-white text-center">
<span className="material-symbols-outlined text-4xl mb-2">notifications_active</span>
<span className="text-xs font-bold uppercase tracking-wider opacity-80">Gravité</span>
<span className="text-lg font-black leading-tight">Rappel à l'ordre</span>
</div>
<div className="flex-1 p-6">
<div className="flex justify-between items-start mb-4">
<div>
<div className="flex items-center gap-2 mb-1">
<span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-tighter">REF: AD-2024-0345</span>
<span className="text-slate-400 text-xs">• Classé le 15 Mars 2024</span>
</div>
<h3 className="text-xl font-bold text-slate-900">Délai de réponse (Communication)</h3>
</div>
<span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full">Dossier clôturé</span>
</div>
<p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
                                "Un client a signalé une absence totale de réponse aux messages via la plateforme pendant plus de 72 heures ouvrées. Nous vous rappelons que la réactivité est un critère essentiel de votre référencement."
                            </p>
<div className="flex flex-wrap gap-4 pt-4 border-t border-slate-100 text-slate-400 italic text-xs">
<span>Note Admin: Réponse de l'artisan acceptée. Incident isolé lié à une urgence médicale.</span>
</div>
</div>
</div>
</div>
</div>
{/*  Action Section / Appeal  */}
<div className="mt-12 bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
<div className="relative z-10">
<h2 className="text-2xl font-bold mb-4">Contester ou expliquer un signalement ?</h2>
<p className="text-slate-300 mb-8 max-w-2xl leading-relaxed">
                        Si vous estimez qu'un avertissement est injustifié ou si vous souhaitez apporter des précisions factuelles (photos, documents, logs) à l'administration, utilisez le formulaire de recours officiel. Nos modérateurs reviendront vers vous sous 48h.
                    </p>
<div className="flex flex-wrap gap-4">
<button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl font-bold transition-colors flex items-center gap-3">
<span className="material-symbols-outlined">send</span>
                            Ouvrir un recours administratif
                        </button>
<button className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-xl font-bold transition-colors border border-white/10">
                            Prendre rendez-vous avec un conseiller
                        </button>
</div>
</div>
{/*  Abstract Gradient Decor  */}
<div className="absolute -right-20 -bottom-20 size-64 bg-primary/20 rounded-full blur-3xl"></div>
<div className="absolute -left-20 -top-20 size-64 bg-slate-700/50 rounded-full blur-3xl"></div>
</div>
{/*  Footer Help  */}
<div className="mt-12 text-center">
<p className="text-slate-500 text-sm">
                    Besoin de plus d'informations sur notre système de notation ? 
                    <Link className="text-primary font-bold underline underline-offset-4 ml-1" to="/faq">Consultez la FAQ Artisan</Link>
</p>
</div>
</div>
</main>
</div>

    </>
  );
};

export default AvertissementsAdministratifsSecrets;

