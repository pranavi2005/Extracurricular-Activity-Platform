// src/App.js

import React from 'react';
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
import UpdateEvents from './UpdateEvents';
import GatherFeedback from './GatherFeedback';
import StudentFeedback from './StudentFeedback';
import SubmitFeedback from './SubmitFeedback';
import ForgotPassword from './ForgotPassword';
import AddStudentCredentials from './AddStudentCredentials';
import ManageStudentCredentials from './ManageStudentCredentials';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/register-activities" element={<RegisterActivities />}/>
        <Route path="/track-participation" element={<TrackParticipation />} />
        <Route path="/event-notification" element={<EventNotification/>}/>
        <Route path="/add-event" element={<AddEvent />} />
        <Route path="/manage-events" element={<ManageEvents />} />
        <Route path="/track-student-participation" element={<TrackStudentParticipation />} />
        <Route path="/update-events" element={<UpdateEvents />} />
        <Route path="/gather-feedback" element={<GatherFeedback />} />
        <Route path="/student-feedback" element={<StudentFeedback />} />
        <Route path="/submit-feedback" element={<SubmitFeedback />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/add-student-credentials" element={<AddStudentCredentials />} />
        <Route path="/manage-student-credentials" element={<ManageStudentCredentials />} />
      </Routes>
    </Router>
  );
}

export default App;
