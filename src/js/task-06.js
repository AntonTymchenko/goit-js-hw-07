const input = document.querySelector("input#validation-input");

input.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length < input.getAttribute("data-length")) {
    input.classList.add("invalid");
  }
  input.classList.add("valid");
}
