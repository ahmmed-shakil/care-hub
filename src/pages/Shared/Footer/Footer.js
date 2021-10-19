import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-bg'>
            <Container>
                <Row className='text-start py-5 text-white'>
                    <Col lg={5} sm={12}>
                        <h3><span className='text-color'><i className="fas fa-heartbeat"></i>CAREHUB</span></h3>
                        <p className='text-white py-3'>Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for your family healthcare</p>
                    </Col>
                    <Col lg={3} sm={12}>
                        <h3>Opening Hours</h3>
                        <div className='py-3'>
                            <h5 className='d-flex justify-content-between'>
                                <span>Mon-Tues :</span>
                                <span>6:00-10:00</span>
                            </h5>
                            <h5 className='d-flex justify-content-between'>
                                <span>Wed - Thurs :</span>
                                <span>6:00-10:00</span>
                            </h5>
                            <h5 className='d-flex justify-content-between'>
                                <span>Sat - Sun :</span>
                                <span>6:00-10:00</span>
                            </h5>
                            <h5 className='d-flex justify-content-between'>
                                <span>Friday :</span>
                                <span>Closed</span>
                            </h5>
                        </div>
                    </Col>
                    <Col lg={4} sm={12}>
                        <h3 className='pb-3'>Get In Touch</h3>
                        <div className='d-flex align-items-center mb-3'>
                            <i className="fas fa-map-marker-alt fa-2x px-4"></i>
                            <span>
                                <h6>2130 Fulton Street San</h6>
                                <h6>Diego CA 94117-1080 USA</h6>
                            </span>
                        </div>
                        <div className='d-flex align-items-center mb-3'>
                            <i className="fas fa-envelope fa-2x px-4"></i>
                            <span>
                                <small>Do you have a Question?</small>
                                <h6>info@gmail.com</h6>
                            </span>
                        </div>
                        <div className='d-flex align-items-center'>
                            <i className="fas fa-phone fa-2x px-4"></i>
                            <span>
                                <small>Coll Us Now!</small>
                                <h6>+898 68679 575</h6>
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};


export default Footer;