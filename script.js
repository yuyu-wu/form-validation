const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");
const errorMsg = document.getElementsByClassName("error-message");
const success = document.getElementsByClassName("success");
const failure = document.getElementsByClassName("failure");

form.addEventListener("submit", e => {
  e.preventDefault();

  engine(username, 0, "Username cannot be blank");
  engine(email, 1, "Email cannot be blank");
  engine(password, 2, "Password cannot be blank");
});

const engine = (input, index, message) => {
  if (input.value.trim() === "") {
    errorMsg[index].innerHTML = message;
    input.style.border = "2px solid red";

    // icons
    failure[index].style.opacity = "1";
    success[index].style.opacity = "0";
  } else {
    errorMsg[index].innerHTML = "";
    input.style.border = "2px solid green";

    failure[index].style.opacity = "0";
    success[index].style.opacity = "1";
  }
};
