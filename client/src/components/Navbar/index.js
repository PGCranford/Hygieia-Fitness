import React from 'react';

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-sm fixed-top'>
            <a href='/' className='navbar-brand'><span>H</span>ygieia Fitness</a>
            <div>
                <ul className='navbar-nav'>
                    <li className='nav-item'><a href='/' className='nav-link'>Home</a></li>
                    <li className='nav-item'><a href='/' className='nav-link'>Login</a></li>
                    <li className='nav-item'><a href='/' className='nav-link'>Signup</a></li>
                    <li className='nav-item'><a href='/' className='nav-link'>Profile</a></li>
                    <li className='nav-item'><a href='/' className='nav-link'>Comments</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar