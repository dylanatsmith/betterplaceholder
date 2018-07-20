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
$( 'input' ).on( 'change keyup paste', function () {
  $( '.button--preview, .button--reset, .button--copy' ).removeClass( 'button--disabled' );
});

// Updates value for width every time a key is entered in that field
$inputWidth.on( 'change keyup paste', function () {
  $width.html($inputWidth.val());
});

// Updates value for height every time a key is entered in that field
$inputHeight.on( 'change keyup paste', function () {
  $height.html('x' + $inputHeight.val());
});

// Updates value for background colour every time a key is entered in that field
$inputBgcolour.on('change keydown paste', function () {
  $bgcolour.html( '/' + $inputBgcolour.val().replace( '#', '' ) );
  $textcolour.html('/' + $inputTextcolour.val().replace( '#', '' ) );
});

// Updates value for text colour every time a key is entered in that field
$inputTextcolour.on('change keydown paste', function () {
  $bgcolour.html( '/' + $inputBgcolour.val().replace( '#', '' ) );
  $textcolour.html('/' + $inputTextcolour.val().replace( '#', '' ) );
});

// Switches background and text colours on click
$( '.colour-swap' ).click(function() {
  var temp = $($inputTextcolour).val();
  $($inputTextcolour).val($($inputBgcolour).val());
  $($inputBgcolour).val(temp);
  // Update URL with new values
  $bgcolour.html( '/' + $inputBgcolour.val().replace( '#', '' ) );
  $textcolour.html('/' + $inputTextcolour.val().replace( '#', '' ) );
  // Enable preview button
  $( '.button--preview, .button--reset, .button--copy' ).removeClass( 'button--disabled' );
});

// Updates value for string every time a key is entered in that field
$inputString.on('change keydown paste', function () {
  // Change spaces for plus signs
  var str = $inputString.val();
  var newStr = '?text=' + str.replace( /\s+/g, '+' );
  // Display string in URL
  $string.html( newStr );
});

// Updates value for filetype every time a new radio button is clicked
$('input[name=filetype]').on('change', function () {
    $filetype.html( '.' + $('input[name=filetype]:checked').val() );
});

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
  $( '#bgcolour, #textcolour, #filetype, #string' ).empty();
  $( '#width' ).text( '600');
  $( '#height' ).text( 'x400');
  // Reset dimensions and colours to defaults
  $( '#input-width' ).val( '600' );
  $( '#input-height' ).val( '400' );
  $( '#input-bgcolour' ).val( '#cccccc' );
  $( '#input-textcolour' ).val( '#969696' );
  // Reset colour swatches
  $( '#input-bgcolour' ).parent().find( '.minicolors-swatch-color' ).attr( 'style', 'background-color: rgb(204, 204, 204); opacity: 1;' );
  $( '#input-textcolour' ).parent().find( '.minicolors-swatch-color' ).attr( 'style', 'background-color: rgb(150, 150, 150); opacity: 1;' );
  // Remove existing preview image
  $( '.preview-image' ).empty();
  // Add new image with new URL
  $( '.preview-image' ).append( '<img src="https://via.placeholder.com/600x400">' );
  // Disable another click on reset, preview, and copy buttons
  $( '.button--preview, .button--reset, .button--copy:not(.preview-image)' ).addClass( 'button--disabled' );
});

}); // Close doc ready