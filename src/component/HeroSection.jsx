import React from 'react'

function HeroSection() {
    return (
        <div className='hero-section pt-5 d-flex align-items-center justify-content-center'>
            <div className="container">
                <div className="row">
                    <div className="hero-conent-part col-lg-6">
                        <h2 className='hero-title'>GREEN HAMMER CONCRETE</h2>
                        <p className='hero-sub-title'>Reliable concrete company serving Palm Bay, FL and surrounding areas. Specializing in quality driveways, sidewalks, patios, slabs and more.</p>
                        <div className="mobile-buttons">
                            <button className="btn btn-success mb-2">SEND US A TEXT</button>
                            <button className="btn btn-outline-success">CALL NOW</button>
                        </div>
                    </div>
                    <div className="col-lg-6"></div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection