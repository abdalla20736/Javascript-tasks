//Get purchase amount, calculate tax (10%), discount if > $100 (5% off), final price

var amount = +prompt("Enter purchase amount");

var tax = amount * (10 / 100);
var discount = 0;
if (amount > 100) discount = amount * (5 / 100);

var final = amount + tax - discount;
console.log(
  `Subtotal: $${amount}, Tax: $${tax}, Discount: $${discount}, Final: $${final}`
);
