// Задание 3
// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.

// <ul id="gallery"></ul>
// Используй массив объектов images для создания тегов img вложенных в li.
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.
// const images = [
//   {
//     url:
//       'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
// ];




// ***************Вариант решения №1***********************
import imagesObj from './images.js';
const ulGallery = document.querySelector('ul#gallery');
ulGallery.className = 'js-gallery';
const elementLi = imagesObj.map(el => `<li class="js-gallery_li"><img src=${el.url} alt=${el.alt} class="js-img"></li>`).join('');
console.log(elementLi);
ulGallery.insertAdjacentHTML('beforeend', elementLi);

// ***************Вариант решения №2***********************
// import imagesObj from './images.js';

// const createImages = img => {
//     const liGallery = document.createElement('li');
//     liGallery.classList.add('js-gallery_li');

//     const imgGallery = document.createElement('img');
//     imgGallery.src = img.url;
//     imgGallery.alt = img.alt;
//     imgGallery.width = 400;

//     liGallery.append(imgGallery);
//     return liGallery;

// }
// const imagesLi = imagesObj.map(img => createImages(img));
// const ulGallery = document.querySelector('ul#gallery');
// ulGallery.className = 'js-gallery';
// ulGallery.append(...imagesLi);


// ***************Вариант решения №3***********************
// const ulGallery = document.querySelector('ul#gallery');
// ulGallery.className = 'js-gallery';
// for (const item of imagesObj) {
//     const liGallery = ulGallery.appendChild(document.createElement('li'));
//     liGallery.className = 'js-gallery_li';
//     const imgGallery = liGallery.appendChild(document.createElement('img'));
//     imgGallery.src = item.url;
//     imgGallery.alt = item.alt;
//     imgGallery.width = 400;
// }


