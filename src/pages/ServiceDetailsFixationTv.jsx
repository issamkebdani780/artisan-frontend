import React from 'react';

const ServiceDetailsFixationTv = () => {
  return (
    <>
      
{/*  Top Navigation Bar  */}
<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center gap-8">
<div className="flex items-center gap-2">
<div className="text-primary size-8">
<svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z" fill="currentColor"></path>
</svg>
</div>
<h1 className="text-xl font-bold tracking-tight text-slate-900">TaskIndigo</h1>
</div>
<div className="hidden md:flex items-center bg-slate-100 rounded-lg px-3 py-1.5 w-64">
<span className="material-symbols-outlined text-slate-500 text-sm">search</span>
<input className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-slate-500" placeholder="Search services..." type="text"/>
</div>
</div>
<nav className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium hover:text-primary transition-colors" href="#">Services</a>
<a className="text-sm font-medium hover:text-primary transition-colors" href="#">How it Works</a>
<a className="text-sm font-medium hover:text-primary transition-colors" href="#">Reviews</a>
<button className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all shadow-sm">Sign Up</button>
</nav>
</div>
</div>
</header>
<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
{/*  Breadcrumbs  */}
<nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
<a className="hover:text-primary transition-colors" href="#">Home</a>
<span className="material-symbols-outlined text-xs">chevron_right</span>
<a className="hover:text-primary transition-colors" href="#">Furniture Assembly</a>
<span className="material-symbols-outlined text-xs">chevron_right</span>
<span className="text-slate-900 font-medium">TV Wall Mounting</span>
</nav>
{/*  Hero Section  */}
<div className="relative rounded-xl overflow-hidden mb-8 h-80 flex items-end group">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Modern living room with a perfectly mounted large flat screen TV on a dark wall" >
</div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
<div className="relative p-8 w-full max-w-2xl">
<h2 className="text-white text-4xl md:text-5xl font-black leading-tight mb-3">Fixation TV &amp; Montage</h2>
<p className="text-slate-200 text-lg">Safe, secure, and perfectly leveled TV mounting starting from 35â‚¬/h.</p>
</div>
<div className="absolute bottom-8 right-8 hidden lg:block">
<button className="bg-white text-slate-900 px-8 py-3 rounded-lg font-bold shadow-xl hover:bg-primary hover:text-white transition-all">Book Service Now</button>
</div>
</div>
{/*  Quick Stats  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
<div className="bg-white p-6 rounded-xl border border-slate-200 flex items-center gap-4">
<div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-3xl">payments</span>
</div>
<div>
<p className="text-sm text-slate-500">Starting Price</p>
<p className="text-2xl font-bold">~35â‚¬/h</p>
</div>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 flex items-center gap-4">
<div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-3xl">verified_user</span>
</div>
<div>
<p className="text-sm text-slate-500">Safety Guarantee</p>
<p className="text-2xl font-bold">100% Secure</p>
</div>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 flex items-center gap-4">
<div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-3xl">task_alt</span>
</div>
<div>
<p className="text-sm text-slate-500">Completed Jobs</p>
<p className="text-2xl font-bold">12,000+</p>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
{/*  Left Column: Details  */}
<div className="lg:col-span-2 space-y-12">
<section>
<h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">info</span>
                        Service Details
                    </h3>
<div className="prose max-w-none text-slate-600 leading-relaxed">
<p className="mb-4">Our professional TV mounting service ensures your entertainment setup is safe, aesthetic, and functional. Whether you have a drywall, concrete, or brick wall, our experienced taskers bring the right tools to get the job done right.</p>
<ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
<li className="flex items-start gap-3 bg-white p-4 rounded-lg border border-slate-100">
<span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
<span>Wall assessment &amp; bracket advice</span>
</li>
<li className="flex items-start gap-3 bg-white p-4 rounded-lg border border-slate-100">
<span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
<span>Precision drilling &amp; secure mounting</span>
</li>
<li className="flex items-start gap-3 bg-white p-4 rounded-lg border border-slate-100">
<span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
<span>Wire management &amp; concealment</span>
</li>
<li className="flex items-start gap-3 bg-white p-4 rounded-lg border border-slate-100">
<span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
<span>Perfect leveling guarantee</span>
</li>
</ul>
</div>
</section>
{/*  Tasker List  */}
<section>
<div className="flex items-center justify-between mb-8">
<h3 className="text-2xl font-bold flex items-center gap-2">
<span className="material-symbols-outlined text-primary">engineering</span>
                            Available Taskers
                        </h3>
<a className="text-primary font-semibold text-sm hover:underline" href="#">View All Taskers</a>
</div>
<div className="space-y-4">
{/*  Tasker Card 1  */}
<div className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow">
<div className="flex-shrink-0">
<div className="size-20 rounded-full bg-cover bg-center border-2 border-primary/20" data-alt="Professional male handyman smiling profile photo" >
</div>
<div className="mt-2 text-center">
<div className="flex items-center justify-center text-amber-500 gap-1">
<span className="material-symbols-outlined text-sm">star</span>
<span className="text-sm font-bold">4.9</span>
</div>
<span className="text-xs text-slate-500">(142 reviews)</span>
</div>
</div>
<div className="flex-grow">
<div className="flex justify-between items-start mb-2">
<div>
<h4 className="text-lg font-bold">Marco L.</h4>
<p className="text-sm text-slate-500">Drilling &amp; Mounting Specialist</p>
</div>
<div className="text-right">
<p className="text-lg font-black text-primary">38â‚¬/h</p>
</div>
</div>
<p className="text-sm text-slate-600 mb-4 italic">"Expert in all types of walls (drywall, stone, brick). I bring my own high-powered drills and a level for a perfect finish."</p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-slate-100 text-[10px] uppercase font-bold tracking-wider rounded">Heavy-duty Mounting</span>
<span className="px-2 py-1 bg-slate-100 text-[10px] uppercase font-bold tracking-wider rounded">Cable Management</span>
<span className="px-2 py-1 bg-slate-100 text-[10px] uppercase font-bold tracking-wider rounded">VESA Expert</span>
</div>
</div>
<div className="flex items-center justify-center">
<button className="w-full md:w-auto bg-slate-100 hover:bg-primary hover:text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all">Select Tasker</button>
</div>
</div>
{/*  Tasker Card 2  */}
<div className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow">
<div className="flex-shrink-0">
<div className="size-20 rounded-full bg-cover bg-center border-2 border-primary/20" data-alt="Professional handyman in uniform profile photo" >
</div>
<div className="mt-2 text-center">
<div className="flex items-center justify-center text-amber-500 gap-1">
<span className="material-symbols-outlined text-sm">star</span>
<span className="text-sm font-bold">5.0</span>
</div>
<span className="text-xs text-slate-500">(89 reviews)</span>
</div>
</div>
<div className="flex-grow">
<div className="flex justify-between items-start mb-2">
<div>
<h4 className="text-lg font-bold">Sophie G.</h4>
<p className="text-sm text-slate-500">TV &amp; Home Audio Setup</p>
</div>
<div className="text-right">
<p className="text-lg font-black text-primary">35â‚¬/h</p>
</div>
</div>
<p className="text-sm text-slate-600 mb-4 italic">"I specialize in clean, minimal setups. Whether it's a 32" or 85" screen, I ensure total safety and a professional look."</p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-slate-100 text-[10px] uppercase font-bold tracking-wider rounded">TV Calibration</span>
<span className="px-2 py-1 bg-slate-100 text-[10px] uppercase font-bold tracking-wider rounded">Hidden Wires</span>
<span className="px-2 py-1 bg-slate-100 text-[10px] uppercase font-bold tracking-wider rounded">Soundbar Sync</span>
</div>
</div>
<div className="flex items-center justify-center">
<button className="w-full md:w-auto bg-slate-100 hover:bg-primary hover:text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all">Select Tasker</button>
</div>
</div>
</div>
</section>
</div>
{/*  Right Column: Safety & Booking Sidebar  */}
<div className="space-y-6">
<div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
<h4 className="text-lg font-bold mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">security</span>
                        Safety &amp; Trust
                    </h4>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary text-sm mt-1">shield_with_heart</span>
<div className="text-sm">
<p className="font-bold">Insurance Included</p>
<p className="text-slate-500">Every job is covered by our 1Mâ‚¬ safety guarantee.</p>
</div>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary text-sm mt-1">verified</span>
<div className="text-sm">
<p className="font-bold">Verified Taskers</p>
<p className="text-slate-500">Background checked and skill-tested professionals.</p>
</div>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary text-sm mt-1">history_edu</span>
<div className="text-sm">
<p className="font-bold">No-Sag Guarantee</p>
<p className="text-slate-500">We fix any mounting issues within 90 days for free.</p>
</div>
</li>
</ul>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<h4 className="text-lg font-bold mb-6">Need Help Finding a Mount?</h4>
<p className="text-sm text-slate-500 mb-6">Tell us your TV model and wall type, and we'll recommend the best bracket for your space.</p>
<button className="w-full bg-slate-100 py-3 rounded-lg font-bold hover:bg-slate-200 transition-colors mb-3">Check Compatibility</button>
<button className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">Book Instantly</button>
</div>
{/*  Small FAQ  */}
<div className="px-2">
<h4 className="font-bold text-sm uppercase tracking-wider text-slate-400 mb-4">Common Questions</h4>
<div className="space-y-3">
<details className="group">
<summary className="list-none flex justify-between items-center cursor-pointer font-medium text-sm hover:text-primary transition-colors">
                                Do you provide the bracket?
                                <span className="material-symbols-outlined text-sm group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<p className="text-xs text-slate-500 mt-2">Taskers can purchase one for you for an extra fee, or you can provide your own. Please specify in the notes.</p>
</details>
<details className="group">
<summary className="list-none flex justify-between items-center cursor-pointer font-medium text-sm hover:text-primary transition-colors">
                                How long does it take?
                                <span className="material-symbols-outlined text-sm group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<p className="text-xs text-slate-500 mt-2">Standard mounting usually takes 1 to 1.5 hours, depending on wall type and cable concealment needs.</p>
</details>
</div>
</div>
</div>
</div>
</main>
<footer className="bg-white border-t border-slate-200 py-12 mt-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2">
<div className="flex items-center gap-2 mb-4 text-primary">
<span className="material-symbols-outlined text-3xl">task_alt</span>
<span className="text-xl font-bold text-slate-900">TaskIndigo</span>
</div>
<p className="text-slate-500 max-w-sm">The leading marketplace for professional mounting, assembly, and home maintenance services across Europe.</p>
</div>
<div>
<h5 className="font-bold mb-4">Support</h5>
<ul className="space-y-2 text-slate-500 text-sm">
<li><a className="hover:text-primary" href="#">Help Center</a></li>
<li><a className="hover:text-primary" href="#">Safety Policy</a></li>
<li><a className="hover:text-primary" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h5 className="font-bold mb-4">Company</h5>
<ul className="space-y-2 text-slate-500 text-sm">
<li><a className="hover:text-primary" href="#">About Us</a></li>
<li><a className="hover:text-primary" href="#">Careers</a></li>
<li><a className="hover:text-primary" href="#">Terms &amp; Privacy</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between gap-4">
<p className="text-slate-400 text-xs">© 2024 TaskIndigo Services. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-primary" href="#"><span className="material-symbols-outlined text-lg">language</span></a>
<a className="text-slate-400 hover:text-primary" href="#"><span className="material-symbols-outlined text-lg">public</span></a>
</div>
</div>
</div>
</footer>

    </>
  );
};

export default ServiceDetailsFixationTv;

