let x;
console.log(x)   //undefined

x = null;
console.log(x)   // null


console.log(typeof null)   // object
console.log(typeof undefined) // undefined


console.log(null === undefined);  // false
console.log(null == undefined)    // true

console.log(null) // null
console.log(!null) // true
console.log(!!null) // false

console.log( 1 + null )  // 1
console.log( 1 + undefined) // NaN