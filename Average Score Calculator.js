//Ask for three subject scores, calculate average and display pass/fail status (pass >= 50)

var firstSubjectScore = +prompt("Enter first subject score.");
var secondSubjectScore = +prompt("Enter second subject score.");
var thirdSubjectScore = +prompt("Enter third subject score.");

var average = (firstSubjectScore + secondSubjectScore + thirdSubjectScore) / 3;
var averageRoundValue = average.toFixed(2);
if (averageRoundValue >= 50) {
  console.log(`Average: ${averageRoundValue}, Status: Pass`);
} else {
  console.log(`Average: ${averageRoundValue}, Status: Fail`);
}
