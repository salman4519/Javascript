// immediately invoked function expression
// it will  be called as soon as it defined and have seperate execution context and not need call it seperately
// will not polute global scope
// also we can create encapsulate (private variable)


// (()=>{})()  // this is the syntax
// (()=>{}) // this part will make it function expression
// ();   // this part will call it 

(function(){
    console.log("hello from IIFE")
})();


// altenative of IIFE
// now we can use let const block scope to not to polute global scope

let a = 10;
{
    let a = 7;
    console.log(a);
}

    console.log(a)
