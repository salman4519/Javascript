// constructor function
// its a regular funtion that we used create objects using "new" keyword 
// the first letter of the function name should be capital


function User(name,tech){
    this.name = name;
    this.tech = tech;
    this.greet = ()=>{
        console.log(`Hi iam ${this.name} and i am working on ${this.tech}`);
        
    }
}

const user1 = new User("salman","js");
const user2 = new User("sadin","c#");

user1.greet(); // Hi iam salman and i am working on js;
user2.greet(); // Hi iam sadin and i am working on c#