const
    fs = require('fs'),
    path = require('path');

function createArticle(params) {
    return {
        "publishTemp": () => {
            fs.writeFileSync(path.join(__dirname, '../../../tmp', params.main.id + '.json'), JSON.stringify(params.main), 'utf8');
        },
        "publish": () => {
            let articlesJSONPath = path.join(__dirname, '../../../db/articles.json');
            let articlesJSON = JSON.parse(fs.readFileSync(articlesJSONPath, 'utf8'));
            let article_updated = false;
            for (let a in articlesJSON.articles) {
                if (articlesJSON.articles[a].id === params.main.id) {
                    articlesJSON.articles[a] = params.main;
                    article_updated = true;
                    break;
                }
            }
            if (!article_updated) {
                articlesJSON.articles.push(params.main);
            }
            fs.writeFileSync(articlesJSONPath, JSON.stringify(articlesJSON), 'utf8');
        }
    };
}

module.exports = {createArticle};