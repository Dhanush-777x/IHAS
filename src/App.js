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
import Links from './Components/Links';
import Helpline from './Components/HomePage/Helpline';
import Mch from './Components/PatientsCorner/Mch';
import DiabetesInfo from './Components/PatientsCorner/DiabetesInfo';
import VbInfo from './Components/PatientsCorner/VbInfo';
import Dengue from './Components/PatientsCorner/VectorBorne.js/Dengue';
import Malaria from './Components/PatientsCorner/VectorBorne.js/Malaria';
import Chikungunya from './Components/PatientsCorner/VectorBorne.js/Chikungunya';


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

          <Route path="/vector-borne-diseases" element={ <VbInfo/>} />
          <Route path="/diabetes" element={<DiabetesInfo/>} />
          <Route path="/maternal-child-care" element={<Mch/>} />x1

          <Route path="/dengue" element={<Dengue/>} />
          <Route path="/malaria" element={<Malaria/>} />
          <Route path="/chikungunya" element={<Chikungunya/>} />

          <Route path="/useful-links" element={<Links />} />
          
          {/* Guideline Categories */}
          <Route path="/vector-borne-diseases-guidelines" element={<VectorBorneGuidelines />} />
          <Route path="/maternal-childcare-guidelines" element={<MchGuidelines />} />
          <Route path="/diabetes-guidelines" element={<DiabetesGuidelines />} />
          

          <Route path="/research" element={<ResearchPapers />} />
          <Route path="/schemes" element={<Schemes />} />
          <Route path="/faq" element={<Home />} />
          <Route path="/news" element={<Home />} />
          <Route path="/helpline" element={<Helpline />} />
          <Route path="/chat" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
