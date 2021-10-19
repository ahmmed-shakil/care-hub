import React from 'react';
import { Row } from 'react-bootstrap';
import useDoctors from '../../../hooks/useDoctors';
import SingleMember from '../SingleMember/SingleMember';

const Team = () => {
    const [doctors] = useDoctors();
    return (
        <div>
            <h3 className='fw-bold text-start pt-5'>MEET OUR DOCTORS</h3>
            <Row xs={1} md={2} lg={3} className='g-4'>
                {
                    doctors.map(doctor => <SingleMember key={doctor.id} doctor={doctor}></SingleMember>)
                }
            </Row>
        </div>
    );
};

export default Team;