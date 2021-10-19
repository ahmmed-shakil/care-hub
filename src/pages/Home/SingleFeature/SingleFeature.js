import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './SingleFeature.css'

const SingleFeature = ({ feature }) => {
    const { title, description } = feature;
    return (
        <div className='feature'>
            <Col className='h-100 d-grid text-start'>
                <Card className='p-3 pe-0 pb-0 d-flex flex-column align-content-center feature border-0 shadow-lg'>
                    <h3 className='my-3 fw-bold feature-header'>{title}</h3>
                    <p className='pt-3 pb-0'>{description}</p>
                </Card>
            </Col>
        </div>
    );
};

export default SingleFeature;