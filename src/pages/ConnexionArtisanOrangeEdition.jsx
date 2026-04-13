import React from 'react';

const ConnexionArtisanOrangeEdition = () => {
  return (
    <>
      
<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-[0_20px_40px_-12px_rgba(76,29,149,0.08)]">
<div className="flex justify-between items-center h-20 px-8 max-w-full mx-auto font-inter antialiased tracking-tight">
<div className="text-2xl font-black text-slate-900 tracking-tighter">ArtisanHub</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-slate-500 hover:text-slate-900 transition-colors font-medium" href="#">Find Pros</a>
<a className="text-slate-500 hover:text-slate-900 transition-colors font-medium" href="#">How it Works</a>
<a className="text-slate-500 hover:text-slate-900 transition-colors font-medium" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="text-slate-500 hover:text-slate-900 transition-colors font-semibold px-4 py-2" href="#">Log In</a>
<button className="bg-violet-600 text-white px-6 py-2.5 rounded-lg font-bold active:scale-95 transition-all shadow-lg shadow-violet-500/20">Get Started</button>
</div>
</div>
</nav>
<main className="flex-grow flex items-center justify-center pt-24 pb-12 px-6 bg-surface relative overflow-hidden">
<div className="absolute top-[-10%] left-[-5%] w-[40%] h-[60%] rounded-full bg-orange-500/5 blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[60%] rounded-full bg-violet-500/5 blur-[120px]"></div>
<div className="w-full max-w-[1100px] grid lg:grid-cols-2 bg-surface-container-lowest rounded-xl shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] overflow-hidden">
<div className="hidden lg:block relative min-h-[600px]">
<img alt="Professional artisan working" className="absolute inset-0 w-full h-full object-cover" data-alt="Close-up of a professional carpenter working with specialized tools in a modern sunlit workshop with wood shavings" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYvA-fFj3RZbQj-nPCrjuAAOhnIhLISrtBpNoOHJsDd2PEJAkJo2wcNUnSd-KDR_IUnjtwHBVAEwBqHblQT33-t-wJDwTGxyc-5k2Z5WPye5vP0fZvLp7kHdnyJcdBmc_i36X4FXrb9llbAMarQGdlo-PBzPy4QW1xt57sHk90kOPFzk8FWDCqcRVBaINNw_xtlOBIQKjfu4UME3WoeCqa78BIG1Jr9aWqlMTEz0_Wj3B2uuuFi5XY1dRUAbrnPSIe_A7UVMIWq5OL"/>
<div className="absolute inset-0 bg-gradient-to-tr from-slate-900/80 via-slate-900/40 to-transparent flex flex-col justify-end p-12">
<div className="space-y-4">
<div className="inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-md border border-orange-500/30 px-3 py-1 rounded-full text-orange-400 text-xs font-bold tracking-widest uppercase">
<span className="material-symbols-outlined text-sm" >verified</span>
                            Pro Network
                        </div>
<h2 className="text-white text-4xl font-black tracking-tight leading-tight">Empowering the world's finest craftsmen.</h2>
<p className="text-slate-200 text-lg max-w-md">Join over 50,000 professional artisans growing their business with ArtisanHub's premium toolset.</p>
</div>
</div>
</div>
<div className="p-8 md:p-16 flex flex-col justify-center">
<div className="mb-10 text-center lg:text-left">
<h1 className="text-3xl font-black text-on-surface tracking-tighter mb-2">Professional Login</h1>
<p className="text-on-surface-variant font-medium">Access your artisan dashboard and client requests.</p>
</div>
<form className="space-y-6">
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Professional Email</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/50">mail</span>
<input className="w-full pl-12 pr-4 py-4 bg-surface-container-high border-none rounded-lg focus:ring-2 focus:ring-orange-500/40 focus:bg-white transition-all outline-none text-on-surface font-medium" placeholder="name@yourcraft.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between items-center px-1">
<label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Password</label>
<a className="text-xs font-bold text-orange-600 hover:text-orange-700 transition-colors uppercase tracking-widest" href="#">Forgot password?</a>
</div>
<div className="relative">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/50">lock</span>
<input className="w-full pl-12 pr-4 py-4 bg-surface-container-high border-none rounded-lg focus:ring-2 focus:ring-orange-500/40 focus:bg-white transition-all outline-none text-on-surface font-medium" placeholder="â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢" type="password"/>
</div>
</div>
<div className="flex items-center gap-3 py-2">
<input className="w-5 h-5 rounded border-outline-variant text-orange-600 focus:ring-orange-500" id="remember" type="checkbox"/>
<label className="text-sm font-medium text-on-surface-variant select-none" htmlFor="remember">Keep me logged in for 30 days</label>
</div>
<button className="w-full orange-theme-accent text-white py-4 rounded-lg font-extrabold text-lg shadow-xl shadow-orange-500/20 active:scale-95 transition-all flex items-center justify-center gap-2 group" type="submit">
                        Sign In to Dashboard
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
</form>
<div className="mt-10 pt-8 border-t border-slate-100 flex flex-col items-center gap-6">
<p className="text-on-surface-variant font-medium">New to ArtisanHub?</p>
<a className="inline-flex items-center gap-2 px-8 py-3 bg-surface-container-low text-on-surface font-bold rounded-lg border border-outline-variant/20 hover:bg-surface-container-high transition-colors active:scale-95" href="#">
<span className="material-symbols-outlined text-orange-600" >person_add</span>
                        Create an Artisan account
                    </a>
</div>
<div className="mt-12 flex items-center justify-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-[10px] font-black tracking-widest uppercase">Trusted by industry leaders</span>
<div className="flex gap-4">
<span className="material-symbols-outlined text-2xl">verified_user</span>
<span className="material-symbols-outlined text-2xl">shield_with_heart</span>
<span className="material-symbols-outlined text-2xl">workspace_premium</span>
</div>
</div>
</div>
</div>
</main>
<footer className="bg-slate-50 border-t border-slate-200/50 py-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-12 max-w-7xl mx-auto font-medium text-sm Inter">
<div className="space-y-4">
<div className="text-lg font-bold text-slate-900">ArtisanHub</div>
<p className="text-slate-500 leading-relaxed">Connecting elite craftsmanship with those who appreciate true quality.</p>
</div>
<div className="flex flex-col gap-3">
<div className="text-slate-900 font-bold mb-1">Navigation</div>
<a className="text-slate-500 hover:text-violet-500 hover:underline decoration-violet-500/30 transition-all" href="#">Artisan Directory</a>
<a className="text-slate-500 hover:text-violet-500 hover:underline decoration-violet-500/30 transition-all" href="#">How it Works</a>
<a className="text-slate-500 hover:text-violet-500 hover:underline decoration-violet-500/30 transition-all" href="#">Support</a>
</div>
<div className="flex flex-col gap-3">
<div className="text-slate-900 font-bold mb-1">Legal</div>
<a className="text-slate-500 hover:text-violet-500 hover:underline decoration-violet-500/30 transition-all" href="#">Privacy Policy</a>
<a className="text-slate-500 hover:text-violet-500 hover:underline decoration-violet-500/30 transition-all" href="#">Terms of Service</a>
</div>
<div className="space-y-4">
<div className="text-slate-900 font-bold mb-1">Newsletter</div>
<div className="flex gap-2">
<input className="bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs focus:ring-1 focus:ring-violet-500 outline-none w-full" placeholder="Your email" type="email"/>
<button className="bg-slate-900 text-white p-2 rounded-lg active:scale-95 transition-transform">
<span className="material-symbols-outlined text-sm">send</span>
</button>
</div>
<p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Â© 2024 ArtisanHub. Crafted for Excellence.</p>
</div>
</div>
</footer>

    </>
  );
};

export default ConnexionArtisanOrangeEdition;

