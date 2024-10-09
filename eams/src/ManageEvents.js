import React, { useState } from 'react';

const ManageEvents = () => {
  // Sample data representing scheduled events
  const [events, setEvents] = useState([
    { id: 1, name: 'Art Workshop', date: '2024-10-10', time: '10:00', status: 'upcoming' },
    { id: 2, name: 'Science Fair', date: '2024-09-15', time: '14:00', status: 'past' },
    { id: 3, name: 'Music Concert', date: '2024-11-05', time: '18:00', status: 'upcoming' },
    { id: 4, name: 'Sports Day', date: '2024-08-20', time: '09:00', status: 'past' },
  ]);

  const [message, setMessage] = useState('');

  const handleCancelEvent = (id) => {
    // Filter out the canceled event from the events list
    const updatedEvents = events.filter(event => event.id !== id);
    setEvents(updatedEvents);
    
    // Set a cancellation message
    setMessage('Event has been successfully canceled.');

    // Automatically clear the message after 3 seconds
    setTimeout(() => {
      setMessage('');
    }, 3000);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Manage Events</h2>
      {message && <p style={{ color: 'red' }}>{message}</p>} {/* Display cancellation message */}

      <h3 style={styles.subHeading}>Upcoming Events</h3>
      <ul style={styles.eventList}>
        {events.filter(event => event.status === 'upcoming').map(event => (
          <li key={event.id} style={styles.eventItem}>
            <span>
              <strong>{event.name}</strong> - {event.date} at {event.time}
            </span>
            <button 
              style={styles.cancelButton} 
              onClick={() => handleCancelEvent(event.id)}
            >
              Cancel
            </button>
          </li>
        ))}
      </ul>

      <h3 style={styles.subHeading}>Past Events</h3>
      <ul style={styles.eventList}>
        {events.filter(event => event.status === 'past').map(event => (
          <li key={event.id} style={styles.eventItem}>
            <span>
              <strong>{event.name}</strong> - {event.date} at {event.time}
            </span>
            <button 
              style={styles.cancelButton} 
              onClick={() => handleCancelEvent(event.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Styles for the ManageEvents component
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
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
    padding: '15px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#FF4136',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default ManageEvents;
