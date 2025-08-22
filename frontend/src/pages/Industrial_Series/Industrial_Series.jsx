

// import React, { useEffect, useState } from 'react';
// import './Industrial_Series.css';
// import { motion } from 'framer-motion';

// import thermo1 from '../../assets/images/Thermobond_Machine/Thermobond_Machine_1.jpg';
// import thermo2 from '../../assets/images/Thermobond_Machine/Thermobond_Machine_2.jpg';

// import mfc1 from '../../assets/images/MFC_Machines/mfc_1.jpg';
// import mfc2 from '../../assets/images/MFC_Machines/mfc_2.jpg';
// import mfc3 from '../../assets/images/MFC_Machines/mfc_3.jpg';
// import mfc4 from '../../assets/images/MFC_Machines/mfc_4.jpg';

// import fw1 from '../../assets/images/Fabric_winding/fabric_1.jpg';
// import fw2 from '../../assets/images/Fabric_winding/fabric_2.jpg';
// import fw3 from '../../assets/images/Fabric_winding/fabric_3.jpg';


// import fww1 from '../../assets/images/Fusion_Welding/fww_1.jpg';
// import fww2 from '../../assets/images/Fusion_Welding/fww_2.jpg';
// import fww3 from '../../assets/images/Fusion_Welding/fww_3.jpg';

// import fe1 from '../../assets/images/Fabric_embossing/fe_1.jpg';
// import fe2 from '../../assets/images/Fabric_embossing/fe_2.jpg';
// import fe3 from '../../assets/images/Fabric_embossing/fe_3.jpg';

// import wf1 from '../../assets/images/Water_filling/wf_1.jpg';
// import wf2 from '../../assets/images/Water_filling/wf_2.jpg';

// import cm1 from '../../assets/images/Carton_machine/cm_1.jpg';
// import cm2 from '../../assets/images/Carton_machine/cm_2.jpg';
// import cm3 from '../../assets/images/Carton_machine/cm_3.jpg';
// import cm4 from '../../assets/images/Carton_machine/cm_4.jpg';


// const machines = [
//     {
//         id: 1,
//         name: 'Thermobond Machine',
//         description: 'A high-performance machine designed for durability and energy efficiency.',
//         images: [thermo1, thermo2, thermo1],
//         features: [
//             'High-efficiency thermal bonding',
//             'Low maintenance cost',
//             'Energy-efficient design'
//         ]
//     },
//     {
//         id: 2,
//         name: 'Mirodot Fabric Coating Machine',
//         description: 'Precision cutting with smart sensors and safety features.',
//         images: [mfc1, mfc2, mfc3, mfc4],
//         features: [
//             'Laser-guided precision',
//             'Auto-shutdown safety',
//             'Compact and powerful'
//         ]
//     },
//     {
//         id: 3,
//         name: 'Fabric Winding Machine',
//         description: 'Rolls materials efficiently with uniform pressure distribution.',
//         images: [fw1, fw2, fw3],
//         features: [
//             'Uniform pressure rolling',
//             'Touchscreen controls',
//             'Heavy-duty steel body'
//         ]
//     },
//     {
//         id: 4,
//         name: 'Fusion Welding Machine',
//         description: 'Fast and reliable packing system with minimal waste.',
//         images: [fww1,fww2,fww3],
//         features: [
//             'Low packaging waste',
//             'Easy material feed',
//             'Integrated print module'
//         ]
//     },
//     {
//         id: 5,
//         name: 'Fabric Embossing Machines',
//         description: 'Seals products securely using high-temperature resistant jaws.',
//         images: [fe1,fe2,fe3],
//         features: [
//             'Heat-resistant sealing jaws',
//             'Quick cooling system',
//             'Adjustable seal pressure'
//         ]
//     },
//     {
//         id: 6,
//         name: 'Water Filling Machine',
//         description: 'Conveyor system with visual inspection and reject handling.',
//         images: [wf1,wf2],
//         features: [
//             'Camera-based inspection',
//             'Automatic rejection',
//             'Customizable speed settings'
//         ]
//     },
//     {
//         id: 7,
//         name: 'Carton Machine',
//         description: 'Conveyor system with visual inspection and reject handling.',
//         images: [cm1,cm2,cm3,cm4],
//         features: [
//             'Camera-based inspection',
//             'Automatic rejection',
//             'Customizable speed settings'
//         ]
//     }
// ];

// const Carousel = ({ images }) => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [paused, setPaused] = useState(false);

//     useEffect(() => {
//         if (paused) return;

//         const interval = setInterval(() => {
//             setCurrentIndex((prev) => (prev + 1) % images.length);
//         }, 3000);

