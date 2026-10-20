//Name: Layne Heim
//File Name: script.js
//Date: 10/20/2026

function myFunction() {
  var x = document.querySelector(".myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function mouseOn() {
  const x = document.querySelector("a");
  x.style.backgroundColor = "#ddd";
  x.style.color = rgb(95, 130, 163);
}

function mouseOff() {
   const x = document.querySelector("a");
  x.style.backgroundColor = "#053c5d";
  x.style.color = "#90caf1";
}