// 4 types of stream
// readable streams
// writable streams
// duplex streams
// transform stream

//implementing a writeable stream
const {Writable,Readable} = require('stream');

// const outStream = new Writable({
//     write(chunk, encoding, callback){
//         console.log(chunk.toString())
//         callback();
//     }
// })

// const inStream = new Readable({
//     read(){

//     }
// })

// inStream.push('abc')
// inStream.pipe(process.stdout)
// process.stdin.pipe(outStream)


//readable stream
const fs = require('fs');
const readStream = fs.createReadStream('./samplecopy.txt')
readStream.on('data',(buffer) => {
    console.log(buffer.toString())
})
const writeStream = fs.createWriteStream('./new.txt');
readStream.pipe(writeStream);