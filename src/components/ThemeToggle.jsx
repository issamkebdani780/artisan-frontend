import React, { useState, useEffect } from 'react';

const ThemeToggle = ({ className = "" }) => {
  const [theme, setTheme] = useState(localStorage.getItem('admin-theme') || 'dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('admin-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  return (
    <button 
      onClick={toggleTheme}
      className={`relative inline-flex h-10 w-20 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:ring-offset-2 bg-slate-100 dark:bg-slate-800 border-2 border-slate-200 dark:border-white/5 shadow-inner scale-90 group ${className}`}
      title={theme === 'light' ? 'Passer au mode sombre' : 'Passer au mode clair'}
    >
      <span className="sr-only">Toggle theme</span>
      
      {/* Label and Icons */}
      <div className="absolute inset-0 flex items-center justify-between px-2.5 pointer-events-none">
        <span className={`material-symbols-outlined text-sm transition-opacity duration-300 ${theme === 'dark' ? 'text-slate-500 opacity-60' : 'text-slate-400 opacity-0'}`} style={{ fontVariationSettings: "'FILL' 1" }}>dark_mode</span>
        <span className={`material-symbols-outlined text-sm transition-opacity duration-300 ${theme === 'light' ? 'text-secondary opacity-60' : 'text-slate-500 opacity-0'}`} style={{ fontVariationSettings: "'FILL' 1" }}>light_mode</span>
      </div>

      {/* Sliding Knob */}
      <span
        className={`
          flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-slate-700 shadow-lg ring-0 transition-transform duration-300 ease-spring
          ${theme === 'dark' ? 'translate-x-10' : 'translate-x-0.5'}
        `}
      >
        <span className="material-symbols-outlined text-lg text-secondary dark:text-white" style={{ fontVariationSettings: "'FILL' 1" }}>
          {theme === 'light' ? 'light_mode' : 'dark_mode'}
        </span>
      </span>
    </button>
  );
};

export default ThemeToggle;
