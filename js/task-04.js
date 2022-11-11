/**Завдання 4

Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>

    Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
    Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
    Оновлюй інтерфейс новим значенням змінної counterValue.
     */

let value = 0;

const counterRef = document.querySelector("#value")
const decrement = document.querySelector('[data-action ="decrement"]')
const increment = document.querySelector('[data-action ="increment"]')

increment.addEventListener("click", () => counterRef.textContent = ++value);
decrement.addEventListener("click", () => counterRef.textContent = --value);
