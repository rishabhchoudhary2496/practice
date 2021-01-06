// syntax to crdate objects

// object literal syntax
const character = {name: 'Max', game: 'life is strange'}
console.log(character)

// object with new
const person = new Object()
person.name = 'rick'
person.age = 50
console.log(person)

//create object with constructor function
function MakeSuperHero(name,superPower,universe) {
    this.name = name
    this.superPower = superPower
    this.universe = universe
}


const myHero = new MakeSuperHero('flash','hyper speed' , 'DC')
console.log(myHero)


//looping in object with for of
for (const [key, value] of Object.entries(character)) {
  console.log(`${key}: ${value}`)
}