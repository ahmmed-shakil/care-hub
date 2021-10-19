import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useServices from '../../../hooks/useServices';

const ServiceDetails = (props) => {
    const { serviceId } = useParams();
    const [services] = useServices();
    const selectedService = services.find(service => {
        return service.id === parseInt(serviceId)
    })
    return (
        <div className='mt-5 pt-5'>
            <Container>
                <Row className='pt-5 d-flex align-items-center text-start'>
                    <Col lg={6} sm={12}>
                        <h2 className='text-uppercase'>{selectedService?.title}</h2>
                        <p className='py-4'>{selectedService?.description}</p>
                        <Button className='btn-dark'>BOOK APPOINMENT</Button>
                    </Col>
                    <Col lg={6} sm={12}>
                        <Image src={selectedService?.img} className='d-block w-75 mx-auto rounded-3' />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ServiceDetails;