// A simple jQuery script so the collapsable sections work correctly.
// It could be done better, but this is good enough.
$(document).ready(function(){
    $('.collapseable-section').click(function(){
      $('header p').toggle(1000);
    });
  });