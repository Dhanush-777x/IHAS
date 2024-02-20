import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the styles
import ChatWithAIButton from './chatWithai';
import Footer from './Footer';

const ConferenceScraper = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [conferences, setConferences] = useState([]);
    const [filteredConferences, setFilteredConferences] = useState([]);
    const [filterDate, setFilterDate] = useState(null); // Change to null initially

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://academicworldresearch.org/search.php?categories=Medical&location=&date=');
                const data = response.data;
                const $ = cheerio.load(data);
                const conferenceData = [];

                $('table tr').each((index, element) => {
                    if (index !== 0) { // Skip header row
                        const columns = $(element).find('td');
                        const date = $(columns[0]).text().trim();
                        const name = $(columns[1]).text().trim();
                        const venue = $(columns[2]).text().trim();

                        conferenceData.push({
                            date,
                            name,
                            venue
                        });
                    }
                });
                setConferences(conferenceData);
                setFilteredConferences(conferenceData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleTabChange = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    const handleFilterDateChange = (date) => {
        setFilterDate(date);
        filterConferences(date);
    };

    const filterConferences = (date) => {
        const filtered = conferences.filter(conference => {
            // Parse the conference date to a JavaScript Date object
            const conferenceDate = new Date(
                conference.date.split('-').reverse().join('-') // Convert "19-02-2024" to "2024-02-19"
            );
            return date ? conferenceDate.toDateString() === date.toDateString() : true;
        });
        setFilteredConferences(filtered);
    };

    return (
        <div className="p-4 md:p-8 mt-40">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <button
                    className={`rounded-lg py-4 px-4 text-lg ${activeTab === 1 ? 'bg-black text-white' : 'bg-gray-200'}`}
                    onClick={() => handleTabChange(1)}
                >
                    Guidelines
                </button>
                <button
                    className={`rounded-lg py-4 px-4 text-lg ${activeTab === 2 ? 'bg-black text-white' : 'bg-gray-200'}`}
                    onClick={() => handleTabChange(2)}
                >
                    Medical Conferences
                </button>
                <button
                    className={`rounded-lg py-4 px-4 text-lg ${activeTab === 3 ? 'bg-black text-white' : 'bg-gray-200'}`}
                    onClick={() => handleTabChange(3)}
                >
                    E-books
                </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 mb-20">
                {/* Content for Tab 1 */}
                {activeTab === 1 && (
                    <div>
                        hi1
                    </div>
                )}

                {/* Content for Tab 2 */}
                {activeTab === 2 && (
                    <div className="grid md:grid-cols-3 gap-4">
                        {/* Filter Section */}
                        <div className="md:col-span-1">
                            <p className='text-xl my-4 font-semibold'>Filter by Date</p>
                            <DatePicker
                                selected={filterDate}
                                onChange={handleFilterDateChange}
                                className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                                placeholderText="Select Date"
                                isClearable // Allow clearing the selected date
                            />
                        </div>

                        {/* Cards Section */}
                        <div className="md:col-span-2">
                            {filteredConferences.length > 0 ? (
                                filteredConferences.map((conference, index) => (
                                    <div key={index} className="border border-gray-300 text-left rounded-lg p-4 mb-4">
                                        <p className='text-xl font-semibold my-2 text-primary'>{conference.name}</p>
                                        <p className='text-gray-600'>{conference.date}</p>
                                        <p className='text-gray-600'>{conference.venue}</p>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-600">No conferences found.</p>
                            )}
                        </div>
                    </div>
                )}

                {/* Content for Tab 3 */}
                {activeTab === 3 && (
                    <div>
                        hello
                    </div>
                )}
            </div>
            <Footer />
            <ChatWithAIButton />
        </div>
    );
};

export default ConferenceScraper;
