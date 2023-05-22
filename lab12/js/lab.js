// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants



// Create a function sortingHat()

function sortingHat(str) {
  len = str.length;
  mod = len % 4;
  if (mod == 0) {
    return "Lemon"
  }
  else if (mod == 1) {
    return "Green Apple"
  }
  else if (mod == 2){
    return "Blue Rasberry"
  }
  else if (mod == 3){
    return "Strawberry"
  }
  }

  var myButton = document.getElementById("button");
  myButton.addEventListener("click", function(){
    var name = document.getElementById("input").value;
    var house = sortingHat(name);
    newText = "<p>You're most like the delicious " + house + " artificial flavor</p>";
    document.getElementById("output").innerHTML = newText;
  })

// that takes a string as an argument: function sortingHat(str)
// counts the letters in str and assigns it to a variable length
// uses modulus (% operator) to get the remainder with 4: mod = length % 4;
// mod will now be a value between 0 and 3
// create a conditional that will return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff depending on whether the value of mod is 0, 1, 2, or 3
// Create an click listener attached to #button
// that gets the value of #input and assigns it to a variable name
// runs sortingHat(name) and stores the result in a variable house
// appends a new styled paragraph to #output that says "The Sorting Hat has sorted you into " + house