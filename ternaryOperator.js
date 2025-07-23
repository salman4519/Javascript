//ternary operator is a equavalent alternative of if else 
//it will check a condition and return one value from two depending on the condition


let age = 18;

//if else case
if(age >= 18){
    console.log("you can vote")
}else{
    console.log("you cannot vote");
};

//ternary operator
console.log(age >= 18 ? "you can vote" : "you cannot vote")

// we can use nested 
let score = 85;
grade = score > 90 ? "A" :
        score > 80 ? "B" :
        score > 70 ? "C" :
        "F";

console.log(grade)

// another example

let firstCheck = false;
let secondCheck = false;
let access = firstCheck ? "Access denied" : secondCheck ? "Access denid" : "Access granted";
console.log(access)
