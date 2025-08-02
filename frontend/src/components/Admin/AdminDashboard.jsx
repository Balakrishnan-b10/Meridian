import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import heroImage from '../../assets/images/HomeBanner.jpg'; // Fixed typo: assests -> assets
import './Admin.css';

function AdminDashboard() {
  const [dashboardData, setDashboardData] = useState(null);
  const [error, setError] = useState('');
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const fetchDashboard = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/admin/login');
        return;
      }
      try {
        const response = await axios.get('http://localhost:8000/dashboard', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setDashboardData(response.data);
      } catch (err) {
        setError('Failed to load dashboard. Please log in again.');
        localStorage.removeItem('token');
        navigate('/admin/login');
      }
    };
    fetchDashboard();
  }, [navigate]);

  if (!dashboardData) {
    return <div className="text-center mt-10 text-white">Loading...</div>;
  }

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
          Admin <span className="admin-title-gradient">Dashboard</span>
        </h1>
        <p className="admin-description">
          Monitor and manage your coconut processing operations with real-time insights.
        </p>
        <div className="admin-dashboard-content">
          {error && <p className="admin-error">{error}</p>}
          <h2 className="text-xl font-semibold text-gray-800 mb-4">{dashboardData.message}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-medium text-gray-700">User Count</h3>
              <p className="text-2xl font-bold text-gray-900">{dashboardData.data.user_count}</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-medium text-gray-700">Status</h3>
              <p className="text-2xl font-bold text-gray-900">{dashboardData.data.status}</p>
            </div>
          </div>
          <button
            onClick={() => {
              localStorage.removeItem('token');
              navigate('/admin/login');
            }}
            className="admin-button mt-6"
          >
            <LogOut className="button-icon" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default AdminDashboard;