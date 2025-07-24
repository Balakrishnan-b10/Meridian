// import React from 'react';
// import { Zap, Shield, Recycle, Wrench, Clock, TrendingUp } from 'lucide-react';
// import './Features.css';

// const Features = () => {
//   const features = [
//     {
//       icon: <Zap className="feature-icon" />,
//       title: "High-Speed Processing",
//       description: "Process up to 1000 coconuts per hour with our advanced automation technology and precision engineering"
//     },
//     {
//       icon: <Shield className="feature-icon" />,
//       title: "Durable Construction",
//       description: "Built with industrial-grade stainless steel SS 304 for years of reliable operation in harsh conditions"
//     },
//     {
//       icon: <Recycle className="feature-icon" />,
//       title: "Eco-Friendly Design",
//       description: "Zero waste process that converts husks into valuable coir fiber, maximizing resource utilization"
//     },
//     {
//       icon: <Wrench className="feature-icon" />,
//       title: "Easy Maintenance",
//       description: "Minimal maintenance required with self-cleaning mechanisms and accessible service points"
//     },
//     {
//       icon: <Clock className="feature-icon" />,
//       title: "24/7 Operation",
//       description: "Designed for continuous operation with robust components and automated monitoring systems"
//     },
//     {
//       icon: <TrendingUp className="feature-icon" />,
//       title: "ROI Optimization",
//       description: "Maximize your return on investment with increased productivity and reduced operational costs"
//     }
//   ];

//   return (
//     <section id="features" className="features-section">
//       <div className="features-container">
//         <div className="features-header">
//           <h2 className="features-title">
//             Why Choose <span className="title-highlight">CocoTech?</span>
//           </h2>
//           <p className="features-subtitle">
//             Our machine is engineered with cutting-edge technology to deliver unmatched performance and reliability
//           </p>
//         </div>

//         <div className="features-grid">
//           {features.map((feature, index) => (
//             <div
//               key={feature.title}
//               className="feature-card"
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               <div className="feature-icon-container">
//                 {feature.icon}
//               </div>
//               <h3 className="feature-title">{feature.title}</h3>
//               <p className="feature-description">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;








import React from 'react';
import { Zap, Shield, Recycle, Wrench, Clock, TrendingUp } from 'lucide-react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: <Zap />,
      title: "High-Speed Processing",
      description: "Process up to 500 coconuts per hour with our advanced automation technology and precision engineering"
    },
    {
      icon: <Shield />,
      title: "Durable Construction",
      description: "Built with industrial-grade stainless steel SS 304 for years of reliable operation in harsh conditions"
    },
    {
      icon: <Recycle />,
      title: "Eco-Friendly Design",
      description: "Zero waste process that converts husks into valuable coir fiber, maximizing resource utilization"
    },
    {
      icon: <Wrench />,
      title: "Easy Maintenance",
      description: "Minimal maintenance required with self-cleaning mechanisms and accessible service points"
    },
    {
      icon: <Clock />,
      title: "24/7 Operation",
      description: "Designed for continuous operation with robust components and automated monitoring systems"
    },
  
  ];

  return (
    <section id="features" className="our-services">
      <h2 className="section-title">Why Choose <span className="highlight">Meridian?</span></h2>
      <p className="sub-text">
        Our machine is engineered with cutting-edge technology to deliver unmatched performance and reliability.
      </p>

      <div className="advantage-grid">
        {features.map((feature, index) => (
          <div className="advantage-card" key={index}>
            <div className="icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
