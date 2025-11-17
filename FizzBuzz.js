//Print numbers 1-100, but for multiples of 3 print 'Fizz', for 5 print 'Buzz', for both print 'FizzBuzz'

var result = "";

for (var i = 1; i <= 100; i++) {
  if (i % 5 == 0 && i % 3 == 0) result += "FizzBuzz ";
  else if (i % 3 == 0) result += "Fizz ";
  else if (i % 5 == 0) result += "Buzz ";
  else result += ` ${i} `;
}

console.log(result);
