import React from 'react';
import Header from '../components/header/header';
import About from '../components/About/About';
import AboutUs from '../components/About-us/About-us';
import Features from '../components/Features/Features';
import Pricing from '../components/Pricing/Pricing';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

function Home() {
  return (
    <div className="App">
    <Header />  
    <About />
    <AboutUs />
    <Features />
    <Pricing />
    <Contact />
    <Footer/>
    </div>
  )
}

export default Home;