import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterActivities from './RegisterActivities';
import TrackParticipation from './TrackParticipation';
import EventNotification from './EventNotification';
import SubmitFeedback from './SubmitFeedback';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('welcome');
  const navigate = useNavigate();

  // Section navigation handlers
  const showRegisterActivities = () => setActiveSection('register');
  const showTrackParticipation = () => setActiveSection('track');
  const showEventNotification = () => setActiveSection('notification');
  const showSubmitFeedback = () => setActiveSection('feedback');

  const handleLogout = () => {
    alert('You have been logged out.');
    navigate('/');
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'register':
        return <RegisterActivities />;
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
    <div style={styles.pageContainer}>
      <div style={styles.overlay}></div>
      <div style={styles.dashboardContainer}>
        <div style={styles.topBar}>
          <h1 style={styles.heading}>Extracurricular Activity Platform</h1>
          <button onClick={handleLogout} style={styles.logoutButton}>
            Logout
          </button>
        </div>
        <div style={styles.mainContent}>
          <div style={styles.sidebar}>
            <ul style={styles.sidebarList}>
              <li
                style={{
                  ...styles.sidebarListItem,
                  backgroundColor: activeSection === 'register' ? '#007BFF' : '#444', // Active item background color
                }}
                onClick={showRegisterActivities}
              >
                Register for Activities
              </li>
              <li
                style={{
                  ...styles.sidebarListItem,
                  backgroundColor: activeSection === 'track' ? '#007BFF' : '#444',
                }}
                onClick={showTrackParticipation}
              >
                Track Participation
              </li>
              <li
                style={{
                  ...styles.sidebarListItem,
                  backgroundColor: activeSection === 'notification' ? '#007BFF' : '#444',
                }}
                onClick={showEventNotification}
              >
                Event Notifications
              </li>
              <li
                style={{
                  ...styles.sidebarListItem,
                  backgroundColor: activeSection === 'feedback' ? '#007BFF' : '#444',
                }}
                onClick={showSubmitFeedback}
              >
                Submit Feedback
              </li>
            </ul>
          </div>
          <div style={styles.contentSection}>{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

const WelcomeMessage = () => (
  <div style={styles.welcomeSection}>
    <h2 style={styles.welcomeMessage}>Welcome to the Extracurricular Activity Platform!</h2>
  </div>
);

const styles = {
  pageContainer: {
    position: 'relative',
    minHeight: '100vh',
    backgroundImage: 'url(/images/welcome.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  },
  dashboardContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    zIndex: 2,
    color: '#fff',
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between', // Aligns content to both ends
    alignItems: 'center',
    padding: '20px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 3,
  },
  heading: {
    textAlign: 'left',
    fontSize: '40px',
    flex: 1,
  },
  logoutButton: {
    backgroundColor: '#007BFF',
    color: 'white',
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
    padding: '20px',
    boxShadow: '2px 0 5px rgba(0, 0, 0, 0.5)',
    color: '#fff',
  },
  sidebarList: {
    listStyle: 'none',
    padding: 0,
  },
  sidebarListItem: {
    margin: '15px 0',
    padding: '15px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    color: '#fff',
    fontSize: '17px',
    transition: 'background-color 0.3s ease, color 0.3s ease',
  },
  sidebarListItemHover: {
    backgroundColor: 'black', // Hover color
  },
  contentSection: {
    flex: 1,
    padding: '20px',
    zIndex: 2,
  },
  welcomeSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  welcomeMessage: {
    fontSize: '24px',
  },
};

export default Dashboard;
