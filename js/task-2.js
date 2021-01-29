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
const liIngredients = document.createElement('li');
for (const item of ingredients) { liIngredients.appendChild(document.createElement('ul')).classList.add(item); }
// альтернатива циклу метод map
// ingredients.map(function (element) {
//     return liIngredients.appendChild(document.createElement('ul')).classList.add(element);
// });


console.log(liIngredients);