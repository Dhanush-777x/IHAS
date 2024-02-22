import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const CardWithImage = ({ title, imageSrc, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={imageSrc} alt={title} className="w-full h-56 object-cover object-center" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <Link to={link} className="flex items-center justify-end mt-4 text-primary hover:text-primary-dark">
          <span>Explore</span>
          <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

const Categories = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <CardWithImage
          title="Vector-Borne Diseases"
          imageSrc="vector-borne-diseases-image-url.jpg"
          link="/vector-borne-diseases"
        />
        <CardWithImage
          title="Non-Communicable Diseases"
          imageSrc="non-communicable-diseases-image-url.jpg"
          link="/non-communicable-diseases"
        />
        <CardWithImage
          title="Maternal and Child Health"
          imageSrc="maternal-child-health-image-url.jpg"
          link="/maternal-child-health"
        />
      </div>
    </div>
  );
};

export default Categories;
