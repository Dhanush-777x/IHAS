// App.js
import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Diseases from './Components/Diseases';
import MedicalCenters from './Components/MedicalCenters';
import ResearchPapers from './Components/ResearchPapers';
import GovernmentSchemes from './Components/Schemes';
import FAQ from './Components/Faq';
import News from './Components/News';
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
          <Route path="/diseases" element={<Diseases/>} />
          <Route path="/medical-centers" element={<MedicalCenters/>} />
          <Route path="/research-papers" element={<ResearchPapers/>} />
          <Route path="/government-schemes" element={<GovernmentSchemes/>} />
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
