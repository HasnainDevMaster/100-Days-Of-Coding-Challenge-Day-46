"use strict";
// 100 Days Of Coding Challeng!
/** Question 138:
Describe how to use breakpoints in browser developer tools to debug JavaScript code.*/
//------------------------------------------------------------------------------------
// Function to calculate factorial
function factorial(n) {
    // Base case: if n is 0, return 1
    if (n === 0) {
        return 1;
    }
    // Recursive case: n * factorial of (n-1)
    return n * factorial(n - 1);
}
// Example usage
const result = factorial(5);
console.log(`Factorial of 5 is ${result}`);
