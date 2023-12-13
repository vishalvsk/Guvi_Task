let count = 10;

function startCountdown() {
  const countdownDisplay = document.getElementById("countdownDisplay");

  function countdown() {
    countdownDisplay.textContent = count;
    count--;

    if (count >= 0) {
      setTimeout(countdown, 1000);
    } else {
      displayIndependenceDay();
    }
  }

  countdown();
}

function displayIndependenceDay() {
  const countdownDisplay = document.getElementById("countdownDisplay");
  countdownDisplay.textContent = "Happy Independence Day!";
}

startCountdown();
