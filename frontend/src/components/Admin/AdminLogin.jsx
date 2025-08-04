import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, User, Lock } from 'lucide-react';
import heroImage from '../../assets/images/HomeBanner.jpg';
import logoImage from '../../assets/images/MeridianLogo.png'; // New image import
import './Admin.css';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/login', {
        username,
        password,
      }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      localStorage.setItem('token', response.data.access_token);
      navigate('/admin/dashboard');
    } catch (err) {
      setError('Invalid username or password');
    }
  };

  const handleForgotPassword = () => {
    // Placeholder for forgot password functionality
    alert('Forgot Password functionality is not implemented yet.');
  };

  return (
    <section className="admin-section">
      <div
        className="admin-background"
        style={{
          backgroundImage: `url(${heroImage})`,
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      />
      <div className="admin-content">
        <h1 className="admin-title">
          Admin Login
        </h1>
        <p className="admin-description">
          Securely access the admin dashboard to manage your coconut processing operations.
        </p>
        <div className="admin-form">
          <img src={logoImage} alt="Logo" className="admin-logo" />
          {error && <p className="admin-error">{error}</p>}
          <form onSubmit={handleLogin}>
            <div className="admin-input-container">
              <User className="admin-input-icon" />
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="admin-input"
                placeholder="Username"
                required
              />
            </div>
            <div className="admin-input-container">
              <Lock className="admin-input-icon" />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="admin-input"
                placeholder="Password"
                required
              />
            </div>
            <a
              href="#"
              className="admin-forgot-password"
              onClick={handleForgotPassword}
            >
              Forgot Password?
            </a>
            <button type="submit" className="admin-button">
              <span>Login</span>
              <ArrowRight className="button-icon" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AdminLogin;