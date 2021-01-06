// has no size and supports no iterator
// can only contain objects
// objects are garbage collected if not referenced

let dog1 = { name: 'snickers' }
let dog2 = { name: 'crusoe' }

let dogWeakSet = new WeakSet([dog1,dog2])

dog1 = null
// dog1 will be garbage collected if no reference might take couple of second
console.log(dogWeakSet)