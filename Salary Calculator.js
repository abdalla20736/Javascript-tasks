//Ask for hours worked and hourly rate, calculate salary with overtime (>40 hrs = 1.5x rate)

var hours = +prompt("Enter hours");
var rate = +prompt("Enter hourly rate");
var overtime = 0;
var regular = hours * rate;
var overtimeValue = 0;

if (hours > 40) {
  overtime = hours - 40;
  hours = 40;
}

overtimeValue = overtime * rate * 1.5;
regular = hours * rate;

console.log(
  `Regular: $${regular}, Overtime: $${overtimeValue}, Total: $${
    regular + overtimeValue
  }`
);
