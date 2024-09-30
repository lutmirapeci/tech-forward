// Here we select all the forms we want to apply custom Bootstrap validation styles to
const forms = document.querySelectorAll(".needs-validation");

// we loop through each form we find
forms.forEach(function (form) {
  form.addEventListener(
    "submit",
    function (event) {
      // Check if the form is valid
      if (!form.checkValidity()) {
        // If not valid, stop the form from submitting
        event.preventDefault();
        event.stopPropagation();
      }

      // Add Bootstrap's validation styles to the form
      form.classList.add("was-validated");
    },
    false
  );
});

// Get the arrival date input field
const arrivalDate = document.getElementById("arrivalDate");

// and if it exists, set the minimum selectable date to today
arrivalDate
  ? arrivalDate.setAttribute("min", new Date().toISOString().split("T")[0])
  : console.log("Arrival date input not found.");
