// Ошибка заполнения
console.log("index ON");
const formEmail = document.querySelector(".registration-form");
const userEmail = formEmail.querySelector(".field-email");
const errorMessage = formEmail.querySelector(".error-message");
console.log("userEmail \n " + userEmail.name);
formEmail.addEventListener("submit", function (evt) {
  evt.preventDefault();
  console.log("value -> \n " + userEmail.value);
  if (!userEmail.value) {
    console.log("Error");
    userEmail.classList.remove("email-error");
    errorMessage.classList.remove("error-message--on")
    setTimeout(function () {
      userEmail.classList.add("email-error");
      errorMessage.classList.add("error-message--on");
    }, 0);
  }
});

