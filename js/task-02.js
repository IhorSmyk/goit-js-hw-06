/*HTML містить порожній список ul#ingredients.

<ul id="ingredients"></ul>

JavaScript містить масив рядків.

Напиши скрипт, який для кожного елемента масиву ingredients:

    Створить окремий елемент <li>.
     Обов'язково використовуй метод document.createElement().
    Додасть назву інгредієнта як його текстовий вміст.
    Додасть елементу клас item.
    Після чого, вставить усі <li>
     за одну операцію у список ul#ingredients. 
     */


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const plate = document.querySelector('#ingredients');
const dish = [];

for (let i = 0; i < ingredients.length; i++) {
  let li = document.createElement("li");
  li.className = "item";
  li.textContent = ingredients[i];
  dish.push(li);
}

plate.append(...dish);


// const ingredientsEl = document.querySelector('#ingredients');
// console.log(ingredientsEl);
// function createIngredientsEl() {
//   const ingredientsList = ingredients.map(el => {
//     const list = document.createElement('li');
//     list.className = 'item';
//     list.textContent = el;
//     return list;
//   });
//   return ingredientsEl.append(...ingredientsList); 
// }
// createIngredientsEl()