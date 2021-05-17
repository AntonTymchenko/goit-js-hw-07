const input = document.querySelector("input#validation-input");

input.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length < input.getAttribute("data-length")) {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
  if (event.currentTarget.value.length >= input.getAttribute("data-length")) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  }
  if (event.currentTarget.value.length === 0) {
    input.classList.remove("invalid");
    input.classList.remove("valid");
  }
}
