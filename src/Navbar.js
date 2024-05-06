import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
import Home from './Home';

function Navbar() {
    return (
        <nav className='navbar'>
            <ul className='navbar-list'>
                <li><a className='logo'>Event Hub</a></li>
                <li><a className='navbar-link'><Link to='/home'>Home</Link></a></li>
                <li><a className='navbar-link'><Link to='/aboutus'>About Us</Link></a></li>
                <li><a className='navbar-link'><Link to='/events'>Events</Link></a></li>
                <li><a className='navbar-link'><Link to='/contactus'>Contact Us</Link></a></li>
            </ul>
        </nav>
    )
}

export default Navbar