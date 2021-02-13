// Задание 5
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>

const inputText = document.querySelector('[id="name-input"]');
const spanOutput = document.querySelector('[id="name-output"]');

inputText.addEventListener('input', () => {
  spanOutput.textContent = inputText.value;
  if (inputText.value === '') {
    spanOutput.textContent = 'незнакомец';
  }
});
