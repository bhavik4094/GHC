import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import familyIcon from "../../assets/img/family-icon.webp";
import insuredIcon from "../../assets/img/insured-icon.webp";
import locationIcon from "../../assets/img/location-icon.webp";

const trustItems = [
    {
        label: 'INSURED',
        icon: insuredIcon,
        alt: 'Insured Icon',
    },
    {
        label: 'YEARS IN BUSINESS',
        isYears: true,
        years: 30,
    },
    {
        label: 'FAMILY OWNED',
        icon: familyIcon,
        alt: 'Family Owned Icon',
    },
    {
        label: 'LOCALLY OWNED',
        icon: locationIcon,
        alt: 'Locally Owned Icon',
    }
];

function TrustItem({ icon, alt, label, isYears, years, index }) {
    const isLastItem = index === 3;

    const colClass = `
        trust-section-component text-center 
        mb-4 mb-lg-0
        ${isLastItem ? 'custom-center-last' : ''}
    `;

    return (
        <Col lg={3} md={6} sm={6} xs={6} className={colClass.trim()}>
            {isYears ? (
                <>
                    <h4 className="years-in-business me-2 mb-0">{years}</h4>
                    <p className="trust-label d-block d-md-none">
                        YEARS IN <br /> BUSINESS
                    </p>
                    <p className="trust-label d-none d-md-block">
                        YEARS IN BUSINESS
                    </p>
                </>
            ) : (
                <>
                    <img
                        src={icon}
                        alt={alt}
                        className="trust-panel-icon mb-2 mb-md-0 me-md-2"
                        loading="lazy"
                    />
                    <p className="trust-label">{label}</p>
                </>
            )}
        </Col>
    );
}

function HeroPanel() {
    return (
        <div className="trust-section text-white py-4 py-md-5 px-3">
            <Container>
                <Row className="mx-md-3">
                    {trustItems.map((item, index) => (
                        <TrustItem key={index} index={index} {...item} />
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default HeroPanel;
