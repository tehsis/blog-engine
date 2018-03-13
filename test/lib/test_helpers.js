const
    assert = require('assert'),
    path = require('path'),
    fs = require('fs'),
    app_helpers = require('../../lib/app_helpers'),
    articles_json = app_helpers.read_db_file_as_json('articles');

const load_expected_article = (article_name) => {
    return JSON.parse(fs.readFileSync(path.join(__dirname, 'expected-articles', article_name + '.json')));
};

module.exports = {assert, app_helpers, articles_json, load_expected_article};