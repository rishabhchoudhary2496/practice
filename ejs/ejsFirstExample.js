let ejs = require('ejs');
let people = ['mark','john','doe']

let html = ejs.render('<%= people.join(", "); %>', { people: people })
console.log(html)