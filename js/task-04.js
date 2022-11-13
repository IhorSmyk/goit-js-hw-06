
let value = 0;

const counterRef = document.querySelector('#value');
const decrement = document.querySelector('[data-action ="decrement"]');
const increment = document.querySelector('[data-action ="increment"]');

increment.addEventListener('click', () => (counterRef.textContent = ++value));
decrement.addEventListener('click', () => (counterRef.textContent = --value));
