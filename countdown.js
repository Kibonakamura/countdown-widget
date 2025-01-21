(function () {
  // Set dates for the counters
  const startDate = new Date('2025-01-20T17:00:00Z'); // 12:00 PM EST in UTC
  const durationInHours = 24; // Duration for Ukraine countdown
  const endDate = new Date(startDate.getTime() + durationInHours * 60 * 60 * 1000);

  const presidencyEndDate = new Date('2029-01-20T17:00:00Z'); // End of Trump's presidency

  // DOM elements
  const timerElement = document.getElementById("timer");
  const labelElement = document.getElementById("countdown-label");
  const presidencyTimerElement = document.getElementById("presidency-timer");
  const presidencyLabelElement = document.getElementById("presidency-label");
  const quoteElement = document.getElementById("quote");

  // Trump-related quotes
  const quotes = [
    { text: "I can end this war in 24 hours. It's not that difficult.", source: "CNN Town Hall, May 2023" },
    { text: "Peace through strength. Putin would’ve never invaded if I were president.", source: "Interview, March 2022" },
    { text: "You have to get people in a room and knock heads.", source: "Rally in New Hampshire, March 2023" },
    { text: "Nobody knows more about this than me.", source: "Press Conference, February 2018" },
    { text: "This war could end tomorrow if we had the right leadership.", source: "Truth Social Post, April 2023" },
  ];

  // Function to display a random Trump quote
  function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    quoteElement.innerText = `"${quote.text}" — ${quote.source}`;
  }

  // Function to calculate and display the Ukraine countdown
  function updateUkraineCountdown() {
    const now = new Date();
    const timeLeft = endDate - now;

    if (timeLeft > 0) {
      const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
      const seconds = Math.floor((timeLeft / 1000) % 60);

      timerElement.innerText = `${hours}h ${minutes}m ${seconds}s remaining`;
      timerElement.style.color = "green";
    } else {
      const timeElapsed = Math.abs(timeLeft);
      const hours = Math.floor((timeElapsed / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeElapsed / (1000 * 60)) % 60);
      const seconds = Math.floor((timeElapsed / 1000) % 60);
      const days = Math.floor(timeElapsed / (1000 * 60 * 60 * 24));

      timerElement.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s since deadline`;
      timerElement.style.color = "red";
      labelElement.innerText = "Trump2's Countdown Deadline Missed!";
    }
  }

  // Function to calculate and display the presidency countdown
  function updatePresidencyCountdown() {
    const now = new Date();
    const timeLeft = presidencyEndDate - now;

    if (timeLeft > 0) {
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
      const seconds = Math.floor((timeLeft / 1000) % 60);

      presidencyTimerElement.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s remaining`;
      presidencyTimerElement.style.color = "blue";
    } else {
      presidencyTimerElement.innerText = "Trump's Presidency is Over!";
      presidencyTimerElement.style.color = "gray";
      presidencyLabelElement.innerText = "Presidency Countdown Completed!";
    }
  }

  // Start the timers
  setInterval(() => {
    updateUkraineCountdown();
    updatePresidencyCountdown();
  }, 1000);

  // Rotate quotes every X minutes (e.g., 5 minutes)
  const QUOTE_INTERVAL = 5 * 60 * 1000; // 5 minutes in milliseconds
  setInterval(displayRandomQuote, QUOTE_INTERVAL);

  // Initialize the first quote and timers
  displayRandomQuote();
})();
