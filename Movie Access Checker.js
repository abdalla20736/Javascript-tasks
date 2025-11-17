//Get user age and ticket status, determine if can enter movie (age >= 18 OR hasTicket)

var age = +prompt("Enter your age");
var hasTicket = prompt("has a ticket ?") === "yes" ? true : false;

if (age >= 18 || hasTicket) console.log(`Access granted: true`);
else console.log(`Access granted: false`);
