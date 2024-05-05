import React from 'react'
import './Navbar.css';

function Navbar() {
    return (
        <nav className='navbar'>
            <ul className='navbar-list'>
                <li><a className='logo'>Event Hub</a></li>
                <li><a href="#" className='navbar-link'>Home</a></li>
                <li><a href="#" className='navbar-link'>About Us</a></li>
                <li><a href="#" className='navbar-link'>Events</a></li>
                <li><a href="#" className='navbar-link'>Contact Us</a></li>
            </ul>
        </nav>
    )
}

export default Navbar