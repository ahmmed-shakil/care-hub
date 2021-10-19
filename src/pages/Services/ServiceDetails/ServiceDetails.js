import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useServices from '../../../hooks/useServices';
import { useHistory } from 'react-router-dom';

const ServiceDetails = (props) => {
    const history = useHistory();
    const { serviceId } = useParams();
    const [services] = useServices();
    const selectedService = services.find(service => {
        return service.id === parseInt(serviceId)
    })

    const goToAppointment = () => {
        history.push('/contact');
    }
    return (
        <div className='mt-5 pt-5'>
            <Container>
                <Row className='bg-dark text-start text-white py-md-4 mx-auto my-md-5'>
                    <Col lg={8} sm={12} className='mx-auto'>
                        <div className='d-md-flex align-items-center justify-content-between'>
                            <h4>Average Cost : ${selectedService?.cost}</h4>
                            <h4>Average Duration : {selectedService?.duration} weeks</h4>
                        </div>
                    </Col>
                </Row>
                <Row className='pt-5 d-flex align-items-center text-start'>
                    <Col lg={8} sm={12} className='mx-auto'>
                        <h2 className='text-uppercase'>{selectedService?.title}</h2>
                        <h5 className='py-4'>{selectedService?.description}</h5>
                    </Col>
                </Row>

                <Row>
                    <Col lg={8} sm={12} className='mx-auto'>
                        <Image src={selectedService?.img} className='d-block w-75 mx-auto rounded-3' />
                    </Col>
                </Row>
                <Button className='btn-dark my-4 w-100' onClick={goToAppointment}>BOOK APPOINTMENT</Button>
            </Container>
        </div>
    );
};

export default ServiceDetails;