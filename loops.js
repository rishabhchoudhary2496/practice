const superheroes = ['Thor','IronMan','Captain America', 'Black Widow', 'Hulk', 'HawkEye']
//for loop
for(let i=0; i<superheroes.length; i++){
    console.log(superheroes[i])
}

console.log("================")

let timer = 10
//while loop
while(timer!=0){
    console.log(timer)
    timer--
}

//do while
let value = 6
do {
    console.log('executes first time even false')
    console.log(value)
} while (value>6);

const person = { name: 'rick', show: 'walking dead' }

//for in loop
for (let key in person){
    console.log(`${key} ${person[key]}`)
}

//for of loop
for (let char of 'hello'){
    console.log(char)
}