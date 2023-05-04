// index.js - Lab 8: Anon Functions and Callbacks
// Author: Paulina Patino & Sa'Nuiya Murphy
// Date: 5/8/23


// Functions

// task 2
// function equation


var a = [1, 10, 7, 12];

function equation(x) {
	return x * x;
}
var results = a.map(equation);
console.log(results);

//task 2 part 3/4
var b = [9, 30, 5, 22];
function equation(x) {
	return x * x;
}
var results = b.map(equation);
b.map(equation);
console.log(results);

//task 2 part 5
a.map(function(x){
  var results = (x + x)
  return results;
})
console.log(results);

