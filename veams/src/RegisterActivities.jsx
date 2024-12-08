import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RegisterActivities = () => {
  const [activities, setActivities] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [username, setUsername] = useState('user1'); // Assume this is the logged-in user

  // Fetch events from the backend
  useEffect(() => {
    axios.get('http://localhost:8081/api/events') // Adjust the URL based on your backend setup
      .then(response => {
        setActivities(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the events!', error);
      });
  }, []);

  const handleRegister = (eventName) => {
    // Send POST request to register for the event
    axios.post('http://localhost:8081/api/register', { username, eventName }, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        setSuccessMessage(`Successfully registered for ${eventName}!`);
      })
      .catch(error => {
        console.error('There was an error registering for the event!', error);
      });
    
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Register for Activities</h1>
      {successMessage && <div style={styles.successMessage}>{successMessage}</div>}
      <ul style={styles.activityList}>
        {activities.map((activity) => (
          <li key={activity.name} style={styles.activityItem}>
            <div style={styles.activityDetails}>
              <strong>{activity.name}</strong><br />
              Date: {activity.date}<br />
              Time: {activity.time}<br />
              Venue: {activity.venue}
            </div>
            <button style={styles.registerButton} onClick={() => handleRegister(activity.name)}>
              Register
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Inline Styles for Register Activities
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    textAlign: 'center',
  },
  activityList: {
    listStyleType: 'none',
    padding: 0,
  },
  activityItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  activityDetails: {
    flex: 1,
  },
  registerButton: {
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  successMessage: {
    color: 'green',
    textAlign: 'center',
    margin: '10px 0',
    fontSize: '16px',
  },
};

export default RegisterActivities;
