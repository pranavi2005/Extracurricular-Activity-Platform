import React, { useState, useEffect } from "react";
import axios from "axios";

const SendEventNotification = () => {
  const [events, setEvents] = useState([]);
  const [eventName, setEventName] = useState("");
  const [notificationMessage, setNotificationMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:8081/api/events"); 
        setEvents(response.data); 
      } catch (error) {
        console.error("Error fetching events:", error);
        setErrorMessage("Error fetching events. Please try again later.");
      }
    };

    fetchEvents();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8081/api/send-notification", {
        eventName,
        notificationMessage,
      });

      if (response.status === 200) {
        setSuccessMessage("Notification sent successfully!");
        setErrorMessage("");
      } else {
        setErrorMessage("Failed to send notification. Please try again.");
        setSuccessMessage("");
      }
    } catch (error) {
      console.error("Error sending notification:", error);
      setErrorMessage("Error sending notification. Please try again.");
      setSuccessMessage("");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.mainTitle}>Send Event Notification</h1>
      <div style={styles.formContainer}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Event Name</label>
            <select
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              style={styles.select}
              required
            >
              <option value="" disabled>
                Select an Event
              </option>
              {events.map((event) => (
                <option key={event.id} value={event.name}>
                  {event.name}
                </option>
              ))}
            </select>
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Notification Message</label>
            <textarea
              value={notificationMessage}
              onChange={(e) => setNotificationMessage(e.target.value)}
              style={styles.textarea}
              required
            />
          </div>

          {successMessage && <p style={styles.success}>{successMessage}</p>}
          {errorMessage && <p style={styles.error}>{errorMessage}</p>}

          <button type="submit" style={styles.button}>
            Send Notification
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100%",
    padding: "20px",
  },
  mainTitle: {
    fontSize: "2.5rem",
    color: "white",
    marginBottom: "20px",
  },
  formContainer: {
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "500px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  label: {
    fontWeight: "bold",
    marginBottom: "5px",
  },
  select: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "1rem",
    width: "100%",
  },
  textarea: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "1rem",
    width: "100%",
    height: "100px",
  },
  button: {
    padding: "12px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  success: {
    color: "green",
    marginBottom: "10px",
  },
  error: {
    color: "red",
    marginBottom: "10px",
  },
};

export default SendEventNotification;
