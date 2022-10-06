import React from 'react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import './header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from "react";

const Header = () => {

    const [open, setOpen] = useState(false)

    useEffect(() => {

    }, [open]);

    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };

    return (
        <Navbar bg="dark" expand="lg" className='navbar navbar-expand-sm fixed-top'>

            <Container>
                <Navbar.Brand href='/' className='navbar-brand'><span>H</span>ygieia Fitness</Navbar.Brand>
                {Auth.loggedIn() ? (

                    <>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link onClick={() => setOpen(false)} className='nav-link' aria-controls="basic-navbar-nav" href="/profile">Me</Nav.Link>
                                <a className='nav-link' href="/" onClick={logout}>
                                    Logout
                                </a>
                            </Nav>
                        </Navbar.Collapse>
                    </>

                ) : (

                    <>
                        <Navbar.Brand onClick={() => setOpen(false)} id="close-button" htmlFor="nav" className="nav-btn"></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link onClick={() => setOpen(false)} className='nav-link' aria-controls="basic-navbar-nav" href="/">Home</Nav.Link>
                                <Nav.Link onClick={() => setOpen(false)} className='nav-link' aria-controls="basic-navbar-nav" href="/login">Login</Nav.Link>
                                <Nav.Link onClick={() => setOpen(false)} className='nav-link' aria-controls="basic-navbar-nav" href="/signup">Signup</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>

                    </>
                )};

            </Container>

        </Navbar>

    );
};

export default Header;




