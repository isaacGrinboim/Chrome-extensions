// contentScript.js

function clickSubmitButton() {
  const submitButton = document.querySelector('input[type="submit"].proceed');
  if (submitButton) {
    submitButton.click();
  }
}

function repeatedlyClickSubmitButton(times) {
  let count = 0;

  function clickLoop() {
    if (count < times) {
      clickSubmitButton();
      count++;
      setTimeout(clickLoop, 1000); // Adjust the interval (in milliseconds) between clicks here, currently set to 1 second (1000 ms).
    }
  }

  clickLoop();
}

// Call the function to click the submit button three times (3 times in a loop)
repeatedlyClickSubmitButton(3);
