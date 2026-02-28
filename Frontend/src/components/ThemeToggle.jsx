import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
// import { Button } from '@/components/ui/button';

function ThemeToggle() {
  const [theme, setTheme] = useState('light'); 

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    // <Link to='/toggle'>
      <button 
        onClick={toggleTheme}
        className="p-2 rounded-full transition-colors duration-300 hover:bg-violet-300 dark:hover:bg-slate-800"
      >
        {theme === 'dark' ? (
          <Sun className="h-5 w-5 text-yellow-400 transition-transform hover:rotate-90" />
        ) : (
          <Moon className="h-5 w-5 text-slate-700 transition-transform hover:-rotate-12" />
        )}
      </button>
    // </Link>
  );
}

export default ThemeToggle;