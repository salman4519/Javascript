let result = 0 / 0 ;
console.log(result); // NaN

console.log(NaN === NaN); // false


isNaN()  // the function check if it is NaN

console.log(isNaN(NaN)); // true
console.log(isNaN(undefined)) // true
console.log(isNaN({}))  // true


console.log(isNaN(null)); // false
console.log(isNaN(true))  // false
console.log(isNaN(false)) // false
console.log(isNaN(141))// false

console.log(isNaN("37")) // false
console.log(isNaN("37.54")); // false
console.log("") // false
 console.log(" ") // false

console.log(isNaN("blablabla")) // true
