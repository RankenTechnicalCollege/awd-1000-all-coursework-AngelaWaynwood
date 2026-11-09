const favoriteMovies = ["Dredd(2012)", "Die Hard", "Hunger Games"];

const movieInput = document.getElementById("movie");
const button = document.getElementById("addMovieBtn");
const listContainer = document.getElementById("favorites");

let mov = favoriteMovies.length;
let text = "";



  for (let i = 0; i < mov; i++) {
    listContainer.innerHTML += (favoriteMovies[i] + "<br>");
  }

document.getElementById("favorites").innerHTML = text;