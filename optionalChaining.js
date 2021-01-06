//when we try to acess object nested properties that doesn't exist for some reason
// it may throw error or we have check each with if condition  optionalchaining makes 
//it easy, if nested property doesn't exist it just return undefined

let user = {} // a user without "address" property

console.log(user?.address?.street) // Error!
