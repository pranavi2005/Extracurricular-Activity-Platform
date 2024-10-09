// src/AddStudentCredentials.js

import React, { useState } from 'react';

const AddStudentCredentials = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [students, setStudents] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');

  const handleAddStudent = (e) => {
    e.preventDefault();

    // Add the new student to the students list
    const newStudent = { username, password };
    setStudents([...students, newStudent]);

    // Clear input fields
    setUsername('');
    setPassword('');

    // Display success message
    setSuccessMessage(`Credentials assigned to ${newStudent.username}`);

    // Clear success message after a few seconds
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Assign New Credentials to Student</h2>
      {successMessage && <p style={styles.successMessage}>{successMessage}</p>}
      <form onSubmit={handleAddStudent} style={styles.form}>
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
        <button type="submit" style={styles.button}>Assign Credentials</button>
      </form>

      <h3 style={styles.subheading}>Assigned Student Credentials</h3>
      <ul style={styles.studentList}>
        {students.map((student, index) => (
          <li key={index} style={styles.studentItem}>
            Username: {student.username}, Password: {student.password}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Inline Styles
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    height: '100vh',
    backgroundColor: '#f4f4f4',
  },
  heading: {
    marginBottom: '20px',
  },
  subheading: {
    marginTop: '30px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    marginBottom: '5px',
  },
  input: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  studentList: {
    listStyleType: 'none',
    padding: 0,
    marginTop: '20px',
  },
  studentItem: {
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    width: '300px',
    textAlign: 'center',
  },
  successMessage: {
    color: 'green',
    textAlign: 'center',
    margin: '10px 0',
  },
};

export default AddStudentCredentials;
