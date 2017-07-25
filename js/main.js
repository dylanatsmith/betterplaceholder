$(document).ready(function() {

	var $width       = $('#width');
	var $inputWidth  = $('#input-width');

	var $height      = $('#height');
	var $inputHeight = $('#input-height');
	
	var $string      = $('#string');
	var $inputString = $('#input-string');


// Updates value for width every time a key is entered in that field
$(function () {
  $inputWidth.on( 'change keydown paste', function () {
    setTimeout(function () {
      $width.html($inputWidth.val());
    }, 0);
    // Reenable preview button
    $( '.button--preview' ).removeClass( 'button--disabled' );
  });
})


// Updates value for height every time a key is entered in that field
$(function () {
  $inputHeight.on( 'change keydown paste', function () {
    setTimeout(function () {
      $height.html('x' + $inputHeight.val());
    }, 0);
    // Reenable preview button
    $( '.button--preview' ).removeClass( 'button--disabled' );
  });
})

// Disable height until width is entered?


// Updates value for string every time a key is entered in that field
$(function () {
  $inputString.on('change keydown paste', function () {
    setTimeout(function () {
      $string.html('?text=' + $inputString.val());
    }, 0);
    // Reenable preview button
    $( '.button--preview' ).removeClass( 'button--disabled' );
  });
})

// Change spaces in string to '+'


// Preview button
$( '.button--preview' ).click(function() {
	$( '.preview-image' ).empty();
	// Change URL to dynamically generated one
	$( '.preview-image' ).append( '<img src="https://via.placeholder.com/' + $inputWidth.val() + '" alt="Preview placeholder image">' );
	$( '.button--preview' ).addClass( 'button--disabled' );
});


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