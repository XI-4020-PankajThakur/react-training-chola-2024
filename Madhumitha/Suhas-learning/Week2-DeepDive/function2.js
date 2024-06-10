// var add = (n1, n2) => {
// console.log(n1+n2);
// }

// add(2,3);




function* addGenerator(a, b) {
    yield a + b;
  }
  
  const generator = addGenerator(3, 4);
  console.log(generator.next().value); 



  
function* subtraction(n1, n2) {
    yield n1 - n2;
  }
  
  const GeneratorValue = subtraction(4, 2);
  console.log(GeneratorValue.next().value); 
  
    
    
    
    
    
    
    
     



 