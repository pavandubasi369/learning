
function isMultipleOf7(number) {
    
    if (number >= 10 && number <= 99) {
      
      if (number % 7 === 0) {
        return "Yes";
      } else {
        return "No";
      }
    } else {
      return "35";
    }
  }
  var inputNumber = 35;
  var result = isMultipleOf7(inputNumber);
  
  console.log(result);
  