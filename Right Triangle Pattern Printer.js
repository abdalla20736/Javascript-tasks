//The Right Triangular Star Pattern involves printing a series of stars in a triangular shape, with each line having an incrementally increasing number of stars from left to right. This pattern is an excellent opportunity to practice loops and string concatenation in JavaScript. <pre class="font-bold font-mono tracking-widest"> * ** *** **** *****</pre>

var row = +prompt("How many rows needed");

var rows = "";
for (var i = 0; i < row; i++) {
  var currentStars = "";
  for (var j = 0; j <= i; j++) {
    currentStars += "*";
  }
  rows += `${currentStars} `;
}

console.log(rows);
