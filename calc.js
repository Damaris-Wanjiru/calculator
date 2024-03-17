// initialize variables to store current display and result display
let currentDisplay = 0;
let resultDisplay = false;

// function to add a value to the current display
function addToDisplay(value) {
    if (currentDisplay === "0" || resultDisplay)
    // if current display is "0" or the result is altready displayed, replace it with the new value
    currentDisplay = value; 
} else {
    // otherwise concernate the new value to the current display
    currentDisplay += value;
}
 // reset the value display to false as the user entered a new value
  resultDisplay = false;
  // update the calculator display to show the new content
  updateDisplay();

  function updateDisplay() {
    const displayElement = document.getElementById("display");
    displayElement.textContent = currentDisplay;
  }
  
  function calculateResult() {
    try {
      const result = eval(currentDisplay);
      currentDisplay += "\n"+ result.toString();
      updateDisplay();
    } catch (error) {
      currentDisplay += "\nError";
      updateDisplay();
    }
    resultDisplay=true;
  }
  
  function clearLastElement() {
    currentDisplay = currentDisplay.slice(0, -1);
    if (currentDisplay === "") {
      currentDisplay = "0";
    }
    updateDisplay();
  }
  
  function clearDisplay() {
    currentDisplay = "0";
    updateDisplay();
  }
  // Attach handleOverflow to window resize event
window.addEventListener("resize", handleOverflow);

// Call handleOverflow initially to handle any overflow on page load
handleOverflow();