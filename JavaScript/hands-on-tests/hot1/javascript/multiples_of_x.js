const printElement = document.getElementById("print");
let printX = "";

for (let i = 0; i <= 100; i += 15) {
  console.log(i);
  printX += i + ", ";
}

printElement.innerHTML = printX;