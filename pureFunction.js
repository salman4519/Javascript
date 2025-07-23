//pure function and impure function

//pure function
//it will always return same output when we give same input.

function add(a,b){
    return a + b ;
}
console.log(add(1,2)) // 3
console.log(add(1,2)) // 3
console.log(add(1,2)) // 3
console.log(add(1,2)) // 3

//impure function
// it doesnt give same output for same input.

let counter = 0;
function increment(){
    counter++
    return counter
}

console.log(increment()) // 1
console.log(increment()) // 2
console.log(increment()) // 3
console.log(increment()) // 4