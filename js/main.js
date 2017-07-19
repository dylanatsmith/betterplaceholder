$(function () {
  var $width      = $('#width');
  var $inputWidth = $('#input-width');
  $inputWidth.on('keydown', function () {
    setTimeout(function () {
      $width.html($inputWidth.val());
    }, 0);
  });
})