const fs = require('fs'),
    path = require('path'),
    config = require('../config.global');

let filter_hidden_home_articles = (articles_array) => {
    let articles_return = [];
    for (let i = 0; i < articles_array.length; i++) {
        let article = articles_array[i];
        if (typeof article['hidden_home'] !== 'undefined' && article['hidden_home'] === true) {
            continue;
        }
        articles_return.push(article);
    }
    return articles_return;
};

let read_db_file_as_json = (db_name) => {
    return JSON.parse(fs.readFileSync(path.join(__dirname, '..', config.db_path, db_name + '.json'), 'utf8'));
};

let find_and_handle_article = (articles_json, article_id) => {
    return new Promise((resolve, reject) => {
        for (let article of articles_json.articles) {
            if (article.id === article_id) {
                resolve(article);
            }
        }
        reject();
    });
};

module.exports = {
    filter_hidden_home_articles,
    read_db_file_as_json,
    find_and_handle_article
};