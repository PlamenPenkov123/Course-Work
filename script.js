function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var date = document.getElementById("date").value;
  var time = document.getElementById("time").value;

  // Regular expression for email validation
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  var passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  var today = new Date().toISOString().split("T")[0];

  if (name === "") {
    alert("Please enter your full name, bro!");
    return false;
  }

  if (!emailPattern.test(email)) {
    alert("Invalid email address, bro! Make sure it's legit.");
    return false;
  }

  if (!passwordPattern.test(password)) {
    alert("Your password is invalid, bro!");
    return false;
  }

  if (date < today) {
    alert("Come on bro! Don't choose a date that's in the past!");
    return false;
  }
  if (time === "") {
    alert("Pick your prime time, bro!");
    return false;
  }

  return true;
}
function ShowMenu() {
  var home = document.getElementById("Home");
  var appointment = document.getElementById("Appointment");
  var exercise = document.getElementById("Excercise");

  if (
    home.style.display === "none" &&
    appointment.style.display === "none" &&
    exercise.style.display === "none"
  ) {
    home.style.display = "block";
    appointment.style.display = "block";
    exercise.style.display = "block";
  } else {
    home.style.display = "none";
    appointment.style.display = "none";
    exercise.style.display = "none";
  }
}
