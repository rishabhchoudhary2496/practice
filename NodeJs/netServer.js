const net = require('net')

const server = net.createServer((socket) => {
    socket.end('goobye')
})

server.on('error',() =>{
    console.log(err)
})

server.on('data',(data) => {
    console.log(data.toString());
})

server.listen(9212,() => {
    console.log('listening')
})