//         return () => clearInterval(interval);
//     }, [paused, images.length]);

//     return (
//         <div
//             className="carousel-container"
//             onMouseEnter={() => setPaused(true)}
//             onMouseLeave={() => setPaused(false)}
//         >
//             <motion.img
//                 src={images[currentIndex]}
//                 alt={`Slide ${currentIndex}`}
//                 className="carousel-image"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//             />
//             <div className="carousel-buttons">
//                 <button onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}>&lt;</button>
//                 <button onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}>&gt;</button>
//             </div>
//         </div>
//     );
// };

// const Industrial_Series = () => {
//     return (
//         <div className="industrial-showcase">
//             {/* Only intro inside card */}
//             <motion.div
//                 className="intro-card"
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//             >
//                 <h1>Industrial Series</h1>
//                 <p>
//                     The Industrial Series is a collection of high-performance machines crafted for the demands of modern manufacturing.
//                     Each unit is designed with precision engineering, energy efficiency, and operator safety in mind.
//                     From cutting to sealing and inspection, our machines deliver consistent, reliable output with minimal downtime.
//                     Discover how automation and smart features can elevate your industrial workflow.
//                 </p>
//             </motion.div>

//             <h2 className="product-heading">Our Products</h2>

//             <motion.div
//                 className="grid-container"
//                 initial="hidden"
//                 animate="visible"
//                 variants={{
//                     hidden: { opacity: 0 },
//                     visible: {
//                         opacity: 1,
//                         transition: {
//                             staggerChildren: 0.2
//                         }
//                     }
//                 }}
//             >
//                 {machines.map((machine) => (
//                     <motion.div
//                         key={machine.id}
//                         className="machine-card"
//                         variants={{
//                             hidden: { y: 50, opacity: 0 },
//                             visible: { y: 0, opacity: 1 }
//                         }}
//                     >
//                         <Carousel images={machine.images} />
//                         <div className="machine-info">
//                             <h2>{machine.name}</h2>
//                             <p>{machine.description}</p>
//                             <ul className="feature-list">
//                                 {machine.features.map((feature, i) => (
//                                     <li key={i}>✔ {feature}</li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </motion.div>
//                 ))}
//             </motion.div>
//         </div>
//     );
// };

// export default Industrial_Series;








import React, { useEffect, useState } from 'react';
import './Industrial_Series.css';
import { motion } from 'framer-motion';

// Images
import thermo1 from '../../assets/images/Thermobond_Machine/Thermobond_Machine_1.jpg';
import thermo2 from '../../assets/images/Thermobond_Machine/Thermobond_Machine_2.jpg';

import mfc1 from '../../assets/images/MFC_Machines/mfc_1.jpg';
import mfc2 from '../../assets/images/MFC_Machines/mfc_2.jpg';
import mfc3 from '../../assets/images/MFC_Machines/mfc_3.jpg';
import mfc4 from '../../assets/images/MFC_Machines/mfc_4.jpg';

import fw1 from '../../assets/images/Fabric_winding/fabric_1.jpg';
import fw2 from '../../assets/images/Fabric_winding/fabric_2.jpg';
import fw3 from '../../assets/images/Fabric_winding/fabric_3.jpg';

import fww1 from '../../assets/images/Fusion_Welding/fww_1.jpg';
import fww2 from '../../assets/images/Fusion_Welding/fww_2.jpg';
import fww3 from '../../assets/images/Fusion_Welding/fww_3.jpg';

import fe1 from '../../assets/images/Fabric_embossing/fe_1.jpg';
import fe2 from '../../assets/images/Fabric_embossing/fe_2.jpg';
import fe3 from '../../assets/images/Fabric_embossing/fe_3.jpg';

import wf1 from '../../assets/images/Water_filling/wf_1.jpg';
import wf2 from '../../assets/images/Water_filling/wf_2.jpg';

import cm1 from '../../assets/images/Carton_machine/cm_1.jpg';
import cm2 from '../../assets/images/Carton_machine/cm_2.jpg';
import cm3 from '../../assets/images/Carton_machine/cm_3.jpg';
import cm4 from '../../assets/images/Carton_machine/cm_4.jpg';

