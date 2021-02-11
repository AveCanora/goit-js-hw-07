// Задание 7
// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input)
// и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>


//РЕШЕНИЕ-добавлено изменение цвета - чем больше размер шрифта, тем белее буквы
const inputText = document.querySelector('[id="font-size-control"]');
const spanText = document.querySelector('[id="text"]');
inputText.addEventListener('input', () => {
    spanText.style.fontSize = inputText.value + 'px';
    spanText.style.color = `rgb(${inputText.value}%, 100%, 100%)`;
}
)
