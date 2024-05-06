import React from 'react'
import './ContactUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faEnvelope, faInstagram } from '@fortawesome/free-solid-svg-icons';

function ContactUs() {
    return (
        <div className="contact-us-container">
            <h1>Contact Us</h1><br />
            <div className="contact-cards-container">
                <div className="contact-card">
                    <h3>Mobile Number</h3>
                    <FontAwesomeIcon icon={faMobileAlt} />
                    <p>+1234567890</p>
                </div>
                <div className="contact-card">
                    <h3>Email Address</h3>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <p>example@example.com</p>
                </div>
                <div className="contact-card">
                    <h3>Location</h3>
                    <div className="map-container">
                        <iframe
                            title="Location"
                            src="https://www.google.com/maps/embed/v1/place?q=TalentSprint,+APHB+Colony,+Indira+Nagar,+Gachibowli,+Hyderabad,+Telangana,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                        ></iframe>
                    </div>
                </div>
            </div>

            <div className="contact-form-container">
                <h2>GET IN TOUCH</h2><br />
                <form>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address:</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="mobile">Mobile Number:</label>
                            <input type="tel" id="mobile" name="mobile" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject:</label>
                            <input type="text" id="subject" name="subject" required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactUs