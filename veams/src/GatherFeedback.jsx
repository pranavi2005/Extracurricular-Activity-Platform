import React, { useState } from 'react';

const GatherFeedback = () => {
  const [events] = useState([
    { id: 1, name: 'Sports Day' },
    { id: 2, name: 'Science Fair' },
  ]);

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [students, setStudents] = useState([
    { username: 'user1', participated: true },
    { username: 'user2', participated: true },
    { username: 'user3', participated: false },
  ]);
  const [sentFeedback, setSentFeedback] = useState([]);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setFeedbackMessage('');
  };

  const handleSendFeedback = () => {
    if (selectedEvent) {
      const feedbackSent = students
        .filter((student) => student.participated)
        .map((student) => ({
          username: student.username,
          event: selectedEvent.name,
          message: `Feedback request sent for ${selectedEvent.name}`,
        }));
      
      setSentFeedback([...sentFeedback, ...feedbackSent]);
      setFeedbackMessage('Feedback requests sent successfully!');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Gather Feedback</h1>
      <h2 style={styles.subHeading}>Select an Event:</h2>
      <ul style={styles.eventList}>
        {events.map((event) => (
          <li key={event.id} style={styles.eventItem} onClick={() => handleSelectEvent(event)}>
            {event.name}
          </li>
        ))}
      </ul>

      {selectedEvent && (
        <div style={styles.feedbackSection}>
          <h3 style={styles.feedbackHeading}>Send Feedback Requests for {selectedEvent.name}</h3>
          <button onClick={handleSendFeedback} style={styles.sendButton}>
            Send Feedback Requests
          </button>
          {feedbackMessage && <p style={styles.message}>{feedbackMessage}</p>}
          <div>
            <h4>Sent Feedback:</h4>
            <ul>
              {sentFeedback.map((feedback, index) => (
                <li key={index}>
                  {feedback.message} to {feedback.username}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

// Inline Styles for the Gather Feedback component
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
  feedbackSection: {
    marginTop: '20px',
    textAlign: 'center',
  },
  feedbackHeading: {
    marginBottom: '10px',
  },
  sendButton: {
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  message: {
    color: 'green',
    marginTop: '10px',
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

export default GatherFeedback;
