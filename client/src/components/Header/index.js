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
        if (!open) {
            document.getElementById("close-button").click()
        }
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
                                <Link className='nav-link' to="/profile">Me</Link>
                                <a className='nav-link' href="/" onClick={logout}>
                                    Logout
                                </a>
                            </Nav>
                        </Navbar.Collapse>
                    </>

                ) : (

                    <>
                        <label onClick={() => setOpen(true)} id="close-button" htmlFor="nav" className="nav-btn">
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Link onClick={() => setOpen(false)} className='nav-link' to="/">Home</Link>
                                    <Link onClick={() => setOpen(false)} className='nav-link' to="/login">Login</Link>
                                    <Link onClick={() => setOpen(false)} className='nav-link' to="/signup">Signup</Link>
                                </Nav>
                            </Navbar.Collapse>
                        </label>
                    </>
                )};

            </Container>

        </Navbar>

    );
};

export default Header;




