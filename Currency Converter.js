//Currency converter: get amount in EGP, convert to USD, EUR, GBP. USD=47.22, EUR=54.35, GBP=61.95

var egpCurrency = +prompt("Enter Currency here.");

console.log(
  `${egpCurrency} EGP = $${(egpCurrency / 47.22).toFixed(2)} USD, €${(
    egpCurrency / 54.35
  ).toFixed(2)} EUR, £${(egpCurrency / 61.95).toFixed(2)} GBP`
);

3;
var number = +prompt("Enter the number.");

if (number % 2 == 0) {
  console.log(`${number} is an even number`);
} else {
  console.log(`${number} is an odd number`);
}

4;
var hour = +prompt("Enter hour between 0-23");

if (hour >= 0 && hour < 12) console.log("Good morning!");
else if (hour >= 12 && hour < 18) console.log("Good afternoon!");
else if (hour >= 18 && hour < 24) console.log("Good evening!");
