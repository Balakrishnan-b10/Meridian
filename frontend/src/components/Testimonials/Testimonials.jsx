import React from 'react';
import { Star } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Kerala Coconut Industries",
      text: "This machine revolutionized our processing capabilities. We've increased productivity by 300% since installation and the ROI was achieved within 8 months.",
      rating: 5,
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Maria Santos",
      company: "Philippine Coir Exports",
      text: "Outstanding quality and reliability. The automated features have significantly reduced our labor costs while maintaining consistent output quality.",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Ahmed Hassan",
      company: "Gulf Agricultural Solutions",
      text: "Best investment we've made for our coconut processing facility. The machine's efficiency and durability exceeded our expectations completely.",
      rating: 5,
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">
            What Our <span className="title-highlight">Customers Say</span>
          </h2>
          <p className="testimonials-subtitle">
            Don't just take our word for it - hear from businesses that have transformed their operations with our machine
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="testimonial-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="star-icon" />
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="author-image"
                />
                <div className="author-info">
                  <div className="author-name">{testimonial.name}</div>
                  <div className="author-company">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;