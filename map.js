//map can contains keys other than string and symbol like objects
//remembers insertion order
//doesn't conatain predefined keys
//iterable
//size to check size
let contacts = new Map()
contacts.set('Jessie', { phone: '213-555-1234', address: '123 N 1st Ave' })
contacts.set('Hilary', { phone: '213-555-1434', address: '123 N 1st Ave' })
console.log((contacts.has('Jessie')))
console.log(contacts.size)
console.log(contacts.get('Jessie'))