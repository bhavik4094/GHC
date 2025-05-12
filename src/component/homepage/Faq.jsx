import React, { useId } from 'react';
import faqImage from '../../assets/img/hero-bg.webp';

// FAQ data
const faqItems = [
    {
        question: "What's the best way to reach you?",
        answer: 'Give us a call or send us a text at 321-917-0196. Thanks!',
    },
    {
        question: 'Do you provide free estimates?',
        answer: "Yes, we'll always estimate the job for free. Just give us a call to get started.",
    },
    {
        question: 'How are you different?',
        answer:
            'With over 30 years of experience, we are proud to deliver professional concrete services across Brevard County!',
    },
];

// Accordion Item Component
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

// Main Faq Component
function Faq() {
    const accordionId = useId();

    return (
        <section className="faq-section">
            <div className="container-xxl faq-component-container">
                <div className="row">
                    {/* FAQ Content */}
                    <div className="col-lg-8 col-sm-7 pe-sm-4 pe-lg-5">
                        <h2 className="pb-4">Frequently asked questions</h2>

                        <div className="accordion accordion-flush" id={accordionId}>
                            {faqItems.map((item, index) => (
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
                            src={faqImage}
                            alt="FAQ visual"
                            height="500"
                            className="object-fit-cover w-100"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq;
