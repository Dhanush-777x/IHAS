import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function VectorBorne() {
  const [searchTerm, setSearchTerm] = useState('');
  const [diseases, setDiseases] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dhanush-777x.github.io/json-api/db.json');
        if (!response.ok) {
          throw new Error('Failed to fetch diseases data');
        }
        const data = await response.json();
        setDiseases(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredDiseases = diseases.filter(disease =>
    disease.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8 mt-20">
      {/* Search bar */}
      <input
        type="text"
        placeholder="Search diseases"
        value={searchTerm}
        onChange={handleSearchChange}
        className="w-full max-w-md p-4 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
      />

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {filteredDiseases.map((disease, index) => (
          <Link to={`/disease/${disease.name}`} key={index}>
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition duration-300">
              <h2 className="text-xl font-semibold">{disease.name}</h2>
              <FontAwesomeIcon icon={faArrowRight} className="text-primary text-lg" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default VectorBorne;
