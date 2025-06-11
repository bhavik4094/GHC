import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import facebookIcon from "../../assets/img/facebook-logo.webp"
import googleIcon from "../../assets/img/google-logo2.webp"

const ReviewModal = ({ show, handleClose }) => {
    const [rating] = useState(5); // default static rating

    return (
        <Modal show={show} onHide={handleClose} centered backdrop="static" className="review-modal">
            <Modal.Body className="text-center bg-black text-white review-modal-body">
                <button
                    type="button"
                    className="btn-close btn-close-white position-absolute"
                    style={{ top: "16px", right: "16px" }}
                    aria-label="Close"
                    onClick={handleClose}
                ></button>

                <h2>LEAVE A REVIEW</h2>

                {/* Dynamic 5-star container */}
                <div
                    className="text-warning fs-5 d-flex fivestar-container justify-content-center align-items-center"
                    id="starContainer"
                >
                    {[...Array(5)].map((_, index) => (
                        <svg
                            key={index}
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill={index < rating ? "#FFD700" : "#ccc"}
                            className="mx-1"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9.04894 0.927052C9.3483 0.00574108 10.6517 0.00573985 10.9511 0.92705L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.5501 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z" fill="#FCD34D" />
                        </svg>
                    ))}
                </div>

                {/* Review buttons */}
                <div className="review-buttons">
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
                                src={googleIcon}
                                alt="Google Icon"
                                width="32px"
                                height="32px"
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
                                src={facebookIcon}
                                alt="Facebook Icon"
                                width="32px"
                                height="32px"
                            />
                        </div>
                        <span className="text-start text-light">
                            LEAVE US A REVIEW ON<br />
                            <strong>FACEBOOK</strong>
                        </span>
                    </a>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default ReviewModal;
