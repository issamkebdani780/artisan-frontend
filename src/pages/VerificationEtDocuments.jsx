import React from 'react';

const VerificationEtDocuments = () => {
  return (
    <>
      
{/*  Top Navigation Bar  */}
<header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex items-center gap-4">
<div className="bg-primary p-2 rounded-lg text-white">
<span className="material-symbols-outlined block">handyman</span>
</div>
<h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Tableau de Bord Artisan</h1>
</div>
<div className="flex items-center gap-3">
<button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full relative">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-2 right-2 flex h-2 w-2 rounded-full bg-primary"></span>
</button>
<div className="h-8 w-[1px] bg-slate-200 dark:bg-slate-700 mx-2"></div>
<div className="flex items-center gap-3">
<div className="text-left hidden sm:block">
<p className="text-sm font-semibold leading-none">Ahmed Mohamed</p>
<p className="text-xs text-slate-500 mt-1">Artisan certifié</p>
</div>
<img alt="Profile" className="h-10 w-10 rounded-full border-2 border-primary/20" data-alt="Profile picture of a professional craftsman" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVmoW4Pn-xO_tpoqkSu5wtfvh9MrM83uM7bQQPGVJcMVjEObPHcDbHL1dtcvjGwt3652-ttEk8qG7_D9_ZeL4v5XyHE4Wym8d5dSx8n7E2gxLZKK7DDq5lqEGTqztE_G65c91XszvjNKmaMxP7Fy5IpWY4h4iE-BmXoJ0SG-ZfHeIthdqpybcrDYNw94xRX-gfCJHX87ftp7y3ECt1h7-toU4IWu3jtONo0GfBmiVa3MoLL4nYnX6M0lY7plrIi_7Xrjs481jzObYG"/>
</div>
</div>
</div>
</div>
</header>
<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
{/*  Sidebar Navigation & Info  */}
<aside className="lg:col-span-3 space-y-6">
<nav className="space-y-1">
<a className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-medium">Accueil</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 bg-primary/10 text-primary rounded-xl transition-colors" href="#">
<span className="material-symbols-outlined fill-icon">verified_user</span>
<span className="font-bold">Vérification et Documents</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors" href="#">
<span className="material-symbols-outlined">construction</span>
<span className="font-medium">Mes Projets</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors" href="#">
<span className="material-symbols-outlined">mail</span>
<span className="font-medium">Messages</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="font-medium">Paramètres</span>
</a>
</nav>
{/*  Verification Benefits Card  */}
<div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm ring-1 ring-primary/5">
<h3 className="text-primary font-bold text-lg mb-4 flex items-center gap-2 tracking-tight"><span className="material-symbols-outlined text-xl">stars</span> Avantages de l'Artisan Vérifié</h3>
<ul className="space-y-4">
<li className="flex gap-3">
<span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
<p className="text-sm text-slate-700 dark:text-slate-300">Plus de confiance de la part des clients et augmentation des ventes.</p>
</li>
<li className="flex gap-3">
<span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
<p className="text-sm text-slate-700 dark:text-slate-300">Apparition dans les premiers résultats de recherche.</p>
</li>
<li className="flex gap-3">
<span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
<p className="text-sm text-slate-700 dark:text-slate-300">Possibilité de postuler à des projets majeurs et exclusifs.</p>
</li>
</ul>
</div>
</aside>
{/*  Main Content Area  */}
<div className="lg:col-span-9 space-y-8">
{/*  Progress Banner  */}
<div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
<div className="space-y-2">
<h2 className="text-2xl font-bold tracking-tight">Statut de complétion du profil</h2>
<p className="text-slate-500 text-sm">Complétez le téléchargement des documents pour obtenir le badge 'Artisan Vérifié'.</p>
</div>
<div className="flex items-center gap-4 min-w-[200px]">
<div className="flex-1">
<div className="flex justify-between mb-2">
<span className="text-sm font-bold text-primary">70% complété</span>
<span className="text-xs text-slate-400">2 étapes restantes</span>
</div>
<div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
<div className="bg-primary h-2.5 rounded-full" ></div>
</div>
</div>
<div className="h-14 w-14 rounded-full border-4 border-primary/20 flex items-center justify-center"><span className="material-symbols-outlined text-primary text-2xl font-bold fill-icon">verified_user</span></div>
</div>
</div>
</div>
{/*  Document Upload Sections  */}
<div className="space-y-6">
<h3 className="text-xl font-bold flex items-center gap-2 tracking-tight"><span className="material-symbols-outlined">folder_shared</span> Documents Officiels</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{/*  ID Document  */}
<div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 transition-shadow hover:shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300 border-green-200 dark:border-green-900/50 bg-green-50/30 dark:bg-green-900/10">
<div className="flex justify-between items-start mb-4">
<div>
<h4 className="font-bold text-slate-900 dark:text-white tracking-tight">Carte d'Identité ou Passeport</h4>
<p className="text-xs text-slate-500 mt-1">Assurez-vous que l'image et les données sont claires.</p>
</div>
<span className="flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 uppercase"><span className="material-symbols-outlined text-xs">check_circle</span> Vérifié</span>
</div>
<div className="relative group cursor-pointer border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl p-8 flex flex-col items-center justify-center bg-slate-50/50 dark:bg-slate-800/30 hover:bg-white dark:hover:bg-slate-800 hover:border-primary/50 transition-all h-[220px]">
<span className="material-symbols-outlined text-4xl text-slate-400 mb-2 group-hover:text-primary transition-colors">badge</span>
<p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Glissez et déposez le fichier ici</p>
<button className="px-4 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-sm font-bold shadow-sm">Choisir un fichier</button>
<p className="text-[10px] text-slate-400 mt-4">Formats supportés: JPG, PNG, PDF (max 5MB)</p>
</div>
</div>
{/*  Professional License  */}
<div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 transition-shadow hover:shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
<div className="flex justify-between items-start mb-4">
<div>
<h4 className="font-bold text-slate-900 dark:text-white tracking-tight">Licence Professionnelle / Registre du Commerce</h4>
<p className="text-xs text-slate-500 mt-1">Preuve de l'exercice de l'activité professionnelle.</p>
</div>
<span className="flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 uppercase"><span className="material-symbols-outlined text-xs">pending</span> En attente</span>
</div>
<div className="relative group cursor-pointer border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl p-8 flex flex-col items-center justify-center bg-slate-50/50 dark:bg-slate-800/30 hover:bg-white dark:hover:bg-slate-800 hover:border-primary/50 transition-all h-[220px]">
<span className="material-symbols-outlined text-4xl text-slate-400 mb-2 group-hover:text-primary transition-colors">description</span>
<p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Téléchargé : license_2023.pdf</p>
<button className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg text-sm font-bold">Modifier le fichier</button>
</div>
</div>
{/*  Technical Diplomas  */}
<div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 transition-shadow hover:shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
<div className="flex justify-between items-start mb-4">
<div>
<h4 className="font-bold text-slate-900 dark:text-white tracking-tight">Diplômes et Certifications Techniques</h4>
<p className="text-xs text-slate-500 mt-1">Certificats de fin d'études ou formation professionnelle.</p>
</div>
<span className="flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 uppercase"><span className="material-symbols-outlined text-xs">add_circle</span> À télécharger</span>
</div>
<div className="relative group cursor-pointer border-2 border-dashed border-primary/20 rounded-xl p-8 flex flex-col items-center justify-center bg-primary/5 hover:bg-primary/10 hover:border-primary/40 transition-all h-[220px]">
<span className="material-symbols-outlined text-4xl text-primary mb-2">upload_file</span>
<p className="text-sm text-slate-700 dark:text-slate-300 mb-4 font-medium">Ajouter un nouveau certificat</p>
<button className="px-6 py-2 bg-primary text-white rounded-lg text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">Choisir un fichier</button>
<p className="text-[10px] text-slate-400 mt-4 text-center">Vous pouvez télécharger plusieurs fichiers pour différents certificats</p>
</div>
</div>
{/*  Insurance Certificate  */}
<div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 transition-shadow hover:shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
<div className="flex justify-between items-start mb-4">
<div>
<h4 className="font-bold text-slate-900 dark:text-white tracking-tight">Assurance Responsabilité Civile Professionnelle</h4>
<p className="text-xs text-slate-500 mt-1">Responsabilité civile ou décennale.</p>
</div>
<span className="flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 uppercase"><span className="material-symbols-outlined text-xs">add_circle</span> À télécharger</span>
</div>
<div className="relative group cursor-pointer border-2 border-dashed border-primary/20 rounded-xl p-8 flex flex-col items-center justify-center bg-primary/5 hover:bg-primary/10 hover:border-primary/40 transition-all h-[220px]">
<span className="material-symbols-outlined text-4xl text-primary mb-2">shield</span>
<p className="text-sm text-slate-700 dark:text-slate-300 mb-4 font-medium">Télécharger le contrat d'assurance</p>
<button className="px-6 py-2 bg-primary text-white rounded-lg text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">Choisir un fichier</button>
<p className="text-[10px] text-slate-400 mt-4 text-center">Important pour augmenter le classement de vos projets</p>
</div>
</div>
</div>
</div>
{/*  Footer Action  */}
<div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r from-slate-900 to-slate-800 dark:from-primary/20 dark:to-primary/10 rounded-2xl p-8 text-white border border-slate-800 dark:border-primary/30 shadow-2xl relative overflow-hidden">
<div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
<div className="relative z-10 text-center sm:text-left">
<h4 className="text-xl font-bold tracking-tight">Avez-vous fini de télécharger tous les documents ?</h4>
<p className="text-slate-400 dark:text-slate-300 text-sm mt-2 max-w-md">Une fois soumis, notre équipe d'experts examinera votre dossier sous 48 heures pour valider votre statut d'artisan certifié.</p>
</div>
<button className="relative z-10 w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold text-lg shadow-[0_10px_30px_-10px_rgba(236,91,19,0.5)] transition-all flex items-center justify-center gap-3 active:scale-95">
<span className="material-symbols-outlined">send</span>
        Envoyer pour révision finale
    </button>
</div>
</div>
</div>
</main>
<footer className="mt-12 py-8 border-t border-slate-200 dark:border-slate-800">
<div className="max-w-7xl mx-auto px-4 text-center">
<p className="text-slate-500 text-sm">© 2024 Plateforme Artisan - Tous droits réservés</p>
</div>
</footer>

    </>
  );
};

export default VerificationEtDocuments;
