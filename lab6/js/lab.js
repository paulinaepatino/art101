// index.js - purpose and description here
// Author: Paulina Patino & Sa'Niya Murphy
// Date: 5/2/23

// Variables

main();

  var myMainRide
  var myTransport;
  var bus;
  var walk;
  var train;
  var uber;
  var make;
  var model;
  var color;
  var year;

// task 1
var myTransport = ["bus", "walk", "plane", "uber"]

myMainRide = {
  make: "Fiat",
  model: "500x",
  color: "yellow",
  year: 2016,
  age: 4,
}

console.log("my dream ride is a", myMainRide.color, myMainRide.year, myMainRide.make, myMainRide.model, "I would put a cute bumper sticker on it")

// object 
  // example: document.writeln("Getting around: " + myTransport + "<br>");
    
  document.writeln("Getting around:" + myTransport + "<br>");
    
    document.writeln("My Main Ride: <pre>", 
      JSON.stringify(myMainRide, null, '\t'), "</pre>");

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
