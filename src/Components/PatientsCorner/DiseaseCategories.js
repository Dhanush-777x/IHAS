import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';

const DiseaseCategories = () => {
    const [diseases, setDiseases] = useState([]);
    const [selectedDisease, setSelectedDisease] = useState(null);
    const [selectedDiseaseContent, setSelectedDiseaseContent] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://www.who.int/health-topics/');
                const $ = cheerio.load(response.data);

                const diseaseData = [];
                $('.date').each((index, element) => {
                    const timestamp = $(element).find('.timestamp');
                    if (timestamp.text().trim() === 'Diseases and conditions') {
                        const heading = $(element).next('.heading').text().trim();
                        const content = $(element).next('.heading').next('div.tabContent').find('div.sf_colsIn p').map((index, element) => $(element).text().trim()).get();
                        diseaseData.push({ heading, content });
                    }
                });

                setDiseases(diseaseData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchSelectedDiseaseContent = async () => {
            if (selectedDisease) {
                try {
                    const response = await axios.get(`https://www.who.int/health-topics/${selectedDisease.toLowerCase().replace(/\s+/g, '-')}`);
                    const $ = cheerio.load(response.data);

                    const heading = $('.dynamic-content__title-text').text().trim();
                    const content = $('div.tabContent > div.sf_colsIn p').map((index, element) => $(element).text().trim()).get();

                    setSelectedDiseaseContent({ heading, content });
                    setModalOpen(true);
                } catch (error) {
                    console.error('Error fetching selected disease content:', error);
                }
            }
        };

        fetchSelectedDiseaseContent();
    }, [selectedDisease]);

    const handleDiseaseClick = (heading) => {
        setSelectedDisease(heading);
    };

    const handleCloseModal = () => {
        setSelectedDisease(null);
        setModalOpen(false);
    };

    return (
        <div className="flex flex-wrap justify-center items-center mt-8 lg:mx-60">
            {diseases.map((disease, index) => (
                <div key={index} className="w-full rounded overflow-hidden shadow-lg mx-4 my-4 cursor-pointer text-left" onClick={() => handleDiseaseClick(disease.heading)}>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{disease.heading}</div>
                    </div>
                </div>
            ))}

            {modalOpen && (
                <div className="fixed inset-0 z-50 overflow-auto bg-gray-900 bg-opacity-50 flex items-center justify-center">
                    <div className="relative p-8 bg-white rounded-lg">
                        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-800" onClick={handleCloseModal}>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="text-2xl font-bold mb-4">{selectedDiseaseContent.heading}</div>
                        <ul className="list-disc list-inside text-left">
                            {selectedDiseaseContent.content.map((item, index) => (
                                <li key={index} className="mb-2">{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DiseaseCategories;
