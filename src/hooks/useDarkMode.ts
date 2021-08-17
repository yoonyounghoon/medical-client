import React, { useState } from 'react';

function useDarkMode(): [string, () => void] {
  const LocalTheme = localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState(LocalTheme);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  };

  return [theme, toggleTheme];
}

export default useDarkMode;
