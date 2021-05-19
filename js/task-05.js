const refs = {
  input: document.querySelector("input#name-input"),
  spanText: document.querySelector("span#name-output"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  const arr = event.currentTarget.value.split("");

  if (arr.every((item) => item === " ")) {
    refs.spanText.textContent = "незнакомец";
  } else if (event.currentTarget.value.length !== 0) {
    refs.spanText.textContent = event.currentTarget.value;
  }
}
