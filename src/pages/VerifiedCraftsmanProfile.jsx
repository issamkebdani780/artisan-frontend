import React from 'react';

const VerifiedCraftsmanProfile = () => {
  return (
    <>
      
<div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
{/*  Navigation Bar  */}
<header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md px-4 lg:px-40 py-3">
<div className="flex items-center justify-between max-w-[1200px] mx-auto">
<div className="flex items-center gap-4">
<div className="text-primary">
<span className="material-symbols-outlined text-3xl">handyman</span>
</div>
<h2 className="text-lg font-bold leading-tight tracking-tight">Craftsman Profile &amp; Quote</h2>
</div>
<div className="flex gap-2">
<button className="flex items-center justify-center rounded-lg h-10 bg-slate-100 hover:bg-slate-200 px-3 transition-colors">
<span className="material-symbols-outlined text-xl">share</span>
</button>
<button className="flex items-center justify-center rounded-lg h-10 bg-slate-100 hover:bg-slate-200 px-3 transition-colors">
<span className="material-symbols-outlined text-xl">more_horiz</span>
</button>
</div>
</div>
</header>
<main className="flex-1 w-full max-w-[1200px] mx-auto px-4 lg:px-10 py-8">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
{/*  Left Column: Profile Card  */}
<div className="lg:col-span-1 space-y-6">
<div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
<div className="flex flex-col items-center text-center">
<div className="relative">
<div className="size-32 rounded-full border-4 border-primary/10 bg-center bg-cover" data-alt="Professional portrait of a master craftsman smiling" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuB7Onx2VlNDzaYkLaknPcHxGNOt-X-YQPY_2z2KjwWbu8QElMshYJX5iaL7LN_L_DLSxnmeYxQ4KkEfaIOV0sYRw_BA4whpKhKeuTS5vr7ArlBQGwypiO57BZVZLOWiK80CHaFDi9A12egKB-lQn0VHTRD712Y-myZ4WmQHxuS5EXlhiMfNDVhuRM_hwXDE2pZg3Q4kXyurA8Ocnvdo9J3Uahqb_ZvohCKlFgTInHLwcsYo-112tNe7gNCdQEyoeLU_wvQZAitqP34Z")'></div>
<div className="absolute bottom-1 right-1 bg-primary text-white rounded-full p-1 border-2 border-white">
<span className="material-symbols-outlined text-xs font-bold">verified</span>
</div>
</div>
<h1 className="mt-4 text-2xl font-bold text-slate-900">Robert Miller</h1>
<p className="text-primary font-semibold text-sm">Master Carpenter • 12 years exp.</p>
<div className="flex items-center gap-1 mt-2 text-yellow-500">
<span className="material-symbols-outlined fill-1">star</span>
<span className="font-bold text-slate-900">4.9</span>
<span className="text-slate-500 font-normal text-xs">(128 reviews)</span>
</div>
</div>
<div className="mt-6 space-y-3">
<div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50">
<span className="material-symbols-outlined text-primary">location_on</span>
<span className="text-sm">Portland, Oregon</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50">
<span className="material-symbols-outlined text-primary">verified_user</span>
<span className="text-sm">Licensed &amp; Insured</span>
</div>
</div>
<div className="mt-8">
<h3 className="font-bold text-sm uppercase tracking-wider text-slate-500 mb-3">Skills</h3>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">Custom Cabinetry</span>
<span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">Timber Framing</span>
<span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">Hardwood Flooring</span>
<span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">Restoration</span>
</div>
</div>
</div>
{/*  Stats  */}
<div className="grid grid-cols-2 gap-4">
<div className="bg-white p-4 rounded-xl border border-slate-200 text-center">
<p className="text-2xl font-bold text-primary">142</p>
<p className="text-xs text-slate-500 uppercase font-medium">Jobs Done</p>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-200 text-center">
<p className="text-2xl font-bold text-primary">98%</p>
<p className="text-xs text-slate-500 uppercase font-medium">On Time</p>
</div>
</div>
</div>
{/*  Right Column: Gallery, Quote & Reviews  */}
<div className="lg:col-span-2 space-y-8">
{/*  Portfolio Gallery  */}
<section>
<div className="flex items-center justify-between mb-4">
<h2 className="text-xl font-bold">Portfolio Gallery</h2>
<button className="text-primary text-sm font-semibold hover:underline">View All</button>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-3">
<div className="aspect-square rounded-lg bg-slate-200 bg-cover bg-center" data-alt="Modern minimalist kitchen with custom wooden cabinets" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDiDGB31VJ0R4CKhcovdErtjwWiQCO7cbowWv7mur028QW4anuqtpQIlzk2CBamu2IX6sdwJVAtBlewghof6BnW0zn2V0qP8gtwRQAXcJ0CLRGSQbMeZybWxqDKv68fdPmd_2GC7rzrW8bG4ZSpYFUIfy8OJpcf-sMHKTGctky3qy88Euokf_WNuamXuLfitMjeNU8Be0MInIzwyS8VcFksjs_-arxp4gmhGDWgtOUksyUMrRcdrpcwol8DTb3ksXjzzxsPOxw8TY7-")'></div>
<div className="aspect-square rounded-lg bg-slate-200 bg-cover bg-center" data-alt="Handcrafted solid oak dining table close up detail" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBYu0vKPiVg1lkAycZn3omxAZpXouiihnHTeXDYUwrgvw7sDxjhsSAr4pfmThVl41Lel13_4i9KwbG74DMUXLE4ioQPtWUa-FP7AmAXPdnBgB2sUTJhEcExLuWr2DMu6wJErSDvfAedAkbxeOZ-lDVkwPcU7cy1GgPXL7JKbeNB-0shgylJghM6JY0qrIZRaxbMI4VSwJt1ild0DPCtX0-GQMwL0oibsLZzfb8Zw1Z35Kf2WDRnuDBX5mYSirr1SVx3O45qxmkq563X")'></div>
<div className="aspect-square rounded-lg bg-slate-200 bg-cover bg-center" data-alt="Interior workshop with carpenter tools and wood planks" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDoJT3PkGZUMFYMe_XFxnZem-wJrMdfWtCab5DMrIOBX5LvWW_DcByKUWco-6UmiBbyAOLLupngTx12_VbW-_jdaDywwrEI9ArnxIB8j6zPqSN8fSgQkeKyFXxjwKGTRDmtuYVjmfdkXbAJrndZDO8rnpf5HnCgM2qy5tkjUwNG1f4i-m01RUbPdu00o04s3W-IqJWQTph_KYAdPj8Wk2RVqSwPzK6hD5ppbyj-VG6Ar3l27wSARZ0QaCNxovmENX_BqZHNf9xJwSCe")'></div>
</div>
</section>
{/*  Quote Form / Estimation Tool  */}
<section className="bg-primary/5 rounded-xl border border-primary/20 p-6">
<div className="flex items-center gap-3 mb-6">
<div className="bg-primary text-white rounded-lg p-2">
<span className="material-symbols-outlined">calculate</span>
</div>
<div>
<h2 className="text-xl font-bold">Request a Quote</h2>
<p className="text-sm text-slate-500">Get a professional estimation for your project</p>
</div>
</div>
<form className="space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-bold uppercase text-slate-500">Project Type</label>
<select className="w-full bg-white border-slate-200 rounded-lg text-sm focus:ring-primary focus:border-primary">
<option>Custom Furniture</option>
<option>Cabinet Installation</option>
<option>Framing &amp; Structure</option>
<option>Repair &amp; Restoration</option>
</select>
</div>
<div className="space-y-1">
<label className="text-xs font-bold uppercase text-slate-500">Timeline Preference</label>
<select className="w-full bg-white border-slate-200 rounded-lg text-sm focus:ring-primary focus:border-primary">
<option>ASAP (Within 1 week)</option>
<option>Standard (2-4 weeks)</option>
<option>Planning phase (1 month+)</option>
</select>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-bold uppercase text-slate-500">Project Description</label>
<textarea className="w-full bg-white border-slate-200 rounded-lg text-sm focus:ring-primary focus:border-primary" placeholder="Tell Robert about your project..." rows="3"></textarea>
</div>
<div className="bg-white p-4 rounded-lg border border-slate-200">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex items-center gap-4">
<div>
<p className="text-xs font-bold uppercase text-slate-400">Estimated Cost</p>
<p className="text-lg font-bold text-primary">$450 - $1,200</p>
</div>
<div className="h-8 w-px bg-slate-200"></div>
<div>
<p className="text-xs font-bold uppercase text-slate-400">Duration</p>
<p className="text-lg font-bold text-slate-700">3-5 Days</p>
</div>
</div>
<button className="bg-primary text-white px-6 py-2 rounded-lg font-bold text-sm hover:brightness-110 transition-all flex items-center justify-center gap-2" type="button">
<span>Submit Request</span>
<span className="material-symbols-outlined text-sm">send</span>
</button>
</div>
<p className="text-[10px] text-slate-400 mt-3 text-center md:text-left">*Final quote may vary after on-site inspection.</p>
</div>
</form>
</section>
{/*  Reviews Section  */}
<section>
<h2 className="text-xl font-bold mb-4">Client Reviews</h2>
<div className="space-y-4">
{/*  Review 1  */}
<div className="bg-white p-5 rounded-xl border border-slate-200">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-3">
<div className="size-10 rounded-full bg-slate-200 bg-cover bg-center" data-alt="Portrait of a female client" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAaKz0PtRz8FwCyULcnib-DvkAvB8kdBl2vAzl4mW3v8fBegLHkbsASwO3infy2v7bWsSTm4JCYCYznZ9KzHbW4Ya4sqqql9EbPthAr969MtzKy8xx3w5L02aC5PylXRb6X7bTQGg-FyoSMQLmUt5HqLzSQtWIQGw4p7KcAK8ifkT-Drh1vkc7aCyzuQrC5Sywyr8FhCZgG-i3kez7gnpNVag0pXdQkPZ8Z_UFs0exQLclojj73LhPAM6guY_yhnuElftJMFcKKW3Ky")'></div>
<div>
<p className="text-sm font-bold">Sarah Jenkins</p>
<p className="text-xs text-slate-500">2 weeks ago</p>
</div>
</div>
<div className="flex text-yellow-500">
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
</div>
</div>
<p className="text-sm text-slate-600 leading-relaxed">
                                Robert did an incredible job with our custom kitchen shelving. The attention to detail is remarkable and he finished the project ahead of schedule. Truly a master of his craft.
                            </p>
</div>
{/*  Review 2  */}
<div className="bg-white p-5 rounded-xl border border-slate-200">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-3">
<div className="size-10 rounded-full bg-slate-200 bg-cover bg-center" data-alt="Portrait of a male client" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCar6NFzNybZwCYn4KScWqRWd2261-ZXqhFAp07OvRkk67z1yemgO-7zd5KruOp_U_AFQoxtAq_s2-Xjs_NZDE7ARAXN_8OsdSOr6zaFim3KYWsLo8QqPYaNuNVekbxc8DybTkkkeFTAq_dE-U3Io_sRlRJzTT54-58yMk787OKUy4sVi5LDCuK0083he97pLbjEggfn12z-clkl6L7QHSQaikdC4pO0Jypp7oaUzr8rcnVlgGMLL9zTsmdecS8Q31eX5HBsOB5h1qr")'></div>
<div>
<p className="text-sm font-bold">David Chen</p>
<p className="text-xs text-slate-500">1 month ago</p>
</div>
</div>
<div className="flex text-yellow-500">
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm">star</span>
</div>
</div>
<p className="text-sm text-slate-600 leading-relaxed">
                                Great communication and fair pricing. The timber framing work he did for our deck is solid and looks beautiful. Highly recommend for any structural wood work.
                            </p>
</div>
</div>
<button className="w-full mt-4 py-3 border border-slate-200 rounded-lg text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors">
                        Load More Reviews
                    </button>
</section>
</div>
</div>
</main>
{/*  Footer Area  */}
<footer className="mt-auto border-t border-slate-200 bg-white py-10">
<div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary">handyman</span>
<p className="text-sm font-bold">Craftsman Profile &amp; Quote</p>
</div>
<div className="flex gap-6 text-sm text-slate-500">
<a className="hover:text-primary transition-colors" href="#">Safety</a>
<a className="hover:text-primary transition-colors" href="#">Support</a>
<a className="hover:text-primary transition-colors" href="#">Terms</a>
</div>
<p className="text-xs text-slate-400">Â© 2024 CraftsmanHub Pro. All rights reserved.</p>
</div>
</footer>
</div>

    </>
  );
};

export default VerifiedCraftsmanProfile;

