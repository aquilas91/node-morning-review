let books = [
    {id: 1, name: 'House of Spirits'},
    {id: 2, name: 'War and Peace'},
    {id: 3, name: 'Dune'}
]

module.exports = {
    getBooks: (req, res) => {
        res.status(200).send(books);
    },
    getSingleBook: (req, res) => {
        let book = books.find(element => element.id === +req.params.id);
        res.status(200).send(book);
    }
}