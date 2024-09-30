// script to ensure navigation to registration page

const registerButtons = document.querySelectorAll(".registerButton");

registerButtons.forEach((button) => {
  button.addEventListener("click", function () {
    window.location.href = "./src/components/register.html";
  });
});
