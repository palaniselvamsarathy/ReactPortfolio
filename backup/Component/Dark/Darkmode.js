import React, { useState, useEffect } from 'react';

const Darkmode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.style.backgroundColor = 'black';
      body.style.color = 'white';
    } else {
      body.style.backgroundColor = 'white';
      body.style.color = 'black';
    }
  }, [darkMode]);

  return (
    <>
      <button
        className={`btn ${darkMode ? 'btn-light' : 'btn-dark'}`}
        onClick={toggleDarkMode}
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </>
  );
};

export default Darkmode;
