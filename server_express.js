const express = require('express');
const app = express();
const querystring = require('querystring');

app.use('/css', express.static(__dirname + '/public/css'));
app.use('/', (req, res, next) => {
    console.log('Someone made a request for ' + req.url);
    res.cookie('cookiename', 'cookievalue');

    next();
})

app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <link type="text/css" rel="stylesheet" href="/css/styles.css">
            </head>
            <body>
                Hello, dude
            </body>
        </html>
    `)
});

app.get('/api/user', (req, res) => {
    res.send({
        name:'Alex',
        car:["Toyota","Volkswagen"]
    })
});

app.get('/api/:user/:id', (req, res) => {
    let userName = req.params.user;
    let id = req.params.id;
    res.send(`
        <html>
            <body>
                The user id is ${id}, the user name is ${userName}
            </body>
        </html>
    `)
})

app.get('/api/car', (req, res) => {
    let brand = req.query.brand;
    let year = req.query.year;

    res.send({
        brand,
        year
    })
})

const port = process.env.PORT || 3000;

app.listen(port)