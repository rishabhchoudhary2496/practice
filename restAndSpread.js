// rest operator in js
// collect remaining items in array
function sum(...args) {
    let total = 0
    for(let arg of args){
        total += arg
    }    
    return total
}

//spread allows to expand in the items
let items = ['Milk', 'Eggs', 'bread']
let newItems = ['Curd','Butter']
//spread operators spreads items from both arrays into new array
let finalList = [...items,...newItems]
console.log(finalList)
console.log(sum(1,2,4,5,6,7))