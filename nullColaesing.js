// Nullish coalescing operator returns second value if first is null or undefined
// || operator fails in case if first value falsy value like 0 or empty string
// which are proper values

const height = 0

console.log(height || 100) // return second even first is valid value
console.log(height ?? 100) // returns first as its not nul lor undefined