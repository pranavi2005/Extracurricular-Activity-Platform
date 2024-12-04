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
  const [editEvent, setEditEvent] = useState(null); // State to hold event being edited

  const handleCancelEvent = (id) => {
    const updatedEvents = events.filter(event => event.id !== id);
    setEvents(updatedEvents);
    setMessage('Event has been successfully canceled.');
    setTimeout(() => setMessage(''), 3000);
  };

  const handleEditEvent = (event) => {
    setEditEvent(event); // Set the event to be edited
  };

  const handleUpdateEvent = () => {
    const updatedEvents = events.map(event =>
      event.id === editEvent.id ? editEvent : event
    );
    setEvents(updatedEvents);
    setEditEvent(null); // Clear the edit form
    setMessage('Event has been successfully updated.');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Manage Events</h2>
      {message && <p style={{ color: 'red' }}>{message}</p>}

      <h3 style={styles.subHeading}>Upcoming Events</h3>
      <ul style={styles.eventList}>
        {events.filter(event => event.status === 'upcoming').map(event => (
          <li key={event.id} style={styles.eventItem}>
            <span>
              <strong>{event.name}</strong> - {event.date} at {event.time}
            </span>
            <div>
              <button 
                style={styles.cancelButton} 
                onClick={() => handleCancelEvent(event.id)}
              >
                Cancel
              </button>
              <button 
                style={styles.updateButton} 
                onClick={() => handleEditEvent(event)}
              >
                Update
              </button>
            </div>
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
          </li>
        ))}
      </ul>

      {editEvent && (
        <div style={styles.editForm}>
          <h3>Edit Event</h3>
          <label>
            Name:
            <input
              type="text"
              value={editEvent.name}
              onChange={(e) => setEditEvent({ ...editEvent, name: e.target.value })}
            />
          </label>
          <label>
            Date:
            <input
              type="date"
              value={editEvent.date}
              onChange={(e) => setEditEvent({ ...editEvent, date: e.target.value })}
            />
          </label>
          <label>
            Time:
            <input
              type="time"
              value={editEvent.time}
              onChange={(e) => setEditEvent({ ...editEvent, time: e.target.value })}
            />
          </label>
          <button style={styles.saveButton} onClick={handleUpdateEvent}>Save</button>
        </div>
      )}
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
    marginLeft: '5px',
  },
  updateButton: {
    backgroundColor: '#0074D9',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginLeft: '5px',
  },
  editForm: {
    marginTop: '20px',
    padding: '15px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  },
  saveButton: {
    backgroundColor: '#2ECC40',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default ManageEvents;
