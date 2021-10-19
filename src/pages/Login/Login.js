import React from 'react';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { handleLogin, handleEmailChange, handlePasswordChange, error, user, handleGoogleSignIn, setError } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'

    const signInUsingGoogle = () => {
        handleGoogleSignIn()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    const signInWIthEmail = (e) => {
        e.preventDefault();
        if (user.email) {
            handleLogin()
                .then(result => {
                    history.push(redirect_uri);
                })
                .then('login successful')
        }
        else {
            setError(`User not found. Please register`)
        }
    }
    return (
        <div>
            <div className='login-page'>
                <Container>
                    <Row className='pt-md-5'>
                        <Col lg={6} sm={12} className='login-form p-3 text-start fs-5'>
                            <h2 className='text-uppercase login-header py-3'>Log In</h2>
                            <Form onSubmit={signInWIthEmail}>
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
                                <h4 className='fs-6'>Don't have an account? <NavLink className='text-dark' to={'/register'}>Create a new one</NavLink></h4>
                            </div>
                            <Button onClick={signInUsingGoogle}>Google Sign In</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>{error}</div>
        </div>
    );
};

export default Login;