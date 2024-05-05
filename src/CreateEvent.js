import React, { useState } from 'react';
import './CreateEvent.css';
import {  useNavigate } from 'react-router-dom';


function CreateEvent() {
    const [formData, setFormData] = useState({
        eventName: '',
        eventDate: '',
        eventTime: '',
        eventLocation: '',
        eventDescription: '',
        eventGoals: '',
        eventimage: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.values(formData).every(value => value !== '')) {
            console.log(formData);
            navigate('/EventCreated');
        } else {
            alert('Please fill in all fields.');
        }
    };

    return (
        <div className="event-creation-form">
            <h2>Create New Event</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Event Name:</label>
                    <input type="text" id="eventName" name="eventName" value={formData.eventName} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Event Date:</label>
                    <input type="date" id="eventDate" name="eventDate" value={formData.eventDate} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Event Time:</label>
                    <input type="time" id="eventTime" name="eventTime" value={formData.eventTime} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Event Location:</label>
                    <input type="text" id="eventLocation" name="eventLocation" value={formData.eventLocation} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Event Description:</label>
                    <textarea type="text" id="eventDescription" name="eventDescription" value={formData.eventDescription} onChange={handleChange} required></textarea>
                </div>
                <div className="form-group">
                    <label>Event Goals:</label>
                    <textarea type="text" id="eventGoals" name="eventGoals" value={formData.eventGoals} onChange={handleChange} required></textarea>
                </div>
                <div className="form-group">
                    <label>Event Image/Video:</label>
                    <input type="file" id="eventimage" name="eventimage" value={formData.eventimage} onChange={handleChange} accept='image/*, video/*' required />
                </div>
                <div className="button-container">
                    <button type='submit' className="button">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default CreateEvent