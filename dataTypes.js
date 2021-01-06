const number = 120 // number type stored as floating type
const string = 'hello' // string data type is immutable
const hasValue = false // boolean
const someValue = undefined
const stock = null
const bigNumber = 2n ** 53n //big int
const symbol1= Symbol('rick') // create unique values can be used as object keys
const symbol2= Symbol('rick')


console.log(number)
console.log(string)
console.log(hasValue)
console.log(someValue)
console.log(stock)
console.log(bigNumber)
console.log(symbol1 === symbol2)