





import React, { useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import animationData from '../../assests/lottie/Quote.json';
import '../Quote/QuoteModal.css';

const QuoteModal = ({ isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState('individual');

    if (!isOpen) return null;

    return (
        <div className="quote-modal-overlay">
            <div className="quote-modal">
                <button className="close-button" onClick={onClose}>×</button>

                <div className="quote-left">
                    <Player autoplay loop src={animationData} className="lottie-player" />
                </div>

                <div className="quote-right">
                    <div className="tabs">
                        <button
                            className={activeTab === 'individual' ? 'active' : ''}
                            onClick={() => setActiveTab('individual')}
                        >
                            Individual
                        </button>
                        <button
                            className={activeTab === 'organization' ? 'active' : ''}
                            onClick={() => setActiveTab('organization')}
                        >
                            Organization
                        </button>
                    </div>

                    <form className="form-content">
                        <input type="text" placeholder="Full Name" required />
                        <input type="email" placeholder="Email Address" required />
                        <input type="text" placeholder="Phone Number" required />
                        {activeTab === 'organization' && (
                            <>
                                <input type="text" placeholder="Organization Name" required />
                                <input type="text" placeholder="GST Number" required />
                            </>
                        )}
                        <input type="text" placeholder="Location / Country" required />
                        <input type="number" placeholder="Quantity" required />
                        <select required className="dropdown-select" defaultValue="">
                            <option value="" disabled hidden>
                                Preferred Contact Method
                            </option>
                            <option value="phone">Phone</option>
                            <option value="email">Email</option>
                            <option value="whatsapp">WhatsApp</option>
                        </select>
                        <textarea placeholder="Additional Notes / Requirements" />

                        <button type="submit">Submit Quote</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default QuoteModal;
