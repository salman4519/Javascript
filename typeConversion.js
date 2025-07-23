//typeConversion
//change one datatype to another

const { loadavg } = require("os");

//types of type conversion
// 1. type casting (Explicit)
// 2. type coersion(Implicit)


//type casting
// it is explicit means it is coverted manually that controlled by programmer using some methods like Number(), Boolean () , toString()
let name = "salman";
console.log(typeof name); // string

let changedname = Boolean("name");
//or we can use !! name
console.log(typeof changedname);// Number


//type coersion
// it is implicit . it is automatically converted datatype by js


// to string
console.log("5" + 1); // number to string => "51"
console.log(true + "!") // boolean to string  => "true!" 
console.log(null + "abc") // null to string   => "nullabc"

// to number
console.log("51" * 1)// string to number => 51
console.log(true - 1)// boolean to number (true is value 1 is default) => 0
console.log(null + 1)// null to number => 1

//to boolean 
// every if() and while .conditional operators

