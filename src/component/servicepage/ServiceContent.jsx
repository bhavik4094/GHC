import React from 'react'

function ServiceContent({ serviceData }) {

    const { paragraphs } = serviceData;

    return (

        <section className="singlsrvs-cntnt-sctn d-flex justify-content-center align-items-center">
            <div className=" text-black singlsrvs-para-containr" style={{ maxWidth: "896px", color: "#fff" }}>
                {paragraphs?.map((para, index) => (
                    <p key={index} className='mb-3'>{para}</p>
                ))}
            </div>
        </section>
    )
}

export default ServiceContent