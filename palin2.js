
function isPalindrome(number) {
    
    if (number >= 10 && number <= 99) {
      
      var numberString = number.toString();
  
      
      if (numberString[0] === numberString[1]) {
        return "Yes";
      } else {
        return "No";
      }
    } else {
      return "33";
    }
  }
  

  var inputNumber = 33;
  var result = isPalindrome(inputNumber);
  console.log(result);
  