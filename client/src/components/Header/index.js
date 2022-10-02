import React from 'react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {

    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };
    return (

        <nav className='navbar navbar-expand-sm fixed-top'>
            <a href='/' className='navbar-brand'><span>H</span>ygieia Fitness</a>
            {Auth.loggedIn() ? (
                <>
                    <div className='navbar-brand'>
                        <Link to="/profile">Me</Link>
                        <a href="/" onClick={logout}>
                            Logout
                        </a>
                    </div>
                </>
            ) : (
                <div className='navbar-nav'>
                    <Link className='nav-link' to="/Homepage">Home</Link>
                    <Link className='nav-link' to="/profile">Profile</Link>
                    <Link className='nav-link' to="/login">Login</Link>
                    <Link className='nav-link' to="/signup">Signup</Link>
                </div>

            )};
        </nav>


    );
};

export default Header;




