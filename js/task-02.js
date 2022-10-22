const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector('#ingredients')

const listOfLi = []

for (const ingredient of ingredients)
{
const li = document.createElement('li')
li.textContent = ingredient
li.classList.add('item')
listOfLi.push(li)
}


ul.append(...listOfLi);

// ul.append(...ingredients.reduce((acc, ingredient)=>{
//   const li = document.createElement('li')
//   li.textContent = ingredient
//   li.classList.add('item')
//   return [...acc, li]
// },[]))

