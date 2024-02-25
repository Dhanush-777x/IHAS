import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Links = () => {
  const [scrapedData, setScrapedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchData = async (page) => {
    try {
      const response = await axios.get(`http://localhost:5003/scrape?page=${page}`);
      console.log(response.data);
      setScrapedData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]); // Fetch data when currentPage changes

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(Math.max(currentPage - 1, 0));
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-40 text-left">
      <h1 className="text-3xl font-bold mb-8 text-primary">Indian Government Important Websites</h1>
      <div className="grid grid-cols-1 gap-6">
        {scrapedData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 hover:scale-105"
          >
            <h2 className="text-lg font-semibold mb-4">
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                {item.title}
              </a>
            </h2>
            <p className="text-gray-700 mb-4">{item.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <button onClick={handlePrevPage} className="bg-primary text-white px-4 py-2 rounded-md mr-2">Previous</button>
        <button onClick={handleNextPage} className="bg-primary text-white px-4 py-2 rounded-md">Next</button>
      </div>
    </div>
  );
};

export default Links;
