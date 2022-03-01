$(document).ready(function () {
  function branch() {
    const animal = parseInt(
      prompt(
        "Which animal did you want to read about? Enter 1 for Cheetahs, 2 for Elephants, or 3 for Foxes"
      )
    );

    if (animal === 1) {
      $("#cheetahs").show();
      $("#elephants").hide();
      $("#foxes").hide();
    } else if (animal === 2) {
      $("#cheetahs").hide();
      $("#elephants").show();
      $("#foxes").hide();
    } else if (animal === 3) {
      $("#cheetahs").hide();
      $("#elephants").hide();
      $("#foxes").show();
    } else {
      $("#cheetahs").show();
      $("#elephants").hide();
      $("#foxes").hide();
    }
  }

  $("#click").on("click", branch);

  branch();
});
