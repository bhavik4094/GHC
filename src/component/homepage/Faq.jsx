import React, { useEffect, useState, useId } from 'react';
import axios from 'axios';

const FaqItem = ({ id, question, answer }) => (
    <div className="accordion-item bg-transparent">
        <h4 className="accordion-header">
            <button
                className="accordion-button collapsed shadow-none px-0 bg-transparent text-light fw-bold fs-4 faq-questions"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${id}`}
                aria-expanded="false"
                aria-controls={id}
            >
                {question}
            </button>
        </h4>
        <div
            id={id}
            className="accordion-collapse collapse"
        >
            <div className="accordion-body px-0 pt-0 faq-answer">{answer}</div>
        </div>
    </div>
);

function Faq() {
    const accordionId = useId();
    const [faqSection, setFaqSection] = useState({
        heading: '',
        sideImage: {
            url: '',
            alt: ''
        },
        faqs: []
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
    // Create base URL for static files (without /api)
    const STATIC_BASE_URL = import.meta.env.VITE_API_URL ?
        import.meta.env.VITE_API_URL.replace('/api', '') :
        'http://localhost:5000';


    useEffect(() => {
        const fetchFaqs = async () => {
            try {
                const res = await axios.get(`${API_BASE_URL}/faq`);
                setFaqSection(res.data || {});
            } catch (err) {
                console.error('Error loading FAQs:', err);
                setError('Failed to load FAQ section.');
            } finally {
                setLoading(false);
            }
        };

        fetchFaqs();
    }, [API_BASE_URL, STATIC_BASE_URL]);

    const activeFaqs = faqSection.faqs?.filter(faq => faq.isActive) || [];

    if (loading) return <div className="text-center py-5">Loading FAQs...</div>;
    if (error) return <div className="alert alert-danger text-center">{error}</div>;

    return (
        <section className="faq-section">
            <div className="container-xxl faq-component-container">
                <div className="row">
                    {/* FAQ Content */}
                    <div className="col-lg-8 col-sm-7 pe-sm-4 pe-lg-5">
                        <h2 className="pb-4">{faqSection.heading}</h2>

                        <div className="accordion accordion-flush" id={accordionId}>
                            {activeFaqs.map((item, index) => (
                                <FaqItem
                                    key={index}
                                    id={`${accordionId}-item-${index}`}
                                    question={item.question}
                                    answer={item.answer}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Image Column */}
                    <div className="col-lg-4 col-sm-5 d-none d-sm-block ps-lg-0">
                        <img
                            src={`${API_BASE_URL.replace('/api', '/')}${faqSection.sideImage?.url}`}
                            // alt={faqSection.sideImage?.alt || 'FAQ visual'}
                            height="500"
                            className="object-fit-cover w-100"
                            loading="lazy"
                            onError={(e) => { e.target.style.display = 'none'; }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq;
