import React from 'react';

const ProArtisan = () => {
  return (
    <>
      
<div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
{/*  Pro Dashboard Header  */}
<header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md px-4 lg:px-20 py-3">
<div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4">
<div className="flex items-center gap-8 flex-1">
<div className="flex items-center gap-2 text-primary">
<span className="material-symbols-outlined text-3xl font-bold">handyman</span>
<h2 className="text-slate-900 text-xl font-bold leading-tight tracking-tight">Pro Artisan</h2>
</div>
{/*  Quick Search  */}
<div className="hidden md:flex flex-1 max-w-md">
<label className="relative w-full">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
<input className="w-full bg-slate-100 border-none rounded-xl py-2 pl-10 pr-4 focus:ring-2 focus:ring-primary/50 text-slate-900 placeholder:text-slate-500" placeholder="Search projects, artisans..." type="text"/>
</label>
</div>
</div>
<div className="flex items-center gap-3 md:gap-6">
<button className="hidden sm:flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary/90">
                    Post Work
                </button>
{/*  Notification Bell with Red Dot  */}
<div className="relative cursor-pointer group">
<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600 group-hover:bg-slate-200">
<span className="material-symbols-outlined">notifications</span>
</div>
<span className="absolute top-2 right-2 flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
</span>
</div>
{/*  Profile Dropdown  */}
<div className="flex items-center gap-2 pl-2 border-l border-slate-200 cursor-pointer">
<div className="h-10 w-10 rounded-full bg-cover bg-center border-2 border-primary" data-alt="Professional profile headshot of a smiling artisan" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuD35HdAl38-fdJLYsJh428zq9uKdBrVDKGjs1YS1nWYzBeCbxU8LMjiRMnbGofD_l0HJgAi5HV8sppDCWWlP2ZoQmHNuxsNRwTDjnQbfeBKULPDWXa5Zobmol63CYy53bYWxLmH7KeqOF8B4oyK0a9M-SqnJRipYqIgqux_mVZ4IXgvmmGF6cW2-cCiU1nUn551mDNSQKBrWBMVowcRzEjgfvYnZIquZcAvK1G69cnyzo1jhcQrxEtGhQlmtdDaOVomMIgG1LyU-r-1");'></div>
<span className="material-symbols-outlined text-slate-400">expand_more</span>
</div>
</div>
</div>
</header>
<main className="flex-1 px-4 lg:px-20 py-8">
<div className="mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-12 gap-8">
{/*  Sidebar Navigation  */}
<aside className="lg:col-span-3 space-y-2">
<div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary text-white shadow-md">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-medium">Dashboard</span>
</div>
<div className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-100">
<span className="material-symbols-outlined">chat_bubble</span>
<span className="font-medium">Messages</span>
</div>
<div className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-100">
<span className="material-symbols-outlined">work</span>
<span className="font-medium">My Jobs</span>
</div>
<div className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-100">
<span className="material-symbols-outlined">account_balance_wallet</span>
<span className="font-medium">Finances</span>
</div>
<hr className="my-4 border-slate-200"/>
<div className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-100">
<span className="material-symbols-outlined">settings</span>
<span className="font-medium">Settings</span>
</div>
</aside>
{/*  Profile Content Area  */}
<div className="lg:col-span-9 space-y-8">
{/*  Profile Container  */}
<div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
<div className="flex flex-col md:flex-row gap-8 items-start">
{/*  Avatar Section  */}
<div className="relative">
<div className="h-40 w-40 rounded-3xl bg-cover bg-center ring-4 ring-primary/10" data-alt="Detailed professional portrait of Alex Rivera" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCbFMjN_hCSOiw0nj14a4lB4baQFs9srzva0gWXRYhFxBIkz-MyHLNouuQzwpE3uqlXREBS6GHMA7GQow2UclOomEejUlpYJqEyDWS0wLyh0HZ33J5S-bYaZAtugsWmIlTFGl91Bc_-7Iwf-MIwhZ1lbRMP8SQdTVZ652cAM-py8ERlt1BDfc94lIAMXYdiZ9yXZ32SpDuBHSakBpaiVZreni0HhULDY4w5Tn-RoC30VgHGSUm2WVsK8K-gEnh_cihoSTcNK76OViiy");'></div>
{/*  Glowing Availability Status  */}
<div className="absolute -bottom-2 -right-2 flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full shadow-lg border border-slate-100">
<span className="relative flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
</span>
<span className="text-xs font-bold text-green-600 uppercase tracking-wider">Available</span>
</div>
</div>
{/*  Info Section  */}
<div className="flex-1 space-y-4">
<div className="flex flex-wrap items-center gap-3">
<h1 className="text-3xl font-bold text-slate-900">Alex Rivera</h1>
{/*  Elite Pro Badge  */}
<div className="flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1 rounded-full">
<span className="material-symbols-outlined text-lg fill-1">verified_user</span>
<span className="text-xs font-bold uppercase tracking-tight">Elite Pro</span>
</div>
</div>
<p className="text-lg text-slate-500 font-medium leading-relaxed">
                                Specialist in high-end sustainable architecture and bespoke interior installations. 15+ years of craft mastery.
                            </p>
<div className="flex flex-wrap gap-4 pt-2">
<button className="bg-primary text-white font-bold py-3 px-8 rounded-xl shadow-lg shadow-primary/30 hover:scale-[1.02] transition-transform active:scale-95">
                                    Hire Now
                                </button>
<button className="bg-slate-100 text-slate-700 font-bold py-3 px-8 rounded-xl hover:bg-slate-200 transition-colors">
                                    View Portfolio
                                </button>
<button className="flex items-center justify-center w-12 h-12 rounded-xl border-2 border-slate-100 text-slate-400 hover:text-primary hover:border-primary transition-all">
<span className="material-symbols-outlined">share</span>
</button>
</div>
</div>
</div>
{/*  Achievement Stats  */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
<div className="bg-background-light p-6 rounded-2xl border border-slate-100">
<p className="text-slate-500 text-sm font-semibold uppercase tracking-wider mb-1">Projects</p>
<div className="flex items-end gap-2">
<span className="text-3xl font-bold text-slate-900">458</span>
<span className="text-green-500 text-sm font-bold pb-1 flex items-center">
<span className="material-symbols-outlined text-sm">trending_up</span> 12%
                                </span>
</div>
</div>
<div className="bg-background-light p-6 rounded-2xl border border-slate-100">
<p className="text-slate-500 text-sm font-semibold uppercase tracking-wider mb-1">Followers</p>
<div className="flex items-end gap-2">
<span className="text-3xl font-bold text-slate-900">12.4k</span>
</div>
</div>
<div className="bg-background-light p-6 rounded-2xl border border-slate-100">
<p className="text-slate-500 text-sm font-semibold uppercase tracking-wider mb-1">Rating</p>
<div className="flex items-center gap-2">
<span className="text-3xl font-bold text-slate-900">4.9</span>
<div className="flex text-primary">
<span className="material-symbols-outlined text-lg fill-1">star</span>
</div>
</div>
</div>
<div className="bg-background-light p-6 rounded-2xl border border-slate-100">
<p className="text-slate-500 text-sm font-semibold uppercase tracking-wider mb-1">Hired</p>
<div className="flex items-end gap-2">
<span className="text-3xl font-bold text-slate-900">98%</span>
</div>
</div>
</div>
</div>
{/*  Recent Activity/Projects Grid Preview  */}
<div className="space-y-4">
<div className="flex items-center justify-between">
<h3 className="text-xl font-bold text-slate-900">Featured Work</h3>
<a className="text-primary font-bold text-sm hover:underline" href="#">View All</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="group relative overflow-hidden rounded-2xl h-48 bg-slate-200 cursor-pointer">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" data-alt="Professional architectural design showcase" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuC4AuwUF5-HwIzDgPQEVT-8eCfpDZ4n32f8mbmlxNY0ZbQIg8WmD7jQIgj98kNjANhv9sqnJBlt80IAJuR99blSmRnG4nKZv9Ixqw-RzMnsOT2Vg3rcxRWlFQYrMs407lAxSc1lQEZnGbslNFCg0nkPEKnLqMWvEtY4mc5CsjMeX4tFmHxtDBfPWPTEWmMqgFqzMU-9rfMF0ufgFINfcNCTY3NwJk2GaoG8GDTgCT5AQNMmfl2zF_UHH9j-5YWsGe_lq0gcxfmy4NjU");'></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-4">
<p className="text-white font-bold">Modern Eco-Villa</p>
<p className="text-white/70 text-sm">Residential Architecture</p>
</div>
</div>
<div className="group relative overflow-hidden rounded-2xl h-48 bg-slate-200 cursor-pointer">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" data-alt="Minimalist interior design project photography" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBvInfaci2p6GqKx3Rr1pjcz-UDTr4vS7GzVLEu1XS97ZonmGhE0LpNPpdMyjn17lLlaNaMzf7xrF2XM5vShx2y7itvPUpg2tRSSIu4NlJ5og8IJZekHWAepmYpoE3irkJj7JSTRDaRa3pAszHIzyKSMgblx60JqBGCOJwOfx8MX3nMTozu9ok4wjOF45n0TnVrVvDOkJmPhiRU5wnk7YRiGtWtdsVsZYWcsYt9fZ_j06XiFYxP8bhypieY0_Nw4RNXho3vX1j-T37n");'></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-4">
<p className="text-white font-bold">Zen Studio Loft</p>
<p className="text-white/70 text-sm">Interior Design</p>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
{/*  Footer Space  */}
<footer className="mt-auto py-10 px-4 lg:px-20 text-center text-slate-400 text-sm border-t border-slate-100">
<p>Â© 2024 Pro Artisan Global. The Premium Professional Network.</p>
</footer>
</div>

    </>
  );
};

export default ProArtisan;

