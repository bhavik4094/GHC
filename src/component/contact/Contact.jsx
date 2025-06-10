import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function Contact() {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    // Fade in on mount
    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleClose = () => {
        setIsClosing(true);
        // Wait for fade out animation before navigating
        setTimeout(() => {
            navigate(-1);
        }, 300); // Match this with CSS transition duration
    };

    const handleOverlayClick = (e) => {
        // Only close if clicking on the overlay itself, not on the form container
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        address: "",
        email: "",
        serviceDate: "",
        services: [],
        helpText: "",
    });

    const servicesList = [
        "Driveway Repair & Replacements",
        "Patio Design & Construction",
        "Concrete Slab Installation",
        "Mitered Ends",
        "Fill-in Sunken Living Room",
        "Parking Lot Repairs and Curbing",
        "Bollards Installation",
        "Concrete Repairs",
        "Other",
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCheckbox = (e) => {
        const { value, checked } = e.target;
        const updatedServices = checked
            ? [...formData.services, value]
            : formData.services.filter((service) => service !== value);
        setFormData({ ...formData, services: updatedServices });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert("Form submitted!");
    };

    return (
        <>
            <div
                className={`modal-form-overlay position-relative ${isVisible && !isClosing ? 'fade-in' : 'fade-out'}`}
                onClick={handleOverlayClick}
            >
                <button
                    type="button"
                    className="btn-close btn-close-white ms-auto contact-modal-buttom"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={handleClose}
                    style={{ cursor: "pointer" }}
                ></button>

                <div className="container bg-black text-white form-container p-0">
                    {/* Fixed Header */}
                    <div className="contact-header-box px-4">
                        <h2 className="mb-0 text-center mt-4 contact-header">Send us a text</h2>
                        <p className="text-center my-4 contact-subheading">
                            We usually respond via text within a few minutes.
                        </p>
                    </div>

                    {/* Scrollable Form Section */}
                    <div className="contact-form-wrapper">
                        <form id="contact-form" onSubmit={handleSubmit} className="mt-4 px-4">
                            {/* FORM GRID START */}
                            <div
                                className="form-grid"
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                                    columnGap: '24px',
                                    rowGap: '16px',
                                }}
                            >
                                <div>
                                    <label className="form-label contact-form-label">Full name *</label>
                                    <input
                                        type="text"
                                        className="form-control contact-form-control"
                                        name="fullName"
                                        required
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        placeholder="Jane Rodgers"
                                    />
                                </div>

                                <div>
                                    <label className="form-label contact-form-label">Phone number *</label>
                                    <input
                                        type="tel"
                                        className="form-control contact-form-control"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="(201) 555-0123"
                                    />
                                </div>

                                <div>
                                    <label className="form-label contact-form-label">Address *</label>
                                    <input
                                        type="text"
                                        className="form-control contact-form-control"
                                        name="address"
                                        required
                                        value={formData.address}
                                        onChange={handleChange}
                                        placeholder="123 Main Street, Boston, MA 02212"
                                    />
                                </div>

                                <div>
                                    <label className="form-label contact-form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control contact-form-control"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="name@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="form-label contact-form-label">Preferred Date of Service</label>
                                    <input
                                        type="date"
                                        className="form-control contact-form-control"
                                        name="serviceDate"
                                        value={formData.serviceDate}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            {/* FORM GRID END */}

                            {/* SERVICES GRID */}
                            <div className="mt-3">
                                <label className="form-label contact-form-label">Services</label>
                                <div
                                    className="service-grid"
                                    style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                                        columnGap: '16px',
                                        rowGap: '16px',
                                    }}
                                >
                                    {servicesList.map((service, index) => (
                                        <div key={index}>
                                            <div className="form-check mb-0 contact-service-list">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input contact-form-check-input"
                                                    id={`service-${index}`}
                                                    value={service}
                                                    onChange={handleCheckbox}
                                                />
                                                <label
                                                    className="form-check-label contact-form-service-label"
                                                    htmlFor={`service-${index}`}
                                                >
                                                    {service}
                                                </label>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-3">
                                <label className="form-label contact-form-label">How can we help?</label>
                                <textarea
                                    className="form-control contact-form-control-sec"
                                    rows="4"
                                    name="helpText"
                                    value={formData.helpText}
                                    onChange={handleChange}
                                    placeholder="Type your response here..."
                                />
                            </div>
                        </form>
                    </div>

                    {/* Fixed Footer */}
                    <div className="contact-bottom">
                        <p className="mb-0">
                            By providing your phone number, you agree to receive text messages (SMS) from Green Hammer Concrete.
                            You can unsubscribe at anytime by replying STOP. Message and data rates may apply. Message frequency
                            varies.
                        </p>

                        <button
                            type="submit"
                            className="btn btn-success fw-bold contact-submit-btn"
                            form="contact-form" // This connects the button to the form
                        >
                            SEND
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;