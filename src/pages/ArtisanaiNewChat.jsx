import React from 'react';

const ArtisanaiNewChat = () => {
  return (
    <>
      
<div className="flex h-screen overflow-hidden">
{/*  Sidebar  */}
<aside className="w-64 flex flex-col border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
<div className="p-6 flex items-center gap-3">
<div className="size-10 rounded-full bg-primary flex items-center justify-center text-white">
<span className="material-symbols-outlined">smart_toy</span>
</div>
<div className="flex flex-col">
<h1 className="text-base font-bold leading-none">ArtisanAI</h1>
<p className="text-xs text-slate-500 dark:text-slate-400">Professional Assistant</p>
</div>
</div>
<nav className="flex-1 px-4 py-2 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800" href="#">
<span className="material-symbols-outlined text-xl">home</span>
                    Home
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg bg-primary text-white" href="#">
<span className="material-symbols-outlined text-xl">add_box</span>
                    New Chat
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800" href="#">
<span className="material-symbols-outlined text-xl">history</span>
                    History
                </a>
<div className="pt-4 pb-2 px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Recent Chats
                </div>
<div className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-xs font-medium rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 truncate" href="#">
                        Account verification steps
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-xs font-medium rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 truncate" href="#">
                        Quote for enterprise plan
                    </a>
</div>
</nav>
<div className="p-4 space-y-1 border-t border-slate-200 dark:border-slate-800">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800" href="#">
<span className="material-symbols-outlined text-xl">settings</span>
                    Settings
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800" href="#">
<span className="material-symbols-outlined text-xl">help</span>
                    Help
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800" href="#">
<span className="material-symbols-outlined text-xl text-red-500">logout</span>
                    Log out
                </a>
</div>
</aside>
{/*  Main Content Area  */}
<main className="flex-1 flex flex-col bg-background-light dark:bg-background-dark overflow-y-auto">
{/*  Header  */}
<header className="flex items-center justify-between px-8 py-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-10 border-b border-slate-200 dark:border-slate-800">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary">chat_bubble</span>
<h2 className="text-lg font-bold">New Chat</h2>
</div>
<div className="flex items-center gap-4">
<button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400">
<span className="material-symbols-outlined">search</span>
</button>
<div className="size-8 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden border border-slate-200 dark:border-slate-700">
<img alt="User Avatar" className="w-full h-full object-cover" data-alt="User profile picture thumbnail" src="https://lh3.googleusercontent.com/aida-public/AB6AXuANp0_V4lYfl6nzJFa7Fh_szDZUgP-82dHFX9WFiHMqg-QiQeJwts8BcPAAtiyz7q3YMwpGjlNJwBUUuZ_qMKlT3VrS57IhA3f4XAiKCP_GLkeAfEZPtqMTNcgMvy3jURBPzquUnaVHW5j190yn65thh2JADgny151qQK2gywYwuqb-XGKjWCDKUTyz5SNJenivcgijqwWCxEVhGPEfeuoZXCkImkBXFR6af56VHSk-NwbjhqRbBAPpB1ZfGy6fSErZLy0NKnygYQpz"/>
</div>
</div>
</header>
{/*  Center Content  */}
<div className="flex-1 flex flex-col items-center justify-center max-w-4xl mx-auto w-full px-6 py-12">
<div className="text-center mb-12">
<div className="size-16 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mx-auto mb-6">
<span className="material-symbols-outlined text-4xl">auto_awesome</span>
</div>
<h1 className="text-3xl font-bold mb-4">How can I help you today?</h1>
<p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                        Ask me anything about account verification, billing, or technical support. I'm here to help you get the most out of ArtisanAI.
                    </p>
</div>
{/*  Suggested Prompts  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-12">
<button className="group flex flex-col text-left p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary dark:hover:border-primary transition-all shadow-sm hover:shadow-md">
<span className="material-symbols-outlined text-primary mb-3">verified_user</span>
<p className="text-sm font-semibold mb-1 group-hover:text-primary">Verify Account</p>
<p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">How do I verify my account and identity?</p>
</button>
<button className="group flex flex-col text-left p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary dark:hover:border-primary transition-all shadow-sm hover:shadow-md">
<span className="material-symbols-outlined text-primary mb-3">request_quote</span>
<p className="text-sm font-semibold mb-1 group-hover:text-primary">Request Quote</p>
<p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">What is the process to get a custom quote?</p>
</button>
<button className="group flex flex-col text-left p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary dark:hover:border-primary transition-all shadow-sm hover:shadow-md">
<span className="material-symbols-outlined text-primary mb-3">payments</span>
<p className="text-sm font-semibold mb-1 group-hover:text-primary">Payment Methods</p>
<p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Which payment methods do you support?</p>
</button>
</div>
{/*  Chat Input Area  */}
<div className="w-full max-w-3xl sticky bottom-8">
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<span className="material-symbols-outlined text-slate-400 group-focus-within:text-primary">chat_bubble_outline</span>
</div>
<input className="block w-full pl-12 pr-32 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-xl dark:shadow-slate-950/50" placeholder="Type your question here..." type="text"/>
<div className="absolute inset-y-0 right-2 flex items-center gap-1">
<button className="p-2 text-slate-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined">attach_file</span>
</button>
<button className="p-2 text-slate-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined">mic</span>
</button>
<button className="ml-1 bg-primary text-white p-2 rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center">
<span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</div>
<p className="text-[10px] text-center mt-3 text-slate-400 dark:text-slate-500">
                        ArtisanAI can make mistakes. Please verify important information.
                    </p>
</div>
</div>
</main>
</div>

    </>
  );
};

export default ArtisanaiNewChat;
