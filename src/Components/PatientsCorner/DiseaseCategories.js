import React from 'react';
import { Link } from 'react-router-dom';

const DiseaseCategories = () => {
    return (
        <div className="flex flex-wrap justify-center items-center mt-8 lg:mx-60">
            <Link to="/vector-borne-diseases" className="max-w-xs w-full rounded overflow-hidden shadow-lg mx-4 my-4 block">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Vector Borne Diseases</div>
                </div>
            </Link>
            <Link to="/diabetes" className="max-w-xs w-full rounded overflow-hidden shadow-lg mx-4 my-4 block">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Diabetes</div>
                </div>
            </Link>
            <Link to="/maternal-child-care" className="max-w-xs w-full rounded overflow-hidden shadow-lg mx-4 my-4 block">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Maternal and Child Care</div>
                </div>
            </Link>
        </div>
    );
};

export default DiseaseCategories;
