import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

function HeroSection() {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-content">
                    <h1>Empower Your Cause with Event Hub</h1>
                    <p>Create and manage impactful events seamlessly.</p>
                    <a className="btn"><Link to='/CreateEvent'>Create Event</Link></a>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
