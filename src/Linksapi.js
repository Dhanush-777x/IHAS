const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors()); // Enable CORS

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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
