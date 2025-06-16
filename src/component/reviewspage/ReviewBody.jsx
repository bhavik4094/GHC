import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';
import Masonry from 'react-masonry-css';
import axios from 'axios';

// const reviews = [
//     {
//         name: "John Doe",
//         category: "Driveway",
//         text: "Great service and very professional. Highly recommend!Great service and very professional. Highly recommend!Great service and very professional. Highly recommend!Great service and very professional. Highly recommend!Great service and very professional. Highly recommend!Great service and very professional. Highly recommend!",
//     },
//     {
//         name: "Sarah Smith",
//         category: "Sidewalk",
//         text: "Excellent workmanship and attention to detail. Will hire again!",
//     },
//     {
//         name: "John Doe",
//         category: "Driveway",
//         text: "Great service and very professional. Highly recommend!Excellent workmanship and attention to detail. Will hire again!Excellent workmanship and attention to detail. Will hire again!",
//     },
//     {
//         name: "Sarah Smith",
//         category: "Sidewalk",
//         text: "Excellent workmanship and attention to detail. Will hire again!Excellent workmanship and attention to detail. Will hire again!Excellent workmanship and attention to detail. Will hire again!Excellent workmanship and attention to detail. Will hire again!Excellent workmanship and attention to detail. Will hire again!Excellent workmanship and attention to detail. Will hire again!Excellent workmanship and attention to detail. Will hire again!Excellent workmanship and attention to detail. Will hire again!Excellent workmanship and attention to detail. Will hire again!",
//     },
//     {
//         name: "John Doe",
//         category: "Driveway",
//         text: "Great service and very professional. Highly recommend!",
//     },
//     {
//         name: "Sarah Smith",
//         category: "Sidewalk",
//         text: "Excellent workmanship and attention to detail. Will hire again!Excellent workmanship and attention to detail. Will hire again!Excellent workmanship and attention to detail. Will hire again!Excellent workmanship and attention to detail. Will hire again!",
//     },
// ];

const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
};

function ReviewBody() {

    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/reviewcards');
                setReviews(response.data);
            } catch (err) {
                setError('Failed to load reviews.');
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, []);

    return (
        <section className="reviews-body-section d-flex justify-content-center align-items-center flex-column">
            <div className="reviews-body-container">
                {loading ? (
                    <p>Loading reviews...</p>
                ) : error ? (
                    <p className="">{error}</p>
                ) : (
                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="review-masonry-grid"
                        columnClassName="review-masonry-grid_column"
                    >
                        {reviews.map((review, index) => (
                            <ReviewCard key={index} review={review} />
                        ))}

                    </Masonry>
                )}
            </div>
        </section>
    );
}

export default ReviewBody;
