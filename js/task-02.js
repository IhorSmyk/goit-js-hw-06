const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const plate = document.querySelector('#ingredients');
const dish = [];

for (let i = 0; i < ingredients.length; i++) {
  let li = document.createElement('li');
  li.className = 'item';
  li.textContent = ingredients[i];
  dish.push(li);
}

plate.append(...dish);
