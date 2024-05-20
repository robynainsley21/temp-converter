const domElements = {
  celcius: document.getElementById("celcius"),
  fahrenheit: document.getElementById("fahrenheit"),
  convertBtn: document.querySelector("[convert-btn]"),
  errorDisplay: document.querySelector("[display]"),
  clearCelcius: document.querySelector('[clearCelcius]'),
  clearFah: document.querySelector('[clearFah]'),
};

domElements.convertBtn.addEventListener("click", () => {
  let celciusValue = +domElements.celcius.value;
  let fahrenheitValue = +domElements.fahrenheit.value;

  if(!celciusValue && !fahrenheitValue){
    domElements.errorDisplay.textContent =
    "Error: Please enter a value";

  } else if (celciusValue && fahrenheitValue) {
    domElements.errorDisplay.textContent =
      "Error: Please clear a field";
  } else if (celciusValue) {
    let fahCalc = parseFloat(celciusValue * (9 / 5) + 32).toFixed(2);

    domElements.fahrenheit.value = fahCalc;
    domElements.errorDisplay.textContent = "";
  } else if (fahrenheitValue) {
    let celciusCalc = parseFloat((fahrenheitValue - 32) * (5 / 9)).toFixed(2);
    domElements.celcius.value = celciusCalc;
    domElements.errorDisplay.textContent = "";
  } else console.log("Error");
});

domElements.clearCelcius.addEventListener('click', () => {
    domElements.celcius.value = ''
domElements.errorDisplay.textContent = ''
}


)

domElements.clearFah.addEventListener('click', () => {
    domElements.fahrenheit.value = ''
    domElements.errorDisplay.textContent = ''
})
