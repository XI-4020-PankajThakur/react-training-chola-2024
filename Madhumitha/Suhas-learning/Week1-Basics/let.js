//let

let message = "hi";
let num = 4;



if (num > 3) {
    let text = "Hello"; 
    text = "hi"; // can be updated but cannot be re-declared
    console.log(text); // it is block scoped can be accessed only inside curly braces
}

console.log(text) // error cannot be access outside of curly braces