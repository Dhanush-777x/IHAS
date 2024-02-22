import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ChatWithAIButton from '../chatWithai';

function Disease() {
    const { diseaseName } = useParams();
    const [diseaseData, setDiseaseData] = useState(null);
    const [activeTab, setActiveTab] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dhanush-777x.github.io/json-api/db.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch disease data');
                }
                const data = await response.json();
                console.log(data);
                const disease = data.find(disease => disease.name === diseaseName);
                if (!disease) {
                    throw new Error('Disease not found');
                }

                setDiseaseData(disease);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [diseaseName]);


    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    if (!diseaseData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="mt-10 md:mt-40">
            <ChatWithAIButton/>
            <h1 className="text-center text-4xl font-bold mt-40">{diseaseData.name}</h1>
            <div className="flex flex-col lg:flex-row p-5 md:p-20">
                <div className="lg:w-1/3 mb-5 lg:mb-10 bg-white bg-opacity-70 backdrop-blur-lg rounded-lg shadow-lg border-2 h-full">
                    <div className="flex flex-col space-y-2">
                        <button
                            type="button"
                            className={`py-6 px-4 text-sm rounded-lg focus:outline-none flex items-center justify-between ${activeTab === 1 ? 'text-white bg-black' : 'hover:bg-secondary'
                                } ${activeTab === 1 ? '' : 'hover:bg-secondary'}`}
                            onClick={() => handleTabClick(1)}
                        >
                            Overview
                            {activeTab === 1 && <div className="w-1 h-full bg-blue-500 opacity-30 rounded-r-lg"></div>}
                        </button>
                        <button
                            type="button"
                            className={`py-6 px-4 text-sm rounded-lg focus:outline-none flex items-center justify-between ${activeTab === 2 ? 'text-white bg-black' : ''
                                } ${activeTab !== 2 ? 'hover:bg-secondary' : ''}`}
                            onClick={() => handleTabClick(2)}
                        >
                            Prevention
                            {activeTab === 2 && <div className="w-1 h-full bg-blue-500 opacity-30 rounded-r-lg"></div>}
                        </button>

                        <button
                            type="button"
                            className={`py-6 px-4 text-sm rounded-lg focus:outline-none flex items-center justify-between ${activeTab === 3 ? 'text-white bg-black' : ''
                                } ${activeTab !== 3 ? 'hover:bg-secondary' : ''}`}
                            onClick={() => handleTabClick(3)}
                        >
                            Risk Factors
                            {activeTab === 3 && <div className="w-1 h-full bg-blue-500 opacity-30 rounded-r-lg"></div>}
                        </button>

                        <button
                            type="button"
                            className={`py-6 px-4 text-sm rounded-lg focus:outline-none flex items-center justify-between ${activeTab === 4 ? 'text-white bg-black' : ''
                                } ${activeTab !== 4 ? 'hover:bg-secondary' : ''}`}
                            onClick={() => handleTabClick(4)}
                        >
                            Ayush
                            {activeTab === 4 && <div className="w-1 h-full bg-blue-500 opacity-30 rounded-r-lg"></div>}
                        </button>

                    </div>
                </div>

                <div className="lg:w-2/3 lg:ml-10">
                    <div className="p-4 bg-white bg-opacity-50 backdrop-blur-lg rounded-lg shadow-lg text-left">
                        {activeTab === 1 && (
                            <p className='py-10'>
                                <span className='text-2xl font-semibold text-primary'>{diseaseData.name}: Overview</span> <br /> <br />
                                {diseaseData.Overview} <br /> <br /> <br />
                                {diseaseData.fact1} <br />
                                {diseaseData.fact2} <br />
                                {diseaseData.fact3} <br /> <br /> <br />
                                <span className='text-2xl font-semibold text-primary'>Types</span> <br /> <br />
                                {diseaseData.type1} <br /> <br />
                                {diseaseData.type2} <br /> <br /> <br />
                            </p>
                        )}
                        {activeTab === 2 && (
                            <p className='py-10'>
                                <span className='text-2xl font-semibold text-primary'>Preventive Measures</span> <br /> <br />
                                <strong>1. {diseaseData.measure1title}</strong><br />
                                {diseaseData.measure1description}<br /> <br />
                                <strong>2. {diseaseData.measure2title}</strong><br />
                                {diseaseData.measure2description}<br /> <br />
                                <strong>3. {diseaseData.measure3title}</strong><br />
                                {diseaseData.measure3description}<br /> <br />
                                <strong>4. {diseaseData.measure4title}</strong><br />
                                {diseaseData.measure4description}<br /> <br />
                                <strong>5. {diseaseData.measure5title}</strong><br />
                                {diseaseData.measure5description}<br /> <br />
                                <strong>6. {diseaseData.measure6title}</strong> <br />
                                {diseaseData.measure6description}<br /> <br />
                                <strong>7. {diseaseData.measure7title}</strong><br />
                                {diseaseData.measure7description}<br /> <br />
                            </p>
                        )}
                        {activeTab === 3 && (
                            <p>
                                <span className='text-2xl font-semibold text-primary'>Risk Factors</span> <br /> <br />
                                {diseaseData.risk1} <br /> <br /> 
                                {diseaseData.risk2} <br /> <br />
                                {diseaseData.risk3} <br /> <br />
                                {diseaseData.risk4}<br /> <br />
                                {diseaseData.risk5}<br /> <br />
                                {diseaseData.risk6}<br /> <br />
                                {diseaseData.risk7}<br /> <br />
                                <br /> <br />
                                <br /> <br />
                                <br /> <br />
                            </p>
                        )}
                        {activeTab === 4 && (
                            <p className='py-10'>
                            <span className='text-2xl font-semibold text-primary'>Ayurveda, Yoga and Naturopathy, Unani, Siddha and Homeopathy</span> <br /> <br />
                            <strong>1. {diseaseData.ayush1.title}</strong><br />
                            {diseaseData.ayush1.description}<br /> <br />
                            <strong>2. {diseaseData.ayush2.title}</strong><br />
                            {diseaseData.ayush2.description}<br /> <br />
                            <strong>3. {diseaseData.ayush3.title}</strong><br />
                            {diseaseData.ayush3.description}<br /> <br />
                        </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Disease;
