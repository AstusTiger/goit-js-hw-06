let counterValue = 0;
const buttonIncrement = document.querySelector('[data-action="increment"]');
const buttonDecrement = document.querySelector('[data-action="decrement"]');
const counter = document.querySelector("#value");

buttonIncrement.addEventListener("click", onIncrement);
buttonDecrement.addEventListener("click", onDecrement);

function onIncrement() {
  counterValue += 1;
  counter.textContent = counterValue;
}

function onDecrement() {
  counterValue -= 1;
  counter.textContent = counterValue;
}
// buttonIncrement.addEventListener("click", () => myClickHandler(1));
// buttonDecrement.addEventListener("click", () => myClickHandler(-1));

// function myClickHandler(value) {
//   counterValue += value;
//   counter.textContent = counterValue;
// }
