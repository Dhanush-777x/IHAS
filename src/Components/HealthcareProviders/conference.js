import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the styles
import ChatWithAIButton from '../chatWithai';
import { TailSpin } from 'react-loader-spinner'; // Import Tailwind spinner

const ConferenceScraper = () => {
    const [conferences, setConferences] = useState([]);
    const [filteredConferences, setFilteredConferences] = useState([]);
    const [filterDate, setFilterDate] = useState(null); // Change to null initially
    const [isLoading, setIsLoading] = useState(true); // Add loading state

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true); // Set loading state to true when fetching data
                const response = await axios.get('https://academicworldresearch.org/search.php?categories=health&location=india&date=&gad_source=1');
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
            } finally {
                setIsLoading(false); // Set loading state to false after fetching data
            }
        };

        fetchData();
    }, []);

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
        <div>
            <h1 className='text-4xl font-semibold mt-20 text-center'>Upcoming Medical Conferences</h1>

            {isLoading && (
                <div className="flex justify-center my-20">
                    <TailSpin color="#046A38" height={50} width={50} />
                </div>
            )}

            {!isLoading && (
                <div className="p-4 md:p-8 mt-20 flex flex-col md:flex-row">
                    <div className="md:w-1/3 pr-4">
                        <h2 className="text-2xl font-bold mb-4">Filter by Date</h2>
                        <DatePicker
                            selected={filterDate}
                            onChange={handleFilterDateChange}
                            className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                            placeholderText="Select Date"
                            isClearable // Allow clearing the selected date
                        />
                    </div>
                    <div className="md:w-2/3">
                        {filteredConferences.map((conference, index) => (
                            <div key={index} className="border border-gray-300 rounded-lg p-8 mb-4 text-left">
                                <p className="text-primary text-xl font-semibold mb-2">{conference.name}</p>
                                <p className='mb-2'>{conference.date}</p>
                                <p className='text-gray-700'>{conference.venue}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <ChatWithAIButton />
        </div>
    );
};

export default ConferenceScraper;
