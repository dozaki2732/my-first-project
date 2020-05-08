$("#job1").click(function () {
  $("#des1").toggle();
  $("#job1").css("color", "#ad1a1a");
});
$("#job2").click(function () {
  $("#des2").toggle();
  $("#job2").css("color", "#ad1a1a");
});
$("#job3").click(function () {
  $("#des3").toggle();
  $("#job3").css("color", "#ad1a1a");
});
//email button//
$("#professional").click(function () {
  $("#email-button").html("Email Professional Request");
});
$("#personal").click(function () {
  $("#email-button").html("Email Personal Request");
});
//check box//
$("#checkk-box").click(function () {
  $("#check-box").removeClass("is-invalid");
  $("#email-button").removeAttr("disabled");
});
//submit email//
$("#email-button").click(function () {
  window.open(
    "mailto:ozaki@aol.com?subject=Hello&body=" + $("#email-submit").val(),
    "_blank"
  );
});
