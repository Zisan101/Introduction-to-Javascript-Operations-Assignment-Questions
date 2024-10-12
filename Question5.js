// Write a JavaScript program that calculates the simple interest using the formula Simple interest =
// (principal * rate * time) / 100.

// Here’s a JavaScript program to calculate the simple interest:

function calculateSimpleInterest(principal, rate, time) {
    let simpleInterest = (principal * rate * time) / 100;
    return simpleInterest;
}

// Example usage:
let principal = 1000;  // Principal amount
let rate = 5;          // Rate of interest
let time = 2;          // Time in years

let interest = calculateSimpleInterest(principal, rate, time);
console.log("Simple Interest:", interest);  // Output: Simple Interest: 100
