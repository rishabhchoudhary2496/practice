const EventEmitter = require('events');
const myEvent = new EventEmitter();

myEvent.on('send',()=>{
    console.log('sending broadcast')
})

console.log(EventEmitter.listenerCount('myEvent','send'))
myEvent.emit('send')