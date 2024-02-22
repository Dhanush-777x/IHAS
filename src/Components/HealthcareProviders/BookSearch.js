import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BooksSearch = () => {
    const [books, setBooks] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/books?page=${page}`);
                // Filter books to display only in English language
                const englishBooks = response.data.filter(book => book.language === "English");
                setBooks(englishBooks);
                console.log(englishBooks);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchBooks();
    }, [page]);

    const handleNextPage = () => {
        setPage(page + 1);
    };

    const handlePreviousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-6 sm:py-12">
            <div className="w-full px-4 md:px-6 text-center">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">Search for Books</h2>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 xl:mx-40">
                    {books.map((book, index) => (
                        <div key={index} className="bg-white rounded-md shadow-md p-4 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
                            <h3 className="text-lg font-semibold mb-2">{book.title}</h3>
                            <p className="text-sm text-gray-600">Author: {book.author}</p>
                            <p className="text-sm text-gray-600">Year: {book.year}</p>
                            <p className="text-sm text-gray-600">Pages: {book.pages}</p>
                            <p className="text-sm text-gray-600">Language: {book.language}</p>
                            <p className="text-sm text-gray-600">Filesize: {book.filesize}</p>
                            <a href={book.downloadLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline block mt-2">Download Link</a>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-4">
                    <button onClick={handlePreviousPage} className="mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" disabled={page === 1}>Previous</button>
                    <button onClick={handleNextPage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Next</button>
                </div>
            </div>
        </div>
    );
};

export default BooksSearch;
