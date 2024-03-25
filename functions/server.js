const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const libgen = require('libgen');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const api_key = 'YOUR_API_KEY_HERE';

// Function for fetching books
const fetchBooks = async (req, res) => {
    const { page = 1 } = req.query;
    const perPage = 40;

    try {
        const options = {
            mirror: "http://libgen.is",
            query: 'topicid147',
            count: perPage,
            offset: 10
        };

        const data = await libgen.search(options);
        if (data && data.length > 0) {
            const booksDetails = data.map(book => ({
                title: book.title,
                author: book.author,
                year: book.year,
                pages: book.pages,
                language: book.language,
                filesize: book.filesize,
                extension: book.extension,
                downloadLink: `http://libgen.is/book/index.php?md5=${book.md5.toLowerCase()}`
            }));
            res.json(booksDetails); // Send book details as response
        } else {
            res.status(404).json({ error: "No books found matching the query." });
        }
    } catch (err) {
        console.error("Error fetching book details:", err);
        res.status(500).json({ error: 'Failed fetching book details' });
    }
};

// Function for fetching research papers
const fetchResearchPapers = async (req, res) => {
    try {
        const { start, num, search } = req.query;
        const base_serpapi_url = `https://serpapi.com/search.json?engine=google_scholar&q=${search}&api_key=${api_key}`;
        const serpapi_url = `${base_serpapi_url}&start=${start}&num=${num}`;
        const response = await axios.get(serpapi_url);
        const papers = response.data.organic_results.map(result => ({
            title: result.title,
            authors: (result.publication_info && result.publication_info.authors) ? result.publication_info.authors.map(author => author.name) : [],
            description: result.snippet,
            link: result.link
        }));
        res.json(papers);
    } catch (error) {
        console.error('Error fetching data:', error.message);
        res.status(500).json({ error: 'Failed fetching data' });
    }
};

// Function for scraping data
const scrapeData = async (req, res) => {
    try {
        const page = req.query.page || 0; // Get page number from query parameter, default to 0
        const response = await axios.get(`https://www.india.gov.in/advance-search/results?title=&term_node_tid_depth=166765&sort_by=created&sort_order=DESC&Advance_search_Submit_Botton=Search&page=${page}`);
        const $ = cheerio.load(response.data);
        const data = [];

        $('.views-field-php-4').each((index, element) => {
            const title = $(element).find('h3 a').text().trim();
            const link = $(element).find('h3 a').attr('href');
            const description = $(element).next().next().text().trim();

            data.push({ title, link, description });
        });

        res.json(data);
    } catch (error) {
        console.error('Error scraping data:', error);
        res.status(500).json({ error: 'Error scraping data' });
    }
};

app.get('/api/books', fetchBooks);
app.get('/api/research-papers', fetchResearchPapers);
app.get('/scrape', scrapeData);

module.exports = app;
