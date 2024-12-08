import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './Welcome';
import Login from './Login';
import Dashboard from './Dashboard';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';
import RegisterActivities from './RegisterActivities';
import TrackParticipation from './TrackParticipation';
import EventNotification from './EventNotification';
import AddEvent from './AddEvent';
import ManageEvents from './ManageEvents';
import TrackStudentParticipation from './TrackStudentParticipation';
import GatherFeedback from './GatherFeedback';
import StudentFeedback from './StudentFeedback';
import SubmitFeedback from './SubmitFeedback';
import ForgotPassword from './ForgotPassword';
import AddStudentCredentials from './AddStudentCredentials';
import ManageStudentCredentials from './ManageStudentCredentials';
import Payments from './Payments'
import axios from 'axios';

function App() {
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  // Fetch events from the backend when the app mounts
  useEffect(() => {
    axios.get('http://localhost:8081/api/events')  // Replace with your actual API endpoint
      .then(response => {
        setUpcomingEvents(response.data); // Update state with fetched events
      })
      .catch(error => {
        console.error('There was an error fetching the events!', error);
      });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/register-activities" element={<RegisterActivities />} />
        <Route 
          path="/track-participation" 
          element={<TrackParticipation upcomingEvents={upcomingEvents} />} 
        />
        <Route path="/event-notification" element={<EventNotification />} />
        <Route path="/add-event" element={<AddEvent />} />
        <Route path="/manage-events" element={<ManageEvents />} />
        <Route path="/track-student-participation" element={<TrackStudentParticipation />} />
        <Route path="/gather-feedback" element={<GatherFeedback />} />
        <Route path="/student-feedback" element={<StudentFeedback />} />
        <Route path="/submit-feedback" element={<SubmitFeedback />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/add-student-credentials" element={<AddStudentCredentials />} />
        <Route path="/manage-student-credentials" element={<ManageStudentCredentials />} />
        <Route path="/payments" element={<Payments/>}/>
      </Routes>
    </Router>
  );
}

export default App;
