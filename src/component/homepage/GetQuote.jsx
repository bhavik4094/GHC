import React from 'react'

function GetQuote() {
    return (
        <section className="quote-section">
            <div className="container-xxl py-5 ">
                <div className="title-wrapper pb-5">
                    <h2 className="text-light d-flex align-items-center gap-4">
                        GET A QUOTE
                        <span className="title-hr"></span>
                    </h2>
                    <p className="text-light px-2 mb-2 heading-bottom-text">
                        Receiving a quote is easy and only takes three simple steps
                    </p>
                </div>
                <div className="step-container">
                    {/* Step 1 */}
                    <div className="the-outer-one the-outer-one-first">
                        {/* Left SVG */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="35"
                            height="291"
                            viewBox="0 0 35 291"
                            fill="#64aa0e"
                            className="qoute-svg qoute-svg-first"
                        >
                            <path
                                d="M0 28.59C0 27.0361 1 26 2.5 26H35V266H2.5C1 266 0 264.96 0 263.406V28.59Z"
                                fill="#64aa0e"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0.093 4.85046C-0.449 2.35706 1.45 0 4.00158 0H35V4H4.00158L34.6052 144.65C34.7272 145.21 34.7272 145.79 34.6052 146.35L4.00157 287H35V291H4.00157C1.45 291 -0.449512 288.643 0.093 286.15L30.6967 145.5L0.093 4.85046Z"
                                fill="white"
                            />
                        </svg>

                        {/* Main Box */}
                        <div className="step-box-first">
                            <div className="step-box-1 gap-3">
                                <h3>SEND US A TEXT</h3>
                                <button className="step-box-1-btn">TEXT US</button>
                            </div>
                        </div>

                        {/* Right SVG */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="61"
                            height="291"
                            viewBox="0 0 61 291"
                            fill="none"
                            className="qoute-svg qoute-svg-second text-secondary -ml-[1px]"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0.833 0H2.833C4.652 0 6.224 1.273 6.602 3.052L36.701 144.668C36.818 145.217 36.818 145.783 36.701 146.332L6.602 287.948C6.224 289.727 4.652 291 2.833 291H0.833V287H2.714L32.788 145.5L2.714 4H0.833V0Z"
                                fill="white"
                            />
                            <path
                                d="M27.782 26H0.833V266H27.782C29.778 266 30.151 264.083 30.277 263.5L59.884 148C60.134 147 60.333 146.5 60.333 146C60.333 145.5 60.134 145.03 59.884 144L30.277 28.472C30.151 27.889 29.259 26 27.782 26Z"
                                fill="#64aa0e"
                            />
                        </svg>
                    </div>

                    {/* Step 2 */}
                    <div className="the-outer-one">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="31"
                            height="243"
                            viewBox="0 0 31 243"
                            fill="none"
                            className="qoute-svg-2 qoute-svg-2-top"
                        >
                            <path
                                d="M0.006 27.9444C0.006 26.9765 1.111 25.4429 2.475 25.4429H31V217.557H2.471C1.108 217.557 0.003 216.024 0.003 215.056L0.006 27.9444Z"
                                fill="white"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0.095 4.868C-0.451 2.369 1.429 0 3.954 0H31V4.002H3.954L30.208 120.562C30.333 121.132 30.333 121.723 30.208 122.293L3.954 238.998H31V243H3.954C1.429 243 -0.447 240.631 0.099 238.132L26.353 121.428L0.095 4.868Z"
                                fill="currentColor"
                            />
                        </svg>
                        <div className="step-box">
                            <div className="step-box-2">
                                <h3>CHAT ON THE <br />PHONE</h3>
                            </div>
                        </div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="43"
                            height="243"
                            viewBox="0 0 43 243"
                            fill="none"
                            className="qoute-svg-2 qoute-svg-2-bottom"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 0H2.004C3.71 0 5.188 1.183 5.56 2.846L31.904 120.628C32.033 121.202 32.033 121.798 31.904 122.372L5.56 240.154C5.188 241.817 3.71 243 2.004 243H0V239H1.714L27.994 121.5L1.714 4H0V0Z"
                                fill="currentColor"
                            />
                            <path
                                d="M15.949 25.555H0V217.555H15.949C17.946 217.555 18.318 215.638 18.445 215.055L42.051 123.055C42.301 122.055 42.5 121.555 42.5 121.055C42.5 120.555 42.301 120.085 42.051 119.055L18.445 28.027C18.318 27.444 17.426 25.555 15.949 25.555Z"
                                fill="white"
                            />
                        </svg>
                    </div>

                    {/* Step 3 */}
                    <div className="the-outer-one">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="31"
                            height="243"
                            viewBox="0 0 31 243"
                            fill="none"
                            className="qoute-svg-2 qoute-svg-2-top"
                        >
                            <path
                                d="M0.006 27.9444C0.006 26.9765 1.111 25.4429 2.475 25.4429H31V217.557H2.471C1.108 217.557 0.003 216.024 0.003 215.056L0.006 27.9444Z"
                                fill="white"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0.095 4.868C-0.451 2.369 1.429 0 3.954 0H31V4.002H3.954L30.208 120.562C30.333 121.132 30.333 121.723 30.208 122.293L3.954 238.998H31V243H3.954C1.429 243 -0.447 240.631 0.099 238.132L26.353 121.428L0.095 4.868Z"
                                fill="currentColor"
                            />
                        </svg>
                        <div className="step-box">
                            <div className="step-box-2">
                                <h3>RECEIVE A QUOTE</h3>
                            </div>
                        </div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="43"
                            height="243"
                            viewBox="0 0 43 243"
                            fill="none"
                            className="qoute-svg-2 qoute-svg-2-bottom"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 0H2.004C3.71 0 5.188 1.183 5.56 2.846L31.904 120.628C32.033 121.202 32.033 121.798 31.904 122.372L5.56 240.154C5.188 241.817 3.71 243 2.004 243H0V239H1.714L27.994 121.5L1.714 4H0V0Z"
                                fill="currentColor"
                            />
                            <path
                                d="M15.949 25.555H0V217.555H15.949C17.946 217.555 18.318 215.638 18.445 215.055L42.051 123.055C42.301 122.055 42.5 121.555 42.5 121.055C42.5 120.555 42.301 120.085 42.051 119.055L18.445 28.027C18.318 27.444 17.426 25.555 15.949 25.555Z"
                                fill="white"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GetQuote


