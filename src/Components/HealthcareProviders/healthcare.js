import React, { useState, useEffect } from 'react';
import Footer from '../HomePage/Footer';
import ChatWithAIButton from '../chatWithai';
import ConferenceScraper from './conference';
import BookSearch from './BookSearch';
import Guidelines from './Guidelines';
import LanguageBtn from '../Language';

function Healthcare() {
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [loaded, setLoaded] = useState(false);
  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  setTimeout(() => {
    setLoaded(true);
  }, 500);

  return (
    <div>
    <div className={`p-8 mt-40 transition-all duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mb-8">
        <button
          className={`rounded-lg py-4 px-4 text-lg ${activeTab === 1 ? 'bg-black text-white' : 'bg-gray-200'}`}
          onClick={() => handleTabChange(1)}
        >
          Guidelines
        </button>
        <button
          className={`rounded-lg py-4 px-4 text-lg ${activeTab === 2 ? 'bg-black text-white' : 'bg-gray-200'}`}
          onClick={() => handleTabChange(2)}
        >
          Medical Conferences
        </button>
        <button
          className={`rounded-lg py-4 px-4 text-lg ${activeTab === 3 ? 'bg-black text-white' : 'bg-gray-200'}`}
          onClick={() => handleTabChange(3)}
        >
          E-books
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 mb-20">

        {activeTab === 1 && (
          <div>
            <Guidelines/>
          </div>
        )}

        {activeTab === 2 && (
          <div>
            <ConferenceScraper/>
          </div>
        )}

        {activeTab === 3 && (
          <div>
            <BookSearch/>
          </div>
        )}
      </div>
      <LanguageBtn/>
      <ChatWithAIButton/>
    </div>
    <Footer />
    </div>
  );
}

export default Healthcare;
