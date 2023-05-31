// index.js - purpose and description here
// Author: Your Name
// Date:

$.get( "https://yesno.wtf/#api", function( data ) {
	$("#myDiv").html(data);
}).fail(function(){
    alert("There was an error");
});

$.ajax({
  // API endpoint
  url: "https://yesno.wtf/#api",
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
      url: 'https://yesno.wtf/api',
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

