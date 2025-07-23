import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="contact-icon" />,
      title: "Call Us",
      content: "+91 96008 79282",
      link: "tel:+91 96008 79282"
    },
    {
      icon: <Mail className="contact-icon" />,
      title: "Email Us",
      content: "sales@meridianmachineworks.com",
      link: "mailto:sales@meridianmachineworks.com"
    },
    {
      icon: <MapPin className="contact-icon" />,
      title: "Visit Us",
      content: "Coimbatore - 641006",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">
            Ready to Transform Your Business?
          </h2>
          <p className="contact-subtitle">
            Contact us today for a personalized consultation and discover how our machine can boost your productivity
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-info-title">Get In Touch</h3>
            <div className="contact-info-list">
              {contactInfo.map((contact) => (
                <div key={contact.title} className="contact-info-item">
                  <div className="contact-icon-container">
                    {contact.icon}
                  </div>
                  <div className="contact-details">
                    <h4 className="contact-detail-title">{contact.title}</h4>
                    <a 
                      href={contact.link}
                      className="contact-detail-content"
                    >
                      {contact.content}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
                className="form-input"
              />
              <textarea
                name="message"
                rows={4}
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                required
              ></textarea>
              <button
                type="submit"
                className="form-submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;