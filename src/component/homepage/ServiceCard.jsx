import React from 'react'

function ServiceCard({ title, image, description }) {
    return (
        <div className="col-lg-4 col-sm-6 p-0 border-black border card-wrapper">
            <a href="#" className="service-card position-relative d-inline-flex overflow-hidden w-100">
                <img src={image} alt={title} className="service-image w-100 h-100 object-fit-cover" />
                <span className="service-content position-absolute bottom-0">
                    <h3 className="light-text d-flex align-items-center">
                        {title}
                        <svg className="flex flex-shrink-0 text-secondary ms-2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none">
                            <circle cx="16" cy="16" r="12.3333" fill="#64aa0e" />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M13.2717 9.9814C13.6501 9.57916 14.283 9.55986 14.6852 9.9383L19.7814 14.7329C20.5173 15.4253 20.5173 16.5746 19.7814 17.267L14.6852 22.0616C14.283 22.4401 13.6501 22.4208 13.2717 22.0185C12.8932 21.6163 12.9125 20.9834 13.3148 20.605L18.2094 16L13.3148 11.395C12.9125 11.0165 12.8932 10.3836 13.2717 9.9814Z"
                                fill="#000"
                            />
                        </svg>
                    </h3>
                    <p className='mb-0'>{description}</p>
                </span>
            </a>
        </div>
    )
}

export default ServiceCard


