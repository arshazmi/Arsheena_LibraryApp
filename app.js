const express = require("express");
const app = express();
const nav = [
    {link:'/home',name:'HOME'},
    { link: '/signin', name: 'Sign In' },
    { link: '/signup', name: 'Sign Up' },
    { link: '/books', name: 'Books' },
    { link: '/authors', name: 'Authors' },
    { link: '/admin', name: 'Add Book' },
    { link: '/add', name: 'Add Author' },
    {link:'/',name:'Log Out'}
];

const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorsRouter = require('./src/routes/authorRoutes')(nav);
const adminRouter = require('./src/routes/adminRoutes')(nav);
const addRouter = require('./src/routes/addRoutes')(nav);
const signinRouter = require('./src/routes/signinRoutes')(nav);
const signupRouter = require('./src/routes/signupRoutes')(nav);

app.use(express.static('./public'));
app.set('view engine', 'ejs')
app.set('views', __dirname + '/src/views');
app.use('/books', booksRouter);
app.use('/authors', authorsRouter);
app.use('/admin',adminRouter);
app.use('/add',addRouter);
app.use('/signin',signinRouter);
app.use('/signup',signupRouter);

app.get('/', function (req, res) {

    res.render('index', {
        nav,
        title: 'Library'
    });
});

app.get('/home', function (req, res) {

    res.render('home', {
        nav,
        title: 'Library'
    });
});

app.listen(5000);