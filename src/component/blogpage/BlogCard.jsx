import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function BlogCard() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                setLoading(true);
                setError(null);

                const apiUrl = 'http://localhost:5000/api/blogs';
                console.log('Fetching blogs from:', apiUrl);

                const response = await fetch(apiUrl);
                console.log('Response status:', response.status);
                console.log('Response headers:', response.headers.get('content-type'));

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                // Check if response is actually JSON
                const contentType = response.headers.get('content-type');
                if (!contentType || !contentType.includes('application/json')) {
                    const responseText = await response.text();
                    console.log('Non-JSON response received:', responseText.substring(0, 200));
                    throw new Error(`Server returned HTML instead of JSON. This usually means the API endpoint doesn't exist or there's a server error.`);
                }

                const data = await response.json();
                console.log('Fetched blogs data:', data);

                if (!Array.isArray(data)) {
                    throw new Error('Expected array of blogs but received: ' + typeof data);
                }

                setBlogs(data);
            } catch (err) {
                console.error('Error fetching blogs:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    if (loading) {
        return (
            <div className="col-12 text-center py-5">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-2">Loading blogs...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="col-12 text-center py-5">
                <div className="alert alert-danger" role="alert">
                    <h5>Error Loading Blogs</h5>
                    <p>{error}</p>
                    <button
                        className="btn btn-primary"
                        onClick={() => window.location.reload()}
                    >
                        Try Again
                    </button>
                </div>
                <div className="mt-3 text-start">
                    <div className="alert alert-warning">
                        <h6>Troubleshooting Steps:</h6>
                        <ol className="mb-0">
                            <li>Check if your backend server is running</li>
                            <li>Verify the API endpoint exists: <code>/api/blogs</code></li>
                            <li>Ensure the endpoint returns JSON, not HTML</li>
                            <li>Check browser console for more details</li>
                        </ol>
                    </div>
                    <small className="text-muted">
                        <strong>Debug Info:</strong><br />
                        Current URL: {window.location.origin}<br />
                        API Endpoint: {window.location.origin}/api/blogs
                    </small>
                </div>
            </div>
        );
    }

    if (blogs.length === 0) {
        return (
            <div className="col-12 text-center py-5">
                <div className="alert alert-info" role="alert">
                    <h5>No Blogs Available</h5>
                    <p>No blogs have been added to the database yet.</p>
                </div>
            </div>
        );
    }

    return (
        <>
            {blogs.map(blog => (
                <div className="col-12 col-md-6 col-lg-4" key={blog._id || blog.id}>
                    <article className="blog-card h-100 d-flex flex-column justify-content-between">
                        <div className="blog-content">
                            <p className="blog-card-date mb-0">{blog.date}</p>
                            <h3 className="blog-card-title h5 mt-2 mb-0">
                                <Link to={`/singleblog/${blog.id}`} className="text-decoration-none">
                                    {blog.title}
                                </Link>
                            </h3>
                            <p className="blog-card-description my-3">
                                {blog.description || 'No description available'}
                            </p>
                        </div>

                        <div className="blog-link d-flex align-items-center gap-1">
                            <Link to={`/singleblog/${blog.id}`} className="text-decoration-none d-flex align-items-center">
                                READ FULL POST
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                    className="ms-1"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </article>
                </div>
            ))}
        </>
    );
}

export default BlogCard;