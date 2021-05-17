const refs = {
  input: document.querySelector("input#name-input"),
  spanText: document.querySelector("span#name-output"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  refs.spanText.textContent = event.currentTarget.value;
  if (event.currentTarget.value.length === 0) {
    refs.spanText.textContent = "незнакомец";
  }
}
