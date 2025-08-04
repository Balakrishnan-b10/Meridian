import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Product from './components/Product/Product';
import Features from './components/Features/Features';
import About from './components/About/About';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import AdminLogin from './components/Admin/AdminLogin'; // Fixed typo: Adminlogin -> AdminLogin
import AdminDashboard from './components/Admin/AdminDashboard';
import './styles/global.css';

function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      {children}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Hero />
              <Product />
              <Features />
              <About />
              <Testimonials />
              <Contact />
            </MainLayout>
          }
        />
        <Route
          path="/admin"
          element={
            <AdminLayout>
              <AdminLogin />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/dashboard"
          element={
            <AdminLayout>
              <AdminDashboard />
            </AdminLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;