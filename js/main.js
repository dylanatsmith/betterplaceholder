// TODO
// - Add colour picker plugin
// - Change spaces in string to '+'
// - Disable height until width is entered
// - Disable text colour until background colour is entered
// - Add reset button for each

$(document).ready(function() {


// All the variables
var $width       = $('#width');
var $inputWidth  = $('#input-width');

var $height      = $('#height');
var $inputHeight = $('#input-height');

var $bgcolour      = $('#bgcolour');
var $inputBgcolour = $('#input-bgcolour');

var $textcolour      = $('#textcolour');
var $inputTextcolour = $('#input-textcolour');

var $string      = $('#string');
var $inputString = $('#input-string');

// Reenable preview button when any input changes
$(function () {
  $( 'input' ).on( 'change keydown paste', function () {
    $( '.button--preview' ).removeClass( 'button--disabled' );
  });
})

// Updates value for width every time a key is entered in that field
$(function () {
  $inputWidth.on( 'change keydown paste', function () {
    setTimeout(function () {
      $width.html($inputWidth.val());
    }, 0);
  });
})

// Updates value for height every time a key is entered in that field
$(function () {
  $inputHeight.on( 'change keydown paste', function () {
    setTimeout(function () {
      $height.html('x' + $inputHeight.val());
    }, 0);
  });
})

// Updates value for background colour every time a key is entered in that field
$(function () {
  $inputBgcolour.on('change keydown paste', function () {
    setTimeout(function () {
      $bgcolour.html('/' + $inputBgcolour.val());
    }, 0);
  });
})

// Updates value for text colour every time a key is entered in that field
$(function () {
  $inputTextcolour.on('change keydown paste', function () {
    setTimeout(function () {
      $textcolour.html('/' + $inputTextcolour.val());
    }, 0);
  });
})

// Updates value for string every time a key is entered in that field
$(function () {
  $inputString.on('change keydown paste', function () {
    setTimeout(function () {
      $string.html('?text=' + $inputString.val());
    }, 0);
  });
})

// Preview button
$( '.button--preview' ).click(function() {
	// Remove existing preview image
	$( '.preview-image' ).empty();
	// Add new image with new URL
	// $( '.preview-image' ).append( '<img src="https://via.placeholder.com/' + $inputWidth.val() + $('#height').text() + '" alt="Preview placeholder image">' );
	$( '.preview-image' ).append( '<img src="' + $('.created-url').text() + '">' );
	// Disable another click
	$( '.button--preview' ).addClass( 'button--disabled' );
});

// Button to clear all values
$('.button--reset').click(function() {
  $(':input','form')
    .not(':button, :submit, :reset, :hidden')
    .val('')
    .removeAttr('checked')
    .removeAttr('selected');
  // Clear all the variable spans
  $( '#width, #height, #bgcolour, #textcolour, #filetype, #string' ).empty();
  // Reenable preview button
  $( '.button--preview' ).removeClass( 'button--disabled' );
});

}); // Close doc ready