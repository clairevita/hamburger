$(document).ready(function () {
  
  $("#devour").on("click", function (event) {
    var id = $(this).data("id");
    var eat = { devoured: true };
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: eat
    }).then(
      function () {
        location.reload();
      }
    );
  });

  $(".plate").on("submit", function (event) {
    event.preventDefault();
    const recipe = {
      burger_name: $("#burgerName").val().trim(),
      devoured: 0
    }
    console.log(recipe.burger_name, recipe.devoured);
    $.ajax("/api/burgers", {
      type: "POST",
      data: recipe
    }).then(function () {
      console.log("Plated Burger!");
      location.reload();
    });
  });
});
