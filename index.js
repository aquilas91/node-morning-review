const express = require('express');
const ctrl = require('./controller');

const app = express();

app.use(express.json());

app.get('/api/greeting', (req, res) => {
    res.status(200).send('Hello World!')
})

app.get('/api/books', ctrl.getBooks);
app.get('/api/book/:id', ctrl.getSingleBook);

const port = 4040;
app.listen(port, () => console.log(`Server running on ${port}`));