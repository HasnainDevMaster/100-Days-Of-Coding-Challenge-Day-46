// 100 Days Of Coding Challenge!

/** Question 137: Implementing a try-catch Block
Implement a try-catch block to handle potential errors in a block of code.*/

//---------------------------------------------------------------------------

// Function to divide two numbers
function divide(a: number, b: number): number {
  // Try block to attempt the division
  try {
    // Check if the divisor is zero
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }

    // Perform the division
    return a / b;
  } catch (error) {
    // Catch block to handle any errors
    console.error("An error occurred:", error.message);

    // Return a default value or rethrow the error
    return NaN;
  }
}

// Example usage
console.log(divide(10, 2)); // Should print 5
console.log(divide(10, 0)); // Should print an error message and NaN
