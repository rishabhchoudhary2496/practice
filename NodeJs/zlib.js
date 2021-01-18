const fs = require('fs');
const zlib = require('zlib')


const zip = zlib.createGzip()
const unzip = zlib.createUnzip()
// const readStream = fs.createReadStream('./new.txt')
// const writeStream = fs.createWriteStream('./new.txt.gz');

//compressing a file
// readStream.pipe(zip).pipe(writeStream);

//uncompressing a file
const rs = fs.createReadStream('./new.txt.gz');
const ws = fs.createWriteStream('./new-se.txt');

rs.pipe(unzip).pipe(ws);

