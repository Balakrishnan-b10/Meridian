import React from 'react';
import { CheckCircle, Zap, Shield, Award } from 'lucide-react';
import './Product.css';

const Product = () => {
  const product = {
    name: "C-MATIK",
    image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800",
    capacity: "500 coconuts/Hour*",
    // power: "1 hp three phase / 2 hp single phase",
    price: "Contact for Pricing",
    features: [
      "Hydraulic Powered",
      "Advanced Control",
      "Durable Build",
      "Flexible Design",
      "Versatile Husking",
      "Shell Protection",
      "Clean Husk Output",
      "Value Addition"
    ],
    specifications: [
      { label: "Processing Capacity", value: "500 Coconuts / Hour*" },
      { label: "Motor Power", value: "1 hp three phase / 2 hp single phase" },
      { label: "Dehusking cost", value: "0.01 / per nut" },
      { label: "Weight", value: "200 kg" },
      { label: "Power Supply", value: "0.75 unit per hour / 1.5 unit per hour" },
      { label: "Material", value: "Mild steel and EN8" }
    ]
  };

  return (
    <section id="product" className="product-section">
      <div className="product-container">
        <div className="product-header">
          <h2 className="product-title">
            Our Premium <span className="title-highlight">Coconut Dehusking Machine</span>
          </h2>
          <p className="product-subtitle">
            State-of-the-art technology designed for maximum efficiency and reliability in coconut husk removal
          </p>
        </div>

        <div className="product-content">
          <div className="product-image-section">
            <div className="product-image-container">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <div className="product-badge">
                <Award className="badge-icon" />
                <span>Industry Leading</span>
              </div>
            </div>
          </div>
          
          <div className="product-details">
            <h3 className="product-name">{product.name}</h3>
            <div className="product-specs">
              <div className="spec-item">
                <Zap className="spec-icon" />
                <span className="spec-value">{product.capacity}</span>
              </div>
              {/* <div className="spec-item">
                <Shield className="spec-icon" />
                <span className="spec-value">{product.power}</span>
              </div> */}
            </div>
            
            <div className="product-features">
              <h4 className="features-title">Key Features</h4>
              <ul className="features-list">
                {product.features.map((feature, index) => (
                  <li key={index} className="feature-item">
                    <CheckCircle className="feature-icon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="product-specifications">
              <h4 className="specifications-title">Technical Specifications</h4>
              <div className="specifications-grid">
                {product.specifications.map((spec, index) => (
                  <div key={index} className="specification-item">
                    <span className="spec-label">{spec.label}</span>
                    <span className="spec-detail">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="product-actions">
              <div className="product-price">{product.price}</div>
              <button className="product-cta">
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;