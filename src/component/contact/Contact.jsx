import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'sonner';

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

function Contact() {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const initialFormState = {
        fullName: "",
        phone: "",
        address: "",
        email: "",
        serviceDate: "",
        services: [],
        helpText: "",
    };

    const [formData, setFormData] = useState(initialFormState);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleClose = useCallback(() => {
        setIsClosing(true);
        setTimeout(() => navigate(-1), 300);
    }, [navigate]);

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) handleClose();
    };

    const handleChange = ({ target: { name, value } }) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCheckbox = ({ target: { value, checked } }) => {
        setFormData((prev) => ({
            ...prev,
            services: checked
                ? [...prev.services, value]
                : prev.services.filter((service) => service !== value),
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.fullName.trim()) newErrors.fullName = "Full name is required.";
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required.";
        } else if (!/^\(\d{3}\) \d{3}-\d{4}$/.test(formData.phone)) {
            newErrors.phone = "Phone number must be in format (123) 456-7890.";
        }
        if (!formData.address.trim()) newErrors.address = "Address is required.";
        if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Enter a valid email address.";
        }
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            toast.error("Please fix form errors before submitting.");
            return;
        }

        setErrors({});
        setIsSubmitting(true);

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                toast.success(result.message || "Form submitted successfully!");
                setFormData(initialFormState);
            } else {
                toast.error(result.error || "Submission failed.");
            }
        } catch (err) {
            toast.error("Server error. Please try again.");
            console.error("Form submission error:", err);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div
            className={`modal-form-overlay position-relative ${isVisible && !isClosing ? 'fade-in' : 'fade-out'}`}
            onClick={handleOverlayClick}
        >
            <Toaster position="top-right" />

            <button
                type="button"
                className="btn-close btn-close-white ms-auto contact-modal-buttom"
                aria-label="Close"
                onClick={handleClose}
                style={{ cursor: "pointer" }}
                disabled={isSubmitting}
            />

            <div className="container bg-black text-white form-container p-0">
                <header className="contact-header-box px-4">
                    <h2 className="mb-0 text-center mt-4 contact-header">Send us a text</h2>
                    <p className="text-center my-4 contact-subheading">
                        We usually respond via text within a few minutes.
                    </p>
                </header>

                <main className="contact-form-wrapper">
                    <form id="contact-form" onSubmit={handleSubmit} className="mt-4 px-4">
                        <div
                            className="form-grid"
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                                columnGap: '24px',
                                rowGap: '16px',
                            }}
                        >
                            {[{
                                label: "Full name *", name: "fullName", type: "text", placeholder: "Jane Rodgers", required: true
                            }, {
                                label: "Phone number *", name: "phone", type: "tel", placeholder: "(201) 555-0123", required: true
                            }, {
                                label: "Address *", name: "address", type: "text", placeholder: "123 Main Street, Boston, MA 02212", required: true
                            }, {
                                label: "Email", name: "email", type: "email", placeholder: "name@example.com"
                            }, {
                                label: "Preferred Date of Service", name: "serviceDate", type: "date"
                            }].map(({ label, name, type, placeholder, required = false }) => (
                                <div key={name}>
                                    <label className="form-label contact-form-label">{label}</label>
                                    <input
                                        type={type}
                                        className="form-control contact-form-control"
                                        name={name}
                                        value={formData[name]}
                                        onChange={handleChange}
                                        placeholder={placeholder}
                                        required={required}
                                        disabled={isSubmitting}
                                    />
                                    {errors[name] && <div className="text-danger small mt-1">{errors[name]}</div>}
                                </div>
                            ))}
                        </div>

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
                                    <div key={service}>
                                        <div className="form-check mb-0 contact-service-list">
                                            <input
                                                type="checkbox"
                                                className="form-check-input contact-form-check-input"
                                                id={`service-${index}`}
                                                value={service}
                                                onChange={handleCheckbox}
                                                checked={formData.services.includes(service)}
                                                disabled={isSubmitting}
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
                                disabled={isSubmitting}
                            />
                        </div>
                    </form>
                </main>

                <footer className="contact-bottom">
                    <p className="mb-0">
                        By providing your phone number, you agree to receive text messages (SMS) from Green Hammer Concrete.
                        You can unsubscribe at anytime by replying STOP. Message and data rates may apply. Message frequency varies.
                    </p>
                    <button
                        type="submit"
                        className="btn btn-success fw-bold contact-submit-btn"
                        form="contact-form"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'SENDING...' : 'SEND'}
                    </button>
                </footer>
            </div>
        </div>
    );
}

export default Contact;
