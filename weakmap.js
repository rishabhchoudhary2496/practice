let dog1 = {name:'snickers'}
let dog2 = {name:'crusoe'}

const strong = new Map()
const weak = new WeakMap()

strong.set(dog1,'snickers is cool dog')
weak.set(dog1,'crusoe is cool dog')

dog1  = null
dog2 = null
console.log(strong)
console.log(weak)

//weak map garabage collects if there are no references 
// map holds the objects even if doesn't have a reference
// weak map keys can only be objects