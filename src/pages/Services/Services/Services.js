import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';
import SingleService from '../SingleService/SingleService';

const Services = () => {
    const [services] = useServices();
    return (
        <div className='my-5 py-md-5 mx-md-5'>
            <Container fluid>
                <h2 className='py-3 fw-bold text-start'>Explore Our Caring & Premium <br /> Medical Services</h2>
                <Row xs={1} md={2} lg={3} className='g-4'>
                    {
                        services.map(service => <SingleService key={service.id} service={service}></SingleService>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;