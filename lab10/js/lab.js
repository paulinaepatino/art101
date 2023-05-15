// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// Borrow the nameSort() function or my anagram() function from Lab 7.

// Attach an event listener to your button that does the following:
// Gets the value of your input field
// Runs that value through your sort() or anagram() function and saves the results.
// Replaces the html in <div id=output> with the results.

var fruit = ["apple", "lemon", "pinneapple", "banana"]

function namesort(names) {
  // Copy the original array to avoid modifying the original
  const sortedNames = ["apple", "lemon", "pinneapple", "banana"];

  // Sort the names in alphabetical order
  sortedNames.sort();

  // Return the sorted array
  return sortedNames;
}

// Function to handle the button click event
function handleClick() {
  // Get the input value
  const input = document.getElementById("nameInput");
  const inputValue = input.value;

  // Split the input value into an array of names
  const names = inputValue.split(",").map((name) => name.trim());

  // Sort the names using the namesort function
  const sortedNames = namesort(names);

  // Replace the HTML content of the output div with the sorted names
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = sortedNames.join(", ");
}

// Attach event listener to the button
const button = document.getElementById("sortButton");
button.addEventListener("click", handleClick);
