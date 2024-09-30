//note to the prof. Erjoni: If you put a past date here you
// can see something cool I thought off (Not impressing though xp).

const eventDate = new Date("2024-10-24T00:00:00");
let countdownInterval;

// Function to calculate the difference between the event date and the current date
const calculateTimeDifference = () => {
  const now = new Date();
  return eventDate - now;
};

// Function to format the time difference (in milliseconds)
// and convert it into days, hours, minutes, and seconds
const formatTime = (timeDifference) => {
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

// Function to update the DOM to show the countdown
const updateDOM = ({ days, hours, minutes, seconds }) => {
  const daysElement = document.getElementById("days");
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");
  if (daysElement) daysElement.innerText = days;
  if (hoursElement) hoursElement.innerText = hours;
  if (minutesElement) minutesElement.innerText = minutes;
  if (secondsElement) secondsElement.innerText = seconds;
};

// Function to update the countdown
const updateCountdown = () => {
  const timeDifference = calculateTimeDifference();

  // when the countdown has finished:

  if (timeDifference <= 0) {
    clearInterval(countdownInterval);
    updateDOM({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    // we hide the pulsing cards
    const countdownContainer = document.querySelector(".countdown-container");
    if (countdownContainer) countdownContainer.style.display = "none";

    // we show a mesage to the user
    const eventFinishedMessage = document.getElementById("eventFinishedMessage");
    if (eventFinishedMessage) eventFinishedMessage.style.display = "block";

    // we disable all "Register Now" buttons
    const registerButtons = document.querySelectorAll(".btn-primary");
    registerButtons.forEach((button) => {
      button.disabled = true;
      button.innerText = "Registration Closed";
    });

    // we hide all the "Register" links at navbars and at the footers
    const registerLinks = document.querySelectorAll(".hide-register");
    registerLinks.forEach((link) => (link.style.display = "none"));

    return;
  }

  const formattedTime = formatTime(timeDifference);
  updateDOM(formattedTime);
};

countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();
