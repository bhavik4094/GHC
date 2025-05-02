import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import familyIcon from "../../assets/img/family-icon.webp";
// import numnerIcon from "../assets/img/30number-icon.webp";
import insuredIcon from "../../assets/img/insured-icon.webp";
import locationIcon from "../../assets/img/location-icon.webp";

function HeroPanel() {
    return (
        <div className="trust-section bg-black text-white py-4 py-md-5 px-3">
            <Container>
                <Row className="text-center mx-md-5">
                    <Col lg={3} md={6} xs={6} className="mb-4 mb-lg-0 trust-section-component">
                        <img src={insuredIcon} alt="Insured Icon" className="hero-panel-icon me-2" />
                        <p className="trust-label">INSURED</p>
                    </Col>

                    <Col lg={3} md={6} xs={6} className="mb-4 mb-lg-0 trust-section-component ">
                        {/* <img src={numnerIcon} alt="30 Years Icon" className="hero-panel-icon me-2" /> */}
                        <h4 className="years-in-business me-2 mb-0">30</h4>

                        {/* Mobile-only */}
                        <p className="trust-label d-block d-md-none text-center">
                            YEARS IN <br /> BUSINESS
                        </p>

                        {/* Tablet and up */}
                        <p className="trust-label d-none d-md-block">
                            YEARS IN BUSINESS
                        </p>
                    </Col>

                    <Col lg={3} md={6} xs={6} className="mb-4 mb-lg-0 trust-section-component">
                        <img src={familyIcon} alt="Family Owned Icon" className="hero-panel-icon me-2" />
                        <p className="trust-label">FAMILY OWNED</p>
                    </Col>

                    <Col lg={3} md={6} xs={6} className="mb-4 mb-lg-0 trust-section-component">
                        <img src={locationIcon} alt="Locally Owned Icon" className="hero-panel-icon me-2" />
                        <p className="trust-label">LOCALLY OWNED</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HeroPanel;
