import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddEvent from './AddEvent';
import ManageEvents from './ManageEvents';
import TrackStudentParticipation from './TrackStudentParticipation';
import GatherFeedback from './GatherFeedback';
import StudentFeedback from './StudentFeedback';
import AddStudentCredentials from './AddStudentCredentials';
import ManageStudentCredentials from './ManageStudentCredentials';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('welcome');
  const [activeItem, setActiveItem] = useState(''); // State for active sidebar item
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const showAddEvent = () => {
    setActiveSection('addEvent');
    setActiveItem('addEvent'); // Set active item to Add Event
  };
  const showManageEvents = () => {
    setActiveSection('manageEvents');
    setActiveItem('manageEvents');
  };
  const showTrackParticipation = () => {
    setActiveSection('trackParticipation');
    setActiveItem('trackParticipation');
  };
  const showGatherFeedback = () => {
    setActiveSection('gatherFeedback');
    setActiveItem('gatherFeedback');
  };
  const showStudentFeedback = () => {
    setActiveSection('studentFeedback');
    setActiveItem('studentFeedback');
  };
  const showAddStudentCredentials = () => {
    setActiveSection('addStudentCredentials');
    setActiveItem('addStudentCredentials');
  };
  const showManageStudentCredentials = () => {
    setActiveSection('manageStudentCredentials');
    setActiveItem('manageStudentCredentials');
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'addEvent':
        return <AddEvent />;
      case 'manageEvents':
        return <ManageEvents />;
      case 'trackParticipation':
        return <TrackStudentParticipation />;
      case 'gatherFeedback':
        return <GatherFeedback />;
      case 'studentFeedback':
        return <StudentFeedback />;
      case 'addStudentCredentials':
        return <AddStudentCredentials />;
      case 'manageStudentCredentials':
        return <ManageStudentCredentials />;
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
                  backgroundColor: activeItem === 'addEvent' ? '#007BFF' : '#444', // Active item background color
                }}
                onClick={showAddEvent}
              >
                Add Event
              </li>
              <li
                style={{
                  ...styles.sidebarListItem,
                  backgroundColor: activeItem === 'manageEvents' ? '#007BFF' : '#444',
                }}
                onClick={showManageEvents}
              >
                Manage Events
              </li>
              <li
                style={{
                  ...styles.sidebarListItem,
                  backgroundColor: activeItem === 'addStudentCredentials' ? '#007BFF' : '#444',
                }}
                onClick={showAddStudentCredentials}
              >
                Add Student Credentials
              </li>
              <li
                style={{
                  ...styles.sidebarListItem,
                  backgroundColor: activeItem === 'manageStudentCredentials' ? '#007BFF' : '#444',
                }}
                onClick={showManageStudentCredentials}
              >
                Manage Student Credentials
              </li>
              <li
                style={{
                  ...styles.sidebarListItem,
                  backgroundColor: activeItem === 'trackParticipation' ? '#007BFF' : '#444',
                }}
                onClick={showTrackParticipation}
              >
                Track Student Participation
              </li>
              <li
                style={{
                  ...styles.sidebarListItem,
                  backgroundColor: activeItem === 'gatherFeedback' ? '#007BFF' : '#444',
                }}
                onClick={showGatherFeedback}
              >
                Gather Feedback
              </li>
              <li
                style={{
                  ...styles.sidebarListItem,
                  backgroundColor: activeItem === 'studentFeedback' ? '#007BFF' : '#444',
                }}
                onClick={showStudentFeedback}
              >
                Students Feedback
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
    <h2 style={styles.welcomeMessage}>Welcome to the Admin Dashboard!</h2>
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
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

export default AdminDashboard;
