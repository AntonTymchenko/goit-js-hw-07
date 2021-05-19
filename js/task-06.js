const input = document.querySelector("input#validation-input");

input.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length < input.getAttribute("data-length")) {
    input.classList.remove("valid");
    input.classList.add("invalid");
    return;
  }
  if (event.currentTarget.value.length === +input.getAttribute("data-length")) {
    input.classList.remove("invalid");
    input.classList.add("valid");
    return;
  }
  if (event.currentTarget.value.length === 0) {
    input.classList.remove("invalid");
    input.classList.remove("valid");
    return;
  }
}
