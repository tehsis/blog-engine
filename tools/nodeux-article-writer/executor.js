const path = require('path');
const articles = [
    'snippets-in-java',
    'about-nodeux'
];

console.log('Nodeux Blog Engine ...');

for (const a of articles) {
    process.stdout.write(`Compiling ${a} ...`);
    require(path.join(__dirname, 'articles', a)).execute();
    process.stdout.write(' done.\n');
}

