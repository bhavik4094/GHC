import React from 'react'
import ServiceContent from './ServiceContent'
import ServiceSlider from './ServiceSlider'

function ServiceBody({ serviceData }) {
    return (
        <div style={{ backgroundColor: "#fff" }}>
            <ServiceSlider serviceData={serviceData} />

            <ServiceContent serviceData={serviceData} />
        </div>
    )
}

export default ServiceBody