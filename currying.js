// converting a multi argument function into series of functions with single argument

//without currying
function sum(a,b,c){
    return a + b + c;
}
console.log("without currying",sum(1,2,3));

function Csum(a){
    return function (b){
        return function(c){
            return a + b + c;
        }
    }
}

console.log("with currying",Csum(1)(2)(3))

const arrow = a=> b=> c=> a+b+c;  // simpler arrow functiion currying
console.log("using arrow",arrow(1)(2)(3))


function auth(userToken){
    return function (userInput){
        return userToken === userInput ? "access granted" : "access decline"
    }
}

const userInput = auth("jafars")
console.log(userInput("jafar"))



