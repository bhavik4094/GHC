import React from 'react';
import { Link } from 'react-router-dom';
import Blogdata from '../../assets/data/blogs.json';

function BlogCard() {
    return (
        <>
            {Blogdata.map(blog => (
                <div className="col-12 col-md-6 col-lg-4" key={blog.id}>
                    <article className="blog-card h-100 d-flex flex-column justify-content-between">
                        <div className="blog-content">
                            <p className="blog-card-date mb-0">{blog.date}</p>
                            <h3 className="blog-card-title h5 mt-2 mb-0">
                                <Link to={`/blog/${blog.id}`} className="text-decoration-none">
                                    {blog.title}
                                </Link>
                            </h3>
                            <p className="blog-card-description my-3">
                                {blog.description}
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
