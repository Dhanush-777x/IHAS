import React, { useState, useEffect } from 'react';
import axios from 'axios';

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            country: 'us',
            category: 'health',
            apiKey: '7b0d8cbdc40c464d8630f3e1ef0fdf3e'
          }
        });
        setNews(response.data.articles.slice(0, 8));
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className='my-40' id='NewsSection'>
      <div className='mt-20 font-semibold text-4xl'>
        <h1>News and Updates</h1>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {news.map((article, index) => (
            <div key={index} className="max-w-lg bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="p-6">
              <img src={article.urlToImage} alt={article.title} className="mb-4 rounded-md h-60 w-full object-cover" />
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{article.title}</h2>
                <p className="text-gray-600 mb-2">{article.description}</p>
                <p className="text-sm text-gray-500">Published: {new Date(article.publishedAt).toLocaleString()}</p>
                <a href={article.url} className="block mt-4 text-sm font-semibold text-orange-600" target='_blank' rel="noopener noreferrer">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
