import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Guidelines() {
  return (
    <div className="flex justify-between items-center my-10">
      {/* Diabetes Guidelines Card */}
      <div className="flex flex-col items-center">
        <div className="bg-secondary p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Diabetes Guidelines</h2>
          <div className="mt-4">
            <Link to="/diabetes-guidelines" className="text-primary focus:outline-none ml-2">
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Maternal and Childcare Guidelines Card */}
      <div className="flex flex-col items-center">
        <div className="bg-secondary p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Maternal and Childcare Guidelines</h2>
          <div className="mt-4">
            <Link to="/maternal-childcare-guidelines" className="text-primary focus:outline-none ml-2">
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Vector Borne Diseases Guidelines Card */}
      <div className="flex flex-col items-center">
        <div className="bg-secondary p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Vector Borne Diseases Guidelines</h2>
          <div className="mt-4">
            <Link to="/vector-borne-diseases-guidelines" className="text-primary focus:outline-none ml-2">
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Guidelines;
