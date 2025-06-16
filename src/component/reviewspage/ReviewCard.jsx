import React from 'react';
// import { ReactComponent as StarIcon } from '../icons/star.svg';
// import { ReactComponent as QuoteIcon } from '../icons/quote.svg';
import googleLogo from '../../assets/img/google-logo2.webp';


const StarIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        className="reviewcard-star"
    >
        <path
            d="M19.0489 2.92705C19.3483 2.00574 20.6517 2.00574 20.9511 2.92705L24.2658 13.1287C24.3996 13.5407 24.7836 13.8197 25.2168 13.8197H35.9434C36.9122 13.8197 37.3149 15.0593 36.5312 15.6287L27.8532 21.9336C27.5027 22.1883 27.3561 22.6396 27.4899 23.0517L30.8046 33.2533C31.104 34.1746 30.0495 34.9407 29.2658 34.3713L20.5878 28.0664C20.2373 27.8117 19.7627 27.8117 19.4122 28.0664L10.7342 34.3713C9.95048 34.9407 8.896 34.1746 9.19535 33.2533L12.5101 23.0517C12.6439 22.6396 12.4973 22.1883 12.1468 21.9336L3.46877 15.6287C2.68505 15.0593 3.08783 13.8197 4.05655 13.8197H14.7832C15.2164 13.8197 15.6004 13.5407 15.7342 13.1287L19.0489 2.92705Z"
            fill="#FCD34D"
        />
    </svg>
);

const QuoteIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-8 h-8 sm:w-10 sm:h-10"
        viewBox="0 0 41 38"
        fill="none"
        width="40"
        height="40"
        className="reviewcard-quote"
    >
        <path
            d="M29.6315 37.6207C35.7257 37.6207 40.666 32.6803 40.666 26.5862V5.20686C40.666 2.54066 38.5046 0.379275 35.8384 0.379275L28.2522 0.379274C25.586 0.379274 23.4246 2.54066 23.4246 5.20686L23.4246 15.5517C23.4246 18.2179 25.586 20.3793 28.2522 20.3793H33.7695C34.5312 20.3793 35.1488 20.9968 35.1488 21.7586V26.5862C35.1488 29.6333 32.6786 32.1034 29.6315 32.1034H25.8384C25.0767 32.1034 24.4591 32.721 24.4591 33.4827V36.2413C24.4591 37.0031 25.0767 37.6207 25.8384 37.6207H29.6315Z"
            fill="#000000"
        />
        <path
            d="M6.87291 37.6207C12.9671 37.6207 17.9074 32.6803 17.9074 26.5862L17.9074 5.20686C17.9074 2.54066 15.746 0.379273 13.0798 0.379273L5.4936 0.379272C2.8274 0.379272 0.666017 2.54066 0.666017 5.20686L0.666016 15.5517C0.666015 18.2179 2.8274 20.3793 5.4936 20.3793H11.0108C11.7726 20.3793 12.3902 20.9968 12.3902 21.7586L12.3902 26.5862C12.3902 29.6333 9.92 32.1034 6.87291 32.1034H3.07981C2.31803 32.1034 1.7005 32.721 1.7005 33.4827L1.7005 36.2413C1.7005 37.0031 2.31804 37.6207 3.07981 37.6207H6.87291Z"
            fill="#000000"
        />
    </svg>
);

const ReviewCard = ({ review }) => {
    return (
        <div className="masonry-review-card bg-white text-dark d-flex flex-column">
            <div className="d-flex flex-column justify-content-between review-card-body">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="text-warning fs-5 d-flex">
                        {Array.from({ length: review.rating }, (_, i) => (
                            <span className="me-1" key={i}>
                                <StarIcon />
                            </span>
                        ))}
                    </div>
                    <QuoteIcon />
                </div>
                <p className="text-muted review-msg mb-0 mt-3">{review.text}</p>
            </div>
            <div className="mt-4 d-flex align-items-center justify-content-between review-card-footer">
                <div className="left">
                    <p className="text-uppercase review-name mb-0">{review.name}</p>
                    <span className="badge review-category text-uppercase">
                        {review.category}
                    </span>
                </div>
                <div className="right">
                    <img src={googleLogo} alt="google logo" className='logo-comapny' height={28} style={{ marginLeft: "16px" }} />

                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
