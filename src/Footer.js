import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h3>About Us</h3>
                    <p>Learn more about our organization and mission.</p>
                    <a><Link to='/aboutus'>Read More</Link></a>
                </div>
                <div className="footer-column">
                    <h3>Events</h3>
                    <p>Explore upcoming events and register.</p>
                    <a><Link to='/events'>View Events</Link></a>
                </div>
                <div className="footer-column">
                    <h3>Contact Us</h3>
                    <p>Get in touch with us for inquiries and support.</p>
                    <a><Link to='/contactus'>Contact Us</Link></a>
                </div>
                <div className="footer-column">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 EventHub. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer