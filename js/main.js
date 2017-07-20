$(document).ready(function() {

	var $width      = $('#width');
	var $inputWidth = $('#input-width');

// Updates value for width every time a key is entered in that field
$(function () {
  $inputWidth.on('change keydown paste', function () {
    setTimeout(function () {
      $width.html($inputWidth.val());
    }, 0);
  });
})

// if width isn't empty 
// 	 set height to 'x' + 'value in height input'
// else
// 	show warning that a width must be entered
// 
// Alternatively: Grey out height until width is entered?

// Change spaces in string to '+'

// When preview button is pressed
//   Remove existing preview image
//   Add new preview image from new URL
//   Add disabled state to preview button

// When URL changes
//   Remove disabled state from preview button


}); // Close doc ready