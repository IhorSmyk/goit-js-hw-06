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

const dish = document.querySelector('#ingredients')

const liArr = []

ingredients.forEach(el => {
  const list = document.createElement('li')
  list.className = 'item'
  list.textContent = el
  liArr.push(list)
})

dish.append(...liArr)
console.log(dish);

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