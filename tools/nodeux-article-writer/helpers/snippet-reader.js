const fs = require('fs');

function setSnippet(file_name) {
    return {
        "read": () => {
            return fs.readFileSync(require('path').join(__dirname, '../snippets', file_name), 'utf8');
        }
    }
}

module.exports = {setSnippet};