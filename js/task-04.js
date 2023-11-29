const form = document.querySelector(".login-form");
form.addEventListener("submit", startSubmit);

const user = {};

function startSubmit(event) {
  event.preventDefault();
  const formField = event.target;
  const email = formField.elements.email.value;
  const password = formField.elements.password.value;
  if (email === "" || password === "") {
    alert("All form fields must be filled in");
  } else {
    user.email = email.trim();
    user.password = password.trim();
    console.log(user);
  }

  formField.reset();
}
