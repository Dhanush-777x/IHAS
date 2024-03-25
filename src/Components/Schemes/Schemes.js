import React, { useState, useEffect } from 'react';
import ChatWithAIButton from '../chatWithai';
import LanguageBtn from '../Language';

function Schemes() {
  const [schemes, setSchemes] = useState([]);
  const [filteredSchemes, setFilteredSchemes] = useState([]);
  const [filterLevel, setFilterLevel] = useState('all');
  const [filterBenefit, setFilterBenefit] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [loaded, setLoaded] = useState(false);
  setTimeout(() => {
    setLoaded(true);
  }, 500);
  useEffect(() => {
    fetch('https://dhanush-777x.github.io/json-api/schemes.json')
      .then(response => response.json())
      .then(data => {
        setSchemes(data);
        setFilteredSchemes(data);
      })
      .catch(error => console.error('Error fetching schemes:', error));
  }, []);

  useEffect(() => {
    const filterSchemes = () => {
      let filtered = schemes;

      if (filterLevel !== 'all') {
        filtered = filtered.filter(scheme => scheme.level === filterLevel);
      }

      if (filterBenefit !== 'all') {
        filtered = filtered.filter(scheme => scheme.benefit_type === filterBenefit);
      }

      if (searchQuery.trim() !== '') {
        filtered = filtered.filter(scheme =>
          scheme.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      setFilteredSchemes(filtered);
    };

    filterSchemes();
  }, [filterLevel, filterBenefit, searchQuery, schemes]);

  return (
    <div className={`transition-all duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
      <ChatWithAIButton/>
      <div>
        <h1 className='text-4xl font-bold mt-40'>Government Schemes</h1>
      </div>
      <div className="flex flex-col md:flex-row mt-10 lg:mx-20">
        <div className="w-full md:w-1/4 p-4 my-10">
          <input
            type="text"
            placeholder="Search schemes..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full p-2 mb-10 border border-gray-300 rounded-lg focus:outline-none shadow-md"
          />
          <h2 className="text-lg font-semibold mb-2">Filter by Level</h2>
          <select
            value={filterLevel}
            onChange={e => setFilterLevel(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none shadow-md"
          >
            <option value="all">All</option>
            <option value="Central">Central</option>
            <option value="State">State</option>
          </select>

          <h2 className="text-lg font-semibold mb-2">Filter by Benefit</h2>
          <select
            value={filterBenefit}
            onChange={e => setFilterBenefit(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none shadow-md"
          >
            <option value="all">All</option>
            <option value="Cash">Cash</option>
            <option value="Composite">Composite</option>
            <option value="In Kind">In Kind</option>
          </select>

          
        </div>

        <div className="w-full md:w-3/4 p-4 flex flex-wrap justify-center">
          {filteredSchemes.map((scheme, index) => (
            <div key={index} className="w-full p-4">
              <div className="m-4 p-6 bg-white rounded-xl border text-left border-gray-200 relative overflow-hidden shadow-lg transition duration-200 ease-in-out transform hover:shadow-2xl">
                <h2 className="text-xl text-primary font-semibold mb-2">{scheme.title}</h2>
                <p className="text-gray-700 mb-10">{scheme.description}</p>
                <a href={scheme.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline absolute bottom-4 left-4 text-right">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <LanguageBtn/>
      <ChatWithAIButton/>
    </div>
  );
}

export default Schemes;
