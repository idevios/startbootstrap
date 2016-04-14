$(function() {
  $('#edit-profile').on('show.bs.modal', function (e) {
      $('#user-name').val($('.user-name').html());
      $('#user-dept').val($('.user-dept').html());
      $('#user-sem').val($('.user-sem').html());
      $('#user-year').val($('.user-year').html());
      $('#user-enrollment-no').val($('.user-enrollment-no').html());
      $('#user-course').val($('.user-course').html());
      $('#user-stream').val($('.user-stream').html());
      $('#user-admission-year').val($('.user-admission-year').html());
      $('#user-dob').val($('.user-dob').html());
      $('#user-email').val($('.user-email').html());
      $('#user-phone').val($('.user-phone').html());
  })
});
