import React, { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const calculateScrollProgress = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    
    // Calculate how far down the page the user has scrolled
    const scrolled = (scrollTop / (documentHeight - windowHeight)) * 100;
    setScrollProgress(scrolled);
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', calculateScrollProgress);
    
    // Initial calculation
    calculateScrollProgress();
    
    // Cleanup
    return () => window.removeEventListener('scroll', calculateScrollProgress);
  }, []);

  return (
    <div className="scroll-progress-container">
      <div 
        className="scroll-progress-bar" 
        style={{ height: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;