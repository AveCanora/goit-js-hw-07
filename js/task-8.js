// Задание 8 - дополнительное, выполнять не обязательно
// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div,
// сколько указано в amount и добавляет их в div#boxes.
// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>

const divBoxes = document.querySelector('div#boxes');
const btnRender = document.querySelector('[data-action="render"]');
const btnDestroy = document.querySelector('[data-action="destroy"]');
const inputNumber = document.querySelector('[type="number"]');

let widthDiv = 30;
let heightDiv = 30;

//функция создания дочерних элементов
function createBoxes(amount) {

    for (let i = 0; i < amount; i++) {
        this.appendChild(document.createElement('div')).style = `
        width: ${widthDiv}px;
        height: ${heightDiv}px; background-color: 
        rgb(${Math.floor(Math.random() * 100)}%, ${Math.floor(Math.random() * 100)}%, ${Math.floor(Math.random() * 100)}%);
        margin-left: auto;
        margin-right: auto;`;
        widthDiv += 10;
        heightDiv += 10;
    }
}
//функция удаления
function destroyBoxes() {
    this.innerHTML = '';
}
//обработка события нажатия на кнопку "Создать"
btnRender.addEventListener('click', () => {
    createBoxes.call(divBoxes, inputNumber.valueAsNumber);
});
//обработка события нажатия на кнопку "Очистить"
btnDestroy.addEventListener('click', () => {
    destroyBoxes.call(divBoxes);
    widthDiv = 30;
    heightDiv = 30;
});









