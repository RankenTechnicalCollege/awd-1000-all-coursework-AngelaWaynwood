const favoriteMovies = ["Dredd(2012)", "Die Hard", "Hunger Games"];


const movieInput = document.getElementById("movie");
const button = document.getElementById("printAry");
const output = document.getElementById("favorites");


let mov = favoriteMovies.length;
let text = "";


function addMovie() {
  const input = document.getElementById("movieInput");
  const movieName = input.value.trim();


  if (movieName) {
    movies.push(movieName);
    console.log("Updated favoriteMovies array:", favoriteMovies);
    input.value = "";
  }
}


button.addEventListener("click", addMovie()); {
  output.innerHTML = "";


  for (let i = 0; i < mov; i++) {
    output += `<li>${favoriteMovies[i]}</li>`;
   
  }
}


document.getElementById("favorites").innerHTML = text;
