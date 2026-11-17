function submit() {
  // Get the input value
  let input = document.getElementById("input").value;

  // Validate the input
  if (input == 1) {
    alert("One is the loneliest number that you'll ever do.");
  } else if (input == 2) {
    alert("Two can be as bad as one, it's the loneliest number since the number one.");
  } else if (input == 3) {
    alert("There is no three.");
  } else if (input == "") {
    alert("Please enter a number, not a word.");
  } else {
    alert("You didn't enter a valid number.")
  }
}