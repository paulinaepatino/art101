// JavaScript Experiments & Notes
//    notes following lectures
//IMAGE CODE

// css:.straws {
// width: 4in;
//}
//html: <img class="straws" src="./img/flavor.jpg">



// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

main();
var myTransport
var bus 
var walk
var train
var uber
var make
var model
var color
var year

var myTransport = ["bus", "walk", "plane", "uber"]

myMainRide = {
  make: "Fiat",
  model: "500x",
  color: "yellow",
  year: 2016,
  age: 4,
}

console.log("my dream ride is a", myMainRide.color, myMainRide.year, myMainRide.make, myMainRide.model, "I would put a cute bumper sticker on it")

// lab 7 notes - functions
// 5/2/23

function multiply(x, y,) {
  var product = x * y;
  return product;
}
var z = multiply(256, 256)

function myTransport(bus, walk, plane, uber)

var sortedArray = array.sort();
var reversedArray = sortedArray.reverse();
sortedArray([1, 2, 13, 5])

// Write a JavaScript function that accepts an array and sorts it in descending order.
var myTransport = ["bus", "walk", "plane", "uber"]
  .sort(myTransport)
  .reverse (myTRansport)

// Have the function return the new array
// Define an array of numbers.
a = [1, 2, 4, 13, 34, 5]



// Lecture notes 
// 5/4/23

//SCOPE
// is like vegas, everything that happens in the scope stays in the scope.
var marginShift = 100
function adjustMargin(n) {
  return n + marginShift;
}
// function Parameters (Param) are limited to the function

// callback example (not anonymous):
var a = [69, 420, 42, 1312];

function mapPlay(x) {
	console.log(x + " is the best number");
}

a.map(mapPlay);


// map is a  method that applies to an array

var a = [69, 420, 42, 1312];

function mapPlay(x) {
	return x * x;
}

var results = a.map(mapPlay);

console.log(results);

// 5/9/23 notes for lab 9
//DOM (document object model): structured object-oriented representation of the entire webpage.
//accessing the dom
document.documentElement 

document.getElementsByTagName("x")
document.getElementsByClassName("x")
document.getElementById("x")
//document by id is better because ypu dont have to deal with the array

//assign variables to it to define (photoEL for photoElement)
var photoEl = document.getElementById("headshot")

//removing an element from the HTML 
photoEl.innerHTML = "<h1>nothing to see here</h1>";


var newEl = document.createElement("button");
var photoEl = document.getElementById("headshot")
photoEl.appendChild(newEl);
newEl.innerHTML = "<h1>bello</h1>";
 //creating a pathless button through js while editing html
 //dom style names are different than they are in css, its not a different language though.
newEl.style.fontSize = "30px";            

//changing element
var oldEl = document.getElementById("headshot")
var newEl = document.createElement("div");
oldEl.appendChild(newEl);
newEl.id = "my-new-div";
newEl.innerHTML = "HELLO!";
newEl.style.fontSize = "1in";

// Lecture - Libraries & jQuery
// 5/16/23 notes for lab 11

// Pure JS -> jQuery + JS: (written on board)
// document.getElementById("photo") -> $("#photo")
// document.getElementsByClassName("item")[0] -> $(".item")
// Element.appendChild(somethingEl) -> Element.append(somethingEl)
// element.innerHTML = "blah" -> element("blah")

$("button").click(function(){
//action goes here!
});

//web example (axction is to remove h1)
$("button").click(function(){
  $("h1").remove();
});

$(".courses").append("<button id='my-button'>click me</button>")

//----------------------------------------------------------------------------------------------------------------
// Lecture - Conditionals
// 5/18/23 notes for lab 12
//----------------------------------------------------------------------------------------------------------------

// D on't
// R epeat
// Y ourself

// notes reflecting on lab 11
$("highlight-button").click(function(){
//using "this" to refer to the button, and traversing the DOM to the parent
//"this" in any case, refers to the things usrroundingn it
$(this).parent().toggleClass("special");
})
// buttons dont have to directly change something, they can just be a class that enacts a different kind fo css, etc.
// for example, "business" regular page, and "party" page with many changes, but the button only turns them on.

//Booleans & Expressions
money = 4
// returns "4"
if (money > 3) {
    console.log("Go eat a  taco");
} else {
    console.log("Sorry you're gonna be hungry.");
}
// returns "Go eat a taco"


// Example Conditional
// this conditional reads the value input by the user, and determines if it is divisible by 3 by dividing it by 3 and seeing it it equals 0.

//Assign a numeric value to a variable called num
var num = prompt("Enter a number");

//Write an if/else statement that tests if the variable is divisible by 3 (hint: the mod/remainder operator is %) 
if (num % 3 == 0) {
//If the variable is evenly divisible, output "Divisible by 3". If the variable is not, output "Not evenly divisible."
console.log("Divisible by 3");
}
//if not, output "Not evenly divisible."
else {
console.log("Not evenly divisible. (remainder: "+ num % 3 +
")")
}
//Try changing the value of the number to test if your code works

//----------------------------------------------------------------------------------------------------------------
// Lecture - Loops
// 5/23/23 notes for lab 13
//----------------------------------------------------------------------------------------------------------------

// For Loops
// for when we know how many times we need to repeat a task
for (var i=0; i<5; i++) {
  console.log(i);
}
// happens as long as i is less than 5

for (var sheep=1; sheep<=100; sheep++) {
  console.log("Counting sheep number:",
sheep);
}

for (var i=0; i<fruits.length; i++) {
  console.log("Weird fruit number " + i + ": " + fruits[i]);
}

for (var number=1; number<=100; number++) {
  if (number % 3 == 0)
    console.log("fizz");
      if (number % 5 == 0)
    console.log("buzz");
    else {
  console.log(number)
    }}

//jsfiddle for loop
for (var i= 0; i<200; i++) {

  if (i % 15 == 0) {
    console.log("fizzbuzz");
    $("#output").append("<div>" + "fizzbuzz");
  }

  else if (i % 3 == 0) {
  console.log("fizz")
  $("#output").append("<div>" + "fizz");
  }



  else if (i % 5 == 0) {
  console.log("buzz")
  $("#output").append("<div>" + "buzz");
  }

  else {
  console.log (i)
  $("#output").append("<div>" + i + "!");;
  }
}

// Weird fruit number 0: kiwi
// Weird fruit number 1: kumquat
// Weird fruit number 2: jackfruit
// Weird fruit number 3: durian



//APIs/AJAX

$.get( "api.com/endpoint", function( data ) {
	$("#myDiv").html(data);
}).fail(function(){
    alert("There was an error");
});

// Using the core $.ajax() method
$.ajax({
  // API endpoint
  url: "http://numbers.api",
  // Any data to send
  data: { id: 123},
  // POST or GET request
  type: "GET",
  // data type we expect back
  dataType : "json",
})

// If the request succeeds
// data is passed back
.done(function(data) {
  console.log("Success:", data);
})
// If the request fails
.fail(function(request,error) { 
  console.log(request, error);
});
