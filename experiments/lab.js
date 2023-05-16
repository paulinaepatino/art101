// JavaScript Experiments & Notes
//    notes following lectures

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