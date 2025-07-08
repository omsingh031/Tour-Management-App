// src/components/ThemeToggle.js
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './ThemeToggle.css';


const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button 
      className="theme-toggle-btn"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      <div className="toggle-container">
        <div className={`toggle-circle ${isDarkMode ? 'dark' : 'light'}`}>
          {isDarkMode ? '🌙' : '☀️'}
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;