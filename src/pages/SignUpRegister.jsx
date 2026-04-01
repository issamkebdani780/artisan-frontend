import React from 'react';

const SignUpRegister = () => {
  return (
    <>
      
<div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-6 md:px-20 py-4 bg-white dark:bg-background-dark">
<div className="flex items-center gap-4">
<div className="size-8 text-primary">
<svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
</svg>
</div>
<h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight tracking-tight">Platform</h2>
</div>
<div className="flex items-center gap-4">
<span className="hidden md:inline text-sm text-slate-500">Already have an account?</span>
<button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
<span className="truncate">Log In</span>
</button>
</div>
</header>
<main className="flex-1 flex justify-center py-10 px-4 md:px-0">
<div className="layout-content-container flex flex-col max-w-[640px] flex-1">
<div className="flex flex-col gap-3 mb-8">
<div className="flex gap-6 justify-between items-end">
<p className="text-primary text-sm font-semibold uppercase tracking-wider">Step 2 of 4</p>
<p className="text-slate-500 text-sm font-medium">Professional Verification</p>
</div>
<div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
<div className="h-full bg-primary" ></div>
</div>
</div>
<div className="flex flex-col gap-2 mb-8 text-center md:text-left">
<h1 className="text-slate-900 dark:text-slate-100 text-4xl font-black leading-tight tracking-tight">Create New Account</h1>
<p className="text-slate-500 text-lg">Join our community of experts and clients.</p>
</div>
<div className="bg-white dark:bg-slate-900/50 p-6 md:p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<div className="mb-8">
<label className="text-slate-900 dark:text-slate-100 text-lg font-bold block mb-4">I am signing up as a:</label>
<div className="flex h-12 w-full items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 p-1">
<label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-md px-2 has-[:checked]:bg-white dark:has-[:checked]:bg-slate-700 has-[:checked]:shadow-sm has-[:checked]:text-primary text-slate-500 text-sm font-bold transition-all">
<span className="truncate">Craftsman</span>
<input defaultChecked className="invisible w-0" name="user_type" type="radio" value="Craftsman"/>
</label>
<label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-md px-2 has-[:checked]:bg-white dark:has-[:checked]:bg-slate-700 has-[:checked]:shadow-sm has-[:checked]:text-primary text-slate-500 text-sm font-bold transition-all">
<span className="truncate">Client</span>
<input className="invisible w-0" name="user_type" type="radio" value="Client"/>
</label>
</div>
</div>
<div className="space-y-6">
<div className="grid grid-cols-1 gap-6">
<div>
<label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Professional Skillset</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">construction</span>
<input className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="e.g. Master Carpenter, Plumber" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Years of Experience</label>
<select className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all appearance-none">
<option>Select experience</option>
<option>1-3 years</option>
<option>3-5 years</option>
<option>5-10 years</option>
<option>10+ years</option>
</select>
</div>
</div>
<div>
<label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Verification Documents</label>
<div className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl p-8 text-center bg-slate-50 dark:bg-slate-900/30 hover:border-primary/50 transition-colors cursor-pointer group">
<div className="flex flex-col items-center">
<span className="material-symbols-outlined text-4xl text-slate-400 group-hover:text-primary transition-colors mb-2">cloud_upload</span>
<p className="text-sm font-bold text-slate-900 dark:text-slate-100">Click to upload or drag and drop</p>
<p className="text-xs text-slate-500 mt-1">PDF, PNG or JPG (max. 10MB)</p>
<p className="text-xs text-slate-400 italic mt-2">Upload your business license or professional certification</p>
</div>
</div>
</div>
<div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row gap-4">
<button className="w-full sm:w-1/3 py-3 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                    Back
                                </button>
<button className="w-full sm:w-2/3 py-3 rounded-lg bg-primary text-white font-bold hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2">
                                    Continue to Profile
                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
</div>
</div>
<div className="mt-8 flex items-start gap-3 p-4 bg-primary/5 rounded-lg border border-primary/10">
<span className="material-symbols-outlined text-primary">verified_user</span>
<div className="text-sm">
<p className="font-bold text-slate-900 dark:text-slate-100">Why do we need this?</p>
<p className="text-slate-500 leading-relaxed">Verification helps maintain our community's high standards. Your documents are stored securely and used only for internal identity and skill vetting.</p>
</div>
</div>
</div>
</main>
<footer className="py-10 border-t border-slate-200 dark:border-slate-800 text-center">
<p className="text-slate-400 text-xs">© 2024 Platform Inc. All rights reserved. • Privacy Policy • Terms of Service</p>
</footer>
</div>
</div>

    </>
  );
};

export default SignUpRegister;
