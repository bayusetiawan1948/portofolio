import About from './components/layout/about';
import Hero from './components/layout/hero';
import Navbar from './components/layout/navbar';
import Portofolio from './components/layout/portofolio';
import React, { useState } from 'react';
function App() {
  return (
    <div className="font-poppins flex flex-col justify-center items-center bg-bases">
      <Navbar />
      <Hero />
      <About />
      <Portofolio />
    </div>
  );
}

export default App;
