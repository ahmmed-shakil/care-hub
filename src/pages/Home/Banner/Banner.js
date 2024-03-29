import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Banner.css'

const Banner = () => {
    const history = useHistory()
    const goToServices = () => {
        history.push('/services')
    }
    const gotToContacts = () => {
        history.push('/contact')
    }
    return (
        <div className='banner'>
            <Container>
                <Row className='d-flex align-items-center pt-5'>
                    <Col lg={6} sm={12} className='text-md-start'>
                        <h1 className='fw-bold'>We Provide Total Health Care Solution</h1>
                        <p className='fs-5 my-5'>We  believe in highest professional competence with a human touch and will deliver excellent medical treatment to everyone. We will follow rational and ethical medical practices implicitly. We are committed to medico-social services.</p>
                        <div className='d-flex flex-md-row flex-column'>
                            <Button className='rounded-pill btn-regular btn-lg' onClick={goToServices}>OUR SERVICES</Button>
                            <Button className='rounded-pill btn-lg btn-styled mx-md-4 my-md-0 my-3' onClick={gotToContacts}>CONTACT NOW</Button>
                        </div>
                    </Col>
                    <Col lg={6} sm={12}>
                        <Image className='d-block mb-0 w-75 mx-auto' fluid src='https://i.ibb.co/T20NH41/banner-img.png' />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;