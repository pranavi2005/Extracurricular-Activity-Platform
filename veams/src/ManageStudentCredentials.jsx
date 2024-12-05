import React, { useState, useEffect } from 'react';

const ManageStudentCredentials = () => {
  const [students, setStudents] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');

  // Fetch student credentials from backend when component mounts
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch('http://localhost:8081/api/save-user/getAllStudents'); // Change the URL to match your backend endpoint
        if (response.ok) {
          const data = await response.json();
          setStudents(data); // Assuming your backend returns the list of students in JSON format
        } else {
          throw new Error('Failed to fetch students');
        }
      } catch (error) {
        console.error('Error fetching students:', error);
        setSuccessMessage('Failed to load students');
      }
    };

    fetchStudents();
  }, []); // Empty dependency array means it runs only once when the component mounts

  // Function to delete a student's credentials
  const handleDelete = async (usernameToDelete) => {
    try {
      const response = await fetch(`http://localhost:8081/api/save-user/deleteStudent/${usernameToDelete}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        const updatedStudents = students.filter(student => student.username !== usernameToDelete);
        setStudents(updatedStudents);

        setSuccessMessage(`Successfully deleted credentials for ${usernameToDelete}`);
        
        // Reset success message after a few seconds
        setTimeout(() => setSuccessMessage(''), 3000);
      } else {
        throw new Error('Failed to delete student credentials');
      }
    } catch (error) {
      console.error('Error:', error);
      setSuccessMessage('Failed to delete credentials');
    }
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
