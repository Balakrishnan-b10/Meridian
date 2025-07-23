import React from 'react';
import { Award, MapPin, Users, Star } from 'lucide-react';
import './Stats.css';

const Stats = () => {
  const stats = [
    { 
      number: "500+", 
      label: "Machines Sold", 
      icon: <Award className="stat-icon" /> 
    },
    { 
      number: "25+", 
      label: "Countries", 
      icon: <MapPin className="stat-icon" /> 
    },
    { 
      number: "1000+", 
      label: "Happy Customers", 
      icon: <Users className="stat-icon" /> 
    },
    { 
      number: "15+", 
      label: "Years Experience", 
      icon: <Star className="stat-icon" /> 
    }
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className="stat-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="stat-icon-container">
                {stat.icon}
              </div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;