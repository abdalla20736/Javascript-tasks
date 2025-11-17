//The Left Triangular Star Pattern involves printing a series of stars in a left-aligned triangular shape. As you progress through the pattern, the number of stars per line increases incrementally, forming a triangular structure. <pre class="font-bold font-mono tracking-widest"> * ** *** **** *****</pre>

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
