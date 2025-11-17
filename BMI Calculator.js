//BMI Calculator: get weight(kg) and height(m), calculate BMI, categorize

var weight = +prompt("Enter your weight");
var height = +prompt("Enter your height");

var bmi = (weight / (height * height)).toFixed(2);
var bmiType = "";

if (bmi >= 30) bmiType = "Obese";
else if (bmi <= 29.9 && bmi >= 25) bmiType = "Overweight";
else if (bmi <= 24.9 && bmi >= 18.5) bmiType = "Normal weight";
else if (bmi <= 18.5 && bmi >= 25) bmiType = "Underweight";

console.log(`BMI: ${bmi} - ${bmiType}`);
