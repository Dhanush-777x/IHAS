import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Disease() {
    const { diseaseName } = useParams();
    const [diseaseData, setDiseaseData] = useState(null);
    const [activeTab, setActiveTab] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/diseases');
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
            <h1 className="text-center text-3xl font-bold my-8">{diseaseData.name}</h1>
            <div className="flex flex-col md:flex-row p-5 md:p-20">
                <div className="md:w-1/3 mb-5 md:mb-0 bg-white bg-opacity-70 backdrop-blur-lg rounded-lg shadow-lg border-2 h-full">
                    <div className="flex flex-col space-y-2">
                        <button type="button" className={`py-6 px-4 text-sm rounded-lg focus:outline-none flex items-center justify-between hover:bg-secondary ${activeTab === 1 ? 'text-white bg-black hover:bg-black' : ''}`} onClick={() => handleTabClick(1)}>
                            Overview
                            {activeTab === 1 && <div className="w-1 h-full bg-blue-500 opacity-30 rounded-r-lg"></div>}
                        </button>
                        <button type="button" className={`py-6 px-4 text-sm rounded-lg focus:outline-none flex items-center justify-between hover:bg-secondary ${activeTab === 2 ? 'text-white bg-black hover:bg-black' : ''}`} onClick={() => handleTabClick(2)}>
                            Symptoms
                            {activeTab === 2 && <div className="w-1 h-full bg-blue-500 opacity-30 rounded-r-lg"></div>}
                        </button>
                        <button type="button" className={`py-6 px-4 text-sm rounded-lg focus:outline-none flex items-center justify-between hover:bg-secondary ${activeTab === 3 ? 'text-white bg-black hover:bg-black' : ''}`} onClick={() => handleTabClick(3)}>
                            Tab 3
                            {activeTab === 3 && <div className="w-1 h-full bg-blue-500 opacity-30 rounded-r-lg"></div>}
                        </button>
                    </div>
                </div>

                <div className="md:w-2/3 lg:ml-10">
                    <div className="p-4 bg-white bg-opacity-50 backdrop-blur-lg rounded-lg shadow-lg">
                        {activeTab === 1 && (
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                        )}
                        {activeTab === 2 && (
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                        )}
                        {activeTab === 3 && (
                            <p>This is the content of Tab 3</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Disease;
