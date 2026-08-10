/**
 * index.js
 * 
 * Main entry point for Plot Visualizer application.
 * This file initializes and mounts the React application.
 * 
 * @author Techgicus Software Solutions
 * @version 1.0.0
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Get the root element from HTML
const rootElement = document.getElementById('root');

// Create React root and render App component
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);