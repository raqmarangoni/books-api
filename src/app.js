const express = require('express');
const auth = require('./middlewares/basicAuth');
const books = require('./domain/books');
const app = express();

app.get('/books', auth, (_, res) => {
    res.json(books);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
