// src/ManageStudentCredentials.js

import React, { useState } from 'react';

const initialStudents = [
  { username: 'user1',email:'user1@gmail.com', password: 'password1' },
  { username: 'user2',email:'user2@gmail.com', password: 'password2' },
  { username: 'user3',email:'user3@gmail.com', password: 'password3' },
  // Add more students here
];

const ManageStudentCredentials = () => {
  const [students, setStudents] = useState(initialStudents);
  const [successMessage, setSuccessMessage] = useState('');

  // Function to delete a student's credentials
  const handleDelete = (usernameToDelete) => {
    const updatedStudents = students.filter(student => student.username !== usernameToDelete);
    setStudents(updatedStudents);

    // Set success message
    setSuccessMessage(`Successfully deleted credentials for ${usernameToDelete}`);
    
    // Reset message after a few seconds
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Manage Student Credentials</h2>
      
      {/* Display success message if available */}
      {successMessage && <div style={styles.successMessage}>{successMessage}</div>}
      
      <ul style={styles.studentList}>
        {students.map((student, index) => (
          <li key={index} style={styles.studentItem}>
            <div style={styles.studentDetails}>
              <strong>Username:</strong> {student.username} <br />
              <strong>Email:</strong> {student.email} <br />
              <strong>Password:</strong> {student.password}
            </div>
            <button style={styles.deleteButton} onClick={() => handleDelete(student.username)}>
              Delete
            </button>
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
    padding: '20px',
    height: '100vh',
    justifyContent: 'flex-start', // This ensures the content starts from the top
  },
  heading: {
    marginBottom: '20px',
  },
  studentList: {
    listStyleType: 'none',
    padding: 0,
    width: '100%',
    maxWidth: '600px',
  },
  studentItem: {
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    padding: '15px',
    marginBottom: '10px',
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  studentDetails: {
    flex: 1,
    color: 'black', // Set font color to black
  },
  deleteButton: {
    backgroundColor: '#FF4C4C',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  successMessage: {
    color: 'green',
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '16px',
  },
};



export default ManageStudentCredentials;
