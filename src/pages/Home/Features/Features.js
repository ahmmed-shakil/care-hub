import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleFeature from '../SingleFeature/SingleFeature';

const Features = () => {
    const [features, setFeatures] = useState([])
    useEffect(() => {
        fetch('./features.json')
            .then(res => res.json())
            .then(data => setFeatures(data))
    }, [])
    return (
        <div className='mx-5'>
            <Container fluid>
                <Row>
                    <Row xs={2} md={3} className="g-0 features">

                        {
                            features.slice(0, 3).map(singleFeature => <SingleFeature key={singleFeature.id} feature={singleFeature}></SingleFeature>)
                        }

                    </Row>

                </Row>

            </Container>
        </div>
    );
};

export default Features;