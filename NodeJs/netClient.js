const net = require('net');
const client = net.connect(9212,() => {
    console.log('connected to server')
    client.write('hello')
})


client.on('data',(buffer) => {
    console.log(buffer.toString())
})
client.on('end', () => {
  console.log('disconnected from server')
})  

