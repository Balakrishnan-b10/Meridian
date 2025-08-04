





import React, { useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import animationData from '../../assets/lottie/Quote.json';
import '../Quote/QuoteModal.css';

const QuoteModal = ({ isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState('individual');

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
        type: activeTab,
        full_name: e.target[0].value,
        email: e.target[1].value,
        phone: e.target[2].value,
        ...(activeTab === 'organization' && {
            organization_name: e.target[3].value,
            gst_number: e.target[4].value,
        }),
        location: activeTab === 'organization' ? e.target[5].value : e.target[3].value,
        quantity: Number(
            activeTab === 'organization' ? e.target[6].value : e.target[4].value
        ),
        contact_method: activeTab === 'organization' ? e.target[7].value : e.target[5].value,
        notes: activeTab === 'organization' ? e.target[8].value : e.target[6].value,
    };

    try {
        const res = await fetch("http://localhost:8000/api/quote", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await res.json();
        alert(result.message);
        onClose();
    } catch (err) {
        console.error(err);
        alert("Failed to submit quote");
    }
};

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

                    <form className="form-content" onSubmit={handleSubmit}>
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
