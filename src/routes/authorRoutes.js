const express = require("express");
const authorsRouter = express.Router();
function router(nav){
var authors = [{
    
    title: 'Joseph Barbara',
    book: 'Tom and Jerry',
    genre: 'Cartoon',
    img: 'barbara.jpg'
},
{
    
    title: 'J K Rowling',
    book: 'Harry Potter',
    genre: 'Fantasy',
    img: 'jk.jpg'
},
{
    title: 'Basheer',
    book: 'Pathumayude Aadu',
    genre: 'Drama',
    img: 'bashi.jpg'
}
]
authorsRouter.get('/', function (req, res) {

    res.render('authors', {
        nav,
        title: 'Library',
        authors
    });
});
authorsRouter.get('/:id', function (req, res) {
    const id = req.params.id
    res.render('author', {
        nav,
        title: 'Library',
        author: authors[id]
    });
});
return authorsRouter;
}

module.exports=router;