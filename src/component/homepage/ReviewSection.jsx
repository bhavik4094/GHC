import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import pagetear from "../../assets/img/footer-pagetear-img.webp";

const reviews = [
  {
    id: 1,
    name: "Dawn Jhonson",
    category: "DRIVEWAY REPAIR & REPLACEMENTS",
    text: "reliable and easy to work with",
  },
  {
    id: 2,
    name: "BA CARDINAL",
    category: "DRIVEWAY REPAIR & REPLACEMENTS",
    text: "I am so happy with the driveway job Green Hammer did for me. The crew was so professional yet they took the time to answer any questions I had. Even with the dodging the rain they were able to complete the job and get full compliance from the city highly...",
  },
  {
    id: 3,
    name: "RICHARD BERRY",
    category: "PATIO DESIGN & CONSTRUCTION",
    text: "I highly recommend this contractor. The whole team at Green Hammer was professional and the work exceptional. Ashley was always available for questions and updates and was knowledgeable and experienced in navigating the permitting process.I highly recommend this contractor. The whole team at Green Hammer was professional and the work exceptional. Ashley was always available for questions and updates and was knowledgeable and experienced in navigating the permitting process.I highly recommend this contractor. The whole team at Green Hammer was professional and the work exceptional. Ashley was always available for questions and updates and was knowledgeable and experienced in navigating the permitting process.",
  },
  {
    id: 4,
    name: "David",
    category: "Concrete Repairs ",
    text: "Great service, great price and very professional, great communication! Would recommend to anyone",
  },
  {
    id: 5,
    name: "Kenneth Keaton",
    category: "DRIVEWAY REPAIR & REPLACEMENTS",
    text: " They did a wonderful job in a timely manner and help my mom out with a brand new driveway. They are awesome.From start to finish Adam made the process easy him and his crew were very professional and paid attention to every little detail. Can’t thank them enough for being a trustworthy and honest company",
  },
  {
    id: 6,
    name: "Sharon Rowe-Johnson",
    category: "Mitered Ends",
    text: "The service was great! It was a pleasure to have Green Hammer team on the job.",
  },
  {
    id: 7,
    name: "Ash C",
    category: "DRIVEWAY REPAIR & REPLACEMENTS",
    text: "Worked with Green Hammer to pour a new driveway to gain access to our side yard. They kept us up to date through out the entire process, and were super friendly. The driveway turned out great! I’m glad we chose them, and will definitely use them in the future!",
  },
  {
    id: 8,
    name: "Sharon Rowe-Johnson",
    category: "Mitered Ends",
    text: "The service was great! It was a pleasure to have Green Hammer team on the job.",
  },
  {
    id: 9,
    name: "Sharon Rowe-Johnson",
    category: "Mitered Ends",
    text: "The service was great! It was a pleasure to have Green Hammer team on the job.",
  },
];

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
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

// ReviewCard.jsx
const ReviewCard = ({ review }) => {
  const textRef = useRef(null);
  const [isClamped, setIsClamped] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const el = textRef.current;
    if (el) {
      setIsClamped(el.scrollHeight > el.clientHeight);
    }
  }, []);

  const toggleExpanded = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div className="review-card bg-white text-dark d-flex flex-column justify-content-between">
      <div className="d-flex flex-column justify-content-between review-card-body">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="text-warning fs-5 d-flex">
            {Array.from({ length: 5 }, (_, i) => (
              <span className="me-1" key={i}>
                <StarIcon />
              </span>
            ))}
          </div>
          <QuoteIcon />
        </div>
        <div>
          <p
            className={`text-muted review-msg mb-0 pt-2 ${expanded ? "expanded" : "clamped"
              }`}
            ref={textRef}
          >
            {review.text}
          </p>
          {isClamped && (
            <button
              onClick={toggleExpanded}
              aria-expanded={expanded}
              className="btn btn-link p-0 reviewmsg-toogle-btn"
            >
              {expanded ? "SEE LESS" : "SEE MORE"}
            </button>
          )}
        </div>
      </div>
      <div className="mt-4">
        <p className="text-uppercase review-name mb-0">{review.name}</p>
        <span className="badge review-category text-uppercase">
          {review.category}
        </span>
      </div>
    </div>
  );
};
// ReviewSection.jsx

function ReviewSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;

      // Re-init navigation
      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <section className="review-slider-section position-relative">
      <img
        src="https://products.codersh.com/greenhammerconcrete/wp-content/uploads/2025/05/vector1.svg"
        alt=""
        className="overlay-image1 position-absolute top-0 z-3 start-0"
      />
      <div className="container-xxl testimonial-container">
        <div className="title-wrapper">
          <p className="text-light heading-upper-text review-subheading-text mb-0">
            <span className="bg-black" style={{ padding: "5px 0px" }}>
              {" "}
              TAKE A LOOK FOR YOURSELF ON WHAT YOUR NEIGHBORS ARE SAYING ABOUT
              US.
            </span>
          </p>
          <h2 className="text-light d-flex align-items-center gap-4 review-setion-heading">
            REVIEWS
            <span className="title-hr"></span>
            <a
              href="#"
              className="review-btn d-none d-md-inline-flex text-decoration-none"
            >
              SEE ALL REVIEWS
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                <path
                  d="M10.6667 1.1665L16.5 6.99984L10.6667 12.8332L16.5 6.99984L1.5 6.99984"
                  stroke="#000"
                  strokeWidth="1.5"
                />
              </svg>
            </a>
          </h2>
        </div>
        <div
          className="position-relative d-flex justify-content-center review-slider-container"
        // style={{ minHeight: "502px" }}
        >
          <Swiper
            modules={[Navigation, Autoplay]} // Use Autoplay module
            spaceBetween={25}
            slidesPerView={1}
            loop={true} // Enable looping
            autoplay={{ delay: 7000, disableOnInteraction: false }} // Set autoplay config
            onSwiper={setSwiperInstance}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <ReviewCard review={review} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          {/* Previous button */}
          <button
            ref={prevRef}
            className="btn position-absolute top-50 start-0 translate-middle-y z-3 button-previous ms-2 ms-lg-3 d-none d-md-flex"
            aria-label="Previous review"
            style={{
              borderRadius: ".125rem",
              height: "48px",
              width: "48px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="41"
              viewBox="0 0 40 41"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.0769 28.0235C19.6039 28.5263 18.8128 28.5504 18.31 28.0774L11.9398 22.0842C11.0198 21.2187 11.0199 19.782 11.9398 18.9165L18.31 12.9232C18.8128 12.4502 19.6039 12.4743 20.0769 12.9771C20.55 13.4799 20.5258 14.271 20.023 14.7441L13.9047 20.5003L20.023 26.2566C20.5258 26.7296 20.55 27.5207 20.0769 28.0235Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M27.9165 20.5C27.9165 21.1904 27.3569 21.75 26.6665 21.75L14.1665 21.75C13.4761 21.75 12.9165 21.1904 12.9165 20.5C12.9165 19.8096 13.4761 19.25 14.1665 19.25L26.6665 19.25C27.3569 19.25 27.9165 19.8096 27.9165 20.5Z"
                fill="white"
              />
            </svg>
          </button>
          {/* Next button */}
          <button
            ref={nextRef}
            className="btn position-absolute top-50 end-0 translate-middle-y z-3 button-next me-2 me-lg-3 d-none d-md-flex"
            aria-label="Next review"
            style={{
              borderRadius: ".125rem",
              height: "48px",
              width: "48px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="41"
              viewBox="0 0 40 41"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.9226 12.9765C20.3957 12.4737 21.1867 12.4496 21.6895 12.9226L28.0597 18.9158C28.9797 19.7813 28.9797 21.218 28.0597 22.0835L21.6895 28.0768C21.1867 28.5498 20.3957 28.5257 19.9226 28.0229C19.4496 27.5201 19.4737 26.729 19.9765 26.2559L26.0948 20.4997L19.9765 14.7434C19.4737 14.2704 19.4496 13.4793 19.9226 12.9765Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.083 20.5C12.083 19.8096 12.6427 19.25 13.333 19.25H25.833C26.5234 19.25 27.083 19.8096 27.083 20.5C27.083 21.1904 26.5234 21.75 25.833 21.75H13.333C12.6427 21.75 12.083 21.1904 12.083 20.5Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        {/* mobile buttons ( are not properly working) */}
        <div className="d-flex justify-content-center align-item-center gpa-4 mt-3  d-md-none gap-4">
          <button
            onClick={() => swiperInstance?.slidePrev()}
            className="btn  z-3 button-previous d-flex d-md-none"
            aria-label="Previous review"
            style={{
              borderRadius: ".125rem",
              height: "48px",
              width: "48px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="41"
              viewBox="0 0 40 41"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.0769 28.0235C19.6039 28.5263 18.8128 28.5504 18.31 28.0774L11.9398 22.0842C11.0198 21.2187 11.0199 19.782 11.9398 18.9165L18.31 12.9232C18.8128 12.4502 19.6039 12.4743 20.0769 12.9771C20.55 13.4799 20.5258 14.271 20.023 14.7441L13.9047 20.5003L20.023 26.2566C20.5258 26.7296 20.55 27.5207 20.0769 28.0235Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M27.9165 20.5C27.9165 21.1904 27.3569 21.75 26.6665 21.75L14.1665 21.75C13.4761 21.75 12.9165 21.1904 12.9165 20.5C12.9165 19.8096 13.4761 19.25 14.1665 19.25L26.6665 19.25C27.3569 19.25 27.9165 19.8096 27.9165 20.5Z"
                fill="white"
              />
            </svg>
          </button>

          <button
            onClick={() => swiperInstance?.slideNext()}
            className="btn z-3 button-next d-flex d-md-none"
            aria-label="Next review"
            style={{
              borderRadius: ".125rem",
              height: "48px",
              width: "48px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="41"
              viewBox="0 0 40 41"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.9226 12.9765C20.3957 12.4737 21.1867 12.4496 21.6895 12.9226L28.0597 18.9158C28.9797 19.7813 28.9797 21.218 28.0597 22.0835L21.6895 28.0768C21.1867 28.5498 20.3957 28.5257 19.9226 28.0229C19.4496 27.5201 19.4737 26.729 19.9765 26.2559L26.0948 20.4997L19.9765 14.7434C19.4737 14.2704 19.4496 13.4793 19.9226 12.9765Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.083 20.5C12.083 19.8096 12.6427 19.25 13.333 19.25H25.833C26.5234 19.25 27.083 19.8096 27.083 20.5C27.083 21.1904 26.5234 21.75 25.833 21.75H13.333C12.6427 21.75 12.083 21.1904 12.083 20.5Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="page-tear position-absolute bottom-0 start-0 w-100">
        <img
          src={pagetear}
          alt="Page tear"
          className="w-100 d-block"
          style={{ display: "block", maxWidth: "100%", height: "auto" }}
        />
      </div>
    </section>
  );
}

export default ReviewSection;
