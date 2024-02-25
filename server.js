const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const libgen = require('libgen');
const cors = require('cors');

const app = express();
const PORT_BOOKS = process.env.PORT_BOOKS || 5000;
const PORT_PAPERS = process.env.PORT_PAPERS || 5001;
const PORT_SCRAPER = process.env.PORT_SCRAPER || 5003;
const PORT_CUSTOM = process.env.PORT_CUSTOM || 5004;

app.use(express.json());
app.use(cors());

const api_key = '6f4b51539f2fc88cc191f52c884143e7d7182b0ad18b8f4b22d197a7e212d138e';

// Endpoint for fetching books
app.get('/api/books', async (req, res) => {
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
            console.log(JSON.stringify(booksDetails, null, 2));
            res.json(booksDetails); // Send book details as response
        } else {
            console.log("No books found matching the query.");
            res.status(404).json({ error: "No books found matching the query." });
        }
    } catch (err) {
        console.error("Error fetching book details:", err);
        res.status(500).json({ error: 'Failed fetching book details' });
    }
});

// Endpoint for fetching research papers
app.get('/api/research-papers', async (req, res) => {
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
});

// Endpoint for scraping data
app.get('/scrape', async (req, res) => {
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
});

// Custom endpoint - Add your custom routes here
app.get('/custom', (req, res) => {
    res.send('Custom endpoint');
});

// Start listening for all endpoints
app.listen(PORT_BOOKS, () => {
    console.log(`Books server is running on port ${PORT_BOOKS}`);
});

app.listen(PORT_PAPERS, () => {
    console.log(`Papers server is running on port ${PORT_PAPERS}`);
});

app.listen(PORT_SCRAPER, () => {
    console.log(`Scraper server is running on port ${PORT_SCRAPER}`);
});

app.listen(PORT_CUSTOM, () => {
    console.log(`Custom server is running on port ${PORT_CUSTOM}`);
});
