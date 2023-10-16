let output = document.getElementById("output");

function appendToOutput(value) {
  if (output.innerText === "0" || output.innerText === "Error") {
    output.innerText = value;
  } else {
    output.innerText += value;
  }
}

function clearOutput() {
  output.innerText = "0";
}

function calculate() {
  try {
    output.innerText = eval(output.innerText);
  } catch (error) {
    output.innerText = "Error";
  }
}
