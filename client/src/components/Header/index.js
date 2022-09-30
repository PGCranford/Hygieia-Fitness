import HeaderImg from '../../images/header02.jpg'
import custom01 from '../../images/custom01.jpg'
import custom02 from '../../images/custom02.jpg'
import custom03 from '../../images/custom03.jpg'

import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const Header = () => {
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };
    return (
        <>
            <nav className='navbar navbar-expand-sm fixed-top'>
                <a href='/' className='navbar-brand'><span>H</span>ygieia Fitness</a>

                {Auth.loggedIn() ? (
                    <>
                        <Link to="/profile">Me</Link>
                        <a href="/" onClick={logout}>
                            Logout
                        </a>
                    </>
                ) : (
                    <div className='nav-item'>
                        <Link className='nav-link' to="/">Home</Link>
                        <Link className='nav-link' to="/login">Login</Link>
                        <Link className='nav-link' to="/signup">Signup</Link>
                    </div>
                )}
            </nav>

            <div className='header'>
                <div>
                    <div className='img'>
                        <img src={HeaderImg} alt='' />
                    </div>
                    <div className='overlay'></div>
                </div>
                <div className='content'>
                    <h6>Build Your Fitness World <br /> By Building Your Body</h6>
                    <button className='btn'>Join Now</button>
                </div>
            </div>

            <section>
                <div className='custom container'>
                    <div className='row'>
                        <div className='col-sm-4'>
                            <div className='box'>
                                <img src={custom01} className='img-fluid' alt='' />
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='box'>
                                <img src={custom02} className='img-fluid' alt='' />
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='box'>
                                <img src={custom03} className='img-fluid' alt='' />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Header;