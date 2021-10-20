import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { handleLogin, handleEmailChange, handlePasswordChange, logInError, handleGoogleSignIn, removeError, setLogInError, setIsLoading, setUserName } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'

    const signInUsingGoogle = () => {
        handleGoogleSignIn()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    const userLogin = e => {
        e.preventDefault();
        handleLogin()
            .then(result => {
                setUserName();
                setLogInError('')
                history.push(redirect_uri)
                if (redirect_uri) {
                    setLogInError('');
                }
            })
            .catch(err => {
                if (err.code === 'auth/user-not-found') {
                    setLogInError('User not found.Please create a new account')
                }
                else if (err.code === 'auth/wrong-password') {
                    setLogInError('Wrong password')
                }
                else {

                }
            })
            .finally(() => setIsLoading(false))
    }

    return (
        <div>
            <div className='login-page'>
                <Container className='pt-5'>
                    <Row>
                        <Col lg={6} sm={12} className='login-form p-3 pt-0 text-start fs-5'>
                            <h2 className='text-uppercase login-header pb-3'>Log In</h2>
                            <Form onSubmit={userLogin}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" onBlur={handleEmailChange} placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" onBlur={handlePasswordChange} placeholder="Password" />
                                </Form.Group>
                                <Button className='w-100' variant="dark fw-bold" type="submit">
                                    Login
                                </Button>
                            </Form>
                            <p className='text-danger pt-2 fs-6 fw-bold'>{logInError}</p>
                            <div>
                                <h4 className='fs-6'>Don't have an account? <NavLink className='text-dark' to={'/register'} onClick={removeError}>Create a new one</NavLink></h4>
                            </div>
                            <Button onClick={signInUsingGoogle}><i className='fab fa-google'></i> Google Sign In</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Login;