let counterValue = 0;
const refs = {
  buttonIncr: document.querySelector('[data-action="increment"]'),
  buttonDecr: document.querySelector('[data-action="decrement"]'),
  counter: document.querySelector("#value"),
};

refs.buttonIncr.addEventListener("click", onIncrement);
refs.buttonDecr.addEventListener("click", onDecrement);

function onIncrement() {
  counterValue += 1;
  refs.counter.textContent = counterValue;
}

function onDecrement() {
  counterValue -= 1;
  refs.counter.textContent = counterValue;
}
