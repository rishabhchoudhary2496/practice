// function expression not hoisted

const sayHello = function(){
    console.log('hello')
}

//function declaration are hoisted
function add(num1,num2){
    return num1+num2
}
console.log(add(4,5))

//arrow function are also not hoisted
const subtract = (num1,num2) => num1-num2
console.log(subtract(10,5))

sayHello()