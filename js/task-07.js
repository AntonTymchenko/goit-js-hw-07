const refs = {
  input: document.querySelector("input#font-size-control"),
  textSpan: document.querySelector("span#text"),
};

refs.input.addEventListener("input", onInput);

function onInput(event) {
  refs.textSpan.style.fontSize = refs.input.value + "px";
}
