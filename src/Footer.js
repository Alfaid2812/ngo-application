import React from 'react'
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h3>About Us</h3>
                    <p>Learn more about our organization and mission.</p>
                    <a href="/about">Read More</a>
                </div>
                <div className="footer-column">
                    <h3>Events</h3>
                    <p>Explore upcoming events and register.</p>
                    <a href="/events">View Events</a>
                </div>
                <div className="footer-column">
                    <h3>Contact Us</h3>
                    <p>Get in touch with us for inquiries and support.</p>
                    <a href="/contact">Contact Us</a>
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