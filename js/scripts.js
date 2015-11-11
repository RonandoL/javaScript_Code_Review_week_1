// $(document).ready(function() {   - don't need this with js at bottom of html page
  $("#blanks form").submit(function(event) {
    var nameInput = $("input#name").val();
    var emailInput = $("input#email").val();
    var foodInput = $("input#food").val();
    var carInput = $("input#car").val();
    var petInput = $("input#pet").val();
    var colorInput = $("input#color").val();

    $(".name").text(nameInput);
    $(".email").text(emailInput);
    $(".food").text(foodInput);
    $(".car").text(carInput);
    $(".pet").text(petInput);
    $(".color").text(colorInput);

    $("#results").show();

    event.preventDefault();
  });
