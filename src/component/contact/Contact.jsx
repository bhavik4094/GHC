// import React from 'react'
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Contact() {

    const navigate = useNavigate();

    const handleClose = () => {
        // Close the modal (Bootstrap handles that)
        // Then navigate back
        navigate(-1); // Go back to the previous page
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
        "Concrete Slab Installation",
        "Fill-in Sunken Living Room",
        "Bollards Installation",
        "Other",
        "Patio Design & Construction",
        "Mitered Ends",
        "Parking Lot Repairs and Curbing",
        "Concrete Repairs",
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

            <div className="modal-form-overlay position-relative">
                {/* <button
                    type="button"
                    className="btn-close-custom"
                    aria-label="Close"
                    onClick={handleClose}
                >
                    &times;
                </button> */}

                <button
                    type="button"
                    className="btn-close btn-close-white ms-auto contact-modal-buttom "
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={handleClose}
                    style={{ cursor: "pointer" }}
                ></button>
                <div className="container bg-black text-white form-container">
                    <h2 className="text-center fw-bold">Send us a text</h2>
                    <p className="text-center text-muted">
                        We usually respond via text within a few minutes.
                    </p>
                    <form onSubmit={handleSubmit}>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <label className="form-label">Full name *</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="fullName"
                                    required
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="Jane Rodgers"
                                />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Phone number *</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="(201) 555-0123"
                                />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Address *</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="address"
                                    required
                                    value={formData.address}
                                    onChange={handleChange}
                                    placeholder="123 Main Street, Boston, MA 02212"
                                />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="name@example.com"
                                />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Preferred Date of Service</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    name="serviceDate"
                                    value={formData.serviceDate}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="mt-4">
                            <label className="form-label">Services</label>
                            <div className="row">
                                {servicesList.map((service, index) => (
                                    <div className="col-md-6" key={index}>
                                        <div className="form-check">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                id={`service-${index}`}
                                                value={service}
                                                onChange={handleCheckbox}
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor={`service-${index}`}
                                            >
                                                {service}
                                            </label>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-4">
                            <label className="form-label">How can we help?</label>
                            <textarea
                                className="form-control"
                                rows="3"
                                name="helpText"
                                value={formData.helpText}
                                onChange={handleChange}
                                placeholder="Type your response here..."
                            />
                        </div>

                        <p className="mt-3 small " style={{ color: "white" }}>
                            By providing your phone number, you agree to receive text messages (SMS) from Green Hammer Concrete.
                            You can unsubscribe at anytime by replying STOP. Message and data rates may apply. Message frequency
                            varies.
                        </p>

                        <div className="d-grid">
                            <button type="submit" className="btn btn-success fw-bold">
                                SEND
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    );

}

export default Contact