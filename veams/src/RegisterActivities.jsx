// src/RegisterActivities.js

import React, { useState } from 'react';

const activities = [
  { id: 1, name: 'Art Workshop', date: '2024-10-15', time: '10:00 AM - 12:00 PM', venue: 'Room 101' },
  { id: 2, name: 'Sports Day', date: '2024-10-22', time: '9:00 AM - 4:00 PM', venue: 'School Field' },
  { id: 3, name: 'Music Festival', date: '2024-11-05', time: '5:00 PM - 9:00 PM', venue: 'Auditorium' },
  { id: 4, name: 'Coding Bootcamp', date: '2024-11-10', time: '1:00 PM - 5:00 PM', venue: 'Computer Lab' },
];

const RegisterActivities = () => {
  const [successMessage, setSuccessMessage] = useState('');

  const handleRegister = (activityName) => {
    // Simulate a successful registration action
    setSuccessMessage(`Successfully registered for ${activityName}!`);
    // Optionally, you can reset the message after a few seconds
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Register for Activities</h1>
      {successMessage && <div style={styles.successMessage}>{successMessage}</div>}
      <ul style={styles.activityList}>
        {activities.map((activity) => (
          <li key={activity.id} style={styles.activityItem}>
            <div style={styles.activityDetails}>
              <strong>{activity.name}</strong><br />
              Date: {activity.date}<br />
              Time: {activity.time}<br />
              Venue: {activity.venue} {/* Displaying the venue */}
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
