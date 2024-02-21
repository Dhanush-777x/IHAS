const axios = require('axios');

const api_key = '3018ce951102942258f6aeb445eaf00aa76be24ca95d9474faf00822b803c8c5';

exports.handler = async (event, context) => {
    try {
        const { start, num, search } = event.queryStringParameters;
        const base_serpapi_url = `https://serpapi.com/search.json?engine=google_scholar&q=${search}&api_key=${api_key}`;
        const serpapi_url = `${base_serpapi_url}&start=${start}&num=${num}`;
        const response = await axios.get(serpapi_url);
        const papers = response.data.organic_results.map(result => ({
            title: result.title,
            authors: (result.publication_info && result.publication_info.authors) ? result.publication_info.authors.map(author => author.name) : [],
            description: result.snippet,
            link: result.link
        }));
        return {
            statusCode: 200,
            body: JSON.stringify(papers)
        };
    } catch (error) {
        console.error('Error fetching data:', error.message);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed fetching data' })
        };
    }
};
