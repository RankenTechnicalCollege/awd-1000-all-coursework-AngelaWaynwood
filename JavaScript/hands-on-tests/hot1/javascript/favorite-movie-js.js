let movies = ["Dredd (2012)", "Die Hard", "The Hunger Games"];
    const button = document.getElementById("printBtn");
    const outputList = document.getElementById("outputList");
    const input = document.getElementById("add");
    

    button.addEventListener("click", function() {
      outputList.innerHTML = ""; 

      movies.push(input.value);

      for (let i = 0; i < movies.length; i++) {
        outputList.innerHTML += `<li>${movies[i]}</li>`;
      }
    });


