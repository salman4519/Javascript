// typeof
// it is method to type checking and return a string that explains the type

console.log(typeof "hello"); // string
console.log(typeof 11); // number
console.log(typeof undefined);  // undefined
console.log(typeof Symbol("x")); // symbol
console.log(typeof true) // boolean
console.log(typeof BigInt("123")); // bigint
console.log(typeof function(){}) // function
console.log(typeof null); // object   (it is a long standing js bug)
console.log(typeof {}); // object 
console.log(typeof []); // object

// for checking array we are using Array.isArray()
//Array.isArray

console.log(Array.isArray([])) // true 
console.log(Array.isArray({})) // false
