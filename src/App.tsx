/**
 * App.js
 * 
 * Main application component that wraps PlotVisualizer.
 * This is where you can add additional features, routing, or context.
 * 
 * @author Techgicus Software Solutions
 * @version 1.0.0
 */

import React from 'react';

// import './App.css';
import PlotLayoutViewer from './Components/Plotlayoutviewer';


/**
 * App - Root application component
 * 
 * Features:
 * - Renders the PlotVisualizer component
 * - Can be extended with routing, theme provider, etc.
 * - Manages global app state if needed
 */
const App = () => {
  return (
    <div className="app">
      <PlotLayoutViewer/>
      {/* <ChicholiMasterPlan/> */}
    </div>
  );
};

export default App;