const express = require('express');
const libgen = require('libgen');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/api/books', async (req, res) => {
    const { page = 1 } = req.query;
    const perPage = 40;

    try {
        const options = {
            mirror: "http://libgen.is",
            query: 'topicid147',
            count: perPage,
            offset : 10
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

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
