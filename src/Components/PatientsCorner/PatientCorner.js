import React, { useState, useEffect } from 'react';
import MedicalCenters from './MedicalCenters';
import Footer from '../HomePage/Footer';
import Pharmacies from './pharmacies';
import ChatWithAIButton from '../chatWithai';
import DiseaseCategories from './DiseaseCategories';
import LanguageBtn from '../Language';


function PatientCorner() {
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className='mx-10'>
      <div className="mt-40 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mb-8">
        <button
          className={`rounded-lg py-4 px-4 text-lg ${activeTab === 1 ? 'bg-black text-white' : 'bg-gray-200'}`}
          onClick={() => handleTabChange(1)}
        >
          Diseases and Conditions
        </button>
        <button
          className={`rounded-lg py-4 px-4 text-lg ${activeTab === 2 ? 'bg-black text-white' : 'bg-gray-200'}`}
          onClick={() => handleTabChange(2)}
        >
          Medical Centres
        </button>
        <button
          className={`rounded-lg py-4 px-4 text-lg ${activeTab === 3 ? 'bg-black text-white' : 'bg-gray-200'}`}
          onClick={() => handleTabChange(3)}
        >
          Pharmacies and Medical Stores
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 mb-20">
        {activeTab === 1 && (
          <div>
            <DiseaseCategories />
          </div>
        )}

        {activeTab === 2 && (
          <div>
            <MedicalCenters />
          </div>
        )}
        {activeTab === 3 && (
          <div>
            <Pharmacies />
          </div>
        )}
      </div>
      <Footer />
      <LanguageBtn />
      <ChatWithAIButton />
    </div>
  );
}

export default PatientCorner;
