$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    event.preventDefault();
    var nameInput = $("input#name").val();

    $(".name").text(nameInput);

    $("#letter").show();
  });
});
