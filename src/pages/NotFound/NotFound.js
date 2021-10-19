import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='error-page d-flex align-items-center justify-content-center'>
            <div>
                <h1 className='fw-bolder'>404</h1>
                <h5>Page not found!</h5>
            </div>
        </div>
    );
};

export default NotFound;