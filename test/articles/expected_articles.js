const test_helpers = require('../lib/test_helpers');
const articles_json = test_helpers.app_helpers.read_db_file_as_json('articles');

describe('expected articles', () => {
    articles_json.articles.forEach((a) => {
        it(a.id, async () => {
            const expected_article = test_helpers.load_expected_article(a.id);
            let actual_article;
            try {
                actual_article = await test_helpers.app_helpers.find_and_handle_article(articles_json, a.id);
            } catch (e) {
                test_helpers.assert.fail(a.id + " not found.");
            }
            test_helpers.assert.deepEqual(actual_article, expected_article, a.id + " corrupted.");
        });
    });
});