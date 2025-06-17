import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';
import Masonry from 'react-masonry-css';
import axios from 'axios';

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
                console.error(err);
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
