import React from 'react';

function SingleblogHero({ blog }) {

    if (!blog) {
        return (
            <section className="video-banner-section text-center py-5">
                <h2>Blog not found</h2>
            </section>
        );
    }

    return (
        <section className="video-banner-section">
            <div className="video-hero-overlay text-center">
                <div className="container d-flex justify-content-center align-items-center flex-column singlblg-hero-container">
                    <span className="singleblog-hero-subhead">BLOG</span>
                    <h2 className="text-uppercase mb-0 singleblog-hero-title" style={{ maxWidth: "896px" }}>
                        {blog.title}
                    </h2>
                    <span className="singleblog-hero-date" style={{ maxWidth: "896px" }}>
                        {blog.date}
                    </span>
                </div>
            </div>

            {/* Bottom Overlay Vector Image */}
            <img
                src="https://products.codersh.com/greenhammerconcrete/wp-content/uploads/2025/05/vector-light2.svg"
                alt="Decorative vector"
                className="hero-bottom-vector"
            />

        </section>
    );
}

export default SingleblogHero;
