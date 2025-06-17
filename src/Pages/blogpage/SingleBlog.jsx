import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SingleblogHero from '../../component/blogpage/SingleblogHero';
import SingleBlogBody from '../../component/blogpage/SingleBlogBody';

function SingleBlog() {
    const { slug } = useParams(); // Get slug from URL
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                setLoading(true);
                // Use the slug endpoint from updated backend
                const response = await fetch(`http://localhost:5000/api/blogs/slug/${slug}`);

                if (response.status === 404) {
                    setError('Blog not found');
                    return;
                }

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setBlog(data);
            } catch (err) {
                console.error('Error fetching blog:', err);
                setError('Failed to load blog. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        if (slug) {
            fetchBlog();
        }
    }, [slug]);

    if (loading) {
        return (
            <div className="text-center py-5">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-2">Loading blog...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-5">
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            </div>
        );
    }

    if (!blog) {
        return <p className="text-center my-5">Blog not found</p>;
    }

    return (
        <div>
            <SingleblogHero blog={blog} />
            <SingleBlogBody blog={blog} />
        </div>
    );
}

export default SingleBlog;