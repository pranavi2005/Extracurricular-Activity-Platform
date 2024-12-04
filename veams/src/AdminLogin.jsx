import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Standard admin credentials
    const adminUsername = 'admin';
    const adminPassword = 'admin123'; // Change this to your desired password

    if (username === adminUsername && password === adminPassword) {
      navigate('/admin-dashboard'); // Redirect to admin dashboard on successful login
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div style={styles.container}>
    <h1 style={styles.mainTitle}>Extracurricular Activity Platform</h1>
    <div style={styles.overlay}>
        <h2 style={styles.welcomeTitle}>Welcome Back!</h2>
        <p style={styles.subheading}>Please login to continue</p>
        <h2 style={styles.heading}>Admin Login</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          {error && <p style={styles.error}>{error}</p>}
          <button type="submit" style={styles.button}>Login</button>
        </form>
      </div>
    </div>
  );
};

// Inline Styles
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column', // Stack items vertically
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Full viewport height
    width: '100vw', // Full viewport width
    backgroundImage: 'url("/images/welcome.jpg")', // Path to your background image
    backgroundSize: 'cover', // Ensures the image covers the entire container
    backgroundPosition: 'center', // Centers the image
    backgroundRepeat: 'no-repeat', // Prevents image repetition
    margin: 0,
    overflow: 'hidden',
  },
  mainTitle: {
    fontSize: '3rem',
    color: '#fff',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Adds shadow for better readability
    marginBottom: '20px',
    textAlign: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent black overlay
    padding: '30px',
    borderRadius: '10px',
    color: '#fff',
    width: '350px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    maxWidth: '90%', // Prevents the overlay from exceeding the screen width
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '10px',
  },
  subheading: {
    fontSize: '1rem',
    marginBottom: '20px',
    color: '#bbb',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    marginBottom: '5px',
    textAlign: 'left',
    fontWeight: 'bold',
    display: 'block',
    color: '#ddd',
  },
  input: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '1rem',
    width: '100%', // Ensures input spans the container width
    boxSizing: 'border-box', // Prevents padding from breaking the layout
  },
  error: {
    color: 'red',
    marginBottom: '10px',
    fontSize: '0.9rem',
  },
  button: {
    padding: '10px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  links: {
    marginTop: '15px',
  },
  link: {
    color: '#17a2b8',
    textDecoration: 'underline',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
  },
};

export default AdminLogin;
