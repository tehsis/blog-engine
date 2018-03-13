let global_config = {
    "db_path": "/db",
    "theme_path": "/themes",
    "theme_name": "nodeux-dark",
    "nodeux_version": require('./package.json').version,
    "max_articles_in_home": 10
};

module.exports = global_config;