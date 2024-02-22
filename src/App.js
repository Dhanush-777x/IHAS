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
import Disease from './Components/PatientsCorner/disease';
import Healthcare from './Components/HealthcareProviders/healthcare';
import VectorBorne from './Components/PatientsCorner/CategoriesFolder/VectorBorne';
import NonComm from './Components/PatientsCorner/CategoriesFolder/NonComm';
import Mch from './Components/PatientsCorner/CategoriesFolder/Mch';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/patient-corner" element={<PatientCorner />} />

          {/* categories */}
          <Route path="/vector-borne-diseases" element={<VectorBorne />} />
          <Route path="/non-communicable-diseases" element={<NonComm />} />
          <Route path="/maternal-child-health" element={<Mch />} />

          <Route path="/disease/:diseaseName" element={<Disease />} />
          <Route path="/medical-centers" element={<MedicalCenters />} />
          <Route path="/healthcare-providers" element={<Healthcare />} />
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
