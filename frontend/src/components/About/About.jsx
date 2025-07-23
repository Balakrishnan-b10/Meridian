import React from 'react';
import './About.css';

const About = () => {
  const achievements = [
    { title: "R&D Investment", value: "25%" },
    { title: "Quality Assurance", value: "ISO 9001" },
    // { title: "Global Presence", value: "25+ Countries" },
    { title: "Customer Support", value: "24/7" }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="about-title">
              Meridian <span className="title-highlight">Machines</span> Since 2018
            </h2>
            <p className="about-description">
              Meridian Machine Industries has been at the forefront of coconut processing technology for over 7 years. 
              Our commitment to innovation and quality has made us the trusted choice for businesses worldwide.
            </p>
            <p className="about-description">
              We combine traditional craftsmanship with modern engineering to create machines that not only 
              meet today's demands but anticipate tomorrow's challenges. Our state-of-the-art manufacturing 
              facility ensures every machine meets the highest standards of quality and performance.
            </p>
            
            <div className="achievements-grid">
              {achievements.map((item) => (
                <div key={item.title} className="achievement-card">
                  <div className="achievement-value">{item.value}</div>
                  <div className="achievement-title">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="about-image-section">
            <div className="about-image-container">
              <img
                src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Manufacturing facility"
                className="about-image"
              />
              <div className="about-badge">
                <div className="badge-number">7+</div>
                <div className="badge-text">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;