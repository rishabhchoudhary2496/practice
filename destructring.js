// destructring allow us to unpack values from collections
const team = ['rick', 'morty', 'glenn', 'emilia', 'beatrice', 'ram']

//array destructring
const [captain,viceCaptain,...members] = team;
console.log(
  `captain: ${captain} vice captain: ${viceCaptain} members: ${members} `
)

//swapping using destructring
let a =10 , b=20;
[a,b]= [b,a]
console.log(a,b)

// object destructring in js
const {id, name, ...rest} = {id:0 , name: 'Max', game: 'life is strange',rating:8 }
console.log(id,name,rest)

//variable can be assinged if undefeind
const {c = 10, d = 5} = {c: 3};

console.log(c); // 3
console.log(d); // 