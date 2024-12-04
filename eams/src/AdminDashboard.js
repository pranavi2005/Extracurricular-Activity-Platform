import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddEvent from './AddEvent';
import ManageEvents from './ManageEvents';
import TrackStudentParticipation from './TrackStudentParticipation';
import GatherFeedback from './GatherFeedback';
import StudentFeedback from './StudentFeedback';
import AddStudentCredentials from './AddStudentCredentials';
import ManageStudentCredentials from './ManageStudentCredentials';

// Define the AdminDashboard component
const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('welcome'); // State to manage active section
  const navigate = useNavigate();

  // Navigation for logout
  const handleLogout = () => {
    navigate('/');
  };

  // Set the active section based on the sidebar option clicked
  const showAddEvent = () => setActiveSection('addEvent');
  const showManageEvents = () => setActiveSection('manageEvents');
  const showTrackParticipation = () => setActiveSection('trackParticipation');
  const showGatherFeedback = () => setActiveSection('gatherFeedback');
  const showStudentFeedback = () => setActiveSection('studentFeedback');
  const showAddStudentCredentials = () => setActiveSection('addStudentCredentials');
  const showManageStudentCredentials = () => setActiveSection('manageStudentCredentials');

  // Render content based on the active section
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
            <li style={styles.sidebarListItem} onClick={showAddEvent}>Add Event</li>
            <li style={styles.sidebarListItem} onClick={showManageEvents}>Manage Events</li>
            <li style={styles.sidebarListItem} onClick={showAddStudentCredentials}>Add Student Credentials</li>
            <li style={styles.sidebarListItem} onClick={showManageStudentCredentials}>Manage Student Credentials</li>
            <li style={styles.sidebarListItem} onClick={showTrackParticipation}>Track Student Participation</li>
            <li style={styles.sidebarListItem} onClick={showGatherFeedback}>Gather Feedback</li>
            <li style={styles.sidebarListItem} onClick={showStudentFeedback}>Students Feedback</li>
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
    <h2 style={styles.welcomeMessage}>Welcome to the Admin Dashboard!</h2>
  </div>
);

// Inline Styles for the Admin Dashboard
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
    margin: '30px 0', // Increased margin for more spacing
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '18px', // Increased font size for larger text
  },
  contentSection: {
    flex: 1,
    padding: '20px',
    backgroundColor: '#fff',
  },
  welcomeSection: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
  welcomeMessage: {
    fontSize: '24px',
    textAlign: 'center',
  },
};

export default AdminDashboard;
