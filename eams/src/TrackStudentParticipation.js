import React, { useState } from 'react';

const TrackStudentParticipation = () => {
  const [username, setUsername] = useState('');
  const [participationData, setParticipationData] = useState(null);
  const [message, setMessage] = useState('');

  // Sample data for demonstration purposes
  const studentData = {
    user1: {
      pastEvents: [
        { name: 'Sports Day', date: '2024-05-10' },
        { name: 'Art Workshop', date: '2024-06-15' },
      ],
      upcomingEvents: [
        { name: 'Science Fair', date: '2024-10-20' },
        { name: 'Music Concert', date: '2024-11-05' },
      ],
    },
    user2: {
      pastEvents: [
        { name: 'Drama Festival', date: '2024-04-12' },
      ],
      upcomingEvents: [
        { name: 'Math Olympiad', date: '2024-10-25' },
      ],
    },
    // Add more users as needed
  };

  const handleSearch = () => {
    const data = studentData[username];
    if (data) {
      setParticipationData(data);
      setMessage('');
    } else {
      setMessage('No participation data found for this user.');
      setParticipationData(null);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Track Student Participation</h1>
      <input
        type="text"
        placeholder="Enter username (e.g., user1)"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleSearch} style={styles.searchButton}>
        Search
      </button>
      
      {message && <p style={styles.message}>{message}</p>}

      {participationData && (
        <div>
          <h2 style={styles.subHeading}>Participation Details for {username}</h2>
          <h3>Past Events</h3>
          <ul style={styles.eventList}>
            {participationData.pastEvents.map((event, index) => (
              <li key={index} style={styles.eventItem}>
                {event.name} - <strong>{event.date}</strong>
              </li>
            ))}
          </ul>
          <h3>Upcoming Events</h3>
          <ul style={styles.eventList}>
            {participationData.upcomingEvents.map((event, index) => (
              <li key={index} style={styles.eventItem}>
                {event.name} - <strong>{event.date}</strong>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// Inline Styles for the Track Student Participation component
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    textAlign: 'center',
  },
  input: {
    padding: '10px',
    width: '200px',
    margin: '20px auto',
    display: 'block',
  },
  searchButton: {
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '20px auto',
    display: 'block',
  },
  message: {
    color: 'red',
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

export default TrackStudentParticipation;
