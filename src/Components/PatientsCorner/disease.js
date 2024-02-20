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
                // Fetch data from the JSON file
                const response = await fetch('https://dhanush-777x.github.io/json-api/db.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch disease data');
                }
                const data = await response.json();
                console.log(data);
                // Find the disease by name in the diseases array
                const disease = data.find(disease => disease.name === diseaseName);
                if (!disease) {
                    throw new Error('Disease not found');
                }

                // Set the disease data in the state
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
                            Treatment
                            {activeTab === 3 && <div className="w-1 h-full bg-blue-500 opacity-30 rounded-r-lg"></div>}
                        </button>

                    </div>
                </div>

                <div className="lg:w-2/3 lg:ml-10">
                    <div className="p-4 bg-white bg-opacity-50 backdrop-blur-lg rounded-lg shadow-lg text-left">
                        {activeTab === 1 && (
                            <p className='py-10'>
                                <span className='text-2xl font-semibold'>{diseaseData.name}: Overview</span> <br /> <br />
                                {diseaseData.Overview} <br /> <br /> <br />
                                <span className='text-2xl font-semibold'>Types</span> <br /> <br />
                                {diseaseData.type1} <br /> <br />
                                {diseaseData.type2} <br /> <br /> <br />
                                <span className='text-2xl font-semibold'>Facts</span> <br /> <br />
                                {diseaseData.facts} <br /> <br /> <br />
                                <span className='text-2xl font-semibold'>Period of Communicability</span> <br /> <br />
                                {diseaseData.period}<br /> <br /> <br />

                                <br /> <br />
                                <br /> <br />
                                <br /> <br />
                            </p>
                        )}
                        {activeTab === 2 && (
                            <p className='py-10'>
                                <span className='text-2xl font-semibold'>Preventive Measures</span> <br /> <br />
                                {diseaseData.measure1}<br /> <br />
                                {diseaseData.measure2}<br /> <br />
                                {diseaseData.measure3}<br /> <br />
                                {diseaseData.measure4}<br /> <br />
                                {diseaseData.measure5}<br /> <br />
                                {diseaseData.measure6}<br /> <br />
                                {diseaseData.measure7}<br /> <br />
                            </p>
                        )}
                        {activeTab === 3 && (
                            <p>
                                <span className='text-2xl font-semibold'>Do's</span> <br /> <br />
                                {diseaseData.do} <br /> <br /> <br />
                                <span className='text-2xl font-semibold'>Dont's</span> <br /> <br />
                                {diseaseData.dont} <br /> <br /> <br />
                                <span className='text-2xl font-semibold'>Risk Factors</span> <br /> <br />
                                {diseaseData.risk} <br /> <br /> <br />
                                <span className='text-2xl font-semibold'>Specialists</span> <br /> <br />
                                {diseaseData.specialists}<br /> <br /> <br />
                                <span className='text-2xl font-semibold'>Ayush</span> <br /> <br />
                                {diseaseData.ayush}<br /> <br /> <br />
                                <br /> <br />
                                <br /> <br />
                                <br /> <br />
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Disease;
