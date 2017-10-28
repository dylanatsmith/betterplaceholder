// TODO
// - Disable height until width is entered
// - Disable text colour until background colour is entered
// - Add individual reset buttons
// - Add hints to width/height and colours
// - Indicate that # isn't necessary on hex
// - Add options to Custom Text: "Use image dimensions" "No text"
// - Disable copy URL when inputs are empty
// - Button to switch bgcolor and textcolour

// Combine JS plugins into main file
// @codekit-prepend "clipboard.min.js", "jquery-minicolors.min.js";

$( document ).ready(function() {

// All the variables
var $width           = $('#width');
var $inputWidth      = $('#input-width');
var $height          = $('#height');
var $inputHeight     = $('#input-height');
var $bgcolour        = $('#bgcolour');
var $inputBgcolour   = $('#input-bgcolour');
var $textcolour      = $('#textcolour');
var $inputTextcolour = $('#input-textcolour');
var $string          = $('#string');
var $inputString     = $('#input-string');
var $filetype        = $('#filetype');

// Reenable preview and reset buttons when any input changes
$(function () {
  $( 'input' ).on( 'change keydown paste', function () {
    $( '.button--preview, .button--reset, .button--copy' ).removeClass( 'button--disabled' );
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
      $bgcolour.html( '/' + $inputBgcolour.val().replace( '#', '' ) );
    }, 0);
  });
})

// Updates value for text colour every time a key is entered in that field
$(function () {
  $inputTextcolour.on('change keydown paste', function () {
    setTimeout(function () {
      $textcolour.html('/' + $inputTextcolour.val().replace( '#', '' ) );
    }, 0);
  });
})

// Updates value for string every time a key is entered in that field
$(function () {
  $inputString.on('change keydown paste', function () {
    setTimeout(function () {
      // Change spaces for plus signs
      var str = $inputString.val();
      // Display string in URL
      $string.html( '?text=' + str.replace( ' ', '+' ) );
    }, 0);
  });
})

// Updates value for filetype every time a new radio button is clicked
$(function () {
  $('input[name=filetype]').on('change', function () {
      $filetype.html( '.' + $('input[name=filetype]:checked').val() );
  });
})

// Instantiate clipboard.js
var clipboard = new Clipboard('.button--copy', {
  text: function() {
    return $('.created-url').text();
  }
});
clipboard.on('success', function(e) {
  console.log(e);
});
clipboard.on('error', function(e) {
  console.log(e);
});

// Instantiate jQuery minicolors
$( '.input--colour' ).minicolors();

// Preview button
$( '.button--preview' ).click(function() {
  // Remove existing preview image
  $( '.preview-image' ).empty();
  // Add new image with new URL
  $( '.preview-image' ).append( '<img src="' + $( '.created-url' ).text() + '">' );
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
  // Remove existing preview image
  $( '.preview-image' ).empty();
  // Add new image with new URL
  $( '.preview-image' ).append( '<img src="https://via.placeholder.com/400x400">' );
  // Disable another click on reset, preview, and copy buttons
  $( '.button--preview, .button--reset, .button--copy:not(.preview-image)' ).addClass( 'button--disabled' );
});

}); // Close doc ready