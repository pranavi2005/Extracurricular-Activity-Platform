// src/TrackParticipation.js

import React, { useState } from 'react';

const pastEvents = [
  { id: 1, name: 'Art Workshop', date: '2024-10-15' },
  { id: 2, name: 'Sports Day', date: '2024-10-22' },
];

const upcomingEventsData = [
  { id: 3, name: 'Music Festival', date: '2024-11-05' },
  { id: 4, name: 'Coding Bootcamp', date: '2024-11-10' },
];

const TrackParticipation = () => {
  const [upcomingEvents, setUpcomingEvents] = useState(upcomingEventsData);

  const handleCancelRegistration = (eventId) => {
    // Filter out the canceled event
    const updatedEvents = upcomingEvents.filter((event) => event.id !== eventId);
    setUpcomingEvents(updatedEvents);
    alert('Registration canceled successfully!');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Track Participation</h1>
      
      <h2 style={styles.subHeading}>Past Events</h2>
      <ul style={styles.eventList}>
        {pastEvents.map((event) => (
          <li key={event.id} style={styles.eventItem}>
            {event.name} - {event.date}
          </li>
        ))}
      </ul>

      <h2 style={styles.subHeading}>Upcoming Events</h2>
      <ul style={styles.eventList}>
        {upcomingEvents.map((event) => (
          <li key={event.id} style={styles.eventItem}>
            {event.name} - {event.date} 
            <button 
              onClick={() => handleCancelRegistration(event.id)} 
              style={styles.cancelButton}>
              Cancel Registration
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Inline Styles for Track Participation
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

export default TrackParticipation;
