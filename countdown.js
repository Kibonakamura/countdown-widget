// Countdown logic
(function () {
  const endDate = new Date();
  endDate.setHours(endDate.getHours() + 24); // Default: 24 hours

  const timerElement = document.getElementById("timer");
  const quoteElement = document.getElementById("quote");

  // Trump-related quotes
  const quotes = [
    { text: "I can end this war in 24 hours. It's not that difficult.", source: "CNN Town Hall, May 2023" },
    { text: "Peace through strength. Putin would’ve never invaded if I were president.", source: "Interview, March 2022" },
    { text: "You have to get people in a room and knock heads.", source: "Rally in New Hampshire, March 2023" },
    { text: "Nobody knows more about this than me.", source: "Press Conference, February 2018" },
    { text: "This war could end tomorrow if we had the right leadership.", source: "Truth Social Post, April 2023" },
  ];

  // Randomly select a quote
  function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    quoteElement.innerText = `"${quote.text}" — ${quote.source}`;
  }

  function updateTimer() {
    const now = new Date();
    const timeLeft = endDate - now;

    if (timeLeft > 0) {
      const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
      const seconds = Math.floor((timeLeft / 1000) % 60);

      timerElement.innerText = `${hours}h ${minutes}m ${seconds}s`;
    } else {
      timerElement.innerText = "Time's up! Is the war over?";
      clearInterval(timerInterval);
    }
  }

  // Run the timer and quote updater
  const timerInterval = setInterval(updateTimer, 1000);
  updateTimer();
  displayRandomQuote();
})();
