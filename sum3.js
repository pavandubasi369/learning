
const number = 375;


let sumOfDigits = 0;


let tempNumber = number;

while (tempNumber > 0) {
  sumOfDigits += tempNumber % 10; 
  tempNumber = Math.floor(tempNumber / 10); 
}


console.log("Sum of digits for " + number + ": " + sumOfDigits);
