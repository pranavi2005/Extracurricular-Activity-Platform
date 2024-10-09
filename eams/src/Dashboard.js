import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import RegisterActivities from './RegisterActivities'; // Importing the component
import TrackParticipation from './TrackParticipation';
import EventNotification from './EventNotification';
import SubmitFeedback from './SubmitFeedback';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('welcome'); // State to manage active section
  const navigate = useNavigate(); // Initialize useNavigate

  // Functions to handle different sections
  const showRegisterActivities = () => setActiveSection('register');
  const showTrackParticipation = () => setActiveSection('track');
  const showEventNotification = () => setActiveSection('notification');
  const showSubmitFeedback = () => setActiveSection('feedback');

  // Function to handle logout and navigate to welcome page
  const handleLogout = () => {
    alert('You have been logged out.');
    navigate('/'); // Navigate to the welcome page
  };

  // Content based on the active section
  const renderContent = () => {
    switch (activeSection) {
      case 'register':
        return <RegisterActivities />; // Renders RegisterActivities when "register" is active
      case 'track':
        return <TrackParticipation />;
      case 'notification':
        return <EventNotification />;
      case 'feedback':
        return <SubmitFeedback />;
      default:
        return <WelcomeMessage />;
    }
  };

  return (
    <div style={styles.dashboardContainer}>
      {/* Top Bar */}
      <div style={styles.topBar}>
        <h1 style={styles.heading}>Extracurricular Activity Platform</h1>
        <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        {/* Left Sidebar */}
        <div style={styles.sidebar}>
          <ul style={styles.sidebarList}>
            <li style={styles.sidebarListItem} onClick={showRegisterActivities}>Register for Activities</li>
            <li style={styles.sidebarListItem} onClick={showTrackParticipation}>Track Participation</li>
            <li style={styles.sidebarListItem} onClick={showEventNotification}>Event Notifications</li>
            <li style={styles.sidebarListItem} onClick={showSubmitFeedback}>Submit Feedback</li>
          </ul>
        </div>

        {/* Dynamic Main Section */}
        <div style={styles.contentSection}>
          {renderContent()} {/* Display dynamic content here */}
        </div>
      </div>
    </div>
  );
};

const WelcomeMessage = () => (
  <div style={styles.welcomeSection}>
    <h2 style={styles.welcomeMessage}>Welcome to the Extracurricular Activity Platform!</h2>
    <img
      src="/images/dashboard-image.jpg"
      alt="Dashboard Visual"
      style={styles.image} // Styling for the image
    />
  </div>
);

// Inline Styles for the Dashboard
const styles = {
  dashboardContainer: {
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#007BFF',
    color: '#fff',
  },
  heading: {
    textAlign: 'center',
    flex: 1,
  },
  logoutButton: {
    backgroundColor: '#FF4136',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  mainContent: {
    display: 'flex',
    flex: 1,
  },
  sidebar: {
    width: '250px',
    backgroundColor: '#f4f4f4',
    padding: '20px',
    boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
  },
  sidebarList: {
    listStyleType: 'none',
    padding: 0,
  },
  sidebarListItem: {
    margin: '30px 0',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '18px',
  },
  contentSection: {
    flex: 1,
    padding: '20px',
    backgroundColor: '#fff',
  },
  welcomeSection: {
    textAlign: 'center',
  },
  welcomeMessage: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  image: {
    width: '400px',
    height: 'auto', // Ensures the image scales correctly
    borderRadius: '10px', // Adds rounded corners to the image
  },
};

export default Dashboard;
