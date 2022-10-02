import React from 'react'
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import '../../App.css';

function NavLinks(props) {
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
                    <div on onClick={() => props.isMobile && props.closeMobileMenu()}>
                        <Link className='nav-link' to="/">Home</Link>
                    </div>

                    <div on onClick={() => props.isMobile && props.closeMobileMenu()}>
                        <Link className='nav-link' to="/login">Login</Link>
                    </div>
                    <div on onClick={() => props.isMobile && props.closeMobileMenu()}>
                        <Link className='nav-link' to="/signup">Signup</Link>
                    </div>
                </div>
            )}
        </nav>

    );
};
export default NavLinks;


