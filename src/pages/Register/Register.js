import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'

const Register = () => {
    const { handleRegistration, handleEmailChange, handlePasswordChange, registrationError, handleNameChange, handleGoogleSignIn, removeError, setRegistrationError, setIsLoading, setUserName } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'

    const signInUsingGoogle = () => {
        handleGoogleSignIn()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    const userRegistration = e => {
        e.preventDefault(e);
        handleRegistration()
            .then(result => {
                setRegistrationError('')
                setUserName()
                history.push(redirect_uri);
                if (redirect_uri) {
                    setRegistrationError('');
                }
                window.location.reload();
            })
            .catch(err => {
                if (err.code === 'auth/email-already-in-use') {
                    setRegistrationError('This email is already in use. Please select a new email')
                }
                else if (err.code === 'auth/weak-password') {
                    setRegistrationError('Password must be at least 6 characters long')
                }
                else {
                    setRegistrationError(err.code)
                }

            })
            .finally(() => {
                setIsLoading(false);
            }
            )
    }
    return (
        <div>
            <div className='login-page pt-md-5'>
                <Container>
                    <Row>
                        <Col lg={6} sm={12} className='login-form p-3 pt-0 text-start fs-5'>
                            <h2 className='text-uppercase login-header py-3'>Register</h2>

                            <Form onSubmit={userRegistration}>

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
                                    Register
                                </Button>
                            </Form>
                            <p className='text-danger pt-2 fs-6 fw-bold'>{registrationError}</p>
                            <div className='pt-3'>
                                <h4 className='fs-6'>Already Registered? <NavLink onClick={removeError} className='text-dark' to={'/login'}>Login</NavLink></h4>
                            </div>
                            <Button onClick={signInUsingGoogle}> <i className='fab fa-google'></i> Google Sign In</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Register;