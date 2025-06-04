import React from 'react'
import ServiceContent from './ServiceContent'
import ServiceSlider from './ServiceSlider'

function ServiceBody() {
    return (
        <div style={{ backgroundColor: "#fff" }}>
            <ServiceSlider />
            <ServiceContent />
        </div>
    )
}

export default ServiceBody