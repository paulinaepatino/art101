// index.js - purpose and description here
// Author: Your Name
// Date: 6/5/23





$.ajax({
  // API endpoint
  url: "https://xkcd.com/info.0.json",
  // Any data to send
  data: { id: 123},
  // POST or GET request
  type: "GET",
  // data type we expect back
  dataType : "json",
})

$(document).ready(function() {
  $('#myButton').click(function() {
    // Make an AJAX call to fetch data from the API
    $.ajax({
      url: 'https://xkcd.com/info.0.json',
      method: 'GET',
      dataType: 'json',
      success: function(data) {
        // Display the output in the output div
        $('#output').html('<img src="' + data.image + '">');
      },

      error: function(error) {
        console.log('Error:', error);
      }
    });
  });
});

// Using the core $.ajax() method
$.ajax({
  // The URL for the request (from the api docs)
  url: "https://xkcd.com/info.0.json",
  // The data to send (will be converted to a query string)
  data: { 
          // here is where any data required by the api 
          //   goes (check the api docs)
          id: 123,
          api_key: "blahblahblah",
        },
  // Whether this is a POST or GET request
  type: "GET",
  // The type of data we expect back
  dataType : "json",
  // What do we do when the api call is successful
  //   all the action goes in here
  success: function(data) {
      // do stuff
      console.log(data);
  },
  // What we do if the api call fails
  error: function (jqXHR, textStatus, errorThrown) { 
      // do stuff
      console.log("Error:", textStatus, errorThrown);
  }
})

var comicObj;


$(document).ready(function() {
  var comicObj;

$.ajax({
  url: 'https://xkcd.com/info.0.json',
  type: 'GET',
  dataType: 'json',
  success: function(data) {
    comicObj = data;
    // Process the parts and add them to your webpage
    var section = $('<section></section>');
    var title = $('<h1></h1>').text(comicObj.title);
    var image = $('<img></img>').attr({
      src: comicObj.img,
      alt: comicObj.alt,
      title: comicObj.alt
    });
    
    section.append(title, image);
    $('body').append(section);
  },
  error: function() {
    console.log('Error occurred during AJAX request.');
  }
});
})


$(document).ready(function() {
  var comicObj;
  var currentComicNumber;

  // Function to retrieve data and update the HTML elements
  function getAndPutData(url) {
    $.ajax({
      url: url,
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        comicObj = data;
        // Update the HTML elements with comic data
        $('#comic-title').text(comicObj.safe_title);
        $('#comic-image').attr('src', comicObj.img);
        $('#comic-image').attr('alt', comicObj.alt);
      },
      error: function() {
        console.log('Error occurred during AJAX request.');
      }
    });
  }

  // Function to handle the Previous button click
  $('#prev-btn').click(function() {
    currentComicNumber--;
    if (currentComicNumber < 1) {
      currentComicNumber = 1;
    }
    var prevUrl = 'https://xkcd.com/' + currentComicNumber + '/info.0.json';
    getAndPutData(prevUrl);
  });

  // Function to handle the Next button click
  $('#next-btn').click(function() {
    currentComicNumber++;
    var nextUrl = 'https://xkcd.com/' + currentComicNumber + '/info.0.json';
    getAndPutData(nextUrl);
  });

  // Initial load of the first comic
  var initialUrl = 'https://xkcd.com/info.0.json';
  $.ajax({
    url: initialUrl,
    type: 'GET',
    dataType: 'json',
    success: function(data) {
      comicObj = data;
      currentComicNumber = comicObj.num;
      $('#comic-title').text(comicObj.safe_title);
      $('#comic-image').attr('src', comicObj.img);
      $('#comic-image').attr('alt', comicObj.alt);
    },
    error: function() {
      console.log('Error occurred during AJAX request.');
    }
  });
});
