// /**
//  * App.js
//  * 
//  * Main application component that wraps PlotVisualizer.
//  * This is where you can add additional features, routing, or context.
//  * 
//  * @author Techgicus Software Solutions
//  * @version 1.0.0
//  */

// import React from 'react';

// // import './App.css';
// import PlotLayoutViewer from './Components/Plotlayoutviewer';


// /**
//  * App - Root application component
//  * 
//  * Features:
//  * - Renders the PlotVisualizer component
//  * - Can be extended with routing, theme provider, etc.
//  * - Manages global app state if needed
//  */
// const App = () => {
//   return (
//     <div className="app">
//       <PlotLayoutViewer/>
//       {/* <ChicholiMasterPlan/> */}
//     </div>
//   );
// };

// export default App;



import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./sections/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import Demo from "./sections/Demo/Demo";
import Contact from "./sections/Contact/Contact";
import PlatformOverview from "./sections/PlatformOverview/PlatformOverview";
import FeatureMap from "./sections/features/FeatureMap";
import FeaturePlotInteraction from "./sections/features/FeaturePlotInteraction";
import FeatureSmartFilter from "./sections/FeatureSmartFilter/FeatureSmartFilter";
import Requirements from "./sections/Requirements/Requirements";
import Footer from "./sections/Footer/Footer";
import SalesFeatures from "./sections/features/SalesFeatures";
import FloatingWhatsApp from "./sections/FloatingWhatsApp/FloatingWhatsApp";
import PlotLayoutViewer from './Components/Plotlayoutviewer';

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Demo />
        <PlatformOverview />
        <FeatureMap />
        <FeaturePlotInteraction />
        <FeatureSmartFilter />
        <SalesFeatures />
        <Requirements />

        <Contact />

        <Footer />

        <FloatingWhatsApp />
      </main>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/demo" element={<PlotLayoutViewer/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
