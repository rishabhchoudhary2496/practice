setImmediate(() => console.log('hello immediately'))
setTimeout(() => {
    console.log('hello after 5 sec')
},5000)

setInterval(() => {
  console.log('repeating hello after 7 sec')
}, 7000)