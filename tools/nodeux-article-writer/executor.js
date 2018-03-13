const path = require('path');
const articles = [
    'about-nodeux'
];

console.log('Nodeux Blog Engine ...');

for (let a of articles) {
    process.stdout.write('Compiling ' + a + ' ...');
    require(path.join(__dirname, 'articles', a)).execute();
    process.stdout.write(' done.\n');
}
