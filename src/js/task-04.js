const refs = {
  btnDecrement: document.querySelector('[data-action="decrement"]'),
  btnIncrement: document.querySelector('[data-action="increment"]'),
  valueOfCounter: document.querySelector("span#value"),
};

let counterValue = 0;

refs.btnIncrement.addEventListener("click", onBtnDecrement);
refs.btnDecrement.addEventListener("click", onBtnIncrement);

function onBtnDecrement(event) {
  if (event) {
    refs.valueOfCounter.textContent = counterValue += 1;
  }
}
function onBtnIncrement(event) {
  if (event) {
    refs.valueOfCounter.textContent = counterValue -= 1;
  }
}
