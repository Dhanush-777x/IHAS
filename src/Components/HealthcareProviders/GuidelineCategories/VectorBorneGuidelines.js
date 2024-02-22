import React, { useState, useEffect } from 'react';

function VectorBorneGuidelines() {
  const [guidelines, setGuidelines] = useState([]);

  useEffect(() => {
    fetch('https://dhanush-777x.github.io/json-api/VectorBorneGuidelines.json')
      .then(response => response.json())
      .then(data => setGuidelines(data))
      .catch(error => console.error('Error fetching guidelines:', error));
  }, []);

  return (
    <div className='mt-40'>
      <h1 className='text-3xl font-semibold'>Standard Guidelines for Vector Borne Diseases</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 mx-20">
      {guidelines.map((guideline, index) => (
        <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">{guideline.title}</h2>
          <a href={guideline.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Read more</a>
        </div>
      ))}
    </div>
    </div>
    
  );
}

export default VectorBorneGuidelines;
