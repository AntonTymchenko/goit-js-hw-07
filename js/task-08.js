const refs = {
  divBoxes: document.querySelector("div#boxes"),
  input: document.querySelector("input"),
  btnRender: document.querySelector("button[data-action='render']"),
  btnClear: document.querySelector("button[data-action='destroy']"),
};

let amount;
refs.input.addEventListener("input", onInput);

function onInput(event) {
  if (event) amount = refs.input.value;
}

refs.btnClear.addEventListener("click", () => (refs.divBoxes.innerHTML = ""));
refs.btnRender.addEventListener("click", createBoxes);

function createBoxes() {
  const divArray = [];
  refs.divBoxes.innerHTML = "";
  for (let i = 0; i < refs.input.value; i += 1) {
    const div = document.createElement("div");
    div.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(
      0,
      255
    )}, ${getRandom(0, 255)})`;

    div.style.width = 30 + "px";
    div.style.height = 30 + "px";

    if (i !== 0) {
      div.style.width = parseInt(div.style.width) + 10 * i + "px";
      div.style.height = parseInt(div.style.height) + 10 * i + "px";
    }
    divArray.push(div);
  }
  refs.input.value = "";
  refs.divBoxes.append(...divArray);
}

function getRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}
