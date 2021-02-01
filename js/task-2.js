// Задание 2
// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS есть массив строк.

// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM-узлов используй document.createElement().

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];
const ulIngredients = document.querySelector('ul#ingredients');
ulIngredients.appendChild(document.createElement('h2')).innerHTML = 'Ингридиенты:';
ulIngredients.style.color = 'blue';
for (const item of ingredients) { ulIngredients.appendChild(document.createElement('li')).innerHTML = item; }
// альтернатива циклу метод map
// ingredients.map(function (element) {
//     return liIngredients.appendChild(document.createElement('ul')).classList.add(element);
// });


console.log(ulIngredients);