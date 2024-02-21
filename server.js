const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const api_key = '3018ce951102942258f6aeb445eaf00aa76be24ca95d9474faf00822b803c8c5';

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

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
