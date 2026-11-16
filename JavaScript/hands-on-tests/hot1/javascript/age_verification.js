const button = document.getElementById("submit");



function verifyAge() {
  const input = document.getElementById("input").value;
  const age = parseInt(input, 10);

  if (input === "") {
    alert("Please enter your age!");
  } else if (age >= 21) {
    alert("Welcome to the venue!");
  } else if (age < 1) {
    alert("Age out of range!");
  } else if (age > 200) {
    alert("Age out of range!");
  } else {
    alert("You're not old enough!");
  }
}

button.addEventListener("click", verifyAge());