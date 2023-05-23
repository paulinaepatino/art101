// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants

// Functions


var str;
// loop from start to end
for (var i=1; i<200; i++) {
	str = "";
  // if a multiple of 3, print fuzz
  if (i % 3 == 0) {
    str += "Fizz";
  }
  // if a multiple of 5, print buzz
  if (i % 5 == 0) {
    str += "Buzz";
  }
  // if a multiple of 7, print boom
  if (i % 7 == 0) {
    str += "Boom";
  }
  // if the string is still empty, set str to number
  if (str == "") {
  	str = i;
  }
  $("#output").append("<div>" + str + "!");
  
}
