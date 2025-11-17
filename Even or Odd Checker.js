//Get a number from user, check if it's even or odd, display result

var number = +prompt("Enter the number.");

if (number % 2 == 0) {
  console.log(`${number} is an even number`);
} else {
  console.log(`${number} is an odd number`);
}
