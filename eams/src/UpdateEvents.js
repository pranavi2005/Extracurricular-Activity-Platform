import React, { useState } from 'react';

const UpdateEvents = () => {
  const [events, setEvents] = useState([
    { id: 1, name: 'Sports Day', date: '2024-05-10', time: '10:00 AM', venue: 'School Field' },
    { id: 2, name: 'Science Fair', date: '2024-10-20', time: '9:00 AM', venue: 'Main Hall' },
  ]);

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [updatedEvent, setUpdatedEvent] = useState({ name: '', date: '', time: '', venue: '' });
  const [message, setMessage] = useState('');

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setUpdatedEvent(event); // Populate form with the selected event's data
    setMessage('');
  };

  const handleUpdateEvent = () => {
    if (selectedEvent) {
      const updatedEvents = events.map((event) =>
        event.id === selectedEvent.id ? { ...event, ...updatedEvent } : event
      );
      setEvents(updatedEvents);
      setMessage('Event updated successfully!');
      setSelectedEvent(null); // Clear selected event
      setUpdatedEvent({ name: '', date: '', time: '', venue: '' }); // Clear form
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Update Events</h1>
      {message && <p style={styles.message}>{message}</p>}
      <h2 style={styles.subHeading}>Select an Event to Update:</h2>
      <ul style={styles.eventList}>
        {events.map((event) => (
          <li key={event.id} style={styles.eventItem} onClick={() => handleSelectEvent(event)}>
            {event.name} - <strong>{event.date}</strong> - <strong>{event.time}</strong> - <strong>{event.venue}</strong>
          </li>
        ))}
      </ul>

      {selectedEvent && (
        <div style={styles.formContainer}>
          <h3 style={styles.formHeading}>Update Event Details</h3>
          <input
            type="text"
            placeholder="Event Name"
            value={updatedEvent.name}
            onChange={(e) => setUpdatedEvent({ ...updatedEvent, name: e.target.value })}
            style={styles.input}
          />
          <input
            type="date"
            value={updatedEvent.date}
            onChange={(e) => setUpdatedEvent({ ...updatedEvent, date: e.target.value })}
            style={styles.input}
          />
          <input
            type="time"
            value={updatedEvent.time}
            onChange={(e) => setUpdatedEvent({ ...updatedEvent, time: e.target.value })}
            style={styles.input}
          />
          <input
            type="text"
            placeholder="Venue"
            value={updatedEvent.venue}
            onChange={(e) => setUpdatedEvent({ ...updatedEvent, venue: e.target.value })}
            style={styles.input}
          />
        </div>
      )}
      <button onClick={handleUpdateEvent} style={styles.updateButton}>
            Update Event
    </button>
    </div>
    
  );
};

// Inline Styles for the Update Events component
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    textAlign: 'center',
  },
  message: {
    color: 'green',
    textAlign: 'center',
  },
  subHeading: {
    marginTop: '20px',
    fontSize: '24px',
  },
  eventList: {
    listStyleType: 'none',
    padding: 0,
  },
  eventItem: {
    padding: '10px',
    margin: '5px 0',
    border: '1px solid #ccc',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  formContainer: {
    marginTop: '20px',
    textAlign: 'center',
  },
  formHeading: {
    marginBottom: '10px',
  },
  input: {
    padding: '10px',
    margin: '5px 0',
    width: '200px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  updateButton: {
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  backButton: {
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
};

export default UpdateEvents;
