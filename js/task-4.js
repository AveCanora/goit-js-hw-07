// Задание 4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

//https://developer.mozilla.org/ru/docs/web/events - ресурс для изучения событий

let counterValue = 0;
// РАЗМЕТКА ЧЕРЕЗ JS

// const body = document.querySelector('body');
// const divCounter = body.appendChild(document.createElement('div'));
// divCounter.id = 'counter';
// divCounter.className = 'js-counter';

// const buttonCounterDec = divCounter.appendChild(document.createElement('button'));
// buttonCounterDec.setAttribute('type', 'button');
// buttonCounterDec.setAttribute('data-action', 'decrement');
// buttonCounterDec.className = 'js-button';
// buttonCounterDec.innerText = '-1';

// const spanCounterDec = divCounter.appendChild(document.createElement('span'));
// spanCounterDec.id = 'value';
// spanCounterDec.innerText = counterValue;

// const buttonCounterInc = divCounter.appendChild(document.createElement('button'));
// buttonCounterInc.setAttribute('type', 'button');
// buttonCounterInc.setAttribute('data-action', 'increment');
// buttonCounterInc.className = 'js-button';
// buttonCounterInc.innerText = '+1';

const buttonCounterInc = document.querySelector('[data-action="increment"]');
const buttonCounterDec = document.querySelector('[data-action="decrement"]');
const spanCounterDec = document.querySelector('[id="value"]');
buttonCounterInc.addEventListener('click', () => {
  counterValue += 1;
  spanCounterDec.innerText = counterValue;
});
buttonCounterDec.addEventListener('click', () => {
  counterValue -= 1;
  spanCounterDec.innerText = counterValue;
});
