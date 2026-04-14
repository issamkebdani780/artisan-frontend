import React from 'react';

const MessagesEtLitiges = () => {
  return (
    <>
      
<div className="flex h-screen overflow-hidden">
{/*  Sidebar Navigation  */}
<aside className="w-72 bg-white border-r border-slate-200 flex flex-col h-full">
<div className="p-6 flex items-center gap-3">
<div className="bg-primary rounded-lg p-2 text-white">
<span className="material-symbols-outlined">construction</span>
</div>
<h1 className="font-bold text-lg tracking-tight">Mihnati PRO</h1>
</div>
<nav className="flex-1 px-4 space-y-1">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors" href="#">
<span className="material-symbols-outlined">home</span>
<span className="text-sm font-medium">Accueil</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors" href="#">
<span className="material-symbols-outlined">description</span>
<span className="text-sm font-medium">Vérification et documents</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors" href="#">
<span className="material-symbols-outlined">work</span>
<span className="text-sm font-medium">Mes projets</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-primary/10 text-primary transition-colors" href="#">
<span className="material-symbols-outlined text-primary" >chat</span>
<span className="text-sm font-bold">Messages</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors" href="#">
<span className="material-symbols-outlined">warning</span>
<span className="text-sm font-medium">Litiges</span>
</a><a className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="text-sm font-medium">Paramètres</span>
</a>
</nav>
<div className="p-4 border-t border-slate-200">
<div className="flex items-center gap-3 p-2 bg-slate-50 rounded-xl">
<div className="w-10 h-10 rounded-full overflow-hidden bg-slate-200">
<img alt="Photo de profil de l'artisan" className="w-full h-full object-cover" data-alt="Portrait of a male craftsman in work clothes" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEKj468OWma9jTCYZQxedi9o4tT8lrj87J_8uR_5ykQQhPJ4hMn8zp6U-10WQm4j1E4ijm5GQSQNXzKtgAwoUeg8D07yoIUv9AOvFDyKd79KShqwMO5teIssWEh79HmQD8Jtgzs94abAyQqHHwACmrfLNiuFwDQCh8Iob94iQyRASm5l0qelXg4RE3INtsh0p__OmVehSV3eE2wMPU0XWPopNPIfAEZIBd5uRviY7jDsyHvqAa4TmJRUaeMVTIwk7wpgzpgHop95a3"/>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-bold truncate">Marc Lefebvre</p>
<p className="text-xs text-slate-500 truncate">Menuisier Expert</p>
</div>
</div>
</div>
</aside>
{/*  Main Content Area  */}
<main className="flex-1 flex flex-col h-full bg-slate-50">
{/*  Header  */}
<header className="h-16 flex items-center justify-between px-8 bg-white border-b border-slate-200 shrink-0">
<div className="flex items-center gap-4">
<h2 className="text-xl font-bold">Messages &amp; Litiges</h2>
<span className="bg-primary/20 text-primary text-xs font-bold px-2 py-0.5 rounded-full">1 Nouveau</span>
</div>
<div className="flex items-center gap-4">
<div className="relative">
<span className="material-symbols-outlined text-slate-500">search</span>
<input className="bg-slate-100 border-none rounded-xl text-sm pl-10 pr-4 py-2 w-64 focus:ring-2 focus:ring-primary/50" placeholder="Rechercher une conversation..." type="text"/>
</div>
<button className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 text-slate-600">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 text-slate-600">
<span className="material-symbols-outlined">help</span>
</button>
</div>
</header>
{/*  Messaging Content Split Layout  */}
<div className="flex-1 flex overflow-hidden">
{/*  Conversation List  */}
<div className="w-80 border-r border-slate-200 bg-white flex flex-col">
<div className="p-4 border-b border-slate-100">
<div className="flex gap-2">
<button className="flex-1 text-xs font-bold py-2 rounded-lg bg-primary text-white">Tous</button>
<button className="flex-1 text-xs font-bold py-2 rounded-lg bg-slate-100 text-slate-600">Non lus</button>
<button className="flex-1 text-xs font-bold py-2 rounded-lg bg-slate-100 text-slate-600">Favoris</button>
<button className="flex-1 text-[10px] font-bold py-2 rounded-lg bg-red-50 text-red-600 border border-red-100 uppercase tracking-tighter">Litiges</button></div>
</div>
<div className="flex-1 overflow-y-auto">
{/*  Active Conversation  */}
<div className="p-4 border-b border-slate-100 bg-primary/5 border-l-4 border-l-primary cursor-pointer">
<div className="flex gap-3">
<div className="w-12 h-12 rounded-full flex-shrink-0 bg-slate-200 overflow-hidden relative">
<img alt="Photo de Jean Dupont" className="w-full h-full object-cover" data-alt="Portrait of a middle aged man smiling" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQGdT8nGyx6NtJmhhwPWWC_eDzjCdy0cBo-xGimZT2sq89r3RhBpryHiFtsxhwr_J8IhZrM79aR7_oReg3IsDHlQHpSIN8PEecRFYulxxRbRZA-KAt8BI-KSTd5Bly8MQ37gwrKJZCGgHZvPLw0R9Qjpg1htMDSzafYRG5d-BWQxxR9cFxE_Yw-jxCVSsSJR1nvRTPgvd1EbG4sZ2OW5Gflo41CCjMm8V_nnPAr0R98QF2bXbnFiRt7aCr1V0lThDtJuVPqtCPZmA6"/>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-start">
<h3 className="text-sm font-bold truncate">Jean Dupont</h3><span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[8px] font-black bg-red-100 text-red-700 uppercase ml-1">Critique</span>
<span className="text-[10px] text-primary font-medium">10:30</span>
</div>
<p className="text-xs text-slate-900 font-semibold truncate mt-0.5">Bonjour, seriez-vous disponible pour...</p>
<p className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider font-bold">Projet Cuisine</p>
</div>
</div>
</div>
{/*  Other Conversations  */}
<div className="p-4 border-b border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer">
<div className="flex gap-3">
<div className="w-12 h-12 rounded-full flex-shrink-0 bg-slate-200 overflow-hidden">
<img alt="Photo de Marie Leroy" className="w-full h-full object-cover" data-alt="Portrait of a professional woman wearing glasses" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsaZ6gnC7sjLgpcKOY3K3tXFd91VAO9z7PQGGrty-Zvhc5CgRnQG9T5GEahJNiukSwJ-Z8xCPjgiCeMSloLKIRkDbIFhCrgd5zBRkNVWychIdXf3s6nvUtUrqHUPaxPbSIdeBwrrI-bzZTWbQjOnzugPFqEs3ddfr98H5aO-oiNKE5SlidKdTHFtv_0PdUkBvTPFbLLOmhjSDpOzNh2D3NvMc2Es7DQwAkAmrWTSg6q8CtZbP8-0VuIQxklpaUWdoXid1YnIiwYUsu"/>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-start">
<h3 className="text-sm font-bold truncate">Marie Leroy</h3>
<span className="text-[10px] text-slate-400">Hier</span>
</div>
<p className="text-xs text-slate-500 truncate mt-0.5">Merci pour le devis, c'est parfait pour moi.</p>
<p className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider font-bold">Réfection Salle de Bain</p>
</div>
</div>
</div>
<div className="p-4 border-b border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer">
<div className="flex gap-3">
<div className="w-12 h-12 rounded-full flex-shrink-0 bg-slate-200 overflow-hidden">
<img alt="Photo de Luc Petit" className="w-full h-full object-cover" data-alt="Portrait of a young man with beard" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpvTv1g_0DwLU6JxMojoSw6DawvY1EyJQNX5vOqjE7O3z0HtliZY9_hnw70yMshWJvhft2bbUjB5dte9sy-BoeZ9pEHlQXZlOqCsNOBQ41U3Al-apgk1fj1D_xulJ84bSX2n_TFv2yOBH6-txkxdZh0WMInqYkYmVVK_ZJUhzOj6aKJwc2e5vl67XZEvKV4aRYlMh3wvMODjnOc7jNfxq_-gJVAwA8uwTH7QwRPcl2iJFj4tNkMq5iTR4RvIePhTQntMh3aWgu55RG"/>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-start">
<h3 className="text-sm font-bold truncate">Luc Petit</h3>
<span className="text-[10px] text-slate-400">22 Oct</span>
</div>
<p className="text-xs text-slate-500 truncate mt-0.5">Pouvez-vous confirmer la date de livraison?</p>
<p className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider font-bold">Escalier ChÃªne</p>
</div>
</div>
</div>
</div>
</div>
{/*  Chat Window  */}
<div className="flex-1 flex flex-col bg-background-light border-t-4 border-t-red-500/50">
{/*  Chat Header  */}
<div className="p-4 bg-white border-b border-slate-200 flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
<img alt="Jean Dupont" className="w-full h-full object-cover" data-alt="Portrait of a middle aged man smiling" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFTy7UG5IGUH-NqRLnUeXQ2OT53rue_AR86vol_u1tzRHwEn-B5nWmSH-drO_V0p6SxqFWlcN0byENqNiXk-JdnNmDbIPU3PTjBnSqFaGQle1G0qrqjHhFGKDTICHDHUv_dpagAevkBj1r6N8W-w0tusOjVqeDRzUh7CnKjGNox3I_O2eZU5je1CzBhJU4aKLGMwdBllhP-DpnKRYLueAG-HNzg5J8k49ZiOT5DA1Kzdhqhay1QG6TefMklfmiyu_JSWd3gO295BbJ"/>
</div>
<div>
<h3 className="text-sm font-bold">Jean Dupont</h3><div className="flex items-center gap-2 mt-0.5">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-red-100 text-red-700 uppercase">Litige Critique</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700 uppercase">Statut: Ouvert</span>
</div>
<div className="flex items-center gap-1.5">
<div className="w-2 h-2 bg-green-500 rounded-full"></div>
<p className="text-[11px] text-slate-500 font-medium">En ligne</p>
</div>
</div>
</div>
<div className="flex items-center gap-2">
<button className="p-2 text-slate-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined">phone</span>
</button>
<button className="p-2 text-slate-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined">videocam</span>
</button>
<button className="p-2 text-slate-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</div>
</div>
{/*  Messages Area  */}
<div className="flex-1 overflow-y-auto p-6 space-y-6">
<div className="flex justify-center">
<span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full">Lundi 23 Octobre</span>
</div>
{/*  Message Received  */}
<div className="flex gap-3 max-w-[80%]">
<div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden shrink-0 mt-1">
<img alt="Avatar client" className="w-full h-full object-cover" data-alt="Client profile picture small" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4YsesoYuyow1SsujWIugyEyWWk04K3F_IUvsTRKeKHHaXUrQTTQkOxm6BsFuUKtEDd7evx2UdTr_JwV2FStBnd3s6N-3Y_Jwl_90Hc77v0c9KENW4Cm-5uePWNrP_soJApxUUmPPHj6QeWovBKJnvQGmVopIgh1oIO_U6TD4_nFO0ByNWsNpwqTd8MkYicOLreruf04VSXvyL8KiDeKa-6LSyOovZW9_0brSPOI_f1ulVYpykQVjDawtaz4ESccuGGM8ibq4hqOjI"/>
</div>
<div className="space-y-1">
<div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-slate-100">
<p className="text-sm leading-relaxed">Bonjour Marc, j'ai bien reçu les plans pour la cuisine. C'est magnifique ! J'aurais cependant une question sur l'essence de bois pour l'îlot central.</p>
</div>
<span className="text-[10px] text-slate-400 font-medium ml-1">10:28</span>
</div>
</div>
{/*  Message Sent  */}
<div className="flex flex-row-reverse gap-3 max-w-[80%] ml-auto">
<div className="w-8 h-8 rounded-full bg-primary overflow-hidden shrink-0 mt-1">
<img alt="Avatar artisan" className="w-full h-full object-cover" data-alt="Craftsman profile picture small" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGJmapZqzmqYJOwazvCCXDZa2KSAw48CWTQmP-IRz8XW0T5PcTOPOwCROP0YeEXOLvRwy54cX_gbkf0PpZWKkF6i5AjdvDGuu5Ha87KDp4aQlh-rz854LzukD_tGT4pH-ivqbOI0nnbR5te1-C9yMWKJBHjD5K7xlRFUqtHCRMCfDT7w2m0RTi-RJwXmPr8V0t7Dq1VAf1OInbPpKtiC9Svtanxjd0aRqMbHiNvYWNI1aD47_qe-ECmBRvAFi-t4mJhxUyzcPHHWaP"/>
</div>
<div className="space-y-1 text-right">
<div className="bg-primary text-white p-4 rounded-2xl rounded-tr-none shadow-md">
<p className="text-sm leading-relaxed">Bonjour Jean, merci pour votre retour. Quel bois aviez-vous en tÃªte ? Pour l'îlot, je recommande généralement du chÃªne massif pour la durabilité.</p>
</div>
<div className="flex items-center justify-end gap-1">
<span className="text-[10px] text-slate-400 font-medium">10:29</span>
<span className="material-symbols-outlined text-primary text-[14px]">done_all</span>
</div>
</div>
</div>
{/*  Message Received (New)  */}
<div className="flex gap-3 max-w-[80%]">
<div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden shrink-0 mt-1">
<img alt="Avatar client" className="w-full h-full object-cover" data-alt="Client profile picture small" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtRrAYEMdG1sBJKpB4DhBI2DbT9r0A4D7pnF3Xs5LI8BHvObIer-_nc_CgxsyCKdfBXUUeQ2axZhpe25dC5D2JfxBmzGFGB9v3UobETKKoc44VEWLZDcP9M99Ro4czn_DfBKJdf5nv01WLVsK8c6ou2qyF-Q5Rw6f7TH4k8NYVdmlmsBNtYPyEMh9FgBdUgy1e8Xs5RfGdTNYkSCv89QRQlxQyuX182yIsaGdTbpOzQhhbvNR3qhkp8m8qA_-xG_VHaNGjrCRQhQ9n"/>
</div>
<div className="space-y-1">
<div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-slate-100">
<p className="text-sm leading-relaxed">Bonjour, seriez-vous disponible pour un court appel aujourd'hui vers 14h pour en discuter ? J'ai aussi quelques photos de références que je viens de trouver.</p>
</div>
<span className="text-[10px] text-slate-400 font-medium ml-1">10:30</span>
</div>
</div>
</div>
{/*  Input Area  */}
<div className="p-6 bg-white border-t border-slate-200">
<div className="bg-slate-50 rounded-2xl border border-slate-200 p-2">
<textarea className="w-full bg-transparent border-none focus:ring-0 text-sm p-3 resize-none h-20" placeholder="Ã‰crivez votre message ici..." rows="1"></textarea>
<div className="flex items-center justify-between mt-2 px-2 pb-1">
<div className="flex gap-1">
<button className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[20px]">attach_file</span>
</button>
<button className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[20px]">image</span>
</button>
<button className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[20px]">mood</span>
</button>
</div>
<button className="bg-primary text-white rounded-xl px-5 py-2 text-sm font-bold flex items-center gap-2 hover:bg-primary/90 transition-colors">
                                    Envoyer
                                    <span className="material-symbols-outlined text-[18px]">send</span>
</button>
</div>
</div>
</div>
</div>
{/*  Contextual Details Sidebar  */}
<div className="w-72 bg-white border-l border-slate-200 hidden xl:flex flex-col">
<div className="p-6 text-center border-b border-slate-100">
<div className="w-20 h-20 rounded-full bg-slate-200 overflow-hidden mx-auto mb-4 border-4 border-slate-50">
<img alt="Jean Dupont" className="w-full h-full object-cover" data-alt="Client profile photo large" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyB7exS6uA3YBXXNCZv2y7W3603KKx-4-5TqNk9I5mocAzymFegyVu0-25_cIxYWRAn_pn-UtYcdu9qvbnZbQdx8fT7CwUulNhveWqykMpdY7OJDJhsbpJs5ABptxLWHKK-fIBlUjda7QCN2oUc55pXZUZ3wMx2wmXBjkXbmB0ni88z7OXbx4_Y_DNTZxqjasRA0yu67kTS9z5OdR5A6pz1pr6wRn1Krzxae1K8prrVxAINoWTQoEQjuwzPdY1mUAYnAUicNlDkZmm"/>
</div>
<h3 className="font-bold">Jean Dupont</h3>
<p className="text-xs text-slate-500 mt-1">Client depuis Août 2023</p>
<div className="flex justify-center gap-2 mt-4">
<span className="bg-slate-100 text-[10px] font-bold px-2 py-1 rounded">PARTICULIER</span>
<span className="bg-green-100 text-green-600 text-[10px] font-bold px-2 py-1 rounded">VÃ‰RIFIÃ‰</span>
</div>
</div>
<div className="flex-1 overflow-y-auto p-6 space-y-6">
<div>
<h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Détails du projet</h4>
<div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
<p className="text-xs font-bold">Cuisine Contemporaine</p>
<p className="text-[10px] text-slate-500 mt-1">Budget est.: 12,000â‚¬ - 15,000â‚¬</p>
<div className="mt-3 h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
<div className="bg-primary h-full w-[45%]"></div>
</div>
<p className="text-[10px] text-slate-400 mt-2 font-medium">Phase: Devis validé</p>
</div>
</div>
<div>
<h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Fichiers partagés</h4>
<div className="space-y-2">
<div className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-lg cursor-pointer">
<div className="w-8 h-8 rounded bg-red-100 flex items-center justify-center text-red-600">
<span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
</div>
<div className="min-w-0">
<p className="text-[11px] font-bold truncate">Plans_cuisine_v2.pdf</p>
<p className="text-[9px] text-slate-400">2.4 MB • 22 Oct</p>
</div>
</div>
<div className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-lg cursor-pointer">
<div className="w-8 h-8 rounded bg-blue-100 flex items-center justify-center text-blue-600">
<span className="material-symbols-outlined text-[18px]">image</span>
</div>
<div className="min-w-0">
<p className="text-[11px] font-bold truncate">Inspiration_ilot.jpg</p>
<p className="text-[9px] text-slate-400">1.1 MB • Hier</p>
</div>
</div>
</div>
</div>
</div>
<div className="p-4 bg-slate-50 border-t border-slate-200">
<button className="w-full py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors">
                            Voir le projet complet
                        </button>
</div>
</div>
</div>
</main>
</div>

    </>
  );
};

export default MessagesEtLitiges;

