// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/HomePage/Home';
import MedicalCenters from './Components/PatientsCorner/MedicalCenters';
import ResearchPapers from './Components/researchers/ResearchPapers'; // Import the ResearchPapers component
import Schemes from './Components/Schemes/Schemes';
import PatientCorner from './Components/PatientsCorner/PatientCorner';
import Healthcare from './Components/HealthcareProviders/healthcare';
import VectorBorneGuidelines from './Components/HealthcareProviders/GuidelineCategories/VectorBorneGuidelines';
import MchGuidelines from './Components/HealthcareProviders/GuidelineCategories/MchGuidelines';
import DiabetesGuidelines from './Components/HealthcareProviders/GuidelineCategories/DiabetesGuidelines';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/patient-corner" element={<PatientCorner />} />

          <Route path="/medical-centers" element={<MedicalCenters />} />
          <Route path="/healthcare-providers" element={<Healthcare />} />

          {/* Guideline Categories */}
          <Route path="/vector-borne-diseases-guidelines" element={<VectorBorneGuidelines />} />
          <Route path="/maternal-childcare-guidelines" element={<MchGuidelines />} />
          <Route path="/diabetes-guidelines" element={<DiabetesGuidelines />} />
          

          <Route path="/research" element={<ResearchPapers />} />
          <Route path="/schemes" element={<Schemes />} />
          <Route path="/faq" element={<Home />} />
          <Route path="/news" element={<Home />} />
          <Route path="/contact-us" element={<Home />} />
          <Route path="/chat" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
