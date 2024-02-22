import React, { useState, useEffect } from 'react';
import Footer from '../HomePage/Footer';
import ChatWithAIButton from '../chatWithai';
import ConferenceScraper from './conference';
import BookSearch from './BookSearch';

function Healthcare() {
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div>
    <div className="p-8 mt-40">
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
            hi
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
      
      <ChatWithAIButton/>
    </div>
    <Footer />
    </div>
  );
}

export default Healthcare;
