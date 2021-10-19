import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'

const Register = () => {
    const { handleRegistration, handleEmailChange, handlePasswordChange, error, handleNameChange, handleGoogleSignIn, removeError, text } = useAuth();
    return (
        <div>
            <div className='pt-md-5 fw-bold text-danger'>{error}</div>
            <div className='pt-md-5 fw-bold text-success'>{text}</div>
            <div className='login-page'>
                <Container>
                    <Row>
                        <Col lg={6} sm={12} className='login-form p-3 pt-0 text-start fs-5'>
                            <h2 className='text-uppercase login-header py-3'>Register</h2>

                            <Form onSubmit={handleRegistration}>

                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control type="text" onBlur={handleNameChange} placeholder="Enter Name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" onBlur={handleEmailChange} placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" onBlur={handlePasswordChange} placeholder="Password" />
                                </Form.Group>
                                <Button className='w-100' variant="dark fw-bold" type="submit">
                                    Submit
                                </Button>
                            </Form>
                            <div className='pt-3'>
                                <h4 className='fs-6'>Already Registered? <NavLink onClick={removeError} className='text-dark' to={'/login'}>Login</NavLink></h4>
                            </div>
                            <Button onClick={handleGoogleSignIn}> <i className='fab fa-google'></i> Google Sign In</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Register;