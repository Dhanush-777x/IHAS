import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ChatWithAIButton from '../chatWithai';
import LanguageBtn from '../Language';

const ResearchPapers = () => {
    const [papers, setPapers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const itemsPerPage = 10;
    const [loaded, setLoaded] = useState(false);
    setTimeout(() => {
      setLoaded(true);
    }, 500);
    useEffect(() => {
        const fetchData = async () => {
            try {
                let apiUrl = `http://localhost:5001/api/research-papers?start=${(currentPage - 1) * itemsPerPage}&num=${itemsPerPage}`;
                if (searchQuery) {
                    apiUrl += `&search=${searchQuery}`;
                }
                const response = await axios.get(apiUrl);
                if (response.status === 200) {
                    setPapers(response.data || []);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                    throw new Error('Failed fetching data');
                }
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };

        fetchData();
    }, [currentPage, searchQuery]);

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
    };

    return (
        <div className={`transition-all duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className='mt-40 text-3xl font-semibold'>Research Papers</h1>
            <div className="mx-4 my-8">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearch}
                    placeholder="Search..."
                    className="w-full max-w-md px-4 py-2 border border-primary rounded-md focus:outline-none focus:ring focus:border-primary"
                />
                <div className="grid grid-cols-1 xl:mx-80 gap-4 mt-10 text-left">
                    {papers.map((paper, index) => (
                        <div key={index} className="bg-white shadow-md rounded-lg p-4">
                            <h3 className="text-xl font-semibold mb-2 text-primary">{paper.title}</h3>
                            <p className="text-sm text-gray-600 mb-2">{paper.authors.join(', ')}</p>
                            <p className="text-sm text-gray-700 mb-2">{paper.description}</p>
                            <a href={paper.link} target="_blank" rel="noopener noreferrer" className="mt-2 text-blue-500 hover:underline">Read more</a>
                        </div>
                    ))}
                </div>
                <div className="mt-6 lg:mx-80 flex justify-between">
                    <button onClick={prevPage} disabled={currentPage === 1} className=" px-4 py-2 bg-primary text-white rounded-md cursor-pointer">&lt;</button>
                    <button onClick={nextPage} className="px-4 py-2 bg-primary text-white rounded-md cursor-pointer">&gt;</button>
                </div>
            </div>
            <LanguageBtn/>
            <ChatWithAIButton/>
        </div>
    );
};

export default ResearchPapers;
