//Get a number, print its multiplication table from 1 to 10 with formatting

var number = prompt("Enter number for multiplication table");

var table = "";
for (var i = 1; i <= 10; i++) {
  currentMultiplyOperation = number * i;
  table += `${number} x ${i} = ${currentMultiplyOperation}\n`;
}

console.log(table);
