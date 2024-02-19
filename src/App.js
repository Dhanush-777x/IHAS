// App.js
import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import MedicalCenters from './Components/MedicalCenters';
import ResearchPapers from './Components/ResearchPapers';
import Schemes from './Components/Schemes';
import PatientCorner from './Components/PatientCorner';
import Disease from './Components/disease';
import ConferenceScraper from './Components/Healthcare';
// import FAQ from './Components/Faq';
// import News from './Components/News';
// import ContactUs from './Components/ContactUs';
// import Chat from './Components/Chat';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/patient-corner" element={<PatientCorner/>} />
          <Route path="/disease/:diseaseName" element={<Disease/>} />
          <Route path="/medical-centers" element={<MedicalCenters/>} />
          <Route path="/healthcare-providers" element={<ConferenceScraper/>} />
          <Route path="/research-papers" element={<ResearchPapers/>} />
          <Route path="/schemes" element={<Schemes/>} />
          <Route path="/faq" element={<Home/>} />
          <Route path="/news" element={<Home/>} />
          <Route path="/contact-us" element={<Home/>} />
          <Route path="/chat" element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
