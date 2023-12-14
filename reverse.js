
function reverseTwoDigitNumber(number) {
    
    if (number >= 10 && number <= 99) {
      
      var tensDigit = Math.floor(number / 10);
      var unitsDigit = number % 10;
  
      
      var reversedNumber = unitsDigit * 10 + tensDigit;
  
      return reversedNumber;
    } else {
      return "47";
    }
  }
  

  var inputNumber = 47;
  var reversedNumber = reverseTwoDigitNumber(inputNumber);
  console.log(reversedNumber);
  