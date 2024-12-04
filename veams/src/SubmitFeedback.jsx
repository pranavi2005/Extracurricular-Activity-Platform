
import React, { useState } from 'react';

const activities = [
  { id: 1, name: 'Art Workshop' },
  { id: 2, name: 'Sports Day' },
  { id: 3, name: 'Music Festival' },
  { id: 4, name: 'Coding Bootcamp' },
];

const SubmitFeedback = () => {
  const [selectedActivity, setSelectedActivity] = useState('');
  const [feedback, setFeedback] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate feedback submission
    setSuccessMessage(`Feedback submitted for ${selectedActivity}: "${feedback}"`);
    // Reset form fields after submission
    setSelectedActivity('');
    setFeedback('');

    // Reset the success message after a few seconds
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Submit Feedback</h1>
      {successMessage && <div style={styles.successMessage}>{successMessage}</div>}

      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Select Activity:
          <select
            value={selectedActivity}
            onChange={(e) => setSelectedActivity(e.target.value)}
            required
            style={styles.select}
          >
            <option value="">Select an activity</option>
            {activities.map((activity) => (
              <option key={activity.id} value={activity.name}>
                {activity.name}
              </option>
            ))}
          </select>
        </label>
        <label style={styles.label}>
          Feedback:
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
            style={styles.textarea}
          />
        </label>
        <button type="submit" style={styles.submitButton}>
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

// Inline Styles for Submit Feedback
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  label: {
    marginBottom: '10px',
    fontSize: '16px',
  },
  select: {
    padding: '10px',
    marginBottom: '20px',
    width: '300px',
  },
  textarea: {
    padding: '10px',
    marginBottom: '20px',
    width: '300px',
    height: '100px',
  },
  submitButton: {
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

export default SubmitFeedback;
