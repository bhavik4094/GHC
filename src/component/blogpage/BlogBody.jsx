import React from 'react';
import BlogCard from './BlogCard';

function BlogBody() {
    return (
        <section className='blogPage-body-section'>
            <div className="container blog-cards-container" style={{ maxWidth: "1280px" }}>
                <div className="row blog-card-row"> {/* Fixed typo */}
                    <BlogCard />
                </div>
            </div>
        </section>
    );
}

export default BlogBody;
