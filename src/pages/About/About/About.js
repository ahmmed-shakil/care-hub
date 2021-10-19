import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Team from '../Team/Team';
import './About.css'

const About = () => {
    return (
        <div className='pt-1'>
            <div className='about-header py-3'>
                <Container className='text-start py-5'>
                    <Row>
                        <Col lg={7} sm={12} className='ms-0 pe-md-3 text-dark mx-auto'>
                            <h2 className='fw-bold'>ABOUT CAREHUB</h2>
                            <h4 className='my-3'>We Provide Total Health Care Solution</h4>
                            <p className='fs-5'>In March 2015 the Region’s first Private Emergency Department was opened at CareHub Private, providing another option for people requiring emergency care. The Emergency Department has 6 beds including a state of the art resuscitation room, triage room and procedure room. The enthusiastic team of emergency trained doctors and nurses provide prompt and professional care 24 hours a day, 365 days of the year.
                            </p>
                        </Col>
                        <Col lg={5} sm={12}>
                            <Image src='https://i.ibb.co/wWpTVJm/cardiology-1.jpg' className='d-block ms-auto w-100 rounded-3' />
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container className='py-3'>
                <Team></Team>
            </Container>

        </div>
    );
};

export default About;