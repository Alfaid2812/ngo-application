import React from 'react'
import HeroSection from './HeroSection';
import Navbar from './Navbar';
import Footer from './Footer';
import Events from './Events';
import ContactUs from './ContactUs';


function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Events />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default Home