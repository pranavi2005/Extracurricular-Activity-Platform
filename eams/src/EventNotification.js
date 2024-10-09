// src/EventNotifications.js

import React, { useState } from 'react';

const initialNotification = [
  { message: "New event announcement: Music Festival on November 5th!", date: new Date(2024, 9, 1, 10, 30), read: false },
  { message: "Registration deadline for Coding Bootcamp is October 30th.", date: new Date(2024, 9, 5, 14, 15), read: false },
  { message: "Event schedule change: Art Workshop moved to October 20th.", date: new Date(2024, 9, 10, 9, 0), read: false },
  { message: "Reminder: Sports Day is on October 22nd.", date: new Date(2024, 9, 15, 8, 0), read: false },
];

const EventNotification = () => {
  const [notification, setNotification] = useState(initialNotification);

  // Function to mark a notification as read
  const markAsRead = (index) => {
    const newNotification = [...notification];
    newNotification[index].read = true;
    setNotification(newNotification);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Event Notifications</h1>
      
      <ul style={styles.notificationList}>
        {notification.map((notification, index) => (
          <li key={index} style={styles.notificationItem}>
            <span 
              style={{
                fontWeight: notification.read ? 'normal' : 'bold',
                cursor: 'pointer'
              }}
              onClick={() => markAsRead(index)} // Mark as read on click
            >
              {notification.message} <br />
              <span style={styles.timestamp}>{notification.date.toLocaleString()}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Inline Styles for Event Notifications
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    textAlign: 'center',
  },
  notificationList: {
    listStyleType: 'none',
    padding: 0,
  },
  notificationItem: {
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  timestamp: {
    fontSize: '0.8em',
    color: '#888',
  },
};

export default EventNotification;
