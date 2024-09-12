// 100 Days Of Coding Challeng!

/** Question 138: Using Breakpoints in Browser Developer Tools
Describe how to use breakpoints in browser developer tools to debug JavaScript code.*/

//------------------------------------------------------------------------------------

// Function to add two numbers
function addNumbers(a: number, b: number): number {
  // Set a breakpoint on the next line to inspect the values of a and b
  let sum = a + b; // Breakpoint here
  return sum;
}

// Call the function
let result = addNumbers(5, 10);
console.log(result); // Expected output: 15

/** Explanation of Changes:

Set Breakpoint: 
When you set a breakpoint on the line let sum = a + b;,
the execution will pause before this line is executed.

Inspect Variables: 
You can inspect the values of a and b in the scope panel to ensure they are as expected.

Step Through Code:
Use the “Step Over” button to execute the line and move to the next one.
This helps you verify that sum is calculated correctly.

Continue Execution:
After inspecting and stepping through the code,
you can resume execution to see the final output in the console.

Using breakpoints is a powerful way to debug your JavaScript code,
allowing you to pause execution and inspect the state of your application at specific points.*/
