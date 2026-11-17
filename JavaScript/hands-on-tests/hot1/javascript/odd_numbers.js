const printElement = document.getElementById("print");
let oddNumberCon = [];

  for (let i = 1; i <= 100; i += 2) {
    oddNumberCon.push(i);
  }

printElement.innerHTML = oddNumberCon.join(", ");
