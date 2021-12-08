const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach(element => {
const itemEl = document.createElement('li')
itemEl.classList.add('item');
itemEl.textContent = element
console.log(itemEl);
const ingredientsEl = document.querySelector('#ingredients')
ingredientsEl.append(itemEl)
});


