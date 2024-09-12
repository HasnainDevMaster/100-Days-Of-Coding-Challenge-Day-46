// 100 Days Of Coding Challenge!

/** Question 136: Debugging with console.log()
Use console.log() to debug and track the value of a variable inside a loop.*/

//---------------------------------------------------------------------------

// Initialize a variable
let sum = 0;

// Loop through numbers 10 to 20
for (let i = 10; i <= 20; i++) {
  // Add the current number to the sum
  sum += i;

  // Debug: Log the current value of i and sum
  console.log(`Iteration ${i}: sum = ${sum}`);
}

// log the final sum
console.log(`Final sum: ${sum}`);
