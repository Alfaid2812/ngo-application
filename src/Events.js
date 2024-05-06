import React from 'react'
import './Events.css';
import event1 from './images/event-1.jpg';
import event2 from './images/event-2.jpg';
import event3 from './images/event-3.jpg';
import event4 from './images/event-4.jpg';


function Events() {
  return (
    <div className="events-page-container">
    <h2>Upcoming Events</h2><br/>
    <div className="event-card">
        <div className="event-image">
            <img src={event1} alt="Event" />
        </div>
        <div className="event-details">
            <h3>Community Clean-up Day</h3><br/>
            <p>Join us for a day of cleaning up our local community park. Help make our neighborhood cleaner and greener!</p>
            <p><b>Date:</b> January 1, 2025</p>
            <p><b>Time:</b> 10:00 AM - 12:00 PM</p>
            <p><b>Location:</b> Green Park,City, Country</p>
        </div>
    </div>
    <div className="event-card">
        <div className="event-image">
            <img src={event2} alt="Event" />
        </div>
        <div className="event-details">
            <h3>Health and Wellness Fair</h3><br/>
            <p>A day of health and wellness activities for the whole family. Enjoy fitness classes, health screenings, nutrition workshops, and more!</p>
            <p><b>Date:</b> August 1, 2025</p>
            <p><b>Time:</b> 10:00 AM - 12:00 PM</p>
            <p><b>Location:</b> Green Park,City, Country</p>
        </div>
    </div>
    <div className="event-card">
        <div className="event-image">
            <img src={event3} alt="Event" />
        </div>
        <div className="event-details">
            <h3>Beach Cleanup</h3><br/>
            <p>Help clean up our local beach and protect marine life. Gloves and bags provided.</p>
            <p><b>Date:</b> June 1, 2025</p>
            <p><b>Time:</b> 9:00 AM - 11:00 AM</p>
            <p><b>Location:</b> Sunny Beach,City, Country</p>
        </div>
    </div>
    <div className="event-card">
        <div className="event-image">
            <img src={event4} alt="Event" />
        </div>
        <div className="event-details">
            <h3>Tree Planting Event</h3><br/>
            <p>Help us plant trees to increase greenery in our city. Every tree makes a difference!</p>
            <p><b>Date:</b> March 20, 2025</p>
            <p><b>Time:</b> 1:00 PM - 3:00 PM</p>
            <p><b>Location:</b> City Park,City, Country</p>
        </div>
    </div>
  
</div>
  )
}

export default Events