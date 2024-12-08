import React from 'react';

const TrackParticipation = () => {
  // Static event details
  const upcomingEvents = [
    {
      id: 1,
      name: "90's Melodies",
      date: '2024-12-04',
      time: '18:30',
      venue: 'Auditorium',
    },
    {
      id: 2,
      name: 'Cloud Computing',
      date: '2024-12-03',
      time: '16:00',
      venue: 'R402',
    },
  ];

  const handleCancelRegistration = (eventId) => {
    // Simulating cancellation (not persisting changes)
    alert('Registration canceled successfully for event ID: ' + eventId);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Track Participation</h1>
      
      <h2 style={styles.subHeading}>All Events</h2>
      <ul style={styles.eventList}>
        {upcomingEvents && upcomingEvents.length > 0 ? (
          upcomingEvents.map((event) => (
            <li key={event.id} style={styles.eventItem}>
              <div>
                <strong>{event.name}</strong>
                <p>Date: {event.date}</p>
                <p>Time: {event.time}</p>
                <p>Venue: {event.venue}</p>
              </div>
              <button 
                onClick={() => handleCancelRegistration(event.id)} 
                style={styles.cancelButton}>
                Cancel Registration
              </button>
            </li>
          ))
        ) : (
          <p>No upcoming events</p>
        )}
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
