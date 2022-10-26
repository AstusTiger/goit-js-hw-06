const controlBox = document.querySelector("#controls");
const input = controlBox.querySelector("input");
const btnCreate = controlBox.querySelector("[data-create]");
const btnDestroy = controlBox.querySelector("[data-destroy]");
const gallery = document.querySelector("#boxes");

btnCreate.addEventListener("click", () => createBoxes(Number(input.value)));
btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  //let boxes = "";
  const boxes = [];

  console.log(amount);
  for (let i = 0; i < amount; i++) {
    // boxes += `<div  style="width:${30 + i * 10}px; height:${
    //   30 + i * 10
    // }px; background-color:${getRandomHexColor()};"></div>`;
    const div = document.createElement("div");
    div.style.width = `${30 + i * 10}px`;
    div.style.height = `${30 + i * 10}px`;
    div.style.backgroundColor = getRandomHexColor();
    console.log(div);
    boxes.push(div);
  }
  //gallery.innerHTML = boxes;
  gallery.append(...boxes);
}

function destroyBoxes() {
  gallery.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
