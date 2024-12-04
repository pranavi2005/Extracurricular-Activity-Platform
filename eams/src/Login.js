import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
];

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const validUser = users.find(user => user.username === username && user.password === password);

    if (validUser) {
      navigate('/dashboard');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.mainTitle}>Extracurricular Activity Platform</h1> {/* Main Title */}
      <div style={styles.overlay}>
        <h2 style={styles.heading}>Welcome Back!</h2>
        <p style={styles.subheading}>Please login to continue</p>
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
          <p>
            <a href="/forgot-password" style={styles.link}>Forgot Password?</a>
          </p>
        </form>
        <div style={styles.links}>
          <p>
            <a href="/admin-login" style={styles.link}>Admin Login</a>
          </p>
        </div>
      </div>
    </div>
  );  
};

// Inline Styles
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column', 
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    backgroundImage: 'url("/images/welcome.jpg")', 
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    backgroundRepeat: 'no-repeat', 
    margin: 0,
    overflow: 'hidden',
  },
  mainTitle: {
    fontSize: '3rem',
    color: '#fff',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', 
    marginBottom: '20px',
    textAlign: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: '30px',
    borderRadius: '10px',
    color: '#fff',
    width: '350px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    maxWidth: '90%', 
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
    width: '100%', 
    boxSizing: 'border-box',
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

export default Login;