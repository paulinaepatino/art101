// index.js - Lab 7 - Functions
// Author: Paulina Patino & Sa'Niya Murphy
// Date: 5/4/23


// Put a comment block at the top of your program

// Create a new function in your file, call it what you like, but choose wisely.

// In the function, declare a variable userName and use window.prompt() to get the user's name from the user. Here's some help.
main();
function reverseString(person){
  return person.split('').reverse().join('');
}

// Make sure your function uses return to return the results.
function reversePerson(person){
  return person.split('').reverse().join('');
}

function fixPerson(person){
  document.writeln("Let me fix your name: ",
        fixPerson(person),"</br>",
        JSON.stringify(person, null, '\t'), "</pre>");
  }

function main(){
let person = prompt("Please enter your name for the String Wizard!",);



// Sort the letters of the user's name and return those from the function.
  // Hint: You can't sort strings, but you can sort arrays. Can you convert it back and forth?
  
reverseString(person);
document.writeln(reverseString(person), "<br>")
   
// Outside of the function, call the function and output the results with document.writeln() to neatly output the user's sorted name.

console.log("Main function started.");
 
//output

document.writeln("isn't " + (reverseString(person)) + " a beautiful name?<br>")

document.writeln("alright alright, fixing your name back to " + person + "!")


}



