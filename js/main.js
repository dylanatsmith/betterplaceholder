$(document).ready(function() {

	var $width       = $('#width');
	var $inputWidth  = $('#input-width');
	var $string      = $('#string');
	var $inputString = $('#input-string');

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

// Updates value for string every time a key is entered in that field
$(function () {
  $inputString.on('change keydown paste', function () {
    setTimeout(function () {
      $string.html($inputString.val());
    }, 0);
  });
})

// When preview button is pressed
//   Add new preview image from new URL
//   Add disabled state to preview button
$( '.button--preview' ).click(function() {
	$( '.preview-image' ).empty();
	$( '.preview-image' ).append( '<img src="https://via.placeholder.com/200x200" alt="">' );
	$( '.button--preview' ).addClass( 'button--disabled' );
});

// When URL changes
//   Remove disabled state from preview button

// Button for each option to clear value

// Button to clear all values
$('.button--reset').click(function() {
  $(':input','form')
    .not(':button, :submit, :reset, :hidden, #input-width')
    .val('')
    .removeAttr('checked')
    .removeAttr('selected');
});

}); // Close doc ready