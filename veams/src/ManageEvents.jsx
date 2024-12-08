import React, { useState, useEffect } from 'react';

const ManageEvents = () => {
  const [events, setEvents] = useState([]);
  const [message, setMessage] = useState('');
  const [editEvent, setEditEvent] = useState(null);

  // Fetch events from backend on component mount
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:8081/api/events');
        if (response.ok) {
          const data = await response.json();
          setEvents(data);
        } else {
          setMessage('Failed to fetch events');
        }
      } catch (error) {
        setMessage('Error fetching events');
      }
    };

    fetchEvents();
  }, []);

  const handleCancelEvent = async (name) => {
    try {
      const response = await fetch(`http://localhost:8081/api/events/${name}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Update the frontend state by removing the deleted event
        const updatedEvents = events.filter(event => event.name !== name);
        setEvents(updatedEvents);
        setMessage('Event has been successfully canceled.');
      } else {
        const errorData = await response.json();
        setMessage(`Failed to cancel event: ${errorData.message || 'Unknown error'}`);
      }
    } catch (error) {
      setMessage('Error canceling event');
    }

    // Clear the message after 3 seconds
    setTimeout(() => setMessage(''), 3000);
  };

  const handleEditEvent = (event) => {
    setEditEvent({ ...event }); // Make sure to copy the event before editing
  };

  const handleUpdateEvent = async () => {
    if (editEvent) {
        try {
            const response = await fetch(`http://localhost:8081/api/events/${editEvent.name}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editEvent),
            });

            if (response.ok) {
                const updatedEvents = events.map(event =>
                    event.name === editEvent.name ? editEvent : event
                );
                setEvents(updatedEvents);
                setEditEvent(null);
                setMessage('Event has been successfully updated.');
            } else {
                const errorData = await response.json();
                setMessage(`Failed to update event: ${errorData.message || 'Unknown error'}`);
            }
        } catch (error) {
            setMessage('Error updating event');
        }
        setTimeout(() => setMessage(''), 3000);
      }
  };


  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Manage Events</h2>
      {message && <p style={{ color: 'red' }}>{message}</p>}

      <ul style={styles.eventList}>
        {events.map(event => (
          <li key={event.name} style={styles.eventItem}>
            <span>
              <strong>{event.name}</strong><br/>
              Date : {event.date}<br/>
              Time : {event.time}<br/>
              Venue : {event.venue || 'N/A'}
            </span>
            <div>
              <button
                style={styles.cancelButton}
                onClick={() => handleCancelEvent(event.name)}
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
          <label>
            Venue:
            <input
              type="text"
              value={editEvent.venue}
              onChange={(e) => setEditEvent({ ...editEvent, venue: e.target.value })}
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
  eventDetails: {
    flex: 1,
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
