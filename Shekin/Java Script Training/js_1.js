/*var message = "Hello World";
console.log(message);*/


//let no=10;
//let no =10;
/*function testVar() {
    if (true) {
      var message = "This is a var message";
    }
    console.log(message); // Accessible here because of function scope
  }
  
  function testLet() {
    if (true) {
      let message = "This is a let message";
    }
    console.log(message); // Error: message is not accessible outside the block
  }
  
  testVar(); // Outputs: "This is a var message"
  testLet(); */
  
//   function myFunction() {
//     let message = "Hello, world!";
//     console.log(message); // prints "Hello, world!"
  
//     if (true) {
//       let message = "Goodbye, world!";
//       console.log(message); // prints "Goodbye, world!"
//     }
  
//     console.log(message); // prints "Hello, world!"
//   }
//   myFunction()
  
//   console.log(message); // prints "undefined"

//   for (let j = 0; j < 5; j++) {
//     console.log(j);  // Output: 0 1 2 3 4
//   }
  
//   console.log(j);  

// let income = 100000;
// const ir =0.08;
// income += 50000;
// console.log(income);
// //const ir =0.15;
// console.log(ir);



// var a = '4';
// var b = 3;
// if(typeof(a) === "number" && typeof(b) === "number")
// {
//     console.log(a+b);
// }
// else
//     console.log("Not a Number");

// var num1 = 2;
// var num2 = 4;

// console.log("the value of num 1 :" + num1);
// console.log("the value of num 2 :" + num2);

// var res = num1 > num2;
// console.log("num1 is greater than num2:" + res);

// var res = num1 < num2;
// console.log("num1 is lesser than num2:" + res);

// var res = num1 >= num2;
// console.log("num1 is greater than or equal to num2:" + res);

// var res = num1 <= num2;
// console.log("num1 is lesser than or equal to num2:" + res);

// var res = num1 == num2;
// console.log("num1 is equal to num2:" + res);

// var res = num1 != num2;
// console.log("num1 is not equal to num2:" + res);

// let a = 10;
// let b = 2;

// a /= b; 
// console.log(a); 

// function test(){
//   console.log("Function called");
// }
// test();

// function setstr(){
//   return "Hello world";
// }
// var val = setstr();
// console.log(val);

// function add(n1,n2){
//   var sum = n1+n2;
//   console.log(sum);
// }
// add(1,2);

// var func = new Function("x","Y","return x*Y;");
// function prod(){
//   var result= func (10,20);
//   console.log(result);
// }

// var multiply = (a, b) => a * b;

// var result1 = multiply(5, 10);
// console.log(result1);

function* multiplyGenerator(a, b) {
  yield a * b;
}

var generator = multiplyGenerator(5, 10);

var result = console.log(generator.next().value);

