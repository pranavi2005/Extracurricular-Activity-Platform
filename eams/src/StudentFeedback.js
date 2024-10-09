import React, { useState } from 'react';

const StudentFeedback = () => {

  const feedbacks = [
    { username: 'user1', event: 'Sports Day', feedback: 'It was a great experience!' },
    { username: 'user2', event: 'Sports Day', feedback: 'Loved the activities!' },
    { username: 'user3', event: 'Science Fair', feedback: 'I learned a lot!' },
    { username: 'user4', event: 'Art Exhibition', feedback: 'The artwork was amazing!' },
    { username: 'user5', event: 'Science Fair', feedback: 'Very informative!' },
  ];

  // Group feedback by event
  const groupedFeedbacks = feedbacks.reduce((acc, feedback) => {
    if (!acc[feedback.event]) {
      acc[feedback.event] = [];
    }
    acc[feedback.event].push(feedback);
    return acc;
  }, {});

  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Student Feedback</h1>
      <h2 style={styles.subHeading}>Grouped Feedback:</h2>
      <ul style={styles.eventList}>
        {Object.keys(groupedFeedbacks).map((event) => (
          <li
            key={event}
            style={styles.eventItem}
            onClick={() => setSelectedEvent(event)}
          >
            {event} ({groupedFeedbacks[event].length} feedbacks)
          </li>
        ))}
      </ul>

      {/* Display feedback for selected event */}
      {selectedEvent && (
        <div style={styles.feedbackContainer}>
          <h3 style={styles.feedbackHeading}>{selectedEvent} Feedback:</h3>
          <ul style={styles.feedbackList}>
            {groupedFeedbacks[selectedEvent].map((feedback, index) => (
              <li key={index} style={styles.feedbackItem}>
                <strong>{feedback.username}</strong>: {feedback.feedback}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// Inline Styles for the Student Feedback Review component
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    textAlign: 'center',
  },
  subHeading: {
    marginTop: '20px',
    fontSize: '24px',
    textAlign: 'center',
  },
  eventList: {
    listStyleType: 'none',
    padding: 0,
  },
  eventItem: {
    padding: '10px',
    margin: '5px 0',
    border: '1px solid #ccc',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  feedbackContainer: {
    marginTop: '20px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  feedbackHeading: {
    textAlign: 'center',
  },
  feedbackList: {
    listStyleType: 'none',
    padding: 0,
  },
  feedbackItem: {
    padding: '5px',
    border: '1px solid #eee',
    borderRadius: '3px',
    margin: '5px 0',
  },
  backButton: {
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
};

export default StudentFeedback;
