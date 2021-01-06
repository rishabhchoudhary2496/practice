var num1 = 20
//var supports hoisting
console.log(num1)

for(let i=0; i<5; i++){
    console.log(i);
}
// let variables are block scoped also
// can not be redeclared
console.log(i); // throws error outside block

const maxValue = 20 // constant cannot be reassigned
console.log(maxValue)