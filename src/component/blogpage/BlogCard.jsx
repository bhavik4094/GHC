import React from 'react';

function BlogCard({ date, blog_title, blog_description, url = "#" }) {
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <article className="blog-card h-100 d-flex flex-column justify-content-between">
                <div className="blog-content">
                    <p className="blog-card-date mb-0">{date}</p>
                    <h3 className="blog-card-title h5 mt-2 mb-0">
                        <a href={url} className="text-decoration-none" target="_blank" rel="noopener noreferrer">
                            {blog_title}
                        </a>
                    </h3>
                    <p className="blog-card-description my-3">
                        {blog_description}
                    </p>
                </div>

                <div className="blog-link d-flex align-items-center gap-1">
                    <a href={url} className="text-decoration-none d-flex align-items-center" target="_blank" rel="noopener noreferrer">
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
                    </a>
                </div>
            </article>
        </div>
    );
}

export default BlogCard;
