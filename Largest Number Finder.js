//Get three numbers, find and display the largest using nested if statements

var num1 = +prompt("Enter first number");
var num2 = +prompt("Enter second number");
var num3 = +prompt("Enter third number");
var result;
if (num1 > num2) {
  if (num1 > num3) result = num1;
  else result = num3;
} else if (num2 > num3) {
  if (num2 > num1) result = num2;
  else result = num1;
} else if (num3 > num1) {
  if (num3 > num2) result = num3;
  else result = num2;
}

console.log(`Largest number is: ${result}`);
