import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';

const Podcasts = () => {
  const [scrapedData, setScrapedData] = useState([]);

  useEffect(() => {
    const url = 'https://www.boardvitals.com/blog/medical-podcasts/';

    const scrapeData = async () => {
      try {
        const response = await axios.get(url);
        const html = response.data;
        const $ = cheerio.load(html);
        
        const data = [];

        $('h3.wp-block-heading').each((index, element) => {
          const headingText = $(element).text().trim();
          const href = $(element).find('a').attr('href') || '';

          data.push({ heading: headingText, link: href });
        });

        setScrapedData(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    scrapeData();
  }, []);

  return (
    <div>
      <h1>Scraped Data</h1>
      <ul>
        {scrapedData.map((item, index) => (
          <li key={index}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">{item.heading}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Podcasts;