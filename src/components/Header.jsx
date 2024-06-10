import React, { useState } from 'react';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeSwitch = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <header className="bg-blue-100 dark:bg-blue-900 shadow p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-900 dark:text-gray-200">
          Contact Book
        </div>
        <button 
          className="bg-blue-900 dark:bg-blue-200 text-white-800 dark:text-white-200 p-2 rounded-lg ml-4" 
          onClick={handleThemeSwitch}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </header>
  );
};

export default Header;
