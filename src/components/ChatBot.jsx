import React, { useState, useEffect, useRef } from 'react';
import { Send, Bot, User, Loader2, BookOpen, Trash2, X, MessageCircle } from 'lucide-react';
import apiService from '../services/api';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [context, setContext] = useState("");
  const messagesEndRef = useRef(null);
  const user = apiService.getCurrentUser();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const fetchContext = async () => {
      try {
        const [artisans, categories, subcategories] = await Promise.all([
          apiService.getArtisans(),
          apiService.getCategories(),
          apiService.getSubcategoryDetails(null).catch(() => [])
        ]);

        const artisansList = artisans.data || artisans; 

        const artisansContext = artisansList.map(a => 
          `- Nom: ${a.name}, Spécialité: ${a.role}, Ville: ${a.location}, Note: ${a.rating}/5, Avis: ${a.review_count || 0}`
        ).join('\n');

        const categoriesContext = categories.map(c => 
          `- ${c.name}: ${c.description || 'Service professionnel'}`
        ).join('\n');

        const fullContext = `
          LISTE DES ARTISANS RÉELS SUR LA PLATEFORME :
          ${artisansContext}

          CATÉGORIES DE SERVICES DISPONIBLES :
          ${categoriesContext}
        `;

        setContext(fullContext);
      } catch (err) {
        console.error('Error fetching context for chatbot:', err);
      }
    };

    fetchContext();
    
    const savedHistory = localStorage.getItem('bricolo_chat_history');
    if (savedHistory) {
      setMessages(JSON.parse(savedHistory));
    } else {
      setMessages([
        {
          role: "assistant",
          content: `Bonjour ${user ? user.name : ''} ! 👋 Je suis l'assistant intelligent de BricoloPro. Je connais tous nos experts et services. Je peux vous recommander un artisan spécifique ou répondre à vos questions. Comment puis-je vous aider ?`
        }
      ]);
    }
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('bricolo_chat_history', JSON.stringify(messages));
    }
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: "user", content: input.trim() };
    setInput("");
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const systemPrompt = `Tu es l'assistant de conciergerie IA de BricoloPro (Algérie).
      
      TON RÔLE :
      - Tu es un expert qui connaît parfaitement les artisans inscrits sur la plateforme.
      - Tu DOIS donner les noms des artisans quand l'utilisateur demande des recommandations.
      - Tu aides à comparer les notes et les villes.
      - Tu diriges les utilisateurs vers /search pour plus de filtres ou /artisan/ID pour les détails.

      CONTEXTE ACTUEL DE LA BASE DE DONNÉES :
      ${context}

      CONSIGNES : [Humain, chaleureux, précis]`;

      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
          "HTTP-Referer": window.location.origin,
          "X-Title": "BricoloPro AI Assistant",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "openai/gpt-4o-mini",
          messages: [
            { role: "system", content: systemPrompt },
            ...messages.map((msg) => ({ role: msg.role, content: msg.content })),
            { role: "user", content: userMessage.content },
          ],
        }),
      });

      const data = await response.json();
      const assistantMessage = {
        role: "assistant",
        content: data.choices[0].message.content,
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      setMessages(prev => [...prev, {
        role: "assistant",
        content: "Désolé, je rencontre une petite difficulté technique."
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearHistory = () => {
    if (window.confirm("Effacer l'historique ?")) {
      setMessages([]);
      localStorage.removeItem('bricolo_chat_history');
      window.location.reload();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-['Outfit',sans-serif]">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="size-16 rounded-full bg-primary text-white shadow-2xl shadow-primary/40 flex items-center justify-center hover:scale-110 active:scale-95 transition-all group"
        >
          <MessageCircle className="size-8" />
          <div className="absolute -top-1 -right-1 size-4 bg-emerald-500 border-2 border-white rounded-full"></div>
        </button>
      )}

      {isOpen && (
        <div className="w-[380px] sm:w-[420px] h-[600px] bg-white rounded-[32px] shadow-2xl border border-slate-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 duration-500 transition-colors">
          <div className="p-6 bg-primary text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                <Bot className="size-6 text-white" />
              </div>
              <div>
                <h3 className="font-black text-sm uppercase tracking-tight">AI Assistant</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-70">Support BricoloPro</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={handleClearHistory} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                <Trash2 className="size-4" />
              </button>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                <X className="size-5" />
              </button>
            </div>
          </div>

          <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-slate-50/50 transition-colors">
            {messages.map((message, index) => (
              <div key={index} className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                {message.role === "assistant" && (
                  <div className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 transition-colors">
                    <Bot className="size-4" />
                  </div>
                )}
                <div className={`max-w-[85%] rounded-[20px] px-4 py-3 text-sm leading-relaxed ${
                    message.role === "user"
                      ? "bg-primary text-white font-medium"
                      : "bg-white border border-slate-100 text-slate-700 shadow-sm"
                  } ${message.role === 'user' ? 'rounded-tr-none' : 'rounded-tl-none'} transition-colors`}
                >
                  <p className="whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3 justify-start">
                <div className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <Bot className="size-4" />
                </div>
                <div className="bg-white border border-slate-100 rounded-[20px] rounded-tl-none px-4 py-3 shadow-sm transition-colors">
                  <div className="flex gap-1.5">
                    <div className="size-1.5 bg-primary/40 rounded-full animate-bounce"></div>
                    <div className="size-1.5 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="size-1.5 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="px-6 py-3 border-t border-slate-50 flex gap-2 overflow-x-auto scrollbar-hide bg-white transition-colors">
            {["Services", "Tarifs", "Comment ça marche ?", "Aide"].map((action, i) => (
              <button
                key={i}
                onClick={() => setInput(action)}
                className="whitespace-nowrap px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all border border-slate-200"
              >
                {action}
              </button>
            ))}
          </div>

          <form onSubmit={handleSendMessage} className="p-6 pt-0 bg-slate-50/50 transition-colors">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Écrivez votre message..."
                disabled={isLoading}
                className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all pr-14"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 size-10 rounded-xl bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-all disabled:opacity-50"
              >
                {isLoading ? <Loader2 className="size-5 animate-spin" /> : <Send className="size-5" />}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
