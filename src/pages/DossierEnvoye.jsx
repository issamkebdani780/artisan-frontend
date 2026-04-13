import React from 'react';

const DossierEnvoye = () => {
  return (
    <>
      
{/*  BEGIN: MainHeader  */}
<header className="bg-white border-b border-slate-200 sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
{/*  Logo  */}
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-brand rounded flex items-center justify-center text-white font-bold text-xl">A</div>
<span className="text-xl font-bold text-brand tracking-tight">ArtisanDirect</span>
</div>
{/*  User Navigation  */}
<nav className="flex items-center space-x-4">
<div className="hidden sm:flex flex-col text-right">
<span className="text-sm font-semibold">Jean Dupont</span>
<span className="text-xs text-slate-500">Menuisier Ã‰bÃ©niste</span>
</div>
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center overflow-hidden border border-slate-300">
<svg className="w-6 h-6 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
</svg>
</div>
</nav>
</div>
</div>
</header>
{/*  END: MainHeader  */}
{/*  BEGIN: SuccessMessageSection  */}
<main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl w-full text-center space-y-8">
{/*  Success Icon  */}
<div className="flex justify-center">
<div className="rounded-full bg-green-50 p-6 inline-block">
<svg className="w-20 h-20 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path className="animate-checkmark" d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
{/*  Main Text  */}
<div data-purpose="success-text-container">
<h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
          Dossier envoyÃ© avec succÃ¨s !
        </h1>
<p className="mt-4 text-lg text-slate-600">
          Votre demande est en cours de rÃ©vision par notre Ã©quipe. Vous recevrez une notification dÃ¨s que votre profil sera validÃ©.
        </p>
</div>
{/*  BEGIN: DocumentSummary  */}
<section className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden mt-10" data-purpose="document-summary">
<div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
<h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wider text-left">RÃ©sumÃ© des documents soumis</h2>
</div>
<ul className="divide-y divide-slate-100">
{/*  ID Card  */}
<li className="px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-slate-700 font-medium">PiÃ¨ce d'identitÃ©</span>
</div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-1.5"></span>
              En cours de rÃ©vision
            </span>
</li>
{/*  License  */}
<li className="px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-slate-700 font-medium">Extrait K-bis / Licence</span>
</div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-1.5"></span>
              En cours de rÃ©vision
            </span>
</li>
{/*  Insurance  */}
<li className="px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-slate-700 font-medium">Assurance DÃ©cennale</span>
</div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-1.5"></span>
              En cours de rÃ©vision
            </span>
</li>
{/*  Diplomas  */}
<li className="px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-slate-700 font-medium">DiplÃ´mes &amp; Qualifications</span>
</div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-1.5"></span>
              En cours de rÃ©vision
            </span>
</li>
</ul>
</section>
{/*  END: DocumentSummary  */}
{/*  BEGIN: ActionButtons  */}
<div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
<a className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand hover:bg-brand/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand transition-colors duration-200" href="#">
          Retour au Tableau de bord
        </a>
<a className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-base font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-colors duration-200" href="#">
          Voir mon profil
        </a>
</div>
{/*  END: ActionButtons  */}
</div>
</main>
{/*  END: SuccessMessageSection  */}
{/*  BEGIN: Footer  */}
<footer className="bg-white border-t border-slate-200 py-8">
<div className="max-w-7xl mx-auto px-4 text-center">
<p className="text-sm text-slate-500">
        Â© 2023 ArtisanDirect. Tous droits rÃ©servÃ©s.
      </p>
<div className="mt-2 flex justify-center space-x-4 text-xs text-slate-400">
<a className="hover:text-brand" href="#">Support Technique</a>
<a className="hover:text-brand" href="#">Conditions d'utilisation</a>
<a className="hover:text-brand" href="#">Politique de confidentialitÃ©</a>
</div>
</div>
</footer>
{/*  END: Footer  */}

    </>
  );
};

export default DossierEnvoye;

