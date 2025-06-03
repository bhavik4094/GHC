import React from 'react';
import BlogCard from './BlogCard';

function BlogBody({ blogCardData }) {
    return (
        <section className='blogPage-body-section'>
            <div className="container blog-cards-container" style={{ maxWidth: "1280px" }}>
                <div className="row blog-card-row"> {/* Fixed typo */}
                    {blogCardData.map((item) => (
                        <BlogCard
                            key={item.title} // More stable key
                            date={item.date}
                            blog_title={item.title}
                            blog_description={item.description}
                            url={item.url}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default BlogBody;
