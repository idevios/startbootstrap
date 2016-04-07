$(function() {
  // Setup drop down menu
  $('.dropdown-toggle-room').dropdown();

  // Fix input element click problem
  $('.dropdown-room input, .dropdown-room label').click(function(e) {
    e.stopPropagation();
  });
});
