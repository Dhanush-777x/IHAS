import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

function VbInfo() {
  const handleCardClick = (disease) => {
    // Handle click event, e.g., route to the respective page
    console.log(`Clicked on ${disease}`);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link
          to="/dengue"
          className="bg-blue-200 p-4 rounded-md cursor-pointer hover:bg-blue-300"
          onClick={() => handleCardClick('Dengue')}
        >
          Dengue
        </Link>
        <Link
          to="/malaria"
          className="bg-green-200 p-4 rounded-md cursor-pointer hover:bg-green-300"
          onClick={() => handleCardClick('Malaria')}
        >
          Malaria
        </Link>
        <Link
          to="/chikungunya"
          className="bg-yellow-200 p-4 rounded-md cursor-pointer hover:bg-yellow-300"
          onClick={() => handleCardClick('Chikungunya')}
        >
          Chikungunya
        </Link>
      </div>
    </div>
  );
}

export default VbInfo;