const machines = [
    {
        id: 1,
        name: 'Thermobond Machine',
        description: 'At Leeds Electric, we specialize in the installation and commissioning of imported Thermobond machines from China, ensuring seamless integration into your production line. With our expertise in industrial automation and control panel solutions, we guarantee a smooth setup that minimizes downtime and maximizes machine efficiency.',
        images: [thermo1, thermo2, thermo1],
        features: [
            'Pre-Installation Planning',
            'Machine Installation',
            'Commissioning & Testing',
            'Training & Handover',
        ]
    },
    {
        id: 2,
        name: 'Mirodot Fabric Coating Machine',
        description: 'We provide end-to-end installation and commissioning of double dot & microdot interlining coating lines imported from China—covering mechanical erection, electrical & control integration, safety compliance, trials, and operator training. Our goal is a stable, production-ready line that meets your add-on GSM, dot uniformity, and bond strength targets from day one.',
        images: [mfc1, mfc2, mfc3, mfc4],
        features: [
            'Pre-Installation Planning',
            'Machine Installation',
            'Commissioning & Testing',
            'Training & Handover',
        ]
    },
    {
        id: 3,
        name: 'Fabric Winding Machine',
        description: 'Fabric Winding Machines provide smooth and uniform fabric rolls with precise tension control. Designed for high-speed operation, they boost productivity while reducing handling errors. Their versatility makes them ideal for a wide range of fabrics and roll sizes.',
        images: [fw1, fw2, fw3],
        features: [
            'Smooth and uniform fabric winding with adjustable tension',
            'High-speed operation for increased productivity',
            'Suitable for different types of fabrics and roll sizes'
        ]
    },
    {
        id: 4,
        name: 'Fusion Welding Machine',
        description: 'Automatic Welding Machines for Pumping Industries ensure high efficiency and precision in every weld. With advanced automation, they deliver consistent weld quality while minimizing errors. These machines significantly reduce labor costs and save valuable production time.',
        images: [fww1, fww2, fww3],
        features: [
            'Consistent Quality',
            'Reduced Rework',
            'Higher Efficiency',
            'Cost Effective',
            'Customization'

        ]
    },
    {
        id: 5,
        name: 'Fabric Embossing Machines',
        description: 'Fabric Embossing Machines deliver high-quality embossed designs with precision and consistency. With uniform heat and pressure control, they ensure perfect finishing on a wide range of fabrics. These machines offer flexibility for customized patterns and creative textile applications.',
        images: [fe1, fe2, fe3],
        features: [
            'Creates permanent embossed designs with high precision',
            'Uniform pressure and heat distribution for quality finishing',
            'Suitable for various fabrics and customizable patterns'
        ]
    },
    {
        id: 6,
        name: 'Water Filling Machine',
        description: 'Water Filling Machines ensure fast and accurate filling for bottles of all sizes. Built with hygienic design and easy maintenance, they guarantee safe and clean operation. These machines maximize productivity while reducing wastage and downtime',
        images: [wf1, wf2],
        features: [
            'High-speed, accurate filling with minimal spillage',
            'Hygienic design with easy cleaning and maintenance',
            'Compatible with bottles of various sizes and shapes'
        ]
    },
    {
        id: 7,
        name: 'Carton Machine',
        description: 'we specialize in the installation, setup, and commissioning of carton manufacturing machines imported from China. With our hands-on expertise and technical knowledge, we ensure that your machines are installed with precision, enabling smooth production from day one.',
        images: [cm1, cm2, cm3, cm4],
        features: [
            'Unloading & Positioning',
            'Electrical & Control Panel Integration',
            'Hydraulic & Pneumatic Setup',
            'Trial Runs & Testing',
            'Operator Training',
            'After - Installation Support',
        ]
    }
];

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        if (paused) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [paused, images.length]);

    return (
        <div
            className="carousel-container"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <motion.img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex}`}
                className="carousel-image"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            />
            <div className="carousel-buttons">
                <button onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}>&lt;</button>
                <button onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}>&gt;</button>
            </div>
        </div>
    );
};

const Industrial_Series = () => {
    return (
        <div className="industrial-showcase">
            {/* Intro Section */}
            <motion.div
                className="intro-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1>Industrial Series</h1>
                <p>
                    Our Industrial Series is a curated lineup of machines engineered for precision, efficiency, and long-term reliability. Each unit is crafted to meet the demands of modern manufacturing while reducing downtime and increasing output quality.
                </p>
            </motion.div>

            {/* Machine Sections */}
            {machines.map((machine, index) => (
                <motion.div
                    key={machine.id}
                    className={`machine-row ${index % 2 === 1 ? 'reverse' : ''}`}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="machine-image">
                        <Carousel images={machine.images} />
                    </div>
                    <div className="machine-details">
                        <h2>{machine.name}</h2>
                        <p>{machine.description}</p>
                        <ul className="feature-list">
                            {machine.features.map((feature, i) => (
                                <li key={i}>✔ {feature}</li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default Industrial_Series;
