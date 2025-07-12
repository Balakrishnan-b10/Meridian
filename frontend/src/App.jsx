import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import AboutUs from './pages/About/About';
import Machines from './pages/Machines/Machines';
import Products from './pages/Products/Products';
import ContactUs from './pages/ContactUs/ContactUs';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/machines" element={<Machines />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;