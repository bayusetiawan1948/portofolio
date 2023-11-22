import About from './components/layout/about';
import Hero from './components/layout/hero';
import Navbar from './components/layout/navbar';
import Portofolio from './components/layout/portofolio';
import React, { useEffect, useState } from 'react';
function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showElement, setShowElement] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth <= 1280) {
      setShowElement(false);
    } else {
      setShowElement(true);
    }
  }, [windowWidth]);
  const iconWidth = showElement ? 28 : 32;
  return (
    <div className="font-poppins flex flex-col items-center gap-[200px] bg-bases">
      <Navbar iconWidth={iconWidth} isHidden={showElement} />
      <Hero isHidden={showElement} />
      <About />
      <Portofolio />
    </div>
  );
}

export default App;
