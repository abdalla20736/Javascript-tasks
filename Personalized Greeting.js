//Ask user for their name and age, then display a personalized message using console.log()

var name = prompt("Enter your name.");
var age = +prompt("Enter your age.");
var currentYear = 2025;

console.log(
  `Hello ${name}! You are ${age} years old and you were born around ${
    currentYear - age
  }`
);
