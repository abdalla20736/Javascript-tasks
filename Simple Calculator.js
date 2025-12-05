//Get two numbers and an operator (+,-,*,/), perform calculation and display result

var number1 = +prompt("Enter first number.");
var number2 = +prompt("Enter second number.");
var operator = prompt("Enter operator.");
var result;
switch (operator) {
  case "+":
    result = number1 + number2;
    break;
  case "-":
    result = number1 - number2;
    break;
  case "/":
    if(number2 == 0)
    { console.log("Can't divide by 0"); break;}
    result = number1 / number2;
    break;
  case "*":
    result = number1 * number2;
    break;
}
console.log(`${number1} ${operator} ${number2} = ${result}`);
