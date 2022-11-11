/**Напиши скрипт для створення галереї зображень на підставі масиву даних.
 *  HTML містить список ul.gallery.

<ul class="gallery"></ul>

Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>.
 Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

 Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
 Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.
 */

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryRef = document.querySelector(".gallery");
const galleryEl =
  images.map(el => `<li><img class="photo" src = ${el.url}
   alt = ${el.alt} width = "500"></li>`).join('');

galleryRef.insertAdjacentHTML("beforeend", galleryEl);

galleryRef.style.display = "flex";
galleryRef.style.flexDirection = "column";
galleryRef.style.gap = "4px";













// function createGallery() {
//   const galleryEl = images.map(el => <li><img class='Photo' src = '${el.url}' alt = '${el.alt}' width = '400'></li>).join('');

//   gallery.insertAdjacentHTML('beforeend', galleryEl);
//   return gallery;
// }
// gallery.style.display = 'flex';
// gallery.style.gap = '20px';
// console.log(createGallery(images));