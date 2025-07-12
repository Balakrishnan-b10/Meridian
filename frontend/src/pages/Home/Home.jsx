import React from 'react';
import '../../styles/Home/Home.scss';

function Home() {
  return (
    <section className="home">
      {/* Section 1: Welcome and About */}
      <div className="home-section welcome-section">
        <h2>Welcome to Meridian Machine Works</h2>
        <img src="https://coconutmachine.com/wp-content/uploads/2019/11/Young-Coconut-Trimming-Machine-COM90YD3-scaled.jpg" alt="Welcome" />
        <p>
          Discover Meridian Machine Works, your trusted partner in manufacturing innovative solutions. 
          Established with a commitment to quality, we specialize in creating high-performance machines 
          tailored to meet diverse industrial needs.
        </p>
      </div>

      {/* Section 2: Services and Offerings */}
      <div className="home-section services-section">
        <h2>Our Services</h2>
        <img src="https://coconutmachine.com/wp-content/uploads/2019/11/Laser-Cutting-Machine-COM690-2-scaled.jpg" alt="Services" />
        <p>
          Explore our wide range of services, including the design and production of coconut machines, 
          agri machines, industrial special-purpose machines, and control panel installations. 
          Our expertise ensures reliability and efficiency for every project.
        </p>
      </div>
    </section>
  );
}

export default Home;