import React from 'react';
import { Button, Card, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SingleService.css'

const SingleService = ({ service }) => {
    const { id, title, img, description } = service
    return (
        <div>
            <Col className='h-100 d-grid'>
                <Card className='border-0 shadow single-service rounded-2 p-2'>
                    <div>
                        <Image src={img} style={{ width: '100%', height: '280px', objectFit: 'cover' }} className='rounded-2' />
                    </div>
                    <div className='p-3 text-start'>
                        <h3 className='text-uppercase'> {title} </h3>
                        <p className='text-justify'>{description.slice(0, 130)}...</p>
                        <Link to={`/services/${id}`}><Button className='mb-0 btn-styled'>View More</Button></Link>
                    </div>
                </Card>
            </Col>
        </div >
    );
};

export default SingleService;