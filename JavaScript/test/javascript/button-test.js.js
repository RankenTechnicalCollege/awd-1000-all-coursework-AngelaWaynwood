const fruits = ["Apple", "Banana", "Cherry", "Date"];
    const button = document.getElementById("printBtn");
    const outputList = document.getElementById("outputList");

    button.addEventListener("click", function() {
      // Clear previous output so it doesn't duplicate on multiple clicks
      outputList.innerHTML = ""; 

      for (let i = 0; i < fruits.length; i++) {
        outputList.innerHTML += `<li>${fruits[i]}</li>`;
      }
    });