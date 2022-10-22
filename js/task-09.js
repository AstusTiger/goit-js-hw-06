function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const widget = document.querySelector('.widget')
const changeColorBtn = widget.querySelector(".change-color")
const label = widget.querySelector('.color')

changeColorBtn.addEventListener('click', changeColorHandler)

function changeColorHandler() {
  const randomColor = getRandomHexColor();
  label.innerHTML = randomColor.toUpperCase();
  document.body.style.backgroundColor = randomColor;
}



