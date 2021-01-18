const fs = require('fs');

// async function print() {
//     const dir = await fs.opendir('D://nodePractice')
//     const dirent = await dir.read()
//     console.log(dirent.isDirectory())
// }

// print()

//check for file acess
//fs.promises.access('./http.js',fs.constants.R_OK).then(() => console.log('can access'))


//append data to file
// fs.promises.appendFile('sample.txt', 'hello this is')

//change owenership
// fs.promises.chmod('./sample.txt',777)

//copy file
// fs.promises.copyFile('./sample.txt', './samplecopy.txt')
//  .then(() => console.log('file copied'))
//  .catch((err) => console.log(err))


//mkdir
// fs.mkdir('./dir', (err) => {if(err) console.log(err)})

//open
// fs.open('./sample.txt',(err,fd) => {
//     console.log(fd)
// })

//openDir
// fs.promises.opendir('./dir').then(dir => console.log(dir.read().then(data => console.log(data))))

//read file
// fs.promises.readFile('./sample.txt').then(buffer => console.log(buffer.toString()))

//renaming file
// fs.promises.rename('./sample.txt', './smp.txt').then(() =>console.log(success) )

//removing dir
// fs.promises.rmdir('./dir',{recursive:true})

//stats
// fs.promises.stat('./smp.txt').then((stat) => console.log(stat)).catch(err =>console.log(err))

//writing to file
// fs.promises.writeFile('./new.txt', 'Hello this is')

//creating a read stream
// const readStream = fs.createReadStream('./new.txt');
// readStream.on('data',(buffer) => console.log(buffer.toString()))

//creating a write stream
// const writeStream = fs.createWriteStream('./new.txt')
// writeStream.on('ready',() => {
//     writeStream.write('hello')
// })