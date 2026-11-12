const button = document.getElementById("submit");



function verifyAge() {
  const input = document.getElementById("input").value;
  button.addEventListener("click", verifyAge());
  const age = parseInt(input, 1);

  if (!age || isNaN(age)) {
    window.alert("Please enter your age!");
  } else if (age >= 21) {
    window.alert("Welcome to the venue!");
  } else if (age < 1) {
    window.alert("Age out of range!");
  } else if (age > 200) {
    window.alert("Age out of range!");
  } else (age < 21); {
    window.alert("You're not old enough!");
  }
}