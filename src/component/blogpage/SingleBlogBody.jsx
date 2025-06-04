import React from 'react';

function SingleBlogBody({ blog }) {
    const paragraphs = blog?.paragraphs ?? [];

    if (paragraphs.length === 0) {
        return <p className="text-center">No content available.</p>;
    }
    return (
        <section className='singlblg-body-section d-flex justify-content-center align-items-center' style={{ backgroundColor: "#fff" }}>
            <div className="singlblg-cotnainer">
                {blog.paragraphs.map((para, index) => (
                    <p key={index} className={`blog-paragraph ${index > 1 ? 'with-margin' : ''}`}>
                        {para}
                    </p>
                ))}
            </div>
        </section>
    );
}

export default SingleBlogBody;
