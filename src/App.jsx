import React from 'react';
import Analytics from './components/Analytics'; 
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';  

function App() {
  return (
    <div className='bg-[#F9FAFF]'>
      <Navbar />
      <Hero />
      <Analytics />  
      <Footer />
    </div>
  );
}

export default App;
