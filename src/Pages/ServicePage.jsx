import React from 'react'
import ServiceHero from '../component/servicepage/ServiceHero';
import ServiceBody from '../component/servicepage/ServiceBody';
const heroCardData = [
    {
        title: 'Check out our blog',
    }
];
function ServicePage() {
    return (
        <div>
            {heroCardData.map((hero) => (
                <ServiceHero
                    key={hero.title}
                    hero_title={hero.title}
                />
            ))}

            <ServiceBody />
        </div>
    )
}

export default ServicePage




