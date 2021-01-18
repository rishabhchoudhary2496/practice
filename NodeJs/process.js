const fs = require('fs').promises

// fs.readFile('./radnm.txt')

// process.on('unhandledRejection',() => {
//     process.exit(1)
// })

// process.on('exit',() => {
//     console.log('exiting the process')
// })

// console.log(process.arch)
// console.log(process.argv)
// console.log(process.channel)
// try{
//     process.chdir('d://')
//     console.log(`New directory: ${process.cwd()}`)
// }catch(err){
//     console.log(err)
// }

// console.log(process.cpuUsage())
// console.log(process.env)
console.log(process.execPath)
// console.log(process.hrtime())
console.log(process.memoryUsage())
console.log(process.pid)