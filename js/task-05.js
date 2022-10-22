const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInput);

function onInput() {
  if (refs.input.value !== "") {
    refs.output.textContent = refs.input.value;
    return;
  }

  refs.output.textContent = "Anonymous";
}
