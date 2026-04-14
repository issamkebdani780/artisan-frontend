import React from 'react';
import AdminLayout from '../layouts/AdminLayout';

const VoirLesPreuvesAdmin = () => {
  return (
    <AdminLayout title="Détails du constat" subtitle="Révision des preuves">
      <div className="flex-1 overflow-y-auto p-8 space-y-8 max-w-4xl mx-auto w-full">
        
        {/* Header Section */}
        <div className="flex flex-wrap justify-between items-start gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-slate-900 text-4xl font-black leading-tight tracking-tight">Voir les preuves admin</h1>
            <p className="text-slate-500 text-base font-normal">Référence de l'avertissement : <span className="font-mono font-semibold">#ADV-2023-0892</span></p>
          </div>
          <button className="flex items-center justify-center rounded-xl h-10 px-4 bg-white text-slate-700 text-sm font-bold hover:bg-slate-50 transition-colors border border-slate-200">
            <span className="material-symbols-outlined mr-2 text-sm">arrow_back</span>
            <span>Retour aux avertissements</span>
          </button>
        </div>

        {/* Summary Card */}
        <div className="mt-6 p-6 rounded-xl bg-white border border-slate-200 shadow-sm">
          <h2 className="text-slate-900 text-[22px] font-bold leading-tight tracking-tight mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-indigo-600">report_problem</span>
            Résumé de l'infraction
          </h2>
          <p className="text-slate-600 text-base font-normal leading-relaxed mb-6">
            Non-conformité détectée lors de l'inspection du site le 14/10/2023. Les travaux en cours sur la zone B ne respectent pas les protocoles de sécurité incendie et les normes de balisage en vigueur (Article R. 4227-1 du Code du travail).
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-1 flex-col gap-2 rounded-xl p-6 bg-red-50 border border-red-100">
              <p className="text-red-700 text-sm font-bold uppercase tracking-wider">Gravité</p>
              <p className="text-red-800 tracking-tight text-2xl font-black">Ã‰levée</p>
            </div>
            <div className="flex flex-1 flex-col gap-2 rounded-xl p-6 bg-slate-50 border border-slate-100">
              <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">Délai de réponse restant</p>
              <p className="text-slate-900 tracking-tight text-2xl font-black">5 jours ouvrés</p>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-slate-900 text-xl font-bold">Galerie des preuves</h3>
            <span className="text-sm bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full font-semibold">4 fichiers joints</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:shadow-md">
              <div className="aspect-video w-full overflow-hidden bg-slate-200">
                <img alt="Preuve visuelle 1" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAY50v5C2AEx5PrrHypqYpCnVFKDn1NxPOO8IVjxhrTQntuyd3BLk0lmoYvL8cLNpWchb9kb-MQD05e08rZuVRbad8tuTtQ-dlVBn9rd9ah2CHxkVnLpxyS0NIGGk3zLbbIWrYTABHYInhVNf8UdVJtStTQhKT_ygAaEVhAEJ-_W3FXjnl6Hw91fNzcOe25HEQpFGpb6-oOUAatddr70L7qQxnWWquP1ORMj_PonsHFr-qOAJ1-hqkH2FkR3_hnFl5gDus3X1md4Cvu" />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-slate-900">Photo_Site_ZoneB_01.jpg</p>
                    <p className="text-xs text-slate-500 uppercase font-medium">Capture d'inspection • 14/10/2023</p>
                  </div>
                  <button className="text-indigo-600 hover:text-indigo-800"><span className="material-symbols-outlined">zoom_in</span></button>
                </div>
                <p className="mt-2 text-sm text-slate-600">Absence de balisage de sécurité autour de la fosse d'excavation principale.</p>
              </div>
            </div>
            <div className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:shadow-md">
              <div className="aspect-video w-full overflow-hidden bg-slate-200">
                <img alt="Preuve visuelle 2" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAh_5t9nIrntiH0Ibo8qftQPbf866V3rg2NIHzKt00a_YlrAsjM2O5ZwulC2zFiHSApZ4pmfJU0KCtzVRFQEWbDHukEb_3QToMWaZBhxivF6TZyeAD0Ms3TiW8ckBNE8vJlkcgbAuBb0x46tAqqa45AKc-iHbaBf3DzT2oxgT9QeV1yOGJ_99ZbL3PvLaBUK1axzCuPg4Clk8YJdKh9zltS0kOvNvuu6SmcuNd8l2bnP6pJqhkWTtL2O133m-L6ApoFKjhcZlm-l9wN" />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-slate-900">Equipement_Defectueux.jpg</p>
                    <p className="text-xs text-slate-500 uppercase font-medium">Capture d'inspection • 14/10/2023</p>
                  </div>
                  <button className="text-indigo-600 hover:text-indigo-800"><span className="material-symbols-outlined">zoom_in</span></button>
                </div>
                <p className="mt-2 text-sm text-slate-600">Extincteurs dont la date de validité est expirée depuis plus de 6 mois.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 bg-white group hover:border-indigo-600 transition-all">
              <div className="size-12 flex items-center justify-center rounded-lg bg-red-100 text-red-600">
                <span className="material-symbols-outlined text-3xl">description</span>
              </div>
              <div className="flex-1">
                <p className="font-bold text-slate-900 text-sm">Rapport_Plaintes_Clients.pdf</p>
                <p className="text-xs text-slate-500">Document PDF • 2.4 Mo</p>
              </div>
              <button className="p-2 text-slate-400 hover:text-indigo-600 transition-colors"><span className="material-symbols-outlined">download</span></button>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 bg-white group hover:border-indigo-600 transition-all">
              <div className="size-12 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                <span className="material-symbols-outlined text-3xl">list_alt</span>
              </div>
              <div className="flex-1">
                <p className="font-bold text-slate-900 text-sm">Registre_Securite.xlsx</p>
                <p className="text-xs text-slate-500">Feuille de calcul • 842 Ko</p>
              </div>
              <button className="p-2 text-slate-400 hover:text-indigo-600 transition-colors"><span className="material-symbols-outlined">download</span></button>
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <div className="mt-10 p-6 rounded-xl bg-slate-100 border border-slate-200">
          <h4 className="text-slate-900 font-bold mb-2 flex items-center gap-2">
            <span className="material-symbols-outlined text-slate-500">info</span>
            Action requise
          </h4>
          <p className="text-sm text-slate-600 leading-relaxed mb-6">
            Vous devez fournir un plan d'action rectificatif pour chaque élément de preuve listé ci-dessus avant le délai imparti. Le non-respect de cette procédure pourra entraîner des sanctions administratives supplémentaires.
          </p>
          <div className="flex gap-3">
            <button className="bg-indigo-600 text-white font-bold py-2.5 px-6 rounded-lg hover:bg-indigo-700 transition-all text-sm shadow-lg shadow-indigo-600/20">
              Soumettre une réponse
            </button>
            <button className="bg-white text-slate-700 border border-slate-200 font-bold py-2.5 px-6 rounded-lg hover:bg-slate-50 transition-all text-sm">
              Contester le constat
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default VoirLesPreuvesAdmin;

