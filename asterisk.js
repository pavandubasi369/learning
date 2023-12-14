// Function to print a right-angled triangle pattern
let printRightAngleTriangle = (rows) => {
    for (let i = 1; i <= rows; i++) {
      
      for (let j = 1; j <= i; j++) {
        process.stdout.write('*');
      }
      
      console.log();
    }
  };
  (printRightAngleTriangle(4));
  