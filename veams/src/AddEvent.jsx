import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddEvent = () => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [eventVenue, setEventVenue] = useState(''); // Added venue state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create the event object
    const newEvent = {
      name: eventName,
      date: eventDate,
      time: eventTime,
      venue: eventVenue, // Added venue to event object
    };

    try {
      await axios.post('http://localhost:8081/api/events', newEvent);
      alert('Event successfully added!');
      navigate('/admin-dashboard');
    } catch (err) {
      console.error('Error adding event:', err.message);
      alert('Error adding event. Please try again.');
    }
  };

  const handleCancel = () => {
    navigate('/admin-dashboard');
  };

  return (
    <div style={styles.container}>
      <h2>Add New Event</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label>Event Name:</label>
          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label>Date:</label>
          <input
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label>Time:</label>
          <input
            type="time"
            value={eventTime}
            onChange={(e) => setEventTime(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label>Venue:</label>
          <input
            type="text"
            value={eventVenue}
            onChange={(e) => setEventVenue(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.submitButton}>Add Event</button>
        <button type="button" onClick={handleCancel} style={styles.cancelButton}>Cancel</button>
      </form>
    </div>
  );
};

// Inline styles for the AddEvent component
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    width: '100%',
  },
  submitButton: {
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    padding: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '10px',
  },
  cancelButton: {
    backgroundColor: '#FF4136',
    color: '#fff',
    border: 'none',
    padding: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default AddEvent;
