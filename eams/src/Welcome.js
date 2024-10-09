// src/Welcome.js

import React from 'react';
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div style={styles.container}>
      <h1 style={styles.mainHeading}>Extracurricular Activity Platform</h1>
      <h2 style={styles.caption}>Explore. Engage. Excel.</h2>
      <div style={styles.content}>
        <img src="/images/welcome.jpg" alt="Welcome" style={styles.image} />
        <div style={styles.text}>
          <p style={styles.description}>
            Extracurricular activity platform is a vibrant community of students passionate about exploring interests beyond academics.
            Our club provides a platform for members to discover new talents, develop skills, and build lifelong connections.
            Join us to unleash your creativity, challenge yourself, and make unforgettable memories.
          </p>
        </div>
      </div>
      <div style={styles.buttonContainer}>
        <Link to="/login">
          <button style={styles.button}>Login</button>
        </Link>
      </div>
    </div>
  );
}

// Inline Styles
const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh', // Ensures the container takes full height of the viewport
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between', // Distributes space evenly
  },
  content: {
    display: 'flex', // Using flexbox for layout
    alignItems: 'center', // Center the items vertically
    justifyContent: 'center', // Center the items horizontally
    marginTop: '20px', // Space between the heading and content
  },
  image: {
    width: '50%', // Image occupies half of the page
    height: 'auto', // Ensures the image scales correctly
    borderRadius: '10px', // Optional: adds rounded corners to the image
  },
  text: {
    textAlign: 'left', // Align the text to the left
    width: '50%', // Text occupies half of the page
    paddingLeft: '20px', // Space between the image and text
  },
  mainHeading: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#333',
  },
  caption: {
    fontSize: '1.5rem',
    color: '#555',
    margin: '10px 0',
  },
  description: {
    fontSize: '1rem',
    color: '#666',
    lineHeight: '1.6',
    margin: '20px 80px', // Increased margin for more spacing on either side
    paddingBottom: '20px', // Space before the button
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center', // Center the button horizontally
    marginTop: 'auto', // Push the button to the bottom of the page
    marginBottom: '20px', // Space from the bottom of the page
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Welcome;
