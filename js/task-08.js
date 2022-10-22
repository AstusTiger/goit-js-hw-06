const form = document.querySelector(".login-form");
const inputs = form.querySelectorAll("input");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  let alertFlag = false;
  const inputObj = {};
  inputs.forEach((input) => {
    if (!input.value) {
      alertFlag = true;
    } else {
      inputObj[input.name] = input.value;
    }
  });

  if (alertFlag) {
    alert("empty inputs detected !!!");
  } else {
    console.log(inputObj);
    form.reset();
  }
}
