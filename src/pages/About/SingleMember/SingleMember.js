import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';

const SingleMember = ({ doctor }) => {
    const { name, post, img } = doctor;
    return (
        <Col className='d-grid h-100 text-start py-3'>
            <Card className='p-2 rounded fw-bold single-service'>
                <div>
                    <Image src={img} className='rounded w-100' />
                </div>
                <div className='p-1 pt-3'>
                    <p className='my-0 py-1'>{post}</p>
                    <h4>{name}</h4>
                </div>
            </Card>
        </Col>
    );
};

export default SingleMember;