//Declare a variable `hour` and assign it a number between 0 and 23. Use an `if-else if-else` statement to log "Good morning!" (0-11),
// "Good afternoon!" (12-17), or "Good evening!" (18-23)

var hour = +prompt("Enter hour between 0-23");

if (hour >= 0 && hour < 12) console.log("Good morning!");
else if (hour >= 12 && hour < 18) console.log("Good afternoon!");
else if (hour >= 18 && hour < 24) console.log("Good evening!");
