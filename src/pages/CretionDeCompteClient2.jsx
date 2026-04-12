import React from 'react';

const CretionDeCompteClient2 = () => {
  return (
    <>
      
{/*  Header / TopNavBar  */}
<header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between gap-4">
<div className="flex items-center gap-2 shrink-0">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
<span className="material-symbols-outlined">construction</span>
</div>
<h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">ArtisanDirect</h2>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium hover:text-primary transition-colors" href="#">Accueil</a>
<a className="text-sm font-medium hover:text-primary transition-colors" href="#">Artisans</a>
<a className="text-sm font-medium hover:text-primary transition-colors" href="#">Tarifs</a>
</nav>
<div className="flex items-center gap-2">
<button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
<span className="material-symbols-outlined text-xl">language</span>
</button>
<button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
<span className="material-symbols-outlined text-xl">dark_mode</span>
</button>
<div className="h-8 w-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center ml-2 overflow-hidden">
<span className="material-symbols-outlined text-primary">person</span>
</div>
</div>
</div>
</div>
</header>
<main className="max-w-7xl mx-auto px-4 py-8 lg:py-16">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
{/*  Left Section: Value Propositions  */}
<div className="lg:col-span-5 flex flex-col gap-8">
<div className="space-y-4">
<h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white lg:text-5xl">
                        Pourquoi créer un compte ?
                    </h1>
<p className="text-lg text-slate-600 dark:text-slate-400">
                        Rejoignez le premier réseau d'artisans qualifiés et profitez d'une expérience sécurisée pour tous vos travaux de rénovation et d'entretien.
                    </p>
</div>
<div className="grid gap-6">
<div className="flex gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-sm transition-all hover:shadow-md">
<div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
<span className="material-symbols-outlined">verified_user</span>
</div>
<div>
<h3 className="font-bold text-slate-900 dark:text-white">Avis vérifiés</h3>
<p className="text-sm text-slate-500 dark:text-slate-400">Consultez uniquement des avis de clients réels ayant effectué des travaux.</p>
</div>
</div>
<div className="flex gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-sm transition-all hover:shadow-md">
<div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
<span className="material-symbols-outlined">security</span>
</div>
<div>
<h3 className="font-bold text-slate-900 dark:text-white">Paiements sécurisés</h3>
<p className="text-sm text-slate-500 dark:text-slate-400">Vos transactions sont protégées par nos protocoles bancaires de pointe.</p>
</div>
</div>
<div className="flex gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-sm transition-all hover:shadow-md">
<div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
<span className="material-symbols-outlined">chat</span>
</div>
<div>
<h3 className="font-bold text-slate-900 dark:text-white">Communication directe</h3>
<p className="text-sm text-slate-500 dark:text-slate-400">Échangez instantanément avec vos prestataires via notre messagerie sécurisée.</p>
</div>
</div>
<div className="flex gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-sm transition-all hover:shadow-md">
<div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
<span className="material-symbols-outlined">analytics</span>
</div>
<div>
<h3 className="font-bold text-slate-900 dark:text-white">Suivi de projet</h3>
<p className="text-sm text-slate-500 dark:text-slate-400">Gérez l'avancement de vos travaux et centralisez vos factures en un clic.</p>
</div>
</div>
</div>
<div className="hidden lg:block relative rounded-2xl overflow-hidden h-64 border border-slate-200 dark:border-slate-800 shadow-xl">
<img alt="Artisan professionnel au travail" className="h-full w-full object-cover" data-alt="Artisan professionnel travaillant avec des outils de précision" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNGt7OpSRwv7_oT-xh8v2rHXB2vN6GXlPTwAbQxn5914KPpL3Aab8miDP-879H__E2vBdzKDxPSTAucP-4_rT4ZCJu5PRMHOi3nf7EPWRMOU6esom-sjJrVZUXH32ooM1SSbAK3qE4_WuFHB-NoNhD6t0OR6SWJyktJ7k8mmmP6-KFtYFDawKGHUHVfgazx1zp9okkIK7I4szaw0aFuY8p8egjPacSUcVPtH4vcOhOspTMViKrd0cXxUf4vYL30PAbDbNGKAUh44kr"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
<p className="text-white text-sm italic font-medium">"ArtisanDirect a simplifié ma rénovation de A à Z. La confiance est enfin au rendez-vous." �DA� Marc L.</p>
</div>
</div>
</div>
{/*  Right Section: Registration Form  */}
<div className="lg:col-span-7">
<div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10">
<div className="mb-8">
<h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Créer un compte client</h2>
<p className="text-slate-500 dark:text-slate-400">Complétez le formulaire ci-dessous pour démarrer vos projets.</p>
</div>
<form action="#" className="space-y-6" method="POST">
{/*  Photo Upload Section  */}
<div className="flex items-center gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
<div className="relative group">
<div className="h-24 w-24 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden border-2 border-dashed border-slate-300 dark:border-slate-700 transition-colors group-hover:border-primary">
<span className="material-symbols-outlined text-slate-400 group-hover:text-primary text-3xl">add_a_photo</span>
</div>
</div>
<div className="flex-1">
<h4 className="text-sm font-bold text-slate-900 dark:text-white">Photo de profil (Optionnel)</h4>
<p className="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-3">Formats JPG, PNG ou WEBP. Max 2Mo.</p>
<button className="inline-flex items-center px-4 py-2 text-xs font-bold rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors" type="button">
                                    Choisir un fichier
                                </button>
</div>
</div>
{/*  Personal Info  */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-sm font-semibold text-slate-700 dark:text-slate-300" htmlFor="first-name">Prénom</label>
<input className="block w-full rounded-lg border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:border-primary focus:ring-primary shadow-sm px-4 py-2.5" id="first-name" name="first-name" placeholder="Ex: Jean" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-sm font-semibold text-slate-700 dark:text-slate-300" htmlFor="last-name">Nom</label>
<input className="block w-full rounded-lg border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:border-primary focus:ring-primary shadow-sm px-4 py-2.5" id="last-name" name="last-name" placeholder="Ex: Dupont" type="text"/>
</div>
</div>
{/*  Email  */}
<div className="space-y-1.5">
<label className="text-sm font-semibold text-slate-700 dark:text-slate-300" htmlFor="email">E-mail professionnel</label>
<input className="block w-full rounded-lg border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:border-primary focus:ring-primary shadow-sm px-4 py-2.5" id="email" name="email" placeholder="jean.dupont@exemple.fr" type="email"/>
</div>
{/*  Address  */}
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="sm:col-span-1 space-y-1.5">
<label className="text-sm font-semibold text-slate-700 dark:text-slate-300" htmlFor="city">Ville</label>
<input className="block w-full rounded-lg border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:border-primary focus:ring-primary shadow-sm px-4 py-2.5" id="city" name="city" placeholder="Ex: Lyon" type="text"/>
</div>
<div className="sm:col-span-2 space-y-1.5">
<label className="text-sm font-semibold text-slate-700 dark:text-slate-300" htmlFor="address">Adresse détaillée</label>
<input className="block w-full rounded-lg border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:border-primary focus:ring-primary shadow-sm px-4 py-2.5" id="address" name="address" placeholder="12 rue de la Paix" type="text"/>
</div>
</div>
{/*  Passwords  */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-sm font-semibold text-slate-700 dark:text-slate-300" htmlFor="password">Mot de passe</label>
<input className="block w-full rounded-lg border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:border-primary focus:ring-primary shadow-sm px-4 py-2.5" id="password" name="password" type="password"/>
</div>
<div className="space-y-1.5">
<label className="text-sm font-semibold text-slate-700 dark:text-slate-300" htmlFor="confirm-password">Confirmer le mot de passe</label>
<input className="block w-full rounded-lg border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:border-primary focus:ring-primary shadow-sm px-4 py-2.5" id="confirm-password" name="confirm-password" type="password"/>
</div>
</div>
{/*  Password Validation Rules  */}
<div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
<p className="text-xs font-bold text-blue-700 dark:text-blue-300 mb-2 uppercase tracking-wider">Règles de sécurité :</p>
<ul className="text-xs space-y-1 text-blue-600 dark:text-blue-400">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
                                    Au moins 8 caractères
                                </li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
                                    Doit commencer par une lettre
                                </li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
                                    Contient des lettres et des chiffres
                                </li>
</ul>
</div>
{/*  Consents  */}
<div className="space-y-3">
<label className="flex items-start gap-3 cursor-pointer">
<input className="mt-1 rounded border-slate-300 text-primary focus:ring-primary dark:bg-slate-800 dark:border-slate-700 h-4 w-4" type="checkbox"/>
<span className="text-sm text-slate-600 dark:text-slate-400 leading-tight">J'accepte les <a className="text-primary font-medium hover:underline" href="#">Conditions Générales d'Utilisation</a></span>
</label>
<label className="flex items-start gap-3 cursor-pointer">
<input className="mt-1 rounded border-slate-300 text-primary focus:ring-primary dark:bg-slate-800 dark:border-slate-700 h-4 w-4" type="checkbox"/>
<span className="text-sm text-slate-600 dark:text-slate-400 leading-tight">Je consens au traitement de mes données conformément à la <a className="text-primary font-medium hover:underline" href="#">Politique de Confidentialité</a></span>
</label>
</div>
{/*  Submit Button  */}
<button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3.5 rounded-lg shadow-lg shadow-primary/30 transition-all flex items-center justify-center gap-2" type="submit">
<span>Créer mon compte gratuitement</span>
<span className="material-symbols-outlined text-xl">arrow_forward</span>
</button>
{/*  Social Login Divider  */}
<div className="relative flex items-center py-4">
<div className="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
<span className="flex-shrink mx-4 text-xs font-medium text-slate-400 uppercase tracking-widest">Ou s'inscrire avec</span>
<div className="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
</div>
{/*  Social Login Buttons  */}
<div className="grid grid-cols-2 gap-4">
<button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors" type="button">
<img alt="Google Logo" className="h-5 w-5" data-alt="Icône logo Google coloré" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtOdjwF0ZBcS2n39BJ6yIetW7it403y6NfljCS0kn_tANl_iULO_tvXs2k4mja6SmEPYGZ60rUcXDI7Sc7egA7lEpUkLuVifbVUr6LRxnKRtN3Zh2cFhz_rGoOf6oH4xUFc7DFwiord045rZJPy2lyzGPBH_Rh0c-VHkJp_o_WeK7WvCqjmoeQyW7JP8ISJV_TxAzpyH7VC5-JhI4erLEYzoRQw2Usv0LOHJ3RltJWwqxAk1PE0JUPVgrtP1htomtHEVfyVeBf-cZH"/>
<span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Google</span>
</button>
<button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors" type="button">
<img alt="Facebook Logo" className="h-5 w-5" data-alt="Icône logo Facebook bleu" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPFnvIkpd4W8qVpzgbOAlCu8Whq2O0alDjgLzIOQ-hzY0n3d_hlaEj9fa9rjukQJaDpp9s0twKeDKuOELGgpV5GAdkcIVwAPoluQHEVSi8PMYkhY3oqSB06re1E1e7rxUzZhGfk3C_GcttU-5OVM32anGhe08FoKTPhIqCnWTDv_uSJFpGRpWloDcmPdmOkX6zViGVv47giAqnW-xzGjP5ywxlMfy4MtqrY5KeDd3DcUSzCREwE5ku6WEwV7NAQNk1TkhaCVlUtZ9s"/>
<span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Facebook</span>
</button>
</div>
<p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-6">
                            Vous avez déjà un compte ? <a className="text-primary font-bold hover:underline" href="#">Se connecter</a>
</p>
</form>
</div>
</div>
</div>
</main>
<footer className="bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 py-12 mt-12">
<div className="max-w-7xl mx-auto px-4 text-center">
<div className="flex justify-center items-center gap-2 mb-4">
<span className="material-symbols-outlined text-primary">construction</span>
<span className="font-bold text-slate-900 dark:text-white">ArtisanDirect</span>
</div>
<p className="text-sm text-slate-500 dark:text-slate-400">© 2024 ArtisanDirect - Tous droits réservés.</p>
<div className="flex justify-center gap-6 mt-4">
<a className="text-xs text-slate-500 hover:text-primary" href="#">Conditions</a>
<a className="text-xs text-slate-500 hover:text-primary" href="#">Confidentialité</a>
<a className="text-xs text-slate-500 hover:text-primary" href="#">Contact</a>
</div>
</div>
</footer>

    </>
  );
};

export default CretionDeCompteClient2;
