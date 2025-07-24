//factory function 
// any function that returns a new object is factory function
// we can make multiple objects without using new keyword easily 

function createUser(name,age){
    return {
        name,
        age,
        greet(){
            console.log(`Hello.. My name is ${name} and i am ${age} years old`);
        }
    }
}

const user1 = createUser("salman",19);
const user2 = createUser("siraj",22);

user1.greet(); // Hello.. My name is salman and i am 19 years old
user2.greet(); // Hello.. My name is siraj and i am 22 years old