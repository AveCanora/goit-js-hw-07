const inputText = document.querySelector('[id="font-size-control"]');
const spanText = document.querySelector('[id="text"]');

spanText.style.fontSize = inputText.value + 'px';
spanText.style.color = `rgb(100%, ${inputText.value}%, 100%)`;

inputText.addEventListener('input', () => {
  spanText.style.fontSize = inputText.value + 'px';
  spanText.style.color = `rgb(100%, ${inputText.value}%, 100%)`;
});
