import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import './HeroSection.css'

const HeroSection = () => {
    return (
        <div>
            <Row className='hero align-items-center pt-5 pt-md-0 m-3'>
                <Col lg={6} sm={12} className='hero-img'>
                    <Image src='https://i.ibb.co/Qj1CpZp/image-1.png' fluid />
                </Col>
                <Col lg={6} sm={12} className='p-md-5 text-start'>
                    <h2 className='fw-bold mb-5'>We Can Give You The <br />
                        Grin You've Generally Needed.</h2>
                    <p className='my-4 fs-5'>This Private Hospital is certified to the 10 National Safety and Quality Health Service Standards through the Australian Council of Healthcare Standards. Certification demonstrates that we are committed to quality, customer care and satisfaction and that we are regularly reviewed by an external auditor to ensure we are following the approved processes.</p>
                    <div className='my-md-5 p-md-3 specializes fw-bold text-dark'>
                        <h4 className='fs-5'><i className="fas fa-clinic-medical fw-bolder"></i> Always Open</h4>
                        <h4 className='fs-5'><i className="fas fa-clinic-medical fw-bolder"></i> Reporting & Analysis</h4>
                        <h4 className='fs-5'><i className="fas fa-clinic-medical fw-bolder"></i> Specialist Doctor</h4>
                        <h4 className='fs-5'><i className="fas fa-clinic-medical fw-bolder"></i> Technical Medical audit</h4>
                        <h4 className='fs-5'><i className="fas fa-clinic-medical fw-bolder"></i> Ambulance Facility</h4>
                        <h4 className='fs-5'><i className="fas fa-clinic-medical fw-bolder"></i> Health Certificates</h4>
                        <h4 className='fs-5'><i className="fas fa-clinic-medical fw-bolder"></i> Laboratory Test</h4>
                        <h4 className='fs-5'><i className="fas fa-clinic-medical fw-bolder"></i> Referral Services</h4>
                    </div>
                    <h4 className='fw-bold'>Dr. Mike William</h4>
                    <p className='text-primary fw-bold'>(Chairman & Founder)</p>
                </Col>
            </Row>
        </div >
    );
};

export default HeroSection;