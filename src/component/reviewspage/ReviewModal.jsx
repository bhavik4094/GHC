import React from "react";

const ReviewModal = () => {
    return (
        <div
            className="modal fade"
            id="reviewModal"
            tabIndex="-1"
            aria-labelledby="reviewModalLabel"
            aria-hidden="true"
            style={{ zIndex: 0 }}
        >
            <div className="modal-dialog modal-dialog-centered modal-lg modal-dialogbox-cotnainer">
                <div className="modal-content bg-danger text-white text-center position-relative">
                    <button
                        type="button"
                        className="btn-close btn-close-white ms-auto review-modal-buttom"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                    <h2>LEAVE A REVIEW</h2>

                    {/* Dynamic 5-star container */}
                    <div
                        className="text-warning fs-5 d-flex fivestar-container justify-content-center align-items-center"
                        id="starContainer"
                    >
                        {/* You can dynamically render stars here using state */}
                    </div>

                    {/* Review buttons */}
                    <div className="review-buttons d-flex flex-column align-items-center justify-content-center gap-4">
                        <a
                            href="https://www.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="review-button d-flex align-items-center text-white bg-google"
                            style={{ textDecoration: "none", justifyContent: "center" }}
                            aria-label="Leave a review on Google"
                        >
                            <div
                                className="icon-wrapper d-flex align-items-center justify-content-center bg-white me-auto"
                                style={{ width: "54px", height: "54px", borderRadius: "0.125rem" }}
                            >
                                <img
                                    src="icons/google.svg"
                                    alt="Google Icon"
                                    width="30"
                                    height="30"
                                />
                            </div>
                            <span className="text-start text-light">
                                LEAVE US A REVIEW ON<br />
                                <strong>GOOGLE</strong>
                            </span>
                        </a>

                        <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="review-button d-flex align-items-center text-white bg-facebook"
                            style={{ textDecoration: "none", justifyContent: "center" }}
                            aria-label="Leave a review on Facebook"
                        >
                            <div
                                className="icon-wrapper d-flex align-items-center justify-content-center bg-white me-auto"
                                style={{ width: "54px", height: "54px", borderRadius: "0.125rem" }}
                            >
                                <img
                                    src="icons/facebook.svg"
                                    alt="Facebook Icon"
                                    width="30"
                                    height="30"
                                />
                            </div>
                            <span className="text-start text-light">
                                LEAVE US A REVIEW ON<br />
                                <strong>FACEBOOK</strong>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewModal;
