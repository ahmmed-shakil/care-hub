
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth'
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className='mb-5'>
            <Navbar collapseOnSelect expand="lg" bg="white" className='p-2 text-uppercase' fixed="top">
                <Container>
                    <Navbar.Brand href="#home" className='fs-3 fw-bolder'><span className='text-color'><i className="fas fa-heartbeat"></i>CAREHUB</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto nav-items d-flex align-items-center">
                            <NavLink className='nav-item' to="/home">Home</NavLink>
                            <NavLink className='nav-item' to="/services">Services</NavLink>
                            <NavLink className='nav-item' to="/contact">Contact</NavLink>
                            <NavLink className='nav-item' to="/about">About</NavLink>
                            {
                                !user.email ? <span>
                                    <Button className='btn-styled ms-3 my-3 btn-sm text-uppercase'><NavLink className='text-dark text-decoration-none fw-bold' to="/register">Sign Up</NavLink></Button>
                                    <Button className='btn-styled mx-3 my-3 btn-sm text-uppercase'><NavLink className='text-dark text-decoration-none fw-bold' to="/login">Log In</NavLink></Button>
                                </span>
                                    :
                                    <Button onClick={logOut} className='btn-styled mx-2 my-3 btn-sm text-uppercase'><NavLink className='text-dark text-decoration-none fw-bold' to="/home">Log Out</NavLink></Button>
                            }
                        </Nav>
                        <Nav>
                            <Navbar.Text>
                                {
                                    user.email ?
                                        <span className='text-capitalize text-dark fw-bold'>
                                            {user.displayName}
                                        </span>

                                        :
                                        ''
                                }
                            </Navbar.Text>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;