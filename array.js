const superheroes = [
  'Thor',
  'IronMan',
  'Captain America',
  'Black Widow',
  'Hulk',
  'HawkEye',
]

let dcHeroes = ['SuperMan','BatMan','Wonder Woman','Flash','Cyborg','Martian']

//map method  maps and change the array 
let MarvelHeroes = superheroes.map((superhero) => `Marvel SuperHero ${superhero}`)
console.log(MarvelHeroes)

//filter method filter the array on condition
let FilteredHeroes = superheroes.filter((superhero) => superhero.startsWith('H'))
console.log(FilteredHeroes)

//concat
console.log(superheroes.concat(dcHeroes))

//every method return true if all passes test
let iSEveryHeroStartWithH = superheroes.every((superhero) => superhero.startsWith('H'))
console.log(iSEveryHeroStartWithH)

//some method return true if even one passes the test
let AnyHeroStartWithH = superheroes.some((superhero) => superhero.startsWith('H'))
console.log(AnyHeroStartWithH)

//return first hero which has character more than 3 chars
let Value = superheroes.find(superhero => superhero.length > 3)
console.log(Value)
//find index 
let index = superheroes.findIndex(superhero => superhero.length > 3)
console.log(index)

superheroes.forEach(superHero => console.log(superHero))
