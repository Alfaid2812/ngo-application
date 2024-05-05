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
                <li><a  className='navbar-link'>About Us</a></li>
                <li><a  className='navbar-link'>Events</a></li>
                <li><a  className='navbar-link'>Contact Us</a></li>
            </ul>
        </nav>
    )
}

export default Navbar