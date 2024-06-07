function newFunction(){
 
        console.log("this is your first js function")
   
}

newFunction();


function retstr(){
 
    return"hey!"

}

var value = retstr();
console.log(value);



function add(n1 , n2){
    console.log (n1+n2);
}

add(3,3);

var f = function Sub(){
    console.log("anonymous function");
}
f();

function Multi(n1 , n2){
    var m = (n1*n2);
    console.log(m);
}

Multi(3,3);