let displayValue = "0";
let pendingValue = "";
let operation = null;

function updateDisplay() {
  document.getElementById("display").innerText = displayValue;
}

function appendNumber(number) {
  if (displayValue === "0") {
    displayValue = number;
  } else {
    displayValue += number;
  }
  updateDisplay();
}

function clearDisplay() {
  displayValue = "0";
  pendingValue = "";
  operation = null;
  updateDisplay();
}

function setOperation(op) {
  if (operation !== null) {
    calculate();
    pendingValue = displayValue;
    displayValue = "0";
  } else {
    pendingValue = displayValue;
    displayValue = "0";
  }
  operation = op;
}

function calculate() {
  const currentValue = parseFloat(displayValue);
  const pending = parseFloat(pendingValue);

  if (operation === "+") {
    displayValue = (pending + currentValue).toString();
  } else if (operation === "-") {
    displayValue = (pending - currentValue).toString();
  } else if (operation === "*") {
    displayValue = (pending * currentValue).toString();
  } else if (operation === "/") {
    if (currentValue === 0) {
      displayValue = "Error";
    } else {
      displayValue = (pending / currentValue).toString();
    }
  }

  pendingValue = "";
  operation = null;
  updateDisplay();
}

updateDisplay();
