import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import apiService from '../services/api';

const ChatModal = ({ isOpen, onClose, otherUser, devisId, bookingId }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);
  const messagesEndRef = useRef(null);
  const user = JSON.parse(localStorage.getItem('user'));

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen && otherUser?.id) {
      fetchMessages();
      const interval = setInterval(fetchMessages, 5000); // Polling every 5 seconds
      return () => clearInterval(interval);
    }
  }, [isOpen, otherUser?.id]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const fetchMessages = async () => {
    try {
      const data = await apiService.getConversation(otherUser.id);
      setMessages(data);
    } catch (err) {
      console.error('Failed to fetch messages:', err);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim() || sending) return;

    setSending(true);
    try {
      const data = {
        receiver_id: otherUser.id,
        devis_id: devisId,
        booking_id: bookingId,
        message: newMessage
      };
      await apiService.sendMessage(data);
      setNewMessage('');
      fetchMessages();
    } catch (err) {
      alert("Erreur lors de l'envoi du message");
    } finally {
      setSending(false);
    }
  };

  if (!isOpen) return null;

  const modalContent = (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-6 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300 font-['Outfit',sans-serif]">
      <div className="bg-white w-full max-w-2xl h-[80vh] rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden border border-white/20">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-50 flex items-center justify-between bg-slate-50/50">
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined font-black">person</span>
            </div>
            <div>
              <h3 className="font-black text-slate-900 uppercase tracking-tight">{otherUser?.name}</h3>
              <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest flex items-center gap-1">
                <span className="size-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                En ligne
              </p>
            </div>
          </div>
          <button onClick={onClose} className="size-10 rounded-full bg-white flex items-center justify-center text-slate-400 hover:text-red-500 transition-all">
            <span className="material-symbols-outlined font-black">close</span>
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar bg-slate-50/30">
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-10 opacity-40">
              <span className="material-symbols-outlined text-6xl mb-4">forum</span>
              <p className="font-bold uppercase tracking-widest text-xs">Aucun message pour le moment</p>
              <p className="text-[10px] mt-2">Commencez la discussion en envoyant un message ci-dessous.</p>
            </div>
          ) : (
            messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.sender_id === user.id ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-3xl text-sm font-medium shadow-sm ${
                  msg.sender_id === user.id 
                    ? 'bg-primary text-white rounded-tr-none' 
                    : 'bg-white text-slate-900 border border-slate-100 rounded-tl-none'
                }`}>
                  <p>{msg.message}</p>
                  <p className={`text-[9px] mt-1 opacity-60 font-black uppercase ${msg.sender_id === user.id ? 'text-right' : 'text-left'}`}>
                    {new Date(msg.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-6 bg-white border-t border-slate-50">
          <form onSubmit={handleSendMessage} className="flex gap-3">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Écrivez votre message..."
              className="flex-1 bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-all text-sm"
              disabled={sending}
            />
            <button
              type="submit"
              disabled={!newMessage.trim() || sending}
              className="size-14 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/20 hover:bg-primary/90 active:scale-95 transition-all disabled:opacity-50"
            >
              {sending ? (
                <span className="animate-spin size-5 border-2 border-white/30 border-t-white rounded-full"></span>
              ) : (
                <span className="material-symbols-outlined font-black">send</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
};

export default ChatModal;
