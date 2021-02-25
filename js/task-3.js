import imagesObj from './images.js';
const ulGallery = document.querySelector('ul#gallery');
ulGallery.className = 'js-gallery';
const elementLi = imagesObj
  .map(
    el =>
      `<li class="js-gallery_li"><img src=${el.url} alt=${el.alt} class="js-img"></li>`,
  )
  .join('');
console.log(elementLi);
ulGallery.insertAdjacentHTML('beforeend', elementLi);
