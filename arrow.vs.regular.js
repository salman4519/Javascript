// arrow function is simpler version of function 
// there are some difference between them

//arguments
//regular function  can use arguments but arrow funciton cant

function a(){
    console.log(arguments) 
}
a("hello",21,true) // [Arguments] { '0': 'hello', '1': 21, '2': true }



const b = ()=>{
    console.log(arguments) 
}
// b("hello",21,true) // will not give the arguments


// regular function can use as constructor using "new" but arrow cant

function Dog(name){
    this.name = name;
}
const myDog = new Dog()// it will work


const Cat= (name) =>{
    this.name = name
}
// const myCat = new Cat() // it will  give error

// arrow function not have own this context it will take from its lexical scope

const Obj = {
    value:7,
    regular(){
        console.log(this.value)
    },
    arrow:()=>{
        console.log(this.name)
    }
}

Obj.regular() // 7
Obj.arrow() // undefined



// arrow function doesnt need to return but regular should

function x(value){
    return value
}
console.log(x("regular returned value"))

const y = (value) => value;
console.log("arrow returned value")
