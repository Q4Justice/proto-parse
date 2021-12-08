'use strict';

const peg = require('pegjs');
const fs = require('fs');

const inputFilePath = './src/proto.peg';
const outputFilePath = './src/parser.js';

fs.readFile(inputFilePath, function (err, data) {
    const parser = peg.generate(data.toString(), { output: 'source', format: 'commonjs' });
    fs.writeFileSync(outputFilePath, parser);
});
