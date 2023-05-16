// index.js - lab 11 - Libraries & jQuery
// Author: Paulina Patino & Sa'Niya Murphy
// Date: 5/16/23
$("#challenge").append("<button id='c-button'>hiiiiii click here!!</button>");
$("#problem").append("<button id='p-button'>Button</button>");
$("#results").append("<button id='r-button'>Button</button>");


$(".challenge").append("<button id='c-button'>click me</button>")

$("button").click(function(){
  $(this).css("background-color", "#red")
});

$("#p-button").click(function(){
  // here's a different maybe better way to do it
  // (we are traversing the DOM to the parent)
  $(this).parent().toggleClass("special");
})

