let express = require('express');
let app = express();
let articles = require('./article.json')

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.render('index.ejs', { meuh: articles });
})
    .get('/article/:id', (req, res) => {
        res.setHeader('Content-Type', 'text/html');
        res.render('article.ejs', {
            article: req.params.id, myArticle: articles.filter((article) => {
                return article.id == req.params.id
            })[0]
        });
    })
.listen(8080);