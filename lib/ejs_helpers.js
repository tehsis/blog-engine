let path = require('path');
let global_config = require('../config.global');

let ejs_helpers = {
    "assemble_css_link": (resource_name) => path.join(global_config.theme_path, global_config.theme_name,'css', resource_name),
    "assemble_img_link": (resource_name) => path.join(global_config.theme_path, global_config.theme_name, 'imgs', resource_name),
    "assemble_js_link": (resource_name) => path.join(global_config.theme_path, global_config.theme_name, 'js', resource_name),
    "get_nodeux_version": () => global_config.nodeux_version,
    "get_max_articles_in_home": () => global_config.max_articles_in_home
};

module.exports = ejs_helpers;