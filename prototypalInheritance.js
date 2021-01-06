let animal = {
    eats: true,
    eat(){
        console.log('eating')
    }
}

let rabbit = {
    jumps: true,
    jump(){
        console.log('jumping')
    }
}

let dog = {
    bark:true,
    bark(){
        console.log('woof')
    }
}

// rabbit will look up its prototype object in chain and finds eat method

Object.setPrototypeOf(rabbit, animal)

rabbit.eat()