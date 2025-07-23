import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Product from './components/Product/Product';
import Features from './components/Features/Features';
import Stats from './components/Stats/Stats';
import About from './components/About/About';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './styles/global.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Product />
      <Features />
      {/* <Stats /> */}
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;