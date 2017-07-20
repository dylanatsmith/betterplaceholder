// Updates value for width every time a key is entered in that field
$(function () {
  var $width      = $('#width');
  var $inputWidth = $('#input-width');
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

// 