// Business Logic
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}




  // User Interface Logic
  function handleCalc(event) {
    event.preventDefault();
    const num1 = parseInt(document.getElementById("num1Input").value);
    const num2 = parseInt(document.getElementById("num2Input").value);
    const operator = document.getElementById("operator").value;

    let calculation;
    if (operator === "Add") {
      calculation = add(num1, num2);
    } else if (operator === "Subtract") {
      calculation = subtract(num1, num2);
    } else if (operator === "Multiply") {
      calculation = multiply(num1, num2);
    } else if (operator === "Divide") {
      calculation = divide(num1, num2);
    }

    document.getElementById("output").innerText = calculation;
  }

window.addEventListener("load", function () {
  document.getElementById("calc-form").addEventListener("submit", handleCalc);
});