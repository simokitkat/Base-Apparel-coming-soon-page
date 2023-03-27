//variables
const form = document.forms[0];
const inputField = document.getElementById("email");
const errorImage = document.querySelector('[alt="icon-error"]');
const errorMessage = document.querySelector("form p");
const regEx = /^\w+@\w+\.\w+$/;

form.addEventListener("submit", function (event) {
  if (inputField.value === "" || !regEx.test(inputField.value)) {
    event.preventDefault();
    inputField.classList.add("error");
    errorImage.classList.add("error");
    errorMessage.classList.add("error");
  }
});

//testing the regEx
console.log(regEx.test("janeappleseed#email.com"));
