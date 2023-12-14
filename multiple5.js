
function isMultipleOf5(number) {
    
    if (number >= 10 && number <= 99) {
      
      if (number % 5 === 0) {
        return "Yes";
      } else {
        return "No";
      }
    } else {
      return "50";
    }
  }
  

  var inputNumber = 50;
  var result = isMultipleOf5(inputNumber);
  console.log(result);
  