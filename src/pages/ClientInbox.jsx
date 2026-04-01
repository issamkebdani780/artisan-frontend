import React from 'react';

const ClientInbox = () => {
  const conversations = [
    {
      id: 1,
      name: 'Jean Dupont',
      role: 'Plomberie & Chauffage',
      lastMessage: "Bonjour, j'ai bien reçu vos photos. Je peux passer...",
      time: '14:20',
      unread: 3,
      online: true,
      active: true,
      avatar: 'https://images.unsplash.com/photo-1542037104857-ffbb0b915546?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=60'
    },
    {
      id: 2,
      name: 'Marie Curie',
      role: 'Électricienne certifiée',
      lastMessage: "Merci pour les précisions, le devis est prêt.",
      time: 'Hier',
      unread: 0,
      online: false,
      active: false,
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=60'
    },
    {
      id: 3,
      name: 'Lucas Bernard',
      role: 'Peintre Expert',
      lastMessage: "Quelles sont les dimensions de la pièce ?",
      time: 'Lun.',
      unread: 0,
      online: true,
      active: false,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=60'
    }
  ];

  return (
    <div className="flex min-h-screen w-full flex-col bg-[#f6f7f8] dark:bg-[#101922] text-slate-900 dark:text-slate-100 antialiased">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 py-3 sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="size-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
              <span className="material-symbols-outlined">construction</span>
            </div>
            <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">ArtisanDirect</h2>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-blue-600 transition-colors">Tableau de bord</a>
            <a href="#" className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-blue-600 transition-colors">Mes Projets</a>
            <a href="#" className="text-blue-600 text-sm font-semibold leading-normal border-b-2 border-blue-600 pb-1">Messages</a>
            <a href="#" className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-blue-600 transition-colors">Factures</a>
          </nav>
        </div>
        
        <div className="flex flex-1 justify-end gap-4 items-center">
          <div className="hidden lg:flex relative max-w-xs w-full">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            <input type="text" placeholder="Rechercher un artisan..." className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-lg py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-blue-600/50 outline-none" />
          </div>
          <div className="flex gap-2">
            <button className="flex items-center justify-center rounded-lg size-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="flex items-center justify-center rounded-lg size-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition-colors">
              <span className="material-symbols-outlined">settings</span>
            </button>
          </div>
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-slate-200 dark:border-slate-700" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=60")' }}></div>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="flex flex-1 overflow-hidden h-[calc(100vh-65px)]">
        
        {/* Sidebar Conversations */}
        <aside className="w-full max-w-[360px] border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col shrink-0">
          <div className="p-4 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-xl font-bold">Messages</h1>
              <span className="bg-blue-600/10 text-blue-600 text-xs font-bold px-2 py-1 rounded-full">3 non-lus</span>
            </div>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">filter_list</span>
              <input type="text" placeholder="Filtrer par nom..." className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg py-2 pl-10 pr-4 text-sm focus:ring-1 focus:ring-blue-600 outline-none" />
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            {conversations.map(chat => (
              <div key={chat.id} className={`flex gap-3 p-4 cursor-pointer transition-colors border-b border-slate-50 dark:border-slate-800 ${chat.active ? 'bg-blue-600/5 border-l-4 border-l-blue-600 tracking-tight' : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'}`}>
                <div className="relative shrink-0">
                  <div className="size-12 rounded-full bg-cover bg-center border border-slate-100" style={{ backgroundImage: `url('${chat.avatar}')` }}></div>
                  {chat.online && <div className="absolute bottom-0 right-0 size-3.5 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full"></div>}
                  {!chat.online && <div className="absolute bottom-0 right-0 size-3.5 bg-slate-300 dark:bg-slate-600 border-2 border-white dark:border-slate-900 rounded-full"></div>}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-0.5">
                    <h3 className="font-bold text-sm truncate">{chat.name}</h3>
                    <span className="text-[10px] text-slate-500 font-medium shrink-0">{chat.time}</span>
                  </div>
                  <p className={`text-xs font-semibold truncate ${chat.active ? 'text-blue-600' : 'text-slate-500'}`}>{chat.role}</p>
                  <p className={`text-xs truncate mt-1 ${chat.unread > 0 ? 'text-slate-800 dark:text-slate-200 font-bold' : 'text-slate-600 dark:text-slate-400'}`}>
                    {chat.lastMessage}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-4 bg-slate-50 dark:bg-slate-800/50">
            <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-2.5 rounded-lg text-sm hover:bg-blue-700 transition-all shadow-sm">
              <span className="material-symbols-outlined text-base">edit_square</span>
              Nouvelle discussion
            </button>
          </div>
        </aside>

        {/* Main Chat Area */}
        <section className="flex-1 flex flex-col bg-white dark:bg-slate-900 relative">
          
          {/* Chat Header */}
          <header className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 shadow-sm z-10 shrink-0">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="size-11 rounded-full bg-cover bg-center border-2 border-blue-600/20" style={{ backgroundImage: `url('${conversations[0].avatar}')` }}></div>
                <div className="absolute -bottom-1 -right-1 size-4 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full"></div>
              </div>
              <div>
                <h2 className="text-base font-bold flex items-center gap-2">
                  {conversations[0].name}
                  <span className="text-[10px] bg-blue-600/10 text-blue-600 px-1.5 py-0.5 rounded uppercase tracking-wider">PRO</span>
                </h2>
                <div className="flex items-center gap-1.5">
                  <span className="size-2 bg-green-500 rounded-full"></span>
                  <p className="text-xs text-slate-500 font-medium">En ligne</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors border border-slate-200 dark:border-slate-700">
                <span className="material-symbols-outlined text-xl">description</span>
                <span className="hidden sm:inline">Voir le projet</span>
              </button>
              <button className="flex items-center justify-center size-10 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
                <span className="material-symbols-outlined">more_vert</span>
              </button>
            </div>
          </header>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50 dark:bg-slate-900/50">
            <div className="flex flex-col items-center">
              <span className="px-4 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Aujourd'hui</span>
            </div>

            {/* Message Received */}
            <div className="flex gap-3 max-w-[85%]">
              <div className="size-8 rounded-full bg-cover bg-center shrink-0 mt-1" style={{ backgroundImage: `url('${conversations[0].avatar}')` }}></div>
              <div className="space-y-1">
                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-4 rounded-r-xl rounded-bl-xl shadow-sm">
                  <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                    Bonjour ! J'ai bien analysé les photos de votre installation. Le problème de fuite semble provenir du joint principal de la vanne d'arrêt.
                  </p>
                </div>
                <span className="text-[10px] text-slate-400 ml-1 block">14:15</span>
              </div>
            </div>

            {/* Message Received (Continuation) */}
            <div className="flex gap-3 max-w-[85%]">
              <div className="size-8 rounded-full bg-cover bg-center shrink-0 mt-1 opacity-0"></div>
              <div className="space-y-1">
                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-4 rounded-r-xl rounded-bl-xl shadow-sm">
                  <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                    Est-ce que vous seriez disponible demain vers 14h pour que je puisse établir un devis précis sur place ?
                  </p>
                </div>
                <span className="text-[10px] text-slate-400 ml-1 block">14:15</span>
              </div>
            </div>

            {/* Message Sent */}
            <div className="flex flex-row-reverse gap-3 max-w-[85%] ml-auto">
              <div className="size-8 rounded-full bg-cover bg-center shrink-0 mt-1" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=60")' }}></div>
              <div className="space-y-1 flex flex-col items-end">
                <div className="bg-blue-600 text-white p-4 rounded-l-xl rounded-br-xl shadow-md">
                  <p className="text-sm leading-relaxed">
                    C'est parfait pour demain 14h. J'ai également une petite question sur le robinet de la cuisine qui goutte, est-ce qu'on pourra regarder ça aussi ?
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[10px] text-slate-400 mr-1">14:22</span>
                  <span className="material-symbols-outlined text-blue-600 text-sm font-bold">done_all</span>
                </div>
              </div>
            </div>

            {/* Typing Indicator */}
            <div className="flex gap-3 max-w-[85%]">
              <div className="size-8 rounded-full bg-cover bg-center shrink-0 mt-1" style={{ backgroundImage: `url('${conversations[0].avatar}')` }}></div>
              <div className="space-y-1">
                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-4 rounded-r-xl rounded-bl-xl shadow-sm inline-block">
                  <div className="flex gap-2 items-center text-blue-600 mb-2 italic">
                    <span className="material-symbols-outlined text-base">edit</span>
                    <span className="text-xs">Jean est en train d'écrire...</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="size-1.5 bg-slate-300 dark:bg-slate-600 rounded-full animate-bounce"></span>
                    <span className="size-1.5 bg-slate-300 dark:bg-slate-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                    <span className="size-1.5 bg-slate-300 dark:bg-slate-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                  </div>
                </div>
              </div>
            </div>
            
          </div>

          {/* Input Field Area */}
          <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shrink-0">
            <div className="max-w-4xl mx-auto">
              <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-2 flex items-end gap-2 focus-within:ring-2 focus-within:ring-blue-600/20 transition-all">
                <div className="flex gap-1 pb-1">
                  <button className="size-9 flex items-center justify-center rounded-lg text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                    <span className="material-symbols-outlined">add_circle</span>
                  </button>
                  <button className="size-9 flex items-center justify-center rounded-lg text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                    <span className="material-symbols-outlined">image</span>
                  </button>
                  <button className="size-9 flex items-center justify-center rounded-lg text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                    <span className="material-symbols-outlined">attach_file</span>
                  </button>
                </div>
                <textarea 
                  className="flex-1 bg-transparent border-none focus:ring-0 text-sm resize-none py-2.5 max-h-32 min-h-[44px] outline-none placeholder-slate-400" 
                  placeholder="Écrivez votre message ici..." 
                  rows="1"
                ></textarea>
                <div className="pb-1 pr-1">
                  <button className="size-10 flex items-center justify-center bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
                    <span className="material-symbols-outlined">send</span>
                  </button>
                </div>
              </div>
              <div className="flex justify-between mt-2 px-1">
                <p className="text-[10px] text-slate-400 font-medium hidden sm:block">Entrée pour envoyer, Shift + Entrée pour nouvelle ligne</p>
                <div className="flex items-center gap-1.5 text-green-600">
                  <span className="material-symbols-outlined text-xs">verified</span>
                  <span className="text-[10px] font-bold uppercase tracking-tight">Paiement sécurisé actif</span>
                </div>
              </div>
            </div>
          </div>
          
        </section>
      </main>
    </div>
  );
};

export default ClientInbox;
