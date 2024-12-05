import React, { useState } from 'react';

const AddStudentCredentials = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [students, setStudents] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');

  const handleAddStudent = async (e) => {
    e.preventDefault();

    // New student data
    const newStudent = { username, password, email };

    // POST request to backend to save the new student credentials
    try {
      const response = await fetch('http://localhost:8081/api/save-user/addStudent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newStudent),
      });

      console.log('Response Status:', response.status);
      const responseBody = await response.json();
      console.log('Response Body:', responseBody);

      if (response.ok) {
        setUsername('');
        setPassword('');
        setEmail('');

        setSuccessMessage(`Credentials assigned to ${newStudent.username}`);
        setTimeout(() => setSuccessMessage(''), 3000);
      } else {
        throw new Error('Failed to add credentials');
      }
    } catch (error) {
      console.error('Error:', error);
      setSuccessMessage('Failed to add credentials');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Assign New Credentials to Student</h2>
      {successMessage && <p style={styles.successMessage}>{successMessage}</p>}
      <form onSubmit={handleAddStudent} style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Username  </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Password  </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Email    </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            Username: {student.username}, Password: {student.password}, Email: {student.email}
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
    justifyContent: 'flex-start',
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
    color: 'black',
  },
  successMessage: {
    color: 'green',
    textAlign: 'center',
    margin: '10px 0',
  },
};

export default AddStudentCredentials;
