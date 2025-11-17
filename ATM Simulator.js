//Create a simple ATM: get operation (1:Balance, 2:Withdraw, 3:Deposit) and amount, process it

var operation = +prompt(
  "Enter number of operation\n 1:Balance\n 2:Withdraw\n 3:Deposit"
);

switch (operation) {
  case 1:
    var currentBalance = +prompt("Enter current balance");
    console.log(`Your balance is: $${currentBalance}`);
    break;
  case 2:
    var amount = +prompt("Enter amount to withdraw");
    var currentBalance = +prompt("Enter current balance");
    currentBalance -= amount;
    console.log(`Withdrew $${amount}. New balance: $${currentBalance}`);
    break;
  case 3:
    var amount = +prompt("Enter amount to deposit");
    var currentBalance = +prompt("Enter current balance");
    currentBalance += amount;
    console.log(`Deposited $${amount}. New balance: $${currentBalance}`);
    break;
}
