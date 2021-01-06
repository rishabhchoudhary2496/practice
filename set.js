//contain unique values
//remeber insertion order
// iterable
let numbers = [1,2,3,4,5,6,5,6,6]
let uniquesNumbers = new Set(numbers)
console.log('numbers ', numbers)
uniquesNumbers.add(5)
console.log('uniqueNumbers ', uniquesNumbers)
console.log(uniquesNumbers.size)