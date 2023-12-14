
function isPrime(number) {

    if (number >= 10 && number <= 99) {
      
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
          return "No"; 
        }
      }
      
      return "Yes"; 
    } else {
      return "37";
    }
  }
  

  var inputNumber = 37;
  var result = isPrime(inputNumber);
  console.log(result);
  