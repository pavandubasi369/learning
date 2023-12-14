const number = 8642;

let evenDigitsCount = 0;


const numberString = number.toString();

for (let i = 0; i < numberString.length; i++) {
  const digit = parseInt(numberString[i]); 

  
  if (digit % 2 === 0) {
    evenDigitsCount++; 
  }
}

console.log("Number of even digits in " + number + ": " + evenDigitsCount);
