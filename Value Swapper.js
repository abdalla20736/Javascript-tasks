//Get two numbers from user, swap their values without using a third variable, display them after swapping

var number1 = +prompt("Enter first number.");
var number2 = +prompt("Enter second number.");

number1 += number2;
number2 = number1 - number2;
number1 -= number2;

console.log(`After Swapping: num1=${number1}, num2=${number2}`);
