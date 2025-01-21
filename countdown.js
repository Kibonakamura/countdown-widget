(function () {
  const endDate = new Date();
  endDate.setHours(endDate.getHours() + 24); // Default: 24 hours

  const timerElement = document.getElementById("timer");

  function updateTimer() {
    const now = new Date();
    const timeLeft = endDate - now;

    if (timeLeft > 0) {
      const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
      const seconds = Math.floor((timeLeft / 1000) % 60);

      timerElement.innerText = `${hours}h ${minutes}m ${seconds}s`;
    } else {
      timerElement.innerText = "Time's up!";
      clearInterval(timerInterval);
    }
  }

  const timerInterval = setInterval(updateTimer, 1000);
  updateTimer();
})();
