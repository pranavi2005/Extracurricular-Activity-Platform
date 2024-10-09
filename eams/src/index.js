import React from 'react';
import ReactDOM from 'react-dom/client'; // Use react-dom/client
import './index.css';
import App from './App'; // Import the App component

const root = ReactDOM.createRoot(document.getElementById('root')); // Ensure this line matches the correct root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
