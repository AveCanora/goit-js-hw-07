const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ulIngredients = document.querySelector('ul#ingredients');
ulIngredients.appendChild(document.createElement('h2')).innerHTML =
  'Ингридиенты:';
const liElements = ingredients.map(function (element) {
  const liEl = document.createElement('li');
  liEl.innerHTML = element;
  return liEl;
});
ulIngredients.append(...liElements);
