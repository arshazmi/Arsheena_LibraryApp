const express = require("express");
const booksRouter = express.Router();
function router(nav){
var books = [{
    
    author: 'Joseph Barbara',
    title: 'Tom and Jerry',
    genre: 'Cartoon',
    img: 'tom.jpg'
},
{
    
    author: 'J K Rowling',
    title: 'Harry Potter',
    genre: 'Fantasy',
    img: 'harry.jpg'
},
{
    author: 'Basheer',
    title: 'Pathumayude Aadu',
    genre: 'Drama',
    img: 'pathu.jpg'
}
]
booksRouter.get('/', function (req, res) {

    res.render('books', {
        nav,
        title: 'Library',
        books
    });
});
booksRouter.get('/:id', function (req, res) {
    const id = req.params.id
    res.render('book', {
        nav,
        title: 'Library',
        book: books[id]
    });
});
return booksRouter;
}

module.exports=router;