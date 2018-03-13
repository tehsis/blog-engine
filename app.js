const
    express = require('express'),
    app_helpers = require('./lib/app_helpers'),
    ejs_helpers = require('./lib/ejs_helpers'),
    app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.locals = {ejs_helpers};


let articles_json = app_helpers.read_db_file_as_json('articles');
let articles_filtered = app_helpers.filter_hidden_home_articles(articles_json.articles);
let max_articles_in_home = ejs_helpers.get_max_articles_in_home();
let articles_filtered_for_home = articles_filtered.slice(0, max_articles_in_home);

app.get('/', (req, res) => {
    res.render('pages/index', {articles: articles_filtered_for_home});
});

app.get('/articles', (req, res) => {
    res.render('pages/articles', {articles: articles_filtered});
});

app.get('/articles/:id', (req, res) => {
    let _id = req.params.id;
    app_helpers.find_and_handle_article(articles_json, _id).then((article) => {
        res.render('pages/article', {article});
    }).catch(() => {
        res.status(404);
        res.render('pages/404');
    });
});

app.get('/articles.json', (req, res) => {
    res.json(articles_json);
});

app.get('*', (req, res) => {
    res.status(404);
    res.render('pages/404');
});

app.listen(3000, () => {
    console.log("Express Running.");
});