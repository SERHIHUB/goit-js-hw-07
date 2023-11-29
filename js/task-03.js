const inputText = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");

inputText.addEventListener("input", (event) => {
  outputText.textContent = event.currentTarget.value.trim();
  if (event.currentTarget.value.trim() === "") {
    outputText.textContent = "Anonymous";
  }
});
