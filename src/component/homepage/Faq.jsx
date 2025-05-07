import React from 'react'
import faqImage from '../../assets/img/hero-bg.webp';


function Faq() {
    return (
        <div>
            <section className="faq-section">
                <div className="container-xl faq-component-container">
                    <div className="row">
                        {/* FAQ Content */}
                        <div className="col-lg-8 col-sm-7 pe-sm-4 pe-lg-5">
                            <h3 className="pb-4">Frequently asked questions</h3>

                            <div className="accordion accordion-flush" id="accordionFlushExample">
                                {/* FAQ 1 */}
                                <div className="accordion-item bg-transparent">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed shadow-none px-0 bg-transparent text-light fw-bold fs-4"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseOne"
                                            aria-expanded="false"
                                            aria-controls="flush-collapseOne"
                                        >
                                            What's the best way to reach you?
                                        </button>
                                    </h2>
                                    <div
                                        id="flush-collapseOne"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#accordionFlushExample"
                                    >
                                        <div className="accordion-body px-0 pt-0">
                                            Give us a call or send us a text at <strong>321-917-0196</strong>. Thanks!
                                        </div>
                                    </div>
                                </div>

                                {/* FAQ 2 */}
                                <div className="accordion-item bg-transparent">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed shadow-none px-0 bg-transparent text-light fw-bold fs-4"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseTwo"
                                            aria-expanded="false"
                                            aria-controls="flush-collapseTwo"
                                        >
                                            Do you provide free estimates?
                                        </button>
                                    </h2>
                                    <div
                                        id="flush-collapseTwo"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#accordionFlushExample"
                                    >
                                        <div className="accordion-body px-0 pt-0">
                                            Yes, we'll always estimate the job for free. Just give us a call to get started.
                                        </div>
                                    </div>
                                </div>

                                {/* FAQ 3 */}
                                <div className="accordion-item bg-transparent">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed shadow-none px-0 bg-transparent text-light fw-bold fs-4 pb-0"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseThree"
                                            aria-expanded="false"
                                            aria-controls="flush-collapseThree"
                                        >
                                            How are you different?
                                        </button>
                                    </h2>
                                    <div
                                        id="flush-collapseThree"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#accordionFlushExample"
                                    >
                                        <div className="accordion-body px-0 pt-0">
                                            With over 30 years of experience, we are proud to deliver professional concrete services across
                                            Brevard County!
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Image Column */}
                        <div className="col-lg-4 col-sm-5 d-none d-sm-block ps-lg-0">
                            <img src={faqImage} alt="FAQ visual" height="500" className="object-fit-cover w-100" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Faq



