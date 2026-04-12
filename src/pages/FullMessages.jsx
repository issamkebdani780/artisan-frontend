import React, { useState, useEffect } from 'react';
import apiService from '../services/api';
import ClientLayout from '../layouts/ClientLayout';
import ArtisanLayout from '../layouts/ArtisanLayout';
import ChatModal from '../components/ChatModal';

const FullMessages = () => {
  const [conversations, setConversations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedConvo, setSelectedConvo] = useState(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    fetchConversations();
    const interval = setInterval(fetchConversations, 10000);
    return () => clearInterval(interval);
  }, []);

  const fetchConversations = async () => {
    try {
      const data = await apiService.getConversations();
      setConversations(data);
    } catch (err) {
      console.error('Failed to fetch conversations:', err);
    } finally {
      setLoading(false);
    }
  };

  const Layout = user?.role === 'artisan' ? ArtisanLayout : ClientLayout;
  const layoutProps = user?.role === 'artisan' 
    ? { title: "Messages", subtitle: "Centre de communication" }
    : { title: "Mihnati Client", subtitle: "Mes discussions" };

  return (
    <Layout {...layoutProps}>
      <div className="p-8 md:p-12 flex flex-col flex-1 bg-slate-50/20 font-['Outfit',sans-serif]">
        <div className="mb-12">
          <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tight">Messages</h2>
          <p className="text-slate-500 mt-2 font-bold uppercase tracking-widest text-xs">Gérez vos discussions avec vos {user?.role === 'artisan' ? 'clients' : 'artisans'}</p>
        </div>

        {loading ? (
          <div className="flex-1 flex flex-col items-center justify-center py-20">
            <span className="animate-spin h-12 w-12 border-4 border-primary border-t-transparent rounded-full mb-4"></span>
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Chargement de vos messages...</p>
          </div>
        ) : conversations.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center bg-white rounded-[40px] border-2 border-dashed border-slate-100 p-20 text-center shadow-sm">
            <div className="size-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 mb-8">
              <span className="material-symbols-outlined text-4xl">chat_bubble</span>
            </div>
            <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-2">Aucune conversation</h3>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] max-w-xs mx-auto mb-10 leading-relaxed text-center">
              Vous n'avez pas encore de discussions actives. Les conversations s'afficheront ici une fois que vous aurez contacté un {user?.role === 'artisan' ? 'client' : 'artisan'}.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {conversations.map(convo => (
              <div 
                key={convo.id} 
                onClick={() => {
                  setSelectedConvo(convo);
                  setIsChatOpen(true);
                }}
                className="bg-white rounded-3xl border border-slate-100 p-6 flex items-center justify-between hover:shadow-xl hover:shadow-primary/5 transition-all cursor-pointer group relative overflow-hidden"
              >
                <div className="flex items-center gap-6 relative z-10">
                  <div className="size-16 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 shrink-0 group-hover:bg-primary/10 group-hover:text-primary transition-colors overflow-hidden border border-slate-50">
                    {convo.profile_pic ? (
                      <img src={convo.profile_pic} alt={convo.name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="material-symbols-outlined text-3xl">person</span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="font-black text-slate-900 uppercase tracking-tight truncate">{convo.name}</h4>
                      {convo.unread_count > 0 && (
                        <span className="bg-primary text-white text-[9px] font-black px-2 py-0.5 rounded-full animate-pulse">
                          {convo.unread_count} NOUVEAU
                        </span>
                      )}
                    </div>
                    <p className="text-slate-500 text-xs truncate font-medium">
                      {convo.last_message || "Démarrer la discussion..."}
                    </p>
                  </div>
                </div>

                <div className="text-right shrink-0 relative z-10">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    {convo.last_message_time ? new Date(convo.last_message_time).toLocaleDateString() : ''}
                  </p>
                  <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-all mt-2 group-hover:translate-x-1">chevron_right</span>
                </div>
                
                {convo.unread_count > 0 && <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>}
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedConvo && (
        <ChatModal 
          isOpen={isChatOpen}
          onClose={() => {
            setIsChatOpen(false);
            fetchConversations();
          }}
          otherUser={selectedConvo}
        />
      )}
    </Layout>
  );
};

export default FullMessages;
