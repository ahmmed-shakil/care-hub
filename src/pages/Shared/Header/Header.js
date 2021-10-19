
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth'
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className='mb-5'>
            <Navbar collapseOnSelect expand="lg" bg="white" className='p-2 fw-bold text-uppercase' fixed="top">
                <Container>
                    <Navbar.Brand href="#home" className='fs-3'><span className='text-color'><i className="fas fa-heartbeat"></i>CAREHUB</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto nav-items d-flex align-items-center">
                            <NavLink className='nav-item' to="/home">Home</NavLink>
                            <NavLink className='nav-item' to="/services">Services</NavLink>
                            <NavLink className='nav-item' to="/contact">Contact</NavLink>
                            <NavLink className='nav-item' to="/about">About</NavLink>
                            {
                                !user.email ? <Button className='btn-styled mx-3 btn-sm text-uppercase'><NavLink className='text-white fw-bold' to="/login">Login</NavLink></Button>
                                    :
                                    <Button onClick={logOut} className='btn-styled mx-3 btn-sm text-uppercase'><NavLink className='text-white fw-bold' to="/home">Log Out</NavLink></Button>
                            }
                        </Nav>
                        <Navbar.Text>
                            {
                                user.email ?
                                    <span>
                                        Signed in: {user.displayName}
                                    </span>

                                    :
                                    ''
                            }
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;